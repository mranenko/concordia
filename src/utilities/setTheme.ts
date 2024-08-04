import themes from '../assets/data/themes.json'

const setColorVariable = (key: string, value: string) => {
  const [hue, saturation] = value.match(/\d+/g).map(Number)
  console.log(`${key}: ${value}`)
  document.documentElement.style.setProperty(`--color-${key}`, value)
  document.documentElement.style.setProperty(`--color-${key}-10`, `hsl(${hue} ${saturation} 99)`)
  document.documentElement.style.setProperty(`--color-${key}-20`, `hsl(${hue} ${saturation} 95)`)
  document.documentElement.style.setProperty(`--color-${key}-30`, `hsl(${hue} ${saturation} 90)`)
  document.documentElement.style.setProperty(`--color-${key}-40`, `hsl(${hue} ${saturation} 84)`)
  document.documentElement.style.setProperty(`--color-${key}-50`, `hsl(${hue} ${saturation} 75)`)
  document.documentElement.style.setProperty(`--color-${key}-60`, `hsl(${hue} ${saturation} 66)`)
  document.documentElement.style.setProperty(`--color-${key}-70`, `hsl(${hue} ${saturation} 53)`)
  document.documentElement.style.setProperty(`--color-${key}-80`, `hsl(${hue} ${saturation} 40)`)
  document.documentElement.style.setProperty(`--color-${key}-90`, `hsl(${hue} ${saturation} 32)`)
  document.documentElement.style.setProperty(`--color-${key}-100`, `hsl(${hue} ${saturation} 24)`)
  document.documentElement.style.setProperty(`--color-${key}-110`, `hsl(${hue} ${saturation} 20)`)
  document.documentElement.style.setProperty(`--color-${key}-120`, `hsl(${hue} ${saturation} 16)`)
}

const setTheme = (themeName: string) => {
  const theme = themes[themeName]
  setColorVariable('primary', theme.primary)
  setColorVariable('secondary', theme.secondary)
  setColorVariable('neutral', theme.neutral)
}

export {
  setTheme,
}
