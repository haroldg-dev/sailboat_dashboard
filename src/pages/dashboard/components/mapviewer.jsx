import { useState, useContext, useEffect } from "react";
import { useTheme, IconButton } from "@mui/material";
import { tokens } from "../../../core/theme/theme";
import { useJsApiLoader, GoogleMap, MarkerF } from "@react-google-maps/api";
import { Box, Input, Button } from "@mui/material";
import car from "./resources/car.png";
import { SocketContext } from "../../../context";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MyLocationIcon from "@mui/icons-material/MyLocation";
// -12.518632, -76.738488 Chilca
// -12.083638, -77.031423 Lince
const centerInit = {
  lat: -12.518632,
  lng: -76.738488,
};

const Navigation = ({ currentLocation }) => {
  const socket = useContext(SocketContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.GOOGLE_KEY,
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [auxList, setAuxList] = useState([
    {
      lat: "",
      lng: "",
    },
  ]);
  const [markerList, setMarkerList] = useState([]);
  const [center, setCenter] = useState();

  useEffect(() => {
    markerList.map((item, i) => {
      if (center) {
        setCenter({
          lat: center.lat + item.position.lat,
          lng: center.lng + item.position.lng,
        });
      }
    });
    console.log("MarkerList: ", markerList);
    socket.emit("xbee:mision", markerList);
  }, [markerList]);

  const addmarker = (index) => {
    if (auxList[index].lat != "" && auxList[index].lng != "") {
      setMarkerList([
        ...markerList,
        {
          lat: parseFloat(auxList[index].lat),
          lng: parseFloat(auxList[index].lng),
        },
      ]);
      setAuxList([
        ...auxList,
        {
          lat: "",
          lng: "",
        },
      ]);
      map.panTo({
        lat: parseFloat(auxList[index].lat),
        lng: parseFloat(auxList[index].lng),
      });
    }
  };

  const handleDelete = (index) => {
    const list = [...auxList];
    list.splice(index, 1);
    setAuxList(list);
    const listaux = [...markerList];
    listaux.splice(index, 1);
    setMarkerList(listaux);
  };

  const handleChange = (event, index) => {
    const { value, name } = event.target;
    const list = [...auxList];
    list[index][name] = value;
    setAuxList(list);
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
          onLoad={(map) => setMap(map)}
        >
          {markerList.length > 0 &&
            markerList.map((position, id) => (
              <>
                <MarkerF
                  key={id}
                  position={position}
                  //icon={{ url: "../../../assets/demo.ico" }}
                ></MarkerF>
                ;
              </>
            ))}
          {currentLocation.lat != null && (
            <>
              <MarkerF position={currentLocation} icon={car}></MarkerF>
            </>
          )}
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
          <Box bgcolor={colors.primary[400]} m="20px" borderRadius="10px">
            {auxList.map(({ lat, lng }, id) => (
              <>
                <Box key={id} display="flex">
                  <Input
                    type="text"
                    placeholder="latitude"
                    name="lat"
                    onChange={(e) => handleChange(e, id)}
                    value={lat}
                    sx={{ margin: "10px" }}
                  />
                  <Input
                    type="text"
                    placeholder="longitude"
                    name="lng"
                    onChange={(e) => handleChange(e, id)}
                    value={lng}
                    sx={{ margin: "10px" }}
                  />
                  {auxList.length - 1 === id && auxList.length < 4 && (
                    <Button
                      type="submit"
                      color="secondary"
                      variant="contained"
                      onClick={() => addmarker(id)}
                      sx={{ margin: "10px" }}
                    >
                      Create Mark
                    </Button>
                  )}
                  {auxList.length > 1 && (
                    <IconButton
                      aria-label="center back"
                      onClick={() => handleDelete(id)}
                      /* currentLocation.lat
                          ? map.panTo(currentLocation)
                          : map.panTo(centerInit);
                      }} */
                    >
                      <DeleteForeverIcon></DeleteForeverIcon>
                    </IconButton>
                  )}
                </Box>
              </>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  ) : (
    <></>
  );
};

export default Navigation;
