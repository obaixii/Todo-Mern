import { Users } from "../model/userSchema.js"
import bcrypt from "bcrypt"

export const loginUser = async ( req, res, next) => {
    try {

        const { email, password } = req.body;

        // If email field is empty
        if (!email) {
            return next(new Error("Please Enter Email to login"))
        }
        // If password field is empty
        if (!password) {
            return next(new Error("Please Enter Password to login"))
        }

        // Checks if user exist in DB bases on email
        const user = await Users.findOne({ email })

        // If user doesn't exist return error
        if (!user) {
            return next(new Error("Email not Found, Please Enter Correct Email to login"))
        }

        // Checks if user entered correct password or not
        const isMatched = await bcrypt.compare(password,user.password)

        res.json({
            message:"Login successful"
        })
        // If Password is incorrect return error
        if(!isMatched){
            return next(new Error("Password not matched, Please Enter correct Password to login"))
        }

    } catch (error) {
        next(error)
    }
}
export const createUser = async (req, res, next) => {
    try {
        // Hashing Password before sending to DB
        const hash = await bcrypt.hash(req.body.password, 10);
        req.body.password = hash;
        const user = await Users.create(req.body);
        if (user) {
            res.json({
                message: 'new user has been created',
            })
        }
    }
    catch (error) {
        next(error)
    }
}

export const getAllUsers = async (req, res, next) => {
    const todos = await Users.find(req.body);
    res.json(todos);
};
export const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params
        const todo = await Users.findById(id);
        res.json(todo);
    } catch (error) {
        next(error)
    }
};
export const editUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const todo = await Users.findOneAndUpdate(req.body, id);
        res.json({
            message: "User has been Updated Successfully"
        });
    } catch (error) {
        next(error)
    }
};
export const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const todo = await Users.findOneAndDelete(id);
        res.json({
            message: "User has been Deleted Successfully"
        });
    } catch (error) {
        next(error)
    }
};

