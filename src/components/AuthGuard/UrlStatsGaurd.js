/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, getUrlVisitors } from '../../api/auth';
import { AuthLoadinP } from '../Atoms/Atoms';

export default function UrlStatsGaurd(Component) {
  function Guard(props) {
    const [data, setData] = useState({ activeUser: false, visitors: [] });

    const navigate = useNavigate();
    useEffect(() => {
      const sessionUrl = JSON.parse(sessionStorage.getItem('currentUrl'));

      getCurrentUser()
        .then(async ({ user }) => {
          if (!user.user_name) {
            navigate('/', { replace: true });
            return;
          }

          await getUrlVisitors(+sessionUrl.id).then(({ data }) => {
            setData({ activeUser: true, visitors: data });
          });
        })
        .catch(() => {
          navigate('/', { replace: true });
        });
    }, []);

    return data.activeUser ? (
      <Component {...props} visitors={data.visitors} />
    ) : (
      <AuthLoadinP>loading...</AuthLoadinP>
    );
  }
  return Guard;
}
