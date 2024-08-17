"use client"
import React, { useState } from 'react'
import AdminGet from "./AdminGet";
import ContactAd from './ContactAd';
export default function admin() {

 

  const [title, setTitle] = useState("");
  const [headline, setHeadline] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");
  const [videos, setVideos] = useState("");

 


  const handleSubmit = async (e) => {

    e.preventDefault();
  }

// -------------------------Api--------------------------
  return (
    <> 

         <section className="admin">

          <div className="container">

            <AdminGet/>

            <div className="text-center">
                    <div className="admin-box">
                      <form onSubmit={handleSubmit}>
                        <label htmlFor="title">title</label>
                      <input type="text" onChange={(e) => setTitle(e.target.value)}  className='form-control' placeholder='title' />
                      <label htmlFor="headline">headline</label>
                      <input type="text" onChange={(e) => setHeadline(e.target.value)}  className='form-control' placeholder='headline' />
                      <label htmlFor="img">img</label>
                      <input type="text" onChange={(e) => setImg(e.target.value)}  className='form-control' placeholder='img' />
                      <label htmlFor="content">content</label>
                      <input type="text" onChange={(e) => setContent(e.target.value)}  className='form-control' placeholder='content' />
                      <label htmlFor="videos">videos</label>
                      <input type="text" onChange={(e) => setVideos(e.target.value)}  className='form-control' placeholder='videos' />


                         <button type="button" className='btn btn-success m-3'>ตกลง</button> 
                      </form>
                    </div>
            </div>
          </div>
         
         </section>
       <ContactAd/>
      
    </>
  )
}
