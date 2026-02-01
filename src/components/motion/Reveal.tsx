"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  direction?: Direction;
  distance?: number; // px
  duration?: number; // s
  delay?: number; // s
  amount?: number; // 0..1
};

const makeVariants = (direction: Direction, distance: number): Variants => {
  const d = distance;

  const from =
    direction === "up"
      ? { y: d }
      : direction === "down"
      ? { y: -d }
      : direction === "left"
      ? { x: d }
      : { x: -d };

  return {
    hidden: { opacity: 0, ...from },
    show: { opacity: 1, x: 0, y: 0 },
  };
};

export function Reveal({
  children,
  className,
  as = "div",
  direction = "up",
  distance = 18,
  duration = 0.45,
  delay = 0,
  amount = 0.25,
}: RevealProps) {
  const reduce = useReducedMotion();
  const variants = React.useMemo(
    () => makeVariants(direction, distance),
    [direction, distance]
  );

  const MotionTag = motion.create(as);

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount }}
      transition={
        reduce
          ? { duration: 0 }
          : {
              duration,
              delay,
              ease: [0.22, 1, 0.36, 1] as const,
            }
      }
    >
      {children}
    </MotionTag>
  );
}
