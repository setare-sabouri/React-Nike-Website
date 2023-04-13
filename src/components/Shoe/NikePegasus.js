import { useState, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Prev } from "react-bootstrap/esm/PageItem";
const NikePegasus = ({ materials, nodes, Color, updatePicker }) => {
    const [ScWidth, setWidth] = useState(window.innerWidth);
    const meshEl = useRef();
    meshEl.current = ScWidth;
    const rot = useRef()
    useFrame((state, delta) => {
        rot.current.rotation.y += 0.5 * delta
    })
    useEffect(() => {
        window.addEventListener('resize', function () {
            setWidth(window.innerWidth);
        })
    })

    return (

        <group
            ref={meshEl}
            ref={rot}
            position={[0, meshEl.current < 800 ? -0.3 : 0.1, 0]}
            scale={
                (meshEl.current < 768) ? 0.6 :
                    ((meshEl.current > 768 && meshEl.current < 1024) ? 0.7 :
                        (1024 < meshEl.current && meshEl.current < 1200) ? 1 :
                            1.2) //ask for refactoring this line ! 
            }
            onClick={e => (updatePicker((prev) => !prev))
            }
        >
            <mesh
                geometry={nodes.defaultMaterial001_1.geometry}
                material={materials.NikeShoe001}
            />
            <mesh
                geometry={nodes.defaultMaterial001_2.geometry}
                material={materials.NikeShoe001}
            />

            <mesh
                geometry={nodes.defaultMaterial.geometry}
                material={materials.NikeShoe002}
                material-color={Color}
            />
        </group>



    )
}
export default NikePegasus;