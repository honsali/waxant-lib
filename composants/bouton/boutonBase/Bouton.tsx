import { Button, Tooltip } from 'antd';
import useI18n from '../../../noyau/i18n/useI18n';

export type BoutonProps = {
    nom?: string | null;
    contexte?: string;
    action?: () => void | null;
    libelle?: string | null;
    icone?: React.ReactNode | null;
    inactif?: string | null;
    visible?: boolean;
    rid?: string | null;
    toolTip?: string | null;
    width?: number | string | null;
    className?: string | null;
};

const Bouton = ({ nom = null, contexte = null, action = null, libelle = null, icone = null, inactif = null, visible = true, rid = null, toolTip = null, width = null, className = '' }: BoutonProps) => {
    const i18n = useI18n();
    if (visible) {
        return (
            <Tooltip placement="top" title={toolTip || inactif}>
                <Button //
                    id={`bouton${contexte ? '_' + contexte : ''}_${nom}`}
                    onClick={inactif ? null : action}
                    icon={icone}
                    loading={rid !== null}
                    className={className}
                    style={{ fontWeight: 500, width }}
                >
                    {libelle ? libelle : i18n.action(nom)}
                </Button>
            </Tooltip>
        );
    }
};

export default Bouton;
