'use client'

import { ClerkProvider } from '@clerk/nextjs'

// Gate seguro: sin NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY la app funciona exactamente igual que antes.
export default function ClerkGate({ children }: { children: React.ReactNode }) {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return <>{children}</>
  }
  return <ClerkProvider>{children}</ClerkProvider>
}
