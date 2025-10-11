/**
 * Centralized Batch Configuration
 * Format: MMYY (e.g., "0925" for September 2025)
 */

export interface Batch {
  id: string; // MMYY format
  displayName: string; // "Month YYYY"
  sequence: number; // For ordering (14 = latest, 1 = oldest)
}

export const BATCHES: Batch[] = [
  { id: "0925", displayName: "September 2025", sequence: 14 },
  { id: "0825", displayName: "August 2025", sequence: 13 },
  { id: "0725", displayName: "July 2025", sequence: 12 },
  { id: "0625", displayName: "June 2025", sequence: 11 },
  { id: "0525", displayName: "May 2025", sequence: 10 },
  { id: "0425", displayName: "April 2025", sequence: 9 },
  { id: "0325", displayName: "March 2025", sequence: 8 },
  { id: "0225", displayName: "February 2025", sequence: 7 },
  { id: "0125", displayName: "January 2025", sequence: 6 },
  { id: "1224", displayName: "December 2024", sequence: 5 },
  { id: "1124", displayName: "November 2024", sequence: 4 },
  { id: "1024", displayName: "October 2024", sequence: 3 },
  { id: "0924", displayName: "September 2024", sequence: 2 },
  { id: "0824", displayName: "August 2024", sequence: 1 }
];

/**
 * Get all batches sorted from latest to oldest
 */
export const getBatchesSortedLatestFirst = (): Batch[] => {
  return [...BATCHES].sort((a, b) => b.sequence - a.sequence);
};

/**
 * Get all batches sorted from oldest to latest
 */
export const getBatchesSortedOldestFirst = (): Batch[] => {
  return [...BATCHES].sort((a, b) => a.sequence - b.sequence);
};

/**
 * Get batch display name by ID
 */
export const getBatchDisplayName = (batchId: string): string | undefined => {
  return BATCHES.find(batch => batch.id === batchId)?.displayName;
};

/**
 * Get the latest batch
 */
export const getLatestBatch = (): Batch => {
  return BATCHES[0]; // September 2025
};

/**
 * Get batch by ID
 */
export const getBatchById = (batchId: string): Batch | undefined => {
  return BATCHES.find(batch => batch.id === batchId);
};

/**
 * Format batch for display (e.g., "Batch 14 - September 2025")
 */
export const formatBatchForDisplay = (batchId: string, includeSequence: boolean = true): string => {
  const batch = getBatchById(batchId);
  if (!batch) return batchId;
  
  if (includeSequence) {
    return `Batch ${batch.sequence} - ${batch.displayName}`;
  }
  return batch.displayName;
};

