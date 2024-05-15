import useHasRight from 'waxant/noyau/auth/useHasRight';
import useContexteView from 'waxant/noyau/contexte/ContexteView';
import { BoutonProps } from '../boutonBase/Bouton';
import BoutonPleinPrimaire from '../boutonBase/BoutonPleinPrimaire';

const ActionGoToPageForte = (props: BoutonProps) => {
    const { uc } = useContexteView();
    const hasRight = useHasRight(uc + '.action.' + props.nom);
    return <BoutonPleinPrimaire visible={hasRight} {...props} nom={uc + '.action.' + props.nom} />;
};

export default ActionGoToPageForte;
