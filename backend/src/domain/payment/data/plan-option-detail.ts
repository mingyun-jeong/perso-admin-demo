export class PlanOptionDetail {
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

  constructor(
    useMsTts: boolean,
    exportDuration: number,
    exportLimit: number,
    storageLimit: number,
    uploadLimit: number,
    projectSaveDuration: number,
    inviteLimit: number,
    projectCountLimit: number,
    accessibleModels: number[],
    useStv: boolean,
    encodeResolutionTypes: string[],
    useWatermark: boolean,
  ) {
    this.useMsTts = useMsTts;
    this.exportDuration = exportDuration;
    this.exportLimit = exportLimit;
    this.storageLimit = storageLimit;
    this.uploadLimit = uploadLimit;
    this.projectSaveDuration = projectSaveDuration;
    this.inviteLimit = inviteLimit;
    this.projectCountLimit = projectCountLimit;
    this.accessibleModels = accessibleModels;
    this.useStv = useStv;
    this.encodeResolutionTypes = encodeResolutionTypes;
    this.useWatermark = useWatermark;
  }

  static fixture() {
    return new PlanOptionDetail(
      true,
      300,
      null,
      20480,
      20480,
      50,
      5,
      5,
      [1, 2],
      false,
      ['FHD', 'UHD'],
      true,
    );
  }
}
