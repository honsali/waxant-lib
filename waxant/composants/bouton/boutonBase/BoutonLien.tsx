import { Button } from 'antd';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import useI18n from '../../../noyau/i18n/useI18n';

const ComposantActif = styled(Button)`
    color: #aaa;
    font-weight: bold;
    span {
        text-decoration: underline;
    }
    &.primaire {
        &:hover {
            span {
                color: ${(props) => props.theme.token.colorPrimary};
            }
        }
    }
    &.secondaire {
        &:hover {
            span {
                color: ${(props) => props.theme.token.colorWarning};
            }
        }
    }
`;

const ComposantInactif = styled.span`
    color: #999;
    font-weight: bold;
    border: 1px solid transparent;
    height: 32px;
    padding: 4px 15px;
    font-size: 14px;
    line-height: 1.5715;
    position: relative;
    display: inline-block;
    .anticon {
        margin-right: 5px;
    }
`;

interface BoutonProps {
    nom?: string;
    action?: () => void;
    couleur?: 'primaire' | 'secondaire';
    type?: 'contour' | 'plein' | 'simple';
    libelle?: string;
    icone?: ReactElement;
    inactif?: boolean;
    visible?: boolean;
    vers?: string;
}

const BoutonLien = ({ nom, action, couleur = 'primaire', type = 'contour', libelle, icone, inactif = false, visible = true, vers = null }: BoutonProps) => {
    const i18n = useI18n();
    const navigate = useNavigate();
    const actionLien = () => {
        if (action) {
            action();
        } else {
            navigate(vers);
        }
    };
    return (
        <span className="btn-wrapper">
            {visible && !inactif && (
                <ComposantActif type="link" icon={icone} className={type + ' ' + couleur} onClick={actionLien}>
                    {libelle ? libelle : i18n.action(nom)}
                </ComposantActif>
            )}
            {visible && inactif && (
                <ComposantInactif className={type + ' ' + couleur}>
                    {icone}
                    {libelle ? libelle : i18n.action(nom)}
                </ComposantInactif>
            )}
        </span>
    );
};

export default BoutonLien;
