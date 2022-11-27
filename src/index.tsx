/*import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppWithRedux from './AppWithRedux';
import {store} from './state/store';
import {Provider} from 'react-redux';*/

import React, {useCallback, useEffect, useState} from 'react'
import ReactDOM from 'react-dom'

type ButtonType = {
    id: number
    title: string
    forAdminOnly: boolean
}
const buttons: ButtonType[] = [
    {id: 1, title: 'delete', forAdminOnly: true},
    {id: 2, title: 'update', forAdminOnly: true},
    {id: 3, title: 'create', forAdminOnly: false},
]

export const App = ({isAdmin}: { isAdmin: boolean }) => {

    const [seconds, setSeconds] = useState(0)

    const increaseSeconds = () => setSeconds(seconds + 10)

    const correctButtons = buttons

    return <>
        <ButtonsPanel buttons={correctButtons} isAdmin={isAdmin}/>
        <div>
            <p>
                <b>Секунды: {seconds}</b>
            </p>
            <button onClick={increaseSeconds}>
                Увеличить на 10 секунд
            </button>
        </div>
    </>
}

const ButtonsPanel = React.memo((props: { buttons: Array<ButtonType>, isAdmin: boolean}) => {
    console.log('Render ButtonsPanel')

    const buttons =  useCallback(() => {
        return props.buttons.filter(b => props.isAdmin ? true : !b.forAdminOnly)
    }, [])

    return (
        <div style={{marginBottom: '15px'}}>
            <div style={{marginBottom: '15px'}}>
                <b>Панель с кнопками</b>
            </div>
            <div>
                {buttons().map(b => <button key={b.id}>{b.title}</button>)}
            </div>
        </div>
    )
})

ReactDOM.render(<App isAdmin={true}/>, document.getElementById('root'))

// Что нужно написать вместо XXX и YYY,
// чтобы избавиться от лишнего перерендера компонента ButtonsPanel
// при нажатии на кнопку "Увеличить на 10 секунд" ?

// Ответ дайте через пробел: 111 222




/*const container = document.getElementById('root') as HTMLElement
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <AppWithRedux/>
    </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();*/
