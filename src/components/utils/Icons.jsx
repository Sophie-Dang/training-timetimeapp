export const IconAdd = ({bgColor, color}) => {
  return (
    <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="34" cy="34" r="34" className={bgColor}/>
      <rect x="30" y="14" width="8" height="40" rx="4" className={color}/>
      <rect x="14" y="38" width="8" height="40" rx="4" transform="rotate(-90 14 38)" className={color}/>
    </svg>
  )
}