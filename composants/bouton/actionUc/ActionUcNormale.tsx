import useHasRight from 'waxant/noyau/auth/useHasRight';
import useContexteView from 'waxant/noyau/contexte/ContexteView';
import { BoutonProps } from '../boutonBase/Bouton';
import BoutonSelonContexte from '../boutonBase/BoutonSelonContexte';

const ActionUcNormale = (props: BoutonProps) => {
    const { uc } = useContexteView();
    const nomAction = uc + '.action.' + (props.nom ? props.nom : props.page ? 'goto' + props.page.key : '') + (props.typeEntite ? props.typeEntite : '');

    const hasRight = useHasRight(nomAction);

    return <BoutonSelonContexte {...props} forme="contour" nom={nomAction} visible={hasRight} />;
};

export default ActionUcNormale;
