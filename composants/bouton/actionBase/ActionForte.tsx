import useHasRight from '../../../noyau/auth/useHasRight';
import BoutonPleinPrimaire from '../boutonBase/BoutonPleinPrimaire';

const ActionForte = (props) => {
    const hasRight = useHasRight(props.nom);
    return <BoutonPleinPrimaire {...props} visible={hasRight} />;
};

export default ActionForte;
