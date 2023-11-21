import {User,Message,Discussion} from './Types';

const user1:User = {name:"Joe Porcaro",avatarUrl:"https://gravatar.com/avatar/176e27f9bd3b68c235b24bd572286856?s=400&d=robohash&r=x",email:"joe@porcaro.com"}

const user2:User = {name:"Stuart Copeland",avatarUrl:"https://gravatar.com/avatar/99ffb243c5df5fcdc97b7d2dd02e4bb8?s=400&d=robohash&r=x",email:"stuart@copeland.com"}

const user3:User = {name:"Phil Collins",avatarUrl:"https://gravatar.com/avatar/6767d9badf28afc8d646049ee1112d3b?s=400&d=robohash&r=pg",email:"phil@collins.com"}


const message1:Message = {
    sender: user1,
    sent: new Date(2023,5,20,14,5,43),
    body: "What type of strings would you use on a 1981 Ovation Viper?"
}

const message2:Message = {
  sender: user2,
  sent: new Date(2023,5,20,16,21,54),
  body: "Aren't you supposed to play the drums, like me?"
}

const discussion1:Discussion = {
  members:[user1,user2,user3],
  subject:"guitar strings",
  messages:[message1,message2]
}

export const me:User = user3;
export const users:User[] = [user1,user2];



export const discussions:Discussion[] = [discussion1];
