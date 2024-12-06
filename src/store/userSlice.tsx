import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apiUrl = "https://take-home-test-api.nutech-integrasi.com";

interface UserState {
  user: UserData | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

interface UserData {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
}

const initialState: UserState = {
  user: null,
  status: "idle",
  error: null,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userData: UserData, { rejectWithValue }) => {
    console.log("Registering user with data:", userData);

    const response = await fetch(`${apiUrl}/registration`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    console.log(data);
    // if (!response.ok) {
    //   console.log("Error response from the server:", data);
    //   throw new Error("Network response was not ok");
    // }
    // 0 success, 102 email already registered, 102 invalid param
    if (data.status === 102) {
      return rejectWithValue(data.message || "Error: 102");
    }
    if (data.status !== 0) {
      return rejectWithValue(data.message || "Failed to register user");
    }
    return userData;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;
