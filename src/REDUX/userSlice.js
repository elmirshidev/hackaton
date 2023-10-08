import { createSlice } from "@reduxjs/toolkit";




const initialValue = {
    user:null
}

export const userSlice = createSlice({
    name: "user",
    initialState: initialValue,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    }

});
export const {login,logout} = userSlice.actions;
export default userSlice.reducer;