import Job from '../models/JobModel.js';
import {StatusCodes} from "http-status-codes";
import {NotFoundError} from "../errors/customErrors.js";

export const getAllJobs = async (req, res) => {
    console.log(req);
    const jobs = await Job.find({createdBy: req.user.userId});
    res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
    req.body.createdBy = req.user.userId
    const {company, position} = req.body;
    const job = await Job.create({company, position});
    res.status(StatusCodes.CREATED).json({job});
};

export const getJob = async (req, res) => {
    const job = await Job.findById(req.params.id);
    if (!job) throw new NotFoundError(`no job with id : ${id}`);

    res.status(StatusCodes.OK).json({job});
};

export const updateJob = async (req, res) => {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!updatedJob) throw new NotFoundError(`no job with id ${id}`)

    res.status(StatusCodes.OK).json({job: updatedJob});
};
export const deleteJob = async (req, res) => {
    const removedJob = await Job.findByIdAndDelete(req.params.id);
    if (!removedJob) throw new NotFoundError(`no job with id ${id}`)
    res.status(StatusCodes.OK).json({job: removedJob});
};