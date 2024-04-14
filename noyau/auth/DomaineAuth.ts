export interface IUser {
    username?: string;
    password?: string;
    roleList?: string[];
    token?: string;
    creationTime?: string;
    expiryTime?: string;
}
