import { Construct, Stack, StackProps } from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';

export interface LambdaFunctionsBucketProps extends StackProps {
  baseDomainName: string;
}

export class LambdaFunctionsBucket extends Stack {

  readonly bucket: s3.IBucket;

  constructor(scope: Construct, id: string, props: LambdaFunctionsBucketProps) {
    super(scope, id, props);

    this.bucket = new s3.Bucket(this, 'LambdaFunctionsBucket', {
      bucketName: `${props.baseDomainName}.lambda-functions`,
    });
  }
}

