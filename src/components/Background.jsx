export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg-mesh"></div>
      <div className="bg-glow bg-glow--one"></div>
      <div className="bg-glow bg-glow--two"></div>
      <div className="bg-glow bg-glow--three"></div>
      <div className="bg-data bg-data--one"></div>
      <div className="bg-data bg-data--two"></div>
      <div className="bg-floor"></div>
      <div className="bg-shapes" aria-hidden="true">
        <div className="bg-shape bg-shape--far"></div>
        <div className="bg-shape bg-shape--far-b"></div>
        <div className="bg-shape bg-shape--mid"></div>
        <div className="bg-shape bg-shape--near"></div>
      </div>
    </div>
  )
}
