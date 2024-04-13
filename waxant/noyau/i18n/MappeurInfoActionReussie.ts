import _ from 'lodash';
import util from '../../noyau/util/util';
import { IInfoActionReussie } from '../message/DomaineMessage';
import MappeurLibelle from './MappeurLibelle';

const templateMap = {
    'default.modifier': _.template('<%= typeLabel %> a été modifié avec Succès'),
    'default.creer': _.template('<%= typeLabel %>  a été créé avec Succès'),
    'default.supprimer': _.template('<%= typeLabel %> a été supprimée avec Succès'),
};

const get = (infoActionReussie: IInfoActionReussie, mapMessage: Record<string, string>, mapLibelle: Record<string, string>): string | null => {
    if (util.estNul(infoActionReussie?.key)) {
        return null;
    }

    const { key, type } = infoActionReussie;
    const messageTypeKey = `${type}.${key}`;

    const message = mapMessage[messageTypeKey];
    if (util.nonNul(message)) {
        return message;
    }

    const compiledTemplate = templateMap[messageTypeKey] || templateMap[`default.${key}`];
    if (compiledTemplate) {
        return compiledTemplate({ key, type, typeLabel: MappeurLibelle.libelle(type, mapLibelle) });
    }

    return null;
};

const MappeurInfoActionReussie = {
    get,
};

export default MappeurInfoActionReussie;
