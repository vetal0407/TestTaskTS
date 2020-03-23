import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/configureStore'

import Main from '../screens/Main/Main'

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    )
}

export default App
