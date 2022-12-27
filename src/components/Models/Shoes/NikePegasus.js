const NikePegasus = ({ materials, nodes, positionx }) => {
    return (
        <mesh
            // onClick={(e) => (e.stopPropagation(), console.log(e.object))}
            receiveShadow
            castShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.NikeShoe}
            material-color={"#414799"}
            position={positionx}
        />
    )
}
export default NikePegasus;