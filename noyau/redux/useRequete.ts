import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { IResultat } from './action';
import useAppDispatch from './useAppDispatch';

const useRequete = (resultat?: IResultat) => {
    const dispatch = useAppDispatch();
    const params = useParams();
    const [rid, setRid] = useState(null);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (rid && rid === resultat?.rid) {
            setRid(null);
            setSuccess(true);
            setError(false);
        } else if (resultat?.rid === 'erreur') {
            setRid(null);
            setSuccess(false);
            setError(true);
        }
    }, [resultat, rid]);

    const execute = (actionToBeExecuted, args?: any) => {
        return new Promise((resolve) => {
            const uniqueRid = _.uniqueId();
            setRid(uniqueRid);
            setSuccess(false);
            dispatch(actionToBeExecuted({ rid: uniqueRid, ...args, ...params }));
        });
    };

    return { execute, rid, success, error };
};

export default useRequete;
