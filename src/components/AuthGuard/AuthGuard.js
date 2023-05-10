/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../api/auth';
import { saveToSession } from '../../utils';
import { SyldLoadingP } from '../Atoms/Atoms';

export default function AuthGuard(Component) {
  function Guard(props) {
    const [userData, setUserData] = useState(null);

    const navigate = useNavigate();
    useEffect(() => {
      getCurrentUser()
        .then(({ user, userUrls }) => {
          if (!user.user_name) {
            navigate('/', { replace: true });
            return;
          }

          saveToSession(userUrls);

          setUserData({ user, userUrls });
        })
        .catch(() => {
          navigate('/', { replace: true });
        });
    }, []);

    return userData?.user?.user_name ? (
      <Component
        {...props}
        currentUser={userData.user}
        userUrls={userData.userUrls}
      />
    ) : (
      <SyldLoadingP>loading...</SyldLoadingP>
    );
  }
  return Guard;
}
