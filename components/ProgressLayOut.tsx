"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressLayOut = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProgressBar
        height="3px"
        color="#DC2626"
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  );
};

export default ProgressLayOut;
