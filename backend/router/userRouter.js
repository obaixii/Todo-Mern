import express from "express";
import {
    createUser,
    getAllUsers,
    getUserById,
    editUser,
    deleteUser,
    loginUser
} from "../controller/AuthControllers.js";
import multer from 'multer';
import crypto from 'crypto';
import path from "path";

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
          crypto.pseudoRandomBytes(16, function (err, raw) {
            if (err) return cb(err)
            cb(null, file.originalname);
          })
    }
})

const upload = multer({ storage: storage })

const router = express.Router();

router.route('/new-user').post(upload.single("avatar"), createUser);
router.route('/login').post(loginUser)
router.route('/users').get(getAllUsers);
router.route('/user/:id').get(getUserById);
router.route('/edit-user/:id').put(editUser);
router.route('/delete-user/:id').delete(deleteUser);

export default router; 