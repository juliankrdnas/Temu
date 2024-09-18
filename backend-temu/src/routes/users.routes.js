import { Router } from "express";
import { loginUser, loginUserPlatform, sendVerificationCode, updatePassword, sendVerificationCodeSMS, loginWithPhoneNumber } from "../controllers/users.controller.js";

const router = Router();

router.post('/users/login', loginUser);
router.post('/users/login/platform', loginUserPlatform);
router.post('/users/send-verificaction-code', sendVerificationCode);
router.post('/users/update-password', updatePassword);
router.post('/users/send-verification-code-sms', sendVerificationCodeSMS);
router.post('/users/login-with-phone', loginWithPhoneNumber);

export default router;