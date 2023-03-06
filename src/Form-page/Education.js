import React, {useState} from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import EducationItem from "./EducationItem"
import AddButton from '../img/plus.svg'
import { useSelector, useDispatch } from "react-redux"
import { educationsSlice, getEducations } from "../redux-store/educationSlice"



function Education() {
    let dispatch = useDispatch()
    let educations = useSelector(getEducations)
    const [university, setUniversity] = useState('')
    const [specialty, setSpecialty] = useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [country, setCountry] = useState('')

    function addEducation() {
        let startDateString = startDate.toISOString()
        let endDateString = endDate.toISOString()
        dispatch(educationsSlice.actions.add({
            university: university,
            specialty: specialty,
            startDate: startDateString,
            endDate: endDateString,
            country: country,
        }))
        setUniversity('')
        setSpecialty('')
        setStartDate(null)
        setEndDate(null)
        setCountry('')
    }

    function removeEducation(index) {
        dispatch(educationsSlice.actions.remove(index))
    }
    
    let educationList = educations.map((educ, index) =>
        <EducationItem educ={educ} key={index}
            removeMe={() => removeEducation(index)} />)

    return (
        <div className="Education">
            <h2>Education: </h2>

            <div className="form-item">
                <div className="colum1">
                    <label className="label">University:</label>
                    <label className="label">Specialty:</label>
                    <label className="label">Country:</label>
                    <label className='label'>Time on study</label>
                </div>

                <div className="block-with-button">
                    <div className="colum2">
                        <input className="input" value={university}
                            onChange={event => setUniversity(event.target.value)}></input>
                        <input className="input"  value={specialty}
                            onChange={event => setSpecialty(event.target.value)}></input>
                        <input className="input" value={country}
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
                    </div>
                    <button className='add-button' onClick={addEducation}>
                        <img  src={AddButton} alt="Add" />
                    </button>
                </div>

                <div className="colum3">
                    <ol className="list">
                        <p>{educationList}</p>
                    </ol>
                </div>
            </div>  
        </div>   
    )
}

export default Education