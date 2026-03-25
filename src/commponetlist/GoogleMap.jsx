import React from "react";
import Map from "../assets/map.png";

const GoogleMap = () => {
  return (
    <div className="map-container  ">
      <div
        className="map-box py-16"
        style={{ backgroundImage: `url(${Map})` }}
      >
        <h1 className="map-title"></h1>
      </div>
    </div>
  );
};

export default GoogleMap;