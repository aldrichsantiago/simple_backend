import moment from "moment";
import { User } from "../models/UserModel.js";


export async function register(req, res) {    
    const { first_name, last_name, middle_name, role, status, password, confirm_password } = req.body;
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

export async function login(req, res) {
    const { username, email, password } = req.body;
    res.send("Logged In Successfully");
}

export async function logout(req, res) {
    const { id } = req.body;

    res.send(id + " has been logged out");
}