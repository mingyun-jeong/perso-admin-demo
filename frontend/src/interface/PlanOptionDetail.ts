export interface PlanOptionDetail {
  useMsTts: boolean;
  exportDuration: number;
  exportLimit: number;
  storageLimit: number;
  uploadLimit: number;
  projectSaveDuration: number;
  inviteLimit: number;
  projectCountLimit: number;
  accessibleModels: number[];
  useStv: boolean;
  encodeResolutionTypes: string[];
  useWatermark: boolean;
}
