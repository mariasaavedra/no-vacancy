import PropertyListing from "@/components/PropertyListing/PropertyListing";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function HomePage() {
  const api_key = "TucP0tg7Qi2Gp4ET";
  const uid = "b9599815-a5b8-40cf-aa1d-0fa2acac256d";
  const [propertiesUids, setPropertiesUids] = useState<Array<string>>([]);
  axios.defaults.baseURL = "https://api.hostfully.com/v2";
  axios.defaults.headers.common["X-HOSTFULLY-APIKEY"] = api_key;

  const propertyUidsQuery = useQuery({
    queryKey: ["propertyUids"],
    queryFn: fetchPropertyUids,
  })

  async function fetchPropertyUids() {
    try {
      const res = await axios.get(`/properties`, {
        params: {
          agencyUid: uid,
          limit: "20",
          offset: "0",
        },
      });
      const uids = Object.values(res.data)[0] as Array<string>;
      setPropertiesUids(uids)
      return uids
    } catch (error) {
      console.error("err:" + error)
    }
  }

  if (propertyUidsQuery.isLoading) {
    return <span>Loading...</span>
  }

  if (propertyUidsQuery.isError) {
    return <span>Error</span>
  }

  return (
    <div className="container p-16">
      <nav className="mr-8 mb-8 flex gap-8">
        <div className="flex flex-col">
          <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">Checkin</label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight" type="date"></input>
        </div>
        <div className="flex flex-col">
          <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">Checkout</label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight" type="date"></input>
        </div>
        <div className="flex flex-col">
          <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">Guests</label>
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight" type="number"></input>
        </div>
      </nav>
      <section className="columns-4">
      {propertyUidsQuery.data &&
        propertyUidsQuery.data.map((uid) => {
          return <PropertyListing key={uid} id={uid} />
        })}
      </section>

    </div>
  )
}
