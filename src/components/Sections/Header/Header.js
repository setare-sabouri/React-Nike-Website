import './Header.css'
import Model from '../../Models/Model';
const Header = () => {
    return (
        <section className="component intro-section">
            <h1 className='intro-text-outlined'>THE NEW 2022</h1>
            <h1 className='intro-text-main'>AIR JORDAN</h1>
            <Model ModelGltf="./Models/nike_air_zoom_pegasus_36.glb" ></Model>
        </section>
    )
}

export default Header;