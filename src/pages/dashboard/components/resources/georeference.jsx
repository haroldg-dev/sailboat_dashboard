import React, { Suspense, useRef, useEffect } from "react";
import { Box } from "@mui/material";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import pathBoat from "./resources/velerofinal1.stl";
import pathVela1 from "./resources/velafinal1.stl";
import pathVela2 from "./resources/velafinal2.stl";

const BoatViewer = () => {
  const geom = useLoader(STLLoader, pathBoat);
  const ref = useRef();
  const scaleRef = useRef(false);
  useEffect(() => {
    if (scaleRef.current) return;
    scaleRef.current = true;
    //camera.lookAt(ref.current.position);
    geom.computeVertexNormals(true);
    //geom.scale(0.1, 0.1, 0.1);
    geom.center();

    //axesHelper.applyMatrix4(new THREE.Matrix4.makeTranslation(1.5, 0, 0));
    //ref.current.rotation.y = 0.01;
    //ref.current.rotation.x = 1.365;
    //ref.current.rotation.z = 4.25;
    //ref.current.position.y = -13;
    geom.translate(0, -14, 0);
  }, []);

  useFrame((state, delta) => {
    //ref.current.rotation.z += 0.01;
    //ref.current.rotation.y += 0.01;
    //ref.current.rotation.x += 0.01;
  });
  return (
    <>
      <mesh ref={ref}>
        <primitive object={geom} attach="geometry" />
        <meshStandardMaterial color={0x1e3f20} />
        <axesHelper scale="30" />
      </mesh>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </>
  );
};

const VelaViewer2 = () => {
  const geom = useLoader(STLLoader, pathVela2);
  const ref = useRef();
  const scaleRef = useRef(false);
  useEffect(() => {
    if (scaleRef.current) return;
    scaleRef.current = true;
    geom.computeVertexNormals(true);
    //geom.scale(0.1, 0.1, 0.1);
    geom.center();
    geom.translate(0.5, 45, -6.5);
    ref.current.position.z = -21;
    ref.current.rotation.y = -0.8;
  });

  useFrame((state, delta) => {
    //ref.current.rotation.z += 0.01;
    //ref.current.rotation.y += 0.01;
    //ref.current.rotation.x += 0.01;
  });
  return (
    <>
      <mesh ref={ref}>
        <primitive object={geom} attach="geometry" />
        <meshStandardMaterial color={0x345830} />
        <axesHelper scale="30" />
      </mesh>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </>
  );
};

const VelaViewer = () => {
  const geom = useLoader(STLLoader, pathVela1);
  const ref = useRef();
  const scaleRef = useRef(false);
  useEffect(() => {
    if (scaleRef.current) return;
    scaleRef.current = true;
    geom.computeVertexNormals(true);
    geom.center();
    geom.translate(0, 42, -8);
    ref.current.position.z = 18;
    ref.current.rotation.y = -0.8;
  });
  useFrame((state, delta) => {});
  return (
    <>
      <mesh ref={ref}>
        <primitive object={geom} attach="geometry" />
        <meshStandardMaterial color={0x345830} />
        <axesHelper scale="30" />
      </mesh>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </>
  );
};

function StlViewer({ x, y }) {
  return (
    <Canvas camera={{ position: [10, 60, -450], fov: 25, near: 1, far: 20000 }}>
      <pointLight position={[100, 100, 100]} />
      <pointLight position={[-100, -100, -100]} />
      <Suspense fallback={null}>
        <Suspense fallback={null}>
          <BoatViewer x={x} y={y} />
          <VelaViewer />
          <VelaViewer2 />
        </Suspense>
      </Suspense>
      <Sky scale={1000} sunPosition={[500, 150, -1000]} turbidity={0.1} />
      <OrbitControls />
    </Canvas>
  );
}

const GeoReference = ({ data }) => {
  console.log("GeoReference: ", data);

  return (
    <Box>
      <Box
        position="absolute"
        display="flex"
        alignItems="center"
        width="100%"
        height="100%"
      >
        <StlViewer x={data.accelx} y={data.accely} />
      </Box>
    </Box>
  );
};
export default GeoReference;
