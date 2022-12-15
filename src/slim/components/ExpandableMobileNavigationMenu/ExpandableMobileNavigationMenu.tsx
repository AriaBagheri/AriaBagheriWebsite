'use client';
import React from 'react';
import {IoMdCloseCircle} from "react-icons/io";
import {IoSettings} from "react-icons/io5";
import Link from "next/link";

function ExpandableMobileNavigationMenu() {
    return (
        <div className={'navbar-expandable-mobile'}>
            <div>
                <Link href={"/settings"} className={'no-button'} onClick={() => {
                    document.body.classList.remove("navbar-expanded");
                }}>
                    <IoSettings style={{fontSize: "0.7em"}}/>
                </Link>
                <Link href={"/"} onClick={() => {
                    document.body.classList.remove("navbar-expanded");
                }}>
                    <h1 className={'h6'}>Aria Bagheri</h1>
                </Link>
                <button className={'no-button right-button'} onClick={() => {
                    document.body.classList.remove("navbar-expanded");
                }}>
                    <IoMdCloseCircle/>
                </button>
            </div>
            <Link href={"/aboutMe"} onClick={() => {
                document.body.classList.remove("navbar-expanded");
            }}>
                <p className={'h6'}>About Me</p>
            </Link>
            <Link href={"/theVoiceOfTheStudents"} onClick={() => {
                document.body.classList.remove("navbar-expanded");
            }}>
                <p className={'h6'}>Voice of the Students</p>
            </Link>
            <Link href={"/cyberKnowledge"} onClick={() => {
                document.body.classList.remove("navbar-expanded");
            }}>
                <p className={'h6'}>Cyber Knowledge Base</p>
            </Link>
            <Link href={"https://github.com/AriaBagheri/"}>
                <p className={'h6'}>GitHub</p>
            </Link>
        </div>
    );
}

export default ExpandableMobileNavigationMenu;