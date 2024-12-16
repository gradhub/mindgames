import s from './tikTakToeSettings.module.css'
import { useTikTakToeSettings } from '../../../stores/TikTakToeStore/useTikTakToeSettings'
import { difficulty } from '../../../stores/TikTakToeStore/useTikTakToeSettings';

const difficulties: {id: difficulty, label: string}[] = [
    { id: 'easy', label: 'Легко' },
    { id: 'medium', label: 'Нормально' },
    { id: 'hard', label: 'Сложно' },
];

const Difficulties = () => {
    const { setGameDifficulty, gameDifficulty } = useTikTakToeSettings()
    
    return (
        <div className={s.settingBlock}>
            <div className={s.settingTitle}>
                <h3>Сложность Игры</h3>
            </div>
            <div className={s.settingBody}>
                {difficulties.map((element) => (
                    <>
                        <input
                            type="radio"
                            id={element.id}
                            name="difficulty"
                            value={element.id}
                            checked={gameDifficulty === element.id}
                            onChange={() => setGameDifficulty(element.id)}
                        />
                        <label htmlFor={element.id} className={s.settingLabel}>{element.label}</label>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Difficulties