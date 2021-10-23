
import './SearchBar.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export const SearchBar = ({ data }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [textenterd, settextenterd] = useState("");

    const filterData = (event) => {
        const searchText = event.target.value.toLowerCase();
        settextenterd(searchText);
        const newFilter = data.filter((player) => {
            const playerName = player.Name.toLowerCase();
            const playerNationality = player.Nationality.toLowerCase();
            const playerPosition = player.Position.toLowerCase();
            const playerAge = player.Age.toString();
            const preferredFoot = player['Preferred Foot'].toLowerCase();
            if (playerNationality.includes(searchText) ||
                playerName.includes(searchText) ||
                playerAge.includes(searchText) ||
                playerPosition.includes(searchText) ||
                preferredFoot.includes(searchText)) {
                return player;
            }
        });

        if (searchText === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };
    return (
        <div className="search-page">
            <div className="search-container">
                <img src={'data:image/jpeg;base64,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'} width='400' height='200' />
                <div className="search-box">
                    <input className="search-input" type='text' placeholder="Search for player" onChange={filterData} />
                    {
                        filteredData.length != 0 && (


                            <div className="search-result">
                                {filteredData.map((value, key) => {
                                    return (
                                        <Link to={`/playerprofile/${value.Name}/${value.id}`}>
                                            <p className="player-data-item" key={value.id} >{value.Name}</p>
                                        </Link>
                                    )
                                })}
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
