import Dialogue from './Dialogue';

const DialogueConfirmation = (props) => {
    return <Dialogue {...props}>{props.children}</Dialogue>;
};

export default DialogueConfirmation;
