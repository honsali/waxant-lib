import { TableOutlined } from '@ant-design/icons';
import ActionNormale from '../actionBase/ActionNormale';

const ActionRetourListe = ({ typeEntite, action }) => {
    return <ActionNormale nom={'retourListe.' + typeEntite} icone={<TableOutlined />} action={action} />;
};

export default ActionRetourListe;
