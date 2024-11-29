import Field from './Field'
import s from './tikTakToe.module.css'

const TikTakToe = () => {
    return (
        <div className={s.gameBody}>
            <h1 className={s.gameTitle}>
                Крестики - Нолики
            </h1>
            <Field />
        </div>
    )
}

export default TikTakToe