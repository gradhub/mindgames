import s from './square.module.css'
import { ReactComponent as CrossGame} from './crossGame.svg'
import { ReactComponent as ZeroGame} from './zeroGame.svg'

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
            {value === 'x' && (
                <CrossGame />
            )}
            {value === 'o' && (
                <ZeroGame />
            )}
        </div>
    )
}

export default Square