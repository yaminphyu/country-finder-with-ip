'use client'
import { useState } from "react";

export default function Home() {
  const [jsonData, setJsonData] = useState({
    id: '',
    city: '',
    region: '',
    country: '',
    loc: '',
    org: '',
    timezone: '',
  });
  // const fetchCountry = async () => {
  //   try {
  //       const response = await fetch('/api/getCountry');
  //       const data = await response.json();
  //       setJsonData({
  //         id: data.id,
  //         city: data.city,
  //         region: data.region,
  //         country: data.country,
  //         loc: data.loc,
  //         org: data.org,
  //         timezone: data.timezone
  //       });
  //   } catch (error) {
  //       console.error('Error fetching country:', error);
  //   }
  // };

  // fetchCountry();

  return (
    <>
      <h1>Hello</h1>
      {
        jsonData && (
          <div>
            <p>{jsonData.id}</p>
            <p>{jsonData.city}</p>
            <p>{jsonData.region}</p>
            <p>{jsonData.country}</p>
            <p>{jsonData.loc}</p>
            <p>{jsonData.org}</p>
            <p>{jsonData.timezone}</p>
          </div>
        )
      }
    </>
  );
}
