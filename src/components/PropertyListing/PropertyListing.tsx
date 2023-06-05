import { PropertyType } from "@/constants";
import styles from "./PropertyListing.module.css";
import { HomeIcon, UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface PropertyListingProps {
  id: number | string;
}

export default function PropertyListing({ id }: PropertyListingProps) {
  async function fetchProperty(uid: number | string) {
    try {
      const res = await axios.get(`/properties/${uid}`);
      return res.data;
    } catch (error) {
      console.error("err:" + error);
    }
  }

  const propertyQuery = useQuery({
    queryKey: ["fetchProperty", id],
    queryFn: () => fetchProperty(id),
  });

  return (
    <>
      {propertyQuery.data && (
        <article>
          <div key={id} className={styles.PropertyListingComponent}>
            <Link href={`/properties/${id}`}>
              <img
                src={propertyQuery.data.picture}
                alt={propertyQuery.data.name}
              />
              <p className="text-bold my-2 text-xl uppercase">
                {propertyQuery.data.name}
              </p>
              <div>
                <span className="mr-8 align-middle">
                  <label className="mr-2">Guests:</label>
                  {propertyQuery.data.maximumGuests}
                </span>
                <span className="mr-8 align-middle">
                  <label className="mr-2">Beds:</label>
                  {propertyQuery.data.bedrooms}
                </span>
              </div>
            </Link>
          </div>
        </article>
      )}
    </>
  );
}
