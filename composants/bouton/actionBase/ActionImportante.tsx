import useHasRight from '../../../noyau/auth/useHasRight';
import BoutonContourSecondaire from '../boutonBase/BoutonContourSecondaire';

const ActionImportante = (props) => {
    const hasRight = useHasRight(props.nom);
    return <BoutonContourSecondaire {...props} visible={hasRight} />;
};

export default ActionImportante;
