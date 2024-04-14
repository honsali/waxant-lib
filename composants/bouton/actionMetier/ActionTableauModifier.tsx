import { EditFilled } from '@ant-design/icons';
import ActionIcone from '../actionBase/ActionIcone';

const ActionTableauModifier = ({ typeEntite, action = null }) => {
    return <ActionIcone nom={'modifier.' + typeEntite} icone={<EditFilled />} action={action} taille="mini" type="simple" />;
};

export default ActionTableauModifier;
