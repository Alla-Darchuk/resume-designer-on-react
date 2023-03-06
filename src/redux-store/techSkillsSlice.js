import { createSlice } from "@reduxjs/toolkit";

export const techSkillsSlice = createSlice({
    name: "techSkills",
    initialState: {
        techSkills:['This is your first Tech Skill']
    },
    reducers: {
        set: (state, action) => {
            state.techSkills = [action.payload]
        },
        remove: (state, action) => {
            let index = action.payload
            state.techSkills = state.techSkills.filter((item, pos) => pos !== index)
        },
        add        
    }
})

function add(state, action) {
    state.techSkills.push(action.payload)
}


export function getTechSkills(state) {
    return state.techSkills.techSkills
}