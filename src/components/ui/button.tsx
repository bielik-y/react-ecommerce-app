interface ButtonProps {
  text: string
  onClick?: () => void
}

function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="hover:bg-primary-dark rounded-md bg-primary px-4 py-2 font-medium text-white transition"
    >
      {text}
    </button>
  )
}

export { Button }
