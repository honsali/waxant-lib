import useHasRight from 'waxant/noyau/auth/useHasRight';
import useContexteView from 'waxant/noyau/contexte/ContexteView';
import { BoutonProps } from '../boutonBase/Bouton';
import BoutonLien from '../boutonBase/BoutonLien';

const ActionUcLien = (props: BoutonProps) => {
    const { uc } = useContexteView();
    const nomAction = uc + '.action.' + (props.nom ? props.nom : props.page ? 'goto' + props.page.key : '') + (props.typeEntite ? props.typeEntite : '');

    const hasRight = useHasRight(nomAction);

    return <BoutonLien {...props} nom={nomAction} visible={hasRight} />;
};

export default ActionUcLien;
