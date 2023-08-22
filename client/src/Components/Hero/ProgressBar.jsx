import React from "react";

const ProgressBar = () => {
  // { useState, useEffect }
  // { launchDate }
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const calculateProgress = () => {
  //     const now = new Date().getTime();
  //     const launchTime = launchDate.getTime();
  //     const totalTime = launchTime - now;
  //     const elapsedTime = now - launchTime;
  //     const launchProgress = Math.floor((elapsedTime / totalTime) * 100);

  //     setProgress(launchProgress >= 0 ? launchProgress : 0);
  //   };

  //   const progressInterval = setInterval(() => {
  //     calculateProgress();
  //   }, 1000);

  //   calculateProgress();

  //   return () => {
  //     clearInterval(progressInterval);
  //   };
  // }, [launchDate]);

  return (
    // <div className="h-6 flex flex-row items-center">
    //   <div className="w-full h-5 rounded-md bg-green-500 flex flex-row justify-start">
    //     <div
    //       className="bg-white w-full relative transition-all duration-300 ease-in"
    //       style={{ width: `${progress}%` }}
    //     ></div>
    //   </div>
    //   <div className="absolute text-[10px] font-bold text-center px-4">Next Stage Price $.00034</div>
    //   {/* <p>{`${progress}% Complete`}</p> */}
    // </div>
    <>
      <div className="w-full bg-gray-300 rounded-l-full rounded-r-full">
        <div
          className="bg-green-600 text-xs font-medium text-green-100 text-center p-2 leading-none rounded-l-full h-1"
          style={{ width: "50%" }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
