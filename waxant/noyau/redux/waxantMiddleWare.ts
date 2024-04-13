import _ from 'lodash';
import { AnyAction } from 'redux';
import { IInfoActionEchouee } from '../message/DomaineMessage';
import { MdlMessage } from '../message/MdlMessage';
import util from '../util/util';

function isRejectedAction(action: AnyAction) {
    return action && action.type && action.type.endsWith('/rejected');
}

function isPendingAction(action: AnyAction) {
    return action && action.type && action.type.endsWith('/pending');
}

function isFulfilledAction(action: AnyAction) {
    return action && action.type && action.type.endsWith('/fulfilled');
}

export const serializeError = (value: any) => {
    if (util.nonNul(value) && value.isAxiosError && value.response) {
        return { data: value.response.data, status: value.response.status };
    } else if (util.nonNul(value) && value.errorFields) {
        return {
            status: -1,
            data: {
                errors: value.errorFields.map((err) => {
                    return { libelle: err.errors[0] };
                }),
            },
        };
    }
    return { message: String(value) };
};

const waxantMiddleWare = (store) => (next) => (action) => {
    const { error, payload } = action;
    const items = _.split(action.type, '/');
    if (isPendingAction(action)) {
        store.dispatch(MdlMessage.initialiser());
    } else if (isFulfilledAction(action)) {
        store.dispatch(MdlMessage.setInfoActionReussie({ key: items[1], type: items[0], data: payload }));
    }

    if (isRejectedAction(action) && error) {
        const err = error?.message === 'Rejected' ? payload : error;
        let message: IInfoActionEchouee = { code: payload };
        if (err.status) {
            switch (err.status) {
                case -1:
                    message = { code: 'error.validation.form', listeErreurServeur: err.data?.errors };
                    break;
                case 0:
                    message = { code: 'error.server.not.reachable' };
                    break;
                case 400:
                    message = { code: 'error.bad.request', erreur: err.data.code, listeErreurServeur: err.data?.errors };
                    break;
                case 404:
                    message = { code: 'error.url.not.found' };
                    break;
                case 500:
                    message = { code: 'error.server.error' };
                    break;
            }
        }

        store.dispatch(MdlMessage.setInfoActionEchouee(message));
    }
    return next(action);
};

export default waxantMiddleWare;
