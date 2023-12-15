"use client";

import { animate, motion } from "framer-motion";
import Image from "next/image";
import Blackbars from "./Blackbars";
import ScreenPlanets from "./ScreenPlanets";
import ScreenClouds from "./ScreenClouds";
import ScreenInitial from "./ScreenInitial";
import ScreenMainRocket from "./ScreenMainRocket";
import EvenIfYouMiss from "./EvenIfYouMiss";
import { useRef } from "react";

const mainPathVariant = {
  transition: {
    duration: 2,
    delay: 2,
  },
  variants: {
    visible: {
      pathLength: 1,
    },
    hidden: {
      pathLength: 0,
    },
  },
};

export default function EnterAnimation() {
  //   animate(0, 100, {
  //     onUpdate: (latest) => console.log(latest),
  //     duration: 3,
  //   });

  return (
    <div className="w-full    top-0 left-0 z-50 ">
      {/* <div className="w-full border border-red-500  fixed top-0 left-0 z-50 "></div> */}
      {/* ////////////// PASKI ////////////// */}
      {/* <Blackbars /> */}

      <motion.div
        initial={{ y: "calc(-100% + 100vh)" }}
        animate={{ y: "0%" }}
        transition={{ duration: 6, delay: 2 }}
        className="relative  h-full "
      >
        {/* ////////////// CLOUDS - THIRD SCREEN ////////////// */}
        {/* <ScreenPlanets /> */}
        {/* ////////////// CLOUDS - SECOND SCREEN ////////////// */}
        <ScreenClouds />
        <ScreenInitial />

        {/* ////////////// THE INITIAL SCREEN ////////////// */}
      </motion.div>

      {/* ////////////// MAIN ROCKET ////////////// */}
      {/* <ScreenMainRocket /> */}
      {/* <EvenIfYouMiss /> */}
    </div>
  );
}
