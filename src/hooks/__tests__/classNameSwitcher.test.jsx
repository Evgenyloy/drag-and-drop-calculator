import { vi, describe, expect, it } from "vitest";
import { classNameSwitcher } from "../useDragAndDrop";

describe("classNameSwitcher test", () => {
  const mockSetClassName = vi.fn();
  it("should call setClassName with id 1 and without disable class", () => {
    classNameSwitcher("calculator", true, mockSetClassName, "1");

    expect(mockSetClassName).toHaveBeenCalledWith(
      `calculator__row calculator__row-1`
    );
  });
  it("should call setClassName with id 1 and with disable class", () => {
    classNameSwitcher("calculator", false, mockSetClassName, "1");

    expect(mockSetClassName).toHaveBeenCalledWith(
      `calculator__row calculator__row-1 disable`
    );
  });
});
