import React from 'react'
import { useParams } from 'react-router'
import './PlayerProfile.css'
import playerData from "../data.json"
import { FaArrowLeft, FaQuestion } from 'react-icons/fa';
import { RatingView } from 'react-simple-star-rating'
import ApexChart from './chart.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



export const PlayerProfile = () => {
    

    const { Name, id } = useParams()
    return (
        <div className="profile-page">
            <div className="header">
                <Link to={`/`}>
                    <button className="btn btn-home"><FaArrowLeft className="btn-icon" /> Home</button>
                </Link>


                <button className="btn btn-help"> <FaQuestion className="btn-icon" /> Help</button>


                <p className="name-header">{playerData[id - 1].Name}</p>
                
                
            </div>

            <div className="flex-container">

                <div className="flex-item col-1">
                    <ApexChart />

                </div>
                <div className="flex-item col-2">
                    <div className="over-div">
                        <span className="border-sp">Overall{playerData[id - 1].Overall}</span>
                        <span className="border-sp">Overall80</span>
                    </div>
                    <div >
                        <p> Age <strong>{playerData[id - 1].Age}</strong></p>
                        <p>Height <strong>{playerData[id - 1].Height} </strong></p>
                        <p>Weight <strong>{playerData[id - 1].Weight} - {parseInt(parseInt(playerData[id - 1].Weight) * 0.45359237)}Kg</strong></p>
                        <p>Wage <strong>{playerData[id - 1].Wage} </strong></p>
                        <p>Value <strong>{playerData[id - 1].Value} </strong></p>
                        <p>Prefered Foot <strong>{playerData[id - 1]['Preferred Foot']}</strong></p>
                        <p>Position <strong>{playerData[id - 1].Position}</strong></p>
                        <p>Jersey Number <strong>{playerData[id - 1]['Jersey Number']}</strong></p>
                        <p>Weak Foot <span><RatingView ratingValue={4} stars={4} /></span></p>
                        <p>Skill Moves <span><RatingView ratingValue={5} stars={5} /></span></p>
                        <p>Work Rate (Attack - Deffense) <strong>{playerData[id - 1]['Work Rate']}</strong></p>
                        <p>International Reputation <span><RatingView ratingValue={4} stars={4} /></span></p>
                        <p>Club  <strong>{playerData[id - 1].Club}</strong> - Joind :<strong>{playerData[id - 1].Joined}</strong></p>
                        <p>Contract Valid Until <strong>{playerData[id - 1]['Contract Valid Until']}</strong></p>

                        
                        
                    </div>

                </div>

            </div>

        </div>
    )
}
