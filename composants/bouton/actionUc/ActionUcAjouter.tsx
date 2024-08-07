import { PlusCircleFilled } from '@ant-design/icons';
import { BoutonProps } from '../boutonBase/Bouton';
import ActionUcForte from './ActionUcForte';

const ActionUcAjouter = (props: BoutonProps) => {
    return <ActionUcForte nom="ajouter" icone={<PlusCircleFilled />} {...props} />;
};

export default ActionUcAjouter;
