const nestedObject = {
    key1: "value1",
    key2: {
      innerKey1: "innerValue1",
      innerKey2: "innerValue2"
    },
    key3: {
      innerKey3: {
        deepInnerKey1: "deepInnerValue1",
        deepInnerKey2: "deepInnerValue2"
      }
    }
  };
  
  console.log(nestedObject?.name?.id);
  console.log('Code will execute after using optional chaining !');
  