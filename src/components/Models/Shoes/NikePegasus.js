import { useState, useRef } from "react";
const NikePegasus = ({ materials, nodes, Width }) => {
    const [Hover, setHover] = useState(false);
    const meshEl = useRef();
    meshEl.current = Width;

    return (
        <mesh
            ref={meshEl}
            geometry={nodes.defaultMaterial.geometry}
            material={materials.NikeShoe}
            position={[1, meshEl.current < 800 ? -0.3 : -0.3, 0]}
            onPointerOver={() => setHover(!Hover)}
            onPointerOut={() => setHover(false)}
            scale={(meshEl.current < 500) ? 0.4 : ((meshEl.current > 500 && meshEl.current < 800) ? 0.7 : 1)
            }
        // map={materials.NikeShoe.normalMap}
        />
    )
}
export default NikePegasus;