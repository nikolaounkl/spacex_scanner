import React, { Component } from "react";
import { Query } from "react-apollo";
import { INFO_QUERY } from "../queries/queries";

class About extends Component {
    state = {
        modalActive: false
    };

    playVideo = e => {
        this.setState({
            modalActive: true
        });
        console.log(this.state);
    };

    closeVideo = e => {
        this.setState({
            modalActive: false
        });
    };

    render() {
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
                                    <hr/>
                                    <div>
                                        <span
                                            className="text link"
                                            onClick={this.playVideo}
                                        >
                                            Watch SpaceX video
                                        </span>
                                        <div
                                            className={
                                                this.state.modalActive
                                                    ? "modal is-active"
                                                    : "modal"
                                            }
                                        >
                                            <div
                                                onClick={this.closeVideo}
                                                className="modal-background"
                                            />
                                            <div
                                                onClick={this.closeVideo}
                                                className="modal-content"
                                            >
                                                <iframe
                                                    src={
                                                        this.state
                                                            .modalActive
                                                            ? "https://www.youtube.com/embed/sX1Y2JMK6g8?autoplay=1&rel=0"
                                                            : ""
                                                    }
                                                    className="has-ratio"
                                                    frameBorder="0"
                                                    title="launch"
                                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />
                                            </div>
                                            <button
                                                onClick={this.closeVideo}
                                                className="modal-close is-large"
                                                aria-label="close"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }}
                </Query>
            </>
        );
    };
};

export default About;
