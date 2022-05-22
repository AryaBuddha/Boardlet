import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import Clock from "./Modules/Clock";

import { schedule } from "./Schedule";

const App = () => {
  dayjs.extend(isBetween);
  const [loading, setLoading] = useState(true);
  const [activeWidgets, setActiveWidgets] = useState([]);

  useEffect(() => {
    startup();
  }, []);

  const startup = () => {
    if (dayjs().get("seconds") == 0) {
      calculateEdits();
      setLoading(false);
    } else {
      setTimeout(startup, 1000);
    }
  };

  const calculateEdits = () => {
    schedule.forEach(
      (
        { startH, startM, endH, endM, component, startC, endC, startR, endR },
        index
      ) => {
        console.log(activeWidgets);
        console.log(activeWidgets[index]);
        if (activeWidgets[index] == undefined) {
          let startTime = startH * 60 + startM;
          let endTime = endH * 60 + endM;
          let currentTime = dayjs().get("hours") * 60 + dayjs().get("minutes");

          if (currentTime >= startTime && currentTime <= endTime) {
            const widgetPos = `col-start-${startC} col-end-${endC} row-start-${startR} row-end-${endR}`;
            setActiveWidgets((activeWidgets) => [
              ...activeWidgets,
              { pos: widgetPos, component: component },
            ]);
          }
        }
      }
    );
    setTimeout(calculateEdits, 3000);
  };

  return loading ? (
    <h1>Waiting for the start of the next minute...</h1>
  ) : (
    <>
      <div className="grid grid-cols-3 grid-rows-4 gap-4 h-screen w-full p-3">
        {activeWidgets.map(({ component, pos }) => {
          return <div className={pos}>{component}</div>;
        })}
      </div>
    </>
  );
};

export default App;
