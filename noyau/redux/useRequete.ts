import _ from 'lodash';
import { useEffect, useState } from 'react';
import util from '../../noyau/util/util';
import useAppDispatch from './useAppDispatch';

const useRequete = (resultat) => {
    const dispatch = useAppDispatch();
    const [rid, setRid] = useState(null);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (rid && rid === resultat.rid) {
            setRid(null);
            setSuccess(true);
            setError(false);
        } else if (resultat.rid === 'erreur') {
            setRid(null);
            setSuccess(false);
            setError(true);
        }
    }, [resultat, rid]);

    const execute = (actionCreator, args) => {
        return new Promise((resolve) => {
            if (util.estNul(rid)) {
                const uniqueRid = _.uniqueId();
                setRid(uniqueRid);
                dispatch(actionCreator({ rid: uniqueRid, ...args }));
            }
        });
    };

    return { execute, rid, success, error };
};

export default useRequete;
