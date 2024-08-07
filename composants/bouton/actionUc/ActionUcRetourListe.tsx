import { TableOutlined } from '@ant-design/icons';
import { BoutonProps } from '../boutonBase/Bouton';
import ActionUcNormale from './ActionUcNormale';

const ActionUcRetourListe = (props: BoutonProps) => {
    return <ActionUcNormale nom="retourListe" icone={<TableOutlined />} {...props} />;
};

export default ActionUcRetourListe;
