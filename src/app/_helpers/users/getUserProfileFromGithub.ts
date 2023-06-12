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
  }).then((res) => res.json());

  const avatar = avatars.getImage(response.avatar_url);

  const data = {
    avatar: avatar,
    bio: response.bio,
    username: response.login,
    github_url: response.html_url,
  } as UserInfoFromGIthub;

  return data;
}


