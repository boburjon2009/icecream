import { ArrowRight, Star,MapPin, Heart,MailOpen, ShoppingCart,PhoneCall, Locate, Facebook, Instagram } from "lucide-react";
export default function Footer(){
    return(
        <div className="bg-[#683292]  p-9">

      <div className="w-[100%]  flex justify-center ">
        <div className="w-[70%]  flex justify-between items-center py-9">
        <div>
            <img src="src/imgs/Group 1 (1).png" alt="" />
        </div>
          <div className="flex">
        <div>
<h1 className="text-2xl  text-[#CFB6E2] mb-4">Navigation</h1>
           <div className="flex gap-15 text-[#CFB6E2]">
            <div>
             <p>Home</p>
            <p>Home</p>
            <p>Home</p>
           </div>
            <div>
              <p>Home</p>
            <p>Home</p>
            <p>Home</p>
            </div>
           </div>
        </div>
          </div>
          <div className="flex flex-col gap-5" >
            <div className="flex items-center  text-[#CFB6E2]">
          <MapPin />
         <div>
           <h3>address</h3>
          <p>121 King Street Melbourne, 3000,
Australia</p>
         </div>
        
            </div >
             <div className="flex items-center  text-[#CFB6E2]">
              <MailOpen />
          <div><h3>address</h3>
          <p>121 King Street Melbourne, 3000,
Australia</p></div>
          
            </div>
        

          </div>
            <div  className="flex flex-col gap-5 text-[#CFB6E2]" >
              <div className="flex items-center "> 
                <PhoneCall />
                <div>
                  <h3>+123456780123</h3>
                <p>Got Questions? Call us 24/7</p>
                </div>
                </div>
                <div className="flex">
                  <Instagram className=" mx-2 flex items-center"/>
                  <div className="w-[30px] h-[30px] bg-[#FFFFFF1A] rounded-full mx-2 flex items-center"></div>
                  <Facebook/>
                </div>
            </div>
        </div>
     <img src="src/imgs/977b0075aff18e92a704e7c5b3f4e5bb61216844.png" className="absolute left-0 w-50 " alt="" />
      </div>
        <div className="w-[70%] h-[2px] bg-[#74737326] m-auto"></div>
      <div>
        <p className="flex justify-center text-[70%]">Copyright © 2024 BlackRise Themes Inc All rights reserved.</p>
     
      </div>
</div>
    )
}