import { PropertyType } from "@/constants";
import styles from "./PropertyListing.module.css";
import { HomeIcon, UserIcon } from '@heroicons/react/24/solid';
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface PropertyListingProps {
  id: number | string;
}

export default function PropertyListing({
  id,
}: PropertyListingProps) {


  async function fetchProperty(uid: number | string) {
    try {
      const res = await axios.get(`/properties/${uid}`);
      return res.data;
    } catch (error) {
      console.error("err:" + error);
    }
  }
  
  const propertyQuery = useQuery({
    queryKey: ['fetchProperty', id],
    queryFn: () => fetchProperty(id),
  })

  return (

    <div key={id} className={styles.PropertyListingComponent}>
      <Link href={`/properties/${id}`}>
        <img src={propertyQuery.data.picture} alt={propertyQuery.data.name} />
        <p className="text-xl text-bold uppercase my-2">{propertyQuery.data.name}</p>
        <span><UserIcon  className="h-4 w-4 inline-block text-black" />: {propertyQuery.data.maximumGuests}</span>
        <span><HomeIcon  className="h-4 w-4 inline-block text-black" />: {propertyQuery.data.bedrooms}</span>
      </Link>
    </div>
  );
}
