import { avatars } from "@falcon-z/app/_utils/config";

type UserInfoFromGIthub = {
  avatar: URL;
  bio: string;
  github_url: URL;
  username: string;
};

export default async function getUserInfoFromGithub(token: string) {
  const response = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  const data = await response.json();

  console.log(data);

  const avatar = avatars.getImage(data.avatar_url);
  return {
    avatar: avatar,
    bio: data.bio,
    username: data.login,
    github_url: data.html_url,
  } as UserInfoFromGIthub;
}
