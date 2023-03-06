import { useState } from "react"
import { useDispatch } from "react-redux"
import { userSlice } from "../redux-store/userSlice"


function Contacts() {
    let dispatch = useDispatch()
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')
    const [position, setPosition] = useState('')

    return (
        <div className="contacts">
            <h2>Contacts</h2>
            
            <label className="label">Position:</label>
            <input className="input" value={position}
                onChange={event => setPosition(event.target.value)}
                onBlur={(e) => { dispatch(userSlice.actions.setPosition(position)) }}
            ></input>
            <label className="label">Your phone:</label>
            <input className="input" type='tel' pattern="\+380\d{9}" placeholder="+380111111111"
                value={phone} onChange={event => setPhone(event.target.value)}
                onBlur={(e) => { dispatch(userSlice.actions.setPhone(phone)) }}
            ></input>
            
            <label className="label">Your email:</label>
            <input className="input" type="email" value={mail}
                onChange={event => setMail(event.target.value)}
                onBlur={() => { dispatch(userSlice.actions.setEmail(mail)) }}
            ></input>
        </div>
    )
}
export default Contacts