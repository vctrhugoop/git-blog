import axios from 'axios';
import { useEffect, useState } from 'react';

import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaLink,
  FaUserGroup,
} from 'react-icons/fa6';

interface UserData {
  name: string;
  login: string;
  bio: string;
  blog: string;
  url: string;
  followers: number;
  avatar_url: string;
}

export function CardInfo() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/vctrhugoop',
        );

        setUserData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {userData ? (
        <div className='max-w-4xl mx-auto w-full bg-base-profile -mt-20 flex px-10 py-8 gap-8 rounded-lg items-start'>
          <img src={userData.avatar_url} className='size-36 rounded-lg' />
          <div className='flex flex-col justify-between gap-10'>
            <div className='space-y-2'>
              <div className='flex justify-between '>
                <p className='text-xl font-bold text-base-title'>
                  {userData.name}
                </p>
                <p className='flex items-center gap-2 text-base-blue font-bold text-xs'>
                  <a href={`https://${userData.url}`} target='_blank'>
                    GITHUB
                  </a>
                  <FaArrowUpRightFromSquare />
                </p>
              </div>
              <p className='text-base-text'>{userData.bio}</p>
            </div>

            <div className='flex flex-col md:flex-row md:gap-6'>
              <p className='flex items-center gap-2 text-base-subtitle'>
                <FaGithub className='text-base-label' />
                {userData.login}
              </p>
              <p className='flex items-center gap-2'>
                <FaLink className='text-base-label' />
                <a
                  href={`https://${userData.blog}`}
                  target='_blank'
                  className='text-base-subtitle'
                >
                  {userData.blog}
                </a>
              </p>

              <p className='flex items-center gap-2 text-base-subtitle'>
                <FaUserGroup className='text-base-label' />
                {userData.followers} seguidores
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
