'use client'
import { useEffect, useState } from "react";

export default function Home() {
  const [isFetch, setIsFetch] = useState(true);
  const [jsonData, setJsonData] = useState({
    id: '',
    city: '',
    region: '',
    country: '',
    loc: '',
    org: '',
    timezone: '',
  });
  const fetchCountry = async () => {
    try {
        const response = await fetch('/api/getCountry');
        const data = await response.json();
        setJsonData({
          id: data?.data.id,
          city: data?.data.city,
          region: data?.data.region,
          country: data?.data.country,
          loc: data?.data.loc,
          org: data?.data.org,
          timezone: data?.data.timezone
        });
    } catch (error) {
        console.error('Error fetching country:', error);
    }
  };

  useEffect(() => {
    if (isFetch) {
      fetchCountry();
      setIsFetch(false);
    }
  }, [isFetch]);

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
