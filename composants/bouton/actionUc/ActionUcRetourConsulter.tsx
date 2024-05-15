import { RollbackOutlined } from '@ant-design/icons';
import { BoutonProps } from '../boutonBase/Bouton';
import ActionGoToPageNormale from './ActionGoToPageNormale';

const ActionUcRetourConsulter = (props: BoutonProps) => {
    return <ActionGoToPageNormale nom="retourConsulter" icone={<RollbackOutlined />} {...props} />;
};

export default ActionUcRetourConsulter;
