import React, { Component } from "react";
import { Query } from "react-apollo";
import Moment from "react-moment";
import classNames from "classnames";
import { LAUNCH_QUERY } from "../queries/queries";

class LaunchDetails extends Component {
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
        let { flight_number } = this.props.match.params;
        flight_number = parseInt(flight_number);

        return (
            <>
                <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
                    {({ loading, error, data }) => {
                        if (loading)
                            return (
                                <span className="loading">Connecting...</span>
                            );
                        if (error) console.log(error);

                        const {
                            mission_name,
                            launch_year,
                            launch_date_local,
                            launch_success,
                            details,
                            upcoming,
                            rocket: { rocket_name, rocket_type },
                            links: { mission_patch, video_link, youtube_id }
                        } = data.launch;

                        return (
                            <div id="launch-container">
                                <div className="box">
                                    <div className="wrapper">
                                        <div className="info">
                                            <p>
                                                <span className="text">
                                                    Mission Name:{" "}
                                                </span>
                                                {mission_name}
                                            </p>

                                            <p>
                                                <span className="text">
                                                    Launch Year:{" "}
                                                </span>
                                                {launch_year}
                                            </p>
                                            <p>
                                                <span className="text">
                                                    Status:{" "}
                                                </span>
                                                <span
                                                    className={classNames({
                                                        "has-text-success":
                                                            launch_success &&
                                                            !upcoming,
                                                        "has-text-danger":
                                                            !launch_success &&
                                                            !upcoming,
                                                        "has-text-warning":
                                                            upcoming &&
                                                            !launch_success
                                                    })}
                                                >
                                                    {upcoming
                                                        ? "Upcoming"
                                                        : launch_success
                                                        ? "Completed successfully"
                                                        : "Failed"}
                                                </span>
                                            </p>
                                            <p>
                                                <span className="text">
                                                    Launch Date:{" "}
                                                </span>
                                                <Moment format="DD-MM-YYYY HH:mm">
                                                    {launch_date_local}
                                                </Moment>
                                            </p>
                                            <p>
                                                <span className="text">
                                                    Rocket Name:{" "}
                                                </span>
                                                {rocket_name}
                                            </p>
                                            <p>
                                                <span className="text">
                                                    Rocket Type:{" "}
                                                </span>
                                                {rocket_type}
                                            </p>
                                        </div>
                                        <div className="patch">
                                            <img
                                                src={mission_patch ? mission_patch : "../images/spacex.png"}
                                                width="100"
                                                height="100"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <hr />
                                    <p>{details}</p>
                                    <hr />
                                    {video_link && (
                                        <>
                                            <span
                                                className="text link"
                                                onClick={this.playVideo}
                                            >
                                                Watch the video of the launch
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
                                                                ? "https://www.youtube.com/embed/" +
                                                                  youtube_id +
                                                                  "?autoplay=1&rel=0"
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
                                        </>
                                    )}
                                </div>
                            </div>
                        );
                    }}
                </Query>
            </>
        );
    }
}

export default LaunchDetails;
