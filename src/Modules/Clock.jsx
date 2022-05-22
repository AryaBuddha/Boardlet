import React, { useEffect, useState } from "react";

import WidgetWrapper from "../WidgetWrapper";

import dayjs from "dayjs";

const Clock = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    genTime();
  }, []);

  const genTime = () => {
    setTime(dayjs().format("hh:mm A"));
    setTimeout(genTime, 1000);
  };

  return (
    <WidgetWrapper>
      <div className="flex flex-col justify-center items-center h-full text-white">
        <h1 className="text-7xl font-bold">{time}</h1>
        <h1 className="font-semibold text-xl">Friday, May 20</h1>
      </div>
    </WidgetWrapper>
  );
};

export default Clock;
