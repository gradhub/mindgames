import s from './square.module.css'

interface SquareProps {
    index: number,
    value: string,
    onClick: (index: number) => void,
}

const Square: React.FC<SquareProps> = (props) => {
    const { value, onClick, index } = props
    return (
        <div 
            className={s.square}
            onClick={() => onClick(index)}
        >
            {value}
        </div>
    )
}

export default Square