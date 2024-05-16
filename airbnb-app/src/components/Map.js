

import React, { useState } from "react";
import Mapbox, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({ search }) {
const [selectedLoction, setSelectedLocation] = useState({})
  //direct return map - returns an object each time it loops through
  const coordinates = search.map((coords) => ({
    longitude: coords.long,
    latitude: coords.lat,
  }));

  const coordsCenter = getCenter(coordinates);

  console.log("coords", coordsCenter);

  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    longitude: coordsCenter.longitude,
    latitude: coordsCenter.latitude,
    zoom: 11,
  });

  return (
      <Mapbox
        mapLib={import("mapbox-gl")}
        mapStyle="mapbox://styles/wael20/clw920at1000c01ny3ij9ceis"
        mapboxAccessToken={process.env.mapbox_key}
        {...viewPort}
        onViewportChange={(nextViewport) => setViewPort(nextViewport)}
      > 
        {search.map( ({long, lat, title}) => (
            <div key="long">
                <Marker
                    longitude={long}
                    latitude={lat}
                    offsetLeft={-20}
                    offsetRight={-10}
                >
                    <p
                    role="img"
                    className="cursor-pointer text-2xl animate-bounce"
                    onClick={() => setSelectedLocation(result)}
                    aria-label="push-pin"
                    >
                    📍
                    </p>
                </Marker>
                {/* pop to show if we click on Marker */}
                {selectedLoction.long === long ? ( 
                    <Popup
                    onClose={() => setSelectedLocation({})}
                        closeOnClick={true}
                        latitude={lat}
                        longitude={long}
                    >
                        {title}
                    </Popup>

                ) : (
                    false
                    ) }
            </div>
        ))}
      </Mapbox>
  );
}

export default Map;
