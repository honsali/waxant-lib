import { CloseCircleOutlined } from '@ant-design/icons';
import { BoutonProps } from '../boutonBase/Bouton';
import ActionUcConfirmer from './ActionUcConfirmer';

const ActionUcRejeter = (props: BoutonProps) => {
    return <ActionUcConfirmer nom="valider" icone={<CloseCircleOutlined />} {...props} />;
};

export default ActionUcRejeter;
