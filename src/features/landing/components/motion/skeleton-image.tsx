"use client";

import Image from "next/image";
import { useState } from "react";
import type { ImageProps } from "next/image";

type SkeletonImageProps = ImageProps & {
  skeletonClassName?: string;
};

export function SkeletonImage({
  alt,
  className = "",
  onLoad,
  skeletonClassName = "",
  ...props
}: SkeletonImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <span
        aria-hidden="true"
        className={`image-skeleton absolute inset-0 transition-opacity duration-300 ${
          isLoaded ? "opacity-0" : "opacity-100"
        } ${skeletonClassName}`}
      />
      <Image
        {...props}
        alt={alt}
        onLoad={(event) => {
          setIsLoaded(true);
          onLoad?.(event);
        }}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
