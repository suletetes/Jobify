import {Router} from 'express';

const router = Router();

import upload from '../middleware/multerMiddleware.js';
import {
    getCurrentUser,
    getApplicationStats,
    updateUser,
} from '../controllers/userController.js';

router.get('/current-user', getCurrentUser);
router.get('/admin/app-stats', getApplicationStats);

router.patch(
    '/update-user',
    upload.single('avatar'),
    validateUpdateUserInput,
    updateUser
);
export default router;

