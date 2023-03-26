import React from "react";
import { differenceInDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  const deadline = differenceInDays(new Date(taskObj.deadline), new Date());

  return (
    <div className="p-6 bg-white rounded-[5px] leading-[1.5] mt-4 shadow-[0_4px_5px_0px_rgba(0,0,0,0.1)]">
      {/* <div className="task"> */}
      <h3 className="text-lg text-tasktitle">{taskObj.title}</h3>
      <div className="deadline">
        son teslim: <span>{taskObj.deadline}</span>
      </div>
      <div className="text-xs pt-1">
        son teslim:
        <span
          // className={`"inline-block px-2 py-[3px] rounded-sm"
          //     ${
          //       deadline <= 3 && deadline >= 0 ? "bg-urgent" : "bg-normal"
          //     }
          // `}
          className={
            "inline-block px-2 py-[3px] rounded-sm " +
            (deadline <= 3 && deadline >= 0 ? "bg-urgent" : "bg-normal")
          }
        >
          {formatDistanceToNow(new Date(taskObj.deadline), {
            includeSeconds: true,
            addSuffix: true,
            locale: tr,
          })}
        </span>
      </div>
      <p className="pt-2 pb-3 text-sm text-[#444]">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block py-[5px] px-3 border border-solid border-[#ccc] mr-1 mb-1.5 rounded-[30px]"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block py-2 px-3 ml-auto bg-done shadow-[0_4px_5px_0px_rgba(0,0,0,0.05)] rounded-[3px] border-0 cursor-pointer"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
