import React from "react";
import { ICalculatorProps, IRow } from "../../types/types";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Row4 from "./Row4";
import "./calculator.scss";

export const rowCalculatorItems: IRow[] = [
  { id: "1", row: Row1, order: "1" },
  { id: "2", row: Row2, order: "2" },
  { id: "3", row: Row3, order: "3" },
  { id: "4", row: Row4, order: "4" },
];

function Calculator({ canvas, setCanvas }: ICalculatorProps) {
  return (
    <div className="calculator">
      {rowCalculatorItems.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <item.row
              canvas={canvas}
              setCanvas={setCanvas}
              field={"calculator"}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Calculator;
