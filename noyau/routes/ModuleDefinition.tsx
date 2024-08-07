import { Reducer } from 'redux';
import { PageDefinition } from './PageDefinition';

export interface ModuleDefinition {
    key: string;
    mapI18N?: Record<string, string>;
    listePage?: PageDefinition[];
    listeSousModule?: ModuleDefinition[];
    reducer?: Record<string, Reducer>;
    index?: PageDefinition;
}
