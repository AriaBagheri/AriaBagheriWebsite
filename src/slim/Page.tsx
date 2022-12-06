import React from 'react';
import PagePaddingManager from "./PagePaddingManager";
import ThemeModal from "./ThemeModal";

function Page({isPadded = false, padSize = "small", children}: {
    isPadded?: boolean,
    padSize?: "large" | "medium" | "small",
    children: React.ReactNode
}) {
    return <>
        <PagePaddingManager isPadded={isPadded} padSize={padSize}/>
        <ThemeModal en={true}/>
        {children}
    </>;
}

export default Page;
