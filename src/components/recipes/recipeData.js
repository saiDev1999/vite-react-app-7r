export const recipeDataStructure = () => {
  const recipeData = [
    {
      name: "biryani",
      coookTime: 20,
      origin: "hyderabd",
    },
    {
      name: "pizza",
      coookTime: 20,
      origin: "bengaluru",
    },
    {
      name: "cheese",
      coookTime: 20,
      origin: "bengaluru",
    },
  ];

  const structuredData = recipeData.map((each) => {
    return { data1: each.name, data2: each.coookTime, data3: each.origin };
  });
  console.log(structuredData);

  return structuredData;
};
