//cSpell: disable
const {
    signUpController,
    resetPasswordRequestController,
    resetPasswordController,
  } = require("../controllers/auth.controller");
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller')
const verificarToken = require('../middleware/auth');


router.post('/register', usuarioController.registroUsuario);
router.post('/login', usuarioController.loginUsuario);
router.get('/listar-usuario',  verificarToken, usuarioController.consultarUsuario);

router.post("/auth/signup", signUpController);
router.post("/auth/requestResetPassword", resetPasswordRequestController);
router.post("/auth/resetPassword", resetPasswordController);

module.exports = router;