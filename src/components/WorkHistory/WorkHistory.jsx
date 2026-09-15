import { useParams } from "react-router-dom";

import "./WorkHistory.css";
import { WORK_HISTORY_DATA } from "../../utils/workHistoryData.js";

function WorkHistory() {
  const { year } = useParams();
  const selectedYear = year || "2026";

  const activeYearData = WORK_HISTORY_DATA.find(
    (item) => item.yearId === selectedYear,
  );

  return (
    <section className="work-history">
      <div className="work-history__content">
        {activeYearData &&
          activeYearData.event.map((event, index) => (
            <div key={index} className="work-history__card">
              <span className={`bullet bullet--${event.type}`}>
                {event.type}
              </span>

              {event.role && (
                <h3 className="work-history__role">{event.role}</h3>
              )}

              {event.project && (
                <h4 className="work-history__project">{event.project}</h4>
              )}

              <p className="work-history__description">{event.description}</p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default WorkHistory;
