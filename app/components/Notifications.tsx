'use client'

import { Toaster } from 'react-hot-toast'

export default function Notifications() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: '#333',
          color: '#fff',
        },
      }}
    />
  )
}

