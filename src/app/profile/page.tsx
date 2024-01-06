import { Container } from '@/components/layout/container'
import { ProfileData } from '@/components/profile/profile-data'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Profile() {
  const session = await getServerSession()
  if (!session || !session.user) redirect('/')
  return (
    <Container>
      <p className="pb-10 text-xl font-semibold underline decoration-[1px] underline-offset-4">
        Your Profile
      </p>
      <ProfileData session={session} />
    </Container>
  )
}
