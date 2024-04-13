import { EditFilled } from '@ant-design/icons';
import ActionIcone from '../actionBase/ActionIcone';

const ActionIconeModifier = ({ typeEntite, action }) => {
    return <ActionIcone nom={'modifier.' + typeEntite} icone={<EditFilled />} action={action} taille="mini" couleur="secondaire" type="plein" />;
};

export default ActionIconeModifier;
