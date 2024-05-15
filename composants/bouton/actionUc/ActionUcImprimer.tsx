import { PrinterOutlined } from '@ant-design/icons';
import useHasRight from 'waxant/noyau/auth/useHasRight';
import useContexteView from 'waxant/noyau/contexte/ContexteView';
import { BoutonProps } from '../boutonBase/Bouton';
import BoutonContourPrimaire from '../boutonBase/BoutonContourPrimaire';
const ActionUcImprimer = (props: BoutonProps) => {
    const { uc } = useContexteView();
    const nom = uc + '.action.imprimer' + props.nom;
    const hasRight = useHasRight(nom);
    return <BoutonContourPrimaire {...props} icone={<PrinterOutlined />} visible={hasRight} />;
};

export default ActionUcImprimer;
