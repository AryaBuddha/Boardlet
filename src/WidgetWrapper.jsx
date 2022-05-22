import React from "react";

const WidgetWrapper = ({ children }) => {
  return (
    <div className="w-full h-full shadow-xl rounded-xl bg-slate-800">
      {children}
    </div>
  );
};

export default WidgetWrapper;
