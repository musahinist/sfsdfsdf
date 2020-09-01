import * as mongoose from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';

export const TeacherSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    major: String,
    email: String,
    password: String,
});

// Passport-Local Mongoose will add a username, hash and salt field to store the username,
// the hashed password and the salt value.
// This allows for us to have an already configured setup of hashing our passwords for MongoDB.
TeacherSchema.plugin(passportLocalMongoose);
