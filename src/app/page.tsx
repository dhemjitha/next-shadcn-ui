'use client'

import Word from "@/components/ui/Word";

export default function Home() {

  const paragraph = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae autem corrupti, fugiat id maxime dolor nostrum quas? Magnam, iusto. Corrupti quidem quae rerum nesciunt magni nam asperiores sequi omnis repellendus"

  return (
    <main>
      <div style={{ height: "100vh" }}></div>
      <Word value={paragraph}/>
      <div style={{ height: "100vh" }}></div>
    </main>
  );
}
