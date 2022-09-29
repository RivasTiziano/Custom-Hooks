import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [info, setInfo] = useState({
    data: null,
    isLoading: true,
  });

  const getQuotes = async () => {
    setInfo({ ...info, isLoading: true });

    const resp = await fetch(url);
    const data = await resp.json();

    setInfo({
      data,
      isLoading: false,
    });
  };

  useEffect(() => {
    getQuotes();
  }, [url]);

  return info;
};
