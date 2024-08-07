import { CloseCircleOutlined } from '@ant-design/icons';
import { BoutonProps } from '../boutonBase/Bouton';
import ActionUcConfirmer from './ActionUcConfirmer';

const ActionUcRejeter = (props: BoutonProps) => {
    return <ActionUcConfirmer nom="rejeter" icone={<CloseCircleOutlined />} {...props} />;
};

export default ActionUcRejeter;
