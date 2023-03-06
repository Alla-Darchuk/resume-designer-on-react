import React, { useState, useRef } from "react";
import { userSlice } from "../redux-store/userSlice";
import { useDispatch } from "react-redux";

function AboutUser() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [about, setAbout] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')
    const [position, setPosition] = useState('')
    const preview = useRef()

    function createImgPreview(event) {
        if (preview.current.firstChild) {
            preview.current.removeChild(preview.current.firstChild)
        }
        let photo = event.target.files[0]
        let img = document.createElement('img');
        let src = window.URL.createObjectURL(photo)
        img.src = src
        img.classList.add('preview')
        preview.current.appendChild(img)
        dispatch(userSlice.actions.setPhoto(src))
    }
    
    return (
        <div className="form-item">
            <div className="colum1">
                <label className="label">Name</label>
                <label className="label">Position:</label>
                <label className="label">Your phone:</label>
                <label className="label">Your email:</label>
                <label className="label">Your Photo:</label>
            </div>

            <div className="colum2">
                <input className="input "  value={name} placeholder="Alla Darchuk"
                    onChange={event => setName(event.target.value)}
                    onBlur={() => dispatch(userSlice.actions.setName(name))}
                ></input>
                <input className="input" value={position}
                    onChange={event => setPosition(event.target.value)}
                    onBlur={(e) => dispatch(userSlice.actions.setPosition(position))}>
                </input>
                <input className="input" type='tel' pattern="\+380\d{9}" placeholder="+380111111111"
                    value={phone} onChange={event => setPhone(event.target.value)}
                    onBlur={(e) => dispatch(userSlice.actions.setPhone(phone))}
                ></input>
                <input className="input" type="email" value={mail}
                    onChange={event => setMail(event.target.value)}
                    onBlur={() => dispatch(userSlice.actions.setEmail(mail))}
                ></input>
                <label className="uploader">
                Upload Photo
                <input type='file' accept=".jpg, .jpeg, .png" 
                    onChange={createImgPreview} style={{ opacity: 0, width: 0 }}></input>
            </label>
            </div>
            
            <div className="colum3">
                <div ref={preview}></div>
            </div>

            <div className="about" >
                <label className="label" >About me:</label>
                <textarea className="textarea" value={about}
                    onChange={event => setAbout(event.target.value)}
                    onBlur={() => dispatch(userSlice.actions.setAboutMe(about))}
                ></textarea>
            </div>
        </div>
    )
}

export default  AboutUser