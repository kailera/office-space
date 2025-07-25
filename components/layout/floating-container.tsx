'use client'

import { User } from "@/utils/types";
import { useState } from "react";
import ContactAvatarList from "../ui/contact-avatar-list";
import FloatingChatLauncher from "../ui/floating-chat-laucher";
import FloatingPanel from "../ui/floating-pannel";
import MessageBox from "../ui/message-box";

const contacts:User[] = [
    {id:'1', name:"Mary", image:"/img/mary.jpg"},
    {id:'2', name:"Boss", image:"/img/boss.jpg"},
    {id:'3', name:"Jhon", image:"/img/jhon.jpg"},
    {id:'4', name:"Serena", image:"/img/samanta.jpg"},
    {id:'5', name:"Will", image:"/img/will.jpg"}
]

export default function FloatingContainer(){
    const [isOpen, setIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<null|typeof contacts[0]>(null)

    return (
        <FloatingPanel position="left">
            
            <div className="relative mt-2 flex flex-col items-start space-y-2">

            
            <FloatingChatLauncher onClick={()=>{
                setIsOpen(!isOpen);
                if(selectedUser) setSelectedUser(null)
            }}/>
            
            {isOpen && (
                <ContactAvatarList
                contacts={contacts}
                onSelect={(user)=> setSelectedUser(user)}
            />
            )}

            {selectedUser && (
                <div className="absolute top-0 left-40 sm:left-16 sm:translate-x-0 translate-x-[-30%]">
                <MessageBox
                user={selectedUser}
                onClose={()=> setSelectedUser(null)}
            />
            </div>
            )}
        </div>
        </FloatingPanel>
    )
}