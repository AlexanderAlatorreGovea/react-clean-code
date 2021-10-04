import React from "react";

const Crud = () => {
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    fetch("/v2/users")
      .then((response) => response.json())
      .then((data) => setNameList(data))
      .catch((e) => alert(e));
  });

  return <div>{nameList.join(", ")}</div>;
};

export default Crud;
