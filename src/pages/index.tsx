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
  const properties: PropertyListType = _properties;

  return (
    <>
      <section className="columns-2 m-8">
        {properties.map((property: PropertyType) => {
          return <PropertyListing key={property.name} property={property} />;
        })}
      </section>
    </>
  );
}
