'use client'

import { useEffect, useState } from 'react'

export interface UseMediaQueryOptions {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === 'undefined'

// https://www.shadcn.io/hooks/use-media-query
export function useMediaQuery(
  query: string,
  { defaultValue = false, initializeWithValue = true }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (mediaQuery: string): boolean => {
    // Prevent SSR issues
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(mediaQuery).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)

    // Update state to the current value
    setMatches(mediaQueryList.matches)

    // Define the event handler
    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Modern browsers use addEventListener
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', handleChange)
    } else {
      // Safari < 14 fallback (deprecated but needed for older versions)
      mediaQueryList.addListener(handleChange)
    }

    // Cleanup function
    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', handleChange)
      } else {
        // Safari < 14 fallback
        mediaQueryList.removeListener(handleChange)
      }
    }
  }, [query])

  return matches
}
