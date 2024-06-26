import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL,PROJECT_URL,UPLOAD_URL } from "../constant";
import { notification } from "antd";

// Async actions
export const getProjectById = createAsyncThunk(
  "projects/getProjectById",
  async (projectId) => {
    const response = await axios.get(`${BASE_URL}${PROJECT_URL}/${projectId}`);
    return response.data;
  }
);

export const getProjects = createAsyncThunk(
  "projects/getProjects",
  async () => {
    const response = await axios.get(`${BASE_URL}/api/projects`);
    return response.data;
  }
);

export const getProjectDetails = createAsyncThunk(
  "projects/getProjectDetails",
  async (projectId) => {
    const response = await axios.get(`${PROJECT_URL}/${projectId}`);
    return response.data;
  }
);

export const getUserandAdminCount = createAsyncThunk(
  "users/getUserandAdminCount",
  async () => {
    const response = await axios.get(`${BASE_URL}/api/users/total-emails`);
    return response.data;
  }
);

export const createProject = createAsyncThunk(
  "projects/createProject",
  async (projectData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/projects`,
        projectData
      );

      // Success notification
      if (response.data.message) {
        notification.success({
          message: "Success",
          description: response.data.message,
        });
      }

      return response.data;
    } catch (error) {
      // Error notification
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        notification.error({
          message: "Error",
          description: error.response.data.message,
        });
      }

      return rejectWithValue(error.response.data);
    }
  }
);

export const updateProject = createAsyncThunk(
  "projects/updateProject",
  async ({ projectId, formData }, { rejectWithValue }) => {
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });
      const response = await axios.put(
        `${BASE_URL}${PROJECT_URL}/${projectId}`,
        data
      );
      if (response.data.message) {
        notification.success({
          message: "Success",
          description: response.data.message,
        });
      }
      return response.data;
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        notification.error({
          message: "Error",
          description: error.response.data.message,
        });
      }

      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteProject = createAsyncThunk(
  "projects/deleteProject",
  async (projectId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}${PROJECT_URL}/${projectId}`
      );
      if (response.data.message) {
        notification.success({
          message: "Success",
          description: response.data.message,
        });
      }
      return response.data;
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        notification.error({
          message: "Error",
          description: error.response.data.message,
        });
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const createReview = createAsyncThunk(
  "projects/createReview",
  async (data) => {
    const response = await axios.post(
      `${BASE_URL}${PROJECT_URL}/${data.projectId}/reviews`,
      data
    );
    return response.data;
  }
);

export const uploadProjectImage = createAsyncThunk(
  "projects/uploadProjectImage",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/upload`, data);

      if (response.data.message) {
        notification.success({
          message: "Success",
          description: response.data.message,
        });
      }
      return response.data;
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        notification.error({
          message: "Error",
          description: error.response.data.message,
        });
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const saveProjectOrder = createAsyncThunk(
  "projects/saveProjectOrder",
  async (projectData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/projects/saveorder`,
        projectData
      );

      // Success notification
      if (response.data.message) {
        notification.success({
          message: "Success",
          description: response.data.message,
        });
      }

      return response.data;
    } catch (error) {
      // Error notification
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        notification.error({
          message: "Error",
          description: error.response.data.message,
        });
      }

      return rejectWithValue(error.response.data);
    }
  }
);
export const getProjectOrder = createAsyncThunk(
  "users/getProjectOrder",
  async () => {
    const response = await axios.get(`${BASE_URL}/api/projects/saveorder`);
    return response.data;
  }
);

export const updateProjectOrderContact = createAsyncThunk(
  "projects/updateProjectOrderContact",
  async ({ orderId, updatedOrderData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/api/projects/saveorder/${orderId}`,
        updatedOrderData
      );
      // Success notification
      if (response.data.message) {
        notification.success({
          message: "Success",
          description: response.data.message,
        });
      }
      return response.data;
    } catch (error) {
      // Error notification
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        notification.error({
          message: "Error",
          description: error.response.data.message,
        });
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const deleteProjectOrderById = createAsyncThunk(
  "projects/deleteProjectOrderById",
  async ({ orderId }, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/api/projects/saveorder/${orderId}`
      );
      // Success notification
      if (response.data.message) {
        notification.success({
          message: "Success",
          description: response.data.message,
        });
      }
      return response.data;
    } catch (error) {
      // Error notification
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        notification.error({
          message: "Error",
          description: error.response.data.message,
        });
      }
      return rejectWithValue(error.response.data);
    }
  }
);
export const getProjectOrderUserCount = createAsyncThunk(
  "projects/getProjectOrderUserCount",
  async () => {
    const response = await axios.get(
      `${BASE_URL}/api/projects/saveorder/countuser`
    );
    return response.data;
  }
);
// Slice
const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    getProjectById: { data: null, loading: false, error: null },
    getProjects: { data: [], loading: false, error: null },
    updateProject: { data: [], loading: "idle", error: null },
    getUserandAdminCount: { data: [], loading: "idle", error: null },
    createReview: { data: [], loading: "idle", error: null },
    saveProjectOrder: { data: [], loading: "idle", error: null },
    getProjectOrder: { data: [], loading: "idle", error: null },
    updateProjectOrderContact: { data: [], loading: "idle", error: null },
    deleteProjectOrderById: { data: [], loading: "idle", error: null },
    getProjectOrderUserCount: { data: [], loading: "idle", error: null },
    // ... Repeat for all other async actions ...
  },
  reducers: {},
  extraReducers: (builder) => {
    //GET BROJECBYID FUNCTIONS
    builder.addCase(getProjectById.pending, (state) => {
      state.getProjectById.loading = true;
    });
    builder.addCase(getProjectById.fulfilled, (state, action) => {
      state.getProjectById.data = action.payload;
      state.getProjectById.loading = false;
    });
    builder.addCase(getProjectById.rejected, (state, action) => {
      state.getProjectById.error = action.error.message;
      state.getProjectById.loading = false;
    });
    //GET BROJECTS FUNCTION
    builder.addCase(getProjects.pending, (state) => {
      state.getProjects.loading = true;
    });
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.getProjects.data = action.payload;
      state.getProjects.loading = false;
    });
    builder.addCase(getProjects.rejected, (state, action) => {
      state.getProjects.error = action.error.message;
      state.getProjects.loading = false;
    });
    //UPDATE UPDATEPROJECT FUNCTIONS
    builder.addCase(updateProject.pending, (state) => {
      state.updateProject.loading = "loading";
    });
    builder.addCase(updateProject.fulfilled, (state, action) => {
      state.updateProject.loading = "succeeded";
      state.updateProject.data = action.payload;
    });
    builder.addCase(updateProject.rejected, (state, action) => {
      state.updateProject.loading = "failed";
      state.updateProject.error = action.error.message;
    });

    //GET USER AND ADMIN COUNT
    builder.addCase(getUserandAdminCount.pending, (state) => {
      state.getUserandAdminCount.loading = "loading";
    });
    builder.addCase(getUserandAdminCount.fulfilled, (state, action) => {
      state.getUserandAdminCount.loading = "succeeded";
      state.getUserandAdminCount.data = action.payload;
    });
    builder.addCase(getUserandAdminCount.rejected, (state, action) => {
      state.getUserandAdminCount.loading = "failed";
      state.getUserandAdminCount.error = action.error.message;
    });

    // POST CREATE REVIEW
    builder.addCase(createReview.pending, (state) => {
      state.createReview.loading = "loading";
    });
    builder.addCase(createReview.fulfilled, (state, action) => {
      state.createReview.loading = "succeeded";
      state.createReview.data = action.payload;
    });
    builder.addCase(createReview.rejected, (state, action) => {
      state.createReview.loading = "failed";
      state.createReview.error = action.error.message;
    });

    //POST SAVE PROJECT ORDER
    builder.addCase(saveProjectOrder.pending, (state, action) => {
      state.saveProjectOrder.pending = "loading";
    });
    builder.addCase(saveProjectOrder.fulfilled, (state, action) => {
      state.saveProjectOrder.data = action.payload;
      state.saveProjectOrder.loading = "succeeded";
    });
    builder.addCase(saveProjectOrder.rejected, (state, action) => {
      state.saveProjectOrder.loading = "failed";
      state.saveProjectOrder.error = action.error.message;
    });

    //GET PROJECT ORDER
    builder.addCase(getProjectOrder.pending, (state) => {
      state.getProjectOrder.loading = "loading";
    });
    builder.addCase(getProjectOrder.fulfilled, (state, action) => {
      state.getProjectOrder.loading = "succeeded";
      state.getProjectOrder.data = action.payload;
    });
    builder.addCase(getProjectOrder.rejected, (state, action) => {
      state.getProjectOrder.loading = "failed";
      state.getProjectOrder.error = action.error.message;
    });

    //PUT  PROJECT ORDER
    builder.addCase(updateProjectOrderContact.pending, (state) => {
      state.updateProjectOrderContact.loading = "loading";
    });
    builder.addCase(updateProjectOrderContact.fulfilled, (state, action) => {
      state.updateProjectOrderContact.loading = "succeeded";
      state.updateProjectOrderContact.data = action.payload;
    });
    builder.addCase(updateProjectOrderContact.rejected, (state, action) => {
      state.updateProjectOrderContact.loading = "failed";
      state.updateProjectOrderContact.error = action.error.message;
    });

    //DELETE DELETE PROJECT ORDER  WITH ID
    builder.addCase(deleteProjectOrderById.pending, (state, action) => {
      state.deleteProjectOrderById.loading = "loading";
    });
    builder.addCase(deleteProjectOrderById.fulfilled, (state, action) => {
      state.deleteProjectOrderById = state.deleteProjectOrderById.filter(
        (order) => order._id !== action.payload._id
      );
      state.deleteProjectOrderById.loading = "succeeded";
    });
    builder.addCase(deleteProjectOrderById.rejected, (state, action) => {
      state.deleteProjectOrderById.error = action.error.message;
      state.deleteProjectOrderById.loading = "failed";
    });

    //GET PROJECT ORDER USER COUNT
    builder.addCase( getProjectOrderUserCount.pending, (state) => {
      state. getProjectOrderUserCount.loading = "loading";
    });
    builder.addCase( getProjectOrderUserCount.fulfilled, (state, action) => {
      state.getProjectOrderUserCount.loading = "succeeded";
      state. getProjectOrderUserCount.data = action.payload;
    });
    builder.addCase( getProjectOrderUserCount.rejected, (state, action) => {
      state.getProjectOrderUserCount.loading = "failed";
      state.getProjectOrderUserCount.error = action.error.message;
    });

    // ... Repeat for all other async actions ...

    // NOT USED FUNCTIONS
    builder.addCase(getProjectDetails.fulfilled, (state, action) => {
      // handle the state update when the promise is fulfilled
    });

    builder.addCase(createProject.fulfilled, (state, action) => {
      // handle the state update when the promise is fulfilled
    });

    builder.addCase(deleteProject.fulfilled, (state, action) => {
      // handle the state update when the promise is fulfilled
    });
    builder.addCase(uploadProjectImage.fulfilled, (state, action) => {
      // handle the state update when the promise is fulfilled
      const { payload } = action;
      state.projectImage = payload;
    });
    // ... Repeat for all other async actions ...
  },
});

export default projectsSlice.reducer;
