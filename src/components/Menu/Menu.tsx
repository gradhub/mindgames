import s from './menu.module.css'

const Menu = () => {
    return(
        <div className={s.main_menu}>
            <button>
                Крестики - Нолики
            </button>
            <button>
                Судоку
            </button>
        </div>
    )
}

export default Menu;