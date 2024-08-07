import { UnlockOutlined } from '@ant-design/icons';
import { BoutonProps } from '../boutonBase/Bouton';
import ActionUcConfirmer from './ActionUcConfirmer';

const ActionUcDeverrouiller = (props: BoutonProps) => {
    return <ActionUcConfirmer couleur="secondaire" nom="deverrouiller" icone={<UnlockOutlined />} {...props} />;
};

export default ActionUcDeverrouiller;
