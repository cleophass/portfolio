"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string[]>([""]);
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (charIndex < text.length) {
        const currentChar = text.charAt(charIndex);
        setDisplayedText((prevState) => {
          const newText = [...prevState];
          if (currentChar === "\n") {
            newText.push("");
          } else {
            newText[newText.length - 1] += currentChar;
          }
          return newText;
        });
        setCharIndex(charIndex + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [charIndex, duration, text]);

  return (
    <div
      className={cn(
        "font-display text-start text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      {displayedText.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}
