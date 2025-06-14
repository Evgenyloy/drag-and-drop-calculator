import { vi, describe, expect, it } from "vitest";
import { dragSwitcher } from "../useDragAndDrop";

describe("dragSwitcher test", () => {
  it("should call setDraggable with true if field === canvas", () => {
    const mockSetDraggable = vi.fn();

    dragSwitcher("canvas", true, mockSetDraggable);

    expect(mockSetDraggable).toHaveBeenCalledWith(true);
  });
  
  it("should call setDraggable with true if field === calculator && disable === true", () => {
    const mockSetDraggable = vi.fn();

    dragSwitcher("calculator", true, mockSetDraggable);

    expect(mockSetDraggable).toHaveBeenCalledWith(true);
  });

  it("should call setDraggable with false if field === calculator && disable !== true", () => {
    const mockSetDraggable = vi.fn();

    dragSwitcher("calculator", false, mockSetDraggable);

    expect(mockSetDraggable).toHaveBeenCalledWith(false);
  });
});
