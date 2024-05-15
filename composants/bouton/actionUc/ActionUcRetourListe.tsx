import { TableOutlined } from '@ant-design/icons';
import { BoutonProps } from '../boutonBase/Bouton';
import ActionGoToPageNormale from './ActionGoToPageNormale';

const ActionUcRetourListe = (props: BoutonProps) => {
    return <ActionGoToPageNormale nom="retourListe" icone={<TableOutlined />} {...props} />;
};

export default ActionUcRetourListe;
