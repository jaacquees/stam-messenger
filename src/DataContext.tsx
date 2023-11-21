import React, {createContext,useState,useEffect} from 'react';
import {User,Discussion} from './Types';
import {usersData,discussionsData} from './data';

export interface IDataContext {
    users: User[] | null,
    discussions: Discussion[] | null,
    me:User | null,
    activeDiscussion:Discussion | null,
    setActiveDiscussion: ((discussion:Discussion) => void)
}

export const DataContext = createContext<IDataContext | null>(null);

export const DataProvider = ( {children}:{children:any}) => {


    const [users,setUsers] = useState<User[]| null>(null);
    const [discussions,setDiscussions] = useState<Discussion[]|null>(null);
    const [me,setMe] = useState<User|null>(null);
    const [activeDiscussion,setActiveDiscussion] = useState<Discussion|null>(null);

    useEffect(()=>{
      
        setTimeout(() => setMe(usersData[2]),1000);
      
        setTimeout(()=> setUsers(usersData), 2000);
      
        setTimeout(()=> setDiscussions(discussionsData),3000);
      
    },[])


    return (
        <DataContext.Provider value={{users,discussions,activeDiscussion,me,setActiveDiscussion}}>
          {children}
        </DataContext.Provider>
      );
    }