import _ from 'lodash';
import util from '../../noyau/util/util';
import { IInfoActionReussie } from '../message/DomaineMessage';
import MappeurLibelle from './MappeurLibelle';

const templateMap = {
    'default.modifier': _.template('<%= typeLabel %> a été modifié avec succès'),
    'default.creer': _.template('<%= typeLabel %>  a été créé avec succès'),
    'default.supprimer': _.template('<%= typeLabel %> a été supprimée avec succès'),
    'default.valider': _.template('<%= typeLabel %> a été validé avec succès'),
    'default.rejeter': _.template('<%= typeLabel %> a été rejeté avec succès'),
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
    } else {
        const reducedKey = key.split(/(?=[A-Z])/)[0];
        const deducedType = type.split(/(?=[A-Z])/);
        const compiledTemplateForReducedKey = templateMap[`default.${reducedKey}`];
        if (compiledTemplateForReducedKey) {
            return compiledTemplateForReducedKey({ key, type, typeLabel: type.substring(4 + deducedType[1].length) });
        }
    }

    return null;
};

const MappeurInfoActionReussie = {
    get,
};

export default MappeurInfoActionReussie;
