import React, {createContext,useState,useEffect} from 'react';
import {User,Discussion} from './Types';
import {usersData,discussionsData} from './data';

interface IDataContext {
    users: User[] | null,
    discussions: Discussion[] | null,
    me:User | null,
    activeDiscussion:Discussion | null
}

export const DataContext = createContext<IDataContext>({users:null,discussions:null,me:null,activeDiscussion:null});

export const DataProvider = ( {children}:{children:any}) => {


    const [users,setUsers] = useState<User[] | null>(null);
    const [discussions,setDiscussions] = useState<Discussion[] | null>(null);
    const [me,setMe] = useState<User|null>(null);
    const [activeDiscussion,setActiveDiscussion] = useState<Discussion | null>(null);

    useEffect(()=>{
      setInterval(() => setMe(usersData[2]),1000);
      setInterval(()=> setUsers(usersData), 2000);
      setInterval(()=> setDiscussions(discussionsData),3000);
      setInterval(()=> setActiveDiscussion(discussionsData[1]),3000);
    },[])


    return (
        <DataContext.Provider value={{users,discussions,activeDiscussion,me}}>
          {children}
        </DataContext.Provider>
      );
    }