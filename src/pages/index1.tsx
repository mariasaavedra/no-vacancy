import { useEffect, useState } from "react";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { _properties, PropertyType, PropertyListType } from "@/constants";
import PropertyListing from "@/components/PropertyListing/PropertyListing";

export default function HomePage1() {
  const api_key = "TucP0tg7Qi2Gp4ET";
  const uid = "b9599815-a5b8-40cf-aa1d-0fa2acac256d";
  const [propertiesUids, sPropertiesUids] = useState<Array<string>>([]);

  axios.defaults.baseURL = "https://api.hostfully.com/v2";
  axios.defaults.headers.common["X-HOSTFULLY-APIKEY"] = api_key;

  async function getProperties() {
    try {
      const response = await axios.get("/properties", {
        params: {
          agencyUid: uid,
          limit: "20",
          offset: "0",
        },
      });
      console.log("response", response);
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
    }``
  }

  useEffect(() => {
    getProperties();
  }, [])


  // propertiesUids.forEach(async (id: string) => {
  //   await getProperty(id);
  // });

  return (
    <>
      <nav className="container mx-8 flex gap-8">
        <div className="flex flex-col">
          <label>Checkin</label>
          <input type="date"></input>
        </div>
        <div className="flex flex-col">
          <label>Checkout</label>
          <input type="date"></input>
        </div>
        <div className="flex flex-col">
          <label>Guests</label>
          <input type="text"></input>
        </div>
      </nav>
      {/* <section className="m-8 columns-4">
        {properties.map((property: PropertyType, index) => {
          return (
            <PropertyListing key={index} index={index} property={property} />
          );
        })}
      </section> */}
    </>
  );
}
