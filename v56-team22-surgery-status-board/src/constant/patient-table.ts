export type TableRole = "guest" | "admin" | "surgical team";

export type TableFeature = "view" | "updateInfo" | "updateStatus" | "viewPatientDetails";

export const tableFeaturesByRole: Record<TableRole, TableFeature[]> = {
  guest: ["view"],
  "surgical team": ["view", "updateStatus"],
  admin: ["view", "updateInfo", "updateStatus", "viewPatientDetails"],
};