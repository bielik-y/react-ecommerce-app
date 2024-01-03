'use client'

import { SessionProvider as Provider } from 'next-auth/react'
import React from 'react'

function SessionProvider({ children }: { children: React.ReactNode }) {
  return <Provider>{children}</Provider>
}

export { SessionProvider }
