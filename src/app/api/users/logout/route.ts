import { NextResponse } from "next/server";

export async function GET() {
    try{
const res=NextResponse.json({
    message:"Logour successfull",
    success:true
})
res.cookies.set("token","",{
    httpOnly:true,expires:new Date(0)
})
return res
    }
    catch(error:any){
        return NextResponse.json({error:error.messgae},{status:500})
    }
}