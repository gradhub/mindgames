import s from './menu.module.css'
import Button from '../buttons/Button';
import { useNavigate } from 'react-router-dom';
import { TIK_TAK_TOE_GAME_PATH, SUDOKU_GAME_PATH } from '../../constants/routerPath';

const Menu = () => {
    const navigate = useNavigate()

    const onTikTakToeHandler = () => {
        navigate(TIK_TAK_TOE_GAME_PATH)
    }

    const onSudokuHandler = () => {
        navigate(SUDOKU_GAME_PATH)
    }

    return(
        <div className={s.mainMenu}>
            <h1>Список игр</h1>
            <Button 
                className={s.mainMenuButton}
                label='Крестики - Нолики'
                variable = 'major'
                onClick = {onTikTakToeHandler}
            />
            <Button 
                label='Судоку'
                variable = 'major'
                onClick = {onSudokuHandler}
                className={s.mainMenuButton}
            />
        </div>
    )
}

export default Menu;