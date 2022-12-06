'use client';
import React from 'react';
import {LottieComponentProps} from "lottie-react";
import Lottie from "lottie-react";

function LottieWrapper(p: LottieComponentProps) {
    return (
        <Lottie {...p}/>
    );
}

export default LottieWrapper;