import { PlusCircleFilled } from '@ant-design/icons';
import ActionForte from '../actionBase/ActionForte';

const ActionCreer = ({ action, typeEntite }) => {
    return <ActionForte nom={'creer.' + typeEntite} icone={<PlusCircleFilled />} action={action} />;
};

export default ActionCreer;
