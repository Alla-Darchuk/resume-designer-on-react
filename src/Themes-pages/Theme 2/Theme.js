import React from "react";
import '../../styles/Theme_2.css'
import Projects_2 from './Projects.js'
import Works_2 from "./Work";
import Educations_2 from "./Education";
import { getUser } from "../../redux-store/userSlice";
import { getProjects } from "../../redux-store/projectsSlice";
import { getExperiences } from "../../redux-store/experiencesSlice";
import { getEducations } from "../../redux-store/educationSlice";
import { getSoftSkills } from "../../redux-store/softSkillsSlice";
import { getTechSkills } from "../../redux-store/techSkillsSlice";
import { useSelector } from "react-redux";
import phone from "../../img/phone.png"
import email from "../../img/email.png"


function Theme_2() {

    const user = useSelector(getUser)
    const projects = useSelector(getProjects)
    const works = useSelector(getExperiences)
    const educations = useSelector(getEducations)
    const softSkills = useSelector(getSoftSkills)
    const techSkills = useSelector(getTechSkills)
   
    

    let projectList = projects.map((project, index) =>
        <Projects_2 project={project} key={index} />)
    
    let workList = works.map((work, index) =>
        <Works_2 work={work} key={index} />)
    
    let educationList = educations.map((education, index) =>
        <Educations_2 education={education} key={index} />)
    
    let softSkillList = []
    let techSkillList = []
    for (let i = 0; i < softSkills.length; i++){
        softSkillList.push(softSkills[i])
    }
    for (let i = 0; i < techSkills.length; i++){
        techSkillList.push(techSkills[i])
    }
    
    return (
        <div className="theme2" >
            <div className="content">
                <div className="header">
                    <div>
                        <h1 className="header-text">{user.name}</h1>
                        <h3 className="header-text">{user.position}</h3>
                    </div>
                    <div className="contacts">
                        <div className="contacts-item">
                            <img alt="icon" src={phone} className="icon"></img>
                            <p><a href="tel:{user.phone}" className="text">{ user.phone}</a></p>
                        </div>
                        <div className="contacts-item">
                            <img alt="icon" src={email} className="icon-email"></img>
                            <p><a href="mailto:{user.email}" className="text">{ user.email}</a></p>
                        </div>
                    </div>
                </div>
                <div className="horizontal-line"></div>
                <div>
                    <h2 className="header-text">Work Experience</h2>
                    {workList}
                </div>
                <div className="horizontal-line"></div>
                <div>
                    <h2 className="header-text">Educations</h2>
                    {educationList}
                </div>
                <div className="horizontal-line"></div>
                <h2 className="header-text">Skills</h2>

                <div className="content-items">
                    <div className="items-header">
                        <h4 className="header-text grey">Soft Skills</h4>
                    </div>
                    <div className="decor">
                        <div className="circle"></div>
                        <div className="vertical-line"></div>
                    </div>
                    <div className="items-details">
                        <h4 className="text">{softSkillList.join(', ')}</h4>
                    </div>
                </div>
                <div className="content-items">
                    <div className="items-header">
                        <h4 className="header-text grey">Tech Skills</h4>
                    </div>
                    <div className="decor">
                        <div className="circle"></div>
                        <div className="vertical-line"></div>
                    </div>
                    <div className="items-details">
                        <h4 className="text">{techSkillList.join(', ')}</h4>
                    </div>
                </div>
            </div>
            <div className="sidebar">
                <img src={user.photo} alt="user photo" className="photo" />
                <h2 className="header-text grey">About me</h2>
                <span className="text">{user.about}</span>
                <div className="horizontal-line" ></div>
                <h2 className="header-text white">website & links</h2>
                {projectList}
            </div>
        </div>
    )
}

export default Theme_2