import { App } from '@aws-cdk/core';
import { DogEared } from '../lib/dog-eared';
import { LambdaFunctionsBucket } from '../lib/lambda-functions-bucket';

const baseDomainName = process.env.BASE_DOMAIN_NAME;
if (!baseDomainName) {
  throw new Error('BASE_DOMAIN_NAME should be specified.');
}

const app = new App();
const lambdaFunctionsBucket = new LambdaFunctionsBucket(app, 'LambdaFunctionsBucket', {
  baseDomainName,
});
new DogEared(app, 'DogEared', {
  lambdaFunctionBucket: lambdaFunctionsBucket.bucket,
});
