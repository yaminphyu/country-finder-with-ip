'use client'
import { useEffect, useState } from "react";

export default function Home() {
  const [isFetch, setIsFetch] = useState(true);
  const fetchCountry = async () => {
    try {
        const response = await fetch('/api/getCountry');
        const data = await response.json();
        console.log(data);
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
    </>
  );
}
