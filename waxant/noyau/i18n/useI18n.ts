import React from 'react';
import useContexteApp from '../contexte/ContexteApp';
import { IInfoActionEchouee, IInfoActionReussie, IMessageErreur } from '../message/DomaineMessage';
import MappeurErreur from './MappeurErreur';
import MappeurInfoActionReussie from './MappeurInfoActionReussie';
import MappeurLibelle from './MappeurLibelle';

const useI18n = () => {
    const { mapLibelle, mapActionCtrl, mapActionUI, mapTitre, mapErreur, mapMessage } = useContexteApp();

    const i18n = React.useMemo(
        () => ({
            libelle: (key: string): string => MappeurLibelle.libelle(key, mapLibelle),
            col: (key: string): string => MappeurLibelle.col(key, mapLibelle),
            action: (key: string): string => MappeurLibelle.action(key, mapActionUI, mapLibelle),
            titre: (key: string): string => MappeurLibelle.titre(key, mapTitre, mapActionUI, mapLibelle),
            actionCtrl: (key: string): string => MappeurLibelle.actionCtrl(key, mapActionCtrl),
            erreur: (infoActionEchouee: IInfoActionEchouee): IMessageErreur => MappeurErreur.get(infoActionEchouee, mapErreur),
            message: (infoActionReusie: IInfoActionReussie): string => MappeurInfoActionReussie.get(infoActionReusie, mapMessage, mapLibelle),
        }),
        [mapLibelle, mapActionCtrl, mapActionUI, mapTitre, mapErreur, mapMessage]
    );

    return i18n;
};

export default useI18n;
