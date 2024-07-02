type EmailType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function emailTemplate({ name, email, subject, message }: EmailType) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
      rel="stylesheet"
    />
    <style>
      *,
      html,
      body {
        font-family: "Poppins", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #333;
      }
    </style>
  </head>
  <body>
    <div style="margin: 0 auto; max-width: 400px; padding: 20px">
      <h1 style="font-size: 20px">New Message</h1>
      <div style="border: 2px solid #888; border-radius: 10px; margin-top: 10px; padding: 16px">
        <h3 style="font-size: 16px">Name : ${name}</h3>
        <h3 style="font-size: 16px; margin-top: 4px">Email : ${email}</h3>
        <h3 style="font-size: 16px; margin-top: 4px">Subject : ${subject}</h3>
        <h3 style="font-size: 16px; margin-top: 16px">Message.</h3>
        <p style="font-size: 14px">${message}</p>
      </div>
    </div>
  </body>
  </html>

`;
}
