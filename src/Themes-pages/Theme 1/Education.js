import React from "react";
import PropTypes from 'prop-types';

function Educations_1(props) {

    let education = props.education
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
    let startDate = new Date(education.startDate)
    let endDate = new Date(education.endDate)
    const startMonth = months[startDate.getMonth()]
    const endMonth = months[endDate.getMonth()]

    return (
        <div>
            <h3 className="place-job">{education.university} </h3>
            <h4 className="specialty">{education.specialty}</h4>
            <h5 className="period">{startMonth} {startDate.getFullYear()} ━ {endMonth} {endDate.getFullYear()}
                <span className="bar">  |  </span>{education.country}</h5>
        </div>
    )
}

Educations_1.propTypes = {
    education: PropTypes.object.isRequired,
    index: PropTypes.number
}


export default Educations_1
