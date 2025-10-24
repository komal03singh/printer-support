"use client"
import React from 'react'
import { useState } from 'react'
import TroubleshootNav from '@/components/TroubleshootNav.jsx'
import Content from '@/components/Content.jsx'


function Troubleshoot() {

    const [activeTab, setActiveTab] = useState("howPrint")
  return (
    <div className="h-auto w-full">
      <TroubleshootNav activeTab={activeTab} setActiveTab={setActiveTab}/>
      <Content activeTab={activeTab}/>
      <div className="flex gap-8 bg-[#F7F7F7] mt-16 py-8 justify-center">
        <div>
          <img src="/troubleshoot.avif" height={150} width={300} alt="" />
        </div>
        <div>
          <h1 className='text-3xl font-semibold'>Facing problem with your printer?</h1>
          <h3 className='text-xl font-semi-bold py-2'>HP Virtual Agent</h3>
          <p className='text-lg font-light'>Use our HP&apos;s automated Virtual Agent to try and find a resolution for your issue.</p>
          <button className='mt-6 flex items-center gap-2 text-base font-light bg-black/80 text-white px-6 py-2 rounded-full hover:cursor-pointer hover:bg-[#080880] hover:text-white lg:mt-6'>Chat with Us</button>

        </div>

      </div>
    </div>
    
  )
}

export default Troubleshoot
