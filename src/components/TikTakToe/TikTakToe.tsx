import TikTakToeGame from './TikTakToeGame'
import s from './tikTakToe.module.css'
import cx from 'classnames'
import { ReactComponent as SettingIcon} from './settingIcon.svg'
import { ReactComponent as BackButton} from './backButton.svg'
import Button from '../buttons/Button'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useTikTakToeHook } from '../../hooks/useTikTakToeHook'
import { TIK_TAK_TOE_GAME_PATH, TIK_TAK_TOE_SETTINGS_PATH, MIND_GAME_MENU } from '../../constants/routerPath'

const TikTakToe = () => {
    const navigate = useNavigate()
    const resetTikTakToeStores = useTikTakToeHook()
    const location = useLocation()

    const onClickBackButton = () => {
        if (location.pathname === TIK_TAK_TOE_SETTINGS_PATH) {
            navigate(TIK_TAK_TOE_GAME_PATH)
        } else {
            resetTikTakToeStores()
            navigate(MIND_GAME_MENU)
        }
    }

    const onClickSettings = () => {
        navigate(TIK_TAK_TOE_SETTINGS_PATH)
    }

    return (
        <div className={s.body}>
            <div className={s.head}>
                <Button
                    variable='empty'
                    onClick={onClickBackButton}
                >
                    <BackButton className={cx(s.svgButton, s.backButton)} />
                </Button>
                <h1>MaidGame</h1>
                <Button
                    variable='empty'
                    onClick={onClickSettings}
                >
                    <SettingIcon className={cx(s.svgButton, s.settingIcon)} />
                </Button>
            </div>

            <Outlet />
        </div>
    )
}

export default TikTakToe