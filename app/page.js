'use client'
import { useState } from "react";

export default function Home() {
  const [country, setCountry] = useState('');
  const fetchCountry = async () => {
    try {
        const response = await fetch('/api/getCountry');
        const data = await response.json();
        setCountry(data.country);
        console.log('Country:', data.country);
    } catch (error) {
        console.error('Error fetching country:', error);
    }
  };

  fetchCountry();

  return (
    <>
      <h1>hello</h1>
      <p>{country}</p>
    </>
  );
}
