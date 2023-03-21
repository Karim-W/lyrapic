"use client";
import { Fragment } from "react";
export const PictureArea = ({
  text,
  theme,
}: {
  text: string;
  theme: string;
}): JSX.Element => {
  return (
    <div
      id="bg"
      className={`min-h-96 grid w-4/5 grow place-content-center overflow-auto rounded-2xl 
      text-4xl font-bold italic ${theme}`}
    >
      {text.split("\n").map((word, idx) => (
        <Fragment key={idx}>
          {word}
          <br />
        </Fragment>
      ))}
    </div>
  );
};
