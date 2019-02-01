import Typography from 'typography'
import funstonTheme from 'typography-theme-funston'

funstonTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  html: {
    overflow: 'unset',
  },
  body: {
    paddingTop: '80px',
  },
  'h2,h3': {
    marginBottom: 16,
    marginTop: 0,
    fontWeight: 'bold',
  },
  'blockquote': {
    fontSize: 'inherit'
  }
})

const typography = new Typography({
  ...funstonTheme,
  // bodyFontFamily: ['Fira Code Medium'],
  // headerFontFamily: ['Fira Code Medium']
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
