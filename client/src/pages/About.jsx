import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
   <Navbar/>

    <div className=' pt-32 space-y-5 bg-slate-100'>
        <div className='mx-auto shadow-xl shadow-black p-8 rounded-xl  w-[90%] bg-[#cba65b] cursor-pointer hover:shadow-2xl hover:shadow-yellow-700'>


        <h1 className='text-2xl font-extrabold mb-4 text-black'>About Us</h1>
        <hr />

        <p className='content py-4'>



Welcome to Medicare, your one-stop virtual medical store where healthcare meets technology. In an age where convenience and expertise are crucial, we've designed Medicare to be more than just an online pharmacy—it's a comprehensive healthcare solution that brings the best of modern medicine and traditional remedies right to your fingertips.
</p>
        </div>

        <div className='mx-auto shadow-xl shadow-black p-8 rounded-xl  w-[90%] bg-[#cba65b] cursor-pointer hover:shadow-2xl hover:shadow-yellow-700'>

        <h1 className='text-2xl font-extrabold mb-4 text-black'>Our Mission</h1>
        <hr />

        <p className='content py-4'>
        Our mission is to make healthcare accessible and personalized for everyone.
         We understand the importance of timely access to medications and reliable health information, 
         so we've created a platform where you can not only purchase medicines but also receive personalized
          recommendations tailored to your unique health needs.
        </p>
        </div>

        <div className='mx-auto shadow-xl shadow-black p-8 rounded-xl  w-[90%] bg-[#cba65b] cursor-pointer hover:shadow-2xl hover:shadow-yellow-700'>

        <h1 className='text-2xl font-extrabold mb-4 text-black'>AI-Powered Health Solutions</h1>
<hr />
        <p className='content py-4'>
        At the heart of Medicare is our advanced Artificial Intelligence (AI) model.
         This innovative technology analyzes symptoms and provides you with accurate medicine recommendations.
          But we don't stop at just conventional medicine; our AI also suggests natural, time-tested remedies—those
           'desi tareekas' that have been passed down through generations. We believe in a holistic approach to
            health, combining the best of science and tradition to support your well-being.
        </p>
        </div>

        <div className='mx-auto shadow-xl shadow-black p-8 rounded-xl  w-[90%] bg-[#cba65b] cursor-pointer hover:shadow-2xl hover:shadow-yellow-700'>

        <h1 className='text-2xl font-extrabold mb-4 text-black'>What we offer?</h1>

        <hr />
        <p className='content py-4'>
        <ul className=' list-disc'>

<li>
  <span className='font-bold'>
    
    Online Medicine Store:
    </span>
     Browse and purchase from a wide range of medications, delivered right to your doorstep.
  </li>
  <li>
<span className='font-bold'>

Personalized Recommendations: 
</span>
Get customized medicine suggestions based on your symptoms and medical history.
  </li>
  <li>
<span className='font-bold'>

AI-Driven Advice: 
</span>
Receive guidance on lifestyle changes and natural remedies to help manage and cure various ailments.
  </li>
  <li>
<span className='font-bold'>

Secure and User-Friendly: 
</span>
Our platform ensures a seamless and secure shopping experience, with easy navigation and reliable customer support.
  </li>
</ul>
        </p>
        </div>

        <div className='mx-auto shadow-xl shadow-black p-8 rounded-xl  w-[90%] bg-[#cba65b] cursor-pointer hover:shadow-2xl hover:shadow-yellow-700'>

        <h1 className='text-2xl font-extrabold mb-4 text-black'>Our Vision</h1>
<hr />
        <p className='content py-4'>
        We envision a future where healthcare is smarter, more accessible, and tailored to the individual.
 By leveraging the power of AI, we aim to revolutionize how people approach their health, blending modern medicine with traditional wisdom for a more holistic approach to well-being.


        </p>
        </div>

    </div>

    <Footer/>
      
    </>
  )
}
