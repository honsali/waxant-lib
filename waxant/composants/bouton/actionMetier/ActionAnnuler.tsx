import { StopOutlined } from '@ant-design/icons';
import ActionNormale from '../actionBase/ActionNormale';

const ActionAnnuler = ({ nom = 'actionAnnuler', action = null }) => {
    return <ActionNormale nom={nom} icone={<StopOutlined />} action={action} />;
};

export default ActionAnnuler;
