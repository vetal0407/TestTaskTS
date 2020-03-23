import { all } from 'redux-saga/effects'
import watchMain from './sagas/main'

export default function* rootSaga() {
    yield all([
        watchMain()
    ])
}
