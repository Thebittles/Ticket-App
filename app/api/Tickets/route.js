import Ticket from "@/app/(models)/ticket";
import { NextResponse } from "next/server";



// POST - Create Ticket
export async function POST(req){
    console.log("POST RAN", req)
    try {
       const body = await req.json();
       const ticketData = body.formData;
       await Ticket.create(ticketData);
       return NextResponse.json({ message: "Ticket Create"}, { status: 201});

    } catch (error) {
        return NextResponse.json({ message: "Error", error}, { status: 500});
    }
}

// Get - Read Tickets
export async function GET(){
    try {
        const tickets = await Ticket.find();
        return NextResponse.json({tickets}, { status: 200});
 
     } catch (error) {
         return NextResponse.json({ message: "Error", error}, { status: 500});
     }

}