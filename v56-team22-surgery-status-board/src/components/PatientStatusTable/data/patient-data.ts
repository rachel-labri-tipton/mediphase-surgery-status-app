export type Patient = {
  id: string;
  name: string;
  status: string;
  color: string;
  message: string;
};

export const patientData: Patient[] = [
  {
    id: "P001",
    name: "John Doe",
    status: "Checked In",
    color: "#0077CC",
    message: "In the facility awaiting their procedure.",
  },
  {
    id: "P002",
    name: "Jane Smith",
    status: "Pre-Procedure",
    color: "#FFC107",
    message: "Undergoing surgical preparation.",
  },
  {
    id: "P003",
    name: "Alice Johnson",
    status: "In-Progress",
    color: "#FF5722",
    message: "Surgical procedure is underway.",
  },
  {
    id: "P004",
    name: "Bob Lee",
    status: "Closing",
    color: "#00C853",
    message: "Surgery completed. The patient is being prepared for recovery.",
  },
  {
    id: "P005",
    name: "Maria Garcia",
    status: "Recovery",
    color: "#4CAF50",
    message: "Patient transferred to post-surgery recovery room.",
  },
  {
    id: "P006",
    name: "Tom Brown",
    status: "Complete",
    color: "#607D8B",
    message: "Recovery completed. Patient awaiting dismissal.",
  },
  {
    id: "P007",
    name: "Linda White",
    status: "Dismissal",
    color: "#9C27B0",
    message: "Transferred to a hospital room for an overnight stay or for outpatient procedures the patient has left the hospital.",
  }
];