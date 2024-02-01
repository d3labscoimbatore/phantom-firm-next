import Button from "../button/Button";
import "../stats/stats.css";

const Stats = () => {
  return (
    <div className="statsSection">
      <div className="statsContainer conatainer">
        <div className="statsLeft">
          <div className="label">
            <Button text="Promises" />
          </div>
          <div className="statscontent">
            <h1>Numbers are telling our story</h1>
            <p>
              Explore our key statistics for a quick overview of our impact and
              achievements in real-time
            </p>
          </div>
        </div>
        <div className="statsRight">
          <div className="stats">
            <div className="statsText">
              <h1>80%</h1>
              <span>Growth in social media</span>
            </div>
            <div className="statsText">
              <h1>100+</h1>
              <span>Leads to business</span>
            </div>
            <div className="statsText">
              <h1>99%</h1>
              <span>Customer Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
