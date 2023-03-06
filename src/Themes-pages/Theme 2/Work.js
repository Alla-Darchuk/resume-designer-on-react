import React from "react";
import PropTypes from 'prop-types';

function Works_2(props) {

    let work = props.work
    
    let startDate = new Date(work.startDate)
    let endDate = new Date(work.endDate)

    return (
        <div className="content-items">
            <div className="items-header">
                <h3 className="header-text2 non-spase">{work.company}</h3>
                <h4 className="text non-spase">{work.country}</h4>
                <h4 className="text non-spase">{startDate.getFullYear()} ━ {endDate.getFullYear()}</h4>
            </div>
            <div className="decor">
                <div className="circle"></div>
                <div className="vertical-line"></div>
            </div>
            <div className="items-details">
                <h4 className="text non-spase">{work.position}</h4>
                <span className="text">{work.responsibilities}</span>
            </div>
        </div>
    )
}

Works_2.propTypes = {
    work: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default Works_2