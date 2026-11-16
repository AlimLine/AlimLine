import React, {Suspense, useRef, useState} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import {Html, useGLTF, useProgress} from "@react-three/drei";
import styles from './hero.module.scss'
import PageWrapper from "@/components/wrappers/PageWrapper/PageWrapper.tsx";

const Hero = () => {
  const [modelRotatePosition, setModelRotatePosition] = useState([20, 0])
  const [rotatePosition, setRotatePosition] = useState([0, 0])
  const [blockMouse, setBlockMouse] = useState<boolean>(true)

  const Box = React.memo((params: any) => {
    const boxRef = useRef(null)
    const {nodes, materials} = useGLTF('/3d/Moon.glb')

    useFrame(() => {
      const boxCur = boxRef.current as any

      boxCur.rotation.y = rotatePosition[0];
      boxCur.rotation.x = rotatePosition[1];
      boxCur.rotation.y += modelRotatePosition[0] / 10000;

      if (boxCur.rotation.x > -0.4 && modelRotatePosition[1] < 0 || boxCur.rotation.x < 0.4 && modelRotatePosition[1] > 0) {
        boxCur.rotation.x += modelRotatePosition[1] / 10000;
      }
      setRotatePosition([boxCur.rotation.y, boxCur.rotation.x])
    });

    const geometry = (nodes.Sphere as any).geometry;

    return (
      <group ref={boxRef}>
        <mesh {...params} geometry={geometry} material={materials['Material.001']}></mesh>
      </group>
    )
  })

  function Loader() {
    const {progress} = useProgress()
    return <Html center>{progress} % loaded</Html>
  }

  const blockMouseFun = () => {
    setBlockMouse(true)
  }

  const unBlockMouse = () => {
    setBlockMouse(false)
  }

  const moveLogo = (e: any) => {
    if (!blockMouse) {
      const rect = e.target.getBoundingClientRect();
      const xPosition = rect.left;
      const yPosition = rect.top

      const objectPosition = [xPosition + (e.target.offsetWidth / 2), yPosition + e.target.offsetHeight / 2]
      const cursorPosition = [e.clientX, e.clientY]

      setModelRotatePosition([cursorPosition[0] - objectPosition[0], cursorPosition[1] - objectPosition[1]])
    }
  }

  return (
    <div className={styles.Hero}>
      <PageWrapper className={styles.Hero__container}>
        <div className={styles.welcome}>
          <h1>Falcon Heavy</h1>
          <p className='f-16'>The most powerful operational rocket in the world by a factor of two</p>
        </div>

        <div className={styles.main__section}>
          <Canvas onMouseMove={moveLogo} onMouseDown={unBlockMouse} onMouseUp={blockMouseFun}>
            <directionalLight intensity={3} position={[200, 200, 500]} />
            <Suspense fallback={<Loader />}>
              <Box
                position={[0, 0, 0]}
                scale={2.6}
              />
            </Suspense>
          </Canvas>
        </div>
      </PageWrapper>
    </div>

  )
}

export default Hero;