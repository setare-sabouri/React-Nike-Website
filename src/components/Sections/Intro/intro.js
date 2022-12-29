import './intro.css'
import Model from "../../Models/Model";
const Intro = () => {
    return (
        <section className="component intro-section">
            <img
                src='hero-product.png'
                className='intro-img'
            />
            {/* <Model ModelGltf="nike_air_zoom_pegasus_36.glb" ></Model> */}
        </section>
    )
}

export default Intro;