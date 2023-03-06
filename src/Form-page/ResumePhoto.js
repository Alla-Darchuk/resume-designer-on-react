import React, { useRef } from "react";
import { userSlice } from "../redux-store/userSlice";
import { useDispatch } from "react-redux";

function ResumePhoto() {
    const dispatch = useDispatch()
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
        <div>
            <h2>Your Photo</h2>
            <label className="uploader">
                Upload Photo
                <input type='file' accept=".jpg, .jpeg, .png" 
                    onChange={createImgPreview} style={{ opacity: 0, width: 0 }}></input>
            </label>
            <div ref={preview}>
            </div>
        </div>
    )
}
export default ResumePhoto