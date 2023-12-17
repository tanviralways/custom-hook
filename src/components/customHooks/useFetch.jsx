import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("not fetching correctly");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setDatas(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [url]);
  return {
    datas,
    isLoading,
    error,
  };
}

export default useFetch;
