/* eslint-disable react/prop-types */
import React from 'react';

import { TbLink } from 'react-icons/tb';
import { MdShortcut } from 'react-icons/md';

import StyledUrlStats from './StyledUrlStats';
import { Button } from '../../components/Atoms/Atoms';
import UrlStatsGaurd from '../../components/AuthGuard/UrlStatsGaurd';
import AuthGuard from '../../components/AuthGuard/AuthGuard';
import { SHORT_BASE_URL } from '../../constant';

function UrlStats({ visitors, url }) {
  return (
    <StyledUrlStats>
      <Button onClick={() => window.history.back()}>Back</Button>

      <div className="urlInfo">
        <div className="url_div">
          <div className="long_short">
            <p>
              <TbLink /> <span>{url?.long_url}</span>
            </p>
            <p>
              <MdShortcut /> <span>{SHORT_BASE_URL + url.short_url}</span>
            </p>
          </div>
          <p className="clicks">
            <span>
              Created On:{' '}
              {`${new Date(url?.createdAt).toDateString()} - ${new Date(
                url?.createdAt
              ).toLocaleTimeString()}`}
            </span>
            <br />
            <span>total visitors {visitors?.length}</span> <br />
            <span>Total clicks {url?.clicks}</span>
          </p>
        </div>

        {visitors?.length >= 1 ? (
          <table>
            <tr>
              <th>Location</th>
              <th>browser</th>
              <th>First visit</th>
              <th>Newest visit</th>
            </tr>
            {visitors?.map((visitor) => (
              <tr>
                <td>{visitor?.location}</td>
                <td>{visitor?.browser}</td>
                <td>
                  {new Date(visitor?.createdAt).toDateString()} <br />{' '}
                  {new Date(visitor?.createdAt).toLocaleTimeString()}
                </td>
                <td>
                  {new Date(visitor?.updatedAt).toDateString()} <br />{' '}
                  {new Date(visitor?.updatedAt).toLocaleTimeString()}
                </td>
              </tr>
            ))}
          </table>
        ) : (
          <p className="no-visitors">
            you&apos;ve had no visits on this link yet
          </p>
        )}
      </div>
    </StyledUrlStats>
  );
}

export default AuthGuard(UrlStatsGaurd(UrlStats));
