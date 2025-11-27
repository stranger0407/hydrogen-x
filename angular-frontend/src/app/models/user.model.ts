export interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  companyProfile: string;
  website: string;
  brochure: string;
  customerCareContact: string;
  customerType: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}
