export interface User {
    name: string,
    avatarUrl: string,
    email: string
}

export interface Message {
    sender:User,
    body:string,
    sent:Date
}

export interface Discussion {
    subject:string,
    members: User[]
    messages: Message[]
}

