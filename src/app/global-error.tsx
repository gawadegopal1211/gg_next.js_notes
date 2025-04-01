'use client';

import React from 'react'

export default function GlobalError() {
  return (
    <html>
      <body>
        <div>
          <button onClick={() => window.location.reload()}>
            Refresh
          </button>
        </div>
      </body>
    </html>
  )
}
