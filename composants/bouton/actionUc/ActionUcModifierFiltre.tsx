import { FilterOutlined } from '@ant-design/icons';
import { BoutonProps } from '../boutonBase/Bouton';
import ActionUcForte from './ActionUcForte';

const ActionUcModifierFiltre = (props: BoutonProps) => {
    return <ActionUcForte nom="modifierFiltre" icone={<FilterOutlined />} {...props} />;
};

export default ActionUcModifierFiltre;
