import { gql } from "apollo-boost";

const LAUNCHES_QUERY = gql`
    {
        launches {
            flight_number
            mission_name
            launch_year
            launch_date_local
            launch_success
            details
            upcoming
            rocket {
                rocket_name
                rocket_type
                description
            }
            links {
                mission_patch
            }
        }
    }
`;

const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!) {
        launch(flight_number: $flight_number) {
            flight_number
            mission_name
            launch_year
            launch_date_local
            launch_success
            details
            upcoming
            rocket {
                rocket_name
                rocket_type
                description
            }
            links {
                mission_patch
                video_link
                youtube_id
            }
        }
    }
`;

const ROCKETS_QUERY = gql`
    {
        rockets {
            id
            rocket_id
            rocket_name
            rocket_type
            description
            active
            cost_per_launch
            success_rate_pct
            first_flight
        }
    }
`;

const ROCKET_QUERY = gql`
    query RocketQuery($rocket_id: String) {
        rocket(rocket_id: $rocket_id) {
            rocket_id
            rocket_name
            rocket_type
            description
        }
    }
`;

const INFO_QUERY = gql`
    {
        info {
            name
            summary
            founder
            employees
            ceo
            cto
            coo
            valuation
            headquarters {
                address
                city
                state
            }
        }
    }
`;

export {
    LAUNCHES_QUERY,
    LAUNCH_QUERY,
    ROCKETS_QUERY,
    ROCKET_QUERY,
    INFO_QUERY
};
