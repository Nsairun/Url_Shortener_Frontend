/* eslint-disable react/prop-types */
import React from 'react';

import StyledUrlStats from './StyledUrlStats';
import UrlStatsGaurd from '../../components/AuthGuard/UrlStatsGaurd';
import { Button } from '../../components/Atoms/Atoms';

function UrlStats({ visitors }) {
  return (
    <StyledUrlStats>
      <Button onClick={() => window.history.back()}>Back</Button>

      <div className="urlInfo">
        <p className="clicks">
          Total visits {JSON.parse(sessionStorage.getItem('currentUrl')).clicks}
        </p>

        <table>
          <tr>
            <th>Location</th>
            <th>browser</th>
            <th>First visit</th>
            <th>Newest visit</th>
          </tr>
          {visitors.map((visitor) => (
            <tr>
              <td>{visitor.location}</td>
              <td>{visitor.browser}</td>
              <td>
                {new Date(visitor.createdAt).toDateString()} <br />{' '}
                {new Date(visitor.createdAt).toLocaleTimeString()}
              </td>
              <td>
                {new Date(visitor.updatedAt).toDateString()} <br />{' '}
                {new Date(visitor.updatedAt).toLocaleTimeString()}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </StyledUrlStats>
  );
}

export default UrlStatsGaurd(UrlStats);
