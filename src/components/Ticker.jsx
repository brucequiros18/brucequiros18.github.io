import { TICKER_ITEMS } from '../data/site.js'

function TickerGroup() {
  return (
    <div className="ticker-group">
      {TICKER_ITEMS.map((item) => (
        <span key={item}>
          {item}
          <span className="ticker-sep">▮</span>
        </span>
      ))}
    </div>
  )
}

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-inner">
        <TickerGroup />
        <TickerGroup />
      </div>
    </div>
  )
}
