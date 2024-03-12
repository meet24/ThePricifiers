// export default Sidebar;
import React, { useState } from "react";
import "../styles/temp1.css";
import { slide as Menu } from "react-burger-menu";

const Sidebar = ({ updateCustomStyle, customStyles, addCard, deleteCard }) => {
  const [showFontSizeSettings, setShowFontSizeSettings] = useState(false);
  const [showFontStyleSettings, setShowFontStyleSettings] = useState(false);

  const handleChange = (index, key, value) => {
    const updatedStyle = { ...customStyles[index], [key]: value };
    updateCustomStyle(index, updatedStyle);
  };

  const handleDoneClick = () => {
    // You can perform any actions needed when "Done" button is clicked
    console.log("Done button clicked");
  };

  return (
    <Menu className="sidebar">
      <button className="toggle-button add-card" onClick={addCard}>
        <span>Add Card</span>
      </button>
      <button className="toggle-button delete-card" onClick={deleteCard}>
        <span>Delete Card</span>
      </button>
      {customStyles.map((style, index) => (
        <div key={index} className="template border border-dark">
          <p>CSS Styles for Card {style.id}</p>
          <hr />
          <div className="d-flex gap-5">
            <label>Template Color</label>
            <div>
              <input
                type="color"
                value={style.templateColor}
                onChange={(e) =>
                  handleChange(index, "templateColor", e.target.value)
                }
              />
            </div>
          </div>
          <br />
          <div>
            <button
              className="toggle-button"
              onClick={() => setShowFontSizeSettings(!showFontSizeSettings)}
            >
              <span>{showFontSizeSettings ? "Done" : "Change Font Size"}</span>
            </button>
            {showFontSizeSettings && (
              <>
                <div>
                  <label>Font Size</label>
                  <input
                    type="number"
                    value={style.fontSize}
                    onChange={(e) =>
                      handleChange(index, "fontSize", parseInt(e.target.value))
                    }
                  />
                </div>
              </>
            )}
          </div>
          <br />
          <div>
            <button
              className="toggle-button"
              onClick={() => setShowFontStyleSettings(!showFontStyleSettings)}
            >
              <span>
                {showFontStyleSettings ? "Done" : "Change Font Style"}
              </span>
            </button>
            {showFontStyleSettings && (
              <>
                <div className="d-flex gap-2 rounded">
                  <label>Font Style for Card {style.id} </label>
                  <div>
                    <select
                      value={style.fontStyle}
                      onChange={(e) =>
                        handleChange(index, "fontStyle", e.target.value)
                      }
                    >
                      <option value="normal">Normal</option>
                      <option value="italic">Italic</option>
                      <option value="bold">Bold</option>
                    </select>
                  </div>
                </div>
              </>
            )}
          </div>
          <br />
        </div>
      ))}
      {/* "Done" Button */}
      <button className="done-button" onClick={handleDoneClick}>
        <span>Done</span>
      </button>
    </Menu>
  );
};

export default Sidebar;
