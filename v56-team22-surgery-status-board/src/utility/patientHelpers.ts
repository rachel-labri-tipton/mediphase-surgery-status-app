// helper functions to manage patient data in localStorage
import { patientData } from '@/components/PatientStatusTable/data/patient-data-updated';
import { statusInfo, statusLabels } from '@/constant/status-info' 
import type { Patient } from '@/components/PatientStatusTable/data/patient-data-updated';

export function initPatientsIfNeeded() {
  if (!localStorage.getItem("patients")) {
    localStorage.setItem("patients", JSON.stringify(patientData));
  }
}

export function getPatients(): Patient[] {
  return JSON.parse(localStorage.getItem("patients") || "[]");
}

export function getPatientById(id: string): Patient | undefined {
  return getPatients().find((p: Patient) => p.id === id);
}

export function updatePatientStatus(id: string, newStatus: string) {
  const patients = JSON.parse(localStorage.getItem("patients") || "[]");
  console.log("Before update:", patients);
  const idx = patients.findIndex((p: Patient) => p.id === id);
  if (idx !== -1) {
    patients[idx].status = newStatus;
     // Lookup color/message
     const statusMetaData = statusInfo.find(s => s.status === newStatus);
     if (statusMetaData) {
       patients[idx].color = statusMetaData.color;
       patients[idx].message = statusMetaData.message;
     }
    localStorage.setItem("patients", JSON.stringify(patients));
    console.log("After update:", patients);
    return patients[idx];
  }
  return null;
}

export function getContrastTextColor(bgColor: string) {
  const color = bgColor.replace('#', '');
  const r = parseInt(color.substring(0,2), 16);
  const g = parseInt(color.substring(2,4), 16);
  const b = parseInt(color.substring(4,6), 16);
  const brightness = (r*299 + g*587 + b*114) / 1000;
  return brightness > 128 ? 'text-black' : 'text-white';
}


export function getStatusColor(status: string) { 
  return statusInfo.find(s => s.status === status)?.color || '#ccc';  
}

export function getStatusOptions(current: string) {
  const idx = statusLabels.indexOf(current);
  const options: string[] = [];
  if (idx === 0 && statusLabels.length > 1) {
    options.push(statusLabels[idx + 1]);
  } else if (idx === statusLabels.length - 1 && idx > 0) {
    options.push(statusLabels[idx - 1]);
  } else if (idx > 0 && idx < statusLabels.length - 1) {
    options.push(statusLabels[idx - 1], statusLabels[idx + 1]);
  }
  return options;
}