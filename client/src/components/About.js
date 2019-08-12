import React from "react";
import { Query } from "react-apollo";
import { INFO_QUERY } from "../queries/queries";

const rockets = () => {
    return (
        <>
            <Query query={INFO_QUERY}>
                {({ loading, error, data }) => {
                    if (loading)
                        return <span className="loading">Connecting...</span>;
                    if (error) console.log(error);
                    const info = data.info;
                    return (
                        <div id="about-container">
                            <div className="box">
                                <p>
                                    <span className="text">Company: </span>
                                    {info.name}
                                </p>
                                <p>
                                    <span className="text">Founder: </span>
                                    {info.founder}
                                </p>
                                <p>
                                    <span className="text">CEO: </span>
                                    {info.ceo}
                                </p>
                                <p>
                                    <span className="text">CTO: </span>
                                    {info.cto}
                                </p>
                                <p>
                                    <span className="text">COO: </span>
                                    {info.coo}
                                </p>
                                <p>
                                    <span className="text">Address: </span>
                                    {info.headquarters.address}
                                </p>
                                <p>
                                    <span className="text">City: </span>
                                    {info.headquarters.city}
                                </p>
                                <p>
                                    <span className="text">State: </span>
                                    {info.headquarters.state}
                                </p>
                                <p>
                                    <span className="text">Employees: </span>
                                    {info.employees}
                                </p>
                                <p>
                                    <span className="text">
                                        Company Valuation:{" "}
                                    </span>
                                    ${info.valuation}
                                </p>
                                <hr />
                                <p>{info.summary}</p>
                            </div>
                        </div>
                    );
                }}
            </Query>
        </>
    );
};

export default rockets;
