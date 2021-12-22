import React, { useEffect, useState } from "react"
import { useFetchGifs } from "../hooks/useFetchGifs"
//import { getGifts } from "../helpers/getGifts"
import GifItem from "./GifItem"

const GiftGrid = ({category})=>{

    const {data:images,loading} =  useFetchGifs(category)

    return(
        <>
            <h3>{category}</h3>
            <p>{loading && 'Cargando....' }</p>
            <div className="card-grid animate__animated animate__fadeInLeft">
                    {
                        images.map(image=>{
                            return (
                                <GifItem 
                                    key={image.id}
                                    {...image}
                                />)
                        })
                     }
            </div>
        </>
    )
}


export default GiftGrid