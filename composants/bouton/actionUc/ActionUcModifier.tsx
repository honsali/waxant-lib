import { EditOutlined } from '@ant-design/icons';
import { BoutonProps } from '../boutonBase/Bouton';
import ActionUcForte from './ActionUcForte';

const ActionUcModifier = (props: BoutonProps) => {
    return <ActionUcForte nom="modifier" icone={<EditOutlined />} {...props} />;
};

export default ActionUcModifier;
