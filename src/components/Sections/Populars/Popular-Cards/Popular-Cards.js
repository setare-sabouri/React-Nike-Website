const Card = ({ imageSrc }) => {
    return (
        <div className="card-wrapper">
            <img className="card-img" src={imageSrc}></img>
        </div >
    )
}
export default Card;