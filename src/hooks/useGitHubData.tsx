import { useContext } from 'react';
import { GitHubDataContext } from '../contexts/GitHubDataContext';

export function useGitHubData() {
  return useContext(GitHubDataContext);
}
