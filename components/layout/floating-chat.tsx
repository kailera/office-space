'use client'

import { useState } from "react";
import ContactAvatarList from "../ui/contact-avatar-list";
import FloatingChatLauncher from "../ui/floating-chat-laucher";
import FloatingPanel from "../ui/floating-pannel";
import MessageBox from "../ui/message-box";

const contacts = [
    {id:'1', name:"Mary", image:"/img/mary.jpg"},
    {id:'2', name:"Boss", image:"/img/boss.jpg"},
    {id:'3', name:"Jhon", image:"/img/jhon.jpg"},
    {id:'4', name:"Serena", image:"/img/serena.jpg"},
    {id:'5', name:"Will", image:"/img/will.jpg"}
]

export default function FloatingChat(){
    const [isOpen, setIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<null|typeof contacts[0]>(null)

    return (
        <FloatingPanel position="left">
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
                <MessageBox
                user={selectedUser}
                onClose={()=> setSelectedUser(null)}
            />
            )}
        </FloatingPanel>
    )
}