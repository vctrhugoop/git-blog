import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaLink,
  FaUserGroup,
} from 'react-icons/fa6';
import { useGitHubData } from '../hooks/useGitHubData';

export function CardInfo() {
  const { userInfo } = useGitHubData();

  return (
    <div>
      {userInfo ? (
        <div className='max-w-4xl mx-auto w-full bg-base-profile -mt-20 flex px-8 py-8 gap-8 rounded-lg items-start md:px-10'>
          <img src={userInfo.avatar_url} className='size-36 rounded-lg' />
          <div className='flex flex-col justify-between gap-10'>
            <div className='space-y-2'>
              <div className='flex justify-between '>
                <p className='text-xl font-bold text-base-title'>
                  {userInfo.name}
                </p>
                <a
                  href={`https://${userInfo.url}`}
                  target='_blank'
                  className='flex items-center gap-2 text-base-blue font-bold text-xs hover:border-b-base-blue hover:border-b'
                >
                  GITHUB
                  <FaArrowUpRightFromSquare />
                </a>
              </div>
              <p className='text-base-text'>{userInfo.bio}</p>
            </div>

            <div className='flex flex-col md:flex-row md:gap-6'>
              <p className='flex items-center gap-2 text-base-subtitle'>
                <FaGithub className='text-base-label' />
                {userInfo.login}
              </p>
              <p className='flex items-center gap-2'>
                <FaLink className='text-base-label' />
                <a
                  href={`https://${userInfo.blog}`}
                  target='_blank'
                  className='text-base-subtitle'
                >
                  {userInfo.blog}
                </a>
              </p>

              <p className='flex items-center gap-2 text-base-subtitle'>
                <FaUserGroup className='text-base-label' />
                {userInfo.followers} seguidores
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
}
