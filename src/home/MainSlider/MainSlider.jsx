import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './MainSlider.css'


const MainSlider = () => {
    const ApiSlider = "https://my-json-server.typicode.com/Lushobit/ApiNft/db";
    const [NftSlider, setNftSlider] = useState([])


    useEffect(() => {
        leerNftSlider()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const leerNftSlider = () => {
            axios
                .request(ApiSlider)
                .then(function (response) {
                    setNftSlider(response.data.Nft)
                })
                .catch(function (error) {
                    console.log(error);
                });
    }


    return (
        <section id='MainSlider'>
            <div className='container'>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators container-btn-slider ">
                        <button className='btn-slider active' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                        <button className='btn-slider' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button className='btn-slider' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button className='btn-slider' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
                        <button className='btn-slider' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner">
                        {NftSlider.map((i) => (
                            <div  key={i.id} className={ i.id===1 ?"carousel-item active " : "carousel-item  " } >
                                <p className='text-white p-slider'>Meet the notorious Creakzers - the creatures from your dreams and nightmares, and quite possibly from under your bed… Don't look down!</p>
                                <div className='img-slides'>
                                    <img src={i.img} className={ i.id===1 ? "d-block w-100 img-sli-1"  :  i.id===2 ?  "d-block w-100 img-sli-2" :  "d-block w-100 img-sli-com" } alt="..." />
                                </div>
                                <div className='container-text-slider'>
                                    <h3 className='text text-white'>{i.name}</h3>
                                </div>
                            </div>
                            
                        ))
                        }
                    </div>

                </div>
            </div>

        </section>
    )
}

export default MainSlider