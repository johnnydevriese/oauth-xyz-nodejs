import * as mongoose from 'mongoose';

export const ClientSchema = new mongoose.Schema({
  handle: String,
  name: String,
  uri: String,
  logo_uri: String
});

export const ClientModel = mongoose.model('Client', ClientSchema);

export class ClientRequest {
  handle: String;
  name: String;
  uri: String;
  logo_uri: String;

  constructor(Obj: any) {
    this.name = Obj.name;
    this.uri = Obj.uri;
    this.logo_uri = Obj.logo_uri;
  }

  public toSchema() {
    var client = new ClientModel({
      name: this.name,
      uri: this.uri,
      logo_uri: this.logo_uri
    });

    return client;
  }
}