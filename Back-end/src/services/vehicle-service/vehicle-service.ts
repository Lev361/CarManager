export type vehicleType = {
  placa: string
  renavam: number
  cor: string
  potency: number
  model: string
  marca: string
}

export type vehicleStoreType = {
  id: number;
  renavam: number
  cor: string
  potency: number
  model: string
  marca: string
}

export class VehicleService {
  private store: vehicleStoreType[];
  constructor(){
    this.store = []
  }

  public async create(vehicle: vehicleType): Promise<vehicleStoreType>{
    const isExists = this.store.find((vehicle) => vehicle.id === vehicle.id);

    if(isExists){
      throw new Error('This Vehicle Already exists!')
    }

    const vehicleBuild = {
      id: this.store.length,
      ...vehicle
    }

    this.store.push(vehicleBuild)
    return vehicleBuild
  }
}