/* eslint-disable */
import { Duration } from "./google/protobuf/duration.Generated";
import { Timestamp } from "./google/protobuf/timestamp.Generated";

export enum StationType {
  StationTypeUnknown = "StationTypeUnknown",
  Generator = "Generator",
  VirtualGridmeter = "VirtualGridmeter",
  RedundantGridmeter = "RedundantGridmeter",
  PhysicalGridmeter = "PhysicalGridmeter",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function stationTypeFromJSON(object: any): StationType {
  switch (object) {
    case 0:
    case "StationTypeUnknown":
      return StationType.StationTypeUnknown;
    case 1:
    case "Generator":
      return StationType.Generator;
    case 2:
    case "VirtualGridmeter":
      return StationType.VirtualGridmeter;
    case 3:
    case "RedundantGridmeter":
      return StationType.RedundantGridmeter;
    case 4:
    case "PhysicalGridmeter":
      return StationType.PhysicalGridmeter;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StationType.UNRECOGNIZED;
  }
}

export function stationTypeToJSON(object: StationType): string {
  switch (object) {
    case StationType.StationTypeUnknown:
      return "StationTypeUnknown";
    case StationType.Generator:
      return "Generator";
    case StationType.VirtualGridmeter:
      return "VirtualGridmeter";
    case StationType.RedundantGridmeter:
      return "RedundantGridmeter";
    case StationType.PhysicalGridmeter:
      return "PhysicalGridmeter";
    case StationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ServiceStatus {
  ScriptScheduled = "ScriptScheduled",
  ScriptLoaded = "ScriptLoaded",
  ScriptStarting = "ScriptStarting",
  ScriptRunning = "ScriptRunning",
  ScriptPaused = "ScriptPaused",
  ScriptStopping = "ScriptStopping",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function serviceStatusFromJSON(object: any): ServiceStatus {
  switch (object) {
    case 1:
    case "ScriptScheduled":
      return ServiceStatus.ScriptScheduled;
    case 2:
    case "ScriptLoaded":
      return ServiceStatus.ScriptLoaded;
    case 3:
    case "ScriptStarting":
      return ServiceStatus.ScriptStarting;
    case 4:
    case "ScriptRunning":
      return ServiceStatus.ScriptRunning;
    case 5:
    case "ScriptPaused":
      return ServiceStatus.ScriptPaused;
    case 6:
    case "ScriptStopping":
      return ServiceStatus.ScriptStopping;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ServiceStatus.UNRECOGNIZED;
  }
}

export function serviceStatusToJSON(object: ServiceStatus): string {
  switch (object) {
    case ServiceStatus.ScriptScheduled:
      return "ScriptScheduled";
    case ServiceStatus.ScriptLoaded:
      return "ScriptLoaded";
    case ServiceStatus.ScriptStarting:
      return "ScriptStarting";
    case ServiceStatus.ScriptRunning:
      return "ScriptRunning";
    case ServiceStatus.ScriptPaused:
      return "ScriptPaused";
    case ServiceStatus.ScriptStopping:
      return "ScriptStopping";
    case ServiceStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ErrorType {
  Warning = "Warning",
  Error = "Error",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function errorTypeFromJSON(object: any): ErrorType {
  switch (object) {
    case 1:
    case "Warning":
      return ErrorType.Warning;
    case 2:
    case "Error":
      return ErrorType.Error;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ErrorType.UNRECOGNIZED;
  }
}

export function errorTypeToJSON(object: ErrorType): string {
  switch (object) {
    case ErrorType.Warning:
      return "Warning";
    case ErrorType.Error:
      return "Error";
    case ErrorType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum OperationStatus {
  Ok = "Ok",
  NotAllowed = "NotAllowed",
  ScriptRunningOrPaused = "ScriptRunningOrPaused",
  ScriptNotRunningOrPaused = "ScriptNotRunningOrPaused",
  ScriptFailed = "ScriptFailed",
  ValidationError = "ValidationError",
  ScriptNotFound = "ScriptNotFound",
  TemporaryUnavailable = "TemporaryUnavailable",
  HostCantStart = "HostCantStart",
  ScriptOnRamp = "ScriptOnRamp",
  OtherError = "OtherError",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function operationStatusFromJSON(object: any): OperationStatus {
  switch (object) {
    case 0:
    case "Ok":
      return OperationStatus.Ok;
    case 1:
    case "NotAllowed":
      return OperationStatus.NotAllowed;
    case 2:
    case "ScriptRunningOrPaused":
      return OperationStatus.ScriptRunningOrPaused;
    case 3:
    case "ScriptNotRunningOrPaused":
      return OperationStatus.ScriptNotRunningOrPaused;
    case 5:
    case "ScriptFailed":
      return OperationStatus.ScriptFailed;
    case 6:
    case "ValidationError":
      return OperationStatus.ValidationError;
    case 7:
    case "ScriptNotFound":
      return OperationStatus.ScriptNotFound;
    case 8:
    case "TemporaryUnavailable":
      return OperationStatus.TemporaryUnavailable;
    case 9:
    case "HostCantStart":
      return OperationStatus.HostCantStart;
    case 10:
    case "ScriptOnRamp":
      return OperationStatus.ScriptOnRamp;
    case 100:
    case "OtherError":
      return OperationStatus.OtherError;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OperationStatus.UNRECOGNIZED;
  }
}

export function operationStatusToJSON(object: OperationStatus): string {
  switch (object) {
    case OperationStatus.Ok:
      return "Ok";
    case OperationStatus.NotAllowed:
      return "NotAllowed";
    case OperationStatus.ScriptRunningOrPaused:
      return "ScriptRunningOrPaused";
    case OperationStatus.ScriptNotRunningOrPaused:
      return "ScriptNotRunningOrPaused";
    case OperationStatus.ScriptFailed:
      return "ScriptFailed";
    case OperationStatus.ValidationError:
      return "ValidationError";
    case OperationStatus.ScriptNotFound:
      return "ScriptNotFound";
    case OperationStatus.TemporaryUnavailable:
      return "TemporaryUnavailable";
    case OperationStatus.HostCantStart:
      return "HostCantStart";
    case OperationStatus.ScriptOnRamp:
      return "ScriptOnRamp";
    case OperationStatus.OtherError:
      return "OtherError";
    case OperationStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum SignalTransitionType {
  Step = "Step",
  LERP = "LERP",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function signalTransitionTypeFromJSON(object: any): SignalTransitionType {
  switch (object) {
    case 0:
    case "Step":
      return SignalTransitionType.Step;
    case 1:
    case "LERP":
      return SignalTransitionType.LERP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SignalTransitionType.UNRECOGNIZED;
  }
}

export function signalTransitionTypeToJSON(object: SignalTransitionType): string {
  switch (object) {
    case SignalTransitionType.Step:
      return "Step";
    case SignalTransitionType.LERP:
      return "LERP";
    case SignalTransitionType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum RampingBehavior {
  RampingBehaviorNone = "RampingBehaviorNone",
  RampingBehaviorIn = "RampingBehaviorIn",
  RampingBehaviorOut = "RampingBehaviorOut",
  RampingBehaviorBoth = "RampingBehaviorBoth",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function rampingBehaviorFromJSON(object: any): RampingBehavior {
  switch (object) {
    case 0:
    case "RampingBehaviorNone":
      return RampingBehavior.RampingBehaviorNone;
    case 1:
    case "RampingBehaviorIn":
      return RampingBehavior.RampingBehaviorIn;
    case 2:
    case "RampingBehaviorOut":
      return RampingBehavior.RampingBehaviorOut;
    case 3:
    case "RampingBehaviorBoth":
      return RampingBehavior.RampingBehaviorBoth;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RampingBehavior.UNRECOGNIZED;
  }
}

export function rampingBehaviorToJSON(object: RampingBehavior): string {
  switch (object) {
    case RampingBehavior.RampingBehaviorNone:
      return "RampingBehaviorNone";
    case RampingBehavior.RampingBehaviorIn:
      return "RampingBehaviorIn";
    case RampingBehavior.RampingBehaviorOut:
      return "RampingBehaviorOut";
    case RampingBehavior.RampingBehaviorBoth:
      return "RampingBehaviorBoth";
    case RampingBehavior.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum RampingUse {
  ScriptDefined = "ScriptDefined",
  RampingUseIn = "RampingUseIn",
  RampingUseOut = "RampingUseOut",
  RampingUseBoth = "RampingUseBoth",
  RampingUseNone = "RampingUseNone",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function rampingUseFromJSON(object: any): RampingUse {
  switch (object) {
    case 0:
    case "ScriptDefined":
      return RampingUse.ScriptDefined;
    case 1:
    case "RampingUseIn":
      return RampingUse.RampingUseIn;
    case 2:
    case "RampingUseOut":
      return RampingUse.RampingUseOut;
    case 3:
    case "RampingUseBoth":
      return RampingUse.RampingUseBoth;
    case 4:
    case "RampingUseNone":
      return RampingUse.RampingUseNone;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RampingUse.UNRECOGNIZED;
  }
}

export function rampingUseToJSON(object: RampingUse): string {
  switch (object) {
    case RampingUse.ScriptDefined:
      return "ScriptDefined";
    case RampingUse.RampingUseIn:
      return "RampingUseIn";
    case RampingUse.RampingUseOut:
      return "RampingUseOut";
    case RampingUse.RampingUseBoth:
      return "RampingUseBoth";
    case RampingUse.RampingUseNone:
      return "RampingUseNone";
    case RampingUse.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PublishType {
  Unknown = "Unknown",
  StatusReport = "StatusReport",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function publishTypeFromJSON(object: any): PublishType {
  switch (object) {
    case 0:
    case "Unknown":
      return PublishType.Unknown;
    case 11:
    case "StatusReport":
      return PublishType.StatusReport;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PublishType.UNRECOGNIZED;
  }
}

export function publishTypeToJSON(object: PublishType): string {
  switch (object) {
    case PublishType.Unknown:
      return "Unknown";
    case PublishType.StatusReport:
      return "StatusReport";
    case PublishType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GetStationsAndSignalsRequest {
}

export interface GetStationsAndSignalsReply {
  hosts: string[];
  stations: StationDefinition[];
  signals: SignalDefinition[];
  stepInterval: Duration | undefined;
}

export interface StationDefinition {
  stationName: string;
  stationType: StationType;
  host: string;
}

export interface SignalDefinition {
  signalName: string;
  valueDefinition: ValueDefinition | undefined;
  validStations: string[];
}

export interface ValueDefinition {
  defaultValue: number;
  minimum: number;
  maximum: number;
  unitName?: string | undefined;
  displayAccuracy: number;
}

export interface GetStatusRequest {
}

export interface GetStatusReply {
  /** no ongoing scripts => system is idle */
  ongoing?: ScriptInfo | undefined;
}

export interface ScriptInfo {
  status: ServiceStatus;
  scriptPath: string;
  scriptId: string;
  startedByUser: string;
  scriptHosts: string[];
  offlineScriptHosts: string[];
  startTime?: Date | undefined;
  length: Duration | undefined;
  offset: Duration | undefined;
}

export interface ListScriptsRequest {
  folder?: string | undefined;
  recursive?: boolean | undefined;
}

export interface ListScriptsReply {
  files: FileDescriptor[];
}

export interface FileDescriptor {
  scriptPath: string;
  description?: string | undefined;
  creationTime: Date | undefined;
  modificationTime: Date | undefined;
  userName: string;
}

export interface LoadScriptRequest {
  scriptPath: string;
}

export interface LoadScriptReply {
  result: OperationStatus;
  error?: string | undefined;
  description?: string | undefined;
  scriptData?: ClientScriptData | undefined;
  scriptId?: string | undefined;
}

export interface SaveScriptRequest {
  scriptPath: string;
  description?: string | undefined;
  scriptData: ClientScriptData | undefined;
  originalScriptId?: string | undefined;
}

export interface SaveScriptReply {
  result: OperationStatus;
  error?: string | undefined;
  scriptId?: string | undefined;
  validationErrors: ValidationErrorMessage[];
}

export interface ValidationErrorMessage {
  message: string;
  ErrorType: ErrorType;
  datapoints: ValidationErrorDataPoint[];
}

export interface ValidationErrorDataPoint {
  offset: Duration | undefined;
  stations: string[];
  signal: string;
}

export interface DeleteScriptRequest {
  scriptPath: string;
}

export interface DeleteScriptReply {
  result: OperationStatus;
  error?: string | undefined;
}

export interface RenameScriptRequest {
  oldScriptPath: string;
  newScriptPath: string;
}

export interface RenameScriptReply {
  result: OperationStatus;
  error?: string | undefined;
}

export interface ConvertLegacyScriptRequest {
  legacyScriptData: string;
}

export interface ConvertLegacyScriptReply {
  result: OperationStatus;
  error?: string | undefined;
  scriptData?: ClientScriptData | undefined;
}

export interface PrepareScriptExecutionRequest {
  scriptPath: string;
  scriptId: string;
  scheduledStart?: Date | undefined;
  rampingUse: RampingUse;
}

export interface PrepareScriptExecutionReply {
  result: OperationStatus;
  error?: string | undefined;
}

export interface StopScriptRequest {
  scriptPath: string;
  rampingUse: RampingUse;
}

export interface StopScriptReply {
  result: OperationStatus;
  error?: string | undefined;
}

export interface PauseScriptRequest {
  scriptPath: string;
}

export interface PauseScriptReply {
  result: OperationStatus;
  error?: string | undefined;
}

export interface ResumeScriptRequest {
  scriptPath: string;
}

export interface ResumeScriptReply {
  result: OperationStatus;
  error?: string | undefined;
}

export interface SkipScriptRequest {
  scriptPath: string;
}

export interface SkipScriptReply {
  result: OperationStatus;
  error?: string | undefined;
}

export interface GetScriptRunsRequest {
  scriptPath: string;
}

export interface GetScriptRunsReply {
  scriptRuns: ScriptRun[];
  error?: string | undefined;
}

export interface ScriptRun {
  fileDescriptor: FileDescriptor | undefined;
  actions: Action[];
}

export interface Action {
  type: string;
  user: string;
  scheduledTime: Date | undefined;
  hosts: string;
  timeStamp: Date | undefined;
}

export interface ClientScriptData {
  signalDataPoints: ClientSignalDataPoint[];
  rampingBehavior: RampingBehavior;
}

export interface ClientSignalDataPoint {
  offset: Duration | undefined;
  transitionType: SignalTransitionType;
  stations: string[];
  signal: string;
  value: number;
}

export interface InjectionReport {
  publishType: PublishType;
  statusReport?: GetStatusReply | undefined;
}

export interface PingReport {
}

function createBaseGetStationsAndSignalsRequest(): GetStationsAndSignalsRequest {
  return {};
}

export const GetStationsAndSignalsRequest = {
  fromJSON(_: any): GetStationsAndSignalsRequest {
    return {};
  },

  toJSON(_: GetStationsAndSignalsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetStationsAndSignalsRequest>, I>>(base?: I): GetStationsAndSignalsRequest {
    return GetStationsAndSignalsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetStationsAndSignalsRequest>, I>>(_: I): GetStationsAndSignalsRequest {
    const message = createBaseGetStationsAndSignalsRequest();
    return message;
  },
};

function createBaseGetStationsAndSignalsReply(): GetStationsAndSignalsReply {
  return { hosts: [], stations: [], signals: [], stepInterval: undefined };
}

export const GetStationsAndSignalsReply = {
  fromJSON(object: any): GetStationsAndSignalsReply {
    return {
      hosts: gt.Array.isArray(object?.hosts) ? object.hosts.map((e: any) => gt.String(e)) : [],
      stations: gt.Array.isArray(object?.stations)
        ? object.stations.map((e: any) => StationDefinition.fromJSON(e))
        : [],
      signals: gt.Array.isArray(object?.signals) ? object.signals.map((e: any) => SignalDefinition.fromJSON(e)) : [],
      stepInterval: isSet(object.stepInterval) ? Duration.fromJSON(object.stepInterval) : undefined,
    };
  },

  toJSON(message: GetStationsAndSignalsReply): unknown {
    const obj: any = {};
    if (message.hosts?.length) {
      obj.hosts = message.hosts;
    }
    if (message.stations?.length) {
      obj.stations = message.stations.map((e) => StationDefinition.toJSON(e));
    }
    if (message.signals?.length) {
      obj.signals = message.signals.map((e) => SignalDefinition.toJSON(e));
    }
    if (message.stepInterval !== undefined) {
      obj.stepInterval = Duration.toJSON(message.stepInterval);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetStationsAndSignalsReply>, I>>(base?: I): GetStationsAndSignalsReply {
    return GetStationsAndSignalsReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetStationsAndSignalsReply>, I>>(object: I): GetStationsAndSignalsReply {
    const message = createBaseGetStationsAndSignalsReply();
    message.hosts = object.hosts?.map((e) => e) || [];
    message.stations = object.stations?.map((e) => StationDefinition.fromPartial(e)) || [];
    message.signals = object.signals?.map((e) => SignalDefinition.fromPartial(e)) || [];
    message.stepInterval = (object.stepInterval !== undefined && object.stepInterval !== null)
      ? Duration.fromPartial(object.stepInterval)
      : undefined;
    return message;
  },
};

function createBaseStationDefinition(): StationDefinition {
  return { stationName: "", stationType: StationType.StationTypeUnknown, host: "" };
}

export const StationDefinition = {
  fromJSON(object: any): StationDefinition {
    return {
      stationName: isSet(object.stationName) ? gt.String(object.stationName) : "",
      stationType: isSet(object.stationType) ? stationTypeFromJSON(object.stationType) : StationType.StationTypeUnknown,
      host: isSet(object.host) ? gt.String(object.host) : "",
    };
  },

  toJSON(message: StationDefinition): unknown {
    const obj: any = {};
    if (message.stationName !== "") {
      obj.stationName = message.stationName;
    }
    if (message.stationType !== StationType.StationTypeUnknown) {
      obj.stationType = stationTypeToJSON(message.stationType);
    }
    if (message.host !== "") {
      obj.host = message.host;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StationDefinition>, I>>(base?: I): StationDefinition {
    return StationDefinition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StationDefinition>, I>>(object: I): StationDefinition {
    const message = createBaseStationDefinition();
    message.stationName = object.stationName ?? "";
    message.stationType = object.stationType ?? StationType.StationTypeUnknown;
    message.host = object.host ?? "";
    return message;
  },
};

function createBaseSignalDefinition(): SignalDefinition {
  return { signalName: "", valueDefinition: undefined, validStations: [] };
}

export const SignalDefinition = {
  fromJSON(object: any): SignalDefinition {
    return {
      signalName: isSet(object.signalName) ? gt.String(object.signalName) : "",
      valueDefinition: isSet(object.valueDefinition) ? ValueDefinition.fromJSON(object.valueDefinition) : undefined,
      validStations: gt.Array.isArray(object?.validStations) ? object.validStations.map((e: any) => gt.String(e)) : [],
    };
  },

  toJSON(message: SignalDefinition): unknown {
    const obj: any = {};
    if (message.signalName !== "") {
      obj.signalName = message.signalName;
    }
    if (message.valueDefinition !== undefined) {
      obj.valueDefinition = ValueDefinition.toJSON(message.valueDefinition);
    }
    if (message.validStations?.length) {
      obj.validStations = message.validStations;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SignalDefinition>, I>>(base?: I): SignalDefinition {
    return SignalDefinition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SignalDefinition>, I>>(object: I): SignalDefinition {
    const message = createBaseSignalDefinition();
    message.signalName = object.signalName ?? "";
    message.valueDefinition = (object.valueDefinition !== undefined && object.valueDefinition !== null)
      ? ValueDefinition.fromPartial(object.valueDefinition)
      : undefined;
    message.validStations = object.validStations?.map((e) => e) || [];
    return message;
  },
};

function createBaseValueDefinition(): ValueDefinition {
  return { defaultValue: 0, minimum: 0, maximum: 0, unitName: "", displayAccuracy: 0 };
}

export const ValueDefinition = {
  fromJSON(object: any): ValueDefinition {
    return {
      defaultValue: isSet(object.defaultValue) ? gt.Number(object.defaultValue) : 0,
      minimum: isSet(object.minimum) ? gt.Number(object.minimum) : 0,
      maximum: isSet(object.maximum) ? gt.Number(object.maximum) : 0,
      unitName: isSet(object.unitName) ? gt.String(object.unitName) : "",
      displayAccuracy: isSet(object.displayAccuracy) ? gt.Number(object.displayAccuracy) : 0,
    };
  },

  toJSON(message: ValueDefinition): unknown {
    const obj: any = {};
    if (message.defaultValue !== 0) {
      obj.defaultValue = message.defaultValue;
    }
    if (message.minimum !== 0) {
      obj.minimum = message.minimum;
    }
    if (message.maximum !== 0) {
      obj.maximum = message.maximum;
    }
    if (message.unitName !== undefined && message.unitName !== "") {
      obj.unitName = message.unitName;
    }
    if (message.displayAccuracy !== 0) {
      obj.displayAccuracy = message.displayAccuracy;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValueDefinition>, I>>(base?: I): ValueDefinition {
    return ValueDefinition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ValueDefinition>, I>>(object: I): ValueDefinition {
    const message = createBaseValueDefinition();
    message.defaultValue = object.defaultValue ?? 0;
    message.minimum = object.minimum ?? 0;
    message.maximum = object.maximum ?? 0;
    message.unitName = object.unitName ?? "";
    message.displayAccuracy = object.displayAccuracy ?? 0;
    return message;
  },
};

function createBaseGetStatusRequest(): GetStatusRequest {
  return {};
}

export const GetStatusRequest = {
  fromJSON(_: any): GetStatusRequest {
    return {};
  },

  toJSON(_: GetStatusRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetStatusRequest>, I>>(base?: I): GetStatusRequest {
    return GetStatusRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetStatusRequest>, I>>(_: I): GetStatusRequest {
    const message = createBaseGetStatusRequest();
    return message;
  },
};

function createBaseGetStatusReply(): GetStatusReply {
  return { ongoing: undefined };
}

export const GetStatusReply = {
  fromJSON(object: any): GetStatusReply {
    return { ongoing: isSet(object.ongoing) ? ScriptInfo.fromJSON(object.ongoing) : undefined };
  },

  toJSON(message: GetStatusReply): unknown {
    const obj: any = {};
    if (message.ongoing !== undefined) {
      obj.ongoing = ScriptInfo.toJSON(message.ongoing);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetStatusReply>, I>>(base?: I): GetStatusReply {
    return GetStatusReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetStatusReply>, I>>(object: I): GetStatusReply {
    const message = createBaseGetStatusReply();
    message.ongoing = (object.ongoing !== undefined && object.ongoing !== null)
      ? ScriptInfo.fromPartial(object.ongoing)
      : undefined;
    return message;
  },
};

function createBaseScriptInfo(): ScriptInfo {
  return {
    status: ServiceStatus.ScriptScheduled,
    scriptPath: "",
    scriptId: "",
    startedByUser: "",
    scriptHosts: [],
    offlineScriptHosts: [],
    startTime: undefined,
    length: undefined,
    offset: undefined,
  };
}

export const ScriptInfo = {
  fromJSON(object: any): ScriptInfo {
    return {
      status: isSet(object.status) ? serviceStatusFromJSON(object.status) : ServiceStatus.ScriptScheduled,
      scriptPath: isSet(object.scriptPath) ? gt.String(object.scriptPath) : "",
      scriptId: isSet(object.scriptId) ? gt.String(object.scriptId) : "",
      startedByUser: isSet(object.startedByUser) ? gt.String(object.startedByUser) : "",
      scriptHosts: gt.Array.isArray(object?.scriptHosts) ? object.scriptHosts.map((e: any) => gt.String(e)) : [],
      offlineScriptHosts: gt.Array.isArray(object?.offlineScriptHosts)
        ? object.offlineScriptHosts.map((e: any) => gt.String(e))
        : [],
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      length: isSet(object.length) ? Duration.fromJSON(object.length) : undefined,
      offset: isSet(object.offset) ? Duration.fromJSON(object.offset) : undefined,
    };
  },

  toJSON(message: ScriptInfo): unknown {
    const obj: any = {};
    if (message.status !== ServiceStatus.ScriptScheduled) {
      obj.status = serviceStatusToJSON(message.status);
    }
    if (message.scriptPath !== "") {
      obj.scriptPath = message.scriptPath;
    }
    if (message.scriptId !== "") {
      obj.scriptId = message.scriptId;
    }
    if (message.startedByUser !== "") {
      obj.startedByUser = message.startedByUser;
    }
    if (message.scriptHosts?.length) {
      obj.scriptHosts = message.scriptHosts;
    }
    if (message.offlineScriptHosts?.length) {
      obj.offlineScriptHosts = message.offlineScriptHosts;
    }
    if (message.startTime !== undefined) {
      obj.startTime = message.startTime.toISOString();
    }
    if (message.length !== undefined) {
      obj.length = Duration.toJSON(message.length);
    }
    if (message.offset !== undefined) {
      obj.offset = Duration.toJSON(message.offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScriptInfo>, I>>(base?: I): ScriptInfo {
    return ScriptInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScriptInfo>, I>>(object: I): ScriptInfo {
    const message = createBaseScriptInfo();
    message.status = object.status ?? ServiceStatus.ScriptScheduled;
    message.scriptPath = object.scriptPath ?? "";
    message.scriptId = object.scriptId ?? "";
    message.startedByUser = object.startedByUser ?? "";
    message.scriptHosts = object.scriptHosts?.map((e) => e) || [];
    message.offlineScriptHosts = object.offlineScriptHosts?.map((e) => e) || [];
    message.startTime = object.startTime ?? undefined;
    message.length = (object.length !== undefined && object.length !== null)
      ? Duration.fromPartial(object.length)
      : undefined;
    message.offset = (object.offset !== undefined && object.offset !== null)
      ? Duration.fromPartial(object.offset)
      : undefined;
    return message;
  },
};

function createBaseListScriptsRequest(): ListScriptsRequest {
  return { folder: "", recursive: false };
}

export const ListScriptsRequest = {
  fromJSON(object: any): ListScriptsRequest {
    return {
      folder: isSet(object.folder) ? gt.String(object.folder) : "",
      recursive: isSet(object.recursive) ? gt.Boolean(object.recursive) : false,
    };
  },

  toJSON(message: ListScriptsRequest): unknown {
    const obj: any = {};
    if (message.folder !== undefined && message.folder !== "") {
      obj.folder = message.folder;
    }
    if (message.recursive !== undefined && message.recursive !== false) {
      obj.recursive = message.recursive;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListScriptsRequest>, I>>(base?: I): ListScriptsRequest {
    return ListScriptsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListScriptsRequest>, I>>(object: I): ListScriptsRequest {
    const message = createBaseListScriptsRequest();
    message.folder = object.folder ?? "";
    message.recursive = object.recursive ?? false;
    return message;
  },
};

function createBaseListScriptsReply(): ListScriptsReply {
  return { files: [] };
}

export const ListScriptsReply = {
  fromJSON(object: any): ListScriptsReply {
    return { files: gt.Array.isArray(object?.files) ? object.files.map((e: any) => FileDescriptor.fromJSON(e)) : [] };
  },

  toJSON(message: ListScriptsReply): unknown {
    const obj: any = {};
    if (message.files?.length) {
      obj.files = message.files.map((e) => FileDescriptor.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListScriptsReply>, I>>(base?: I): ListScriptsReply {
    return ListScriptsReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ListScriptsReply>, I>>(object: I): ListScriptsReply {
    const message = createBaseListScriptsReply();
    message.files = object.files?.map((e) => FileDescriptor.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFileDescriptor(): FileDescriptor {
  return { scriptPath: "", description: "", creationTime: undefined, modificationTime: undefined, userName: "" };
}

export const FileDescriptor = {
  fromJSON(object: any): FileDescriptor {
    return {
      scriptPath: isSet(object.scriptPath) ? gt.String(object.scriptPath) : "",
      description: isSet(object.description) ? gt.String(object.description) : "",
      creationTime: isSet(object.creationTime) ? fromJsonTimestamp(object.creationTime) : undefined,
      modificationTime: isSet(object.modificationTime) ? fromJsonTimestamp(object.modificationTime) : undefined,
      userName: isSet(object.userName) ? gt.String(object.userName) : "",
    };
  },

  toJSON(message: FileDescriptor): unknown {
    const obj: any = {};
    if (message.scriptPath !== "") {
      obj.scriptPath = message.scriptPath;
    }
    if (message.description !== undefined && message.description !== "") {
      obj.description = message.description;
    }
    if (message.creationTime !== undefined) {
      obj.creationTime = message.creationTime.toISOString();
    }
    if (message.modificationTime !== undefined) {
      obj.modificationTime = message.modificationTime.toISOString();
    }
    if (message.userName !== "") {
      obj.userName = message.userName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FileDescriptor>, I>>(base?: I): FileDescriptor {
    return FileDescriptor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FileDescriptor>, I>>(object: I): FileDescriptor {
    const message = createBaseFileDescriptor();
    message.scriptPath = object.scriptPath ?? "";
    message.description = object.description ?? "";
    message.creationTime = object.creationTime ?? undefined;
    message.modificationTime = object.modificationTime ?? undefined;
    message.userName = object.userName ?? "";
    return message;
  },
};

function createBaseLoadScriptRequest(): LoadScriptRequest {
  return { scriptPath: "" };
}

export const LoadScriptRequest = {
  fromJSON(object: any): LoadScriptRequest {
    return { scriptPath: isSet(object.scriptPath) ? gt.String(object.scriptPath) : "" };
  },

  toJSON(message: LoadScriptRequest): unknown {
    const obj: any = {};
    if (message.scriptPath !== "") {
      obj.scriptPath = message.scriptPath;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoadScriptRequest>, I>>(base?: I): LoadScriptRequest {
    return LoadScriptRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoadScriptRequest>, I>>(object: I): LoadScriptRequest {
    const message = createBaseLoadScriptRequest();
    message.scriptPath = object.scriptPath ?? "";
    return message;
  },
};

function createBaseLoadScriptReply(): LoadScriptReply {
  return { result: OperationStatus.Ok, error: "", description: "", scriptData: undefined, scriptId: "" };
}

export const LoadScriptReply = {
  fromJSON(object: any): LoadScriptReply {
    return {
      result: isSet(object.result) ? operationStatusFromJSON(object.result) : OperationStatus.Ok,
      error: isSet(object.error) ? gt.String(object.error) : "",
      description: isSet(object.description) ? gt.String(object.description) : "",
      scriptData: isSet(object.scriptData) ? ClientScriptData.fromJSON(object.scriptData) : undefined,
      scriptId: isSet(object.scriptId) ? gt.String(object.scriptId) : "",
    };
  },

  toJSON(message: LoadScriptReply): unknown {
    const obj: any = {};
    if (message.result !== OperationStatus.Ok) {
      obj.result = operationStatusToJSON(message.result);
    }
    if (message.error !== undefined && message.error !== "") {
      obj.error = message.error;
    }
    if (message.description !== undefined && message.description !== "") {
      obj.description = message.description;
    }
    if (message.scriptData !== undefined) {
      obj.scriptData = ClientScriptData.toJSON(message.scriptData);
    }
    if (message.scriptId !== undefined && message.scriptId !== "") {
      obj.scriptId = message.scriptId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoadScriptReply>, I>>(base?: I): LoadScriptReply {
    return LoadScriptReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoadScriptReply>, I>>(object: I): LoadScriptReply {
    const message = createBaseLoadScriptReply();
    message.result = object.result ?? OperationStatus.Ok;
    message.error = object.error ?? "";
    message.description = object.description ?? "";
    message.scriptData = (object.scriptData !== undefined && object.scriptData !== null)
      ? ClientScriptData.fromPartial(object.scriptData)
      : undefined;
    message.scriptId = object.scriptId ?? "";
    return message;
  },
};

function createBaseSaveScriptRequest(): SaveScriptRequest {
  return { scriptPath: "", description: "", scriptData: undefined, originalScriptId: "" };
}

export const SaveScriptRequest = {
  fromJSON(object: any): SaveScriptRequest {
    return {
      scriptPath: isSet(object.scriptPath) ? gt.String(object.scriptPath) : "",
      description: isSet(object.description) ? gt.String(object.description) : "",
      scriptData: isSet(object.scriptData) ? ClientScriptData.fromJSON(object.scriptData) : undefined,
      originalScriptId: isSet(object.originalScriptId) ? gt.String(object.originalScriptId) : "",
    };
  },

  toJSON(message: SaveScriptRequest): unknown {
    const obj: any = {};
    if (message.scriptPath !== "") {
      obj.scriptPath = message.scriptPath;
    }
    if (message.description !== undefined && message.description !== "") {
      obj.description = message.description;
    }
    if (message.scriptData !== undefined) {
      obj.scriptData = ClientScriptData.toJSON(message.scriptData);
    }
    if (message.originalScriptId !== undefined && message.originalScriptId !== "") {
      obj.originalScriptId = message.originalScriptId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SaveScriptRequest>, I>>(base?: I): SaveScriptRequest {
    return SaveScriptRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SaveScriptRequest>, I>>(object: I): SaveScriptRequest {
    const message = createBaseSaveScriptRequest();
    message.scriptPath = object.scriptPath ?? "";
    message.description = object.description ?? "";
    message.scriptData = (object.scriptData !== undefined && object.scriptData !== null)
      ? ClientScriptData.fromPartial(object.scriptData)
      : undefined;
    message.originalScriptId = object.originalScriptId ?? "";
    return message;
  },
};

function createBaseSaveScriptReply(): SaveScriptReply {
  return { result: OperationStatus.Ok, error: "", scriptId: "", validationErrors: [] };
}

export const SaveScriptReply = {
  fromJSON(object: any): SaveScriptReply {
    return {
      result: isSet(object.result) ? operationStatusFromJSON(object.result) : OperationStatus.Ok,
      error: isSet(object.error) ? gt.String(object.error) : "",
      scriptId: isSet(object.scriptId) ? gt.String(object.scriptId) : "",
      validationErrors: gt.Array.isArray(object?.validationErrors)
        ? object.validationErrors.map((e: any) => ValidationErrorMessage.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SaveScriptReply): unknown {
    const obj: any = {};
    if (message.result !== OperationStatus.Ok) {
      obj.result = operationStatusToJSON(message.result);
    }
    if (message.error !== undefined && message.error !== "") {
      obj.error = message.error;
    }
    if (message.scriptId !== undefined && message.scriptId !== "") {
      obj.scriptId = message.scriptId;
    }
    if (message.validationErrors?.length) {
      obj.validationErrors = message.validationErrors.map((e) => ValidationErrorMessage.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SaveScriptReply>, I>>(base?: I): SaveScriptReply {
    return SaveScriptReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SaveScriptReply>, I>>(object: I): SaveScriptReply {
    const message = createBaseSaveScriptReply();
    message.result = object.result ?? OperationStatus.Ok;
    message.error = object.error ?? "";
    message.scriptId = object.scriptId ?? "";
    message.validationErrors = object.validationErrors?.map((e) => ValidationErrorMessage.fromPartial(e)) || [];
    return message;
  },
};

function createBaseValidationErrorMessage(): ValidationErrorMessage {
  return { message: "", ErrorType: ErrorType.Warning, datapoints: [] };
}

export const ValidationErrorMessage = {
  fromJSON(object: any): ValidationErrorMessage {
    return {
      message: isSet(object.message) ? gt.String(object.message) : "",
      ErrorType: isSet(object.ErrorType) ? errorTypeFromJSON(object.ErrorType) : ErrorType.Warning,
      datapoints: gt.Array.isArray(object?.datapoints)
        ? object.datapoints.map((e: any) => ValidationErrorDataPoint.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ValidationErrorMessage): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.ErrorType !== ErrorType.Warning) {
      obj.ErrorType = errorTypeToJSON(message.ErrorType);
    }
    if (message.datapoints?.length) {
      obj.datapoints = message.datapoints.map((e) => ValidationErrorDataPoint.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidationErrorMessage>, I>>(base?: I): ValidationErrorMessage {
    return ValidationErrorMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ValidationErrorMessage>, I>>(object: I): ValidationErrorMessage {
    const message = createBaseValidationErrorMessage();
    message.message = object.message ?? "";
    message.ErrorType = object.ErrorType ?? ErrorType.Warning;
    message.datapoints = object.datapoints?.map((e) => ValidationErrorDataPoint.fromPartial(e)) || [];
    return message;
  },
};

function createBaseValidationErrorDataPoint(): ValidationErrorDataPoint {
  return { offset: undefined, stations: [], signal: "" };
}

export const ValidationErrorDataPoint = {
  fromJSON(object: any): ValidationErrorDataPoint {
    return {
      offset: isSet(object.offset) ? Duration.fromJSON(object.offset) : undefined,
      stations: gt.Array.isArray(object?.stations) ? object.stations.map((e: any) => gt.String(e)) : [],
      signal: isSet(object.signal) ? gt.String(object.signal) : "",
    };
  },

  toJSON(message: ValidationErrorDataPoint): unknown {
    const obj: any = {};
    if (message.offset !== undefined) {
      obj.offset = Duration.toJSON(message.offset);
    }
    if (message.stations?.length) {
      obj.stations = message.stations;
    }
    if (message.signal !== "") {
      obj.signal = message.signal;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidationErrorDataPoint>, I>>(base?: I): ValidationErrorDataPoint {
    return ValidationErrorDataPoint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ValidationErrorDataPoint>, I>>(object: I): ValidationErrorDataPoint {
    const message = createBaseValidationErrorDataPoint();
    message.offset = (object.offset !== undefined && object.offset !== null)
      ? Duration.fromPartial(object.offset)
      : undefined;
    message.stations = object.stations?.map((e) => e) || [];
    message.signal = object.signal ?? "";
    return message;
  },
};

function createBaseDeleteScriptRequest(): DeleteScriptRequest {
  return { scriptPath: "" };
}

export const DeleteScriptRequest = {
  fromJSON(object: any): DeleteScriptRequest {
    return { scriptPath: isSet(object.scriptPath) ? gt.String(object.scriptPath) : "" };
  },

  toJSON(message: DeleteScriptRequest): unknown {
    const obj: any = {};
    if (message.scriptPath !== "") {
      obj.scriptPath = message.scriptPath;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteScriptRequest>, I>>(base?: I): DeleteScriptRequest {
    return DeleteScriptRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteScriptRequest>, I>>(object: I): DeleteScriptRequest {
    const message = createBaseDeleteScriptRequest();
    message.scriptPath = object.scriptPath ?? "";
    return message;
  },
};

function createBaseDeleteScriptReply(): DeleteScriptReply {
  return { result: OperationStatus.Ok, error: "" };
}

export const DeleteScriptReply = {
  fromJSON(object: any): DeleteScriptReply {
    return {
      result: isSet(object.result) ? operationStatusFromJSON(object.result) : OperationStatus.Ok,
      error: isSet(object.error) ? gt.String(object.error) : "",
    };
  },

  toJSON(message: DeleteScriptReply): unknown {
    const obj: any = {};
    if (message.result !== OperationStatus.Ok) {
      obj.result = operationStatusToJSON(message.result);
    }
    if (message.error !== undefined && message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteScriptReply>, I>>(base?: I): DeleteScriptReply {
    return DeleteScriptReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteScriptReply>, I>>(object: I): DeleteScriptReply {
    const message = createBaseDeleteScriptReply();
    message.result = object.result ?? OperationStatus.Ok;
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseRenameScriptRequest(): RenameScriptRequest {
  return { oldScriptPath: "", newScriptPath: "" };
}

export const RenameScriptRequest = {
  fromJSON(object: any): RenameScriptRequest {
    return {
      oldScriptPath: isSet(object.oldScriptPath) ? gt.String(object.oldScriptPath) : "",
      newScriptPath: isSet(object.newScriptPath) ? gt.String(object.newScriptPath) : "",
    };
  },

  toJSON(message: RenameScriptRequest): unknown {
    const obj: any = {};
    if (message.oldScriptPath !== "") {
      obj.oldScriptPath = message.oldScriptPath;
    }
    if (message.newScriptPath !== "") {
      obj.newScriptPath = message.newScriptPath;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RenameScriptRequest>, I>>(base?: I): RenameScriptRequest {
    return RenameScriptRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RenameScriptRequest>, I>>(object: I): RenameScriptRequest {
    const message = createBaseRenameScriptRequest();
    message.oldScriptPath = object.oldScriptPath ?? "";
    message.newScriptPath = object.newScriptPath ?? "";
    return message;
  },
};

function createBaseRenameScriptReply(): RenameScriptReply {
  return { result: OperationStatus.Ok, error: "" };
}

export const RenameScriptReply = {
  fromJSON(object: any): RenameScriptReply {
    return {
      result: isSet(object.result) ? operationStatusFromJSON(object.result) : OperationStatus.Ok,
      error: isSet(object.error) ? gt.String(object.error) : "",
    };
  },

  toJSON(message: RenameScriptReply): unknown {
    const obj: any = {};
    if (message.result !== OperationStatus.Ok) {
      obj.result = operationStatusToJSON(message.result);
    }
    if (message.error !== undefined && message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RenameScriptReply>, I>>(base?: I): RenameScriptReply {
    return RenameScriptReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RenameScriptReply>, I>>(object: I): RenameScriptReply {
    const message = createBaseRenameScriptReply();
    message.result = object.result ?? OperationStatus.Ok;
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseConvertLegacyScriptRequest(): ConvertLegacyScriptRequest {
  return { legacyScriptData: "" };
}

export const ConvertLegacyScriptRequest = {
  fromJSON(object: any): ConvertLegacyScriptRequest {
    return { legacyScriptData: isSet(object.legacyScriptData) ? gt.String(object.legacyScriptData) : "" };
  },

  toJSON(message: ConvertLegacyScriptRequest): unknown {
    const obj: any = {};
    if (message.legacyScriptData !== "") {
      obj.legacyScriptData = message.legacyScriptData;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConvertLegacyScriptRequest>, I>>(base?: I): ConvertLegacyScriptRequest {
    return ConvertLegacyScriptRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConvertLegacyScriptRequest>, I>>(object: I): ConvertLegacyScriptRequest {
    const message = createBaseConvertLegacyScriptRequest();
    message.legacyScriptData = object.legacyScriptData ?? "";
    return message;
  },
};

function createBaseConvertLegacyScriptReply(): ConvertLegacyScriptReply {
  return { result: OperationStatus.Ok, error: "", scriptData: undefined };
}

export const ConvertLegacyScriptReply = {
  fromJSON(object: any): ConvertLegacyScriptReply {
    return {
      result: isSet(object.result) ? operationStatusFromJSON(object.result) : OperationStatus.Ok,
      error: isSet(object.error) ? gt.String(object.error) : "",
      scriptData: isSet(object.scriptData) ? ClientScriptData.fromJSON(object.scriptData) : undefined,
    };
  },

  toJSON(message: ConvertLegacyScriptReply): unknown {
    const obj: any = {};
    if (message.result !== OperationStatus.Ok) {
      obj.result = operationStatusToJSON(message.result);
    }
    if (message.error !== undefined && message.error !== "") {
      obj.error = message.error;
    }
    if (message.scriptData !== undefined) {
      obj.scriptData = ClientScriptData.toJSON(message.scriptData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConvertLegacyScriptReply>, I>>(base?: I): ConvertLegacyScriptReply {
    return ConvertLegacyScriptReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConvertLegacyScriptReply>, I>>(object: I): ConvertLegacyScriptReply {
    const message = createBaseConvertLegacyScriptReply();
    message.result = object.result ?? OperationStatus.Ok;
    message.error = object.error ?? "";
    message.scriptData = (object.scriptData !== undefined && object.scriptData !== null)
      ? ClientScriptData.fromPartial(object.scriptData)
      : undefined;
    return message;
  },
};

function createBasePrepareScriptExecutionRequest(): PrepareScriptExecutionRequest {
  return { scriptPath: "", scriptId: "", scheduledStart: undefined, rampingUse: RampingUse.ScriptDefined };
}

export const PrepareScriptExecutionRequest = {
  fromJSON(object: any): PrepareScriptExecutionRequest {
    return {
      scriptPath: isSet(object.scriptPath) ? gt.String(object.scriptPath) : "",
      scriptId: isSet(object.scriptId) ? gt.String(object.scriptId) : "",
      scheduledStart: isSet(object.scheduledStart) ? fromJsonTimestamp(object.scheduledStart) : undefined,
      rampingUse: isSet(object.rampingUse) ? rampingUseFromJSON(object.rampingUse) : RampingUse.ScriptDefined,
    };
  },

  toJSON(message: PrepareScriptExecutionRequest): unknown {
    const obj: any = {};
    if (message.scriptPath !== "") {
      obj.scriptPath = message.scriptPath;
    }
    if (message.scriptId !== "") {
      obj.scriptId = message.scriptId;
    }
    if (message.scheduledStart !== undefined) {
      obj.scheduledStart = message.scheduledStart.toISOString();
    }
    if (message.rampingUse !== RampingUse.ScriptDefined) {
      obj.rampingUse = rampingUseToJSON(message.rampingUse);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PrepareScriptExecutionRequest>, I>>(base?: I): PrepareScriptExecutionRequest {
    return PrepareScriptExecutionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PrepareScriptExecutionRequest>, I>>(
    object: I,
  ): PrepareScriptExecutionRequest {
    const message = createBasePrepareScriptExecutionRequest();
    message.scriptPath = object.scriptPath ?? "";
    message.scriptId = object.scriptId ?? "";
    message.scheduledStart = object.scheduledStart ?? undefined;
    message.rampingUse = object.rampingUse ?? RampingUse.ScriptDefined;
    return message;
  },
};

function createBasePrepareScriptExecutionReply(): PrepareScriptExecutionReply {
  return { result: OperationStatus.Ok, error: "" };
}

export const PrepareScriptExecutionReply = {
  fromJSON(object: any): PrepareScriptExecutionReply {
    return {
      result: isSet(object.result) ? operationStatusFromJSON(object.result) : OperationStatus.Ok,
      error: isSet(object.error) ? gt.String(object.error) : "",
    };
  },

  toJSON(message: PrepareScriptExecutionReply): unknown {
    const obj: any = {};
    if (message.result !== OperationStatus.Ok) {
      obj.result = operationStatusToJSON(message.result);
    }
    if (message.error !== undefined && message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PrepareScriptExecutionReply>, I>>(base?: I): PrepareScriptExecutionReply {
    return PrepareScriptExecutionReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PrepareScriptExecutionReply>, I>>(object: I): PrepareScriptExecutionReply {
    const message = createBasePrepareScriptExecutionReply();
    message.result = object.result ?? OperationStatus.Ok;
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseStopScriptRequest(): StopScriptRequest {
  return { scriptPath: "", rampingUse: RampingUse.ScriptDefined };
}

export const StopScriptRequest = {
  fromJSON(object: any): StopScriptRequest {
    return {
      scriptPath: isSet(object.scriptPath) ? gt.String(object.scriptPath) : "",
      rampingUse: isSet(object.rampingUse) ? rampingUseFromJSON(object.rampingUse) : RampingUse.ScriptDefined,
    };
  },

  toJSON(message: StopScriptRequest): unknown {
    const obj: any = {};
    if (message.scriptPath !== "") {
      obj.scriptPath = message.scriptPath;
    }
    if (message.rampingUse !== RampingUse.ScriptDefined) {
      obj.rampingUse = rampingUseToJSON(message.rampingUse);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StopScriptRequest>, I>>(base?: I): StopScriptRequest {
    return StopScriptRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StopScriptRequest>, I>>(object: I): StopScriptRequest {
    const message = createBaseStopScriptRequest();
    message.scriptPath = object.scriptPath ?? "";
    message.rampingUse = object.rampingUse ?? RampingUse.ScriptDefined;
    return message;
  },
};

function createBaseStopScriptReply(): StopScriptReply {
  return { result: OperationStatus.Ok, error: "" };
}

export const StopScriptReply = {
  fromJSON(object: any): StopScriptReply {
    return {
      result: isSet(object.result) ? operationStatusFromJSON(object.result) : OperationStatus.Ok,
      error: isSet(object.error) ? gt.String(object.error) : "",
    };
  },

  toJSON(message: StopScriptReply): unknown {
    const obj: any = {};
    if (message.result !== OperationStatus.Ok) {
      obj.result = operationStatusToJSON(message.result);
    }
    if (message.error !== undefined && message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StopScriptReply>, I>>(base?: I): StopScriptReply {
    return StopScriptReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StopScriptReply>, I>>(object: I): StopScriptReply {
    const message = createBaseStopScriptReply();
    message.result = object.result ?? OperationStatus.Ok;
    message.error = object.error ?? "";
    return message;
  },
};

function createBasePauseScriptRequest(): PauseScriptRequest {
  return { scriptPath: "" };
}

export const PauseScriptRequest = {
  fromJSON(object: any): PauseScriptRequest {
    return { scriptPath: isSet(object.scriptPath) ? gt.String(object.scriptPath) : "" };
  },

  toJSON(message: PauseScriptRequest): unknown {
    const obj: any = {};
    if (message.scriptPath !== "") {
      obj.scriptPath = message.scriptPath;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PauseScriptRequest>, I>>(base?: I): PauseScriptRequest {
    return PauseScriptRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PauseScriptRequest>, I>>(object: I): PauseScriptRequest {
    const message = createBasePauseScriptRequest();
    message.scriptPath = object.scriptPath ?? "";
    return message;
  },
};

function createBasePauseScriptReply(): PauseScriptReply {
  return { result: OperationStatus.Ok, error: "" };
}

export const PauseScriptReply = {
  fromJSON(object: any): PauseScriptReply {
    return {
      result: isSet(object.result) ? operationStatusFromJSON(object.result) : OperationStatus.Ok,
      error: isSet(object.error) ? gt.String(object.error) : "",
    };
  },

  toJSON(message: PauseScriptReply): unknown {
    const obj: any = {};
    if (message.result !== OperationStatus.Ok) {
      obj.result = operationStatusToJSON(message.result);
    }
    if (message.error !== undefined && message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PauseScriptReply>, I>>(base?: I): PauseScriptReply {
    return PauseScriptReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PauseScriptReply>, I>>(object: I): PauseScriptReply {
    const message = createBasePauseScriptReply();
    message.result = object.result ?? OperationStatus.Ok;
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseResumeScriptRequest(): ResumeScriptRequest {
  return { scriptPath: "" };
}

export const ResumeScriptRequest = {
  fromJSON(object: any): ResumeScriptRequest {
    return { scriptPath: isSet(object.scriptPath) ? gt.String(object.scriptPath) : "" };
  },

  toJSON(message: ResumeScriptRequest): unknown {
    const obj: any = {};
    if (message.scriptPath !== "") {
      obj.scriptPath = message.scriptPath;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeScriptRequest>, I>>(base?: I): ResumeScriptRequest {
    return ResumeScriptRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResumeScriptRequest>, I>>(object: I): ResumeScriptRequest {
    const message = createBaseResumeScriptRequest();
    message.scriptPath = object.scriptPath ?? "";
    return message;
  },
};

function createBaseResumeScriptReply(): ResumeScriptReply {
  return { result: OperationStatus.Ok, error: "" };
}

export const ResumeScriptReply = {
  fromJSON(object: any): ResumeScriptReply {
    return {
      result: isSet(object.result) ? operationStatusFromJSON(object.result) : OperationStatus.Ok,
      error: isSet(object.error) ? gt.String(object.error) : "",
    };
  },

  toJSON(message: ResumeScriptReply): unknown {
    const obj: any = {};
    if (message.result !== OperationStatus.Ok) {
      obj.result = operationStatusToJSON(message.result);
    }
    if (message.error !== undefined && message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResumeScriptReply>, I>>(base?: I): ResumeScriptReply {
    return ResumeScriptReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResumeScriptReply>, I>>(object: I): ResumeScriptReply {
    const message = createBaseResumeScriptReply();
    message.result = object.result ?? OperationStatus.Ok;
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseSkipScriptRequest(): SkipScriptRequest {
  return { scriptPath: "" };
}

export const SkipScriptRequest = {
  fromJSON(object: any): SkipScriptRequest {
    return { scriptPath: isSet(object.scriptPath) ? gt.String(object.scriptPath) : "" };
  },

  toJSON(message: SkipScriptRequest): unknown {
    const obj: any = {};
    if (message.scriptPath !== "") {
      obj.scriptPath = message.scriptPath;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SkipScriptRequest>, I>>(base?: I): SkipScriptRequest {
    return SkipScriptRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SkipScriptRequest>, I>>(object: I): SkipScriptRequest {
    const message = createBaseSkipScriptRequest();
    message.scriptPath = object.scriptPath ?? "";
    return message;
  },
};

function createBaseSkipScriptReply(): SkipScriptReply {
  return { result: OperationStatus.Ok, error: "" };
}

export const SkipScriptReply = {
  fromJSON(object: any): SkipScriptReply {
    return {
      result: isSet(object.result) ? operationStatusFromJSON(object.result) : OperationStatus.Ok,
      error: isSet(object.error) ? gt.String(object.error) : "",
    };
  },

  toJSON(message: SkipScriptReply): unknown {
    const obj: any = {};
    if (message.result !== OperationStatus.Ok) {
      obj.result = operationStatusToJSON(message.result);
    }
    if (message.error !== undefined && message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SkipScriptReply>, I>>(base?: I): SkipScriptReply {
    return SkipScriptReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SkipScriptReply>, I>>(object: I): SkipScriptReply {
    const message = createBaseSkipScriptReply();
    message.result = object.result ?? OperationStatus.Ok;
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseGetScriptRunsRequest(): GetScriptRunsRequest {
  return { scriptPath: "" };
}

export const GetScriptRunsRequest = {
  fromJSON(object: any): GetScriptRunsRequest {
    return { scriptPath: isSet(object.scriptPath) ? gt.String(object.scriptPath) : "" };
  },

  toJSON(message: GetScriptRunsRequest): unknown {
    const obj: any = {};
    if (message.scriptPath !== "") {
      obj.scriptPath = message.scriptPath;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetScriptRunsRequest>, I>>(base?: I): GetScriptRunsRequest {
    return GetScriptRunsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetScriptRunsRequest>, I>>(object: I): GetScriptRunsRequest {
    const message = createBaseGetScriptRunsRequest();
    message.scriptPath = object.scriptPath ?? "";
    return message;
  },
};

function createBaseGetScriptRunsReply(): GetScriptRunsReply {
  return { scriptRuns: [], error: "" };
}

export const GetScriptRunsReply = {
  fromJSON(object: any): GetScriptRunsReply {
    return {
      scriptRuns: gt.Array.isArray(object?.scriptRuns) ? object.scriptRuns.map((e: any) => ScriptRun.fromJSON(e)) : [],
      error: isSet(object.error) ? gt.String(object.error) : "",
    };
  },

  toJSON(message: GetScriptRunsReply): unknown {
    const obj: any = {};
    if (message.scriptRuns?.length) {
      obj.scriptRuns = message.scriptRuns.map((e) => ScriptRun.toJSON(e));
    }
    if (message.error !== undefined && message.error !== "") {
      obj.error = message.error;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetScriptRunsReply>, I>>(base?: I): GetScriptRunsReply {
    return GetScriptRunsReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetScriptRunsReply>, I>>(object: I): GetScriptRunsReply {
    const message = createBaseGetScriptRunsReply();
    message.scriptRuns = object.scriptRuns?.map((e) => ScriptRun.fromPartial(e)) || [];
    message.error = object.error ?? "";
    return message;
  },
};

function createBaseScriptRun(): ScriptRun {
  return { fileDescriptor: undefined, actions: [] };
}

export const ScriptRun = {
  fromJSON(object: any): ScriptRun {
    return {
      fileDescriptor: isSet(object.fileDescriptor) ? FileDescriptor.fromJSON(object.fileDescriptor) : undefined,
      actions: gt.Array.isArray(object?.actions) ? object.actions.map((e: any) => Action.fromJSON(e)) : [],
    };
  },

  toJSON(message: ScriptRun): unknown {
    const obj: any = {};
    if (message.fileDescriptor !== undefined) {
      obj.fileDescriptor = FileDescriptor.toJSON(message.fileDescriptor);
    }
    if (message.actions?.length) {
      obj.actions = message.actions.map((e) => Action.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScriptRun>, I>>(base?: I): ScriptRun {
    return ScriptRun.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScriptRun>, I>>(object: I): ScriptRun {
    const message = createBaseScriptRun();
    message.fileDescriptor = (object.fileDescriptor !== undefined && object.fileDescriptor !== null)
      ? FileDescriptor.fromPartial(object.fileDescriptor)
      : undefined;
    message.actions = object.actions?.map((e) => Action.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAction(): Action {
  return { type: "", user: "", scheduledTime: undefined, hosts: "", timeStamp: undefined };
}

export const Action = {
  fromJSON(object: any): Action {
    return {
      type: isSet(object.type) ? gt.String(object.type) : "",
      user: isSet(object.user) ? gt.String(object.user) : "",
      scheduledTime: isSet(object.scheduledTime) ? fromJsonTimestamp(object.scheduledTime) : undefined,
      hosts: isSet(object.hosts) ? gt.String(object.hosts) : "",
      timeStamp: isSet(object.timeStamp) ? fromJsonTimestamp(object.timeStamp) : undefined,
    };
  },

  toJSON(message: Action): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.scheduledTime !== undefined) {
      obj.scheduledTime = message.scheduledTime.toISOString();
    }
    if (message.hosts !== "") {
      obj.hosts = message.hosts;
    }
    if (message.timeStamp !== undefined) {
      obj.timeStamp = message.timeStamp.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Action>, I>>(base?: I): Action {
    return Action.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Action>, I>>(object: I): Action {
    const message = createBaseAction();
    message.type = object.type ?? "";
    message.user = object.user ?? "";
    message.scheduledTime = object.scheduledTime ?? undefined;
    message.hosts = object.hosts ?? "";
    message.timeStamp = object.timeStamp ?? undefined;
    return message;
  },
};

function createBaseClientScriptData(): ClientScriptData {
  return { signalDataPoints: [], rampingBehavior: RampingBehavior.RampingBehaviorNone };
}

export const ClientScriptData = {
  fromJSON(object: any): ClientScriptData {
    return {
      signalDataPoints: gt.Array.isArray(object?.signalDataPoints)
        ? object.signalDataPoints.map((e: any) => ClientSignalDataPoint.fromJSON(e))
        : [],
      rampingBehavior: isSet(object.rampingBehavior)
        ? rampingBehaviorFromJSON(object.rampingBehavior)
        : RampingBehavior.RampingBehaviorNone,
    };
  },

  toJSON(message: ClientScriptData): unknown {
    const obj: any = {};
    if (message.signalDataPoints?.length) {
      obj.signalDataPoints = message.signalDataPoints.map((e) => ClientSignalDataPoint.toJSON(e));
    }
    if (message.rampingBehavior !== RampingBehavior.RampingBehaviorNone) {
      obj.rampingBehavior = rampingBehaviorToJSON(message.rampingBehavior);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClientScriptData>, I>>(base?: I): ClientScriptData {
    return ClientScriptData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClientScriptData>, I>>(object: I): ClientScriptData {
    const message = createBaseClientScriptData();
    message.signalDataPoints = object.signalDataPoints?.map((e) => ClientSignalDataPoint.fromPartial(e)) || [];
    message.rampingBehavior = object.rampingBehavior ?? RampingBehavior.RampingBehaviorNone;
    return message;
  },
};

function createBaseClientSignalDataPoint(): ClientSignalDataPoint {
  return { offset: undefined, transitionType: SignalTransitionType.Step, stations: [], signal: "", value: 0 };
}

export const ClientSignalDataPoint = {
  fromJSON(object: any): ClientSignalDataPoint {
    return {
      offset: isSet(object.offset) ? Duration.fromJSON(object.offset) : undefined,
      transitionType: isSet(object.transitionType)
        ? signalTransitionTypeFromJSON(object.transitionType)
        : SignalTransitionType.Step,
      stations: gt.Array.isArray(object?.stations)
        ? object.stations.map((e: any) => gt.String(e))
        : [],
      signal: isSet(object.signal) ? gt.String(object.signal) : "",
      value: isSet(object.value) ? gt.Number(object.value) : 0,
    };
  },

  toJSON(message: ClientSignalDataPoint): unknown {
    const obj: any = {};
    if (message.offset !== undefined) {
      obj.offset = Duration.toJSON(message.offset);
    }
    if (message.transitionType !== SignalTransitionType.Step) {
      obj.transitionType = signalTransitionTypeToJSON(message.transitionType);
    }
    if (message.stations?.length) {
      obj.stations = message.stations;
    }
    if (message.signal !== "") {
      obj.signal = message.signal;
    }
    if (message.value !== 0) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClientSignalDataPoint>, I>>(base?: I): ClientSignalDataPoint {
    return ClientSignalDataPoint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClientSignalDataPoint>, I>>(object: I): ClientSignalDataPoint {
    const message = createBaseClientSignalDataPoint();
    message.offset = (object.offset !== undefined && object.offset !== null)
      ? Duration.fromPartial(object.offset)
      : undefined;
    message.transitionType = object.transitionType ?? SignalTransitionType.Step;
    message.stations = object.stations?.map((e) => e) || [];
    message.signal = object.signal ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseInjectionReport(): InjectionReport {
  return { publishType: PublishType.Unknown, statusReport: undefined };
}

export const InjectionReport = {
  fromJSON(object: any): InjectionReport {
    return {
      publishType: isSet(object.publishType) ? publishTypeFromJSON(object.publishType) : PublishType.Unknown,
      statusReport: isSet(object.statusReport) ? GetStatusReply.fromJSON(object.statusReport) : undefined,
    };
  },

  toJSON(message: InjectionReport): unknown {
    const obj: any = {};
    if (message.publishType !== PublishType.Unknown) {
      obj.publishType = publishTypeToJSON(message.publishType);
    }
    if (message.statusReport !== undefined) {
      obj.statusReport = GetStatusReply.toJSON(message.statusReport);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InjectionReport>, I>>(base?: I): InjectionReport {
    return InjectionReport.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InjectionReport>, I>>(object: I): InjectionReport {
    const message = createBaseInjectionReport();
    message.publishType = object.publishType ?? PublishType.Unknown;
    message.statusReport = (object.statusReport !== undefined && object.statusReport !== null)
      ? GetStatusReply.fromPartial(object.statusReport)
      : undefined;
    return message;
  },
};

function createBasePingReport(): PingReport {
  return {};
}

export const PingReport = {
  fromJSON(_: any): PingReport {
    return {};
  },

  toJSON(_: PingReport): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<PingReport>, I>>(base?: I): PingReport {
    return PingReport.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PingReport>, I>>(_: I): PingReport {
    const message = createBasePingReport();
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const gt: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new gt.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof gt.Date) {
    return o;
  } else if (typeof o === "string") {
    return new gt.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
