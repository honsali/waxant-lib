import { Space } from 'antd';
import { useEffect, useState } from 'react';
import { BoutonPleinPrimaire, DialogueConfirmation, useContexteView, useHasRight, useI18n, useRequete } from 'waxant';

const ActionUcDialogue = (props) => {
    const { i18n } = useI18n();
    const { uc } = useContexteView();
    const nom = uc + '.action.' + props.nom;
    const hasRight = useHasRight(nom);
    const [visible, setVisible] = useState(false);
    const { execute, success, rid } = useRequete(props.resultat);

    const attributes = {
        nom,
        libelle: i18n(nom + '.confirmation.titre'),
        entete: i18n(nom + '.confirmation.entete'),
        actionConfirmer: () => confirmer(),
        actionAnnuler: () => annuler(),
        icone: props.icone,
    };

    const ouvrir = () => {
        setVisible(true);
    };
    const confirmer = () => {
        execute(props.action, props.args);
    };

    const annuler = () => {
        props.siAnnuler();
        setVisible(false);
    };

    useEffect(() => {
        if (success) {
            props.siSucces();
            annuler();
        }
    }, [success]);

    return (
        <Space>
            <BoutonPleinPrimaire nom={props.nom} icone={props.icone} action={ouvrir} rid={visible ? '1' : null} inactif={props.inactif} visible={hasRight} />
            <DialogueConfirmation visible={visible} {...attributes} rid={rid}>
                {props.children}
            </DialogueConfirmation>
        </Space>
    );
};

export default ActionUcDialogue;
