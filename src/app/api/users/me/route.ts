import { getDataFromToken } from "@/helpers/getDataFromTken";

import { NextRequest,NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect()


export async function GET(request:NextRequest){
    try {
     const userID=await   getDataFromToken(request)
    //console.log(userID)
    const user= await User.findOne({_id:userID}).select("-password")
console.log(user)
    
    return NextResponse.json({
        message:"User found",
        data:user
    })
    } catch (error:any) {
        return NextResponse.json(error.message)
    }
}