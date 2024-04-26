import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import { useNavigate, useParams } from 'react-router-dom';
import { InfoIssue } from '../components/InfoIssue';
import { IssuesInfo } from '../contexts/GitHubDataContext';
import { useGitHubData } from '../hooks/useGitHubData';
import '../utils/MarkdownStyle.css';

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

  console.log(issueData);

  return (
    <section className='px-4 max-w-4xl mx-auto w-full pb-9'>
      <InfoIssue issueInfo={issueData} />
      <main className='px-8 py-10'>
        <Markdown className='text-base-text'>{issueData.body}</Markdown>
      </main>
    </section>
  );
}
