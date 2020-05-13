import { Construct } from '@aws-cdk/core';
import { Code, Function, Runtime } from '@aws-cdk/aws-lambda';
import * as s3 from '@aws-cdk/aws-s3';
import { LambdaFunction } from './constants';

export class ImportTweets extends Construct {

  #importTweets: Function;

  constructor(scope: Construct, id: string, props: {
    s3Bucket: s3.IBucket,
  }) {
    super(scope, id);

    this.#importTweets = new Function(this, 'import-tweets', {
      code: Code.fromBucket(props.s3Bucket, LambdaFunction.importTweets.s3Key),
      handler: '',
      runtime: Runtime.JAVA_11,
    });
  }
}
