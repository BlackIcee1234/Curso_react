import { takeLatest, all, call, put} from 'redux-saga/effects';
import { USER_ACTION_TYPES } from './user.types';
import { signInSuccess, signInFailed } from './user.action';
import { getCurrentUser, 
    createUserDocumentFromAuth, 
    signInWithGooglePopup} 
    from '../../utils/firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalDetails){
    try{
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    }catch(error){
        yield put(signInFailed(error));
    }
}

export function* signInWithGoogle(){
    try{
        const {user} = yield call(signInWithGooglePopup);
        yield call(getSnapshotFromUserAuth, user);
    }catch(error){
        yield put(signInFailed(error));
    }
}

export function* isUserAuthtenticated(){
    try{
        const userAtuth = yield call(getCurrentUser);
        if(!userAtuth) return;
        yield call(getSnapshotFromUserAuth, userAtuth);
    }catch(error){
        yield put(signInFailed(error));
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, signInWithGoogle);
}

export function* onCheckUserSession(){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthtenticated);
}

export function* userSagas(){
    yield all([call(onCheckUserSession), call(onGoogleSignInStart)]);
}