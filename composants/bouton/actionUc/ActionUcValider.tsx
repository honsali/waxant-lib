import { CheckCircleOutlined } from '@ant-design/icons';
import { BoutonProps } from '../boutonBase/Bouton';
import ActionUcConfirmer from './ActionUcConfirmer';

const ActionUcValider = (props: BoutonProps) => {
    return <ActionUcConfirmer nom="valider" icone={<CheckCircleOutlined />} {...props} />;
};

export default ActionUcValider;
