# aws-contact-form
Simple serverless contact form using AWS Lambda, SES, API Gateway, and S3
# AWS Contact Form (Serverless)

A simple serverless contact form built using:
- AWS Lambda (Node.js)
- Amazon SES (Simple Email Service)
- API Gateway (HTTP API)
- S3 (Static Website Hosting)

## 🌐 Live Demo

[Click here to view the live form]https://my-static-site-zeeshan-2025.s3.ap-southeast-2.amazonaws.com/index.html

## 📁 Project Structure

contactformhandler/
├── frontend/
│ └── index.html # Contact form HTML
├── index.mjs # Lambda function (Node.js)
├── package.json # Node dependencies
└── README.md # Project details


## ⚙️ How It Works

1. User fills out and submits the contact form on your static site.
2. JavaScript sends a POST request to your API Gateway endpoint.
3. API Gateway triggers the Lambda function.
4. Lambda uses AWS SES to send an email to your verified address.

## 📦 Deploying the Project

1. Upload `index.html` to an S3 bucket (enable static website hosting).
2. Create a Lambda function with `index.mjs`.
3. Connect Lambda to API Gateway.
4. Verify sender email in AWS SES (sandbox mode).
5. Update `index.html` to point to your API endpoint.
6. Test the form.

## ✉️ Email Notes

- Only verified email(s) in SES sandbox mode can be used for sending and receiving.
- Make sure AWS region in SES matches the Lambda region.

## 🔐 Security Tip

- Add CORS restrictions in API Gateway.
- Never expose sensitive keys or logic in the frontend.

## 🧑 Author

**Muhammad Zeeshan Umer**  
[GitHub](https://github.com/MZEESHANUMER307/aws-contact-form)

