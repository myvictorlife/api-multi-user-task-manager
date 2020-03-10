const express = require('express')
const router = express.Router()

const authMiddleware = require('../middlewares/auth')

const Project = require('../models/project')
const Task = require('../models/task')

router.use(authMiddleware)

router.get('/user-projects', async (req, res) => {
    try {
        const projects = await Project.find({ user: { _id: req.userId } }).populate(['user', 'tasks'])
        return res.send({ projects })
    } catch(err) {
        console.log(err)
        return res.send({ error : 'Error loading project' })
    }
})

router.get('/:projectId', async (req, res) => {
    try {
        const projects = await Project.findById(req.params.projectId).populate(['user', 'tasks'])
        return res.send({ projects })
    } catch(err) {
        console.log(err)
        return res.send({ error : 'Error loading project' })
    }
})

router.get('/', async (req, res) => {
    try {
        const project = await Project.find().populate(['user', 'tasks'])
        return res.send({ project })
    } catch(err) {
        console.log(err)
        return res.send({ error : 'Error loading project' })
    }
})

router.post('/', async (req, res) => {
    try {
        const { title, description, status, tasks } = req.body 

        const project = await Project.create({ title, description, status, user: req.userId})

        if(tasks){
            await Promise.all(
                tasks.map(
                    async task => {
                        console.log(task)
                        const projectTask = new Task({ ...task, project: project._id })
                        await projectTask.save();
                        project.tasks.push(projectTask)
                    }
                )
            );
        } else {
            tasks = []
        }

        await project.save();

        return res.send({ project })
    } catch(err) {
        console.log(err)
        return res.send({ error : 'Error creating new project' })
    }
})

router.put('/:projectId', async (req, res) => {
    try {
        const { title, description, tasks } = req.body 

        const project = await Project.findByIdAndUpdate(req.params.projectId , { title, description}, { new: true })

        project.tasks = [];
        await Task.remove({ project: project._id });
        console.log('project', project)
        await Promise.all(
            tasks.map(
                async task => {
                    console.log(task)
                    const projectTask = new Task({ ...task, project: project._id })
                    await projectTask.save();
                    project.tasks.push(projectTask)
                }
            )
        );

        await project.save();

        return res.send({ project })
    } catch(err) {
        console.log(err)
        return res.send({ error : 'Error creating new project' })
    }
})

router.delete('/:projectId', async (req, res) => {
    try {
        await Project.findByIdAndRemove(req.params.projectId)
        return res.send()
    } catch(err) {
        console.log(err)
        return res.send({ error : 'Error loading project' })
    }
})

module.exports = app => app.use('/projects', router)