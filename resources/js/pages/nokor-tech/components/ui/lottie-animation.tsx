'use client'

import Lottie from "lottie-react";
import React from "react";
import animation from "@/components/ui/lottie-animation";

const LottieAnimation = ({isLoop = false }) => {
  return (
    <div>
      <Lottie
        animationData={animation}
        className={`flex items-center justify-center w-60`}
        loop={isLoop}
      />
    </div>
  );
};

export default LottieAnimation;
