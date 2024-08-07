import { BoutonProps } from './Bouton';
import BoutonPleinNeutre from './BoutonPleinNeutre';
import BoutonPleinPrimaire from './BoutonPleinPrimaire';
import BoutonPleinSecondaire from './BoutonPleinSecondaire';

const BoutonPlein = (props: BoutonProps) => {
    if (props.inactif) {
        return <BoutonPleinNeutre {...props} />;
    } else if (props.couleur === 'secondaire') {
        return <BoutonPleinSecondaire {...props} />;
    } else {
        return <BoutonPleinPrimaire {...props} />;
    }
};

export default BoutonPlein;
