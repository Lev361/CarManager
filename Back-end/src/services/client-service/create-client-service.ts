export type clientType = {
  cpf: string
  password: string
}
export type clientStoreType = {
  id: number;
  cpf: string;
  password: string;
}

export class CreateClientService {
 private  store: clientStoreType[];
  constructor(){
    this.store = []
  }

  async execute(client: clientType): Promise<clientStoreType> {
    const isExists = this.store.find((client) => client?.cpf === client.cpf);

    if(isExists) {
      throw new Error('This Client Alerdy exists!!')
    }

    const clientBuild = {
      id: this.store.length,
      ...client
    }

    this.store.push(clientBuild)
    return clientBuild
  }

}
