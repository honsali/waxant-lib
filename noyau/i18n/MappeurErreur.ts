import { IErreurServeur, IInfoActionEchouee, IMessageErreur } from '../message/DomaineMessage';

const mapContexteErreur = {
    'error.bad.request': ['Données Invalides', 'Veuillez corriger les erreurs suivantes:'],
    'error.validation.form': ['Données Invalides', 'Veuillez corriger les erreurs suivantes:'],
    'error.server.not.reachable': ['Problème technique', 'Le serveur ne répond pas, veuillez contacter votre administrateur'],
    'error.url.not.found': ['Problème technique', 'Ressource introuvable, veuillez contacter votre administrateur'],
    'error.server.error': ['Problème technique', 'Erreur Serveur, veuillez contacter votre administrateur'],
};

const trouverLibelleErreur = ({ code, args, libelle }: IErreurServeur, mapErreur: Record<string, string>): string => {
    if (args?.length) {
        for (const arg of args) {
            const l = mapErreur[`${code}@${arg}`];
            if (l) {
                return l;
            }
        }
    }
    return libelle || mapErreur[code] || code;
};

const get = ({ code, listeErreurServeur, listeErreurDirecte, erreur }: IInfoActionEchouee, mapErreur: Record<string, string>): IMessageErreur => {
    const e = mapContexteErreur[code];
    if (e) {
        const messageErreur: IMessageErreur = { titre: e[0], sousTitre: e[1], listeErreur: [] };
        if (listeErreurServeur?.length) {
            messageErreur.listeErreur = listeErreurServeur.map((err) => trouverLibelleErreur(err, mapErreur));
        }

        if (listeErreurDirecte?.length) {
            messageErreur.listeErreur.push(...listeErreurDirecte);
        }
        if (erreur) {
            const erreurTexte = mapErreur[erreur] || `[${erreur}]`;
            messageErreur.listeErreur.push(erreurTexte);
        }
        return messageErreur;
    }
    return { titre: 'ERROR', sousTitre: JSON.stringify({ code, listeErreurServeur, listeErreurDirecte, erreur }), listeErreur: [] };
};
const MappeurErreur = {
    get,
};

export default MappeurErreur;
