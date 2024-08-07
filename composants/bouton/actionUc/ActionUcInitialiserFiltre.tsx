import { ClearOutlined } from '@ant-design/icons';
import { BoutonProps } from '../boutonBase/Bouton';
import ActionUcNormale from './ActionUcNormale';

const ActionUcInitialiserFiltre = (props: BoutonProps) => {
    return <ActionUcNormale nom="initialiserFiltre" icone={<ClearOutlined />} {...props} />;
};

export default ActionUcInitialiserFiltre;
