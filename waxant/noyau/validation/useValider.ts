import { IInfoActionEchouee } from '../message/DomaineMessage';
import { MdlMessage } from '../message/MdlMessage';

const useValider = (form, dispatch, action) => {
    form.validateFields()
        .then(() => {
            action();
        })
        .catch((errorInfo) => {
            const messageErreur: IInfoActionEchouee = { code: 'error.validation.form' };
            messageErreur.listeErreurDirecte = errorInfo.errorFields.map((err) => {
                return err.errors[0];
            });
            if (dispatch) {
                dispatch(MdlMessage.setInfoActionEchouee(messageErreur));
            }
        });
};

export default useValider;
