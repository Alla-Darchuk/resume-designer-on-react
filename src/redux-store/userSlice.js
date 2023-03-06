import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: '',
        phone: '',
        email: '',
        about: '',
        position: '',
        photo: {}
    },
    reducers: {
        setName: (state, action) => {
            state.name = [action.payload]
        },
        setPhone: (state, action) => {
            state.phone = [action.payload]
        },
        setEmail: (state, action) => {
            state.email = [action.payload]
        },
        setAboutMe: (state, action) => {
            state.about = [action.payload]
        },
        setPosition: (state, action) => {
            state.position = [action.payload]
        },
        setPhoto: (state, action) => {
            state.photo = [action.payload]
        }
    
    }
})

export function getUser(state) {
    return state.user
}
