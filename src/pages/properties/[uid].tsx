import PropertyListing from "@/components/PropertyListing/PropertyListing";
import { UserIcon, HomeIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function HomePage() {
  const api_key = "TucP0tg7Qi2Gp4ET";
  const router = useRouter();
  const uid = router.query.uid as string;
  console.log(router.query);
  axios.defaults.baseURL = "https://api.hostfully.com/v2";
  axios.defaults.headers.common["X-HOSTFULLY-APIKEY"] = api_key;

  async function fetchProperty(uid: number | string) {
    try {
      const res = await axios.get(`/properties/${uid}`);
      return res.data;
    } catch (error) {
      console.error("err:" + error);
    }
  }

  async function fetchPropertyDescription(uid: number | string) {
    try {
      const res = await axios.get(`/propertydescriptions`, {
        params: {
          propertyUid: uid,
        },
      });
      return res.data[0];
    } catch (error) {
      console.error("err:" + error);
    }
  }

  const propertyQuery = useQuery({
    queryKey: ["fetchProperty", uid],
    queryFn: () => fetchProperty(uid),
  });

  const propertyDescriptionQuery = useQuery({
    queryKey: ["fetchPropertyDescription", uid],
    queryFn: () => fetchPropertyDescription(uid),
  });

  if (propertyQuery.isLoading || propertyDescriptionQuery.isLoading) {
    return <span>Loading...</span>;
  }

  if (propertyQuery.isError) {
    return <span>Error</span>;
  }

  return (
    <section>
      {propertyQuery.data && (
        <>
          <div className="columns-2">
            <section className="p-16">
              <p className="text-bold my-2 text-xl uppercase">
                {propertyQuery.data.name}
              </p>

              <div>
                <span className="mr-8 align-middle">
                  <label className="mr-2">Guests:</label>
                  {propertyQuery.data.maximumGuests}
                </span>
              </div>

              <div>
                <span className="mr-8 align-middle">
                  <label className="mr-2">Beds:</label>
                  {propertyQuery.data.bedrooms}
                </span>
              </div>

              <div>
                <label className="mr-2">Address:</label>
                <span>{propertyQuery.data.address1}, </span>
                <span>{propertyQuery.data.city} </span>
                <span>{propertyQuery.data.state} </span>
              </div>

              <div className="mt-8">
                {propertyDescriptionQuery.data.summary }
              </div>
              <div className="mt-8">
                {propertyDescriptionQuery.data.interaction }
              </div>
              <div className="mt-8">
                {propertyDescriptionQuery.data.neighbourhood }
              </div>
            </section>

            <img
              className="w-full"
              src={propertyQuery.data.picture}
              alt={propertyQuery.data.name}
            />
          </div>
        </>
      )}
    </section>
  );
}
