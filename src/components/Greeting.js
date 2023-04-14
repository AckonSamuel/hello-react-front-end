import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { greetingsFetch } from '../redux/greeting/greetings';

const Greeting = () => {
  const greeting = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(greetingsFetch());
  }, [dispatch]);

  return (
    <h1>{greeting.message}</h1>
  );
};

export default Greeting;
