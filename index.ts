import * as alicloud from "@pulumi/alicloud";

// Create an AWS resource (S3 Bucket)
const service = new alicloud.fc.Service('qianfeng-pulumi-local-demo-and-one', {
  name: 'qianfeng-pulumi-local-demo-and-one',
});

// Export the name of the bucket
export const serviceName = service.id;
