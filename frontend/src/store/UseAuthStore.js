import {create} from 'zustand';

export const useAuthStore = create((set) => ({
    authUser:{name:"yadu",id:"12345",age:21},
    isloading:false,
    isloggedIn: false,

    login: (user) => {
        console.log("Logging in user:", user);
        set({isloading:true,isloggedIn:true});
    },
}));