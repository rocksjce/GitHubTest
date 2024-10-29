/* eslint-disable */

export enum State {
  PRIMARY_READY = "PRIMARY_READY",
  SECONDARY_READY = "SECONDARY_READY",
  ACTIVE = "ACTIVE",
  PASSIVE = "PASSIVE",
  RELEASING = "RELEASING",
  TIMEOUT = "TIMEOUT",
  PRIMARY_NOT_READY = "PRIMARY_NOT_READY",
  SECONDARY_NOT_READY = "SECONDARY_NOT_READY",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function stateFromJSON(object: any): State {
  switch (object) {
    case 1:
    case "PRIMARY_READY":
      return State.PRIMARY_READY;
    case 2:
    case "SECONDARY_READY":
      return State.SECONDARY_READY;
    case 3:
    case "ACTIVE":
      return State.ACTIVE;
    case 4:
    case "PASSIVE":
      return State.PASSIVE;
    case 5:
    case "RELEASING":
      return State.RELEASING;
    case 6:
    case "TIMEOUT":
      return State.TIMEOUT;
    case 7:
    case "PRIMARY_NOT_READY":
      return State.PRIMARY_NOT_READY;
    case 8:
    case "SECONDARY_NOT_READY":
      return State.SECONDARY_NOT_READY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}

export function stateToJSON(object: State): string {
  switch (object) {
    case State.PRIMARY_READY:
      return "PRIMARY_READY";
    case State.SECONDARY_READY:
      return "SECONDARY_READY";
    case State.ACTIVE:
      return "ACTIVE";
    case State.PASSIVE:
      return "PASSIVE";
    case State.RELEASING:
      return "RELEASING";
    case State.TIMEOUT:
      return "TIMEOUT";
    case State.PRIMARY_NOT_READY:
      return "PRIMARY_NOT_READY";
    case State.SECONDARY_NOT_READY:
      return "SECONDARY_NOT_READY";
    case State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EngineState {
  ENGINE_NOT_READY = "ENGINE_NOT_READY",
  ENGINE_READY = "ENGINE_READY",
  ENGINE_MAINTENANCE = "ENGINE_MAINTENANCE",
  ENGINE_MAINTENANCE_NOT_READY = "ENGINE_MAINTENANCE_NOT_READY",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function engineStateFromJSON(object: any): EngineState {
  switch (object) {
    case 1:
    case "ENGINE_NOT_READY":
      return EngineState.ENGINE_NOT_READY;
    case 2:
    case "ENGINE_READY":
      return EngineState.ENGINE_READY;
    case 3:
    case "ENGINE_MAINTENANCE":
      return EngineState.ENGINE_MAINTENANCE;
    case 4:
    case "ENGINE_MAINTENANCE_NOT_READY":
      return EngineState.ENGINE_MAINTENANCE_NOT_READY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EngineState.UNRECOGNIZED;
  }
}

export function engineStateToJSON(object: EngineState): string {
  switch (object) {
    case EngineState.ENGINE_NOT_READY:
      return "ENGINE_NOT_READY";
    case EngineState.ENGINE_READY:
      return "ENGINE_READY";
    case EngineState.ENGINE_MAINTENANCE:
      return "ENGINE_MAINTENANCE";
    case EngineState.ENGINE_MAINTENANCE_NOT_READY:
      return "ENGINE_MAINTENANCE_NOT_READY";
    case EngineState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EngineCommand {
  ENGINECOMMAND_NONE = "ENGINECOMMAND_NONE",
  ENGINECOMMAND_READY = "ENGINECOMMAND_READY",
  ENGINECOMMAND_MAINTENANCE = "ENGINECOMMAND_MAINTENANCE",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function engineCommandFromJSON(object: any): EngineCommand {
  switch (object) {
    case 0:
    case "ENGINECOMMAND_NONE":
      return EngineCommand.ENGINECOMMAND_NONE;
    case 1:
    case "ENGINECOMMAND_READY":
      return EngineCommand.ENGINECOMMAND_READY;
    case 2:
    case "ENGINECOMMAND_MAINTENANCE":
      return EngineCommand.ENGINECOMMAND_MAINTENANCE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EngineCommand.UNRECOGNIZED;
  }
}

export function engineCommandToJSON(object: EngineCommand): string {
  switch (object) {
    case EngineCommand.ENGINECOMMAND_NONE:
      return "ENGINECOMMAND_NONE";
    case EngineCommand.ENGINECOMMAND_READY:
      return "ENGINECOMMAND_READY";
    case EngineCommand.ENGINECOMMAND_MAINTENANCE:
      return "ENGINECOMMAND_MAINTENANCE";
    case EngineCommand.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum InitialState {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function initialStateFromJSON(object: any): InitialState {
  switch (object) {
    case 7:
    case "PRIMARY":
      return InitialState.PRIMARY;
    case 8:
    case "SECONDARY":
      return InitialState.SECONDARY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InitialState.UNRECOGNIZED;
  }
}

export function initialStateToJSON(object: InitialState): string {
  switch (object) {
    case InitialState.PRIMARY:
      return "PRIMARY";
    case InitialState.SECONDARY:
      return "SECONDARY";
    case InitialState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum BackupState {
  BackupStateUnknown = "BackupStateUnknown",
  BackupStateInitiated = "BackupStateInitiated",
  BackupStateDone = "BackupStateDone",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function backupStateFromJSON(object: any): BackupState {
  switch (object) {
    case 0:
    case "BackupStateUnknown":
      return BackupState.BackupStateUnknown;
    case 1:
    case "BackupStateInitiated":
      return BackupState.BackupStateInitiated;
    case 2:
    case "BackupStateDone":
      return BackupState.BackupStateDone;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BackupState.UNRECOGNIZED;
  }
}

export function backupStateToJSON(object: BackupState): string {
  switch (object) {
    case BackupState.BackupStateUnknown:
      return "BackupStateUnknown";
    case BackupState.BackupStateInitiated:
      return "BackupStateInitiated";
    case BackupState.BackupStateDone:
      return "BackupStateDone";
    case BackupState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum HaClusterStatus {
  OFF = "OFF",
  ERROR = "ERROR",
  HA_PRIMARY = "HA_PRIMARY",
  HA_SECONDARY = "HA_SECONDARY",
  DA_PRIMARY = "DA_PRIMARY",
  DA_SECONDARY = "DA_SECONDARY",
  DA_PRIMARY_MAINTENANCE = "DA_PRIMARY_MAINTENANCE",
  DA_SECONDARY_MAINTENANCE = "DA_SECONDARY_MAINTENANCE",
  INACTIVE = "INACTIVE",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function haClusterStatusFromJSON(object: any): HaClusterStatus {
  switch (object) {
    case 0:
    case "OFF":
      return HaClusterStatus.OFF;
    case 1:
    case "ERROR":
      return HaClusterStatus.ERROR;
    case 2:
    case "HA_PRIMARY":
      return HaClusterStatus.HA_PRIMARY;
    case 3:
    case "HA_SECONDARY":
      return HaClusterStatus.HA_SECONDARY;
    case 4:
    case "DA_PRIMARY":
      return HaClusterStatus.DA_PRIMARY;
    case 5:
    case "DA_SECONDARY":
      return HaClusterStatus.DA_SECONDARY;
    case 6:
    case "DA_PRIMARY_MAINTENANCE":
      return HaClusterStatus.DA_PRIMARY_MAINTENANCE;
    case 7:
    case "DA_SECONDARY_MAINTENANCE":
      return HaClusterStatus.DA_SECONDARY_MAINTENANCE;
    case 8:
    case "INACTIVE":
      return HaClusterStatus.INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HaClusterStatus.UNRECOGNIZED;
  }
}

export function haClusterStatusToJSON(object: HaClusterStatus): string {
  switch (object) {
    case HaClusterStatus.OFF:
      return "OFF";
    case HaClusterStatus.ERROR:
      return "ERROR";
    case HaClusterStatus.HA_PRIMARY:
      return "HA_PRIMARY";
    case HaClusterStatus.HA_SECONDARY:
      return "HA_SECONDARY";
    case HaClusterStatus.DA_PRIMARY:
      return "DA_PRIMARY";
    case HaClusterStatus.DA_SECONDARY:
      return "DA_SECONDARY";
    case HaClusterStatus.DA_PRIMARY_MAINTENANCE:
      return "DA_PRIMARY_MAINTENANCE";
    case HaClusterStatus.DA_SECONDARY_MAINTENANCE:
      return "DA_SECONDARY_MAINTENANCE";
    case HaClusterStatus.INACTIVE:
      return "INACTIVE";
    case HaClusterStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum HaBackupStatus {
  Unknown = "Unknown",
  BackupInitiated = "BackupInitiated",
  BackupDone = "BackupDone",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function haBackupStatusFromJSON(object: any): HaBackupStatus {
  switch (object) {
    case 1:
    case "Unknown":
      return HaBackupStatus.Unknown;
    case 2:
    case "BackupInitiated":
      return HaBackupStatus.BackupInitiated;
    case 3:
    case "BackupDone":
      return HaBackupStatus.BackupDone;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HaBackupStatus.UNRECOGNIZED;
  }
}

export function haBackupStatusToJSON(object: HaBackupStatus): string {
  switch (object) {
    case HaBackupStatus.Unknown:
      return "Unknown";
    case HaBackupStatus.BackupInitiated:
      return "BackupInitiated";
    case HaBackupStatus.BackupDone:
      return "BackupDone";
    case HaBackupStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
