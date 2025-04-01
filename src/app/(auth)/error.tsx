"use client";

import React from 'react'
import { startTransition } from 'react';
import { useRouter } from 'next/navigation';

const Error = ({ error, reset }: {
  error: Error,
  reset: () => void
}) => {


  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    })
  }

  return (
    <div>
      <h2>Error! {error.message}</h2>

      <button onClick={() => reload()}>
        Try Again!
      </button>
    </div>
  )
}

export default Error
