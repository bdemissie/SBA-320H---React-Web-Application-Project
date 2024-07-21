import EventCard from "./EventCard";
import InitialEventData from "../../../Data/InitialEventData"

function Events() {
    
    const renderInitialEvents = InitialEventData.map((event) => {
        return <EventCard key = {event.id} event={event} />;
    })
    
    return (
        <section className="list-section">
            <h3 className="text-center">Upcoming Events</h3>
            <div className="container">
                <div className="row">                
                    {renderInitialEvents}
                </div>
            </div>
        </section>
    )
}

export default Events;