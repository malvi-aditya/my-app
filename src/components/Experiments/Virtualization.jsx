import { useEffect, useRef, useState } from 'react'
import { List } from 'react-window'

export default function Virtualization () {
  const [height, setHeight] = useState(300)
  const containerRef = useRef(null)
  const items = Array.from({ length: 10000 }, (_, i) => `Item #${i + 1}`)

  function Row ({ index, items, style }) {
    return <div style={style}>{items[index]}</div>
  }

  const updateHeight = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const available = window.innerHeight - rect.top // remaining space
      setHeight(available)
    }
  }

  // Recalculate on mount + resize + scroll (optional)
  useEffect(() => {
    updateHeight()

    // Listen to window resize
    window.addEventListener('resize', updateHeight)

    // ResizeObserver for safe measurement if parent resizes
    const observer = new ResizeObserver(updateHeight)
    observer.observe(document.body)

    return () => {
      window.removeEventListener('resize', updateHeight)
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={containerRef}>
      <h5>Virtualized list demo:</h5>
      <List
        style={{
          height: height, // container height
          width: 300,
          border: '1px solid #ddd'
        }}
        rowCount={items.length}
        rowHeight={35} // height of each row in px
        overscanCount={5} // optional: buffer extra items before/after viewport
        rowComponent={Row} // RowComponent
        rowProps={{ items }}
      />
    </div>
  )
}
