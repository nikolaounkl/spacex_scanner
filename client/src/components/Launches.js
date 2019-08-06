import React from 'react';
import {Query} from 'react-apollo';
import {LAUNCHES_QUERY} from '../queries/queries';

const Launches = () => {
    return (
        <>
            <h2>Launches</h2>
            <Query query={LAUNCHES_QUERY}>
                {({loading, error, data}) => {
                    if (loading) return <p>Loading...</p>
                    if (error) console.log(error);
                    console.log(data);

                    return <>
                        {
                            data.launches.map(launch => (
                                <div key={launch.flight_number}>
                                    <p>Mission: {launch.mission_name}</p>
                                    <p>Launch Date: {launch.launch_date_local}</p>
                                </div>
                            ))
                        }
                    </>
                }}
            </Query>
        </>
    );
}

export default Launches;