import { useEffect } from "react"
import { useTikTakToeField } from "../../stores/TikTakToeStore/useTikTakToeField"
import s from './field.module.css'

const Field = () => {
    const { squares, setSquare } = useTikTakToeField()

    useEffect(() => {
        console.log('FIELD')
    },[])

    return (
        <div className={s.field}>
            {squares.map((square) => (
                <span>
                    {square}
                </span>
            ))}
        </div>
    )
}

export default Field