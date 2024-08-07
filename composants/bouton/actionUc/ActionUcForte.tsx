import useHasRight from 'waxant/noyau/auth/useHasRight';
import useContexteView from 'waxant/noyau/contexte/ContexteView';
import { BoutonProps } from '../boutonBase/Bouton';
import BoutonSelonContexte from '../boutonBase/BoutonSelonContexte';

const ActionUcForte = (props: BoutonProps) => {
    const { uc } = useContexteView();
    const nomAction = uc + '.action.' + props.nom + (props.typeEntite ? '.' + props.typeEntite : '');
    const hasRight = useHasRight(nomAction);

    return <BoutonSelonContexte {...props} nom={nomAction} visible={hasRight} />;
};

export default ActionUcForte;
