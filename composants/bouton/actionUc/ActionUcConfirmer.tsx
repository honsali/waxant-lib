import { Popover } from 'antd';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useHasRight from '../../../noyau/auth/useHasRight';
import useContexteView from '../../../noyau/contexte/ContexteView';
import useI18n from '../../../noyau/i18n/useI18n';
import util from '../../../noyau/util/util';
import BlocActionDroit from '../BlocActionDroit';
import { BoutonProps } from '../boutonBase/Bouton';
import BoutonContourPrimaire from '../boutonBase/BoutonContourPrimaire';
import BoutonPleinSecondaire from '../boutonBase/BoutonPleinSecondaire';
import BoutonSelonContexte from '../boutonBase/BoutonSelonContexte';

const Composant = styled(Popover)``;

const SEntete = styled.div`
    background-color: ${(props) => props.theme.token.colorPrimary};
    padding: 5px 10px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
`;

const SCorp = styled.div`
    padding: 10px 20px 20px;
    font-weight: bold;
`;
const ActionUcConfirmer = (props: BoutonProps) => {
    const { i18n } = useI18n();
    const { uc } = useContexteView();
    const nom = uc + '.action.' + props.nom;
    const hasRight = useHasRight(nom);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (util.estNul(props.rid)) {
            setVisible(false);
        }
    }, [props.rid]);

    const confirmer = () => {
        setVisible(true);
    };

    const annuler = () => {
        setVisible(false);
    };

    const getContent = () => {
        return (
            <div>
                <SEntete>
                    {props.icone} &nbsp; {i18n(nom + '.confirmation.titre')}
                </SEntete>
                <SCorp>{i18n(nom + '.confirmation.entete')}</SCorp>
                <BlocActionDroit padding="10px">
                    {util.estNul(props.rid) && <BoutonContourPrimaire nom="annuler" action={annuler} />}
                    <BoutonPleinSecondaire nom="confirmer" action={props.action} rid={props.rid} />
                </BlocActionDroit>
            </div>
        );
    };

    return (
        <Composant open={visible} content={getContent()} trigger="click" overlayInnerStyle={{ padding: 0 }}>
            <BoutonSelonContexte {...props} nom={nom} rid={visible ? '1' : null} action={confirmer} visible={hasRight} />
        </Composant>
    );
};

export default ActionUcConfirmer;
