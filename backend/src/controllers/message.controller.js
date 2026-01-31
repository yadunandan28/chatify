import Message from '../models/message.js';
import User from '../models/User.js';
import cloudinary from '../lib/cloudinary.js';

export const getAllContacts = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filtereredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select('-password');
        res.status(200).json(filtereredUsers);
    }catch (error) {
        console.log("Error in getAllContacts: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getMessagesByUserId = async (req, res) => {
    try {
        const myId = req.user._id;
        const {id:usertochatid} =req.params;
        const messages = await Message.find({
            $or: [
                { senderId: myId, receiverId: usertochatid },
                { senderId: usertochatid, receiverId: myId }
            ]
        }); 

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessagesByUserId: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const sendMessage = async (req, res) => { 
    try {
        const {text,image} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id;

        let imageUrl;
        if(image){
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: imageUrl
        });

        await newMessage.save();
        res.status(201).json(newMessage); 

    } catch (error) {
        console.log("Error in sendMessage: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }   

};

export const getchatPartners = async (req, res) => {
    try {
        const loggedInUserId = req.user._id; //find all the messages where the logged in user will be sender or reciever
        const messages = await Message.find({
            $or: [
                { senderId: loggedInUserId },
                { receiverId: loggedInUserId }
            ]
        });

        const chatPartnerIds = [...new Set(messages.map(msg =>msg.senderId.toString() === loggedInUserId.toString() ? msg.receiverId.toString() : msg.senderId.toString()))];
        const chatPartners= await User.find({_id: {$in: chatPartnerIds}}).select('-password'); 
        res.status(200).json(chatPartners);
    } catch (error) {
        console.log("Error in getchatPartners: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};