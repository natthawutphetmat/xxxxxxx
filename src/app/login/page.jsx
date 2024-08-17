"use client"

import React, { useState, useEffect} from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

const usernames = 'admin';
const passwords = '1122';

export default function page() {
    const router = useRouter()
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[users, setUsers] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(username && password) {
            if(username === usernames && password=== passwords) {

                localStorage.setItem('users', 'admin');
                const users = localStorage.getItem('users');
                setUsers(users);
                Swal.fire({
                    title: "success!",
                    text: "กรุณากรอกข้อมูลให้ครบถ้วน!",
                    icon: "success"
                  });
            } else {
                Swal.fire({
                    title: "error!",
                    text: "กรุณาใส่ User หรือ Password ให้ถูกต้อง!",
                    icon: "error"
                  });
            }

           
        } else {
            Swal.fire({
                title: "error!",
                text: "กรุณากรอกข้อมูลให้ครบถ้วน!",
                icon: "error"
              });
        }



    }

    useEffect(() =>{
        if(users) {
            if(users === 'admin') {
                router.push('/');
            }
           
        }
    },[users])










  return (
    <>

<div className="container text-center">
   
<form onSubmit={handleSubmit} className='shadow-lg p-5 mb-5 bg-body-tertiary rounded w-50 mt-5 mx-auto'>
  <div className="mb-3">
    <label  >username</label>
    <input type="text" className="form-control"    onChange={(e) => setUsername(e.target.value)} />
   
  </div>
  <div className="mb-3">
    <label  >Password</label>
    <input type="password" className="form-control"   onChange={(e) => setPassword(e.target.value)} />
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
<br /><br /><br /><br /><br /><br /><br />
<br /><br /><br /><br /><br /><br /><br />

      
    </>
  )
}
