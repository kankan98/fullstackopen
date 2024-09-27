import StatisticLine from "../StatisticLine";
const Statistics = ({ good, neutral, bad }) => {
  return good !== 0 || neutral !== 0 || bad !== 0 ? (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={good + neutral + bad} />
        <StatisticLine text="average" value={(good + neutral + bad) / 3} />
        <StatisticLine
          text="positive"
          value={(good / (good + neutral + bad) || 0) * 100 + "%"}
        />
      </tbody>
    </table>
  ) : (
    <p>No feedback given</p>
  );
};

export default Statistics;
