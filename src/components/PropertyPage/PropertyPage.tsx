import { PropertyListType, PropertyType, _properties } from "@/constants";
import styles from "./PropertyPage.module.css";

interface PropertyPageProps {
  id: number;
}

export default function PropertyPage({ id }: PropertyPageProps) {
  const properties: PropertyListType = _properties;
  const property: PropertyType = properties[id];

  return (
    <div className={styles.PropertyPageComponent}>
      <div className="p-8">
        <h1 className="text-2xl my-8 font-bold">{property?.name}</h1>
        <p className="my-8">{property.description}</p>
        {property?.photos.map((photo, index) => {
          return (
            <div key={index}>
              <img className="my-8" src={photo.url} />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}
