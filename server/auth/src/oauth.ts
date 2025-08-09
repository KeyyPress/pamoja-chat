import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export async function handleGoogleCallback(code: string) {
  const tokenRes = await axios.post("https://oauth2.googleapis.com/token", {
    code,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
    grant_type: "authorization_code",
  });
  const idToken = tokenRes.data.id_token as string;
  const payload = JSON.parse(
    Buffer.from(idToken.split(".")[1], "base64").toString()
  );
  return { email: payload.email as string, name: payload.name as string };
}

export async function handleGithubCallback(code: string) {
  const tokenRes = await axios.post(
    "https://github.com/login/oauth/access_token",
    {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: process.env.GITHUB_REDIRECT_URI,
    },
    { headers: { Accept: "application/json" } }
  );
  const accessToken = tokenRes.data.access_token as string;
  const profileRes = await axios.get("https://api.github.com/user", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  // GitHub user may not have public email; fetch separately
  let email: string | null = profileRes.data.email;
  if (!email) {
    const emailsRes = await axios.get("https://api.github.com/user/emails", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const primary =
      emailsRes.data.find((e: any) => e.primary) || emailsRes.data[0];
    email = primary?.email || null;
  }
  return {
    email: email as string,
    name: profileRes.data.name || profileRes.data.login,
  };
}
