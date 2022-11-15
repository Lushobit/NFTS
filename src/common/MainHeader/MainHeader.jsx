import React from 'react'
import './MainHeader.css'
import { Link } from 'react-router-dom';

const MainHeader = () => {
    return (
        <section id='MainHeader' className='header'>
            <div className='container   container-header' >
                <div className='row'>
                    <div className='col-sm-3 col-lg-2  div-logo d-flex justify-content-center'>
                        <img className=' ' src="https://tf.bda.dev/creakzers/img/logo.svg" alt="" />
                    </div>
                    <div className='col-lg-6 separador'></div>
                    <div className='c-btn-h col-lg-4 row '>
                        <div className='col btn-e'>
                            <button className='btn-h-l'>
                            <i className="bi bi-search"></i>
                            </button>
                        </div>
                        <div className='col btn-e'>
                            <button className='btn-h-l'>
                            <i className="bi bi-twitter"></i>
                            </button>
                        </div>
                        <div className='col btn-e'>
                            <button className='btn-h-l'>
                            <i className="bi bi-discord"></i>
                            </button>
                        </div>
                        <div className='col'>
                            <button className='btn-home'>
                                <Link className='Link-Page' to="/">
                            <a href="/" className='link-p'><b>HOME</b> </a>
                                </Link>
                            </button>
                        </div>
                        <div className='col'>
                            <button className='btn-h-link'>
                                <Link className='Link-Page' to="/NftCollection">
                            <a href="/" className='link-p'><b>NFT PAGE</b> </a>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='container-fluid barra-h' />
                <div className='container d-flex text-center c-lis-h'>
                    <ul className='d-flex justify-content-between mt-3'>
                        <li className="text-white li-btn-h"><a href='/' className='a-list-h'>Home</a></li>
                        <li className="text-white li-btn-h"><a href='/' className='a-list-h'>About</a></li>
                        <li className="text-white li-btn-h"><a href='/' className='a-list-h'>Roadmap</a></li>
                        <li className="text-white li-btn-h"><a href='/' className='a-list-h'>Blog</a></li>
                        <li className="text-white li-btn-h"><a href='/' className='a-list-h'>Blog Post</a></li>
                        <li className="text-white li-btn-h"><a href='/' className='a-list-h'>FAQ</a></li>
                        <li className="text-white li-btn-h"><a href='/' className='a-list-h'>Team</a></li>
                        <li className="text-white li-btn-h"><a href='/' className='a-list-h'>Text Page</a></li>
                        <li className="text-white li-btn-h"><a href='/' className='a-list-h'>404</a></li>
                        <li className="text-white li-btn-h"><a href='/' className='a-list-h'>Docs</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default MainHeader