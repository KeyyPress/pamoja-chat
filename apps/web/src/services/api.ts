import axios from "axios";
import { API_BASE, AUTH_BASE } from "../config";

export const chatApi = axios.create({ baseURL: API_BASE });
export const authApi = axios.create({ baseURL: AUTH_BASE });
