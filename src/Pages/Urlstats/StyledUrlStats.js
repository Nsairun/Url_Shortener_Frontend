import styled from 'styled-components';

const StyledUrlStats = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px Calc(5px + 1.5vw);

  .urlInfo {
    .url_div {
      background-color: #1b1c2d70;
      display: flex;
      flex-direction: column;
      margin: 10px 0 25px;
      padding: 10px;
      width: 100%;

      .long_short {
        p {
          text-align: left;
          color: #f5f5f5;
          margin: 0 0 10px 0;
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;

          &:nth-of-type(2) {
            color: #ff621f;
          }

          span {
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }

      .clicks {
        text-align: right;
        color: #ff621f;
        margin: 10px 0 0;
      }
    }

    margin: 10px auto;
    width: 100%;
    max-width: 1500px;

    table {
      background-color: #1b1c2d70;
      width: 100%;
      margin: 20px 0 0;

      th {
        word-break: keep-all;
        text-align: center;
        padding: 15px 5px;
        color: #ff621f;
      }

      td {
        color: #f5f5f5;
        border: 1px solid #ff621f;
        word-break: break-all;
        text-align: center;
        text-overflow: ellipsis;
        min-width: 70%;
        max-width: 300px;
        padding: 10px 5px;
      }
    }

    .no-visitors {
      font-family: 'Oxygen', sans-serif;
      color: #f5f5f5;
      width: 100%;
      font-size: 28px;
      letter-spacing: 4px;
      font-weight: 800;
      margin: 10px auto;
    }
  }
`;

export default StyledUrlStats;
