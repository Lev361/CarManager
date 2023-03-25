import express, { Request, Response } from 'express';
import { VehicleService } from '../services/vehicle-service/vehicle-service';

export class VehicleController {
  private readonly vehicleService: VehicleService
  public async create(req: Request, res: Response): Promise<Response>{
    try{
      const data = req.body

      if(!data){
        return res.status(204).json({ error: 'Body is requered!!' }) 
      }

      const result  = await this.vehicleService.create(data)

      return res.status(201).json({ id: result.id })
    } catch (err) {
      res.status(500).send({ error: err.toString() })
    }
  }
}