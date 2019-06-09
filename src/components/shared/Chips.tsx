import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '2px'
  },
  chip: {
    margin: '2px'
  },
}));

const Chips: React.FunctionComponent<{ labels: string[] }> = ({ labels }) => {
  const classes = useStyles({});
  
  return (
    <div className={classes.root}>
      {labels.map(label => (
        <Chip
          color='primary'
          key={label}
          label={label}
          className={classes.chip}
        />
      ))}
    </div>
  )
};

export default Chips;
