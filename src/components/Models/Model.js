import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import NikePegasus from './Shoes/NikePegasus';
import { useState } from 'react';
import { SketchPicker } from 'react-color';
import './Model.css'

function Model({ ModelGltf }) {
    const { materials, nodes } = useGLTF(ModelGltf);
    const [colorHexCode, setColorHexCode] = useState('#ffffff');
    const [Clicked, setclicked] = useState(false);
    return (
        <div id='canvas-container'>
            <Canvas shadows camera={{ position: [3, 0, 0], fov: 50 }}>
                <spotLight intensity={0.4} angle={0.2} penumbra={1} position={[0, 0, 2]} castShadow />
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <Environment preset="city" />
                <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
                <directionalLight castShadow />
                <NikePegasus materials={materials} nodes={nodes} Color={colorHexCode} updatePicker={setclicked} />
            </Canvas>
            <div className={'color-picker'}
                style={{ display: Clicked ? "block" : "none" }}>
                <SketchPicker
                    width="20%"
                    className={SketchPicker}

                    color={colorHexCode}
                    onChange={e => setColorHexCode(e.hex)} />
            </div>

        </div >
    );
}
export default Model;