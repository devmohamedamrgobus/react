import { Link } from "react-router-dom";

const Card = ({image,title,price,id}) => {
    return <>
        <div className="card col-3" >
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price}</p>
                <Link to={`/singleproduct/${id}`} className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    </>
}

export default Card;