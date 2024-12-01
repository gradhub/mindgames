import s from './button.module.css'
import cx from 'classnames'

type buttonVariable = 'major' | 'minor' | 'tertiary' | 'empty'

interface ButtonProps {
    label?: string,
    variable: buttonVariable
    onClick: () => void
    className?: string
    children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = (props) => {
    const { label, variable, onClick, className, children } = props
    return (
        <button 
            className={cx(s.button, s[variable], className)}
            onClick={onClick}
        >
            {children}
            {label}
        </button>
    )
}

export default Button