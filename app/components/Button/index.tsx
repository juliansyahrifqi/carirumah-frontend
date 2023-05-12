import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  title: string;
  url?: string;
}

export default function Button(props: ButtonProps) {
  const { url, title } = props;

  if(url) {
    return (
      <Link href={url}>
        <button className='rounded-full bg-primary px-8 py-2 text-white'>
          {title}
        </button>
      </Link>
    )
  }

  return (
    <button className='rounded-full bg-primary px-8 py-2 text-white'>
      {title}
    </button>
  )
}
