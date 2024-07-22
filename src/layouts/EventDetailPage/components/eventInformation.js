function EventInformation() {
    
    return (
        <div className="container mt-5">
            <div className="card">
                <img src="./images/events/Outdoor Yoga.jpg" className="card-img-top" alt="Outdoor Yoga"/>
                <div className="card-body">
                    <h5 className="card-title">Outdoor Yoga</h5>
                    <p>Description about the event goes here. Provide detailed information about the event, location,
                        time, and any other important details.</p>
                    <p><strong>Date:</strong> July 20, 2024, 8:00 PM </p>
                    <p><strong>Location:</strong> Central Park</p>
                    <p><strong>Organizer:</strong> Yoga Community</p>
                    <div className="btn-group btn-group-toggle" data-toggle="buttons" >
                        <label className="btn btn-secondary d-flex flex-column align-items-center custom-radio" style={{"width": "8rem"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-star" viewBox="0 0 16 16">
                                <path
                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                            </svg>
                            <input type="radio" name="options" id="interested" autocomplete="off"/> Interested
                        </label>
                        <label className="btn btn-secondary d-flex flex-column align-items-center custom-radio" style={{"width": "8rem"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-check-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path
                                    d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                            </svg>
                            <input type="radio" name="options" id="going" autocomplete="off"/> Going
                        </label>
                        <label className="btn btn-secondary d-flex flex-column align-items-center custom-radio" style={{"width": "8rem"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-share" viewBox="0 0 16 16">
                                <path
                                    d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                            </svg>
                            <input type="radio" name="options" id="maybe" autocomplete="off"/> Share
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventInformation;