const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: null,
};

const fetchUsers = createAsyncThunk('user/fetchUsers',() => {
  // returns three actions : pending, fulfilled, rejected
  return axios
    .get("https://jsonplaceholders.typicode.com/users")
    .then((resp) => resp.data.map((user) => user.id));
});

const usersSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = null;
    });

    builder.addCase(fetchUsers.rejected,(state,action)=>{
        state.loading = false;
        state.users = [];
        state.error = action.payload;
    })
  },
});


module.exports = usersSlice.reducer;
module.exports.fetchUsers = fetchUsers;
