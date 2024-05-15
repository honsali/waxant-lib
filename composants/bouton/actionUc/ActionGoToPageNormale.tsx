import useHasRight from 'waxant/noyau/auth/useHasRight';
import useContexteView from 'waxant/noyau/contexte/ContexteView';
import { BoutonProps } from '../boutonBase/Bouton';
import BoutonContourPrimaire from '../boutonBase/BoutonContourPrimaire';

const ActionGoToPageNormale = (props: BoutonProps) => {
    const { uc } = useContexteView();
    const hasRight = useHasRight(uc + '.action.' + props.nom);
    return <BoutonContourPrimaire visible={hasRight} {...props} nom={uc + '.action.' + props.nom} />;
};

export default ActionGoToPageNormale;
