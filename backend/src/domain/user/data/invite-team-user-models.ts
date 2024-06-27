export class InviteTeamUserModels {
  accessibleModels: number[];

  constructor(accessibleModels?: number[]) {
    this.accessibleModels = accessibleModels || [];
  }
}
