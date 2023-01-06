import { useState } from "react";
const NikePegasus = ({ materials, nodes }) => {
    const [Hover, setHover] = useState(false);
    return (
        <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials.NikeShoe}
            position={[1, 0, 0]}
            onPointerOver={() => setHover(!Hover)}
            onPointerOut={() => setHover(false)}
            scale={Hover ? 1.5 : 1}
        // map={materials.NikeShoe.normalMap}
        />
    )
}
export default NikePegasus;