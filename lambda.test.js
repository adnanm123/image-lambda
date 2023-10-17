const { handler } = require('./index'); // Import your Lambda function
const AWS = require('aws-sdk-mock');

describe('Lambda Function Test', () => {
  it('should handle an S3 event and update images.json', async () => {
    // Mock the S3 getObject and putObject methods
    AWS.mock('S3', 'getObject', (params, callback) => {
      // Return an empty images.json or any initial state you want to test
      const data = {
        Body: JSON.stringify([]),
      };
      callback(null, data);
    });

    AWS.mock('S3', 'putObject', (params, callback) => {
      callback(null, {});
    });

    const event = {
      Records: [
        {
          s3: {
            bucket: {
              name: 'your-test-bucket', // Replace with your test bucket name
            },
            object: {
              key: 'test-image.jpg', // Replace with a test object key
              size: 12345, // Replace with a test object size
              contentType: 'image/jpeg', // Replace with a test content type
            },
          },
        },
      ],
    };

    const response = await handler(event);
    const responseBody = JSON.parse(response.body);

    // Perform assertions here to validate the response or other expectations
    expect(response.statusCode).toBe(200);
    expect(responseBody).toBe('Image processing complete');

    // Restore the original S3 methods
    AWS.restore('S3', 'getObject');
    AWS.restore('S3', 'putObject');
  });
});
