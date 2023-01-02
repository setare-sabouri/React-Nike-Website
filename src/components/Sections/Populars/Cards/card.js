const Card = ({ title, imageSrc }) => {
    console.log(imageSrc);
    return (
        <div className="card-wrapper">
            {/* <div>{title}</div> */}
            <img className="card-img" src={imageSrc}></img>
        </div >
    )
}
export default Card;