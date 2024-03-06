import "./App.css";

const Addition = () => {
  const a = 2;
  const b = 5;
  return (
    <p>
      The result of {a} + {b} is {a + b}
    </p>
  );
};

const TemperatureCalculator = () => {
  const celsius = 30;
  const fahranheit = (celsius * 9) / 5 + 32;
  return (
    <p>
      {celsius} degree celsius is equal to {fahranheit} fahranheit.
    </p>
  );
};

const CombinedOperations = () => {
  const a = 15;
  const b = 7;
  const c = 3;

  return (
    <div>
      <p>
        {a} + {b} + {c} equal {a + b + c}
      </p>
      <p>
        {a} - {b} equals {a - b}
      </p>
      <p>
        {a} * {b} equals {a * b}
      </p>
    </div>
  );
};

const Welcome = () => {
  const firstName = "John";
  const lastName = "Doe";
  return <p>{`Welcome ${firstName} ${lastName}`}</p>;
};

export default function App() {
  return (
    <main>
      <Addition />
      <TemperatureCalculator />
      <CombinedOperations />
      <Welcome />
    </main>
  );
}
