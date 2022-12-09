export interface User{
    displayName: string,
    email: string,
    photoUrl: string,
    _id:string;
    inviteList: User[];
    createdAt: number;
}

