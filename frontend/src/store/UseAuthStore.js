import {create} from 'zustand';
import { axiosInstance } from '../lib/axios.js';
import toast from 'react-hot-toast';
import { io } from "socket.io-client"; 


const BASE_URL = import.meta.env.MODE==="development" ? "http://localhost:3000" : "/";

export const useAuthStore = create((set,get) => ({

    authUser: null,
    isCheckingAuth: true,
    isSigningUp: false,
    isLoggingIn: false,
    socket: null,
    onlineUsers: [],

    checkauth : async () => {
        try{
            const res=await axiosInstance.get('/auth/check'); 
            set({authUser: res.data});
            get().connectSocket();
        }
        catch (error) {
            console.log("Auth check failed:", error);
            set({authUser: null});
        }
        finally{
            set({isCheckingAuth: false});
        }
    },

    signup : async (data) => {
        set({isSigningUp: true});
        try{
            const res=await axiosInstance.post('/auth/signup', data);
            set({authUser: res.data});
            toast.success("Signup successful!");
            get().connectSocket();
        }
        catch (error) {
            const message =
            error?.response?.data?.message ||
            error?.message ||"Signup failed";
            toast.error(message);
        }
        finally{
            set({isSigningUp: false});
        }
    },

    login : async (data) => {
        set({isLoggingIn: true});
        try{
            const res=await axiosInstance.post('/auth/login', data);
            set({authUser: res.data});
            toast.success("Login successful!");
            get().connectSocket();
        }
        catch (error) {
            const message =
            error?.response?.data?.message ||
            error?.message ||"Login failed";
            toast.error(message);
        }
        finally{
            set({isLoggingIn: false});
        }
    },

    logout : async () => {
        try{
            await axiosInstance.post('/auth/logout');
            set({authUser: null});
            toast.success("Logout successful!");
            get().disconnectSocket();
        } catch (error) {
            toast.error("Logout failed");
            console.log("Logout failed:", error);
        }
    },

    connectSocket: () => {
        const {authUser}=get();
        if (!authUser || get().socket?.connected) return;

        const socket = io(BASE_URL, {
            withCredentials: true,  //ensures cookies are sent during handshake
        })
        socket.connect();

        set({socket: socket});

        //listen for online users events
        socket.on("getOnlineUsers", (userIDs) => {
            set({onlineUsers: userIDs});
        });
    },

    disconnectSocket: () => {
        if(get().socket.connected) get().socket.disconnect();

    }    
}));

