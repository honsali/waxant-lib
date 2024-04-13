import { DeleteOutlined } from '@ant-design/icons';
import ActionIcone from '../actionBase/ActionIcone';

const ActionTableauSupprimer = ({ typeEntite, action = null }) => {
    return <ActionIcone nom={'supprimer.' + typeEntite} icone={<DeleteOutlined />} action={action} taille="mini" type="simple" />;
};

export default ActionTableauSupprimer;
