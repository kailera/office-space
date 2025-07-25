export interface User{
    id:string
    name:string
    image:string
}

export interface Project{
    id:string,
    title:string,
    deadline:string,
    participants:User[]
}