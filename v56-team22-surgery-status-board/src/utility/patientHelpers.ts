// helper functions to manage patient data in localStorage
import { patientData } from '@/components/PatientStatusTable/data/patient-data-updated';
import { statusInfo } from '@/constant/status-info' 
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