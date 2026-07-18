import type { Deployment, DeploymentStatus } from "../types/deployment";

/**
 * Returns a human-readable status label for a deployment status.
 */
export function getStatusLabel(status: DeploymentStatus): string {
  switch (status) {
    case "success":
      return "Success";
    case "failed":
      return "Failed";
    case "queued":
    case "in_progress":
      return "In Progress";
    default:
      return "Unknown";
  }
}

/**
 * Formats the deployment's start time into a readable string.
 */
export function formatDeploymentTime(deployment: Deployment): string {
  return new Date(deployment.started_at).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "UTC",
  });
}
