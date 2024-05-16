

import React, { useState } from "react";
import Mapbox, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({ search }) {
    const [selectedLocation, setSelectedLocation] = useState({});
  
    //direct return map - returns an object each time it loops through
    const coordinates = search.map((coords) => ({
      longitude: coords.long,
      latitude: coords.lat,
    }));
  
    const coordsCenter = getCenter(coordinates);
  
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
        {search.map((coord) => (
          <div key={coord.lat}>
            <Marker
              longitude={coord.long}
              latitude={coord.lat}
              offsetLeft={-20}
              offsetRight={-10}
            >
              <p
                role="img"
                className="cursor-pointer text-2xl animate-bounce"
                onClick={() => setSelectedLocation(coord)}
                aria-label="push-pin"
              >
                📍
              </p>
            </Marker>
            {/* pop to show if we click on Marker */}
            {selectedLocation.long === coord.long ? (
              <Popup
                onClose={() => setSelectedLocation({})}
                closeOnClick={true}
                latitude={coord.lat}
                longitude={coord.long}
              >
                {coord.title}
              </Popup>
            ) : null}
          </div>
        ))}
      </Mapbox>
    );
  }
  
  export default Map;
  