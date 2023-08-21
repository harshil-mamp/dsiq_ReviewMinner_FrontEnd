import React from "react";
import PropTypes from "prop-types";

/**
 * Renders Sidebar as functional component
 * @param  {Object} props Topic to display
 * @return {ReactElement}
 */
const Sidebar = (props) => {
  const { topics } = props;
  console.log("**", topics);

  if (topics == null) {
    return (
      <div className="wordcloud__container_sidebar">
        <div className="wordcloud__sidebar">
          <h1 className="wordcloud__sidebar_title">Information</h1>
          <p className="wordcloud__description">
            Choose a topic from the wordcloud to see some details.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="wordcloud__container_sidebar">
      <div className="wordcloud__sidebar">
        <h1 className="wordcloud__sidebar_title">Details of selected topics</h1>
        <table className="wordcloud__sidebar_metatable">
          <thead>
            <tr>
              <th style={{ padding: "1rem" }}>Topic</th>
              <th style={{ padding: "1rem" }}>Total Mentions</th>
              <th style={{ padding: "1rem" }}>Positive Mentions</th>
              <th style={{ padding: "1rem" }}>Neutral Mentions</th>
              <th style={{ padding: "1rem" }}>Negative Mentions</th>
            </tr>
          </thead>
          {/* <tbody>
            {topics.map((topic) => (
              <tr key={topic.id} className="wordcloud__sidebar_metatable_row">
                <td className="wordcloud__sidebar_metatable_value">
                  {topic.label}
                </td>
              </tr>
            ))}
          </tbody> */}
          <tbody>
            {topics.map((topic) => (
              <tr key={topic.id} className="wordcloud__sidebar_metatable_row">
                <td className="wordcloud__sidebar_metatable_value">
                  {topic.label}
                </td>
                <td className="wordcloud__sidebar_metatable_value">
                  {topic.volume || "0"}
                </td>
                <td className="wordcloud__sidebar_metatable_value wordcloud__sidebar_metatable_value--color-green">
                  {topic.sentiment.positive || "0"}
                </td>
                <td className="wordcloud__sidebar_metatable_value wordcloud__sidebar_metatable_value--color-grey">
                  {topic.sentiment.neutral || "0"}
                </td>
                <td className="wordcloud__sidebar_metatable_value wordcloud__sidebar_metatable_value--color-red">
                  {topic.sentiment.negative || "0"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  topic: PropTypes.object,
};

Sidebar.defaultProps = {
  topic: null,
};

export default Sidebar;
