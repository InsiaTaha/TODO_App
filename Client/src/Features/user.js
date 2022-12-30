import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
const API_URL = "http://localhost:3000/UserRecord";

export const getUser = createAsyncThunk('user/getuser', async (data, thunkApi) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    const response = await fetch('http://localhost:3001/getuser', requestOptions);
    return response.json();
});
export const addUserAsync = createAsyncThunk('user/postuser', async (data, thunkApi) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    const response = await fetch('http://localhost:3001/postuser', requestOptions);
    return response.json();
});
export const addTodo = createAsyncThunk('user/posttodo', async (data, thunkApi)=>{
    console.log(data)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    const response = await fetch('http://localhost:3001/posttodo', requestOptions);
    return response.json();
});
export const deleteTodo = createAsyncThunk('user/deltodos', async (data, thunkApi)=>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    const response = await fetch('http://localhost:3001/deletetodo', requestOptions);
    return response.json();
});

export const userSlice=createSlice({
    name:"user",
    initialState:{
        value:[],
        isLogged:false,
        currentUser:{
            FName:"",
            LName:"",
            UName:"",
            Password:"",
            TodoList:[]
        }
    },
    reducers:{
        login:(state,action)=>{
            state.isLogged=action.payload
        },
        ADD_CURRENT_USER:(state,action)=>{
            state.currentUser=action.payload

        },
        LOGOUT:(state,action)=>{
           
            state.value={FName:"",
            LName:"",
            UName:"",
            Password:"",
            TodoList:[]
        }
            state.isLogged=false
        }
    },
    extraReducers: {
        [addUserAsync.pending]: (state, action) => {
            console.log('pending');
        },
        [addUserAsync.fulfilled]: (state, action) => {
            console.log('fulfilled');
            alert(action.payload.message);
        },
        [addUserAsync.rejected]: () => {
            console.log('request rejected');
        },
        [getUser.pending]: (state, action) => {
            state.loader = true;
        },
        [getUser.fulfilled]: (state, action) => {
            state.loader = false;
            
            if (action.payload.error!==undefined) {
                state.isError = true;
                alert(action.payload.error);
            }
            else {
                state.isError = false;
                state.currentUser = action.payload.data;
                state.isLogged = true;
                alert('successfully logged in');
            }
        },
        [getUser.rejected]: () => {
            console.log('fetch user rejected');
        },
        [addTodo.pending]:()=>{
            console.log('pending');
        },
        [addTodo.fulfilled]: (state, action) => {
            state.currentUser = action.payload.data
        },
        [addTodo.rejected]: ()=>{
            console.log('request rejected');
        },
        [deleteTodo.pending]:()=>{
            console.log('pending');
        },
        [deleteTodo.fulfilled]: (state, action) => {
            state.currentUser = action.payload.data
        },
        [deleteTodo.rejected]: ()=>{
            console.log('request rejected');
        }
    }
})


export const {login,ADD_USER,LOGOUT,GET_USER,ADD_CURRENT_USER}=userSlice.actions;
export default userSlice.reducer;
