import React from 'react'

function TroubleshootNav({activeTab,setActiveTab}) {
  return (
    <div className='h-20 w-full'>
      <ul className='text-lg flex items-center h-full mx-6 gap-6'>
        <button className='hover:cursor-pointer'>
            <li onClick={() => setActiveTab("howPrint")}
              className={`${activeTab ==='howPrint'? 'bg-gradient-to-r from-blue-500 to-blue-300 dark:from-blue-700 dark:to-blue-400 bg-clip-text text-transparent' : ''}`}
              >How to Print</li>
        </button>
        <button className='hover:cursor-pointer'>
            <li onClick={() => setActiveTab("howScan")}
              className={`${activeTab ==='howScan'? 'bg-gradient-to-r from-blue-500 to-blue-300 dark:from-blue-700 dark:to-blue-400 bg-clip-text text-transparent' : ''}`}
              >How to Scan</li>
        </button>
        <button className='hover:cursor-pointer'>
          
          <li onClick={()=> setActiveTab("howFax")}
            className={`${activeTab ==='howFax'? 'bg-gradient-to-r from-blue-500 to-blue-300 dark:from-blue-700 dark:to-blue-400 bg-clip-text text-transparent' : ''}`}
            >How to Fax</li>
        </button>
      </ul>
    </div>
  )
}

export default TroubleshootNav
