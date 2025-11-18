'use strict'

import { useRouteError } from 'react-router'

export default function ErrorPage() {
  const error = useRouteError()

  let errorMessage = 'Unknown error'
  if (error instanceof Error) {
    errorMessage = error.message
  } else if (error && typeof error === 'object' && 'statusText' in error) {
    errorMessage = (error as { statusText: string }).statusText || 'Unknown error'
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  )
}
