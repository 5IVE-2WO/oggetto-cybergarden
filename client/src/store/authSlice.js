import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "userAuth",
    initialState: {
        auth: {
            authLevel: 0,
            name: "",
            email: "",
        },
    },
    reducers: {
        guest(state) {
            state.authLevel = 1
            state.name = "guest"
        },
        user(state, action) {
            state.authLevel = 2
            state.name = action.payload.name
            state.email = action.payload.email
        },
        admin(state, action) {
            state.authLevel = 3
            state.name = action.payload.name
            state.email = action.payload.email
        },
    },
});

export const {guest, user, admin} = authSlice.actions;

export default authSlice.reducer;
