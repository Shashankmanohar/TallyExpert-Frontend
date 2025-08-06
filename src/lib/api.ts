import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'https://tally-expert-backend-vxo2.vercel.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('adminToken');
      window.location.href = '/admin';
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const authAPI = {
  login: (credentials: { email: string; password: string }) =>
    api.post('/admin/loginAdmin', credentials),
  createAdmin: (adminData: { name: string; email: string; password: string; role: string }) =>
    api.post('/admin/createAdmin', adminData),
};

export const certificateAPI = {
  create: (certificateData: {
    studentName: string;
    fatherName: string;
    dateOfBirth: string;
    rollNo: string;
    passingYear: string;
    certificateNumber: string;
  }) => api.post('/certificate/create', certificateData),
  
  getAll: () => api.get('/certificate/getAll'),
  
  getOne: (params: { studentName: string; fatherName: string; dateOfBirth: string; certificateNumber: string }) =>
    api.get('/certificate/getOne', { params }),

  delete: (id: string) => api.delete(`/certificate/delete/${id}`),
};

export default api; 