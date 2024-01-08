import { Container } from '@/components/layout/container'
import { Title } from '@/components/ui/title'
import { WishlistContent } from '@/components/wishlist/wishlist-content'

export default function Wishlist() {
  return (
    <Container>
      <Title title="Your Wishlist" />
      <WishlistContent />
    </Container>
  )
}
