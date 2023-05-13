/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useEffect } from 'react';
import MyContext from '../../context';

export default function HomeGaurd(Component) {
  return function Guard(props) {
    const { urls, setUrls } = useContext(MyContext);
    useEffect(() => {
      const lgi = +sessionStorage.getItem('lgi');
      if (lgi) {
        sessionStorage.removeItem('userUrls');
        sessionStorage.removeItem('currentUrl');
        sessionStorage.removeItem('lgi');
        sessionStorage.removeItem('uri');
      }

      setUrls(() => [
        ...(JSON.parse(sessionStorage.getItem('userUrls')) || []),
      ]);
    }, []);

    return <Component {...props} urls={urls} />;
  };
}
