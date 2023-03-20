import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import { useState } from "react";

const Home: NextPage = () => {
  const HandleClick = async () => {
    const node = document.getElementById("bg");
    if (node) {
      const data = await htmlToImage.toPng(node);
      await navigator.clipboard.writeText(data);
    }
  };
  const themes = [
    "bg-gradient-to-br from-red-500 to-yellow-500",
    "bg-gradient-to-br from-blue-500 to-purple-500",
    "bg-gradient-to-br from-green-500 to-yellow-500",
    "bg-gradient-to-br from-pink-500 to-purple-500",
  ];
  const [lyrics, setLyrics] = useState<string>("");
  const [theme, setTheme] = useState<string>(themes[0] ?? "");
  return (
    <>
      <div
        className="flex h-screen w-screen flex-col items-center 
        justify-center gap-8 overflow-scroll bg-stone-900
        p-8 text-center text-stone-200"
      >
        <textarea
          className="h-1/4 w-4/5 rounded-lg bg-stone-800 text-stone-200 outline-none"
          onChange={(e) => setLyrics(e.target.value)}
        />
        <div className="flex h-fit w-4/5 flex-row items-center justify-around rounded-lg text-stone-200">
          {themes.map((theme, idx) => (
            <button
              key={idx}
              onClick={() => setTheme(theme)}
              className={`h-16 w-16 rounded-full ${theme} text-stone-200`}
            ></button>
          ))}
        </div>
        <button
          onClick={HandleClick}
          className="h-16 w-32 rounded-lg bg-stone-800 text-stone-200"
        >
          Generate
        </button>
        <div
          id="bg"
          className={`grid h-1/2 w-4/5 place-content-center rounded-2xl text-4xl font-semibold ${theme}`}
        >
          <p>{lyrics}</p>
        </div>
      </div>
    </>
  );
};

export default Home;
