import React from 'react';
import { useParams } from 'react-router-dom';
import EventInformation from "./components/EventInformation";
import NavBar from "../NavBar/NavBar";
import InitialEventData from "../../Data/InitialEventData.json";

function EventDetailPage() {
    const { id } = useParams();

    function getEventById(id) {
        return InitialEventData.find(event => event.id === parseInt(id));
    }

    const event = getEventById(id);

    if (!event) {
        return <div>Event not found</div>;
    }

    return (
        <div>
            <NavBar />
            <EventInformation event={event} />
        </div>
    );
}

export default EventDetailPage;
