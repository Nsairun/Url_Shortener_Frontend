/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../api/auth';
import { saveToSession } from '../../utils';
import { SyldLoadingP } from '../Atoms/Atoms';
import MyContext from '../../context';

export default function AuthGuard(Component) {
  function Guard(props) {
    const [userData, setUserData] = useState(null);

    const { urls, setUrls } = useContext(MyContext);

    const navigate = useNavigate();
    useEffect(() => {
      getCurrentUser()
        .then(({ user, userUrls }) => {
          if (!user.user_name) {
            navigate('/', { replace: true });
            return;
          }
          sessionStorage.removeItem('userUrls');
          saveToSession(userUrls);

          setUserData({ user, userUrls });
          setUrls(userUrls);
        })
        .catch(() => {
          navigate('/', { replace: true });
        });
    }, []);

    return userData?.user?.user_name ? (
      <Component {...props} currentUser={userData.user} userUrls={urls} />
    ) : (
      <SyldLoadingP>loading...</SyldLoadingP>
    );
  }
  return Guard;
}
