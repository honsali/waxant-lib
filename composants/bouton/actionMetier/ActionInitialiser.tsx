import { ClearOutlined } from '@ant-design/icons';
import ActionNormale from '../actionBase/ActionNormale';

const ActionInitialiser = ({ nom = 'actionInitialiser', action = null }) => {
    return <ActionNormale nom={nom} icone={<ClearOutlined />} action={action} />;
};

export default ActionInitialiser;
