import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { IUser } from './DomaineAuth';

const initialState = {
    user: {} as IUser,
    role: null as string,
    initialPage: '/' as string,
};

type AuthStateType = typeof initialState;

//@TODO remove SessionStorage from reducer

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ user: IUser; mapRole: Record<string, string> }>) => {
            const user = action.payload.user;
            const roleTrouve = _.some(user.roleList, (r) => {
                const roleNormalise = action.payload.mapRole[r];
                if (roleNormalise) {
                    state.role = roleNormalise;
                    return true;
                }
                return false;
            });
            if (roleTrouve) {
                state.user = user;
            } else {
                AuthSlice.caseReducers.logout(state);
            }
        },
        logout: (state) => {
            state.user = {} as IUser;
            state.role = null;
            state.initialPage = '/';
        },
    },
});

const selectMdlAuthState = (state) => state.mdlAuth;

export const selectRole = createSelector([selectMdlAuthState], (state: AuthStateType) => state.role);

export const selectUser = createSelector([selectMdlAuthState], (state: AuthStateType) => state.user);

export const MdlAuth = AuthSlice.actions;

export default AuthSlice.reducer;
