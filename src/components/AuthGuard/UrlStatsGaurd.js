/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { getUrlVisitors } from '../../api/auth';
import { AuthLoadinP } from '../Atoms/Atoms';

export default function UrlStatsGaurd(Component) {
  return function Guard(props) {
    const [responseData, setResponseData] = useState(null);

    useEffect(() => {
      const uri = sessionStorage.getItem('uri');

      getUrlVisitors(uri).then(({ data: { visitors, url } }) => {
        setResponseData({ visitors, url });
      });
    }, []);

    return responseData ? (
      <Component
        {...props}
        visitors={responseData.visitors}
        url={responseData.url}
      />
    ) : (
      <AuthLoadinP>getting data</AuthLoadinP>
    );
  };
}
