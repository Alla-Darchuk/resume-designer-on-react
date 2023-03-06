import { useState } from "react"
import { useDispatch } from "react-redux"
import { userSlice } from "../redux-store/userSlice"


function AboutMe() {
    let dispatch = useDispatch()
    const [name, setName] = useState('')
    const [about, setAbout] = useState('')


    return (
        <div>
            <h2>About Me</h2>
            <div className="about_me_inputs">
                <label className="label col_1">Name</label>
                <input className="input col_2" id="name_input" value={name} placeholder="Alla Darchuk"
                    onChange={event => setName(event.target.value)}
                    onBlur={() => dispatch(userSlice.actions.setName(name))}
                ></input>
                
                <label className="col_1" >About me:</label>
                <textarea className="textarea" id="about_input col_2" value={about}
                    onChange={event => setAbout(event.target.value)}
                    onBlur={() => dispatch(userSlice.actions.setAboutMe(about))}
                ></textarea>
            </div>
        </div>
    )
}
export default AboutMe