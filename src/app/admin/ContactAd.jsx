"use client"


import axios from 'axios'
import { useEffect, useState } from 'react'

function ContactAd() {
  const [data, setData] = useState([]);

  const callApi = async () => {
    try {
      const res = await axios.get("https://api-contact.ad-dev.net/get");
      const data_format = res.data;

      setData(data_format);   
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }
  
  useEffect(() => {
    callApi();
  },[]);

  return (
    <>
      {data.length > 0 && (
        <div>
          {data.map((item, index) => (
            <div key={index}>

   <div className="w-50 mx-auto"> <div className="d-flex">ชื่อ-{item.name} | เบอร์:{item.phone} | เมล:{item.email} | text:{item.content}</div></div>
    <hr />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ContactAd;
