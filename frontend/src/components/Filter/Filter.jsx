import { Form } from "react-bootstrap";
import React, { useState } from "react";
import useCustomization from "../../hooks/useCustomization";

const Filter = ({ selectedSources, selectedDate, selectedCategory }) => {
  const { sources, categories } = useCustomization();
  const [selectDate, setSelectDate] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");

  const handleSourceChange = (event) => {
    selectedSources(event);
    setSource(event);
  };

  const handleDate = (event) => {
    setSelectDate(event.target.value);
    selectedDate(event.target.value);
  };

  const handleCategory = (event) => {
    selectedCategory(event);
    setCategory(event);
  };

  return (
    <div
      className="bg-light p-2"
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        border: "1px solid #ddd",
        borderRadius: "16px",
        alignItems: "center",
      }}
    >
      <b>Filter By:</b>
      <Form.Group controlId="formDate">
        <Form.Control
          type="date"
          placeholder="Date"
          max={new Date().toISOString().split("T")[0]}
          value={selectDate}
          onChange={handleDate}
        />
      </Form.Group>
      <select
        style={{
          background: "white",
          color: "#111",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "8px",
          minWidth: "100px",
        }}
        placeholder="Categories"
        onChange={(event) => handleCategory(event?.target?.value)}
        value={category}
      >
        <option value="">Categories</option>
        {categories &&
          categories.map((category) => (
            <option key={category.category} value={category.category}>
              {category.category}
            </option>
          ))}
      </select>

      <select
        style={{
          background: "white",
          color: "#111",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "8px",
          minWidth: "100px",
        }}
        placeholder="Sources"
        onChange={(event) => handleSourceChange(event?.target?.value)}
        value={source}
      >
        <option value="">All Sources</option>
        {sources &&
          sources.map((source) => (
            <option key={source?.api} value={source?.api}>
              {source?.api}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Filter;
