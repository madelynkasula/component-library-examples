import {css} from '@emotion/css'
import colors from '../colors'

const styles = {
  btn: {
    background: 'transparent',
    borderRadius: 3,
    border: `2px solid ${colors.pink}`,
    color: colors.pink,
    margin: '0 1em',
    padding: '0.25em 1em'
  },
  highlight: {
    background: colors.pink,
    color: colors.white
  }
}

const Button = ({highlight, className, children}) => (
  <button className={css([styles.btn, highlight && styles.highlight, className])}>
    {children}
  </button>
)

export default Button