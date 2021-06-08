import { useEffect, useState } from "react";
import "./styles.css";
interface Calenderprops {
  timeStamp: number;
}

const Calender = ({ timeStamp }: Calenderprops) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const weekDayArray = ["Sun", "Mon", "Tue", "Wed", "The", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  useEffect(() => {
    if (timeStamp) {
      setCurrentDate(new Date(timeStamp));
    }
  }, [timeStamp]);
  const getDates = (inputDate: Date) => {
    let date = new Date(inputDate);
    let year = date.getFullYear();
    let month = date.getMonth();
    const monthStartDate = new Date(year, month, 1);
    const monthFirstDay = monthStartDate.getDay();
    let calenderArray = [];
    let i = 0;
    while (i < 35) {
      let calenderDate = new Date(year, month, 1 - monthFirstDay + i);
      calenderArray.push(calenderDate);
      i++;
    }
    return calenderArray;
  };

  const renderDate = (date: Date) => {
    const Datetext = date.getDate();
    const dateDay = weekDayArray[date.getDay()];
    let weekEnd = dateDay === "Sat" || dateDay === "Sun" ? "Weekend" : "";
    const today =
      date.getDate() === new Date().getDate() &&
      date.getMonth() === new Date().getMonth() &&
      date.getFullYear() === new Date().getFullYear()
        ? "currentDate"
        : "";
    return (
      <div className={`Date ${weekEnd} ${today}`} key={date.getTime()}>
        {Datetext}
      </div>
    );
  };
  const ChangeMonth = (type: string) => {
    let newDate = new Date(currentDate);
    if (type === "DEC") {
      newDate.setMonth(newDate.getMonth() - 1);
      setCurrentDate(newDate);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
      setCurrentDate(newDate);
    }
  };
  return (
    <div className="MainContainer">
      <div className="filters">
        <div
          className="areo left"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            ChangeMonth("DEC");
          }}
        />
        <div className="fullDate">{`${currentDate.getDate()} - ${
          months[currentDate.getMonth()]
        } - ${currentDate.getFullYear()}`}</div>
        <div
          className="areo right"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            ChangeMonth("INC");
          }}
        />
      </div>
      <div className="DateContainer">
        {weekDayArray.map((day) => (
          <div className="weekday" key={day}>
            {day}
          </div>
        ))}
        {getDates(currentDate).map((date) => renderDate(date))}
      </div>
    </div>
  );
};

export default Calender;
