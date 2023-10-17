# AWS Lambda Function - Image Processing

## Overview

This AWS Lambda function is designed to automatically process image uploads to an S3 bucket. It will update an `images.json` file with metadata about each uploaded image. If the `images.json` file does not exist, it will be created.

## How to Use

To use this Lambda function, follow these steps:

1. **Create an S3 Bucket with Public Read Permissions**:
   - Create an S3 bucket in your AWS account.
   - Configure the bucket to allow public read permissions. This ensures that the Lambda function can access and update the `images.json` file.

2. **Configure S3 Bucket Trigger**:
   - Configure the S3 bucket to trigger this Lambda function when images are uploaded. This enables the Lambda function to automatically process new uploads.

3. **Deploy the Lambda Function**:
   - Deploy the Lambda function code to your AWS account. Ensure that it is properly configured to work in your chosen region and with the necessary permissions.

4. **IAM Permissions**:
   - Ensure the Lambda function has the required IAM (Identity and Access Management) permissions to read and write to the S3 bucket. These permissions are necessary for the Lambda function to interact with S3.

5. **Test and Monitor**:
   - After a successful deployment, the Lambda function will be automatically triggered when images are uploaded to the S3 bucket. Test the functionality and monitor its performance as needed.

## Issues Encountered

During the development and deployment of this Lambda function, I encountered the following issues:

- **Issue 1: Bucket Permissions**
  - **Description**: When initially setting up the S3 bucket, I encountered issues with configuring the correct permissions. I needed to ensure that the bucket had public read permissions so that the Lambda function could access and update the `images.json` file.
  - **Resolution**: To address this issue, I accessed the AWS S3 console, selected my bucket, and configured the bucket policy and object permissions to allow public read access.

- **Issue 2: URL Access**
  - **Description**: I faced an issue with accessing the `images.json` file through a web browser. Clicking on the URL opened the file for download rather than displaying it in the browser. This behavior was unexpected as I wanted the JSON file to be viewable in a web page.
  - **Resolution**: To address this issue, I took several steps, including checking the `Content-Type` metadata, ensuring the correct URL format, and generating a pre-signed URL for temporary access.

These resolutions helped me overcome the encountered issues and ensured the correct functionality of my Lambda function and access to the `images.json` file.

## Link to images.json

You can access the `images.json` file in your S3 bucket via the following link:

[Link to images.json](https://s3-lambda-adnan.s3.us-west-2.amazonaws.com/images.json?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFxs57FKr%2BV96%2BO1dRnnXXyfWIoud4%2FmPXDocA3KcvPGAiEAtYUUmITsruQ0wSYL6bpj6bNZrys%2B9YjvT0D0qiXTKFMq7QIIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0MDI2MzMzOTM4MDMiDDObBwOfrt1U4gTu2irBAqrtMgd2WO7cRVflsMaZulqrjj%2BiGCtn8%2BTjWVO%2FFBSEOZars8zAXK9NDrjUTAZP0bU6U6kaNWeKxHGRF%2FYk0jZnrBhHPz6hnvmLCNpEgd0WMbytUwkPQ9oWcCE3XQ68gx7nhm3hCoflXbxhrhymhE%2F1bgPrD%2FTo2U3f31BDQ748orNKsbop11TtfKJJDBflgcOa8%2B4lDml5uzS%2BtmYK4gJ5yjy2Twh3k7nv3%2BRRhO27euNx5Ado4wWePJSuHw9y4%2Fmetxlv9%2FtmiM7am5OqWNfnFQN4NLOReP5065hAKV3LudKHCKFFgF8Vj4YwMa6Vy8kKNg3Zt2DC42YuX2cenQ264ri31GdBg%2Fp%2B9iqNNvuOcGApwAtVnumFONB%2B5AD5FoN3BixNEUlbNBSuvNqkLTqQTPm7H8btAyqZ26%2FXs1mIgDCur7epBjqzAtiwdVj%2Fkd1xTDqAAKEQ5Zj%2FjcbKoyM4QrgDiEDlY1LTuOICxMfGojiNEudmph17uwaw4l6aicKDp3IbRhIFCP%2By%2FNISq4uQWrhlubgBLGAWTd7AJp%2B8SRBqyQAqwylSwi9WTK50AFzq9QncqturynZvWBJhhEeVgRo604zw%2BupFwgZ142EzJKKyGzA9hLuge0xAsUEYb7c2cqybBITETKxy%2FAQjGZ1s5W%2FNNB%2Fnk6WrJk34dQ%2Bim7NDMGN5R%2Fpf5VG2GjFJ5%2BJeZWEaJYj%2B4JPfhoeKLb%2FFGum1%2B6tmGUOdlXqy%2FgMU0JBcdkcc5H3kLmdZSTYHQhB3FMbvrzWThreNIA%2Bq7R%2FPJTbr8qVLEwPA59MyUoqI70a2B3zYrICpxHXLw93AY1bGbKK36Mnxr16G31g%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231017T004811Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAV3PWSA2F6E4KOZUJ%2F20231017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=b507dda11070d0f86b00aa72f27ba3a18a8df75f8365861fa855978803ca5552)
