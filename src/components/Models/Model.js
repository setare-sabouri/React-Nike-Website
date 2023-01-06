import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import NikePegasus from './Shoes/NikePegasus';

function Model({ ModelGltf }) {
    const { materials, nodes } = useGLTF(ModelGltf);

    return (
        <div id='canvas-container'>
            <Canvas shadows camera={{ position: [3, 0, 0], fov: 50 }}>
                <spotLight intensity={0.4} angle={0.2} penumbra={1} position={[0, 0, 2]} castShadow />
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <Environment preset="city" />
                <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
                <directionalLight castShadow />
                <NikePegasus materials={materials} nodes={nodes} />
            </Canvas>

        </div >
    );
}
export default Model;