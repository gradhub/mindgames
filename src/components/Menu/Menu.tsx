import s from './menu.module.css'
import Button from '../Buttons/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Menu = () => {
    const navigate = useNavigate()

    const onTikTakToeHandler = () => {
        navigate('tik-tak-toe')
    }

    const onSudokuHandler = () => {
        navigate('sudoku')
    }

    useEffect(() => {
        console.log('MENU')
    },[])

    return(
        <div className={s.main_menu}>
            <h1>Список игр</h1>
            <Button 
                label='Крестики - Нолики'
                variable = 'major'
                onClick = {onTikTakToeHandler}
            />
            <Button 
                label='Судоку'
                variable = 'major'
                onClick = {onSudokuHandler}
            />
        </div>
    )
}

export default Menu;