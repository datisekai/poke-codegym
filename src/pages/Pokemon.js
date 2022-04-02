import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { getIdPokemon } from "../utils/getId";
import {useNavigate} from 'react-router-dom'
import { base_api, base_img } from "../utils/config";
import Pagination from "../components/Pagination";

const Pokemon = () => {
  
  const [data, setData] = useState();
  const [offset, setOffset] = useState(0);
  const [text, setText] = useState();
  const [count, setCount] = useState();
  const navigate = useNavigate()

  useEffect(() => {
    getData();
  }, [offset]);


  const getData = async () => {
    try {
      const res = await axios.get(`${base_api}?limit=12&offset=${offset}`);
      setData(res.data.results);
      setCount(res.data.count);
    } catch (err) {
      console.log(err);
    }
  };

  const handleNext = () => {
    if (Math.floor(count / (offset + 1)) > 1) {
      setOffset(offset + 12);
    }
  };

  const handlePre = () => {
    if (offset > 0) {
      setOffset(offset - 12);
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
    const newList = data?.filter((item) =>
      item.name.toUpperCase().includes(e.target.value.toUpperCase())
    );
    setData(newList);
    if (e.target.value === "") {
      getData();
    }
  };

  return (
    <div className="min-h-screen bg-violet-400">
      <div className="mx-auto pt-5 max-w-[1200px] ">
        <div className="mt-5 flex justify-center items-center">
          <div className="relative">
            <input
              type="text"
              value={text}
              onChange={handleChange}
              placeholder=" "
              className="px-8 py-3 rounded-md outline-none inputSearch transition-all border border-transparent"
            />
            <label className="absolute left-[33px] top-[50%] translate-y-[-50%] text-[#999] search transition-all">Search</label>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data?.map((item) => (
            <div
            onClick={() => navigate(`/detail/${getIdPokemon(item.url)}`)}
              key={item.url}
              className="flex flex-col justify-center items-center mt-5 cursor-pointer hover:bg-violet-500 p-4 rounded-md hover:text-gray-100 transition-all"
            >
              <img
                className="h-[100px] object-cover"
                src={`${base_img}${getIdPokemon(item.url)}.png`}
                alt=""
              />
              <h3 className="text-lg">{item.name}</h3>
            </div>
          ))}
        </div>
        <Pagination handleNext={handleNext} handlePre={handlePre} count={count} offset={offset}/>
      </div>
    </div>
  );
};

export default Pokemon;
