import React from "react";
import { Link } from "react-router-dom";

const Launch = ({
    launch: { flight_number, mission_name, launch_success, upcoming, links }
}) => {
    return (
        <Link to={`/launch/${flight_number}`} className="details-link">
            <div className="box">
                <img
                    src={links.mission_patch ? links.mission_patch : "../images/spacex.png"}
                    alt=""
                    width="40"
                    height="40"
                />
                <p>{mission_name}</p>
            </div>
        </Link>
    );
};

export default Launch;
