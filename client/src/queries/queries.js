import { gql } from 'apollo-boost';

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
        }
    }
`;

const ROCKETS_QUERY = gql`
    {
        rockets {
            rocket_id
            rocket_name
            rocket_type
        }
    }
`;

const SITE_QUERY = gql`
    {
        site {
            site_name_long
        }
    }
`;

const LINKS_QUERY = gql`
    {
        links {
            mission_patch
            video_link
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
        }
    }
`;

export { LAUNCHES_QUERY, ROCKETS_QUERY, LINKS_QUERY, SITE_QUERY, INFO_QUERY };