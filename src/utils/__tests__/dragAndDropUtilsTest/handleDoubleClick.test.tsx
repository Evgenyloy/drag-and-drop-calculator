import { vi, it, describe, expect, afterEach } from "vitest";
import { handleDoubleClick } from "../../dragAndDropUtils";

describe("handleDoubleClick test", () => {
  const event = {
    target: document.createElement("div"),
    currentTarget: document.createElement("div"),
  } as unknown as React.MouseEvent<HTMLDivElement>;
  const mockSetCanvas = vi.fn();
  const canvas = [{ id: "1" }] as any;

  it("should do nothing if runTime false", () => {
    handleDoubleClick(event, mockSetCanvas, canvas, true);

    expect(mockSetCanvas).not.toHaveBeenCalled();
  });
  
  it("should call setCanvas", () => {
    handleDoubleClick(event, mockSetCanvas, canvas, false);

    expect(mockSetCanvas).toHaveBeenCalled();
  });
});
