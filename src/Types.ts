export interface User {
    name: string,
    avatarUrl: string,
    email: string
}

export interface Message {
    discussionId:number,
    sender:User,
    body:string,
    sent:Date
}

export interface Discussion {
    subject:string,
    id:number,
    participants: User[],
    messages: Message[]
}

