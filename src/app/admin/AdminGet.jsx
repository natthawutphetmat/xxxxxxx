"use client"


import axios from 'axios'
import { useEffect, useState } from 'react'

function AdminGet() {
  const [data, setData] = useState([]);

  const callApi = async () => {
    try {
      const res = await axios.get("https://post-api.ad-dev.net/get");
      const data_format = res.data;

      setData(data_format);  // อัปเดต state ทั้งหมดในครั้งเดียว
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
             <p> {item.title}</p>
             <p> {item.headline}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default AdminGet;
