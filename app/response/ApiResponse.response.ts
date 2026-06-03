import { ApiError } from './ApiError.response';

export interface ApiResponse<T> {
  apiVersion: string;
  error: ApiError | null; 
  id: number | null;      
  result: T;              
}