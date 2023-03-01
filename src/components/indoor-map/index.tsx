import React from "react";
import { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LocationList } from "./location-list";
import { Markers } from "./markers";
import { Overlay } from "./overlay";

export interface MarkerProp {
  position: [number, number],
  name: string,
  description?: string
}

export interface IndoorMapProps {
  center: [number, number],
  markers: MarkerProp[]
}

export const IndoorMap: FC<IndoorMapProps> = (props) => {
  return (
    <MapContainer center={{ lat: props.center[0], lng: props.center[1] }} zoom={22} maxZoom={30} scrollWheelZoom={false} className="w-full h-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={30}
      />
      <Overlay />
      <LocationList markers={props.markers} />
      <Markers markers={props.markers} />
    </MapContainer>
  );
}
