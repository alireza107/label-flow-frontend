import React, { CSSProperties, useCallback, useEffect, useRef } from 'react';

import classNames from 'classnames';

import { PopoverProps } from './popover.types';

export const Popover: React.FC<PopoverProps> = ({
  id,
  open,
  anchorEl,
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
  transformOrigin = { vertical: 'top', horizontal: 'left' },
  position = { top: 0, left: 0 },
  onClose,
  children,
  className,
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside, open]);

  const getPopoverStyles = (): CSSProperties => {
    if (anchorEl) {
      const anchorRect = anchorEl.getBoundingClientRect();
      const verticalOffset = {
        top: anchorRect.top,
        center: anchorRect.top + anchorRect.height / 2,
        bottom: anchorRect.top + anchorRect.height,
      };
      const horizontalOffset = {
        left: anchorRect.left,
        center: anchorRect.left + anchorRect.width / 2,
        right: anchorRect.left + anchorRect.width,
      };

      return {
        top: `${verticalOffset[anchorOrigin.vertical]}px`,
        left: `${horizontalOffset[anchorOrigin.horizontal]}px`,
        transform: `translate(${transformOrigin.horizontal === 'center' ? '-50%' : transformOrigin.horizontal === 'right' ? '-100%' : '0'}, ${transformOrigin.vertical === 'center' ? '-50%' : transformOrigin.vertical === 'bottom' ? '-100%' : '0'})`,
        display: open ? 'block' : 'none',
      };
    } else {
      return {
        top: `${position.top}px`,
        left: `${position.left}px`,
        display: open ? 'block' : 'none',
      };
    }
  };

  const classes = classNames('popover', className, {});

  return (
    <>
      {open && <div className="backdrop" onClick={onClose}></div>}
      <div id={id} ref={popoverRef} className={classes} style={getPopoverStyles()}>
        {children}
      </div>
    </>
  );
};
