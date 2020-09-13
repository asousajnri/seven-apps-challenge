import React from "react";
import axios from "axios";

type Response<T> = {
  isFetchinging: boolean;
  error: null;
  data: T[];
};

const useFetch = <T>(resource: string): Response<T> => {
  const [isFetchinging, setIsFetchinging] = React.useState(true);
  const [dataApi, setDataApi] = React.useState<T[]>([]);
  const [error, setError] = React.useState(null);

  const fetchData = React.useCallback(async () => {
    try {
      setIsFetchinging(true);
      const storageValue = localStorage.getItem('data-users');

      if(storageValue) {
        setDataApi(JSON.parse(storageValue));
      } else {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}${resource}`);
        const { data } = await response;
  
        if(data) {
          setDataApi(data.data);
          localStorage.setItem('data-users', JSON.stringify(data.data))
        }
      }
    } catch(err) {
      setError(err);
    } finally {
      setIsFetchinging(false);
    }
  }, [resource]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    isFetchinging,
    data: dataApi,
    error
  }
};

export default useFetch;