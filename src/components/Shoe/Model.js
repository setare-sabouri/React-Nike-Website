import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import NikePegasus from './NikePegasus';
import { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color';
import { ClickIcon } from './ClickIcon';
import './Model.css'
function Model({ ModelGltf }) {
    const { materials, nodes } = useGLTF(ModelGltf);
    const [colorHexCode, setColorHexCode] = useState('#ffffff');
    const [Clicked, setclicked] = useState(false);

    return (
        <div id='canvas-container'>
            <Canvas shadows camera={{ position: [2, 0, 0] }}>
                <spotLight intensity={0.4} angle={0.2} penumbra={1} position={[0, 0, 2]} castShadow />
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={1} />
                <ContactShadows position={[0, -0.6, 0]} opacity={0.5} scale={8} blur={2} far={2} color={'#FFEF32'} />   {/*yellow*/}
                <ContactShadows position={[0, -0.6, 0]} opacity={0.7} scale={8} blur={3} far={0.9} color={'#120099'} />   {/* blue */}
                <directionalLight castShadow color={"red"} far={5} />
                <NikePegasus materials={materials} nodes={nodes} Color={colorHexCode} updatePicker={setclicked} />
            </Canvas>

            <div className={'color-picker'}
                style={{ display: Clicked ? "block" : "none" }}>
                <SketchPicker
                    width="20%"
                    className={SketchPicker}
                    color={colorHexCode}
                    onChange={e => setColorHexCode(e.hex)}
                />
            </div>

            <ClickIcon Clicked={Clicked} />
        </div >

    );
}
export default Model;