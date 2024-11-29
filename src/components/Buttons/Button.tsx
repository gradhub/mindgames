import s from './button.module.css'
import cx from 'classnames'

type buttonVariable = 'major' | 'minor' | 'tertiary'

interface ButtonProps {
    label: string,
    variable: buttonVariable
    onClick: () => void
    className?: string
}

const Button: React.FC<ButtonProps> = (props) => {
    const { label, variable, onClick, className } = props
    return (
        <button 
            className={cx(s[variable], className)}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button