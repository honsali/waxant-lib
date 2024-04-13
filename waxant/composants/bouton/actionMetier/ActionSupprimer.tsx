import { DeleteFilled } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import useI18n from '../../../noyau/i18n/useI18n';
import ActionCritique from '../actionBase/ActionCritique';

const ActionSupprimer = ({ typeEntite, action }) => {
    const i18n = useI18n();
    return (
        <Popconfirm title={i18n.libelle('confirmer.supprimer.' + typeEntite)} onConfirm={action} okText="Confirmer" cancelText="Annuler">
            <ActionCritique nom={'supprimer.' + typeEntite} icone={<DeleteFilled />} action={action} />
        </Popconfirm>
    );
};

export default ActionSupprimer;
