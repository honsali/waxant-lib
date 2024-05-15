import { UnlockOutlined } from '@ant-design/icons';
import { BoutonProps } from '../boutonBase/Bouton';
import ActionUcConfirmer from './ActionUcConfirmer';

const ActionUcDeverrouiller = (props: BoutonProps) => {
    return <ActionUcConfirmer nom="deverrouiller" icone={<UnlockOutlined />} {...props} />;
};

export default ActionUcDeverrouiller;
