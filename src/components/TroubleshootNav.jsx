import React from 'react'

function TroubleshootNav({activeTab,setActiveTab}) {
  return (
    <div className='mt-2 h-20 w-full'>
      <ul className='text-sm lg:text-lg flex items-center h-full mx-10 gap-6'>
        <button className='hover:cursor-pointer'>
            <li onClick={() => setActiveTab("howPrint")}
              className={`${activeTab ==='howPrint'? 'bg-gradient-to-r from-[#080880] to-blue-500 bg-clip-text text-transparent border-1 border-b-[#080880]' : ''}`}
              >How to Print</li>
        </button>
        <button className='hover:cursor-pointer'>
            <li onClick={() => setActiveTab("howScan")}
              className={`${activeTab ==='howScan'? 'bg-gradient-to-r from-[#080880] to-blue-500 bg-clip-text text-transparent border-1 border-b-[#080880]' : ''}`}
              >How to Scan</li>
        </button>
        <button className='hover:cursor-pointer'>
          
          <li onClick={()=> setActiveTab("howFax")}
            className={`${activeTab ==='howFax'? 'bg-gradient-to-r from-[#080880] to-blue-500 bg-clip-text text-transparent border-1 border-b-[#080880]' : ''}`}
            >How to Fax</li>
        </button>
      </ul>
    </div>
  )
}

export default TroubleshootNav
