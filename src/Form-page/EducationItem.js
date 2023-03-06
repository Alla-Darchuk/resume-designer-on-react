import React from "react";
import PropTypes from "prop-types";

function EducationItem(props) {
    
    let education = props.educ
    
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

    let startDate = new Date(education.startDate);
    let endDate = new Date(education.endDate);
    const startMonth = months[startDate.getMonth()]
        
    const endMonth = months[endDate.getMonth()]
    return (
        <li>
            <span className="list-item">
                <span>
                    {education.specialty} in {education.university} <br />
                    {startMonth} {startDate.getFullYear()} ━ {endMonth} {endDate.getFullYear()} {education.country}
                </span>
                <button className="remove-button" onClick={props.removeMe} >&times;</button>
            </span>
        </li>
    )
}

EducationItem.propTypes = {
    educ:PropTypes.object.isRequired,
    index: PropTypes.number,
    removeMe: PropTypes.func.isRequired
}

export default EducationItem
     