'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {

  const [inputtext, setinputtext] = useState("");

  const handleClick = (param) => {
    alert(param);
  }

  const handleChange = (e) => {
    setinputtext(e.target.value);
  }

  return (
    <>
      <Input type="text" onChange={handleChange} />
      <Button onClick={() => handleClick("Heyyy")}>Click Me</Button>
      <p>Value is : {inputtext}</p>
      <br />

      {inputtext == "NextJS" && <div>
        <h1>Members Area</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae labore a iste, sapiente esse fugiat quam, veritatis amet cum dignissimos debitis ipsa eligendi provident adipisci quod, placeat assumenda. Error, dolorum.</p>
      </div>}
      
    </>
  );
}
