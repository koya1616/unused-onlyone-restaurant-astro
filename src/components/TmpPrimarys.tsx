import React from "react";
import { TmpPrimary } from "./TmpPrimary";

const isDev = process.env.NODE_ENV === 'development';
const data = await fetch(isDev ? 'http://localhost:7777/restaurants' : 'https://api-onlyone.api-onlyone.workers.dev/restaurants').then((response) =>
  response.json()
);

export const TmpPrimarys = () => {
  return (
    <>
      <div className="flex justify-center flex-wrap gap-4">
        { data.restaurants.map((restaurant) => (
          <TmpPrimary
            name={restaurant.name}
            gmap={restaurant.gmap}
          />
        ))}
      </div>
    </>
  );
}
