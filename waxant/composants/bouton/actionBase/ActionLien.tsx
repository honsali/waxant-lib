import useHasRight from '../../../noyau/auth/useHasRight';
import BoutonLien from '../boutonBase/BoutonLien';

const ActionLien = (props) => {
    const hasRight = useHasRight(props.nom);
    return <BoutonLien {...props} visible={hasRight} />;
};

export default ActionLien;
