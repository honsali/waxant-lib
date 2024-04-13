import { EditOutlined } from '@ant-design/icons';
import ActionForte from '../actionBase/ActionForte';

const ActionModifier = ({ typeEntite, action }) => {
    return <ActionForte nom={'modifier.' + typeEntite} icone={<EditOutlined />} action={action} />;
};

export default ActionModifier;
