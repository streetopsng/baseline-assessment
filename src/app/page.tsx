"use client"

import { useEffect, useState } from "react"
import Header from "@/components/LandingComponents/landing-header"
import { useMutation } from "@tanstack/react-query"
import { useUserDetailsStore } from "./store/useUserDetailsStore"
import { useRouter } from "next/navigation"
import Image from "next/image"

const carImages = [
  {
    id:1,
    image:"/car-one.jpg"
  },
  {
    id:2,
    image:"/car-two.jpg"
  },
  {
    id:3,
    image:"/car-three.jpg"
  },
  {
    id:4,
    image:"/car-four.jpg"
  },
  {
    id:5,
    image:"/car-five.jpg"
  },
  {
    id:6,
    image:"/car-six.jpg"
  },
]


const postData = async(formData:any)=>{
  const res = await fetch("/api/sign-in",{
      method:'POST',
      body:JSON.stringify(formData)
  })

  if (!res.ok) {
      console.log("something went wrong");
      alert("can't post blog at the moment, please try again later")
      return
      
  }
  const response = await res.json()
  return response
  
}

export default function Home() {
  const [selectedRole, setSelectedRole] = useState<"facilitator" | "trainee" | null>(null)
  const [formDetails,setFormDetails] = useState<{carName:string}>({
    carName:""
  })
  const [completed,setCompleted] = useState(true)
const {updateUser} = useUserDetailsStore()

const [curr,setCurr] = useState(0)
const router = useRouter()
  const mutation = useMutation({
    mutationFn:postData,
    onSuccess:(data)=>{
       
        if (data.success) {
            // alert("posted  successfully")
            console.log(data);
            updateUser(data.data)
            router.push("/dashboard")
            
            // window.location.reload()
          }
          else{
            alert(data.message)
            console.log(data);
        }
       
        
    },
    onError:(error)=>{

alert("an error occured")


    }
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
  
        if (curr == carImages.length - 1) {
          setCompleted(true)
            setCurr(prev => prev - 1)
            return
  
        }
        if (completed) {
          if (curr == 0) {
            setCompleted(false)
            setCurr(prev => prev + 1)
            return
          }
          setCurr(prev => prev - 1)
          return
          
  
        }
        setCurr(prev => prev + 1)
    }, 5000)
  
    return () => clearInterval(intervalId)
  
  }, [curr])


  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{

e.preventDefault()
if (!formDetails.carName) {
  alert("empty field")
  
}
    mutation.mutate(formDetails)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"

        // style={{
        //   backgroundImage:`url(/car-one.jpg)`,
        //   // backgroundSize:"cover",
        //   backgroundRepeat:"no-repeat",
        //   backgroundPosition:"center",
        //   backgroundPositionY:"40%"
          
        // }}

        // style={{
        //   backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=workspace desk office)",
        // }}

      />

 
      {/* <div className="absolute min-w-screen min-h-screen  flex"
      
      // style={{
      //   transform:`translateX(${200}%)`
      // }}
      >

     
      {carImages.map((item,index)=>{

return       <div className="h-screen w-full " 


>
<Image
fill
alt="image"
className="w-full h-full object-cover"
src={item.image} />
</div>
      })}
    

      </div> */}

<div className="absolute w-full h-full flex transition-all ease-in-out duration-300 "
   style={{
    transform:`translateX(-${curr * 100}%)`
   }}
   >


{carImages.map((item,index)=>{

  return <aside key={index + 1} className="min-w-full min-h-full  relative z-0"
  >
    <div 
    className={`lg:bg-left-top w-full h-screen  md:px-4 px-2 flex flex-col justify-center md:bg-[length:100%] bg-cover 
`}
      style={{
        backgroundImage:`url(${item.image})`,
        // backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        
        backgroundPosition:"center",
        backgroundPositionY:"40%"
        
      }}
    >

{/* <div className="w-full min-h-screen">
  <Image
  src={item.image}
  alt={item.title}
  className="absolute w-full object-cover"
  fill
  />
</div> */}
 
{/* 
 <div className="absolute left-0 w-full h-full bg-black opacity-70">

</div> */}

  

</div>
  </aside>
})}
   </div>






      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 flex items-center justify-center md:mt-[-150px] px-4 py-12">
          <div className="text-center ">
            {/* Main heading */}
            <h1 className="md:text-5xl  mb-6 text-white ">
              Empowering you to Learn, Build, and Excel.
            </h1>

            {/* Subheading */}
            <p className=" text-gray-300 mb-12 text-balance">
              Stay on track with weekly lessons, resources, and schedules designed to <br /> help you reach your goals faster.
            </p>

        
              <form action="" onSubmit={handleSubmit}>

<div >
<label htmlFor="">Car Name</label>
<br />
<input type="text"
onChange={(e)=> setFormDetails({carName:e.target.value.toLocaleLowerCase()})}
className=" rounded-sm px-2 ring-2 lg:w-[50%]" />
</div>
{/* <div>
<label htmlFor="">Password</label>
<br />
<input type="password" className="rounded-lg px-2 ring-2" />
</div> */}

<br />
<button className="bg-[#FB030C] p-2 rounded-lg">
             {mutation.isPending ? "Loading" : "Sign In"}
            </button>  
              {/* <button className="bg-[#FB030C] p-2">
              Start here
            </button> */}
              </form>

            {/* Role Selection Modal */}
            {/* <RoleSelectionModal selectedRole={selectedRole} setSelectedRole={setSelectedRole} /> */}
          </div>
        </main>
      </div>
    </div>
  )
}
