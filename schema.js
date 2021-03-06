const axios = require("axios");

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema
} = require("graphql");

// Launch Type
const LaunchType = new GraphQLObjectType({
    name: "Launch",
    fields: () => ({
        flight_number: { type: GraphQLInt },
        mission_name: { type: GraphQLString },
        launch_year: { type: GraphQLString },
        launch_date_local: { type: GraphQLString },
        launch_success: { type: GraphQLBoolean },
        details: { type: GraphQLString },
        upcoming: { type: GraphQLBoolean },
        rocket: { type: RocketType },
        links: { type: LinkType }
    })
});

// Link Type
const LinkType = new GraphQLObjectType({
    name: "Link",
    fields: () => ({
        mission_patch: { type: GraphQLString },
        video_link: { type: GraphQLString },
        youtube_id: { type: GraphQLString }
    })
});

// Rocket Type
const RocketType = new GraphQLObjectType({
    name: "Rocket",
    fields: () => ({
        id: { type: GraphQLInt },
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString },
        description: { type: GraphQLString },
        active: { type: GraphQLBoolean },
        cost_per_launch: { type: GraphQLString },
        success_rate_pct: { type: GraphQLString },
        first_flight: { type: GraphQLString }
    })
});

// Info Type
const InfoType = new GraphQLObjectType({
    name: "Info",
    fields: () => ({
        name: { type: GraphQLString },
        summary: { type: GraphQLString },
        founder: { type: GraphQLString },
        employees: { type: GraphQLString },
        ceo: { type: GraphQLString },
        cto: { type: GraphQLString },
        coo: { type: GraphQLString },
        valuation: { type: GraphQLString },
        headquarters: { type: HeadquartersType }
    })
});

// Link Type
const HeadquartersType = new GraphQLObjectType({
    name: "Headquarters",
    fields: () => ({
        address: { type: GraphQLString },
        city: { type: GraphQLString },
        state: { type: GraphQLString }
    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        launches: {
            type: new GraphQLList(LaunchType),
            resolve(parent, args) {
                return axios
                    .get("https://api.spacexdata.com/v3/launches")
                    .then(res => res.data);
            }
        },
        launch: {
            type: LaunchType,
            args: {
                flight_number: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return axios
                    .get(
                        `https://api.spacexdata.com/v3/launches/${
                            args.flight_number
                        }`
                    )
                    .then(res => res.data);
            }
        },
        rockets: {
            type: new GraphQLList(RocketType),
            resolve(parent, args) {
                return axios
                    .get("https://api.spacexdata.com/v3/rockets")
                    .then(res => res.data);
            }
        },
        rocket: {
            type: RocketType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return axios
                    .get(`https://api.spacexdata.com/v3/rockets/${args.id}`)
                    .then(res => res.data);
            }
        },
        info: {
            type: InfoType,
            resolve(parent, args) {
                return axios
                    .get(`https://api.spacexdata.com/v3/info`)
                    .then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
