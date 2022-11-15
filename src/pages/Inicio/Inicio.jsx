import React from 'react'
import MainBlog from '../../home/MainBlog/MainBlog'
import MainGallery from '../../home/MainGallery/MainGallery'
import MainNumbers from '../../home/MainNumbers/MainNumbers'
import MainPerks from '../../home/MainPerks/MainPerks'
import MainSlider from '../../home/MainSlider/MainSlider'

const Inicio = () => {
    return (
        <>
            <MainSlider />
            <MainNumbers />
            <MainGallery />
            <MainPerks />
            <MainBlog />
        </>
    )
}

export default Inicio