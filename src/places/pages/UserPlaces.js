import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State",
    description: "Bomb",
    imageUrl:
      "https://images.musement.com/cover/0002/94/ny-skyline-with-empire-state-building-xxl-jpg_header-193949.jpeg?w=480&h=200&q=60&fit=crop",
    address: "32141 Highway ave",
    location: {
      lat: 40.2342,
      lng: 23.1241,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State",
    description: "Bomb",
    imageUrl:
      "https://images.musement.com/cover/0002/94/ny-skyline-with-empire-state-building-xxl-jpg_header-193949.jpeg?w=480&h=200&q=60&fit=crop",
    address: "32141 Highway ave",
    location: {
      lat: 40.2342,
      lng: 23.1241,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
