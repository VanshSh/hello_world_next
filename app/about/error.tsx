'use client'

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) => {
  return (
    <div>
      <p>⚠️Error {error.message}⚠️</p>
      <button
        className='bg-gray-500 text-yellow-50 rounded p-1 m-2'
        onClick={reset}
      >
        Try again ♻️
      </button>
    </div>
  )
}

export default ErrorBoundary
