import { QuickApp } from "@/utils/types";
import { useState } from "react";

interface IFloatingQuickAccessPanel{
    apps:QuickApp
}

export default function FloatingQuickAccessPanel({apps}:IFloatingQuickAccessPanel){
    const [isOpen, setIsOpen] = useState(false)
    
}