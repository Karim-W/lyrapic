"use client";
export const Toast = ({ message }: { message: string | null }): JSX.Element => {
  if (message === null) {
    return <></>;
  }
  return (
    <div
      className={`absolute left-auto right-auto top-4 z-50 flex w-screen flex-row justify-center`}
    >
      <p className="w-1/6 rounded-xl bg-emerald-600 px-4 py-8 text-center text-lg font-semibold text-white drop-shadow-2xl backdrop-blur-lg">
        {message}
      </p>
    </div>
  );
};
