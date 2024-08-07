import { Space } from 'antd';
import { useEffect, useState } from 'react';
import { DialogueConfirmation, useContexteView, useHasRight, useI18n, useRequete } from 'waxant';
import BoutonSelonContexte from '../boutonBase/BoutonSelonContexte';

const ActionUcDialogue = ({ nom, icone = null, action = null, actionCtrl = null, args, resultat = null, pret = true, siInit = null, siAnnuler = null, siSucces = null, siErreur = null, siErreurAnnuler = null, inactif = false, children }) => {
    const { i18n } = useI18n();
    const { uc } = useContexteView();
    const nomAction = uc + '.action.' + nom;
    const hasRight = useHasRight(nomAction);
    const [visible, setVisible] = useState(false);
    const [pretVisible, setPretVisible] = useState(false);
    const { execute, success, erreur, rid } = useRequete(resultat);

    const attributes = {
        nom: nomAction,
        libelle: i18n(nomAction + '.confirmation.titre'),
        entete: i18n(nomAction + '.confirmation.entete'),
        actionConfirmer: () => confirmer(),
        actionAnnuler: () => annuler(),
        icone,
    };

    const ouvrir = () => {
        siInit && siInit();
        setPretVisible(true);
    };
    const confirmer = () => {
        actionCtrl && execute(actionCtrl, args);
        action && action();
    };

    const annuler = () => {
        siAnnuler && siAnnuler();
        setVisible(false);
        setPretVisible(false);
    };

    useEffect(() => {
        setVisible(pretVisible && pret);
    }, [pretVisible, pret]);

    useEffect(() => {
        if (success) {
            siSucces && siSucces();
            annuler();
        }
    }, [success]);

    useEffect(() => {
        if (erreur) {
            siErreur && siErreur();
            siErreurAnnuler && annuler();
        }
    }, [erreur]);

    return (
        <Space>
            <BoutonSelonContexte nom={nomAction} icone={icone} action={ouvrir} rid={visible ? '1' : null} visible={hasRight} />
            <DialogueConfirmation visible={visible} {...attributes} rid={rid} inactif={inactif} largeur={800}>
                {children}
            </DialogueConfirmation>
        </Space>
    );
};

export default ActionUcDialogue;
