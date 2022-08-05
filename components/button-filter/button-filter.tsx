import { IconButton } from '@mui/material';
import React, { FC } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import styles from './button-filter.module.css';

type ButtonFilterType = {
  onIncrement: () => void;
  onDecrement: () => void;
  value: number;
  label: string;
};

export const ButtonFilter: FC<ButtonFilterType> = ({ onIncrement, onDecrement, value, label }) => {
  return (
    <div className={styles.filter}>
      <p className={styles.filterLabel}>{label}</p>
      <IconButton aria-label='decrement' size='small' onClick={onDecrement}>
        <RemoveIcon fontSize='inherit' />
      </IconButton>
      <p className={styles.filterLabel}>{value}</p>
      <IconButton aria-label='increment' size='small' onClick={onIncrement}>
        <AddIcon fontSize='inherit' />
      </IconButton>
    </div>
  );
};
