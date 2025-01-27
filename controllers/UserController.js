import moment from "moment";
import { User } from "../models/UserModel.js";

export async function getUsers(req, res) {
    try {
        const users = await User.findAll({
            attributes: ['id', 'first_name', 'last_name', 'middle_name', 'created_at', 'updated_at'],
        });
        res.send(users);
    } catch (error) {
        console.log(error);
        res.status(422).json({message: "Unprocessable Content"})
    }  
}

export async function getUserById(req, res) {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id,{
            attributes: ['id', 'first_name', 'last_name', 'middle_name', 'created_at', 'updated_at'],
        });
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(422).json({message: "Unprocessable Content"})
    }
}

export async function createUser(req, res) {
    try {
        const { first_name, last_name, middle_name, role_id, status } = req.body;
        const user = await User.create(
            {
                first_name: first_name,
                last_name: last_name,
                middle_name: middle_name,
                role_id: role_id,
                status: status,
                created_at: moment()
            },
    );
    res.send(user);
    } catch (error) {
        console.log(error);
        res.status(422).json({message: "Unprocessable Content"})
    }    
}

export async function updateUser(req, res) {
    try {
        const { first_name, last_name, middle_name } = req.body;
        const user = await User.update(
            {
                first_name: first_name,
                last_name: last_name,
                middle_name: middle_name,
                updated_at: moment()
            },
        );
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(422).json({message: "Unprocessable Content"})
    }
}

export async function deleteUser(req, res) {
    try {
        const { first_name, last_name, middle_name } = req.body;
        const user = await User.update(
            {
                first_name: first_name,
                last_name: last_name,
                middle_name: middle_name,
                deleted_at: moment()
            },
        );
        res.send(user); 
    } catch (error) {
        console.log(error);
        res.status(422).json({message: "Unprocessable Content"})
    }
}