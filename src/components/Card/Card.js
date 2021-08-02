import './Card.css'

const Card = ({ userid, fname, lname, email, image }) => {
    return (
            <div className="card">
                <img className="card-img-top" src={image} alt="user card" />
                    <div className="card-body">
                        <h5 className="card-title">{fname+" "+lname}</h5>
                        <p className="email">{email}</p>
                        <h6 className="card-id">{userid}</h6>
                    </div>
            </div>
        )
}

export default Card;