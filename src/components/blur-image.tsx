import Image from "next/image";
import { useState } from "react";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function BlurImage({ src }: { src: string }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      alt=""
      src={src}
      width={200}
      height={400}
      className={cn(
        "group-hover:opacity-75 duration-700 ease-in-out",
        isLoading
          ? "grayscale blur-2xl scale-110"
          : "grayscale-0 blur-0 scale-100"
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
