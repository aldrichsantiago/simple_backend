import moment from "moment";
import { User } from "../models/UserModel.js";

export async function getUsers(req, res) {
    const users = await User.findAll({
        attributes: ['id', 'first_name', 'last_name', 'middle_name', 'created_at', 'updated_at'],
    });
    res.send(users);
}
export async function getUserById(req, res) {
    const id = req.params.id;
    const user = await User.findByPk(id,{
        attributes: ['id', 'first_name', 'last_name', 'middle_name', 'created_at', 'updated_at'],
    });
    res.send(user);
}

export async function createUser(req, res) {    
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
}
export async function updateUser(req, res) {
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
}

export async function deleteUser(req, res) {
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
}