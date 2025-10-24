import React from 'react'

function howScan() {
  return (
    <div className='h-full w-full'>
      <div className='h-full w-full flex justify-center gap-8 pt-10'>
        <div>
          <img src="/howScan/printerimg2.avif" height={150} width={300} alt="" />
        </div>
        <div className='px-4 py-2'>
          <h1 className='text-3xl font-semibold text-[#080880]'>How to Scan on a Windows Computer</h1>
          <p className='text-lg font-light py-2'>You can learn how to scan documents or photos from a USB or wirelessly-connected multifunction HP printer to a Windows computer by using the steps below.</p>
          <ol className='flex flex-col gap-1 text-base font-light list-decimal list-inside'>
            <li>Software is required to scan a document. Make sure the latest Full Feature Software and Drivers for the printer is downloaded and installed. Start by going to Customer Support Software and Driver Downloads</li>
            <li>Load the item on the scanner glass or in the automatic document feeder (ADF), depending on your printer type and features.</li>
            <li>
              Depending on the printer, open HP Scan (printers released 2011 and later) or HP Solution Center (printers released 2010 and earlier).
              <ul className='list-disc list-inside ml-6'>
                <li>Open HP Solution Center software and follow the on-screen prompts to scan.</li>
              </ul>
            </li>
            <li>Scan the file and save to the desired destination on the computer.</li>
              <ul className='list-disc list-inside ml-6'>
                <li>In HP Scan you can change the scan destination folder by clicking on Advanced Settings or More.</li>
                <li>In HP Solution Center you can change the scan destination folder by clicking on Save to File Save Options.</li>
              </ul>
          </ol>
        </div>
      </div>

    </div>
  )
}

export default howScan
