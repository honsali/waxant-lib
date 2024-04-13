import { Button, Result } from 'antd';

export default function PageNotFound() {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Page introuvable"
            extra={
                <Button type="primary">
                    <a href="/">Accueil</a>
                </Button>
            }
        />
    );
}
