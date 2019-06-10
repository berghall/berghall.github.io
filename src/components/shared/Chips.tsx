
import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import Chip from '@material-ui/core/Chip';

import { primary, secondary } from "../../theme"

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    padding: '2px'
  },
  chip: {
    margin: '2px',
    background: `linear-gradient(20deg, ${primary}, ${secondary})`,
    color: "white",
    fontWeight: "bold"
  },
}));

interface IChipProps {
  labels: string[]
}

const Chips: React.FunctionComponent<IChipProps> = ({ labels }) => {
  
  const classes = useStyles({});
  
  let categories = labels.map((label => label.charAt(0).toUpperCase() + label.slice(1)))

  return (
    <div className={classes.root}>
      {categories.map(label => (
        <Chip
          key={label}
          label={label}
          className={classes.chip}
        />
      ))}
    </div>
  )
};

export default Chips;
