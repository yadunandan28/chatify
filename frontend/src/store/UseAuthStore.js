import {create} from 'zustand';
import { axiosInstance } from '../lib/axios.js';
import toast from 'react-hot-toast';

export const useAuthStore = create((set) => ({

    authUser: null,
    isCheckingAuth: true,
    isSigningUp: false,

    checkauth : async () => {
        try{
            const res=await axiosInstance.get('/auth/check'); 
            set({authUser: res.data});
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
    }
}));

