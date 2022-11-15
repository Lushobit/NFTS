import React from 'react'
import './MainPerks.css'
const MainPerks = () => {
  return (
<section id='MainPerks'>
    <div className='container'>
        <div className='row'>

        <div className='col-md-6'>
            <h2 className='text-white text-start' data-aos="fade-right">Perks of Pro</h2>
            <p className='text-white text-start'>There's more hype than you can see on the surface. Creakzers come in all sorts of shapes and incarnations. Here's what you get when going Pro in our gang.</p>
        </div>

        <div className='col-md-6'>
        <div className="col-12 border-speks" data-aos="fade-left">
          <h5 className='text-white text-start'>Prime access to drops</h5>
          <p className='text-white'>Be the first to grab the top NFTs before anyone else can even move their finger - lots of hot items there!</p>
        </div>
        <div className="col-12 border-speks  mt-3" data-aos="fade-left">
        <h5 className='text-white text-start'>Custom cards</h5>
          <p className='text-white text-start'>Next-level members get next-level service: our artists will craft a one-and-only card just for you.</p>
        </div>
        <div className="col-12 border-speks mt-3" data-aos="fade-left">
        <h5 className='text-white text-start'>Instagram filters</h5>
          <p className='text-white text-start'>Hype up your stories with the retrowave filters by Creakzers – won’t your feed folks be jealous!</p>
        </div>
        </div>

        </div>
    </div>
</section>
  )
}

export default MainPerks