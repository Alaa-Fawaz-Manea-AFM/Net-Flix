"use client";

const error = () => (
  <div className="flex w-full flex-col items-center justify-center gap-5 pt-32">
    <div className="text-3xl">Sorry, Something An unepected event,</div>
    <button
      className="text-xl"
      type="button"
      onClick={() => window.location.reload()}
    >
      <b>reload Page</b>
    </button>
  </div>
);

export default error;
