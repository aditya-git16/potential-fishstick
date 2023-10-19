import Image from 'next/image'
import React from 'react'
import Link from 'next/link';


export default function Home() {
  const styles: React.CSSProperties = {
    WebkitTextSizeAdjust: '100%',
    fontSynthesis: 'none',
    fontKerning: 'none',
    fontVariantLigatures: 'none',
    fontFeatureSettings: '"kern" 0, "calt" 0, "liga" 0, "clig" 0, "dlig" 0, "hlig" 0',
    WebkitFontSmoothing: 'subpixel-antialiased',
    whiteSpace: 'normal',
    color: '#ffffff',
    fontFamily: 'YAFcft0AnUg-0',
    textTransform: 'uppercase',
    filter: 'drop-shadow(0em 0em 0.01257511em rgba(255, 242, 242, 0.950000)) drop-shadow(0em 0em 0.06287556em rgba(255, 255, 255, 0.750000)) drop-shadow(0em 0em 0.18862669em rgba(255, 255, 255, 0.440000))',
  };
  return (
    <>
      <section className="flex flex-col min-h-screen p-1">
        <div className="text-white p-2">
          <img src="next.svg" alt="Next.js Logo" className="h-8" />
          <h1 className="text-6xl font-bold">
            Welcome to{' '}
            <a className="text-blue-600" href="https://nextjs.org">
              Next.js!
            </a>
          </h1>
        </div>
        <div className="flex flex-row felx-sm-col items-center justify-between flex-1 px-20 text-left">
          <div>
            <p style={styles} className='text-9xl'>Here To Connect</p>
            <p className="text-3xl font-bold text-pink-400 mb-5">UNTANGLE THE WEB WITH US</p>
            <Link 
              className="bg-pink-700 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded mt-5"
              href="/kyc">
              Connect Here
            </Link>
          </div>
          <div className='flex flex-wrap items-center justify-center'>
            <Image src="/img1.png" alt="Next.js Logo" width={230} height={230} className='m-2'/>
            <Image src="/img2.png" alt="Next.js Logo" width={230} height={230} className='m-2'/>
            <Image src="/img4.png" alt="Next.js Logo" width={230} height={230} className='m-2'/>
            <Image src="/img3.png" alt="Next.js Logo" width={230} height={230} className='m-2'/>
          </div>
        </div>
      </section>
    </>
  )

}


