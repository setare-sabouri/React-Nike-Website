import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import NikePegasus from './Shoes/NikePegasus';
function Model({ ModelGltf }) {
    const { materials, nodes } = useGLTF(ModelGltf);
    return (
        <div id='canvas-container'>
            <Canvas shadows camera={{ position: [4, 2, 0], fov: 50 }}>
                <spotLight intensity={0.4} angle={0.2} penumbra={1} position={[1, 1, 2]} castShadow />
                <OrbitControls enableZoom={true} enablePan={false} />
                <ambientLight intensity={1} />
                <Environment preset="city" />
                <ContactShadows position={[0, 2, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
                <directionalLight color="#9ffff7" position={[0, 0, 3]} />
                <directionalLight color="ff4fff" position={[5, 0, 1]} />
                <NikePegasus materials={materials} nodes={nodes} positionx={[1, 0, 0]}></NikePegasus>
            </Canvas>

        </div >
    );
}
export default Model;