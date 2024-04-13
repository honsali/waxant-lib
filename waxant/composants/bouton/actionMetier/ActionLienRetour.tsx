import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import ActionLien from '../actionBase/ActionLien';

const ActionLienRetour = ({ nom = 'retour', icone = null, action = null, vers = null }) => {
    const navigate = useNavigate();

    const actionRetour = () => {
        if (action) {
            action();
        } else if (vers) {
            navigate(vers);
        } else {
            navigate(-1);
        }
    };
    return <ActionLien nom={nom} icone={icone ? icone : <LeftOutlined />} action={actionRetour} />;
};

export default ActionLienRetour;
