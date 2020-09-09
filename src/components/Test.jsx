import React, { useEffect, useState } from "react";

import useFetch from "../hooks/useFetch";
import API from "../utils/API";

const Test = () => {
  const { response, isLoading, error } = useFetch({
    api: API,
    method: "get",
    url: "/?key=17864962-b5b3c380b7c652569844aadb6",
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(response);
    if (response !== null) {
      setData(response);
    }
  }, [response]);

  return <div className="App">{isLoading}</div>;
};

export default Test;
