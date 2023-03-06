import React,{useState} from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import ExperienceItem from "./ExperienceItem"
import AddButton from '../img/plus.svg'
import { useSelector, useDispatch } from "react-redux"
import { experiencesSlice, getExperiences } from "../redux-store/experiencesSlice"



function WorkExperience() {
    let dispatch = useDispatch()
    let experiences = useSelector(getExperiences)
    const [position, setPosition] = useState('')
    const [company, setCompany] = useState('')
    const [country, setCountry] = useState('')
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [responsibilities, setResponsibilities] = useState('')

    function removeExperience(index) {
        dispatch(experiencesSlice.actions.remove(index))
    }

    function addExperience() {
        let startDateString = startDate.toISOString()
        let endDateString = endDate.toISOString()
        dispatch(experiencesSlice.actions.add({
            position: position,
            company: company,
            country: country,
            startDate: startDateString,
            endDate: endDateString,
            responsibilities: responsibilities
        }))
        setPosition('')
        setCompany('')
        setCountry('')
        setStartDate(null)
        setEndDate(null)
        setResponsibilities('')
    }
    
    let experienceList = experiences.map((exp, index) =>
        <ExperienceItem exp={exp} key={index}
            removeMe={() => removeExperience(index)} />)

    return (
        <div>
            <h2>Work Experience</h2>
            <div className="form-item">
                <div className="colum1">
                    <label className='label'>Position</label>
                    <label className='label'>Company</label>
                    <label className='label'>Country</label>
                    <label className='label'>Time on job</label>
                    <label className='label'>Responsibilities</label>
                </div>

                <div className="block-with-button">
                    <div className="colum2">
                        <input className='input' value={position} 
                            onChange={event => setPosition(event.target.value)}></input>
                        <input className='input' value={company} 
                            onChange={event => setCompany(event.target.value)}></input>
                        <input className='input' value={country} 
                            onChange={event => setCountry(event.target.value)}></input>
                        <div className='terms-of-work'>
                            <DatePicker className='datapicker' selected={startDate}
                                onChange={(date) => setStartDate(date)} selectsEnd
                                placeholderText="Start date" withPortal
                                dateFormat="MM/yyyy" showMonthYearPicker
                                startDate={startDate} endDate={endDate} />
                            <DatePicker className='datapicker' selected={endDate}
                                onChange={(date) => setEndDate(date)} selectsEnd
                                placeholderText="End date" withPortal
                                dateFormat="MM/yyyy" showMonthYearPicker
                                startDate={startDate} endDate={endDate} minDate={startDate} /> 
                        </div>
                        <textarea className="textarea" value={responsibilities}
                            onChange={event => setResponsibilities(event.target.value)}></textarea>
                    </div>
                    <button className='add-button' onClick={addExperience}>
                        <img src={AddButton} alt="Add" />
                    </button>
                </div>
                <div className="colum3">
                    <ol className="list">
                        <p>{experienceList}</p>
                    </ol>
                </div>
            </div>
            

            
            
            
            
            
            
            
            
            
            
            
            <div className="responsibilities">
                
                
                
            </div>
        </div>
    )
}

export default WorkExperience