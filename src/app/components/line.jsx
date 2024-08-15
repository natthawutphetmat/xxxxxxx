import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function line() {
  return (
    <div>
        <Link href='https://lin.ee/YeuAkLL' target='_blank' className="bounce">
        <Image src="/img/line.png" alt="line" className='bounce' width={50} height={50} />
      </Link>
    </div>
  )
}
