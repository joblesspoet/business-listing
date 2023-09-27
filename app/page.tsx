"use client";

import Hero from "@/components/Hero";
import PlaceList, { PlaceListItemProps } from "@/components/PlaceList";
import { useEffect, useState } from "react";

export default function Home() {
  const [places, setPlaces] = useState(Array<PlaceListItemProps> || null);
  const [query, setQuery] = useState<string | null>(null);
  const getPlaces = async (searchedStr: string) => {
    const res = await fetch("/api/google-place-api?placeInfo=" + searchedStr);
    const data = await res.json();
    console.log(data.data);
    setPlaces(data.data);
  };

  const handleSearchQuery = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  useEffect(() => {
    if (query) {
      getPlaces(query);
    }
  }, [query]);

  return (
    <div>
      <Hero onSearch={handleSearchQuery} />
      {places && <PlaceList data={places} />}
    </div>
  );
}
