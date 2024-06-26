import React, { useState } from "react";
import styles from "./Select.module.css";

type TOption = {
  label: string;
  value: string | number;
};

type SelectProps = {
  options?: TOption[];
  multiSelect: boolean;
};

export default function Select({ options, multiSelect }: SelectProps) {
  const [selectedBox, setSelectedBox] = useState<TOption | undefined>();
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<TOption[]>([]);
  const [isMouseOverOptions, setIsMouseOverOptions] = useState(false);

  const toggleListVisibility = () => setIsListOpen(!isListOpen);

  const handleOptionClick = (
    eve: React.MouseEvent<HTMLLIElement, MouseEvent>,
    option: TOption
  ) => {
    if (multiSelect) {
      if (selectedOptions.includes(option))
        handleDeleteSelectedOption(eve, option);
      else setSelectedOptions((prev) => [...prev, option]);
    } else {
      if (option.label != selectedBox?.label) setSelectedBox(option);
    }
    setIsListOpen(false);
  };

  const clearOptions = (
    eve: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    eve.stopPropagation();
    if (multiSelect) {
      setSelectedOptions([]);
    } else {
      setSelectedBox(undefined);
    }
  };

  const isOptionActive = (option: TOption) =>
    option.label === selectedBox?.label ||
    selectedOptions.some((ele) => ele.label === option.label);

  const handleDeleteSelectedOption = (
    eve: React.MouseEvent<HTMLButtonElement | HTMLLIElement, MouseEvent>,
    option: TOption
  ) => {
    eve.stopPropagation();
    setSelectedOptions((prev) =>
      prev.filter((ele) => ele.label !== option.label)
    );
  };

  const renderMultiSelectOptions = () =>
    selectedOptions.map((option) => (
      <button
        key={option.value}
        className={styles["multi-selected-option"]}
        onClick={(eve) => handleDeleteSelectedOption(eve, option)}
      >
        {option.label}
        <span className={styles["remove-btn"]}> &times;</span>
      </button>
    ));

  const renderOptionsList = () => (
    <ul
      className={`${styles.options} ${isListOpen ? styles.show : ""}`}
      onMouseOver={() => {
        setIsMouseOverOptions(true);
      }}
      onMouseLeave={() => {
        setIsMouseOverOptions(false);
      }}
    >
      {options?.map((option) => (
        <li
          key={option.value}
          className={`${styles.option} ${
            isOptionActive(option) ? styles["active-option"] : ""
          }`}
          onClick={(eve) => handleOptionClick(eve, option)}
        >
          {option.label}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        {multiSelect ? "Multi Select" : "Single Select"}{" "}
      </h1>
      <div className={styles.container}>
        <div
          tabIndex={0}
          className={styles["selected-container"]}
          onClick={toggleListVisibility}
          onBlur={() => {
            if (!isMouseOverOptions) setIsListOpen(false);
          }}
        >
          <div className={styles["selected-option"]}>
            {multiSelect ? renderMultiSelectOptions() : selectedBox?.label}
          </div>
          <button className={styles["clear-btn"]} onClick={clearOptions}>
            &times;
          </button>
          <div className={styles.devider}></div>
          <div className={styles.caret}></div>
        </div>
        {renderOptionsList()}
      </div>
    </>
  );
}
