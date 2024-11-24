'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {

  const handleClick = () => {
    alert("Hey there !");
  }

  return (
    <div>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
}
