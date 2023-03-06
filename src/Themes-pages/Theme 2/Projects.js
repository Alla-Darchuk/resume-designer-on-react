import React from "react";
import PropTypes from 'prop-types';

function Projects_2(props) {

    let project = props.project

    return (
        <div className="links">
            <h3 className="non-spase"><a href={project.link} className="text white" target="_blank">
                {project.link}</a></h3>
            <span className="text non-spase">{project.technologies.join(', ')}</span> 
        </div>
    )
}

Projects_2.propTypes = {
    project: PropTypes.object.isRequired,
    index: PropTypes.number
}


export default Projects_2