import React from 'react'

function howPrint() {
  return (
    <div className='h-full w-full'>
      <div className='h-full w-full flex flex-col lg:flex-row items-center lg:justify-center gap-8 pt-6'>
        <div className='lg:w-1/4 lg:mt-8'>
          <img src="/howPrint/printer-img1.avif" height={150} width={300} alt="" />
        </div>
        <div className='lg:w-1/2 px-4 lg:py-2'>
          <h1 className='text-2xl lg:text-3xl font-semibold text-[#080880]'>How to Print</h1>
          <p className='text-base lg:text-lg font-light py-2'>You can learn how to print from a USB or wirelessly-connected HP printer by following the steps below.</p>
          <ol className='text-sm flex flex-col gap-1 lg:text-base font-light list-decimal list-inside'>
            <li>Select the file you want to print and open the file so it appears on your computer screen.</li>
            <li>Press the Ctrl and P buttons on your keyboard at the same time.</li>
            <li>
              Once the printing pop-up menu appears on your computer screen, select the printer you intend to send the job to.
              <ul className='list-disc list-inside ml-6'>
                <li>If the printer is not connected, get help setting it up through the Technical Assitance.</li>
                <li>For wireless printer setup and connection, get help Technical Support.</li>
              </ul>
            </li>
            <li>If needed, modify your print settings. This step is optional.</li>
            <li>Click the Print button on screen to send the job into the printer print queue and wait for the job to complete.</li>
          </ol>
        </div>
      </div>

    </div>
  )
}

export default howPrint
