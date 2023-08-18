import React, { useState } from "react";
import PropTypes from "prop-types";

/**
 * Import styles
 */
import "normalize.css";
import "./WordCloud.css";

/**
 * Import Elements
 */
import Cloud from "./Cloud";
import Sidebar from "./Sidebar";

/**
 * WordCloud functional component
 * @param {Object} props Props of the component
 * @returns {JSX.Element} The rendered component
 */
const WordCloud = (props) => {
  const [selectedTopics, setSelectedTopics] = useState([]);
  /**
   * Click handler
   * @param {String} topic Whole topic object
   * @return {void}
   */

  const onSelectTopic = (event, topic) => {
    if (event.ctrlKey) {
      // Check if the Control key was pressed
      if (selectedTopics.find((t) => t.id === topic.id)) {
        setSelectedTopics(selectedTopics.filter((t) => t.id !== topic.id));
      } else {
        setSelectedTopics([...selectedTopics, topic]);
      }
    } else {
      setSelectedTopics([topic]); // If the Control key was not pressed, replace the selected topics with the clicked topic
    }
  };

  const { fontName, fontSizes, height, topics, width } = props;

  if (topics.length === 0) {
    return <span>No topics available.</span>;
  }

  return (
    <section className="wordcloud">
      <div className="d-flex flex-column">
        <div>
          <h1 className="wordcloud__title text-center">WordCloud</h1>
          <Cloud
            fontName={fontName}
            fontSizes={fontSizes}
            height={height}
            onSelectTopic={onSelectTopic}
            selectedTopics={selectedTopics}
            topics={topics}
            width={width}
          />
        </div>
        <Sidebar topics={selectedTopics} />
      </div>
    </section>
  );
};

WordCloud.propTypes = {
  fontName: PropTypes.string,
  fontSizes: PropTypes.array,
  height: PropTypes.number,
  topics: PropTypes.array,
  width: PropTypes.number,
};

WordCloud.defaultProps = {
  fontName: "Sans-Serif",
  fontSizes: [13, 20, 25, 30, 35, 40, 45, 50],
  height: 400,
  topics: [],
  width: 400,
};

export default WordCloud;
