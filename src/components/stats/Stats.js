import Button from "../button/Button";
import "../stats/stats.css";

const Stats = ({ statisticSection }) => {

  const { Label, Title, Subtitle, Statistics } = statisticSection;
  // console.log(Statistics[0].count);

  return (
    <section className="statsSection">
      <div className="statsContainer conatainer containerPadding">
        <div className="statsLeft">
          <div className="label">
            <Button text={Label} />
          </div>
          <div className="statscontent">
            <h1>{Title}</h1>
            <p>{Subtitle}</p>
          </div>
        </div>
        <div className="statsRight">
          <div className="stats">
            <div className="statsText">
              <h1>80%</h1>
              <h3>Growth in social media</h3>
            </div>
            <div className="statsText">
              <h1>100+</h1>
              <h3>Leads to business</h3>
            </div>
            <div className="statsText">
              <h1>99%</h1>
              <h3>Customer Satisfaction Rate</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
