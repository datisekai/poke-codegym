import React from 'react'

const Pagination = ({handleNext, handlePre, offset,count}) => {
  return (
    <div className="flex justify-center items-center mt-5 pb-5">
    <button
      onClick={handlePre}
      disabled={offset === 0}
      className={`${
        offset === 0 ? "opacity-50" : "hover:bg-red-600"
      }   transition-all text-md bg-red-400 px-5 py-1 rounded-md`}
    >
      Pre
    </button>
    <button
      onClick={handleNext}
      disabled={Math.floor(count / (offset + 1) < 1)}
      className={`${Math.floor(
        count / (offset + 1) < 1 ? "opacity-50" : "hover:bg-red-600 "
      )} hover:bg-red-600 transition-all text-md bg-red-400 px-5 py-1 ml-1 rounded-md`}
    >
      Next
    </button>
  </div>
  )
}

export default Pagination