"use client"
import LabelAndInput from '@/components/label-and-input'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { formFields } from '@/lib/biodata-form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import React, { useEffect } from 'react'
import { useFormDetailsStore } from '../store/useFormDetailsStore'



const Page = () => {

    const  {updateForm,formDetails} = useFormDetailsStore()

   useEffect(()=>{
    console.log(formDetails);
   },[formDetails])
    
  return (
    <div className=''>

        <section className='w-[70%] mx-auto'>

{formFields.sectionOne.map((item,index)=>{
      const removeSpace = item.formLabel.replaceAll(" ","")
      const makeCamelCase =removeSpace.slice(0,1).toLocaleLowerCase() + removeSpace.slice(1,removeSpace.length)


    //   console.log(makeCamelCase);
      

      if (item.type == "select") {
        

        return <Select key={index + 1} onValueChange={(value)=>{

            updateForm(makeCamelCase,value,formDetails.sectionOne.section)
            
        }} >
            <FieldLabel>{item.formLabel}</FieldLabel>
        <SelectTrigger  className="w-full my-2">
          <SelectValue placeholder={item.formLabel} />
        </SelectTrigger>
        <SelectContent>
         {item.options?.map((option,i)=>{

            return  <SelectItem key={i + 1} value={option.toLocaleLowerCase()}>{option}</SelectItem>
         
         })}
        </SelectContent>
      </Select>
      }
    
return   <Field key={index + 1} className='my-4'>
<FieldLabel htmlFor={item.type}>{item.formLabel}</FieldLabel>
<Input
  id={item.type}
  type={item.type}
//   value={formDetails[makeCamelCase as keyof typeof formDetails]}
  onChange={(e)=> updateForm(makeCamelCase,e.target.value,formDetails.sectionOne.section)}
  
/>
</Field>
})}

</section>


    </div>
  )
}

export default Page