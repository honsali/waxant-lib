import { FilterOutlined } from '@ant-design/icons';
import ActionForte from '../actionBase/ActionForte';

const ActionFiltrer = ({ action, typeEntite }) => {
    return <ActionForte nom={'filtrer.' + typeEntite} icone={<FilterOutlined />} action={action} />;
};

export default ActionFiltrer;
