import { SaveOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import useI18n from '../../../noyau/i18n/useI18n';
import ActionForte from '../actionBase/ActionForte';

const ActionEnregistrer = ({ typeEntite, action, rid = null }) => {
    const i18n = useI18n();
    return (
        <Popconfirm title={i18n.libelle('confirmer.enregistrer.' + typeEntite)} onConfirm={action} okText="Confirmer" cancelText="Annuler">
            <ActionForte nom={'enregistrer.' + typeEntite} icone={<SaveOutlined />} action={action} rid={rid} />
        </Popconfirm>
    );
};

export default ActionEnregistrer;
