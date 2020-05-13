import { Construct, Stack, StackProps } from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import { DynamodbTables } from './dynamodb-tables';
import { ImportTweets } from './import-tweets';

export interface DogEaredProps extends StackProps {

  lambdaFunctionBucket: s3.IBucket;

}

export class DogEared extends Stack {
  constructor(scope: Construct, id: string, props: DogEaredProps) {
    super(scope, id, props);

    const dynamoDBTables = new DynamodbTables(this, 'dynamodb-tables');
    const importTweetsFunction = new ImportTweets(this, 'import-tweets', {
      s3Bucket: props.lambdaFunctionBucket,
    });
  }
}
