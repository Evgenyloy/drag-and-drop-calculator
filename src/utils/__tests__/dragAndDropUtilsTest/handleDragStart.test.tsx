import { it, describe, vi, expect } from "vitest";
import { handleDragStart } from "../../dragAndDropUtils";

describe("handleDragStart test", () => {
  const mockDispatch = vi.fn();
  const mockSetDragStartClass = vi.fn();

  it("should do nothing if e.target is not instance of HTMLElement", () => {
    const event = {
      target: null,
    } as unknown as React.DragEvent<HTMLDivElement>;

    handleDragStart(event, mockDispatch, mockSetDragStartClass);

    expect(mockDispatch).not.toHaveBeenCalled();
    expect(mockSetDragStartClass).not.toHaveBeenCalled();
  });

  it("should dispatch setCurrentRowId and set drag start class", () => {
    const event = {
      target: document.createElement("div"),
    } as unknown as React.DragEvent<HTMLDivElement>;

    handleDragStart(event, mockDispatch, mockSetDragStartClass);

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockSetDragStartClass).toHaveBeenCalled();
  });
});
