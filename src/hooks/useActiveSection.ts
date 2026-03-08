import { useEffect } from 'react'

export function useActiveSection(sectionIds: string[]) {
  useEffect(() => {
    // 초기 해시로 스크롤
    const initialHash = window.location.hash.slice(1)
    if (initialHash && sectionIds.includes(initialHash)) {
      const el = document.getElementById(initialHash)
      el?.scrollIntoView({ behavior: 'smooth' })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id
            if (id === 'hero') {
              history.replaceState(null, '', location.pathname)
            } else {
              history.replaceState(null, '', `#${id}`)
            }
            break
          }
        }
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}
