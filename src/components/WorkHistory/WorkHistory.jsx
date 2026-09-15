import { useParams } from "react-router-dom";

import "./WorkHistory.css";
import { WORK_HISTORY_DATA } from "../../utils/workHistoryData.js";
import timeline from "../../assets/timeline.svg";

function WorkHistory() {
  const { year } = useParams();
  const selectedYear = year || "2026";

  const activeYearData = WORK_HISTORY_DATA.find(
    (item) => item.yearId === selectedYear,
  );

  return (
    <section className="work-history">
      <div className="work-history__timeline">
        <img src={timeline} alt="Timeline" />
      </div>

      <div className="work-history__content">
        {activeYearData &&
          activeYearData.event.map((event, index) => (
            <div key={index} className="work-history__card">
              <span
                className={`work-history__bullet work-history__bullet--${event.type}`}
              >
                &bull;
              </span>
              <div className="work-history__card-content">
                {event.role && (
                  <p className="work-history__role">{event.role}</p>
                )}
                <p className="work-history__description">{event.description}</p>
                {event.project && (
                  <p className="work-history__project">{event.project}</p>
                )}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default WorkHistory;
