import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Nfts.css'
import NFT from './../../src/assets/img/NftDefault.png'
import { Link } from 'react-router-dom';
const Nfts = (props) => {
    const [NftsSelect, setNftsSelect] = useState([])
    const [RealesNft, setRealesNft] = useState([])
    const reales = [];

    const options = {
        method: 'GET',
        url: 'https://deep-index.moralis.io/api/v2/' + props.SelectNft + '/nft',
        params: { chain: 'eth', format: 'decimal', limit: '15', normalizeMetadata: 'false' },
        headers: {
            accept: 'application/json',
            'X-API-Key': 'Efu19uP2u6kY8NwVVccvVvMFvlCbPJQQQGSCyW5QugrtMrCfhcGH4NAxq5QjnhPD'
        }
    };


    useEffect(() => {
        leerNft();
    }, [props])

    const leerNft = () => {
        axios
            .request(options)
            .then(function (response) {
                setNftsSelect(response.data.result)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    NftsSelect.forEach(e => {
        let o = JSON.parse(e.metadata);
        reales.push(o)
    })



    return (
        <div className='mt-5'>
            <div className='conatiner'>
                <div className='row d-flex'>
                    {
                        reales.map((i) => (

                            <div className='col c-c-n'>
                            <Link to='/SelectNft/' NftsSelect={NftsSelect.metadata} >
                                <img className='img-cards-n' src={i.image ? (i.image.indexOf("http") > -1 ? i.image : NFT) : NFT} alt="" />
                            </Link>
                                <h2 className='text-cards-n mt-3'>{i.name===null || i.name ===undefined ? <p>NFT</p> : i.name }</h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Nfts