const GITHUB_API = "https://api.github.com/graphql";

const query = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              color
            }
          }
        }
      }
    }
  }
`;

export async function getGithubContributions() {
  const response = await fetch(GITHUB_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables: {
        username: `${import.meta.env.GITHUB_USERNAME}`,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`GitHub API returned ${response.status}`);
  }

  const result = await response.json();

  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  return result.data.user.contributionsCollection.contributionCalendar;
}