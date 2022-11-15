import React from 'react'
import './MainNumbers.css'

const MainNumbers = () => {
    return (
        <section id='MainNumbers'>
            <div className='container container-number'>
                <div className='container-ul d-flex justify-content-center '>


                    <div className='row d-flex '>
                        <div className='col div-lu' data-aos="fade-right">
                            <span className='klk'>44</span>
                            <span className='text-white'> Totadivtem</span>
                        </div>
                        <div className='col div-lu' data-aos="fade-right">
                            <span className='klk'>999</span>
                            <span className='text-white'>TotalOwners</span>
                        </div>
                        <div className='col div-lu' data-aos="fade-right">
                            <span className='klk'>0.4</span>
                            <span className='text-white'>Floor Price (ETH)</span>
                        </div>
                        <div className='col div-lu' data-aos="fade-right">
                            <span className='klk'>20.1K</span>
                            <span className='text-white'>Volume Traded (ETH)</span>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default MainNumbers