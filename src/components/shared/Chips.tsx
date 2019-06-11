
import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import Chip from '@material-ui/core/Chip';
import randomColor from 'randomcolor';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    padding: '2px'
  },
}))

const chipStyles = (text: string) => makeStyles(() => {
  
  const seed = text.toLowerCase();

  const darkColor = randomColor({
    luminosity: 'dark',
    format: 'hex',
    seed
  })

  return {
    chip: {
      margin: '2px',
      background: darkColor,
      color: "white",
      fontWeight: "bold"
    },
  }
});

interface IChipProps {
  labels: string[]
}

const Chips: React.FunctionComponent<IChipProps> = ({ labels }) => {
  const classes = useStyles({});

  const categories = labels.map((label => label.charAt(0).toUpperCase() + label.slice(1)))

  const Chips = categories.map(label => {
    const classes = chipStyles(label)({});

    return (
      <Chip
        key={label}
        label={label}
        className={classes.chip}
      />
    )
  })

  return (
    <div className={classes.root}>
      {Chips}
    </div>
  )
};

export default Chips;
