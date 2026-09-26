import { getGithubContributions } from "../../lib/github";

export async function GET() {
  try {
    const data = await getGithubContributions();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: `Failed to fetch GitHub contributions, error: ${error}` }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}