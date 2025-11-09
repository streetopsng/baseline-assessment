
import { connectDatabase } from "@/db/connectDb";
import { User } from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";


export const POST = async(req:NextRequest)=>{

    const formDetails = await req.json()
    // console.log(formDetails);
    
    
    const dbCheck = await connectDatabase()
if (!dbCheck.success) {
    
    console.log("cant connect to db");
    // throw new Error("Something went wrong") 
    return NextResponse.json({success:false,message:"something went wrong"})
}
try {
    const checkUser = await User.findOne({carName:formDetails.carName})
    // console.log(checkUser);
    
    if (!checkUser) {
        console.log("Invalid car name");
        return NextResponse.json({success:false,message:"invalid car name"})
    }
    return NextResponse.json({success:true,data:checkUser})
} catch (error) {
    console.log("something went wrong");
    
    return NextResponse.json({success:false,message:"an error occured"})
}



    // return NextResponse.json({...formDetails})
    


}