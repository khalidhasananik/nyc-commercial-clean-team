"use client";

import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
} from "@/components/ui/map";

// Brooklyn, New York coordinates
const position = { lng: -73.9442, lat: 40.6782 };

export default function ContactMap() {
  return (
    <section className="container pb-16 md:pb-20 lg:pb-24">
      <div className="h-[350px] md:h-[450px] lg:h-[500px] w-full rounded-lg overflow-hidden">
        <Map center={[position.lng, position.lat]} zoom={13} theme="dark">
          <MapMarker longitude={position.lng} latitude={position.lat}>
            <MarkerContent>
              <div className="size-4 rounded-full bg-red border-2 border-white shadow-lg" />
            </MarkerContent>
            <MarkerTooltip>NYC Commercial Clean Team</MarkerTooltip>
            <MarkerPopup>
              <div className="space-y-1 bg-white dark:bg-gray-900 p-3 rounded-lg shadow-lg">
                <p className="font-medium text-sm">NYC Commercial Clean Team</p>
                <p className="text-xs text-gray-500">
                  66 Brooklyn Golden Street, New York
                </p>
              </div>
            </MarkerPopup>
          </MapMarker>
        </Map>
      </div>
    </section>
  );
}
