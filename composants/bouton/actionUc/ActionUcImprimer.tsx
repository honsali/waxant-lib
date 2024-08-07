import { PrinterOutlined } from '@ant-design/icons';
import { BoutonProps } from '../boutonBase/Bouton';
import ActionUcNormale from './ActionUcNormale';

const ActionUcImprimer = (props: BoutonProps) => {
    return <ActionUcNormale nom="imprimer" icone={<PrinterOutlined />} {...props} />;
};

export default ActionUcImprimer;
