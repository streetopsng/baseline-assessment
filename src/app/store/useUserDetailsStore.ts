import { create } from "zustand";
import { persist } from "zustand/middleware";

export type userObjType = {
    _id: string;    
    carName: string;
    firstName: string;
    __v: number;
  };
  

type userDetailsStoreType = {
    userState:userObjType | null ,
    updateUser:(userObj:userObjType)=> void
}



export const useUserDetailsStore = create(
  persist<userDetailsStoreType>(
    (set) => ({
      userState: null,
      updateUser: (userObj: userObjType) =>
        set(() => ({
          userState: userObj,
        })),
    }),
    {
      name: "user-details", 
    }
  )
);




// export const useUserDetailsStore = create<userDetailsStoreType>((set)=> (
// {
//     userState:null,
//     updateUser:(userObj:userObjType)=> {
//         set(()=>(
//             {
//                 userState:userObj
//             }
//         ))
//     }

// }
// ))