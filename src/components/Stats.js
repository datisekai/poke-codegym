import React from "react";
import { useNavigate } from "react-router-dom";
import Back from "./Back";

const Stats = ({ stats }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-5">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-gray-100 gradient-line uppercase">
          Stats
        </h2>
       <Back/>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
        {stats?.map((item, index) => (
          <div
            className="flex justify-between items-center px-5 py-2 bg-violet-600 rounded-md"
            key={index}
          >
            <h3 className="text-gray-100 uppercase text-lg select-none">
              {item.stat.name}
            </h3>
            <p className="text-gray-100 uppercase text-lg select-none">{item.base_stat}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
