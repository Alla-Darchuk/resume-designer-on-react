import { createSlice } from "@reduxjs/toolkit";

export const softSkillsSlice = createSlice({
    name: "softSkills",
    initialState: {
        skills: ['This is your first Soft Skill']
    },
    reducers: {
        set: (state, action) => {
            state.skills = [action.payload]
        },
        remove: (state, action) => {
            let index = action.payload
            state.skills = state.skills.filter((item, pos) => pos !== index)
        },
        add        
    }
})

function add(state, action) {
    state.skills.push(action.payload)
}


export function getSoftSkills(state) {
    return state.softSkills.skills
}

export const isSoftskillsEmpty = (state) => {
    return state.softSkills.skills.length === 0
}