import { Handler } from "aws-lambda";

export const handler: Handler = (event: any) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello User",
        input: event,
      },
      null,
      2
    ),
  };

  return new Promise((resolve) => {
    resolve(response);
  });
};