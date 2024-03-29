import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
  // initial states we need, which are data, error and loading states.
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(false);

  useEffect(() => {
    // function responsible for making the network request and updating the relevant states
    const fetchData = async () => {
      try {
        const resolvedData = await fetch(url),
          toString = await resolvedData.text(),
          parser = new DOMParser(),
          xmlDoc = parser.parseFromString(toString, "text/xml");
        // once data is resolved we set the data and set loading to false
        setResponse(xmlDoc);
      } catch (error) {
        // if any error occurs we capture it in error state
        setError(error);
      }
    };
    fetchData();
  }, [url]);

  // finally we return all state values as an array
  return { response, error };
};
