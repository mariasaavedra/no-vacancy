import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";
import axios from "axios";
import { _properties, PropertyType, PropertyListType } from "@/constants";
import PropertyListing from "@/components/PropertyListing/PropertyListing";

export default function HomePage() {
  // SANDBOX
  const api_key = "TucP0tg7Qi2Gp4ET";
  const uuid = "a783c98c-302b-4891-b2a1-3e863bac0254";
  const url = `https://api.hostfully.com/v1/properties?agencyUid=${uuid}&limit=20&offset=0`;
  const properties: PropertyListType = _properties.sort();

  return (
    <>
      <nav className="flex gap-8 container mx-8">
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
      <section className="m-8 columns-4">
        {properties.map((property: PropertyType, index) => {;
          return <PropertyListing key={index} index={index} property={property} />;
        })}
      </section>
    </>
  );
}
