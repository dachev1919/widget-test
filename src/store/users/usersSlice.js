import { createSlice } from "@reduxjs/toolkit";
import users from '../../assets/data/initData.json';

const initialState = {
    data: users,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(state, action) {},
        deleteUser(state, action) {}
    }
});


export const cartAction = usersSlice.actions;
export default usersSlice;