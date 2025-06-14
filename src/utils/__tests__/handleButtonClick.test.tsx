import { beforeEach, describe, expect, it, vi } from "vitest";
import { handleButtonClick } from "../canvasUtils";
import Row1 from "../../components/calculator/Row1";
import Row2 from "../../components/calculator/Row2";

const mockDispatch = vi.fn();
const mockSetDisable = vi.fn();
const mockSetDraggable = vi.fn();
const mockSetCanvas = vi.fn();
const mockSetRunTime = vi.fn();

const mockEvent = (id: string) => ({
  target: document.createElement("div"),
  currentTarget: { id },
});

describe("handleButtonClick test", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should do nothing if e.target is not instance of HTMLElement", () => {
    const event = { target: null, currentTarget: { id: "btn-1" } };

    handleButtonClick(
      event as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>,
      mockSetDisable,
      mockSetDraggable,
      true,
      [],
      mockDispatch,
      mockSetRunTime,
      mockSetCanvas
    );

    expect(mockDispatch).not.toHaveBeenCalled();
    expect(mockSetDisable).not.toHaveBeenCalled();
    expect(mockSetDraggable).not.toHaveBeenCalled();
    expect(mockSetCanvas).not.toHaveBeenCalled();
  });

  it("should call setDisable, setDraggable, setCanvas functions if canvas.length between 0 and 4   ", () => {
    const canvas = [
      { id: "1", row: Row1, order: "1" },
      { id: "2", row: Row2, order: "2" },
    ];
    const event = mockEvent("btn-1");

    handleButtonClick(
      event as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>,
      mockSetDisable,
      mockSetDraggable,
      true,
      canvas,
      mockDispatch,
      mockSetRunTime,
      mockSetCanvas
    );

    expect(mockSetDisable).toHaveBeenCalled();
    expect(mockSetDraggable).toHaveBeenCalled();
    expect(mockSetCanvas).toHaveBeenCalled();
  });

  it("should dispatch setRunTime if 'btn-1' clicked and runTime === false", () => {
    const event = mockEvent("btn-1");

    handleButtonClick(
      event as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>,
      mockSetDisable,
      mockSetDraggable,
      false,
      [],
      mockDispatch,
      mockSetRunTime,
      mockSetCanvas
    );

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockSetRunTime).toHaveBeenCalledWith(true);
  });
  
  it("should dispatch setRunTime if 'btn-2' clicked and runTime === true", () => {
    const event = mockEvent("btn-2");

    handleButtonClick(
      event as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>,
      mockSetDisable,
      mockSetDraggable,
      true,
      [],
      mockDispatch,
      mockSetRunTime,
      mockSetCanvas
    );

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockSetRunTime).toHaveBeenCalledWith(false);
  });
});
