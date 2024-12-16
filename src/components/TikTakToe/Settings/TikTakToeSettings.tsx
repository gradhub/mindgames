import s from './tikTakToeSettings.module.css'
import Difficulties from './Difficulties';
import PlayerSymbol from './PlayerSymbol';

const TikTakToeSettings = () => {
    return (
        <div className={s.settingsBody}>
            <h1 className={s.settingsTitle}>
                Настройки
            </h1>
            <div className={s.settingsBlocks}>
                <Difficulties />
                <PlayerSymbol />
                    {/* Настройки:
                    - чей первый ход
                    - кем играет игрок х/о
                    - тип игры: игрок против игрока, игрок против компьютера */}
            </div>
        </div>
    )
}

export default TikTakToeSettings