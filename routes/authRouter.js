import {Router} from 'express';
import {register, login} from '../controllers/authController.js';
import {authorizePermissions} from '../middleware/authMiddleware.js';

import {validateLoginInput} from '../middleware/validationMiddleware.js';

const router = Router();


router.post('/register', register);
router.post('/login', validateLoginInput, login);


router.get('/admin/app-stats', [
    authorizePermissions('admin'),
    getApplicationStats,
]);

export default router;