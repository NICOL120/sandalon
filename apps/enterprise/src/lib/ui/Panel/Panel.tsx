import styled, { css } from 'styled-components';
import { getCSSUnit } from '../utils/getCSSUnit';
type PanelKind = 'regular' | 'secondary';

export interface PanelProps {
  width?: React.CSSProperties['width'];
  padding?: React.CSSProperties['padding'];
  kind?: PanelKind;
  withSections?: boolean;
}

export const Panel = styled.div<PanelProps>`
  position: relative;
  width: ${({ width }) => (width ? getCSSUnit(width) : undefined)};
  height: ${({ height }) => (height ? getCSSUnit(width) : undefined)};
  background-color: ;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 12px;
  gap: 12px;
  border-radius: 30px;
  cursor: pointer;
  color: white;
  overflow: hidden;

  ${({ withSections, kind }) => {
    const contentBackground = kind === 'secondary' ? 'linear-gradient(45deg,#476892,#59355D)' : 'linear-gradient(45deg,#476892,#59355D)';
    const border = kind === 'secondary' ? '2px solid #e81cff' : '';

    return css`
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        left: -55px;
        margin: auto;
        width: 1px;
        height: 1px;
        border-radius: 1px;
        background: ${contentBackground};
        z-index: -10;
        pointer-events: none;
        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      &::after {
        content: "";
        z-index: -1;
        position: absolute;
        inset: 0;
        background: ${contentBackground};
        transform: translate3d(0, 0, 0) scale(0.95);
        filter: blur(20px);
      }

      ${border}

      .heading {
        font-size: 20px;
        text-transform: capitalize;
        font-weight: 700;
      }

      p:not(.heading) {
        font-size: 14px;
      }

      p:last-child {
        color: #fff8fc;
        font-weight: 600;
      }

      &:hover::after {
        filter: blur(30px);
      }

      &:hover::before {
        transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
      }
    `;
  }}
`;
