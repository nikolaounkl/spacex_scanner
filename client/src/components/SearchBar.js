import React, { useState } from "react";

const SearchBar = () => {
    return (
        <div className="search-bar field has-addons">
            <div className="control">
                <label className="label">Year</label>
                <div className="select">
                    <select name="country">
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                    </select>
                </div>
            </div>
            <div className="control">
                <label className="label">Status</label>
                <div className="select">
                    <select name="country">
                        <option value="true">Successfull</option>
                        <option value="false">Failed</option>
                        <option value="null">Upcoming</option>
                    </select>
                </div>
            </div>
            <div className="control">
                <label className="label">Rocket</label>
                <div className="select">
                    <select name="country">
                        <option value="Big Falcon Rocket">
                            Big Falcon Rocket
                        </option>
                        <option value="Falcon Heavy">Falcon Heavy</option>
                        <option value="Falcon 9">Falcon 9</option>
                        <option value="Falcon 1">Falcon 1</option>
                    </select>
                </div>
            </div>
            <div className="control">
                <label className="label transparent">-----</label>
                <button type="submit" className="button is-primary">
                    Show Launches
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
