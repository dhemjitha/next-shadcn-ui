'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {

  const handleClick = (param) => {
    alert(param);
  }

  return (
    <div>
      <Button onClick={() => handleClick("Heyyy")}>Click Me</Button>
    </div>
  );
}
