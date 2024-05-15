import { PlusCircleFilled } from '@ant-design/icons';
import { BoutonProps } from '../boutonBase/Bouton';
import ActionGoToPageForte from './ActionGoToPageForte';

const ActionUcAjouter = (props: BoutonProps) => {
    return <ActionGoToPageForte nom="ajouter" icone={<PlusCircleFilled />} {...props} />;
};

export default ActionUcAjouter;
