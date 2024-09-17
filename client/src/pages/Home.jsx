import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Home() {
    return (
        <>
           <Navbar/>
            <div className=' font-serif text-3xl'>
                <img src={require('../assets/bg.jpg')} alt="" />
            </div>


            <Footer/>

        </>
    )
}
