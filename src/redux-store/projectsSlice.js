import { createSlice } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        projects: [{
            link: 'link',
            technologies: ['css', 'html']
        }]
    },
    reducers: {
        set: (state, action) => {
            state.projects = [action.payload]
        },
        remove: (state, action) => {
            let index = action.payload
            state.projects = state.projects.filter((item, pos) => pos !== index)
        },
        add: (state, action) => {
            state.projects.push(action.payload)
        }     
    }
})
export function getProjects(state) {
    return state.projects.projects
}