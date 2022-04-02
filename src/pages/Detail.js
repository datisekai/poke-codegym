import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Body from "../components/Body";
import Loading from "../components/Loading";
import Stats from "../components/Stats";
import Types from "../components/Types";
import { base_api } from "../utils/config";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData(id);
  }, [id]);
  const getData = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(`${base_api}${id}`);
      setDetail(res.data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  return (
    <div className="min-h-screen bg-violet-400">
      <div className="max-w-[1200px] mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            className="w-[50%] mx-auto object-cover aspect-video bg-violet-600 rounded-md p-2"
            src={
              detail?.sprites?.back_default ||
              detail?.sprites?.back_female ||
              detail?.sprites?.back_shiny ||
              detail?.sprites?.back_shiny_female
            }
            alt=""
          />
          <img
            className="w-[50%] mx-auto object-cover aspect-video bg-violet-600 rounded-md p-2"
            src={
              detail?.sprites?.front_default ||
              detail?.sprites?.front_female ||
              detail?.sprites?.front_shiny ||
              detail?.sprites?.front_shiny_female
            }
            alt=""
          />{" "}
        </div>
        <h1 className="text-gray-100 text-3xl text-center uppercase bg-gradient-to-r mt-5 from-orange-400 to-blue-600 py-2 rounded-md">
          {detail?.name}
        </h1>
        <Stats stats={detail?.stats} />
        <Types types={detail?.types} />
        <Body body={{ width: detail?.width, height: detail?.height }} />
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default Detail;
