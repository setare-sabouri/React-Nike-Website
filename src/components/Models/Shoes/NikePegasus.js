import { useState, useRef, useEffect } from "react";
const NikePegasus = ({ materials, nodes }) => {
    const [ScWidth, setWidth] = useState(window.innerWidth);
    const meshEl = useRef();
    meshEl.current = ScWidth;
    useEffect(() => {
        window.addEventListener('resize', function () {
            setWidth(window.innerWidth);
        })
    })
    return (
        <mesh
            ref={meshEl}
            geometry={nodes.defaultMaterial.geometry}
            material={materials.NikeShoe}
            position={[0, meshEl.current < 800 ? -0.3 : -0.3, 0]}
            scale={(meshEl.current < 768) ? 0.6 : ((meshEl.current > 768 && meshEl.current < 1024) ? 0.7 : (1024 < meshEl.current && meshEl.current < 1200) ? 1 : 1.3) //ask for refactoring this line ! 
            }
        // map={materials.NikeShoe.normalMap}
        />
    )
}
export default NikePegasus;