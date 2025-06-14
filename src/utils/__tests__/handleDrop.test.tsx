import { beforeEach, describe, expect, it, vi } from "vitest";
import { handleDrop } from "../canvasUtils";

describe("handleDrop test", () => {
  const mockSetCanvas = vi.fn();
  const event = { id: "", preventDefault: () => {} };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should prevent default event behavior", () => {
    const mockEvent = {
      preventDefault: vi.fn(),
      target: document.createElement("div"),
      id: "",
    };

    handleDrop(
      mockEvent as any,
      false,
      [{}, {}, { id: "2" }] as any,
      "1",
      mockSetCanvas
    );

    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });

  it("should do nothing if runtime true", () => {
    handleDrop(event as any, true, [], "1", mockSetCanvas);

    expect(mockSetCanvas).not.toHaveBeenCalled();
  });

  it("should do nothing if target is inside .calculator__row", () => {
    const mockEvent = {
      preventDefault: vi.fn(),
      target: document.createElement("div"),
    };
    mockEvent.target.closest = vi.fn().mockReturnValue(true);

    handleDrop(mockEvent as any, false, [], "", mockSetCanvas);

    expect(mockSetCanvas).not.toHaveBeenCalled();
  });

  it("should do nothing if canvas.length > 4", () => {
    handleDrop(
      event as any,
      false,
      [{}, {}, {}, {}, {}] as any,
      "1",
      mockSetCanvas
    );

    expect(mockSetCanvas).not.toHaveBeenCalled();
  });

  it("should do nothing if canvas contain currentRowId", () => {
    handleDrop(
      event as any,
      false,
      [{}, {}, {}, { id: "1" }] as any,
      "1",
      mockSetCanvas
    );

    expect(mockSetCanvas).not.toHaveBeenCalled();
  });
  
  it("should call setCanvas if currentRowId === true", () => {
    handleDrop(
      event as any,
      false,
      [{}, {}, { id: "2" }] as any,
      "1",
      mockSetCanvas
    );

    expect(mockSetCanvas).toHaveBeenCalled();
  });
});
