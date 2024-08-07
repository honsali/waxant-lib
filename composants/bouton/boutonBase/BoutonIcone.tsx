import { Button, Tooltip } from 'antd';
import styled from 'styled-components';
import { PageDefinition } from 'waxant/noyau/routes/PageDefinition';
import useGoToPage from 'waxant/noyau/routes/useGoToPage';
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
    nom?: string | null;
    action?: (event) => void | null;
    couleur?: 'primaire' | 'secondaire';
    type?: 'contour' | 'plein' | 'simple';
    page?: PageDefinition | null;
    modele?: any | null;
    libelle?: string | null;
    icone?: React.ReactNode | null;
    inactif?: string | null;
    visible?: boolean;
    rid?: string | null;
    taille?: 'mini' | 'large';
}

const BoutonIcone = ({ nom = null, action = null, couleur = 'primaire', type = 'contour', page = null, modele = null, libelle = null, icone = null, inactif = null, visible = true, rid = null, taille = 'large' }: BoutonIconeProps) => {
    const { i18n } = useI18n();
    const gtp = useGoToPage();
    const executeOnClick = (event) => {
        if (!inactif && action) {
            action(event);
        } else if (!inactif && page) {
            gtp(page, modele);
        }
    };
    if (visible) {
        return (
            <Tooltip placement="bottom" title={libelle ? libelle : i18n(nom)}>
                <Composant //
                    size={taille === 'mini' ? 'small' : 'large'}
                    onClick={executeOnClick}
                    icon={icone}
                    loading={rid !== null}
                    className={type + ' ' + couleur + ' ' + taille}
                ></Composant>
            </Tooltip>
        );
    }
};

export default BoutonIcone;
