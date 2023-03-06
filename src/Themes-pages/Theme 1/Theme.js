import React from "react";
import '../../styles/Theme_1.css'
import Projects_1 from './Projects.js'
import Works_1 from "./Work";
import Educations_1 from "./Education";
import Skills_1 from "./Skills";
import { getUser } from "../../redux-store/userSlice";
import { getProjects } from "../../redux-store/projectsSlice";
import { getExperiences } from "../../redux-store/experiencesSlice";
import { getEducations } from "../../redux-store/educationSlice";
import { getSoftSkills } from "../../redux-store/softSkillsSlice";
import { getTechSkills } from "../../redux-store/techSkillsSlice";
import { useSelector } from "react-redux";


function Theme_1() {

    const user = useSelector(getUser)
    const projects = useSelector(getProjects)
    const works = useSelector(getExperiences)
    const educations = useSelector(getEducations)
    const softSkills = useSelector(getSoftSkills)
    const techSkills = useSelector(getTechSkills)


    let projectList = projects.map((project,index) =>
        <Projects_1 project={project} key={index} />)
    
    let workList = works.map((work,index) =>
        <Works_1 work={work} key={index} />)
    
    let educationList = educations.map((education, index) =>
        <Educations_1 education={education} key={index} />)
    
    let softSkillList = softSkills.map((softSkill, index) =>
        <Skills_1 skill={softSkill} key={index} />)
    
    let techSkillList = techSkills.map((techSkill, index) =>
        <Skills_1 skill={techSkill} key={index} />)
    
    return (
        <div className="theme1" >
            <div className="content">
                <div>
                    <h3 className="title-position">{user.position}</h3>
                    <h1 className="title-name">{user.name}</h1>
                    <span className="about text">{user.about}</span>
                </div>
                <div className="projects">
                    <h2 >Projects</h2>
                    <ol className="list">
                        {projectList}
                    </ol>
                </div>
                <div className="work">
                    <h2 >Work Experience</h2>
                        {workList}
                </div>
                <div>
                    <h2 >Education</h2>
                    {educationList}
                </div>
            </div>
            <aside className="sidebar">
                <img src={user.photo} alt="user photo" className="photo" />
                <div className="contacts">
                    <h3 className="sidebar-header">Contacts</h3>
                    <p> 
                        <span className="contact-text">C:</span> 
                        <a href="tel:{user.phone}" className="contact-link">{ user.phone}</a>
                    </p>
                    <p> 
                        <span className="contact-text">E:</span> 
                        <a href="mailto:{user.email}" className="contact-link">{ user.email}</a>
                    </p>
                </div>
                <div className="skills">
                    <h3 className="sidebar-header">Tech Skills</h3>
                    <ul>
                        {techSkillList}
                    </ul>
                </div>
                <div className="skills">
                    <h3 className="sidebar-header">Soft Skills</h3>
                    <ul>
                        {softSkillList}
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default Theme_1