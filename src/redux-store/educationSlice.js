import { createSlice } from "@reduxjs/toolkit";

export const educationsSlice = createSlice({
    name: "educations",
    initialState: {
        educations: [{
            university: 'University',
            specialty: 'Specialty',
            startDate: '2023-03-04T14:30:53.505Z',
            endDate: '2023-03-04T14:30:53.505Z',
            country: 'Country'
       }]
    },
    reducers: {
        set: (state, action) => {
            state.educations = [action.payload]
        },
        remove: (state, action) => {
            let index = action.payload
            state.educations = state.educations.filter((item, pos) => pos !== index)
        },
        add: (state, action) => {
            state.educations.push(action.payload)
        }     
    }
})

export function getEducations(state) {
    return state.educations.educations
}