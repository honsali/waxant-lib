import { PlusCircleFilled } from '@ant-design/icons';
import ActionForte from '../actionBase/ActionForte';

const ActionAjouter = ({ action, typeEntite, visible = true, inactif = null }) => {
    return <ActionForte nom={'ajouter.' + typeEntite} icone={<PlusCircleFilled />} action={action} visible={visible} inactif={inactif} />;
};

export default ActionAjouter;
