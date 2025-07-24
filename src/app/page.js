"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import QRCode from "./qrCode";



export default function Home() {
  const [url, setUrl] = useState("");
  const [bottomText, setBottomText] = useState("Scan to see the demo");
  const [textColor, setTextColor] = useState("#ed9d07ff");
  const [color, setColor] = useState("#000000ff");
  const [shape, setShape] = useState("square");

  return (
    <main
      className='flex items-center justify-center gap-24 min-h-screen'
    >
      <Sidebar
        url={url}
        setUrl={setUrl}
        bottomText={bottomText}
        setBottomText={setBottomText}
        textColor={textColor}
        setTextColor={setTextColor}
        color={color}
        setColor={setColor}
        shape={shape}
        setShape={setShape}
      />
      <QRCode
        url={url}
        bottomText={bottomText}
        textColor={textColor}
        color={color}
        shape={shape}
      />
    </main>
  );
}


