import { useState } from "react";
import { locations } from "../../data/locations";
import Card from "./Card";
import "./card.css";

export default function CardWrapper() {
  const [openId, setOpenId] = useState<number | null>(null);

  const updateOpenId = (id: number) => setOpenId(id);

  const locationElements = locations.map((location) => {
    return (
      <Card
        key={location.id}
        id={location.id}
        title={location.name}
        description={location.description}
        image={location.image}
        setOpenId={updateOpenId}
        isOpen={openId === location.id}
      />
    );
  });

  return <div className="card-wrapper">{locationElements}</div>;
}
