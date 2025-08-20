import type { Role as Role } from "@/constant/nav";

export type TableFeature = "view" | "updateInfo" | "updateStatus" | "viewPatientDetails";

export const tableFeaturesByRole: Record<Role, TableFeature[]> = {
  guest: ["view"],
  surgical: ["view", "updateStatus"],
  admin: ["view", "updateInfo", "updateStatus", "viewPatientDetails"],
};