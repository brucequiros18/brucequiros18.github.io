export default function ImgSlot({ src, alt, className = 'img-slot--portrait', portrait = false }) {
  return (
    <figure className={`img-slot ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  )
}
