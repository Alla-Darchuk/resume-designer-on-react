import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./userSlice"
import { softSkillsSlice } from "./softSkillsSlice"
import { techSkillsSlice } from "./techSkillsSlice"
import { projectsSlice } from "./projectsSlice"
import { experiencesSlice } from "./experiencesSlice"
import { educationsSlice } from "./educationSlice"


export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        softSkills: softSkillsSlice.reducer,
        techSkills: techSkillsSlice.reducer,
        projects: projectsSlice.reducer,
        experiences: experiencesSlice.reducer,
        educations: educationsSlice.reducer
    }
})
