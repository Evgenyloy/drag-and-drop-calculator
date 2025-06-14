import { vi, describe, expect, it } from "vitest";
import { useDragAndDrop } from "../useDragAndDrop";
import { renderHook, act } from "@testing-library/react";

describe("useDragAndDrop test", () => {
  it("should return an object with correct properties", () => {
    const {result} = renderHook(useDragAndDrop);

    expect(result.current).toHaveProperty('disable')
    expect(result.current).toHaveProperty('draggable')
    expect(result.current).toHaveProperty('className')
    expect(result.current).toHaveProperty('setDisable')
    expect(result.current).toHaveProperty('setDraggable')


    expect(typeof result.current.disable).toBe('boolean')
    expect(typeof result.current.draggable).toBe('boolean')
    expect(typeof result.current.className).toBe('string')
    expect(typeof result.current.setDisable).toBe('function')
    expect(typeof result.current.setDraggable).toBe('function')
  });
});
