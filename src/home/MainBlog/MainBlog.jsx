import React from 'react'
import './MainBlog.css'

const MainBlog = () => {
    return (
        <section id='MainBlog'>
            <div className="container">
                <div className='row d-flex mb-4'>
                    <div className='col-6  text-start '>
                        <h2 className='text-white t-blog'>Blog</h2>
                    </div>
                    <div className='col-6 '>
                        <a href="none" className='a-blog font-color '>wddadwa</a>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='div-img-nft mb-3'>
                            <img className='blog-img' src="https://tf.bda.dev/creakzers/img/blog-image-1.jpeg" alt="" />
                        </div>
                        <h2 className='text-white text-start h2-blog'>Hello World!!</h2>
                        <p className='text-white text-start p-blog'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will...</p>
                    </div>
                    <div className='col-md-6'>
                        <div className='div-img-nft mb-3'>
                            <img className='blog-img' src="https://tf.bda.dev/creakzers/img/blog-image-2.jpeg" alt="" />
                        </div>
                        <h2 className='text-white text-start h2-blog'>Hello World!!</h2>
                        <p className='text-white text-start p-blog'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will...</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainBlog