function EventCard({ event }) {

    const {eventName, description, date, image} = event;

    return (
        
        
            <div className="col list-item">
                <div className="card" style = {{"width": "30rem"}}>
                    <img src={image}
                     className="card-img-top" 
                     alt={image}
                     style = {{"height":"300px", "objectFit":"cover"}} />
                    <div className="card-body">
                        <h5 className="card-title">{eventName}</h5>
                        <p className="card-text">{description}</p>
                        <div className="d-flex justify-content-between">
                            <a href="/#" className="btn btn-primary">More Info</a>
                            <span className="btn btn-primary">{date}</span>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default EventCard;