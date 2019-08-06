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

// Rocket Type
const RocketType = new GraphQLObjectType({
    name: "Rocket",
    fields: () => ({
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString }
    })
});

// Link Type
const LinkType = new GraphQLObjectType({
    name: "Link",
    fields: () => ({
        mission_patch: { type: GraphQLString },
        video_link: { type: GraphQLString }
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
        valuation: { type: GraphQLString }
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
            args: {
                id: { type: GraphQLInt }
            },
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
