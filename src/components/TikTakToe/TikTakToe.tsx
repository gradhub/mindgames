import { useEffect } from 'react'
import Field from './Field'
import s from './tikTakToe.module.css'

const TikTakToe = () => {

    useEffect(() => {
        console.log('TIK-TAK-TOE')
    },[])

    return (
        <Field />
    )
}

export default TikTakToe