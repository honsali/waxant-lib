import { Form } from 'antd';
import { useEffect } from 'react';

const useOnchange = (fieldName, form, process) => {
    const fieldValue = Form.useWatch(fieldName, form);

    useEffect(() => {
        process(form.getFieldValue(fieldName));
    }, [fieldValue, process]);
};

export default useOnchange;
