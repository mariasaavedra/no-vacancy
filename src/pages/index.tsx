import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function HomePage() {
  const api_key = "TucP0tg7Qi2Gp4ET";
  const uid = "b9599815-a5b8-40cf-aa1d-0fa2acac256d";
  const [propertiesUids, setPropertiesUids] = useState<Array<string>>([]);
  axios.defaults.baseURL = "https://api.hostfully.com/v2";
  axios.defaults.headers.common["X-HOSTFULLY-APIKEY"] = api_key;

  async function fetchPropertyUids() {
    try {
      const res = await axios.get("/properties", {
        params: {
          agencyUid: uid,
          limit: "20",
          offset: "0",
        },
      });
      const uids = Object.values(res.data)[0] as Array<string>;
      setPropertiesUids(uids);
      return uids;
    } catch (error) {
      console.error("err:" + error);
    }
  }

  async function getProperty(uid: string) {
    try {
      const response = await axios.get("/properties", {
        params: { agencyUid: "b9599815-a5b8-40cf-aa1d-0fa2acac256d" },
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const propertyUidsQuery = useQuery({
    queryKey: ["propertyUids"],
    queryFn: fetchPropertyUids,
  });

  if (propertyUidsQuery.isLoading) {
    return <span>Loading...</span>;
  }

  if (propertyUidsQuery.isError) {
    return <span>Error</span>;
  }

  return (
    <div>
      <h1>Listings</h1>


    </div>
  );
}
