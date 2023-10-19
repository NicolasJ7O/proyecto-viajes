import {Entity, model, property} from '@loopback/repository';

@model()
export class Arista extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  origen: string;

  @property({
    type: 'string',
    required: true,
  })
  destino: string;

  @property({
    type: 'string',
    required: true,
  })
  peso: string;


  constructor(data?: Partial<Arista>) {
    super(data);
  }
}

export interface AristaRelations {
  // describe navigational properties here
}

export type AristaWithRelations = Arista & AristaRelations;
