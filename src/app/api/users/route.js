import connectDB from "@/lib/ConnectDB";
import { userModal } from "@/lib/models/UserModal";

export async function POST (req) {
    await connectDB()
    
    try {
        let obj = await req.json()
        let newUser = await userModal({...obj})
        newUser = await newUser.save()

        return Response.json({
            error: false ,
            message: "User Created successfully",
            user: newUser
        } , {status: 201} )

    }

    catch (err) {
        return Response.json({
            error: true , 
            message: "Something went wrong"
        })
    }
}

export async function GET (req) {
    await connectDB()
    
    try {

        
        let findUser = await userModal.find()
        
        return Response.json({
            error: false,
            message: "User fetched successfully",
            findUser
        })
    
    }

    catch (err) {
        return Response.json({
            error: true ,
            message: "Something went wrong"              
        })
    }
        
}