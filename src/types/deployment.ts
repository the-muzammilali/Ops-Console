export type DeploymentStatus = "queued" | "in_progress" | "finished" | "failed";

export type Deployment = {
  id: string;
  status: DeploymentStatus;
  startedAt: string;
  finishedAt: string | null;
};
