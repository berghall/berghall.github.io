
import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import Chip from '@material-ui/core/Chip';

import { primary, secondary } from "../../theme"

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: props => props.justifyContent,
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
  justify: string
}

const Chips: React.FunctionComponent<IChipProps> = ({ labels, justify }) => {
  const props = { justifyContent: justify };
  
  const classes = useStyles(props);
  
  return (
    <div className={classes.root}>
      {labels.map(label => (
        <Chip
          key={label}
          label={label.charAt(0).toUpperCase() + label.slice(1)}
          className={classes.chip}
        />
      ))}
    </div>
  )
};

export default Chips;
