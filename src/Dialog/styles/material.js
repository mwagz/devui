import { css } from 'styled-components';

export const style = ({ theme, open, fullWidth }) => css`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 4;
  display: ${open ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div:first-child {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: ${theme.base02};
    opacity: 0.3;
  }

  > div:last-child {
    box-sizing: border-box;
    position: relative;
    z-index: 2;
    min-width: 320px;
    ${fullWidth ? 'width: 99%;' : ''}
    padding: 16px;
    margin-bottom: 16px;
    border: none;
    background-color: ${theme.base07};
    box-shadow:
      0 9px 46px 8px rgba(0, 0, 0, 0.14),
      0 11px 15px -7px rgba(0, 0, 0, 0.12),
      0 24px 38px 3px rgba(0, 0, 0, 0.2);

    > div:first-child {
      display: flex;
      align-items: center;
      font-size: 20px;
      margin: -17px -17px 6px;
      padding: 16px;
      border: none;

      > div:first-child {
        flex-grow: 1;
      }

      > button {
        box-sizing: border-box;
        font-size: 1em;
        line-height: 1;
        font-weight: bold;
        margin: 0px;
        padding: 0px 5px;
        cursor: pointer;
        color: inherit;
        background-color: transparent;
        border: 0px;
        -webkit-appearance: none;
        outline: none;
      }
    }

    > div:last-child {
      box-sizing: border-box;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin: 16px -16px -16px;
      padding: 2px 10px;

      > button {
        box-shadow: none;
      }
    }
  }
`;