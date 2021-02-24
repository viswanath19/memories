import PostMessage from './models/postModel.js';

export const getPosts = async (req,res) => {
    try {
        const postMessages = await PostMessage.find();
        console.log("These were the posts",postMessages);
        res.status(200).json(postMessages);
    }
    catch (err) {
        res.status(400).json({message:err.message});
    }
}

export const createPost = async (req,res) => {

    const post = req.body;

    const newPost = new PostMessage(post);

    try{
        await newPost.save();
        res.status(200).json(post);
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
}