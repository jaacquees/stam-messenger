import React, {createContext,useState,useEffect,useCallback} from 'react';
import {User,Discussion,Message} from './Types';
import {usersData,discussionsData} from './data';
import {cloneDeep} from 'lodash';

export interface IDataContext {
    users: User[] | null,
    discussions: Discussion[] | null,
    me:User | null,
    activeDiscussion:Discussion | null,
    setActiveDiscussion: ((discussion:Discussion) => void),
    postMessage: (sender:User,discussionId:number,sent:Date,body:string) => Promise<void>,
    postDiscussion: (participants:User[],subject:string,body:string) => Promise<void>

}

export const DataContext = createContext<IDataContext | null>(null);

export const DataProvider = ( {children}:{children:any}) => {


    const [users,setUsers] = useState<User[]| null>(null);
    const [discussions,setDiscussions] = useState<Discussion[]|null>(null);
    const [me,setMe] = useState<User|null>(null);
    const [activeDiscussion,setActiveDiscussion] = useState<Discussion|null>(null);

    //here postMessage changes the state of the "discussions" data object
    //it is a bit convoluted as it is deep cloning the object, mutating it
    //and setting the state to the new mutated data object
    //in a full app, the post message will simply post a message to a web service,
    //it will trigger a kind of websocket which will tell the app the data has changed
    //and the app will update its local data object accordingly

    const postMessage = useCallback((sender:User,discussionId:number,sent:Date,body:string) =>
    {
      return new Promise<void>((resolve,reject) =>{
      if(discussions){
        const data = cloneDeep(discussions) as Discussion[];
      const i = data.findIndex(d => d.id===discussionId);
      const newMessage:Message = {
        sent,
        sender,
        body,
        discussionId
      };
      data[i].messages.push(newMessage);
      //now before updating states and resolving the promise
      //we introduce an artificial waiting time
      setTimeout(() => {
                        setDiscussions(data);
                        setActiveDiscussion(data[i]);
                        resolve();}
      ,500);
    }else{
      reject();
    }
    });
  },[discussions]);
  
  const postDiscussion = useCallback((participants:User[],subject:string,body:string) =>
    {
      console.log('participants',participants);
      console.log('subject',subject);
      console.log('body',body);
      console.log('discussions',discussions);
      return new Promise<void>((resolve,reject) =>{
      
        if(discussions){
        const data = cloneDeep(discussions) as Discussion[];
      const id = data.length + 1 ; //this is the length of the array, so the new index of the next conversation
      const newDiscussion:Discussion = {
        id,
        participants,
        subject,
        messages:[
          {sent:new Date(),
          sender:me as User,
          discussionId: id,
          body}
        ]
      };
      data.push(newDiscussion);
      //now before updating states and resolving the promise
      //we introduce an artificial waiting time
      setTimeout(() => {
                        setDiscussions(data);
                        setActiveDiscussion(data[id-1]);
                        resolve();}
      ,500);
    }else{
      reject();
    }
    });
  },[discussions,users,me]);

  //useEffect which simulates a waiting time to get the initial data

  useEffect(()=>{
      
        setTimeout(() => setMe(usersData[2]),1000);
      
        setTimeout(()=> setUsers(usersData), 2000);
      
        setTimeout(()=> setDiscussions(discussionsData),3000);
      
    },[])


    return (
        <DataContext.Provider
          value={{
              users,
              discussions,
              activeDiscussion,
              me,
              setActiveDiscussion,
              postMessage,
              postDiscussion}}>
          {children}
        </DataContext.Provider>
      );
    }