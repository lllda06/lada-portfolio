"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: ReactNode;
}) {

  useEffect(() => {

    const lenis = new Lenis({

      duration: 0.65,

      smoothWheel: true,

      wheelMultiplier: 0.9,

      touchMultiplier: 1,

      easing: (t) =>
        1 - Math.pow(1 - t, 4),

    });



    function raf(time:number){

      lenis.raf(time);

      requestAnimationFrame(raf);

    }


    requestAnimationFrame(raf);



    return () => {

      lenis.destroy();

    };


  },[]);



  return children;

}