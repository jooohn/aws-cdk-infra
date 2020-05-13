import { AttributeType, Table } from '@aws-cdk/aws-dynamodb';
import { Construct } from '@aws-cdk/core';

export class DynamodbTables extends Construct {

  #users: Table;

  #books: Table;

  constructor(scope: Construct, id: string, props?: {}) {
    super(scope, id);

    this.#users = new Table(this, 'dog-eared-users', {
      partitionKey: {
        name: 'Id',
        type: AttributeType.STRING,
      },
      sortKey: {
        name: 'Type',
        type: AttributeType.STRING,
      },
      readCapacity: 1,
      writeCapacity: 1,
    });

    this.#books = new Table(this, 'dog-eared-books', {
      partitionKey: {
        name: 'Id',
        type: AttributeType.STRING,
      },
      sortKey: {
        name: 'Type',
        type: AttributeType.STRING,
      },
      readCapacity: 2,
      writeCapacity: 2,
    });
  }

}
