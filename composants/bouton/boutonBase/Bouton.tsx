import { Button, Tooltip } from 'antd';
import { PageDefinition } from 'waxant/noyau/routes/PageDefinition';
import useGoToPage from 'waxant/noyau/routes/useGoToPage';
import useI18n from '../../../noyau/i18n/useI18n';

export type BoutonProps = {
    nom?: string | null;
    contexte?: string;
    action?: (event) => void | null;
    typeEntite?: string | null;
    page?: PageDefinition | null;
    modele?: any | null;
    libelle?: string | null;
    icone?: React.ReactNode | null;
    inactif?: string | null;
    visible?: boolean;
    rid?: string | null;
    toolTip?: string | null;
    width?: number | string | null;
    className?: string | null;
    couleur?: 'primaire' | 'secondaire';
    forme?: 'contour' | 'plein' | 'lien';
};

const Bouton = ({ nom = null, contexte = null, action = null, page = null, modele = null, libelle = null, icone = null, inactif = null, visible = true, rid = null, toolTip = null, width = null, className = '' }: BoutonProps) => {
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
            <Tooltip placement="top" title={toolTip || inactif}>
                <Button //
                    id={`bouton${contexte ? '_' + contexte : ''}_${nom}`}
                    onClick={executeOnClick}
                    icon={icone}
                    loading={rid !== null}
                    className={className}
                    style={{ fontWeight: 500, width }}
                    type="default"
                >
                    {libelle ? libelle : i18n(nom)}
                </Button>
            </Tooltip>
        );
    }
};

export default Bouton;
