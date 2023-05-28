import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";
import axios from "axios";
import { _properties, PropertyType, PropertyListType } from "@/constants";
import PropertyListing from "@/components/PropertyListing/PropertyListing";
import PropertyPage from "@/components/PropertyPage/PropertyPage";
import { useRouter } from "next/router";
import { isNumber } from "tailwind-merge/dist/lib/validators";

export default function HomePage() {
  // SANDBOX
  const api_key = "TucP0tg7Qi2Gp4ET";
  const uuid = "a783c98c-302b-4891-b2a1-3e863bac0254";
  const url = `https://api.hostfully.com/v1/properties?agencyUid=${uuid}&limit=20&offset=0`;

  const router = useRouter();
  const id = router.query.id as string;

  const _id = parseInt(id);

  return (
    <>
      <section className="m-8 columns-1 md:columns-2">
        {id && <PropertyPage id={_id} />}
      </section>
    </>
  );
}
