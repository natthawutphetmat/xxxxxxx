"use client"

import Link from 'next/link';
import React,{useEffect, useState} from 'react';
import Image from 'next/image';

 

export default function Navbar() {

  const [username, setUsername] = useState('');

  useEffect(() => {
    const users = localStorage.getItem('users');
    setUsername(users);
  })

 
console.log(username);
  return (
   

    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/contact">
          <Image src="/img/favicon.ico" width={50} height={50} alt="logo" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="/facebook_ads">
                Facebook
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="/google_ads">
                Google
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="/marketing_courses">
                คอร์สเรียน
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="/post">
                Post
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="/dowloads">
                dowloads
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="/admin">
                admin
              </Link>
            </li>
          </ul>
          <span className="navbar-text mx-5">
          {username ? (
            <>
             <Image src="/img/user.png" width={50} height={50} alt="logo" />
            </>
          
          ):(
          
          <> <Link href='login'>Login</Link></>
          
          )}
           
           
          </span>
        </div>
      </div>
    </nav>

  
  );
}
