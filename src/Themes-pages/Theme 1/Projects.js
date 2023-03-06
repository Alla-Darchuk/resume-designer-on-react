import React from "react";
import PropTypes from 'prop-types';

function Projects_1(props) {

    let project = props.project

    return (
        <li>
            <span className="project-link">
                <a href={project.link} className="project-link" target="_blank">
                    {project.link}</a>
                <span className="language">
                    <span className="bracket">[  </span>
                    {project.technologies.join(', ')} 
                    <span className="bracket">  ]</span>
                </span>
            </span>
        </li>
    )
}

Projects_1.propTypes = {
    project: PropTypes.object.isRequired,
    index: PropTypes.number
}


export default Projects_1
