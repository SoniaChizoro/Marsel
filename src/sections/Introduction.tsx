"use client";
import Tag from "@/components/tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `I'm Marsel. A Developer based in
              Los Angeles, California. I have spent a while navigating the web landscape, engaging deeply with every technology that is critical to the app development process. I approach every project with a singular goal of absolute clarity, flexibility and `;
const words = text.split(" ");

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });
    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);
    useEffect(() => {
        wordIndex.on("change", (latestValue) => {
            setCurrentWord(latestValue);
        });
    }, [wordIndex]);
    return (
        <section id="about" className="py-20 md:py-28 lg:py-40">
            <div className="px-4">
                <div className="sticky top-32 md:top-36">
                    <div className="flex justify-center">
                        <Tag> Get To Know Me</Tag>
                    </div>

                    <div className="text-3xl md:text-6xl text-center font-medium mt-10 px-0 pl-0 pr-0 md:container">
                        <span className="text-white/90">Nice to meet you!</span>{" "}
                        <span className="">
                            {words.map((word, index) => (
                                <span
                                    key={index}
                                    className={twMerge(
                                        "transition duration-500 text-white/15",
                                        index < currentWord && "text-white/90"
                                    )}
                                >{`${word} `}</span>
                            ))}
                        </span>
                        <span className="text-lime-400">
                            precise execution.{" "}
                        </span>
                    </div>
                </div>
                <div className="h-[80vh]" ref={scrollTarget}></div>
            </div>
        </section>
    );
}
