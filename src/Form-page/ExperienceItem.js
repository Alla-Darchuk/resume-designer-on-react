import React from "react"
import PropTypes from 'prop-types';

function ExperienceItem(props) {

    let experience = props.exp
    
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    let startDate = new Date(experience.startDate)
    let endDate = new Date(experience.endDate)
    const startMonth = months[startDate.getMonth()]
    const endMonth = months[endDate.getMonth()]
    
    return (
        <li>
            <span className="list-item">
                <span>
                    {experience.position} {experience.company}<br/>
                    {startMonth} {startDate.getFullYear()} ━ {endMonth} {endDate.getFullYear()}<br/>
                    {experience.country} {experience.responsibilities}
                </span>
                <button className="remove-button" onClick={props.removeMe} >&times;</button>
            </span>
        </li>
    )
}

ExperienceItem.propTypes = {
    exp: PropTypes.object.isRequired,
    index: PropTypes.number,
    removeMe: PropTypes.func.isRequired
}

export default ExperienceItem