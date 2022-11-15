import React, { useState } from 'react'
import Nfts from '../../components/Nfts'
import './NftCollection.css'

const NftCollection = () => {

  const Collections = [
    {
      id:1,
      name:"Gotrilla",
      billetera:"0x1Ccbc06Cf780E9aB8fB51113fed727C9f240De40"
    },
    {
      id:2,
      name:"Kyagi-Mafia",
      billetera:"0xC352B534e8b987e036A93539Fd6897F53488e56a"
    },
    {
      id:3,
      name:"kojiro_a",
      billetera:"0x2aE6B0630EBb4D155C6e04fCB16840FFA77760AA"
    },
    {
      id:4,
      name:"themcpuss",
      billetera:"0xA858DDc0445d8131daC4d1DE01f834ffcbA52Ef1"
    }
  ]
  const [SelectNft, setSelectNft] = useState([])


  const nftseleccionado = (e,i)=>{
        setSelectNft(i)
        var itemLista = document.querySelectorAll('#lista-categorias div')
        itemLista.forEach(i => {
            i.classList.remove('c-select','klk-i')
        })
        e.currentTarget.classList.add('c-select')
  }

  return (
    <section className='' id='NftCollection'>
      <div className='container d-flex'>
        <div className='col-md-3'>
          <h2 className='h2-c'>COLLECCTION</h2>
          <div className=''>
            <ul className='list-group'  id="lista-categorias">
              {Collections.map((i)=>(
              <div key={i.id} className='div-c' onClick={(e)=> nftseleccionado(e,i)}   >
                  {i.id ===1 || i.id ===2 || i.id ===3 || i.id ===4  ?
                <li className="list-group-item klk-i" >
                  <h3 className='text-start h3-c'>Collection</h3>
                  <h5 className='text-start h5-c'>{i.name}</h5>
                </li> : null}
              </div>
              ))

              }
            </ul>
          </div>
        </div>
        <div className='col-md-9 container'> 
        <div className=''>
          <h2 className='h2-c'>NFT'S</h2>
          <Nfts SelectNft={SelectNft.billetera} />
        </div>
        </div>
      </div>
    </section>
  )
}

export default NftCollection