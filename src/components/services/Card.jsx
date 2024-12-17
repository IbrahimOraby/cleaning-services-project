// import "../../assets/styles/services.css"

function Card() {
    return (
        <div className="col">
            <div className="card">
                <div className="icon-container position-absolute">
                    <img src="assets/images/clean-icon.png" alt="clean icon" />
                </div>
                <img src="assets/images/clean.jpg" alt="" className="card-img" />
                <p className="text-capitalize">office cleaning</p>
            </div>
        </div>
    )
}

export default Card
