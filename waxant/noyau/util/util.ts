import dayjs from 'dayjs';
import _ from 'lodash';

const removeNonSerialisable = <T extends object>(obj: T): Partial<T> => {
    const resultat: Partial<T> = {};
    Object.entries(obj).forEach(([key, value]) => {
        if (!(value instanceof dayjs)) {
            resultat[key] = _.isPlainObject(value) ? removeNonSerialisable(value) : value;
        }
    });
    return resultat;
};

const nonVide = (objet): boolean => {
    return nonNul(objet) && !_.isEmpty(objet);
};

const estVide = (objet): boolean => {
    return estNul(objet) || _.isEmpty(objet);
};

const nonNul = (objet): boolean => {
    return !_.isNil(objet) && objet !== 'null' && objet !== 'undefined';
};

const estNul = (objet): boolean => {
    return _.isNil(objet) || objet === 'null' || objet === 'undefined';
};

const sansId = (objet): boolean => {
    return estVide(objet) || estNul(objet.id);
};
const fresh = (objet, uid): boolean => {
    return objet?.uid === uid;
};
const equalIgnoreCase = (s1, s2): boolean => {
    return s1?.toUpperCase() === s2?.toUpperCase();
};

const supprimerChampVide = (objet): any => {
    const filter = _.overEvery([_.isNil, _.isEmpty]);
    return _.omitBy(objet, filter);
};
const sommer = (tableau): number => {
    return _.reduce(
        tableau,
        function (sum, n) {
            return +n ? sum + n : sum;
        },
        null
    );
};
const sommerPar = (tableau, champ): number => {
    return _.reduce(
        tableau,
        function (sum, o) {
            return o && o[champ] ? sum + o[champ] : sum;
        },
        null
    );
};
const contient = (objet, champ): boolean => {
    return _.get(objet, champ);
};

const util = {
    removeNonSerialisable,
    nonVide,
    estVide,
    nonNul,
    estNul,
    sansId,
    fresh,
    equalIgnoreCase,
    supprimerChampVide,
    sommer,
    sommerPar,
    contient,
};

export default util;
