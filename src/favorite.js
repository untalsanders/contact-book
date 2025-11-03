'use strict'

import { useFetcher } from 'react-router-dom'

export default function Favorite({ contact }) {
  const fetcher = useFetcher()

  let { favorite } = contact
  if (fetcher.formData) {
    favorite = fetcher.formData.get('favorite') === 'true'
  }

  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        className="shadow-none text-3xl font-normal p-0 border-none bg-transparent leading-relaxed">
        {favorite ? '★' : '☆'}
      </button>
    </fetcher.Form>
  )
}
