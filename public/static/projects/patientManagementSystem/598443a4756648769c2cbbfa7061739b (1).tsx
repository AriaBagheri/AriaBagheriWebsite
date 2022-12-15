import Head from 'next/head';
import React, {useState} from 'react';
import Page from "../../ComponentsOld/Pages/Page";
import StickyHeader from "../../ComponentsOld/StickyHeader/StickyHeader";
import {Storage, withSSRContext} from "aws-amplify";
import {getContentPathByPathHelper, listContentPathsHelper} from "../../src/graphqlHelpers";
import {ContentPath, ContentTranslation} from "../../src/API";
import WallpaperPage from "../../ComponentsOld/Pages/WallpaperPage";
import styles from "../../styles/KnowledgeBase.module.css";
import AWSImage from "../../ComponentsOld/AWSImage/AWSImage";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import useSWR from "swr";
import AudioPlayer from "../../ComponentsOld/AudioPlayer/AudioPlayer";
import {useWindowSize} from "usehooks-ts";
import {GetStaticPathsResult} from "next/types";

type KnowledgeBaseProps = {
    slug: string|string[],
    parsedSubContents: {id: string, link: string, translation: ContentTranslation}[],
    contentTranslation: ContentTranslation,
}

async function fetchAWS(awsURL: string){
    if (awsURL.startsWith("AWS:")){
        const url = await Storage.get(awsURL);
        return (await fetch(url)).text();
    }
    else {
        return awsURL;
    }
}

async function fetchAWSResource(url: string){
    if (url.startsWith("AWS:")){
        return await Storage.get(url);
    }
    else {
        return url;
    }
}

export default function KnowledgeBase({slug, parsedSubContents, contentTranslation}: KnowledgeBaseProps) {
    const {data: markdown, error: markdownError} = useSWR(contentTranslation?.text_url, fetchAWS);
    const {data: videoURL, error: videoURLError} = useSWR(contentTranslation?.video_url, fetchAWSResource);
    const {data: audioURL, error: audioURLError} = useSWR("/testMP3.mp3", fetchAWSResource);

    const [isOnVideoMode, setOnVideoMode] = useState(true);

    const windowSize = useWindowSize();

    // const thumbnail = contentTranslation?.thumbnail_url || "/wallpapers/knowledgeBaseCyberSecurityWallpaper.jpg";
    const thumbnail = "https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?cs=srgb&dl=pexels-dan-cristian-p%C4%83dure%C8%9B-1476321.jpg&fm=jpg&w=1280&h=959";

    if (!contentTranslation){
        return <></>
    }

    if (markdownError || videoURLError || audioURLError){
        return <>
            <h1>{markdownError}</h1>
            <h1>{videoURLError}</h1>
            <h1>{audioURLError}</h1>
        </>
    }

    return(
        <Page>
            <Head>
                <title>Knowledge Base</title>
                <meta name="description" content="Aria Bagheri's Knowledge Base" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <StickyHeader absolute={"KnowledgeBase"}/>
            <WallpaperPage idp={'knowledgeBase'}
                           wallpaper={thumbnail}
                           description={contentTranslation?.description || ""}
                           TitleRightComponent={<h3 className={'pushRight'}>
                               {(new Date(contentTranslation.updatedAt as any)).toLocaleDateString()}
                           </h3>}
                           title={contentTranslation?.topic}>
                {
                    contentTranslation.video_url && contentTranslation.audio_url && (
                        <div id={styles.contentTypeLinks}>
                            <p className={isOnVideoMode ? styles.active : undefined}
                               onClick={()=>{
                                   setOnVideoMode(true);
                               }}>
                                Video
                            </p>
                            <p className={!isOnVideoMode ? styles.active : undefined}
                               onClick={()=>{
                                   setOnVideoMode(false);
                               }}>
                                Audio
                            </p>
                        </div>
                    )
                }
                <div id={isOnVideoMode ? styles.videoContainer : styles.audioContainer}>
                    {
                        <div style={{
                            minWidth: windowSize.width / 3,
                            maxWidth: windowSize.width / 3,
                            display: isOnVideoMode ? "flex" : "none",
                            marginLeft: "auto",
                            flex: 1,
                            marginRight: "auto",
                        }}>
                            <iframe src={videoURL}
                                    title={contentTranslation.topic} width={windowSize.width / 3}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                        </div>
                    }
                    {
                        (!isOnVideoMode && contentTranslation.audio_url) && (
                            <AudioPlayer backgroundImage={thumbnail}>
                                <source src={audioURL} type="audio/mp3" />
                            </AudioPlayer>
                        )
                    }
                </div>
                <ReactMarkdown components={{
                    h1: "h2",
                    h2: "h3",
                    h3: "h4",
                    h4: "h5",
                    h5: "h6",
                    h6: "p",
                    p: "p",
                }} transformLinkUri={false} className={'reactMarkdown'}>{((markdown || "").substring(markdown?.indexOf("#") || 0).replaceAll("[!NOTE]", ""))}</ReactMarkdown>
                <div id={styles.relatedContentTitle} className={'subHeader'}>
                    <h3>Related Content</h3>
                </div>
                <div id={styles.relatedContents}>
                    {parsedSubContents?.map(i => {
                        return (
                            <Link href={"/knowledgeBase/" + i.link} key={i.id}>
                                <div key={i.id}
                                     className={styles.relatedContentContainer}>
                                    {
                                        !i.translation?.thumbnail_url ? (
                                            <h6>
                                                {i.translation?.topic || i.link}
                                            </h6>
                                        ) : (
                                            <AWSImage src={i.translation.thumbnail_url}
                                                      width={250 * 16 / 9} objectFit={'cover'}
                                                      height={250} layout={'fixed'}
                                            />
                                        )
                                    }
                                </div>
                            </Link>
                        )
                    })}

                </div>
            </WallpaperPage>
        </Page>
    );
}

export async function getStaticPaths({locales}: {locales: string[]}): Promise<GetStaticPathsResult>{
    const SSR = withSSRContext();
    const contentPaths = await listContentPathsHelper(SSR.API);
    // console.log(contentPaths);
    const paths = locales.flatMap(locale => [
        ...contentPaths?.filter((i: ContentPath) => i.path != '_')?.map((contentPath: ContentPath) => (
            {
                params: {
                    slug: (contentPath.path.substring(1) + "/" + contentPath.contentKey).split("/").filter(i => !!i)
                },
                locale: locale
            }
        ))
    ]);
    return {
        paths: paths,
        fallback: true
    }
}
function getLocaleFromModel(items: (ContentTranslation | null)[] | undefined, locale: string){
    if (!items) {
        return null
    }
    const valid_translations = items.filter(v => v && (v.language == locale.toUpperCase()));
    if (!valid_translations){
        const defaultTranslation = items.filter(v => v && v.language == 'EN');
        return defaultTranslation && defaultTranslation[0];
    }
    return valid_translations[0];
}

export async function getStaticProps({params, locale}: {params: {slug: string[]|string}, locale: string}){
    const SSR = withSSRContext();
    let pagePath;
    let parentPath;
    let contentKey;
    if (!params.slug || typeof params.slug == 'string'){
        pagePath = "/";
        parentPath = "_";
        contentKey = "knowledgeBase";
    } else {
        pagePath = "/" + params.slug.join("/");
        parentPath = "/" + params.slug.slice(undefined, params.slug.length - 1).join("/");
        contentKey = params.slug[params.slug.length - 1];
    }
    const currentContentPath = parentPath && await getContentPathByPathHelper(parentPath, {
        eq: contentKey
    }, SSR.API);

    if (!currentContentPath){
        return {
            notFound: true
        }
    }
    const translations = currentContentPath[0].translations?.items;
    const i18Translation = getLocaleFromModel(translations, locale);
    if (!i18Translation){
        return {
            notFound: true
        };
    }

    const subContentPaths = await getContentPathByPathHelper(pagePath, undefined, SSR.API);

    const parsedSubContents = subContentPaths.map(subContent => ({
        id: subContent.id as string,
        link: subContent.path.substring(1) + "/" + subContent.contentKey as string,
        translation: getLocaleFromModel(subContent.translations?.items, locale) as ContentTranslation
    }));
    console.log(JSON.stringify(i18Translation));
    return {
        props: {
            slug: params.slug || "",
            parsedSubContents: parsedSubContents,
            contentTranslation: i18Translation || null,
        },
        revalidate: 600 // Max Every 10 Minutes
    }
}
