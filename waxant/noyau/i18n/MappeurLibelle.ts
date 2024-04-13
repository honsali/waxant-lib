import _ from 'lodash';
import util from '../util/util';

const libelle = (key: string, mapLibelle: Record<string, string>): string => {
    if (util.estNul(key)) {
        return '[]';
    }
    switch (key) {
        case '_vide':
            return '\xA0';
        case 'libelle':
            return 'Libelle';
        case 'code':
            return 'Code';
        default:
            if (key.startsWith('libelle')) {
                const filteredKey = key.charAt(7).toLowerCase() + key.slice(8);
                return mapLibelle[filteredKey] || `[${filteredKey}]`;
            }
            return mapLibelle[key] || `[${key}]`;
    }
};
const col = (key: string, mapLibelle: Record<string, string>): string => {
    if (util.estNul(key)) {
        return '';
    }
    return mapLibelle[`col_${key}`] || '';
};

const action = (key: string, mapActionUI: Record<string, string>, mapLibelle: Record<string, string>): string => {
    if (util.estNul(key)) {
        return '[]';
    }
    const keyBase = key.includes('.') ? key.substring(0, key.indexOf('.')) : key;
    return mapActionUI[key] || mapActionUI[keyBase] || libelle(key, mapLibelle);
};

const titre = (key: string, mapTitre: Record<string, string>, mapActionUI: Record<string, string>, mapLibelle: Record<string, string>): string => {
    if (util.estNul(key)) {
        return '[]';
    }
    return mapTitre[key] || action(key, mapLibelle, mapActionUI);
};

const actionCtrl = (key: string, mapActionCtrl: Record<string, string>): string => {
    if (util.estNul(key)) {
        return '[]';
    }

    return (
        mapActionCtrl[key] ||
        _.capitalize(
            key
                .split('/')
                .pop()
                .split(/(?=[A-Z])/)
                .join(' ')
        )
    );
};

const MappeurLibelle = {
    libelle,
    col,
    action,
    titre,
    actionCtrl,
};

export default MappeurLibelle;
