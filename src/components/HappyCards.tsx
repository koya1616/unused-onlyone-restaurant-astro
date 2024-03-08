import React from "react";
import { HappyCard } from "../components/HappyCard";

const isDev = process.env.NODE_ENV === 'development';
const data = await fetch(isDev ? 'http://localhost:7777/restaurants' : 'https://api-onlyone.api-onlyone.workers.dev/restaurants').then((response) =>
  response.json()
);

export const HappyCards = () => {
  return (
    <>
      <div className="flex justify-center flex-wrap gap-4">
        { data.restaurants.map((restaurant) => (
          <HappyCard
            name={restaurant.name}
            gmap={restaurant.gmap}
          />
        ))}
      </div>
    </>
  );
}
