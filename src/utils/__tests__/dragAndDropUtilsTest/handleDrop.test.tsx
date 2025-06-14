import { vi, it, describe, expect, afterEach } from "vitest";
import { handleDrop } from "../../dragAndDropUtils";

describe("handleDrop test 2", () => {
  const currentTarget = document.createElement("div");
  const relatedTarget = document.createElement("div");
  const target = document.createElement("div");
  const event = {
    target,
    relatedTarget,
    currentTarget,
    preventDefault: vi.fn(),
  } as unknown as React.DragEvent<HTMLDivElement>;
  const canvas = [{ id: "1" }, { id: "2" }] as any;
  const setDragOverClass = vi.fn();
  const setCurrentRow = vi.fn();
  const setCurrentRowIndex = vi.fn();
  const setLyingRow = vi.fn();
  const setLyingRowIndex = vi.fn();
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should do nothing if disableCheck true", () => {
    handleDrop(
      event,
      canvas,
      "1",
      setDragOverClass,
      setCurrentRow,
      setCurrentRowIndex,
      setLyingRow,
      setLyingRowIndex,
      true
    );

    expect(setDragOverClass).not.toHaveBeenCalled();
    expect(setCurrentRow).not.toHaveBeenCalled();
    expect(setCurrentRowIndex).not.toHaveBeenCalled();
    expect(setLyingRow).not.toHaveBeenCalled();
    expect(setLyingRowIndex).not.toHaveBeenCalled();
  });
  it("should do nothing if e.target not instance of HTMLElement", () => {
    const target = null;
    const event = {
      target,
    } as unknown as React.DragEvent<HTMLDivElement>;

    handleDrop(
      event,
      canvas,
      "1",
      setDragOverClass,
      setCurrentRow,
      setCurrentRowIndex,
      setLyingRow,
      setLyingRowIndex,
      true
    );

    expect(setDragOverClass).not.toHaveBeenCalled();
    expect(setCurrentRow).not.toHaveBeenCalled();
    expect(setCurrentRowIndex).not.toHaveBeenCalled();
    expect(setLyingRow).not.toHaveBeenCalled();
    expect(setLyingRowIndex).not.toHaveBeenCalled();
  });
  it("should call setCurrentRowIndex and setLyingRow if row.id === rowOnCanvasId", () => {
    const target = document.createElement("div");
    target.closest = vi.fn().mockReturnValue({ id: "1" });
    const event = {
      preventDefault: vi.fn(),
      target,
      currentTarget: {
        contains: vi.fn().mockReturnValue(false),
      },
    } as unknown as React.DragEvent<HTMLDivElement>;

    handleDrop(
      event,
      canvas,
      "1",
      setDragOverClass,
      setCurrentRow,
      setCurrentRowIndex,
      setLyingRow,
      setLyingRowIndex,
      false
    );
    expect(event.preventDefault).toHaveBeenCalled();
    expect(setCurrentRowIndex).toHaveBeenCalled();
    expect(setLyingRow).toHaveBeenCalled();
  });
  it("should call setLyingRowIndex if row.id === rowOnCanvasId", () => {
    const canvas = [{ id: "1" }, { id: "2" }] as any;
    handleDrop(
      event,
      canvas,
      "1",
      setDragOverClass,
      setCurrentRow,
      setCurrentRowIndex,
      setLyingRow,
      setLyingRowIndex,
      false
    );

    expect(setLyingRowIndex).toHaveBeenCalled();
  });
  it("should not call setLyingRowIndex if row.id !== rowOnCanvasId", () => {
    const canvas = [{ id: "1" }, { id: "2" }] as any;
    handleDrop(
      event,
      canvas,
      "3",
      setDragOverClass,
      setCurrentRow,
      setCurrentRowIndex,
      setLyingRow,
      setLyingRowIndex,
      false
    );

    expect(setLyingRowIndex).not.toHaveBeenCalled();
  });
  it(
    'should call setDragOverClass with "" if currentTarget not contains relatedTarget',()=>{
      const currentTarget = document.createElement("div");
      const relatedTarget = document.createElement("div");
      currentTarget.appendChild(relatedTarget)
      const target = document.createElement("div");
      const event = {
        target,
        relatedTarget,
        currentTarget,
        preventDefault: vi.fn(),
      } as unknown as React.DragEvent<HTMLDivElement>;

      handleDrop(
        event,
        canvas,
        "3",
        setDragOverClass,
        setCurrentRow,
        setCurrentRowIndex,
        setLyingRow,
        setLyingRowIndex,
        false
      );

      expect(setDragOverClass).not.toHaveBeenCalled();
    }
  );
});
