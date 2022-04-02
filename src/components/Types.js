import React from 'react'

const Types = ({types}) => {
  return (
    <div className="mt-5">
          <h2 className="text-2xl text-gray-100 gradient-line uppercase">
            Types
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
            {types?.map((item, index) => (
              <div
                className="flex justify-between items-center px-5 py-2 bg-violet-600 rounded-md"
                key={index}
              >
                <h3 className="text-gray-100 uppercase text-lg select-none">{item.type.name}</h3>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Types