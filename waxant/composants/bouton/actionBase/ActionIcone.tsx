import useHasRight from '../../../noyau/auth/useHasRight';
import BoutonIcone, { BoutonIconeProps } from '../boutonBase/BoutonIcone';

const ActionIcone = (props: BoutonIconeProps) => {
    const hasRight = useHasRight(props.nom);
    return <BoutonIcone {...props} visible={hasRight} />;
};

export default ActionIcone;
