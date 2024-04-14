import { EyeFilled } from '@ant-design/icons';
import ActionIcone from '../actionBase/ActionIcone';

const ActionTableauConsulter = ({ typeEntite, action = null }) => {
    return <ActionIcone nom={'consulter.' + typeEntite} icone={<EyeFilled />} action={action} taille="mini" type="simple" />;
};

export default ActionTableauConsulter;
