import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { Popover } from './popover';

describe('Popover', () => {
  it('should position the popover based on anchorOrigin prop', () => {
    const anchorEl = document.createElement('div');
    const mockRect = {
      top: 100,
      left: 200,
      width: 50,
      height: 30,
      x: 200,
      y: 100,
      bottom: 130,
      right: 250,
      toJSON: () => {},
    };
    anchorEl.getBoundingClientRect = jest.fn(() => mockRect);

    const { getByText } = render(
      <div>
        <Popover
          id="test"
          open={true}
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          onClose={() => {}}
        >
          Content
        </Popover>
      </div>,
    );

    const popover = getByText('Content');
    expect(popover).toHaveStyle('top: 100px');
    expect(popover).toHaveStyle('left: 250px');
  });
  it('should apply the correct transform based on transformOrigin prop', () => {
    const anchorEl = document.createElement('div');
    const mockRect = {
      top: 100,
      left: 200,
      width: 50,
      height: 30,
      x: 200,
      y: 100,
      bottom: 130,
      right: 250,
      toJSON: () => {},
    };
    anchorEl.getBoundingClientRect = jest.fn(() => mockRect);

    const { getByText } = render(
      <div>
        <Popover
          id="test"
          open={true}
          anchorEl={anchorEl}
          transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          onClose={() => {}}
        >
          Content
        </Popover>
      </div>,
    );

    const popover = getByText('Content');
    expect(popover).toHaveStyle('transform: translate(-100%, -100%)');
  });
  it('should close the popover when clicked outside', () => {
    const onClose = jest.fn();
    const { container } = render(
      <Popover id="test" open={true} onClose={onClose}>
        Content
      </Popover>,
    );

    fireEvent.mouseDown(container.querySelector('.backdrop') as HTMLElement);
    expect(onClose).toHaveBeenCalled();
  });
});
