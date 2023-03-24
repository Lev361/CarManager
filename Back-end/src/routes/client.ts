import { ClientController } from './../controllers/ClientController';

import { Router } from 'express'

const controller = new  ClientController()

export const routerClient = Router();

routerClient.post('/client/signup', async (req, res) => {
  return  await controller.create(req, res)
})