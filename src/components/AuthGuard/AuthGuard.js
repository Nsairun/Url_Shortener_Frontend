/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../api/auth';

export default function AuthGuard(Component) {
  function Guard(props) {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();
    useEffect(() => {
      if (user) return;
      getCurrentUser()
        .then((user) => {
          if (!user.user_name) {
            navigate('/', { replace: true });
            return;
          }

          setUser(user);
        })
        .catch(() => {
          navigate('/', { replace: true });
        });
    }, [navigate, user]);

    return user ? (
      <Component {...props} currentUser={user} />
    ) : (
      <p>loading..</p>
    );
  }
  return Guard;
}
