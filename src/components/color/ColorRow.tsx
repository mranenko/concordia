import './ColorRow.scss'

interface ColorRowProps {
  color: string
}

const ColorRow = ({ color }: ColorRowProps) => {
  return (
    <div className='swatch-row'>
      <span className={`swatch ${color}-10`}></span>
      <span className={`swatch ${color}-20`}></span>
      <span className={`swatch ${color}-30`}></span>
      <span className={`swatch ${color}-40`}></span>
      <span className={`swatch ${color}-50`}></span>
      <span className={`swatch ${color}-60`}></span>
      <span className={`swatch ${color}-70`}></span>
      <span className={`swatch ${color}-80`}></span>
      <span className={`swatch ${color}-90`}></span>
      <span className={`swatch ${color}-100`}></span>
      <span className={`swatch ${color}-110`}></span>
      <span className={`swatch ${color}-120`}></span>
    </div>
  )
}

export { ColorRow }
