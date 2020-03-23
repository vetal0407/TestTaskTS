import { put, takeLatest, call } from 'redux-saga/effects'

import axios from 'axios'

import { FETCH_SONGS_GET } from '../actionTypes/main'

import * as mainActions from '../actions/main'

function* getSongs() {
    yield put(mainActions.fetchSongsStart())
    try {
        const response = yield call(axios.get, 'https://iawake-backend-devel.dokku.f17y.com/api/v1/programs/free')

        yield put(mainActions.fetchSongsSuccess(response.data.data))

    } catch (e) {
        mainActions.fetchSongsError(e)
    }
}

export default function* watchMain() {
    yield takeLatest(FETCH_SONGS_GET, getSongs)
}
