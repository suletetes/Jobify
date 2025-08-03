import {Router} from 'express';
import {validateIdParam, validateJobInput} from '../middleware/validationMiddleware.js';

const router = Router();

import {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
} from '../controllers/jobController.js';

// router.get('/', getAllJobs);
// router.post('/', createJob);

router.route('/').get(getAllJobs).post(validateJobInput, createJob);
router
    .route('/:id')
    .get(validateIdParam, getJob)
    .patch(validateJobInput, validateIdParam, updateJob)
    .delete(validateIdParam, deleteJob);


export default router;
