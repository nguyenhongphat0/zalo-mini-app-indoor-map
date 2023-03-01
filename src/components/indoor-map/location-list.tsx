import React from "react";
import { FC } from "react";
import { useMap } from "react-leaflet";
import { MarkerProp } from ".";

export const LocationList: FC<{ markers: MarkerProp[] }> = ({ markers }) => {
  const map = useMap();

  return (
    <div className="bg-black rounded-2xl fixed bottom-2 right-2 p-2 z-[1000] space-y-2">
      {markers.map((marker, i) => <div onClick={() => map.flyTo(marker.position, 22)} className="bg-[#2F3132] text-white active:bg-[#B1EBFE] active:text-black p-4 rounded-2xl font-medium text-center" key={i}>
        {marker.name}
      </div>)}
    </div>
  );
}