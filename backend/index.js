const AWS = require('aws-sdk');
AWS.config.update({ region: 'ap-southeast-2' }); // Replace with your region

exports.handler = async (event) => {
  const ses = new AWS.SES();

  const body = JSON.parse(event.body);

  const params = {
    Destination: {
      ToAddresses: ['mzeeshanumer307@gmail.com'], // verified email
    },
    Message: {
      Body: {
        Text: {
          Data: `You have a new message:\n\nName: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
        },
      },
      Subject: {
        Data: 'New Contact Form Submission',
      },
    },
    Source: 'mzeeshanumer307@gmail.com', // verified sender email
  };

  try {
    await ses.sendEmail(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent successfully!' }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send message.' }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
    };
  }
};
