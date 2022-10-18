const {Router} = require('express');
const {check} = require('express-validator')

const {createUser,loginUser,revalidarToken} = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();
 
router.post('/new',[
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de 6 caracteres').isLength({ min:6 })
], createUser )

router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de 6 caracteres').isLength({ min:6 })
], loginUser )

router.get('/renew', validarJWT, revalidarToken)
 


module.exports = router;