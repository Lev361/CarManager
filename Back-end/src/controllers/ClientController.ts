import express, { Request, Response } from 'express';
import { ClientService } from '../services/client-service/client-service'

export class ClientController {
	private readonly clientService: ClientService
	public async create(req: Request, res: Response): Promise<Response> {
		try {
			const data = req.body

			if (!data) {
				return res.status(204).json({ error: 'body is requered!!' })
			}

			const result = await this.clientService.create(data)

			return res.status(201).json({ id: result.id })
		} catch (err) {
			res.status(500).send({ error: err.toString()})
		}
	}
}