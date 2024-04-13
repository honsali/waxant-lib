import useHasRight from '../../../noyau/auth/useHasRight';
import BoutonOnglet from '../boutonBase/BoutonOnglet';

const ActionOnglet = (props) => {
    const hasRight = useHasRight(props.nom);
    return <BoutonOnglet {...props} visible={hasRight} />;
};

export default ActionOnglet;
