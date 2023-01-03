const Card = ({ imageSrc }) => {
    return (
        <div className="card-wrapper">
            <img className="card-img w-100" src={imageSrc}></img>
        </div >
    )
}
export default Card;