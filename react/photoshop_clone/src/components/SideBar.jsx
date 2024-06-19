import React from "react";

export default function SideBar({
  options,
  currentOption,
  setCurrentOption,
  filter,
  setCurrentValue,
}) {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          {options.map((ele, index) => {
            return (
              <li
                key={ele}
                className={`${index === currentOption ? "active" : ""}`}
              >
                <button
                  onClick={() => {
                    setCurrentOption(index);
                    setCurrentValue(filter[Object.keys(filter)[index]]);
                  }}
                >
                  {options[index]}{" "}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
