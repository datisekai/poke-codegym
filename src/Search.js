import React, { useEffect, useRef, useState } from "react";

const Search = () => {
  const data = [
    "Banana",
    "Apple",
    "Avocado",
    "Orange",
    "Grape",
    "Grapefruit",
    "Starfruit",
    "Mango",
  ];
  const [text, setText] = useState()
  const [list, setList] = useState(data)
  const inputSearch = useRef()

  const handleChange = (e) => {
      setText(e.target.value)
      const newList = data.filter(item => item.toUpperCase().includes(e.target.value.toUpperCase()))
      setList(newList)
  }

  useEffect(() => {
    inputSearch.current.focus()
  },[])

  return <div className="min-h-screen bg-violet-300 flex justify-center items-center flex-col">
      <input type="text" ref={inputSearch} value={text} onChange={handleChange} className="px-5 py-2 outline-none rounded-md" placeholder="Enter your something..." />
      <ul className="mt-3">
          {list?.map((item,index) => <li key={index} className="text-red-400 text-xl p-1">{item}</li>)}
      </ul>
  </div>;
};

export default Search;
