import { RollbackOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import BoutonContourPrimaire from '../boutonBase/BoutonContourPrimaire';

const ActionRetour = ({ nom = 'retour', action = null, vers = null }) => {
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
    return <BoutonContourPrimaire nom={nom} icone={<RollbackOutlined />} action={actionRetour} />;
};

export default ActionRetour;
