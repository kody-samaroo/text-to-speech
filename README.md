# TEXT TO SPEECH APPLICATION
**Created by Kody Samaroo**

This is a text to speech application. It leverages the AWS services of S3 for object storage, Lambda which houses the Python code used to call Polly, a text to audio translation service and API Gateway which provides an endpoint for the React frontend to call.

The goal of this application is to create audio bits for long compositions of text. It can be difficult and time consuming to read through text and the design of this application is to facilitate that process.

### Flow Diagram

![Alt text](/images/flow_diagrampdn.png)