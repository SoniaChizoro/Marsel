"use client";
import Button from "@/components/button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import portrait from "@/assets/images/web-portrait.png";
import Link from "next/link";

const Hero = () => {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();
    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { y: [0, 16, 0], x: 0 },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
        ]);
        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { x: 0, y: [0, 20, 0] },
                { duration: 0.5 },
            ],
        ]);
    }, [
        leftDesignAnimate,
        leftPointerAnimate,
        rightDesignAnimate,
        rightPointerAnimate,
        leftDesignScope,
        leftPointerScope,
        rightDesignScope,
        rightPointerScope,
    ]);

    return (
        <section className="hero py-12 lg:mt-8 overflow-x-hidden h-screen flex items-center justify-center">
            <div className="container relative">
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    drag
                    className="absolute -left-32 top-16 hidden"
                >
                    <Image src={designExample1Image} alt="" draggable="false" />
                </motion.div>
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute left-56 top-96 hidden"
                >
                    <Pointer name="Explore" />
                </motion.div>
                <motion.div
                    ref={rightDesignScope}
                    initial={{ opacity: 0, x: 100, y: 100 }}
                    className="absolute -right-64 -top-16 hidden"
                    drag
                >
                    <Image src={designExample2Image} alt="" draggable="false" />
                </motion.div>

                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x: 275, y: 100 }}
                    className="absolute right-80 -top-4 hidden"
                >
                    <Pointer name="Show Reel" color="red" />
                </motion.div>

                <div className="portrait relative size-32 rounded-full overflow-hidden mx-auto mb-1">
                  <Image
                    src={portrait}
                    alt="Profile Image."
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold gap-2">
                        <span>👋</span> {"  "}I&apos;m Marsel. I specialize in
                    </div>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-[90px] tracking-tight font-medium text-center mt-2 md:mt-0 p-2 md:p-0 md:pb-2 text-transparent gradient-text relative z-10">
                    Crafting state-of-the-art digital experiences
                </h1>
                <p className="text-center text-lg md:text-2xl text-white/50 md:mt-2 max-w-2xl mx-auto">
                    I apply cutting-edge tools to deliver feature-rich
                    applications that both feels great and satisfies client
                    requirements. Let me take your ideas from concept to{" "}
                    <span className="inline-block relative ">
                        {" "}
                        product.
                        {/* <span className="hidden md:block text-4xl text-lime-500 absolute -right-5 top-5 ">
                            ⤸
                        </span> */}
                    </span>
                </p>
                <div className="flex rounded-full mt-8 justify-center items-center min-w-max max-w-lg mx-auto">
                    <Link
                        href={"mailto:therealemehgreguchenna@gmail.com"}
                        target="_blank"
                        className="font-medium"
                    >
                        <Button
                            variant="neutral"
                            className="whitespace-nowrap flex items-center gap-2 m-2"
                        >
                            Contact Me
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="works-carousel hidden md:flex md:gap-12 justify-center items-center relative">
                {/* <div className="md:absolute md:-top-[280px] md:left-[190px] rounded-xl md:rounded-3xl overflow-hidden">
                    <Image
                        src={dummy3}
                        alt=""
                        width={265}
                        height={301}
                        className=""
                    />
                </div> */}
                {/* <div className="rounded-xl md:rounded-3xl overflow-hidden">
                    <Image src={dummy1} alt="" width={265} height={301} />
                </div> */}
                {/* <div className="overflow-hidden rounded-xl md:rounded-3xl">
                    <Image
                        src={quickPay}
                        alt="MildPay Image"
                        className="object-cover"
                        width={330}
                        height={350}
                    />
                </div> */}
                {/* <div className="rounded-xl md:rounded-3xl overflow-hidden">
                    <Image src={dummy2} alt="" width={272} height={294} />
                </div> */}
                {/* <div className="md:absolute md:-top-[280px] md:right-[190px] rounded-xl md:rounded-3xl overflow-hidden">
                    <Image src={dummy1} alt="" width={265} height={301} />
                </div> */}
            </div>
        </section>
    );
};

export default Hero;
