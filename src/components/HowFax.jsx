import React from 'react'

function howFax() {
  return (
    <div className='h-full w-full pt-6'>
      <div className='h-full w-full flex flex-col lg:flex-row items-center lg:justify-center gap-8'>
        <div className='lg:w-1/4 lg:mt-8'>
          <img src="/howFax/printer-img3.avif" height={150} width={300} alt="" />
        </div>
        <div className='lg:w-1/2 px-4 py-2'>
          <h1 className='text-2xl lg:text-3xl font-semibold text-[#080880]'>HP Printers - Sending and receiving fax</h1>
          <p className='text-base lg:text-lg font-light py-2'>You can learn how to fax from a fax-enabled HP printer by following the steps below.</p>
          <ol className='flex flex-col gap-1 text-sm lg:text-base font-light list-decimal list-inside'>
            <li>Ensure the printer is connected and set up properly.</li>
            <li>Load the sheets you are intending to fax into the input tray and adjust the width guides so that they rest against the edges of the paper. The printer should indicate whether the printed side of the page(s) should face up or down.</li>
            <li>For multifunction HP printers, there may be an option to select Fax. Complete this step before moving on.</li>
            <li>If needed, modify the fax settings. This step is optional.</li>
            <li>Dial the fax number you are wanting to send the fax to. Be sure to include any dial codes and extensions necessary to route the call correctly.</li>
            <li>Press Start, Send, Go, or a start fax-equivalent button.</li>
          </ol>
        </div>
      </div>

    </div>
  )
}

export default howFax
