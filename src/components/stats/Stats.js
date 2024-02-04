import Button from "../button/Button";
import "../stats/stats.css";

const Stats = ({ statisticSection }) => {
  const { label, title, subtitle, statistics } = statisticSection;

  return (
    <section className="statsSection">
      <div className="statsContainer conatainer containerPadding">
        <div className="statsLeft">
          <div className="label">
            <Button text={label} />
          </div>
          <div className="statscontent">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
        </div>
        <div className="statsRight">
          <div className="stats">
            <div className="statsText">
              <h1> {statistics[0].count} </h1>
              <h3> {statistics[0].description} </h3>
            </div>
            <div className="statsText">
              <h1> {statistics[1].count} </h1>
              <h3> {statistics[1].description} </h3>
            </div>
            <div className="statsText">
              <h1> {statistics[2].count} </h1>
              <h3> {statistics[2].description}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
