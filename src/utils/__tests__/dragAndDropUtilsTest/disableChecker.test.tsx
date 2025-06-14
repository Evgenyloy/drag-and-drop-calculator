import { vi, it, describe, expect, afterEach } from "vitest";
import { disableChecker } from "../../dragAndDropUtils";

describe("disableChecker test", () => {
  it("should return true if classname equal string", () => {
    const mockClassName = `calculator__row calculator__row-1  disable`;

    const result = disableChecker(mockClassName, "1");

    expect(result).toBeTruthy();
  });

  it("should return false if classname not equal string", () => {
    const mockClassName = `calculator__row calculator__row-1  disable`;

    const result = disableChecker(mockClassName, "10");

    expect(result).toBeFalsy();
  });
  
});
