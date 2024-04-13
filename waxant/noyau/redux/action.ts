import { createAsyncThunk } from '@reduxjs/toolkit';
import _ from 'lodash';
import { MdlMessage } from '../message/MdlMessage';
import { serializeError } from './waxantMiddleWare';

export interface IRequete {
    uid?: string;
    rid?: string;
}

export interface IResultat {
    rid?: string;
}

const action = <Req extends IRequete, Res extends IResultat>(operation, actionName) => {
    return createAsyncThunk(actionName, async (requete: Req, thunkAPI) => {
        const rid = requete.rid ? requete.rid : _.uniqueId();

        const x = { rid, actionName };
        await thunkAPI.dispatch(MdlMessage.setActionEnCours(x));
        const resultat = { rid } as Res;
        try {
            await operation({ rid, ...requete }, resultat, thunkAPI);
        } catch (err) {
            await thunkAPI.dispatch(MdlMessage.finAction(rid));
            return thunkAPI.rejectWithValue(serializeError(err));
        }
        await thunkAPI.dispatch(MdlMessage.finAction(rid));
        return resultat;
    });
};

export const creerRequete = (setRid, params = null) => {
    const uid = _.uniqueId();
    setRid(uid);
    return { rid: uid, ...params };
};

export default action;
