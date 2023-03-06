import PropTypes from 'prop-types';

function SkillsItem(props) {

    let skill = props.skill
    
    return (
        <li>
            <span className='list-item'>
                {skill}
                <button className="remove-button" onClick={() => props.removeMe()} >&times;</button>
            </span>
        </li>
    )
}

SkillsItem.propTypes = {
    skill: PropTypes.string.isRequired,
    removeMe: PropTypes.func.isRequired
}
export default SkillsItem