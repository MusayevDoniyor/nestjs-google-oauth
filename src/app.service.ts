import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome</title>
        <style>
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(135deg, #e0f7fa, #80deea);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          .container {
            text-align: center;
            padding: 2rem;
            background: white;
            border-radius: 10px;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
            max-width: 90%;
            width: 400px;
          }
          h1 {
            color: #0277bd;
            margin-bottom: 1.5rem;
            font-size: 2rem;
          }
          a {
            display: inline-block;
            padding: 10px 20px;
            background-color: #0277bd;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }
          a:hover {
            background-color: #01579b;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome!</h1>
          <a href="/login">Go to Login</a>
        </div>
      </body>
      </html>
    `;
  }
}
