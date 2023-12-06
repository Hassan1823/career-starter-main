//! local imports
import "./styles.scss";

const Card = () => {
  const arrayData = [
    {
      id: 1,
      imgUrl: "./green-bg.png",
      task: `2 Task / 2 Hours`,
      title1: `Introduction to `,
      title2: `Strategy Consulting`,
      subTitle: `Boston Consulting Group (BCG)`,
      ft: `FT Active`,
      btn: `Details`,
    },
    {
      id: 2,
      imgUrl: "./girl-bg.png",
      task: `2 Tasks / 2 hours`,
      title1: `Project Management `,
      title2: `Challenge`,
      subTitle: `Google Inc.`,
      ft: `FT Active`,
      btn: `Start`,
    },
    {
      id: 3,
      imgUrl: "./last-bg.png",
      task: `2 Tasks / 2 hours`,
      title1: `Lufthansa Aviation `,
      title2: `Management Challenge`,
      subTitle: `Lufthansa AG`,
      ft: `FT Active`,
      btn: `Start`,
    },
  ];

  return (
    <>
      {/* main car */}
      {arrayData.map((item) => {
        return (
          <>
            <div className="main-card-container" key={item.id}>
              {/* sub container */}
              <div className="grey-card-container">
                {/* bg img */}
                <img src={item.imgUrl} alt="card-bg" className="card-bg" />
                {/* task/ hours */}
                <p className="card-task-p">{item.task}</p>
                {/* title heading */}
                <h2 className="title-heading">
                  {item.title1} <br /> {item.title2}
                </h2>
                {/* sub title */}
                <p className="card-sub-heading">{item.subTitle}</p>
              </div>
              {/* card footer*/}
              <div className="card-footer">
                {/* FT active */}
                <div className="ft-active">
                  <div className="green"></div>
                  <b className="ft-active">{item.ft}</b>
                </div>

                {/* detail button */}
                <button className="detail-button">{item.btn}</button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
