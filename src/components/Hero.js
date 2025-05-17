import { Canvas } from '@react-three/fiber'

export default function Hero() {
  return (
    <section className="w-full h-screen bg-gradient-to-b from-white to-slate-100">
      <Canvas>
        <ambientLight intensity={0.5} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="royalblue" />
        </mesh>
      </Canvas>
    </section>
  )
}
