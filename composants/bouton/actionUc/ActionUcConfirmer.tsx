import { Popover } from 'antd';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import useHasRight from 'waxant/noyau/auth/useHasRight';
import useContexteView from 'waxant/noyau/contexte/ContexteView';
import useI18n from '../../../noyau/i18n/useI18n';
import util from '../../../noyau/util/util';
import BlocActionDroit from '../BlocActionDroit';
import { TypeBouttonActionProvider } from '../actionMetier/GroupeAction';
import { BoutonProps } from '../boutonBase/Bouton';
import BoutonContourPrimaire from '../boutonBase/BoutonContourPrimaire';
import BoutonIcone from '../boutonBase/BoutonIcone';
import BoutonPleinPrimaire from '../boutonBase/BoutonPleinPrimaire';
import BoutonPleinSecondaire from '../boutonBase/BoutonPleinSecondaire';

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

    const type = useContext(TypeBouttonActionProvider);

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
            {type === 'tableau' && <BoutonIcone nom={nom} icone={props.icone} rid={visible ? '1' : null} action={confirmer} inactif={props.inactif} visible={hasRight} />}
            {(type === 'menu' || type === 'menuPage') && <BoutonPleinPrimaire nom={nom} icone={props.icone} rid={visible ? '1' : null} action={confirmer} inactif={props.inactif} visible={hasRight} />}
            {type !== 'tableau' && type !== 'menu' && type !== 'menuPage' && <BoutonPleinPrimaire nom={nom} icone={props.icone} rid={visible ? '1' : null} action={confirmer} inactif={props.inactif} visible={hasRight} />}
        </Composant>
    );
};

export default ActionUcConfirmer;
