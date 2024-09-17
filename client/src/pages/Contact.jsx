import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
   <Navbar/>

    <div className=' pt-32 space-y-5 bg-slate-100'>
        <div className='mx-auto shadow-xl shadow-black p-8 rounded-xl  w-[90%] bg-[#cba65b] cursor-pointer hover:shadow-2xl hover:shadow-yellow-700'>


        <h1 className='text-2xl font-extrabold mb-4 text-black'>Contact Us</h1>
        <hr />
        <p className='content py-4'>



        We'd love to hear from you! Whether you have a question about our services, need assistance with your order, or want to learn more about how Medicare can support your health journey, our team is here to help.</p>
        </div>

        <div className='mx-auto shadow-xl shadow-black p-8 rounded-xl  w-[90%] bg-[#cba65b] cursor-pointer hover:shadow-2xl hover:shadow-yellow-700'>

        <h1 className='text-2xl font-extrabold mb-4 text-black'>Get in Touch</h1>
        <hr />
        <p className='content py-4'>
        <ul className='list-disc'>
<li>

Technical Assistance: If you encounter any technical issues or have feedback about our platform, our technical support team is ready to help resolve any concerns.
</li>
<li>

Customer Support: For any questions related to orders, deliveries, or using our platform, please reach out to our customer support team. We're here to provide you with the assistance you need.
</li>
<li>

General Inquiries: Have a general question or want to learn more about Medicare? We're happy to provide more information and answer any queries you might have.
</li>
</ul>
        </p>
        </div>

        <div className='mx-auto shadow-xl shadow-black p-8 rounded-xl  w-[90%] bg-[#cba65b] cursor-pointer hover:shadow-2xl hover:shadow-yellow-700'>

        <h1 className='text-2xl font-extrabold mb-4 text-black'>Contact Information</h1>
        <hr />
        <p className='content py-4'>
        <ul className='list-disc'>
  <li>

Email: support@medicare.com
  </li>
  <li>

Phone: +1 (123) 456-7890
  </li>
  <li>

Address: Medicare Headquarters, 1234 Health Street, Wellness City, ZIP 56789
  </li>
</ul>
        </p>
        </div>

        <div className='mx-auto shadow-xl shadow-black p-8 rounded-xl  w-[90%] bg-[#cba65b] cursor-pointer hover:shadow-2xl hover:shadow-yellow-700'>

        <h1 className='text-2xl font-extrabold mb-4 text-black'>Follow Us</h1>
        <hr />
        <p className='content py-4'>
        <ul className='list-disc'>
<li>

Facebook: facebook.com/medicare
</li>
<li>

Twitter: twitter.com/medicare
</li>
<li>

Instagram: instagram.com/medicare
</li>
</ul>
        </p>
        </div>

       

    </div>

    <Footer/>
      
    </>
  )
}
