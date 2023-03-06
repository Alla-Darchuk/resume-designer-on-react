import PropTypes from 'prop-types';

function Skills_1(props) {

    let skill = props.skill
    
    return (
        <li className="sidebar-list">
            <span className="sidebar-list-text">{skill}</span>
        </li>
    )
}

Skills_1.propTypes = {
    skill: PropTypes.string.isRequired,
    index: PropTypes.number
}

export default Skills_1