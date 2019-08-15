import React from "react";
import { Query } from "react-apollo";
import { LAUNCHES_QUERY } from "../queries/queries";
import Launch from "./Launch";

const Launches = (props) => {
    return (
        <>
            <Query query={LAUNCHES_QUERY}>
                {({ loading, error, data }) => {
                    if (loading)
                        return <span className="loading">Connecting...</span>;
                    if (error) console.log(error);
                    const launchesResult = data.launches.filter(
                        launch => launch.launch_success === true
                    );

                    return (
                        <>
                            <div id="launches-container">
                                {launchesResult.map(launch => (
                                    <Launch
                                        key={launch.flight_number}
                                        launch={launch}
                                    />
                                ))}
                            </div>
                        </>
                    );
                }}
            </Query>
        </>
    );
};

export default Launches;
