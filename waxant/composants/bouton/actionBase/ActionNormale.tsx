import useHasRight from '../../../noyau/auth/useHasRight';
import BoutonContourPrimaire from '../boutonBase/BoutonContourPrimaire';

const ActionNormale = (props) => {
    const hasRight = useHasRight(props.nom);
    return <BoutonContourPrimaire {...props} visible={hasRight} />;
};

export default ActionNormale;
