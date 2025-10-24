import React from 'react'
import HowScan from '@/components/HowScan.jsx'
import HowPrint from '@/components/HowPrint.jsx'
import HowFax from '@/components/HowFax.jsx'

function content({activeTab}) {
  return (
     <div className='h-3/5 w-full '>
      <div
      className='h-full w-full mx-6'>
        {activeTab ==='howPrint' && 
        <div className='h-full w-full'>
          <HowPrint/>
        </div>
        }

        {activeTab ==='howScan' && 
        <div className='h-full w-full'>
          <HowScan/>
        </div>
        
        }

        {activeTab ==='howFax' && 
        <div className='h-full w-full'>
          <HowFax/>
        </div>
        
        }

      </div>
    </div>
  )
}

export default content
