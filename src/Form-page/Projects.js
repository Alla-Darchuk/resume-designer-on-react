import React, { useState } from "react"
import ProjectsItem from "./ProjectsItem"
import Select from "react-select"
import AddButton from '../img/plus.svg';
import { useSelector, useDispatch } from "react-redux";
import { projectsSlice, getProjects } from "../redux-store/projectsSlice";

export const DeleteProjectsContext = React.createContext()


function Projects() {

    let dispatch = useDispatch()
    let projects = useSelector(getProjects)
    const [link, setLink] = useState('')
    const [technologyList, setTechnologyList] = useState([])
    const options = [
        { label: 'Css',         value: 'Css' },
        { label: 'HTML',        value: 'HTML' },
        { label: 'JS',          value: 'JS' },
        { label: 'React JS',    value: 'JS' },
        { label: 'Node JS',     value: 'Node JS' },
        { label: 'Redux JS',    value: 'Redux JS' },
        { label: 'Angular JS',  value: 'Angular JS' },
        { label: 'Vue JS',      value: 'Vue JS' }, 
    ]
    
    function removeProject(index) {
        dispatch(projectsSlice.actions.remove(index))
    }

    function addLinks() {
        const value = technologyList.map(e => e.label)
        dispatch(projectsSlice.actions.add({
            link: link,
            technologies:value
        }))
        setLink('')
        setTechnologyList([])
    }
    
    let projectlList = projects.map((project, index) =>
        <ProjectsItem project={project} key={index}
            removeMe={() => removeProject(index)} />)
         
    
    return (
        <div>
            <header className="header">
                <h2>Projects</h2>
                <h3>Please, if you have any projects, please provide links
                    to them and the languages or frameworks used in them</h3>
            </header>
            
            <div className="form-item">
                <div className="colum1">
                    <label className="label">Link:</label>
                    <label className="label">Technology:</label>
                </div>

                <div className="block-with-button">
                    <div className="colum2">
                        <input className="input" value={link}
                            onChange={event => setLink(event.target.value)}>
                        </input>
                        <Select isMulti options={options} 
                            className="react-select-container"
                            onChange={(selectedItems) => setTechnologyList(selectedItems)}></Select>
                    </div>
                    <button className='add-button' onClick={addLinks}>
                        <img src={AddButton} alt="Add" />
                    </button>
                </div>
                
                <div className="colum3">
                    <ol className="list">
                        <p>{projectlList}</p>
                    </ol>
                </div>
            </div>
            

        </div>  
    )
}

export default Projects

