import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase } from './counterSlice';
import style from './styles.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(225,105,135,.3)',
    color: 'while',
    height: 30,
    padding: '0 30px',
  },
});

function CouterFeature(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const handleIncreaseClick = () => {
    const action = increase(); //action creator
    dispatch(action);
  };

  const handleDecreaseClick = () => {
    const action = decrease(); //action creator
    dispatch(action);
  };

  return (
    <div className={style.abc}>
      Couter : {counter}
      <div>
        <Button className={classes.root} onClick={handleIncreaseClick}>
          Increase
        </Button>
        <Button className={classes.root} onClick={handleDecreaseClick}>
          Decrease
        </Button>
      </div>
    </div>
  );
}

export default CouterFeature;
