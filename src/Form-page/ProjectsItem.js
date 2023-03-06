import PropTypes from 'prop-types';

function ProjectsItem(props) {

    let project = props.project 
    
    
    return (
        <li >
            <span className='list-item'>
                <span>{project.link}</span>
                <span className='block-with-button'>
                    <span className='technologies'>[ {project.technologies.join(', ')} ]</span>
                    <button className="remove-button"
                        onClick={props.removeMe} >&times;</button>
                </span>
            </span> 
        </li>
    )
}
ProjectsItem.propTypes = {
    project: PropTypes.object.isRequired,
    index: PropTypes.number,
    removeMe: PropTypes.func.isRequired
}

export default ProjectsItem