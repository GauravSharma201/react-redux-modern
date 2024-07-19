import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: [],
  error: null,
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", () => { // returns following actions: pending, fulfilled, rejected
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.data.map((user) => user.id));
});

const userSlice = createSlice({
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

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      (state.error = action), payload;
    });
  },
});


export default userSlice.reducer;