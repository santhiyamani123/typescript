let courseArray = [
    { id: 1, name: "javascript" },
    { id: 2, name: "typescript" },
    { id: 11, name: "angular" },
    { id: 1, name: "javascript" },
  ];

var filterArray = courseArray.reduce((accumalator, current) => {
    if (
      !accumalator.some(
        (item) => item.id === current.id && item.name === current.name
      )
    ) {
      accumalator.push(current);
    }
    return accumalator;
  }, []);
  console.log(filterArray);