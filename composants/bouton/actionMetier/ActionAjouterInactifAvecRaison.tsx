import { PlusCircleFilled } from '@ant-design/icons';
import { Tooltip } from 'antd';
import ActionForte from '../actionBase/ActionForte';

const ActionAjouterInactifAvecRaison = ({ action, typeEntite, inactif, raison }) => {
    return (
        <Tooltip placement="top" title={raison}>
            <ActionForte nom={'ajouter.' + typeEntite} icone={<PlusCircleFilled />} action={action} inactif={inactif} />
        </Tooltip>
    );
};

export default ActionAjouterInactifAvecRaison;
