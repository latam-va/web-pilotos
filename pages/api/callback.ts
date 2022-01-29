import auth0 from "../../utils/auth0";

export default async function callback(req: any, res: any) {
  try {
    await auth0.handleCallback(req, res, { redirectUri: "https://pilotos.latamva.com.ar" });
  } catch (error: any) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}
