import React, { useEffect, useRef, useState } from "react";
import { FC } from "react";
import { useMap } from "react-leaflet";
import L, { ImageOverlay as LeafletImageOverlay } from 'leaflet';

import campus from '../../static/campus-1.png';

export const Overlay: FC = () => {
  const map = useMap();
  const [topLeft, setTopLeft] = useState<[number, number]>([10.75800504996682, 106.74503577812199]);
  const [topRight, setTopRight] = useState<[number, number]>([10.759147719162039, 106.74592573778534]);
  const [bottomLeft, setBottomLeft] = useState<[number, number]>([10.757391144831328, 106.7457275254822]);
  const [currentPivot, setCurrentPivot] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delta = 0.00001;
    const setPivot = [setTopLeft, setTopRight, setBottomLeft][currentPivot];
    const handler = (e: KeyboardEvent) => {
      if (e.key === 's') {
        setPivot(tl => [tl[0] - delta, tl[1]]);
      }
      if (e.key === 'w') {
        setPivot(tl => [tl[0] + delta, tl[1]]);
      }
      if (e.key === 'a') {
        setPivot(tl => [tl[0], tl[1] - delta]);
      }
      if (e.key === 'd') {
        setPivot(tl => [tl[0], tl[1] + delta]);
      }
      if (e.key === 'Tab') {
        setCurrentPivot(p => (p + 1) % 3);
      }
    };
    window.addEventListener('keyup', handler);
    return () => window.removeEventListener('keyup', handler);
  }, [currentPivot])

  useEffect(() => {
    console.log(JSON.stringify([topLeft, topRight, bottomLeft]))
    if (overlay.current) {
      overlay.current.reposition(topLeft, topRight, bottomLeft);
    }
  }, [topLeft, topRight, bottomLeft])

  const overlay = useRef<LeafletImageOverlay.Rotated>();

  useEffect(() => {
    map.on('click', e => {
      const { lat, lng } = e.latlng;
      console.log([lat, lng]);
    })
    overlay.current = L.imageOverlay.rotated(
      campus,
      topLeft,
      topRight,
      bottomLeft, {
      interactive: true,
    }).addTo(map);
  }, [])

  return (
    <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000]">
      <img src={campus} className="hidden" onLoad={() => setLoading(false)} />
      {loading && <span className="font-medium text-lg">Loading...</span>}
    </div>
  )
}
