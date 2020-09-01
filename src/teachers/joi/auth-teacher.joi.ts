import { object, string, ObjectSchema } from '@hapi/joi';

/*
* When our users sign-up and login, we will want to make sure that their credentials
* conform to our standards for emails and passwords.
* This is where joi comes in. This is a package for validating our models.
*/
export const authUserSchema: ObjectSchema = object({
    email: string().email().required(),
    password: string().alphanum().min(6).max(36).required(),
});
