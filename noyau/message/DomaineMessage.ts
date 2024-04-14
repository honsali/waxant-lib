export interface IInfoActionEchouee {
    code?: string;
    erreur?: string;
    listeErreurServeur?: IErreurServeur[];
    listeErreurDirecte?: string[];
}

export interface IErreurServeur {
    code?: string;
    severity?: string;
    params?: [];
    args?: [];
    data?: any;
    libelle?: string;
}

export interface IMessageErreur {
    titre?: string;
    sousTitre?: string;
    listeErreur?: string[];
}

export interface IInfoActionReussie {
    key: string;
    id?: number;
    name?: string;
    data?: any;
    type?: string;
}
