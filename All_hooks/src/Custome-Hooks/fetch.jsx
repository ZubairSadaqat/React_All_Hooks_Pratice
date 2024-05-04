import { useEffect, useState } from "react";

const Fetch = (url, options) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fethData() {
    setLoading(true);
    try {
      let response = await fetch(url, { ...options });
      let result = await response.json();

      if (result) {
        setLoading(false);
        setData(result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fethData();
  }, []);

  return [loading, data];
};

export default Fetch;
