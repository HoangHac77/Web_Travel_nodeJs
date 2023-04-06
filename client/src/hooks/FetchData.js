import { useState, useEffect } from "react";
import axios from "axios";

//import cac thu vien

//tham so nhan vao url
const useFetch = (url) => {
  //Quan ly trang thai voi useState  
  const [data, setData] = useState([]);
  //set loading
  const [loading, setLoading] = useState(false);
  //set error
  const [error, setError] = useState(false);

  //life cycle : thay doi theo url
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
