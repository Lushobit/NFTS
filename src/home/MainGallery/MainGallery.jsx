import React, { useEffect, useState } from 'react'
import NFT from './../../assets/img/NftDefault.png'
import './MainGallery.css'
import axios from 'axios';

const MainGallery = () => {
    const [GalleryNft, setGalleryNft] = useState([]);
    const options = {
        method: 'GET',
        url: 'https://deep-index.moralis.io/api/v2/0x92F4937C03a5Dd90F5382Ea593C9f7F3AE1d23A5/nft',
        params: { chain: 'eth', format: 'decimal', limit: '14', normalizeMetadata: 'true' },
        headers: {
            accept: 'application/json',
            'X-API-Key': 'Efu19uP2u6kY8NwVVccvVvMFvlCbPJQQQGSCyW5QugrtMrCfhcGH4NAxq5QjnhPD'
        }
    };



    useEffect(() => {
        leerNft();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])





    const leerNft = () => {
        axios
            .request(options)
            .then(function (response) {
                setGalleryNft(response.data.result)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    // console.log(GalleryNft)




    return (
        <section id='MainGallery'>
            <div className='container'>
                <div className='col-7 m-auto' data-aos="fade-up">
                    <h1 className='text-white'>Where It All began</h1>
                    <p className='text-white'>One day, in March of the year 2351, Creakzers will crawl from underneath the city to show their true power. And district by district, people will embrace the wave of the psychedelic vibe that these neon creatures spread all over the place.</p>
                </div>
                <div>

                <div className='c-card row d-flex row-cols-sm-1 flex-wrap '>
                    {
                        GalleryNft.map((i) => (
                            <div className="col col-sm-4 col-lg-6 card card-nft mt-3  col m-auto" key={i.token_id}>

                                <img className='img-card mt-3 card-img-top'
                                    src={i.normalized_metadata.image ? (i.normalized_metadata.image.indexOf("http") > -1 ? i.normalized_metadata.image : NFT) : NFT}  alt="..." />
                                <div className="card-body d-flex">
                                    <h3 className='name-nft' >Rank:{i.amount}</h3>
                                    <h3 className='id-nft text-white'>{i.block_number}</h3>
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

export default MainGallery