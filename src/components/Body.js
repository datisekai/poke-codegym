import React from "react";

const Body = ({ body }) => {
  return (
    <div className="mt-5">
      <h2 className="text-2xl text-gray-100 gradient-line uppercase">Body</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
        <div className="flex justify-between items-center px-5 py-2 bg-violet-600 rounded-md">
          <h3 className="text-gray-100 uppercase text-lg select-none">Width</h3>
          <h3 className="text-gray-100 uppercase text-lg select-none">{body.width}</h3>
        </div>
        <div className="flex justify-between items-center px-5 py-2 bg-violet-600 rounded-md">
          <h3 className="text-gray-100 uppercase text-lg select-none">Height</h3>
          <h3 className="text-gray-100 uppercase text-lg select-none">{body.height}</h3>
        </div>
      </div>
    </div>
  );
};

export default Body;
