import React from 'react';

const LabelButton = ({ icon, id, label, onClick, isSelected }) => {
  const labelStyle = {
    width: "8rem",
    backgroundColor: isSelected ? "blue" : "gray",
    color: isSelected ? "white" : "black",
    cursor: 'pointer'
  };

  const handleClick = (e) => {
    e.preventDefault(); 
    onClick(id);
  };

  return (
    <label
      className={`btn d-flex flex-column align-items-center custom-radio`}
      style={labelStyle}
      onClick={handleClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={icon} viewBox="0 0 16 16">
        <path d={icon === "bi bi-star" ? "M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" : icon === "bi bi-check-circle" ? "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" : "M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"}/>
      </svg>
      <input type="radio" name="options" id={id} autoComplete="off" />
      {label}
    </label>
  );
};

export default LabelButton;
