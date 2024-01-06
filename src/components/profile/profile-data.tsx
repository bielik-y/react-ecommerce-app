'use client'

import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'
import Image from 'next/image'

interface ProfileDataProps {
  session: Session | null
}

function ProfileData({session}: ProfileDataProps) {
  // const { data: session } = useSession()
  if (!session || !session.user) return null

  return (
    <div className="flex flex-col items-center sm:items-start">
      <div className="flex flex-col items-center gap-4 sm:flex-row ">
        <Image
          src={session.user.image as string}
          alt="User profile image"
          width={500}
          height={500}
          className="h-24 w-24 rounded-full object-cover"
        />
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="font-medium">{session.user.name}</h2>
          <h2>{session.user.email}</h2>
        </div>
      </div>
      <button
        onClick={() => signOut()}
        className="mt-10 rounded-md bg-neutral-900 px-8 py-3 font-semibold text-neutral-100 transition-colors hover:bg-primary"
      >
        Sign Out
      </button>
    </div>
  )
}

export { ProfileData }
