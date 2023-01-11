import { useState, useRef, useEffect } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";

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
    return (
        <>
            < group
                scale={(meshEl.current < 768) ? 0.6 : ((meshEl.current > 768 && meshEl.current < 1024) ? 0.7 : (1024 < meshEl.current && meshEl.current < 1200) ? 1 : 1.3)}//ask for refactoring this line ! 
                position={[0, meshEl.current < 800 ? -0.3 : -0.3, 0]}
                ref={meshEl}
                material={nodes.aiStandardSurface1}
            >
                <mesh
                    geometry={nodes.RT_AirMax90_aiStandardSurface1_0_1.geometry}
                    material={nodes.RT_AirMax90_aiStandardSurface1_0_1.material}
                    material-color={'black'}

                />
                <mesh
                    geometry={nodes.RT_AirMax90_aiStandardSurface1_0.geometry}
                    material={nodes.aiStandardSurface1}
                    material-color={Color}
                    onClick={e => updatePicker((prev) => !prev)
                    }
                // ref={meshElUpper}

                />
            </group >
        </>
    )


}

export default AirMax