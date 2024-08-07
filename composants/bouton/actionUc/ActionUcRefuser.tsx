import { CloseCircleOutlined } from '@ant-design/icons';
import { BoutonProps } from '../boutonBase/Bouton';
import ActionUcConfirmer from './ActionUcConfirmer';

const ActionUcRefuser = (props: BoutonProps) => {
    return <ActionUcConfirmer nom="refuser" icone={<CloseCircleOutlined />} {...props} />;
};

export default ActionUcRefuser;
