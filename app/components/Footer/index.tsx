import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='flex gap-8 md:gap-14 flex-wrap py-10 md:py-12 px-6 md:px-12'>
      <div className='flex flex-col gap-4'>
        <h4 className='font-semibold text-lg'>Customer Service</h4>

        <div className='footer-menu flex flex-col gap-3'>
          <Link href="/help">
            Help
          </Link>

          <Link href="/help">
            Payment Method
          </Link>

          <Link href="/help">
            Contact Us
          </Link>
        </div>

      </div>

      <div className='flex flex-col gap-4'>
        <h4 className='font-semibold text-lg'>Explore Cari Rumah</h4>

        <div className='footer-menu flex flex-col gap-3'>
          <Link href="/help">
            About Us
          </Link>

          <Link href="/help">
            Privacy Policy
          </Link>

          <Link href="/help">
            Media Contact
          </Link>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <h4 className='font-semibold text-lg'>Follow Us</h4>

        <div className='footer-menu flex flex-col gap-3'>
          <Link href="/help">
            Facebook
          </Link>

          <Link href="/help">
            Instagram
          </Link>

          <Link href="/help">
            Youtube
          </Link>
        </div>
      </div>
    </footer>
  )
}
