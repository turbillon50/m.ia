export const dynamic = 'force-dynamic'

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

export default function CuentaPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background text-foreground">
      <h1 className="text-2xl font-semibold">Tu cuenta M.IA</h1>
      <SignedIn>
        <p>Sesión iniciada. Este navegador ya puede vincularse a tu M.IA.</p>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground">
            Entrar / Crear cuenta
          </button>
        </SignInButton>
      </SignedOut>
    </div>
  )
}
