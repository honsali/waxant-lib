import { Menu } from 'antd';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link, useLocation } from 'react-router-dom';
import { selectRole, useContexteApp, useI18n } from 'waxant';
import { ModuleDefinition } from 'waxant/noyau/routes/ModuleDefinition';

const MenuModule = ({ ouvert }) => {
    const { i18n } = useI18n();
    const config = useContexteApp();
    const role = useSelector(selectRole);
    const params = useParams();
    const location = useLocation();

    const listeElementMenu = (listeModule: ModuleDefinition[]) => {
        const selected = [];
        const opened = [];
        const pageToElementMenu = (page, children?) => {
            const path = page.toPath(params);
            const disabled = path.indexOf('undefined') > -1;
            if (location.pathname.indexOf(path) > -1) {
                opened.push(page.menu);
                if (location.pathname === path) {
                    selected.push(page.menu);
                }
            }

            return {
                key: page.menu,
                label: <Link to={disabled ? '#' : path}>{i18n(page.key)}</Link>,
                icon: page.icone,
                disabled,
                children,
            };
        };

        const parse = () => {
            return listeModule?.map((module) => {
                if (module.index.menu) {
                    if (module.listeSousModule?.length) {
                        return pageToElementMenu(
                            module.index,
                            module.listeSousModule.map((sousModule) => sousModule.index.menu && pageToElementMenu(sousModule.index))
                        );
                    }
                    return pageToElementMenu(module.index);
                }
            });
        };

        return { items: parse()?.filter(Boolean), selected, opened };
    };

    const getMenu = useCallback(() => {
        const { items, selected, opened } = listeElementMenu(config.mapDomaine[role]?.listeModule);
        if (ouvert) {
            return <Menu items={items} mode="inline" theme="dark" openKeys={opened} selectedKeys={selected} />;
        } else {
            return <Menu items={items} mode="inline" theme="dark" defaultOpenKeys={opened} selectedKeys={selected} />;
        }
    }, [role, location, ouvert]);

    return getMenu();
};

export default MenuModule;
