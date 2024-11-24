import s from './button.module.css'

type buttonVariable = 'major' | 'minor' | 'tertiary'

interface ButtonProps {
    label: string,
    variable: buttonVariable
    onClick: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
    const { label, variable, onClick } = props
    return (
        <button 
            className={`${s[variable]}`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button