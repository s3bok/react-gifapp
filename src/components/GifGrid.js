import React, { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
 const {data:images, loading} = useFetchGifs(category);


  return (
    <>
      <h3>{category}</h3>
      {loading && <p>'Cargando...'</p>}
      <div className="card-grid">
        { images.map((img) => {
          return <GifGridItem key={img.id} {...img}></GifGridItem>;
        })}
      </div>
    </>
  );
};
