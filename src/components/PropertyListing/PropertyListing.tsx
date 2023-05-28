import { PropertyType } from "@/constants";
import styles from "./PropertyListing.module.css";
import { HomeIcon, UserIcon } from '@heroicons/react/24/solid';
import Link from "next/link";

interface PropertyListingProps {
  property: PropertyType;
  index: number;
}

export default function PropertyListing({
  property,
  index,
}: PropertyListingProps) {
  return (
    <div key={index} className={styles.PropertyListingComponent}>
      <Link href={`/${index}`}>
        <img src={property.photos[0].url} alt={property.name} />
        <p className="text-xl text-bold uppercase my-2">{property.name}</p>
        <span><UserIcon  className="h-4 w-4 inline-block text-black" />: {property.maximumGuests}</span>
        <span><HomeIcon  className="h-4 w-4 inline-block text-black" />: {property.bedrooms}</span>

      </Link>
    </div>
  );
}
