import { useState, useRef, useEffect } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";
import { useSnapshot } from "use-snapshot":

const AirMax = ({ materials, nodes, Color, updatePicker }) => {
    const [ScWidth, setWidth] = useState(window.innerWidth);
    const meshEl = useRef();
    const meshElUpper = useRef();
    meshEl.current = ScWidth;
    useEffect(() => {
        window.addEventListener('resize', function () {
            setWidth(window.innerWidth);
        })
    })
    // materials.aiStandardSurface1.color.setHexString(Color);
    console.log(meshElUpper.current.material.color.setHex("#123456"));
    return (
        <>
            < group
                scale={(meshEl.current < 768) ? 0.6 : ((meshEl.current > 768 && meshEl.current < 1024) ? 0.7 : (1024 < meshEl.current && meshEl.current < 1200) ? 1 : 1.3)}//ask for refactoring this line ! 
                position={[0, meshEl.current < 800 ? -0.3 : -0.3, 0]}
                ref={meshEl}

            >
                <mesh
                    geometry={nodes.RT_AirMax90_aiStandardSurface1_0_1.geometry}
                    material={nodes.RT_AirMax90_aiStandardSurface1_0_1.material}

                // material-color={materials.aiStandardSurface1.color.getHexString}

                />
                <mesh
                    geometry={nodes.RT_AirMax90_aiStandardSurface1_0.geometry}
                    material={nodes.RT_AirMax90_aiStandardSurface1_0.material}
                    onClick={e => updatePicker((prev) => !prev)
                    }
                    ref={meshElUpper}

                />
            </group >
        </>
    )


}

export default AirMax