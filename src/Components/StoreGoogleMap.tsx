import React from "react";
const GoogleMaps = require("simple-react-google-maps").default;

const hgLat = 14.804217071288804;
const hgLng = 120.9355877;

const StoreGoogleMap = () => {
  return(
    <GoogleMaps
      apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      style={{height: "100%", width: "100%"}}
      zoom={15}
      center={{lat: hgLat, lng: hgLng}}
      markers={{lat: hgLat, lng: hgLng}} //optional
    />
  );
}

export default StoreGoogleMap;