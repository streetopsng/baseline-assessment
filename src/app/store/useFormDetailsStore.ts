
import { create } from "zustand";


type initialStateType = {
sectionOne:{
    section:string,
    fields:{
        fullName:string,
        phoneNumber:number,
        emailAddress:string,
        houseAddress:string,
        gender:string,
        stateOfOrigin:string,
        dateOfBirth:string
    }
},
}

type formDetailsStoreType = {
    formDetails:initialStateType,
    updateForm:(label:string,value:number | string,section:string)=> void
}
export const useFormDetailsStore = create<formDetailsStoreType>((set)=>({
    formDetails:{ 
        sectionOne:{
            section:"Section One",
            fields:{
                fullName:"",
        phoneNumber:0,
        emailAddress:"",
        houseAddress:"",
        gender:"",
        stateOfOrigin:"",
        dateOfBirth:""
            }
        }
        },
    updateForm:(label:string,value:number | string,section:string)=>{
//    console.log(label,value);
   
      if (section == "Section One") {
        set((state:formDetailsStoreType)=>({
            formDetails:{
                ...state.formDetails,
                sectionOne:{
                    section:"Section One",
                    fields:{
                        ...state.formDetails.sectionOne.fields,
                        [label]:value
                    }
                }
            }
            
                   }) )

                   return
      }
     
        
//        set((state:formDetailsStoreType)=>({
// formDetails:{
//     ...state.formDetails,
//     [label]:value 
// }

//        }) )
      
    }




}))