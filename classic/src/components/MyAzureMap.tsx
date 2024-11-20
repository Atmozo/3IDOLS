import React, { useEffect, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -17.8216,
  lng: 31.0492,
};

const locations = [
  { id: 1, lat: -17.8216, lng: 31.0492, title: "Location 1" },
  { id: 2, lat: -17.8276, lng: 31.0542, title: "Location 2" },
  { id: 3, lat: -17.8306, lng: 31.0452, title: "Location 3" },
];

const MyAzureMap: React.FC = () => {
  const [selected, setSelected] = useState<any>(null);

  const handleMarkerClick = (location: any) => {
    setSelected(location);
  };

  useEffect(() => {
    // Load the Azure Maps SDK script
    const script = document.createElement("script");
    script.src = "https://atlas.microsoft.com/sdk/javascript/mapcontrol?api-key=5JXAz7ZZH3UzACijKpQrkfziCuOKugOe0ZnThXB1txjhTjXsbYbnJQQJ99AKACYeBjFegMwQAAAgAZMPcTMm";
    script.async = true;
    script.onload = () => {
      const map = new atlas.Map("map", {
        center: [center.lng, center.lat], // Longitude and latitude
        zoom: 14,
      });

      // Add a set of markers
      locations.forEach((location) => {
        const marker = new atlas.HtmlMarker({
          position: [location.lng, location.lat],
          htmlContent: `<div>${location.title}</div>`,
        });

        marker.setOptions({
          onClick: () => handleMarkerClick(location),
        });

        map.markers.add(marker);
      });
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup on component unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="map" style={containerStyle}></div>
      {selected && (
        <div style={{ position: "absolute", top: "20px", left: "20px", backgroundColor: "white", padding: "10px" }}>
          <h2>{selected.title}</h2>
        </div>
      )}
    </div>
  );
};

export default MyAzureMap;
