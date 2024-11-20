import React, { useEffect, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius:"30%",
};

const locations = [
  { id: 1, lat: -17.8216, lng: 31.0492, title: "Location 1" },
  { id: 2, lat: -17.8276, lng: 31.0542, title: "Location 2" },
  { id: 3, lat: -17.8306, lng: 31.0452, title: "Location 3" },
];

const MyAzureMap: React.FC = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const [mapInstance, setMapInstance] = useState<atlas.Map | null>(null);

  const handleMarkerClick = (location: any) => {
    setSelectedLocation(location);
  };

  const calculateRoute = (start: [number, number], end: [number, number]) => {
    if (!mapInstance) return;

    const atlas = window.atlas;

    const routeURL = `https://atlas.microsoft.com/route/directions/json?api-version=1.0&query=${start[1]},${start[0]}:${end[1]},${end[0]}&subscription-key=YOUR_AZURE_MAPS_API_KEY`;

    fetch(routeURL)
      .then((response) => response.json())
      .then((data) => {
        const routeCoords = data.routes[0].legs[0].points.map((point: any) => [point.longitude, point.latitude]);

        const routeLine = new atlas.data.LineString(routeCoords);
        const routeFeature = new atlas.data.Feature(routeLine);

        const dataSource = new atlas.source.DataSource();
        mapInstance.sources.add(dataSource);

        dataSource.add(routeFeature);

        mapInstance.layers.add(
          new atlas.layer.LineLayer(dataSource, null, {
            strokeColor: "#2272B9",
            strokeWidth: 5,
          })
        );
      })
      .catch((error) => console.error("Failed to calculate route", error));
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://atlas.microsoft.com/sdk/js/atlas.min.js?api-version=2";
    script.async = true;

    script.onload = () => {
      const atlas = window.atlas;

      const map = new atlas.Map("map", {
        center: [31.0492, -17.8216], // Default center
        zoom: 14,
        authOptions: {
          authType: "subscriptionKey",
          subscriptionKey: "5JXAz7ZZH3UzACijKpQrkfziCuOKugOe0ZnThXB1txjhTjXsbYbnJQQJ99AKACYeBjFegMwQAAAgAZMPcTMm", // Replace with your Azure Maps API Key
        },
      });

      map.events.add("ready", () => {
        setMapInstance(map);

        // Add markers for all locations
        locations.forEach((location) => {
          const marker = new atlas.HtmlMarker({
            position: [location.lng, location.lat],
            htmlContent: `<div style="background: #0078D7; color: white; padding: 5px; border-radius: 50%; text-align: center;">${location.id}</div>`,
          });

          marker.setOptions({
            onClick: () => handleMarkerClick(location),
          });

          map.markers.add(marker);
        });
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      if (mapInstance) {
        mapInstance.dispose();
      }
    };
  }, []);

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([longitude, latitude]);

          if (mapInstance) {
            mapInstance.setCamera({
              center: [longitude, latitude],
              zoom: 14,
            });

            // Add a marker for the user's location
            const userMarker = new atlas.HtmlMarker({
              position: [longitude, latitude],
              htmlContent: `<div style="background: green; color: white; padding: 5px; border-radius: 50%; text-align: center;">Here u ar</div>`,
            });

            mapInstance.markers.add(userMarker);
          }
        },
        (error) => console.error("Error getting user location:", error),
        { enableHighAccuracy: true }
      );
    }
  }, [mapInstance]);

  return (
    <div style={{ position: "relative" }}>
      <div id="map" style={containerStyle}></div>
      {selectedLocation && userLocation && (
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            backgroundColor: "white",
            padding: "10px",
            border: "1px solid #ccc",
            zIndex: 1000,

          }}
        >
          <h2>{selectedLocation.title}</h2>
          <button
            onClick={() => {
              calculateRoute(userLocation, [selectedLocation.lng, selectedLocation.lat]);
            }}
          >
            Get Directions
          </button>
        </div>
      )}
    </div>
  );
};

export default MyAzureMap;
