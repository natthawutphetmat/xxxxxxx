"use client";
import { useRouter } from 'next/navigation'
import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      content: formData.message
    });
    
    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api-contact.ad-dev.net/add',  
      headers: { 
        'Content-Type': 'application/json'
      },
      data: data
    };
    
    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));

      // แสดงการแจ้งเตือนเมื่อส่งข้อมูลสำเร็จ
      Swal.fire({
        title: 'สำเร็จ!',
        text: 'ข้อมูลของคุณถูกส่งเรียบร้อยแล้ว',
        icon: 'success',
        confirmButtonText: 'ตกลง'
      });
      router.push('/contact');
      // รีเซ็ตฟอร์ม
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.log(error);

      // แสดงการแจ้งเตือนเมื่อเกิดข้อผิดพลาด

    }
  };

  return (
    <div className="contact-container">
      <h1>ติดต่อเรา</h1>
      <p>หากคุณมีคำถามหรือข้อสงสัย สามารถติดต่อเราผ่านฟอร์มนี้ได้เลย</p>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">ชื่อของคุณ</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">อีเมลของคุณ</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">เบอร์โทรของคุณ</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">ข้อความของคุณ</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">ส่งข้อความ</button>
        </form>
      </div>

      <div className="contact-info">
        <h2>ข้อมูลการติดต่อ</h2>
        <p>คุณสามารถติดต่อเราผ่านช่องทางต่าง ๆ ได้ดังนี้:</p>
        <ul>
          <li>อีเมล: admin@ad-dev.net</li>
          <li>โทรศัพท์: 083-252-8058</li>
          <li>ที่อยู่: 123/45 ถนนตัวอย่าง เขตตัวอย่าง กรุงเทพฯ 10110</li>
        </ul>
      </div>

      <Image
        src="/img/contact.webp"
        alt="Contact Us"
        width={750}
        height={400}
        className="imgfb"
        loading="lazy"
      />
    </div>
  );
}
