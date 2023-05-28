import { PropertyListType, PropertyType, _properties } from "@/constants";
import styles from "./PropertyPage.module.css";

interface PropertyPageProps {
  id: number | string;
}

export default function PropertyPage({ id }: PropertyPageProps) {
  const properties: PropertyListType = _properties;
  const property: PropertyType = properties[id];

  return (
    <div className={styles.PropertyPageComponent}>
      <div>
        <h1 className="text-2xl font-bold">{property.name}</h1>
        {property.description}
        Bedrooms: {property.bedrooms}
        Bathrooms: {property.bathrooms}
        {property.photos.map((photo, index) => {
          return (
            <div key={index}>
              <img src={photo.url} />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}
