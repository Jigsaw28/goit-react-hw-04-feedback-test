import { Stat, Text } from './Statistics.styled';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positiveFeedback,
}) => {
  return (
    <Stat>
      <Text>Good: {good}</Text>
      <Text>Neutral: {neutral}</Text>
      <Text>Bad: {bad}</Text>
      <Text>Total: {total}</Text>
      <Text>Positive feedback: {positiveFeedback}%</Text>
    </Stat>
  );
};
