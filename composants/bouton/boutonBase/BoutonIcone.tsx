import { Button, Tooltip } from 'antd';
import { ReactElement } from 'react';
import styled from 'styled-components';
import useI18n from '../../../noyau/i18n/useI18n';

const Composant = styled(Button)`
    padding-left: 0 !important;
    padding-right: 0 !important;
    &.contour.primaire {
        color: ${(props) => props.theme.token.colorPrimary};
        background-color: #fff;
        border-color: ${(props) => props.theme.token.colorPrimary};
        &:hover {
            color: #fff;
            background-color: ${(props) => props.theme.token.colorPrimary};
            border-color: ${(props) => props.theme.token.colorPrimary};
        }
    }
    &.contour.secondaire {
        color: ${(props) => props.theme.token.colorWarning};
        background-color: #fff;
        border-color: ${(props) => props.theme.token.colorWarning};
        &:hover {
            color: #fff;
            background-color: ${(props) => props.theme.token.colorWarning};
            border-color: ${(props) => props.theme.token.colorWarning};
        }
    }
    &.plein.primaire {
        color: #fff;
        background-color: ${(props) => props.theme.token.colorPrimary};
        border-color: ${(props) => props.theme.token.colorPrimary};
        &:hover {
            color: ${(props) => props.theme.token.colorPrimary};
            background-color: #fff;
            border-color: ${(props) => props.theme.token.colorPrimary};
        }
    }
    &.plein.secondaire {
        color: #fff;
        background-color: ${(props) => props.theme.token.colorWarning};
        border-color: ${(props) => props.theme.token.colorWarning};
        &:hover {
            color: ${(props) => props.theme.token.colorWarning};
            background-color: #fff;
            border-color: ${(props) => props.theme.token.colorWarning};
        }
    }
    &.simple.primaire {
        color: ${(props) => props.theme.token.colorPrimary};
        background-color: transparent;
        border-color: transparent;
        box-shadow: none;
        &:hover {
            color: white;
            background-color: ${(props) => props.theme.token.colorPrimary};
        }
    }
    &.simple.secondaire {
        color: ${(props) => props.theme.token.colorWarning};
        background-color: transparent;
        border-color: transparent;
        box-shadow: none;
        &:hover {
            color: white;
            background-color: ${(props) => props.theme.token.colorWarning};
        }
    }
`;

export interface BoutonIconeProps {
    nom?: string;
    action?: (event) => void;
    couleur?: 'primaire' | 'secondaire';
    type?: 'contour' | 'plein' | 'simple';
    libelle?: string;
    icone?: ReactElement;
    inactif?: boolean;
    visible?: boolean;
    taille?: 'mini' | 'large';
}

const BoutonIcone = ({ nom, action = null, couleur = 'primaire', type = 'contour', libelle, icone, inactif = false, visible = true, taille = 'large' }: BoutonIconeProps) => {
    const i18n = useI18n();
    if (visible) {
        return (
            <span className="btn-wrapper">
                <Tooltip placement="bottom" title={libelle ? libelle : i18n.action(nom)}>
                    <Composant size={taille === 'mini' ? 'small' : 'large'} icon={icone} onClick={action} className={type + ' ' + couleur + ' ' + taille} disabled={inactif}></Composant>
                </Tooltip>
            </span>
        );
    }
};

export default BoutonIcone;
