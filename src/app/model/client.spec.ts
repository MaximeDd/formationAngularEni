import {Client} from './client';

describe('CapitalizePipe', () => {

  beforeEach(() => {
  });

  it('doit créer un client', () => {
    const client = new Client();
    expect(client).toBeTruthy();
  });

  it('doit contenir un tableau de compte vide', () => {
    const client = new Client();
    expect(client.comptes).toBeTruthy();
    expect(client.comptes.length).toEqual(0);
  });

});
