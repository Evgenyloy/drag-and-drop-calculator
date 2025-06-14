import { it, describe, expect, vi, beforeEach } from "vitest";
import { handleDragOver } from "../../dragAndDropUtils";

describe("handleDragOver test", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  const mockSetDragOverClass = vi.fn();

  it("should do nothing if e.target is not instance of HTMLElement", () => {
    const event = {
      target: null,
    } as unknown as React.DragEvent<HTMLDivElement>;

    handleDragOver(event, "canvas", mockSetDragOverClass);

    expect(mockSetDragOverClass).not.toHaveBeenCalled();
  });

  it('should call setDragOverClass with "drop-over" when field is "canvas" and currentTarget does not contain relatedTarget', () => {
    const event = {
      target: document.createElement("div"),
      relatedTarget: document.createElement("div"),
      currentTarget: document.createElement("div"),
      preventDefault: vi.fn(),
    } as unknown as React.DragEvent<HTMLDivElement>;

    handleDragOver(event, "canvas", mockSetDragOverClass);

    expect(event.preventDefault).toHaveBeenCalledOnce();
    expect(mockSetDragOverClass).toHaveBeenCalledWith("drop-over");
  });

  it("should not call setDragOverClass when the field is not equal to the canvas ", () => {
    const event = {
      target: document.createElement("div"),
      preventDefault: vi.fn(),
    } as unknown as React.DragEvent<HTMLDivElement>;

    handleDragOver(event, "no canvas", mockSetDragOverClass);

    expect(mockSetDragOverClass).not.toHaveBeenCalled();
  });

  it("should not call setDragOverClass when currentTarget contains relatedTarget", () => {
    const relatedTarget = document.createElement("div");
    const currentTarget = document.createElement("div");
    currentTarget.appendChild(relatedTarget);

    const event = {
      target: document.createElement("div"),
      relatedTarget,
      currentTarget,
      preventDefault: vi.fn(),
    } as unknown as React.DragEvent<HTMLDivElement>;

    handleDragOver(event, "canvas", mockSetDragOverClass);

    expect(mockSetDragOverClass).not.toHaveBeenCalled();
  });
});
