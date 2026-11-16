import React, {Suspense, useRef, useState} from "react";
import {Html, useGLTF, useProgress} from "@react-three/drei";
import {Canvas, useFrame} from "@react-three/fiber";
import PageWrapper from "@/components/wrappers/PageWrapper/PageWrapper.tsx";
import styles from './rocket.module.scss'
import {clsx} from "clsx";

const Rocket = () => {
  const [modelRotatePosition, setModelRotatePosition] = useState([0, 0])
  const [rotatePosition, setRotatePosition] = useState([0, 0])

  const Rocket = React.memo((params: any) => {
    const boxRef = useRef(null)
    const {nodes, materials} = useGLTF('/3d/rocket.glb')
    useFrame(() => {
      const boxCur = boxRef.current as any

      boxCur.rotation.y = rotatePosition[0];
      boxCur.rotation.x = rotatePosition[1];
      boxCur.rotation.y += modelRotatePosition[0] / 10000;
      setRotatePosition([boxCur.rotation.y, boxCur.rotation.x])
    });

    const geometry = (nodes.Rocket as any).geometry;

    return (
      <group ref={boxRef}>
        <mesh {...params} geometry={geometry} material={materials.Material}></mesh>
      </group>
    )
  })

  const moveLogo = (e: any) => {
    const rect = e.target.getBoundingClientRect();
    const xPosition = rect.left;
    const yPosition = rect.top

    const objectPosition = [xPosition + (e.target.offsetWidth / 2), yPosition + e.target.offsetHeight / 2]
    const cursorPosition = [e.clientX, e.clientY]

    setModelRotatePosition([cursorPosition[0] - objectPosition[0], cursorPosition[1] - objectPosition[1]])
  }

  function Loader() {
    const {progress} = useProgress()
    return <Html center>{progress} % loaded</Html>
  }

  return (
    <PageWrapper className={styles.rocket}>
      <div className={clsx(styles.side, styles.left)}>
        <h3>Falcon Heavy<br/> Overview</h3>

        <div className={styles.statistic}>
          <div className={styles.row}>
            <h4>HEIGHT</h4>
            <p>70 m <span>/ 229.6 ft</span></p>
          </div>
          <div className={styles.row}>
            <h4>DIAMETER</h4>
            <p>12.2 m <span>/ 39.9 ft</span></p>
          </div>
          <div className={styles.row}>
            <h4>MASS</h4>
            <p>1,420,788 kg <span>/ 3,125,735 lb</span></p>
          </div>
          <div className={styles.row}>
            <h4>PAYLOAD TO LEO</h4>
            <p>63,800 kg <span>/ 140,660 lb</span></p>
          </div>
          <div className={styles.row}>
            <h4>PAYLOAD TO GTO</h4>
            <p>26,700 kg <span>/ 58,860 lb</span></p>
          </div>
          <div className={styles.row}>
            <h4>PAYLOAD TO MARS</h4>
            <p>16,800 kg <span>/ 37,040 lb</span></p>
          </div>
        </div>

        <div className={styles.description}>
          <h3>
            UNMATCHED<br/> PERFORMANCE
          </h3>
          <p>
            With more than 5 million pounds of thrust at liftoff, Falcon Heavy is the most capable rocket flying. By
            comparison, the liftoff thrust of the Falcon Heavy equals approximately eighteen 747 aircraft at full power.
            Falcon Heavy can lift the equivalent of a fully loaded 737 jetliner—complete with passengers, luggage and
            fuel—to orbit.
          </p>
        </div>
      </div>
      <div className={styles.side}>
        <Canvas onMouseMove={moveLogo}>
          <directionalLight intensity={3} position={[200, 200, 500]}/>
          <Suspense fallback={<Loader/>}>
            <Rocket position={[0, -3, 0]} scale={0.023}/>
          </Suspense>
        </Canvas>
      </div>
    </PageWrapper>
  );
};

export default Rocket;