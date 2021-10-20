import { getRepository } from "typeorm";
import { tasks } from "../entity/tasks";
import { Request, Response } from "express";
import { request } from "http";


export const getTasks = async (request:Request, response:Response) =>{
    const Local_tasks = await getRepository(tasks).find()
    return response.json(Local_tasks)
};

export const getTask = async (request:Request, response:Response) =>{
    const { id } = request.params
    const task = await getRepository(tasks).findOne(id)
    return response.json(task) 
};
export const saveTask = async (request:Request, response:Response) =>{
    const task = await getRepository(tasks).save(request.body)
    return response.json(task)
};

export const updateTask = async (request:Request, response:Response) =>{
    const { id } = request.params

    const task = await getRepository(tasks).update(id, request.body)

    if(task.affected === 1){
        const taskUpdated = await getRepository(tasks).findOne(id)
        return response.json(taskUpdated)
    }
    return response.status(404).json({mesage: "Task not found"})
}
export const finishedTask = async (request:Request, response:Response) =>{
    const { id } = request.params

    const task = await getRepository(tasks).update(id, 
    {
        finished : true
    
    })

    if(task.affected === 1){
        const taskUpdated = await getRepository(tasks).findOne(id)
        return response.json({mesage: "Task finished"})
    }
    return response.status(404).json({mesage: "Task not found"})
}