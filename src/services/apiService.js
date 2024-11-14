import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchUserData = async (userId) => {
  const response = await apiClient.get(`/user/${userId}`);
  return response.data;
};

export const fetchUserActivity = async (userId) => {
  const response = await apiClient.get(`/user/${userId}/activity`);
  return response.data;
};

export const fetchUserAverageSessions = async (userId) => {
  const response = await apiClient.get(`/user/${userId}/average-sessions`);
  return response.data;
};

export const fetchUserPerformance = async (userId) => {
  const response = await apiClient.get(`/user/${userId}/performance`);
  return response.data;
};
