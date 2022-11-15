import React from 'react'
import './MainFooter.css'

const MainFooter = () => {
    return (
        <footer id='MainFooter'>
            <div className='container-fluid'>
                <div className="container">
                    <div className='row'>
                        <div className='col-sm-3 div-logo-f d-flex justify-content-center'>
                            <img className=' ' src="https://tf.bda.dev/creakzers/img/logo.svg" alt="" />
                        </div>
                        <div className='col-8'>

                        </div>
                    </div>
                </div>
            </div>
            <div className='container barra-h-footer'/>
            <div className='container d-flex text-center '>
                <ul className='d-flex justify-content-between mt-3'>
                    <li className="text-white li-btn"><a href='none' className='a-list'>Home</a></li>
                    <li className="text-white li-btn"><a href='none' className='a-list'>About</a></li>
                    <li className="text-white li-btn"><a href='none' className='a-list'>Roadmap</a></li>
                    <li className="text-white li-btn"><a href='none' className='a-list'>Blog</a></li>
                    <li className="text-white li-btn"><a href='none' className='a-list'>Blog Post</a></li>
                    <li className="text-white li-btn"><a href='none' className='a-list'>FAQ</a></li>
                    <li className="text-white li-btn"><a href='none' className='a-list'>Team</a></li>
                    <li className="text-white li-btn"><a href='none' className='a-list'>Text Page</a></li>
                    <li className="text-white li-btn"><a href='none' className='a-list'>404</a></li>
                </ul>
                <div className='btn-i'>
                <i class="bi bi-arrow-up"></i>
                </div>
            </div>
        </footer>

    )
}

export default MainFooter