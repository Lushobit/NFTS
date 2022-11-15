import './App.css';
import MainHeader from './common/MainHeader/MainHeader';
import 'aos/dist/aos.css'
import AOS from 'aos';
import { useEffect } from 'react';
import MainFooter from './common/MainFooter/MainFooter';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from './pages/Inicio/Inicio';
import NftCollection from './pages/NftCollection/NftCollection';
import SelectNft from './pages/SelectNft/SelectNft';



function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  })


  return (
    <div className='App'>
      <BrowserRouter>
        <MainHeader />
        <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/NftCollection' element={<NftCollection/>}/>
        <Route path='/SelectNft' element={<SelectNft/>}/>
        </Routes>
        <MainFooter />
      </BrowserRouter>

    </div>

  );
}

export default App;
