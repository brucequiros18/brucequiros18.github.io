export default function ChipsList({ items, ariaLabel, accent = false, className = '' }) {
  return (
    <ul className={`chips ${className}`} aria-label={ariaLabel}>
      {items.map((item) => (
        <li key={item} className={accent ? 'chip chip--accent' : 'chip'}>
          {item}
        </li>
      ))}
    </ul>
  )
}
