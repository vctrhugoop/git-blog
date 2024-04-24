import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IssuesInfo } from '../contexts/GitHubDataContext';
import { useGitHubData } from '../hooks/useGitHubData';

export function Post() {
  const { number } = useParams();
  const { getIssuesByNumber } = useGitHubData();

  const [issueData, setIssueData] = useState({} as IssuesInfo);

  const navigate = useNavigate();

  useEffect(() => {
    if (!number) {
      return navigate('/');
    }

    getIssuesByNumber(Number(number)).then((issue) => {
      setIssueData(issue);
    });
  }, []);

  return <h1 className='text-white'>{issueData.title}</h1>;
}
