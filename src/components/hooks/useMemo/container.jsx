import React, { useMemo, useState } from "react";
import Screen from "./screen";

function Container() {
  const [age, setAge] = useState(10);
  const [salary, setSalary] = useState(1000);

  const setAgeHandler = () => {
    setAge(age + 1);
  };

  const setSalaryHandler = () => {
    setSalary(salary + 1000);
  };

  const ageEvenChecker = useMemo(() => {
    console.log("even checking....");
    return age % 2 === 0 ? "Age is even" : "Age is odd";
  }, [age]);

  return (
    <>

      <Screen
        age={age}
        ageEvenChecker={ageEvenChecker}
        salary={salary}
        setSalaryHandler={setSalaryHandler}
        setAgeHandler={setAgeHandler}
      />
    </>
  );
}

export default Container;
