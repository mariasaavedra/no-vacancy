import { PropertyType } from "@/constants";
import styles from "./PropertyListing.module.css";

interface PropertyListingProps {
  property: PropertyType;
  key: string;
}

export default function PropertyListing({
  property,
  key,
}: PropertyListingProps) {
  return (
    <div key={key} className={styles.PropertyListingComponent}>
      <div>
        <img src={property.photos[0].url} alt={property.name} />
        <q>{property.name}</q>
      </div>
    </div>
  );
}
