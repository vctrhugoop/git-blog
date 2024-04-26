import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaLink,
  FaUserGroup,
} from 'react-icons/fa6';
import { useGitHubData } from '../hooks/useGitHubData';
import { Links } from './Links';

export function Profile() {
  const { userInfo } = useGitHubData();

  return (
    <div>
      {userInfo && (
        <div className='max-w-4xl mx-auto w-full bg-base-profile md:-mt-20 mt-4 flex flex-col px-8 py-8 gap-8 rounded-lg md:px-10 md:flex-row'>
          <div className='w-full h-36 lg:w-2/6 md:w-2/4'>
            <img
              src={userInfo.avatar_url}
              className='rounded-lg h-36 object-cover w-full md:object-fill md:w-36'
            />
          </div>
          <div className='gap-8 md:gap-0  flex flex-col justify-between md:h-36'>
            <div className='space-y-2'>
              <div className='flex justify-between '>
                <h1 className='text-xl font-bold text-base-title'>
                  {userInfo.name}
                </h1>
                <Links to={userInfo.html_url} target='_blank'>
                  GITHUB
                  <FaArrowUpRightFromSquare />
                </Links>
              </div>
              <p className='text-base-text'>{userInfo.bio}</p>
            </div>
            <div className='flex flex-col md:flex-row md:gap-6'>
              <span className='flex items-center gap-2 text-base-subtitle'>
                <FaGithub className='text-base-label' />
                {userInfo.login}
              </span>
              <span className='flex items-center gap-2'>
                <FaLink className='text-base-label' />
                <a
                  href={`https://${userInfo.blog}`}
                  target='_blank'
                  className='text-base-subtitle'
                >
                  {userInfo.blog}
                </a>
              </span>

              <span className='flex items-center gap-2 text-base-subtitle'>
                <FaUserGroup className='text-base-label' />
                {userInfo.followers} seguidores
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
