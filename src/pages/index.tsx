import { type NextPage } from "next";
import Head from "next/head";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import { useState } from "react";
import { PictureArea } from "~/components/PictureArea/pArea";
import { HandleClick } from "~/utils/imageCopy";
interface ClipboardItem {
  types: string[];
  // Add more properties as needed
}

declare var ClipboardItem: {
  prototype: ClipboardItem;
  new (itemData: { [mimeType: string]: Blob }): ClipboardItem;
};
const Home: NextPage = () => {
  const themes = [
    "bg-gradient-to-br from-red-500 to-yellow-500",
    "bg-gradient-to-br from-blue-500 to-purple-500",
    "bg-gradient-to-br from-green-500 to-yellow-500",
    "bg-gradient-to-br from-pink-500 to-purple-500",
    "bg-gradient-to-br from-blue-500 to-yellow-500",
    "bg-gradient-to-br from-red-500 to-purple-500",
    "bg-gradient-to-br from-emerald-500 to-blue-500",
    "bg-gradient-to-br from-violet-300 to-pink-300",
    "bg-gradient-to-br from-fuchsia-500 to-cyan-500",
    "bg-gradient-to-br from-slate-900 to-slate-700",
  ];
  const [lyrics, setLyrics] = useState<string>("");
  const [theme, setTheme] = useState<string>(themes[0] ?? "");
  return (
    <>
      <Head>
        <title>Lyrapic</title>
        <meta name="description" content="Lyric to image converter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="flex min-h-screen w-screen flex-col items-center 
        justify-center gap-8 overflow-scroll bg-stone-900
        p-8 text-center text-stone-200"
      >
        <h1
          className={`${theme} bg-clip-text text-6xl font-bold text-transparent`}
        >
          Lyrapic
        </h1>

        <textarea
          className="min-h-96 w-4/5 rounded-lg bg-stone-800 p-8 text-stone-200 outline-none"
          onChange={(e) => setLyrics(e.target.value)}
        />
        <div className="flex h-fit w-4/5 flex-row flex-wrap items-center justify-around rounded-lg text-stone-200">
          {themes.map((theme, idx) => (
            <button
              key={idx}
              onClick={() => setTheme(theme)}
              className={`h-16 w-16 rounded-full ${theme} text-stone-200 transition-all duration-200 hover:scale-95`}
            ></button>
          ))}
        </div>
        <button
          onClick={HandleClick}
          className="h-16 w-32 rounded-lg bg-stone-800 text-stone-200
          transition-all duration-200 hover:scale-95 hover:bg-stone-200 hover:text-stone-900"
        >
          Generate
        </button>
        <PictureArea text={lyrics} theme={theme} />
      </div>
    </>
  );
};

export default Home;
