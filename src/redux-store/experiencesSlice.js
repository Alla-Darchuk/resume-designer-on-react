import { createSlice } from "@reduxjs/toolkit";

export const experiencesSlice = createSlice({
    name: "experiences",
    initialState: {
        experiences: [{
            position: 'Position',
            company: 'Company',
            country: 'Country',
            startDate: '2023-03-04T14:25:40.645Z',
            endDate: '2023-03-04T14:25:40.645Z',
            responsibilities: 'Responsibilities',
        }]
    },
    reducers: {
        set: (state, action) => {
            state.experiences = [action.payload]
        },
        remove: (state, action) => {
            let index = action.payload
            state.experiences = state.experiences.filter((item, pos) => pos !== index)
        },
        add: (state, action) => {
            state.experiences.push(action.payload)
        }     
    }
})
export function getExperiences(state) {
    return state.experiences.experiences
}