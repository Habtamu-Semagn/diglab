"use client"
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react"
import project1image from "@/public/images/project-1.png"
import project2image from "@/public/images/project-2.png"
import project3image from "@/public/images/project-3.png"
import project4image from "@/public/images/project-4.png"
import project5image from "@/public/images/project-5.png"
import project6image from "@/public/images/project-6.png"

const projects = [
    { imagesrc: project1image, altname: "Project 1" },
    { imagesrc: project2image, altname: "Project 2" },
    { imagesrc: project3image, altname: "Project 3" },
    { imagesrc: project4image, altname: "Project 4" },
    { imagesrc: project5image, altname: "Project 5" },
    { imagesrc: project6image, altname: "Project 6" },
]

const GAP = 24

// build an infinite window of 5 items centered on a given index
const getWindow = (centerIndex: number) => {
  const len = projects.length;
  return [-2, -1, 0, 1, 2].map((offset) => {
    const i = ((centerIndex + offset) % len + len) % len;
    return { ...projects[i], realIndex: i };
  });
}

export default function ProjectsSection() {
  const [centerIndex, setCenterIndex] = useState(0);
  const [window, setWindow] = useState(() => getWindow(0));
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isPaused = useRef(false);
  const isAnimating = useRef(false);

  const getItemWidth = useCallback(() => {
    if (!scrollRef.current) return 0;
    return (scrollRef.current.offsetWidth - GAP * 2) / 3;
  }, []);

  // always scroll to center item (index 2 in the 5-item window)
  // but show only 3 at a time starting from index 1
  const scrollToCenter = useCallback((behavior: ScrollBehavior = "smooth") => {
    if (!scrollRef.current) return;
    const itemWidth = getItemWidth();
    // scroll so that item at position 1 (prev) is at left edge
    const left = 1 * (itemWidth + GAP);
    scrollRef.current.scrollTo({ left, behavior });
  }, [getItemWidth]);

  const goNext = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const nextCenter = (centerIndex + 1) % projects.length;

    // scroll right to item at position 2 (current center moves left)
    if (scrollRef.current) {
      const itemWidth = getItemWidth();
      const left = 2 * (itemWidth + GAP);
      scrollRef.current.scrollTo({ left, behavior: "smooth" });
    }

    setTimeout(() => {
      setCenterIndex(nextCenter);
      setWindow(getWindow(nextCenter));
      // instantly reset scroll to center without animation
      if (scrollRef.current) {
        const itemWidth = getItemWidth();
        scrollRef.current.scrollTo({ left: 1 * (itemWidth + GAP), behavior: "instant" });
      }
      isAnimating.current = false;
    }, 500);
  }, [centerIndex, getItemWidth]);

  const goPrev = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const prevCenter = (centerIndex - 1 + projects.length) % projects.length;

    // scroll left to item at position 0
    if (scrollRef.current) {
      const itemWidth = getItemWidth();
      const left = 0 * (itemWidth + GAP);
      scrollRef.current.scrollTo({ left, behavior: "smooth" });
    }

    setTimeout(() => {
      setCenterIndex(prevCenter);
      setWindow(getWindow(prevCenter));
      if (scrollRef.current) {
        const itemWidth = getItemWidth();
        scrollRef.current.scrollTo({ left: 1 * (itemWidth + GAP), behavior: "instant" });
      }
      isAnimating.current = false;
    }, 500);
  }, [centerIndex, getItemWidth]);

  const goTo = useCallback((realIndex: number) => {
    if (isAnimating.current) return;
    const diff = (realIndex - centerIndex + projects.length) % projects.length;
    if (diff === 0) return;
    // go forward or backward based on shortest path
    if (diff <= projects.length / 2) {
      // go forward diff times
      let count = 0;
      const forward = setInterval(() => {
        goNext();
        count++;
        if (count >= diff) clearInterval(forward);
      }, 600);
    } else {
      const back = projects.length - diff;
      let count = 0;
      const backward = setInterval(() => {
        goPrev();
        count++;
        if (count >= back) clearInterval(backward);
      }, 600);
    }
  }, [centerIndex, goNext, goPrev]);

  // auto play
  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPaused.current) goNext();
    }, 2500);
  }, [goNext]);

  const stopAutoPlay = () => { isPaused.current = true; };
  const resumeAutoPlay = () => { isPaused.current = false; };

  // init scroll position to center on mount
  useEffect(() => {
    scrollToCenter("instant");
  }, [scrollToCenter]);

  useEffect(() => {
    startAutoPlay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startAutoPlay]);

  return (
    <div className="grid grid-cols-12 py-20">
      <div className="col-start-2 col-span-10 flex flex-col items-center gap-4">

        {/* Header */}
        <p className="text-sm font-semibold tracking-widest text-green-500 uppercase">
          Accomplishments
        </p>
        <h2 className="text-4xl font-semibold text-gray-800 tracking-tight text-center">
          Our Projects
        </h2>
        <p className="text-gray-500 font-light text-center max-w-xl leading-relaxed">
          Far far away behind the word mountains, far from the countries Vokalia and Consonantia
        </p>

        {/* Scroll Container — renders 5 items but only 3 visible */}
        <div
          ref={scrollRef}
          className="w-full flex mt-6 overflow-x-hidden gap-6"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          {window.map((project, index) => (
  <div
    key={`${project.realIndex}-${index}`}
    className="relative flex-shrink-0 h-[400px] cursor-pointer overflow-hidden group"
    style={{ width: `calc((100% - ${GAP * 2}px) / 3)` }}
    onClick={() => {
      if (index === 1) goPrev();
      if (index === 3) goNext();
    }}
  >
    <Image
      src={project.imagesrc}
      alt={project.altname}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110"
    />

    {/* hover overlay */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end">
  
  {/* text block at bottom with green background */}
  <div className="bg-green-500 px-5 py-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col gap-1">
    <p className="text-white text-lg  text-base font-semibold tracking-tight">
      WORK NAME
    </p>
    <p className="text-white text-sm tracking-wide font-normal">
      Web Design
    </p>
  </div>

</div>

  </div>
))}
        </div>

        {/* Dot Navigation */}
        <div className="flex gap-3 mt-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300
                ${centerIndex === index
                  ? "bg-blue-500"
                  : "bg-gray-400 hover:bg-gray-300"
                }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}