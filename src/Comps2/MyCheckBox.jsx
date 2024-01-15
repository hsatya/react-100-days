import { useState } from "react";

const MyCheckBox = () => {
  const [liked, setLiked] = useState(false);
  const handleCheck = (e) => {
    setLiked(e.target.checked);
  };
  return (
    <>
      <input type='checkbox' checked={liked} onChange={handleCheck} />{" "}
      <label>I Like this</label>
      {liked ? <p>You like this</p> : <p>You do not like this</p>}
    </>
  );
};

export default MyCheckBox;
