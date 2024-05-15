import { EditOutlined } from '@ant-design/icons';
import { BoutonProps } from '../boutonBase/Bouton';
import ActionGoToPageForte from './ActionGoToPageForte';

const ActionUcModifier = (props: BoutonProps) => {
    return <ActionGoToPageForte icone={<EditOutlined />} nom="modifier" {...props} />;
};

export default ActionUcModifier;
