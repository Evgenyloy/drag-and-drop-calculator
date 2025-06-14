import { vi, it, describe, expect, afterEach } from "vitest";
import { handleDragLeave } from "../../dragAndDropUtils";

describe("handleDragLeave test", () => {
  const mockSetDragOverClass = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should do nothing if event.target is not instance of HTMLElement", () => {
    const event = {
      target: null,
      currentTarget: document.createElement("div"),
      relatedTarget: document.createElement("div"),
    } as unknown as React.DragEvent<HTMLDivElement>;

    handleDragLeave(event, mockSetDragOverClass);

    expect(mockSetDragOverClass).not.toHaveBeenCalled();
  });

  it(
    "should call setDragOverClass if currentTarget is not contains relatedTarget",
    () => {
      const event = {
        target: document.createElement("div"),
        currentTarget: document.createElement("div"),
        relatedTarget: document.createElement("div"),
      } as unknown as React.DragEvent<HTMLDivElement>;

      handleDragLeave(event, mockSetDragOverClass);

      expect(mockSetDragOverClass).toHaveBeenCalled();
    }
  );
  
  it(
    "should not call setDragOverClass if currentTarget is contains relatedTarget",
    () => {
      const currentTarget = document.createElement("div");
      const relatedTarget = document.createElement("div");
      currentTarget.append(relatedTarget);

      const event = {
        target: document.createElement("div"),
        currentTarget,
        relatedTarget,
      } as unknown as React.DragEvent<HTMLDivElement>;

      handleDragLeave(event, mockSetDragOverClass);

      expect(mockSetDragOverClass).not.toHaveBeenCalled();
    }
  );
});
