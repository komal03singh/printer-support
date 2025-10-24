import React from 'react'

function howFax() {
  return (
    <div className='h-full w-full'>
      <div className='h-full w-full flex justify-center gap-8 pt-10'>
        <div>
          <img src="/howFax/printer-img3.avif" height={150} width={300} alt="" />
        </div>
        <div className='px-4 py-2'>
          <h1 className='text-3xl font-semibold text-[#080880]'>How to Print</h1>
          <p className='text-lg font-light py-2'>You can learn how to print from a USB or wirelessly-connected HP printer by following the steps below.</p>
          <ol className='flex flex-col gap-1 text-base font-light list-decimal list-inside'>
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

export default howFax
