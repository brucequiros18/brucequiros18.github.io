export default function SectionHead({ title, index, as: Tag = 'h2' }) {
  return (
    <div className="section-head">
      <Tag>{title}</Tag>
      {index && <span className="section-index mono">{index}</span>}
    </div>
  )
}
