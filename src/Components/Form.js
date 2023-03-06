import Skills from "../Form-page/Skills"
import AboutUser from "../Form-page/AboutUser"
import Projects from "../Form-page/Projects"
import WorkExperience from "../Form-page/WorkExperience"
import Education from "../Form-page/Education"
import { useNavigate } from "react-router-dom"
import { softSkillsSlice, getSoftSkills } from '../redux-store/softSkillsSlice'
import { techSkillsSlice, getTechSkills } from "../redux-store/techSkillsSlice"
import {useSelector, useDispatch} from 'react-redux'
import '../styles/Form-style.css'


function Form() {

    const navigate = useNavigate();
    let dispatch = useDispatch()
    let softSkills = useSelector(getSoftSkills)
    let techSkills = useSelector(getTechSkills)

    function removeSoftSkill(index) {
        dispatch(softSkillsSlice.actions.remove(index))
    }
    function removeTechSkill(index) {
        dispatch(techSkillsSlice.actions.remove(index))
    }
    function addSoftSkills(skill) {
        dispatch(softSkillsSlice.actions.add(skill))
    }
    function addTechSkills(skill) {
        dispatch(techSkillsSlice.actions.add(skill))
    }

    return (
        <div className='forms'>
            <h3>First of all, fill out the form</h3>
            <AboutUser></AboutUser>
            <Skills title='Soft Skills' skills={softSkills} removeSkill={removeSoftSkill}
                addSkill={addSoftSkills} ></Skills>
            <Skills title='Tech Skills' skills={techSkills} removeSkill={removeTechSkill}
                addSkill={addTechSkills} ></Skills>
            <Projects></Projects>
            <WorkExperience></WorkExperience>
            <Education></Education>
            <button className="button-next" onClick={() => navigate("themes")}>Select view</button>
        </div>
    )
}

export default Form