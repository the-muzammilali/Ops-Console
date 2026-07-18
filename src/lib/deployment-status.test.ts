import { describe, it, expect } from "vitest";
import { getStatusLabel, formatDeploymentTime } from "./deployment-status";
import type { Deployment } from "../types/deployment";

describe("Deployment Status Helpers", () => {
  describe("getStatusLabel", () => {
    it("should render 'finished' as a success/healthy label", () => {
      expect(getStatusLabel("finished")).toBe("Success");
    });

    it("should render 'failed' as a failed/down label", () => {
      expect(getStatusLabel("failed")).toBe("Failed");
    });

    it("should render 'queued' as an in-progress state label", () => {
      expect(getStatusLabel("queued")).toBe("In Progress");
    });

    it("should render 'in_progress' as an in-progress state label", () => {
      expect(getStatusLabel("in_progress")).toBe("In Progress");
    });
  });

  describe("formatDeploymentTime", () => {
    it("should read startedAt and return a readable timestamp", () => {
      const mockDeployment: Deployment = {
        id: "dep-123",
        status: "finished",
        startedAt: "2026-07-18T12:00:00Z",
        finishedAt: "2026-07-18T12:05:00Z",
      };

      const result = formatDeploymentTime(mockDeployment);
      // "2026-07-18T12:00:00Z" should format to "Jul 18, 2026, 12:00:00 PM"
      expect(result).toContain("Jul 18, 2026");
      expect(result).toContain("12:00:00");
    });
  });
});
