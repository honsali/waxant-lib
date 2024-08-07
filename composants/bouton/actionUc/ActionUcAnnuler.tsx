import { StopOutlined } from '@ant-design/icons';
import { BoutonProps } from '../boutonBase/Bouton';
import ActionUcConfirmer from './ActionUcConfirmer';

const ActionUcAnnuler = (props: BoutonProps) => {
    return <ActionUcConfirmer couleur="secondaire" nom="annuler" icone={<StopOutlined />} {...props} />;
};

export default ActionUcAnnuler;
