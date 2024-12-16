import s from './tikTakToeSettings.module.css'
import { ReactComponent as CrossGame} from '../crossGame.svg'
import { ReactComponent as ZeroGame} from '../zeroGame.svg'
import { useTikTakToeMove, XO } from '../../../stores/TikTakToeStore/useTikTakToeMove'
import { useTikTakToeHook } from '../../../hooks/useTikTakToeHook'
import cx from 'classnames'

const PlayerSymbol = () => {
    const { playerSymbol, setPlayerSymbol, setComputerSymbol } = useTikTakToeMove()
    const resetTikTakToeStores = useTikTakToeHook()

    const onClickHendler = (playerSymbol: XO, computerSymbol: XO) => {
        setPlayerSymbol(playerSymbol)
        setComputerSymbol(computerSymbol)
        resetTikTakToeStores()
    }
    
    return (
        <div className={s.settingBlock}>
            <div className={s.settingTitle}>
                <h3>Кем ходит игрок?</h3>
            </div>
            <div className={s.settingBody}>
                <div 
                    className={cx(s.gameSymbol, { [s.active]: playerSymbol === 'o' })} 
                    onClick={() => onClickHendler('o', 'x')}>
                        <ZeroGame />
                </div>
                <div 
                    className={cx(s.gameSymbol, { [s.active]: playerSymbol === 'x' })} 
                    onClick={() => onClickHendler('x', 'o')}>
                        <CrossGame />
                </div>
            </div>
        </div>
    )
}

export default PlayerSymbol