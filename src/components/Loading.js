import React from "react";
import { BarWave } from "react-cssfx-loading/lib";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-violet-300">
      <BarWave color="#FF0000" duration="3s" />
    </div>
  );
};

export default Loading;
