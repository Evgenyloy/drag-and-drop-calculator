import { useDragAndDrop } from "../../hooks/useDragAndDrop";
import { useOperationSelector } from "../../hooks/useOperation";
import { setRunTime } from "../../slice/calculatorSlice";
import { ICanvasButtonProps } from "../../types/types";
import { handleButtonClick } from "../../utils/canvasUtils";
import { setClassName } from "./utils";

function CanvasButton({ canvas, setCanvas, id, text }: ICanvasButtonProps) {
  const { runTime, dispatch } = useOperationSelector();
  const { setDisable, setDraggable } = useDragAndDrop(canvas);

  return (
    <div
      className={setClassName(runTime, id)}
      id={`btn-${id}`}
      onClick={(e) =>
        handleButtonClick(
          e,
          setDisable,
          setDraggable,
          runTime,
          canvas,
          dispatch,
          setRunTime,
          setCanvas
        )
      }
    >
      <div className="buttons__button">{text}</div>
    </div>
  );
}

export default CanvasButton;
