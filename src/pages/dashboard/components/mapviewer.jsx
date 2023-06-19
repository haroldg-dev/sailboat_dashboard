import { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import { tokens } from "../../../core/theme/theme";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import { Box, Input, Button } from "@mui/material";
import car from "./resources/car.png";

const centerInit = {
  lat: -12.083638,
  lng: -77.031423,
};

const Navigation = ({ currentLocation }) => {
  console.log("currentLocation: ", currentLocation);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.GOOGLE_KEY,
  });

  const [markerList, setMarkerList] = useState([]);
  const [center, setCenter] = useState();
  const [inputLatitud, setInputLatitud] = useState("");
  const [inputLongitud, setInputLongitud] = useState("");

  useEffect(() => {
    markerList.map((item, i) => {
      setCenter({
        lat: center.lat + item.position.lat,
        lng: center.lng + item.position.lng,
      });
    });
  }, [markerList]);

  const addmarker = () => {
    if (inputLatitud === "" || inputLongitud === "") {
      return;
    }
    setMarkerList([
      ...markerList,
      {
        position: {
          lat: parseFloat(inputLatitud),
          lng: parseFloat(inputLongitud),
        },
      },
    ]);
    setInputLatitud("");
    setInputLongitud("");
  };

  const handleChangeLat = (event) => {
    setInputLatitud(event.target.value);
  };
  const handleChangeLong = (event) => {
    setInputLongitud(event.target.value);
  };

  return isLoaded ? (
    <>
      <Box sx={{ position: "absolute", top: 0, zIndex: "modal" }}>
        <GoogleMap
          center={
            center
              ? {
                  lat: center.lat / markerList.length,
                  lng: center.lng / markerList.length,
                }
              : centerInit
          }
          zoom={16}
          mapContainerStyle={{ width: "100vw", height: "100vh" }}
          options={{
            mapId: "8eca21398e193519",
            disableDefaultUI: true,
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          {markerList != null &&
            markerList.map(({ position }, id) => (
              <Marker
                key={id}
                position={position}
                //icon={{ url: "../../../assets/demo.ico" }}
              ></Marker>
            ))}
          <Marker position={currentLocation} icon={car}></Marker>
        </GoogleMap>
        <Box
          width="100vw"
          display="flex"
          justifyContent="center"
          sx={{
            position: "absolute",
            bottom: "10%",
            zIndex: "modal",
            margin: "auto",
          }}
        >
          <Box
            bgcolor={colors.primary[400]}
            m="20px"
            display="inline-flex"
            borderRadius="10px"
          >
            <Input
              type="text"
              placeholder="latitude"
              onChange={handleChangeLat}
              value={inputLatitud}
              sx={{ margin: "10px" }}
            />
            <Input
              type="text"
              placeholder="longitude"
              onChange={handleChangeLong}
              value={inputLongitud}
              sx={{ margin: "10px" }}
            />
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              onClick={addmarker}
              sx={{ margin: "10px" }}
            >
              Create Mark
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  ) : (
    <></>
  );
};

export default Navigation;
