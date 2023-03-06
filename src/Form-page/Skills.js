import React from 'react';
import SkillsItem from "./SkillsItem";
import { useState } from 'react';
import AddButton from '../img/plus.svg';
import PropTypes from 'prop-types';
    

function Skills(props) {

    let title = props.title
    let skills = props.skills
    const [currentSkill, setCurrentSkill] = useState('')

    function addSkills() {
        props.addSkill(currentSkill)
        setCurrentSkill('')
    }

    let skillList = skills.map((skill, index) =>
        <SkillsItem skill={skill} key={index}
            removeMe={() => props.removeSkill(index)} />)
    
    return (
        <div className='form-item'>
            <div className='colum1'>
                <label className='label'>{title}</label>
            </div>
            
            <div className='colum2'>
                <div className='block-with-button'>
                    <input className='input' value={currentSkill}
                        onChange={event => setCurrentSkill(event.target.value)}
                    ></input>
                    <button className='add-button' onClick={addSkills}>
                        <img src={AddButton} alt="Add" />
                    </button>
                </div>
            </div>

            <div className='colum3'>
                <ul className='list'>
                    <p className='list-text'>{skillList}</p>
                </ul>
            </div>
        </div>
    )
}

Skills.propTypes = {
    title: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
    removeSkill: PropTypes.func.isRequired,
    addSkill: PropTypes.func.isRequired
}
export default Skills