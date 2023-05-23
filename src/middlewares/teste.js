import { loginDataFormat, userDataFormat } from "../schemas/authSc.js";

export const validateNewUserData = (req, res, next) => {

const { error } = userDataFormat.validate(req.body);
}