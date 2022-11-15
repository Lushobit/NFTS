import React from 'react'
import { useParams } from 'react-router-dom'
import NFTf from './../../assets/img/NftDefault.png'
import eth from './../../assets/img/ethereum.svg'
import './SelectNft.css'
const SelectNft = (nft) => {
    let params = useParams();
    console.log(params.nft)
    console.log(nft)
    return (
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-8'>
                    <img src={NFTf} alt="" />
                </div>
                <div className='col-4'>
                    <h2 className='text-white text-start'>Name: NFT</h2>
                    <div className='separador-n mt-5 mb-5' />
                    <h3 className='text-white text-start'>Precio: Etherium 3.3</h3>
                    <div className='separador-n mt-5 mb-5' />
                    <p className='text-white text-start'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam autem facere quam beatae. Maiores accusamus tenetur hic in, reprehenderit ducimus aliquid laudantium consectetur obcaecati architecto quod adipisci dignissimos facere id?</p>
                </div>
            </div>
        </div>
    )
}

export default SelectNft