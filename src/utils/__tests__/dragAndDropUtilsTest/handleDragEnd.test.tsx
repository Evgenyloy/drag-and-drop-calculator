import { vi, describe, it, expect, afterEach } from "vitest";
import { handleDragEnd } from "../../dragAndDropUtils";

describe("handleDragEnd test", () => {
  const mockSetDragOverClass = vi.fn();
  const mockSetDragStartClass = vi.fn();
  const currentTarget = document.createElement("div");
  const relatedTarget = document.createElement("div");
  const event = {
    currentTarget,
    relatedTarget,
    target: document.createElement("div"),
  } as unknown as React.DragEvent<HTMLDivElement>;

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should do nothing if event.target is not instance of HTMLElement", () => {
    const event = {
      currentTarget,
      relatedTarget,
      target: null,
    } as unknown as React.DragEvent<HTMLDivElement>;

    handleDragEnd(event, mockSetDragOverClass, mockSetDragStartClass);

    expect(mockSetDragOverClass).not.toHaveBeenCalled();
    expect(mockSetDragStartClass).not.toHaveBeenCalled();
  });

  it("should call setDragOverClass if event.currentTarget is not contains event.relatedTarget", () => {
    handleDragEnd(event, mockSetDragOverClass, mockSetDragStartClass);

    expect(mockSetDragStartClass).toHaveBeenCalled();
  });

  it("should call setDragStartClass", () => {
    handleDragEnd(event, mockSetDragOverClass, mockSetDragStartClass);

    expect(mockSetDragOverClass).toHaveBeenCalled();
  });
});
