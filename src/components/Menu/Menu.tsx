import s from './menu.module.css'
import Button from '../buttons/Button';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate()

    const onTikTakToeHandler = () => {
        navigate('tik-tak-toe')
    }

    const onSudokuHandler = () => {
        navigate('sudoku')
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