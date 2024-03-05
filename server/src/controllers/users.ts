import {NextFunction, Request, Response} from 'express';
import UserModel from '../models/user';
import {TokenData, UserDocument} from "../types/user.interface";
import {Error} from "mongoose";
import jwt from 'jsonwebtoken';
import {jwtSecretKey} from "../config";
import {ExpressRequestInterface} from "../types/expressRequest.interface";

const normalizeUser = (user: UserDocument) => {
    const data: TokenData = {id: user.id, email: user.email};
    const token = jwt.sign(data, jwtSecretKey);
    return {
        email: user.email,
        username: user.username,
        id: user.id,
        token
    };
};

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newUser = new UserModel({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });
        const savedUser = await newUser.save();
        res.send(normalizeUser(savedUser));
    } catch (error) {
        if (error instanceof Error.ValidationError) {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json(messages);
        }
        next(error);
    }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const errors = {emailOrPassword: 'Invalid email or password'};
        const user = await UserModel.findOne({email: req.body.email}).select('+password');

        if (!user) {
            return res.status(400).json(errors);
        }

        const isPasswordEqual = await user.validatePassword(req.body.password);

        if (!isPasswordEqual) {
            return res.status(400).json(errors);
        }

        res.send(normalizeUser(user));
    } catch (error) {
        next(error);
    }
};

export const currentUser = (req: ExpressRequestInterface, res: Response) => {
    if (!req.user) {
        return res.sendStatus(401);
    }
    res.send(normalizeUser(req.user));
}