import { ReactNode } from "react"

interface IContentBlock{
    children:ReactNode
}
export default function ContentBlock ({children}:IContentBlock){
    return (
        <section className="p-48 min-h-48 w-3/5 flex flex-row justify-center  ">
            {children}
        </section>
    )
}