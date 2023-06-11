import data from "../../utils/star-students.json";
import activity from "../../utils/student-activity.json";
import css from "./Report.module.css";

const Report = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <span className={css.header}>Star Students</span>

        <div className={css.table}>
          <div className={css.title}>
            <div>
              <span>ID</span>
              <span>Name</span>
            </div>
            <div>
              <span>Marks</span>
              <span>Year</span>
            </div>
          </div>
          <div className={css.items}>
            <div>
              {data.map((card, i) => (
                <div className={css.item}>
                  <span>{card.id}</span>
                </div>
              ))}
            </div>
            <div>
              {data.map((card, i) => (
                <div className={css.item}>
                  <img src={card.img} alt="" />
                  <span>{card.name} </span>
                </div>
              ))}
            </div>
            <div>
              {data.map((card, i) => (
                <div className={css.item}>
                  <span>{card.mark}</span>
                </div>
              ))}
            </div>
            <div>
              {data.map((card, i) => (
                <div className={css.item}>
                  <span>{card.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={css.container}>
        <div className={css.header}>Sudent Activity</div>
        {activity.map((item, i) => (
          <div className={css.activity}>
            <div>
              <img src={item.img} alt="" />
              <span>
                <span>{item.title}</span>
                <span>{item.description} </span>
              </span>
            </div>
            <span>{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Report;
