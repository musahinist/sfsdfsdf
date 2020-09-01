import { Document, PassportLocalDocument } from 'mongoose';

export interface ITeacher extends PassportLocalDocument {
    readonly id?: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
    readonly major: string;
}
