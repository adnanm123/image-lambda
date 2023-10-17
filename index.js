import { S3 } from '@aws-sdk/client-s3';

const s3client = new S3({ region: 'us-west-2' });

export const handler = async (event) => {
  console.log('Lambda code is running!');
  const bucketName = event.Records[0].s3.bucket.name;
  const fileName = event.Records[0].s3.object.key;

  // Read images.json from S3
  const imagesJsonKey = 'images.json';
  let images = [];

  try {
    const imagesJsonResponse = await s3client.getObject({
      Bucket: bucketName,
      Key: imagesJsonKey,
    });

    const imagesJsonString = await imagesJsonResponse.Body.transformToString();
    images = JSON.parse(imagesJsonString);
  } catch (error) {
    // Handle the case where images.json doesn't exist yet
    console.log('images.json not found. Creating a new one.');
  }

  // Create or update the metadata for the uploaded image
  const metadata = {
    name: fileName,
    size: event.Records[0].s3.object.size,
    type: event.Records[0].s3.object.contentType,
  };

  const existingImageIndex = images.findIndex((image) => image.name === metadata.name);
  if (existingImageIndex !== -1) {
    images[existingImageIndex] = metadata;
  } else {
    images.push(metadata);
  }

  // Upload the updated images.json back to S3
  await s3client.putObject({
    Bucket: bucketName,
    Key: imagesJsonKey,
    Body: JSON.stringify(images),
  });

  console.log('Metadata updated for', fileName);

  const response = {
    statusCode: 200,
    body: JSON.stringify('Image processing complete'),
  };

  return response;
};
