interface ErrorProps {
  text?: string
}

function Error({ text }: ErrorProps) {
  return (
    <p className="mx-auto my-2 max-w-screen-xl w-fill text-lg bg-white shadow-md p-4 text-neutral-800">
      {text ? text : 'Oops, something went wrong...'}
    </p>
  )
}

export { Error }
