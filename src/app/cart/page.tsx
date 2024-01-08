import { CartContent } from '@/components/cart/cart-content'
import { Container } from '@/components/layout/container'
import { Title } from '@/components/ui/title'

export default function Cart() {
  return (
    <Container>
      <Title title="Your Cart" />
      <CartContent />
    </Container>
  )
}
