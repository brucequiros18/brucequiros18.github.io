import { useEffect } from 'react'
import { PROFILE } from '../data/site.js'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${PROFILE.name}` : PROFILE.meta.title
  }, [title])
}
