import { ReactNode, createContext, useEffect, useState } from 'react';
import { api } from '../lib/api';

interface GitHubDataContextProps {
  userInfo: UserInfo | null;
  issuesInfo: IssuesInfo[] | null;
}

interface GitHubDataContextProviderProps {
  children: ReactNode;
}

interface UserInfo {
  name: string;
  login: string;
  bio: string;
  blog: string;
  url: string;
  followers: number;
  avatar_url: string;
}
interface IssuesInfo {
  id: number;
  title: string;
  body: string;
  created_at: string;
  comments: number;
}

export const GitHubDataContext = createContext({} as GitHubDataContextProps);

export function GitHubDataContextProvider({
  children,
}: GitHubDataContextProviderProps) {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [issuesInfo, setIssuesInfo] = useState<IssuesInfo[] | null>(null);

  async function getUserInfo() {
    const { data } = await api.get<UserInfo>('/users/vctrhugoop');

    return data;
  }

  async function getIssuesInfo() {
    const { data } = await api.get<IssuesInfo[]>(
      `/repos/vctrhugoop/git-blog/issues`,
    );

    return data;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const userInfoResponse = await getUserInfo();
        setUserInfo(userInfoResponse);
      } catch (error) {
        console.error(error);
      }

      try {
        const issuesInfoResponse = await getIssuesInfo();
        setIssuesInfo(issuesInfoResponse);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <GitHubDataContext.Provider value={{ userInfo, issuesInfo }}>
      {children}
    </GitHubDataContext.Provider>
  );
}
