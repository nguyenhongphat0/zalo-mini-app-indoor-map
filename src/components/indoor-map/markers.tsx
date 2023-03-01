import { icon } from "leaflet";
import React, { Suspense, useState } from "react";
import { FC } from "react";
import { Marker } from "react-leaflet";
import { Sheet } from "zmp-ui";
import { MarkerProp } from ".";
import iconUrl from '../../static/marker.svg';
import { UserTicket } from "./user-ticket";

export const Markers: FC<{ markers: MarkerProp[] }> = ({ markers }) => {
  const [activeMarker, setActiveMarker] = useState<MarkerProp | undefined>();
  return <>
    {markers.map((marker, i) => <Marker key={i} eventHandlers={{
      click: () => setActiveMarker(marker)
    }} position={marker.position} icon={icon({
      iconUrl,
      iconSize: [24, 34.4],
      iconAnchor: [12, 34.4]
    })} />)}
    <Sheet visible={!!activeMarker} title={activeMarker?.name} onClose={() => setActiveMarker(undefined)} autoHeight>
      <div className="p-4 space-y-4">
        <h1 className="font-bold">Sun World – The World Of Wow</h1>
        <p>Sun World – Thương hiệu vui chơi giải trí số 1 Việt Nam và hàng đầu Đông Nam Á thuộc Tập đoàn Sun Group. Sun World là nơi du khách sẽ khai mở cánh cửa thời gian, vượt qua ranh giới về không gian để khám phá và tận hưởng những trải nghiệm vượt xa khỏi trí tưởng tưởng. Sun World được lựa chọn là điểm đến hàng đầu.</p>
        <Suspense>
          <UserTicket />
        </Suspense>
      </div>
    </Sheet>
  </>;
}
