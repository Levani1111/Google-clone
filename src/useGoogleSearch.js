import { useState, useEffect } from "react";
import API_KEY from "./keys.js";

const CONTEXT_KEY = "7571bf4059a8bd868";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}$q=${term}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
};

export default useGoogleSearch;
