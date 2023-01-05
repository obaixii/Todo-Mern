import mongoose, { now } from "mongoose";
const { Schema } = mongoose

const simsSchema = new Schema({
    // NOT APPLICABLE UNTIL VERFIED BY SIR
    image: {
        data: Buffer,
        contentType: String
    },
    // REGISTRATION NUMBER SCHEMA/VALIDATION
    Registration: {
        type: Number,
    },
    // COURSE SCHEMA/VALIDATION
    courseName: {
        type: String,
        required: [true, "Please Provide the Full Name"]
    },
    // FULLNAME SCHEMA/VALIDATION
    fullname: {
        type: String,
        required: [true, "Please Provide the Full Name"]
    },
    // FATHER/GUARDIAN NAME SCHEMA/VALIDATION
    FatherName: {
        type: String,
        required: [true, "Please Provide the Father/Gaurdian Name "]
    },
    // POSTAL ADRESS NUMBER SCHEMA/VALIDATION
    PostalAddress: {
        type: String,
        required: [true, "Please Provide the Father/Gaurdian Name "]
    },
    // DATE OF BIRTH SCHEMA/VALIDATION
    DOB: {
        type: {
            day: {
                type: Number
            },
            month: {
                type: Number
            },
            year: {
                type: Number
            }
        },
        required: [true, "Please Provide Date of Birth"]
    },
    // GENDER SCHEMA/VALIDATION
    Gender: {
        type: String,
        required: [true, "Please Select Gender"]
    },
    // CNIC NUMBER SCHEMA/VALIDATION
    CNIC: {
        type: Number,
        minLength: [15, "Please provide Valid CNIC number"],
        required: [true, "Please Provide Valid CNIC"]
    },
    // REGISTRATION NUMBER SCHEMA/VALIDATION
    PhoneNumber: {
        type: Number,
        minLength: [15, "Please provide Valid CNIC number"],
        required: [true, "Please Provide Date of Birth"]
    },
    // EMAIL ADRESS NUMBER SCHEMA/VALIDATION
    EmailAddress: {
        type: String,
        required: [true, "Please Provide Email"]
    }
})