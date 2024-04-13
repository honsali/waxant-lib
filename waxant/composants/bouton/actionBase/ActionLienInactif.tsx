import BoutonLien from '../boutonBase/BoutonLien';

const ActionLienInactif = (props) => {
    return <BoutonLien {...props} inactif={true} />;
};

export default ActionLienInactif;
