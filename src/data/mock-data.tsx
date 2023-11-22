import {User,Message,Discussion} from '../Types';

export const usersData:User[] = [{name:"Joe Porcaro",avatarUrl:"https://gravatar.com/avatar/176e27f9bd3b68c235b24bd572286856?s=400&d=robohash&r=x",email:"joe@porcaro.com"}
,
{name:"Stuart Copeland",avatarUrl:"https://gravatar.com/avatar/99ffb243c5df5fcdc97b7d2dd02e4bb8?s=400&d=robohash&r=x",email:"stuart@copeland.com"}
,
{name:"Phil Collins",avatarUrl:"https://gravatar.com/avatar/6767d9badf28afc8d646049ee1112d3b?s=400&d=robohash&r=pg",email:"phil@collins.com"},
{name:"Quincy Jones",avatarUrl:"https://gravatar.com/avatar/69303b91aebcf0549fe830064e8e5356?s=400&d=robohash&r=pg",email:"quincy@jones.com"}
];

export const discussionsData:Discussion[]=[{
    id:1,
participants:[{name:"Joe Porcaro",avatarUrl:"https://gravatar.com/avatar/176e27f9bd3b68c235b24bd572286856?s=400&d=robohash&r=x",email:"joe@porcaro.com"}
,
{name:"Stuart Copeland",avatarUrl:"https://gravatar.com/avatar/99ffb243c5df5fcdc97b7d2dd02e4bb8?s=400&d=robohash&r=x",email:"stuart@copeland.com"}
,
{name:"Phil Collins",avatarUrl:"https://gravatar.com/avatar/6767d9badf28afc8d646049ee1112d3b?s=400&d=robohash&r=pg",email:"phil@collins.com"}
],
subject:"kick drum pedals",
messages:[{
    discussionId:1,
    sender: {name:"Joe Porcaro",avatarUrl:"https://gravatar.com/avatar/176e27f9bd3b68c235b24bd572286856?s=400&d=robohash&r=x",email:"joe@porcaro.com"}
    ,
    sent: new Date(2023,5,20,14,5,43),
    body: "Which kick drum pedal do you prefer?"
},{
    discussionId:1,
  sender: {name:"Stuart Copeland",avatarUrl:"https://gravatar.com/avatar/99ffb243c5df5fcdc97b7d2dd02e4bb8?s=400&d=robohash&r=x",email:"stuart@copeland.com"}
  ,
  sent: new Date(2023,5,20,16,21,54),
  body: "I like the Tama HP30 Stage Master Single Bass Drum Pedal, how about you Phil?"
},
{
        discussionId:1,
    sender: {name:"Phil Collins",avatarUrl:"https://gravatar.com/avatar/6767d9badf28afc8d646049ee1112d3b?s=400&d=robohash&r=pg",email:"phil@collins.com"}
    ,
    sent: new Date(2023,5,20,16,25,41),
    body: "I don't know, but you guys must try gated reverb on snares. It's the sound of the 80s, I'm telling you!"
  }

]
},

{
    id:2,
    participants:[{name:"Quincy Jones",avatarUrl:"https://gravatar.com/avatar/69303b91aebcf0549fe830064e8e5356?s=400&d=robohash&r=pg",email:"quincy@jones.com"}
    ,
    
    {name:"Phil Collins",avatarUrl:"https://gravatar.com/avatar/6767d9badf28afc8d646049ee1112d3b?s=400&d=robohash&r=pg",email:"phil@collins.com"}
    ],
    subject:"new record",
    messages:[{
        discussionId:2,
        sender: {name:"Quincy Jones",avatarUrl:"https://gravatar.com/avatar/69303b91aebcf0549fe830064e8e5356?s=400&d=robohash&r=pg",email:"quincy@jones.com"}
        ,
        sent: new Date(2023,5,20,14,5,43),
        body: "Hey Phil. Are you writing at the moment?"
    },{
        discussionId:2,
      sender: {name:"Phil Collins",avatarUrl:"https://gravatar.com/avatar/6767d9badf28afc8d646049ee1112d3b?s=400&d=robohash&r=pg",email:"phil@collins.com"}
      ,
      sent: new Date(2023,5,20,16,21,54),
      body: "Funny you should ask that. I wrote an amazing song last night. I am planning on using gated reverb too. Did I tell you about gated reverb?"
    }
    ]
    }

];

