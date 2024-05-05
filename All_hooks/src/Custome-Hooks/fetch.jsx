import { useEffect, useState } from "react";

const Fetch = (url, options) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
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
    fetchData();
  }, []);

  return [data, loading];
};

export default Fetch;
