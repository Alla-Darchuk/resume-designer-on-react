import React from "react";
import PropTypes from 'prop-types';

function Educations_2(props) {

    let education = props.education
    
    let startDate = new Date(education.startDate)
    let endDate = new Date(education.endDate)

    return (
        <div className="content-items">
            <div className="items-header">
                <h3 className="header-text non-spase">{education.university}</h3>
                <h4 className="text non-spase">{education.country}</h4>
                <h4 className="text non-spase">{startDate.getFullYear()} ━ {endDate.getFullYear()}</h4>
            </div>
            <div className="decor">
                <div className="circle"></div>
                <div className="vertical-line"></div>
            </div>
            <div className="items-details">
                <h4 className="text non-spase">{education.specialty}</h4>
            </div>
        </div>
    )
}

Educations_2.propTypes = {
    education: PropTypes.object.isRequired,
    index: PropTypes.number
}


export default Educations_2
