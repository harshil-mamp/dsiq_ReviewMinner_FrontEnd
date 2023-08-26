import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { enrichTopics } from "./utils/dataprocessor";

import d3Cloud from "d3-cloud";

const Cloud = (props) => {
  const {
    onSelectTopic,
    fontName,
    fontSizes,
    height,
    selectedTopics,
    topics,
    width,
  } = props;

  const [cloudDimensions, setCloudDimensions] = useState([]);
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    if (topics.length === 0) {
      return;
    }

    /** Start calculation of cloud */
    d3Cloud()
      .size([width, height])
      .words(enrichTopics(topics, fontSizes).entities)
      .padding(10)
      .font(fontName)
      .text((d) => d.label)
      .fontSize((d) => d.fontSize)
      .random(() => 0.5)
      .rotate(() => 0)
      .on("end", (cloudDimensions) => {
        setCloudDimensions(cloudDimensions);
        setIsProcessing(false);
      })
      .start();
  }, [fontName, fontSizes, height, topics, width]);

  const getClassNames = (item) => {
    let classNames = "wordcloud__cloud_label";

    if (item.sentimentScore > 60) {
      classNames += " wordcloud__cloud_label--color-green";
    } else if (item.sentimentScore < 40) {
      classNames += " wordcloud__cloud_label--color-red";
    } else {
      classNames += " wordcloud__cloud_label--color-grey";
    }

    // if (
    //   selectedTopic !== null &&
    //   selectedTopic.hasOwnProperty("id") &&
    //   selectedTopic.id === item.id
    // ) {
    //   classNames += " wordcloud__cloud_label--is-active";
    // }

    if (selectedTopics.find((topic) => topic.id === item.id)) {
      classNames += " wordcloud__cloud_label--is-active";
    }

    return classNames;
  };

  if (isProcessing) {
    return (
      <div className="wordcloud__container_cloud">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="wordcloud__container_cloud">
      <div className="wordcloud__cloud">
        <svg width={width} height={height}>
          <g transform={`translate(${width / 2}, ${height / 2})`}>
            {cloudDimensions.map((item) => (
              <text
                className={getClassNames(item)}
                key={item.id}
                onClick={(event) => onSelectTopic(event, item)}
                style={{
                  fontSize: item.size,
                  fontFamily: fontName,
                }}
                textAnchor="middle"
                transform={`translate(${item.x} , ${item.y} )`}
              >
                {item.text}
              </text>
            ))}
          </g>
        </svg>
      </div>
      {topics.length > cloudDimensions.length ? (
        <p className="worcloud__hint">
          Some topics cannot be displayed due to available space.
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

Cloud.propTypes = {
  fontName: PropTypes.string.isRequired,
  fontSizes: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired,
  onSelectTopic: PropTypes.func.isRequired,
  selectedTopic: PropTypes.object,
  topics: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
};

Cloud.defaultProps = {
  selectedTopic: null,
};

export default Cloud;
