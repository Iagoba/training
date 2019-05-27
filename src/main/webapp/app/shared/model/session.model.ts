export interface ISession {
  id?: number;
  type?: string;
  desc?: string;
}

export class Session implements ISession {
  constructor(public id?: number, public type?: string, public desc?: string) {}
}
