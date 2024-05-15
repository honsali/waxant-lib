import useHasRight from 'waxant/noyau/auth/useHasRight';
import useContexteView from 'waxant/noyau/contexte/ContexteView';
import { BoutonProps } from '../boutonBase/Bouton';
import BoutonContourPrimaire from '../boutonBase/BoutonContourPrimaire';
const ActionUcNormale = (props: BoutonProps) => {
    const { uc } = useContexteView();
    const nom = uc + '.action.' + props.nom;
    const hasRight = useHasRight(nom);
    return <BoutonContourPrimaire {...props} visible={hasRight} />;
};

export default ActionUcNormale;
