import axios from "axios";
import { useEffect, useState } from "react";

export const useGetFilms = (query, page) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    const getFilms = async (s = "", page) => {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        "https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8",
        {
          signal: abortController.signal,
          params: {
            s,
            page,
          },
        }
      );

      if (res.data.Response === "False") {
        setData();
        throw new Error(res.data.Error);
      }

      setData(res.data);
    };

    if (query) {
      getFilms(query, page)
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    } else {
      setData();
    }

    return () => {
      abortController.abort();
    };
  }, [query, page]);

  return { data, error, loading };
};
