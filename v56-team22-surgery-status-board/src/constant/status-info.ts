export type StatusData = {status: string;
  message: string;
  color: string;
};


export const statusLabels = [
  'Checked In',
  'Pre-Procedure',
  'In-Progress',
  'Closing',
  'Recovery',
  'Complete',
  'Dismissal',
] 


export const statusInfo: StatusData[] =
  [
  {
    "status": "Checked In",
    "message": "In the facility awaiting their procedure.",
    "color": "#0077CC"
  },
  {
    "status": "Pre-Procedure",
    "message": "Undergoing surgical preparation.",
    "color": "#FFC107"
  },
  {
    "status": "In-Progress",
    "message": "Surgical procedure is underway.",
    "color": "#FF5722"
  },
  {
    "status": "Closing",
    "message": "Surgery completed. The patient is being prepared for recovery.",
    "color": "#00C853"
  },
  {
    "status": "Recovery",
    "message": "Patient transferred to post-surgery recovery room.",
    "color": "#4CAF50"
  },
  {
    "status": "Complete",
    "message": "Recovery completed. Patient awaiting dismissal.",
    "color": "#607D8B"
  },
  {
    "status": "Dismissal",
    "message": "Transferred to a hospital room for an overnight stay or for outpatient procedures the patient has left the hospital.",
    "color": "#9C27B0"
  }
]