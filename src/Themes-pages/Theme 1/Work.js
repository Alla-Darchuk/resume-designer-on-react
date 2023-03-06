import React from "react";
import PropTypes from 'prop-types';

function Works_1(props) {

    let work = props.work
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
    let startDate = new Date(work.startDate)
    let endDate = new Date(work.endDate)
    const startMonth = months[startDate.getMonth()]
    const endMonth = months[endDate.getMonth()]

    return (
        <div>
            <h3 className="job">{work.company} <span className="place-job">{work.position}</span> </h3>
            <h5 className="period">{startMonth} {startDate.getFullYear()} ━ {endMonth} {endDate.getFullYear()}
                <span className="bar">  |  </span>{work.country}</h5>
            <ul>
                <li className="work-list">{work.responsibilities}</li>
            </ul>
        </div>
    )
}

Works_1.propTypes = {
    work: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default Works_1