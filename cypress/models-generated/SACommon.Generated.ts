/* eslint-disable */
import { Timestamp } from "./google/protobuf/timestamp.Generated";

export enum GridmeterState {
  Disabled = "Disabled",
  Enabled = "Enabled",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function gridmeterStateFromJSON(object: any): GridmeterState {
  switch (object) {
    case 0:
    case "Disabled":
      return GridmeterState.Disabled;
    case 1:
    case "Enabled":
      return GridmeterState.Enabled;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GridmeterState.UNRECOGNIZED;
  }
}

export function gridmeterStateToJSON(object: GridmeterState): string {
  switch (object) {
    case GridmeterState.Disabled:
      return "Disabled";
    case GridmeterState.Enabled:
      return "Enabled";
    case GridmeterState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ParameterDataType {
  Double = "Double",
  SInt64 = "SInt64",
  UInt64 = "UInt64",
  SInt32 = "SInt32",
  UInt32 = "UInt32",
  Bool = "Bool",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function parameterDataTypeFromJSON(object: any): ParameterDataType {
  switch (object) {
    case 0:
    case "Double":
      return ParameterDataType.Double;
    case 1:
    case "SInt64":
      return ParameterDataType.SInt64;
    case 2:
    case "UInt64":
      return ParameterDataType.UInt64;
    case 3:
    case "SInt32":
      return ParameterDataType.SInt32;
    case 4:
    case "UInt32":
      return ParameterDataType.UInt32;
    case 5:
    case "Bool":
      return ParameterDataType.Bool;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ParameterDataType.UNRECOGNIZED;
  }
}

export function parameterDataTypeToJSON(object: ParameterDataType): string {
  switch (object) {
    case ParameterDataType.Double:
      return "Double";
    case ParameterDataType.SInt64:
      return "SInt64";
    case ParameterDataType.UInt64:
      return "UInt64";
    case ParameterDataType.SInt32:
      return "SInt32";
    case ParameterDataType.UInt32:
      return "UInt32";
    case ParameterDataType.Bool:
      return "Bool";
    case ParameterDataType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Signal {
  name?: string | undefined;
  unit?: string | undefined;
  controller?: string | undefined;
  function?: string | undefined;
  signals: Signal[];
}

export interface ReactivePowerBalancing {
  Output?: number | undefined;
  Weight?: number | undefined;
  Offset?: number | undefined;
}

export interface PpgSubscription {
  sampleTime?: number | undefined;
  ppg: PpgSubscription_Ppg[];
}

export interface PpgSubscription_Ppg {
  CommunicationId?: number | undefined;
  GroupName?: string | undefined;
  reactivePowerBalancing?:
    | ReactivePowerBalancing
    | undefined;
  /** G_Topology, ppg missing in governor reply (G_Topology) */
  Topology?: number | undefined;
  activePower?: PpgSubscription_Ppg_ActivePower | undefined;
  reactivePower?: PpgSubscription_Ppg_ReactivePower | undefined;
}

export interface PpgSubscription_Ppg_ActivePower {
  /** ActivePower, PPG gmsActivePower */
  Measured?:
    | number
    | undefined;
  /** AppliedPowerReference, PPP missing in governor reply (AppliedPowerReference) */
  AppliedPowerReference?:
    | number
    | undefined;
  /** PMode, PPG PSlabilityMode consider enum instead of int */
  PSlaveabilityMode?:
    | number
    | undefined;
  /** ReferenceType, ppg missing in governor reply (referencetype) */
  ReferenceType?:
    | number
    | undefined;
  /** PPPGsInScope, PPG pInscopeCount */
  GenereratorsInScope?: number | undefined;
}

export interface PpgSubscription_Ppg_ReactivePower {
  Measured?:
    | PpgSubscription_Ppg_ReactivePower_QData
    | undefined;
  /**
   * optional double Mvar = 1; //Q_Reference, PPG missing in gov reply Q_Reference
   *           optional double UPU = 2;//U_AppliedReference, PPG missing in gov reply U_AppliedReference
   *          optional double PF = 3;//Q_ReferenceCosPhi, PPG missing in gov reply Q_ReferenceCosPhi
   */
  Referece?:
    | PpgSubscription_Ppg_ReactivePower_QData
    | undefined;
  /** Q_State - U_State aggregated , PPG  missing in gov reply QSlabilityMode */
  Mode?:
    | number
    | undefined;
  /** PPGSinScope, PPG quInscopeCount */
  GenereratorsInScope?: number | undefined;
}

export interface PpgSubscription_Ppg_ReactivePower_QData {
  MVar?: number | undefined;
  UPU?: number | undefined;
  PF?: number | undefined;
}

export interface SubTurbineSubscription {
  sampleTime?: Date | undefined;
  subTurbines: SubTurbineSubscription_SubTurbine[];
}

export interface SubTurbineSubscription_SubTurbine {
  name?: string | undefined;
  curtailmentPriority?: number | undefined;
  dmolKw?: number | undefined;
  ceaseStopSupported?: boolean | undefined;
  remoteStopSupported?: boolean | undefined;
  curtailmentStopSupported?: boolean | undefined;
  curtailmentStopState?: TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState | undefined;
  ceaseStopState?: TurbineSubscription_Turbine_CeasePData_CeasePState | undefined;
  remoteStopState?: TurbineSubscription_Turbine_RemotePPCStopState | undefined;
  minCapablePowerKw?: number | undefined;
  activePowerInscopeKw?: number | undefined;
  curtailmentStopAvailablePowerKw?: number | undefined;
  curtailmentStoppedHourCount?: number | undefined;
  isPSlaveable?: boolean | undefined;
  stoppedByPPCCount?: number | undefined;
  uncontrolledPowerKw?: number | undefined;
  isCurtailmentStopControllable?: boolean | undefined;
  isTurbineStartableByCurtailmentStopCurtailmentStop?: boolean | undefined;
  curtailmentStopRequest?: TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState | undefined;
  ceaseStopRequest?: TurbineSubscription_Turbine_CeasePData_CeasePState | undefined;
  remoteStopRequest?: TurbineSubscription_Turbine_RemotePPCStopState | undefined;
  isStartControllable?: boolean | undefined;
  curtailmentStopConfirmedRequest?: TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState | undefined;
  isCurtailmentStopRequestActive?: boolean | undefined;
  activePowerReferenceKw?: number | undefined;
  ratedPower?: number | undefined;
  groupName?: string | undefined;
  isCurtailmentStopRequestFault?: boolean | undefined;
  isCurtailmentStartRequestFault?: boolean | undefined;
  isCeaseStopRequestFault?: boolean | undefined;
  isCeaseStartRequestFault?: boolean | undefined;
  isRemoteStopRequestFault?: boolean | undefined;
  isRemoteStartRequestFault?: boolean | undefined;
  sourceTimeStamp?: Date | undefined;
}

export interface GeneratorSubscription {
  sampleTime?: number | undefined;
  generator: GeneratorSubscription_Generator[];
}

export interface GeneratorSubscription_Generator {
  timestamp?: number | undefined;
  readDataRTT?: number | undefined;
  generatorName?: string | undefined;
  activePower?: GeneratorSubscription_Generator_ActivePower | undefined;
  reactivePower?: GeneratorSubscription_Generator_ReactivePower | undefined;
  gridMeasurement?: GeneratorSubscription_Generator_GridMeasurement | undefined;
  generatorType?: number | undefined;
  groupName?: string | undefined;
  commStatusOk?: boolean | undefined;
  references?: GeneratorSubscription_Generator_References | undefined;
}

export interface GeneratorSubscription_Generator_ActivePower {
  RatedPower?: number | undefined;
  IsPSlaveable?: boolean | undefined;
  OverLoadLimit?: number | undefined;
  AvailablePower?: number | undefined;
  AvailablePowerInScope?: number | undefined;
  EstimatedPowerCapabilityLower?: number | undefined;
  EstimatedPowerCapabilityUpper?: number | undefined;
  PowerChangeRateUp?: number | undefined;
  PowerChangeRateDown?: number | undefined;
  RatedPowerIncluded?: number | undefined;
  AvailablePowerCtrl?: number | undefined;
  AvailablePowerCtrlInScope?: number | undefined;
  AvailablePowerRaw?: number | undefined;
  AvailablePowerRawSum?: number | undefined;
  MaxCapablePower?: number | undefined;
  MinCapablePower?: number | undefined;
  AvailablePowerBoost?: number | undefined;
  ActivePowerGeneratorSum?: number | undefined;
  ActivePowerGeneratorSumInScope?: number | undefined;
  RatedPowerOnGrid?: number | undefined;
  ActivePowerReference?: number | undefined;
  InscopeCount?: number | undefined;
  StateOfCharge?: number | undefined;
  StateOfHealth?: number | undefined;
  RatedStorageCapacity?: number | undefined;
  SoCMaxLimit?: number | undefined;
  SoCMinLimit?: number | undefined;
  PCtrlEnabled?: boolean | undefined;
  PReference?: number | undefined;
}

export interface GeneratorSubscription_Generator_ReactivePower {
  QMinMax?: number | undefined;
  QMin?: number | undefined;
  QMax?: number | undefined;
  IsQReactiveSlaveable?: boolean | undefined;
  IsQPowerFactorSlaveable?: boolean | undefined;
  IsUSlaveable?: boolean | undefined;
  isFRTSupportedCount?: number | undefined;
  isVoltageFRTActiveCount?: number | undefined;
  VoltageReference?: number | undefined;
  InscopeCount?: number | undefined;
  PowerBalancingOutput?: number | undefined;
  PConnectLimit?: number | undefined;
  PDisconnectLimit?: number | undefined;
  QConnectLimit?: number | undefined;
  QDisconnectLimit?: number | undefined;
  ConnectDelay?: number | undefined;
  DisconnectDelay?: number | undefined;
  MinimumConnectedPeriod?: number | undefined;
  MinimumDisconnectedPeriod?: number | undefined;
  NumberOfOperations?: number | undefined;
  DiscreteDeviceStatus?: number | undefined;
  KeepAlive?: number | undefined;
  Anomaly?: boolean | undefined;
  CloseLockState?: boolean | undefined;
  OpenLockState?: boolean | undefined;
  SecondaryContributorState?: number | undefined;
  UCtrlEnabled?: boolean | undefined;
  QReference?: number | undefined;
  QPFReference?: number | undefined;
  UReference?: number | undefined;
}

export interface GeneratorSubscription_Generator_GridMeasurement {
  GMSStatus?: number | undefined;
  ActivePower?: number | undefined;
  ReactivePower?: number | undefined;
  NominalVoltage?: number | undefined;
  Frequency?: number | undefined;
  NormalisedVoltage?: number | undefined;
  ActivePowerQuality?: number | undefined;
  ReactivePowerQuality?: number | undefined;
  VoltageQuality?: number | undefined;
  FrequencyQuality?: number | undefined;
}

export interface GeneratorSubscription_Generator_References {
  PReference?: number | undefined;
  QReference?: number | undefined;
  QPFReference?: number | undefined;
  UReference?: number | undefined;
  Open?: boolean | undefined;
  Close?: boolean | undefined;
  ConnectSecondaryContributor?: boolean | undefined;
  DisconnectSecondaryContributor?: boolean | undefined;
}

export interface TurbineSubscription {
  sampleTime?: number | undefined;
  turbine: TurbineSubscription_Turbine[];
}

export interface TurbineSubscription_Turbine {
  turbineName?: string | undefined;
  sourceTimeStamp?: number | undefined;
  groupName?: string | undefined;
  controllerType?: TurbineSubscription_Turbine_ControllerType | undefined;
  commStatus?: TurbineSubscription_Turbine_CommStatus | undefined;
  reactivePower?: number | undefined;
  voltage?: number | undefined;
  activePower?: TurbineSubscription_Turbine_GeneratorDataPoint | undefined;
  frequency?: number | undefined;
  availablePower?: number | undefined;
  rawAvailablePower?: number | undefined;
  wtOperationState?: TurbineSubscription_Turbine_TurbineStatus | undefined;
  windSpeed?: number | undefined;
  remoteEnabled?: boolean | undefined;
  powerReference?: number | undefined;
  ipcStatus?: TurbineSubscription_Turbine_IpcStatus | undefined;
  converterRunning?: boolean | undefined;
  reactiveReference?: number | undefined;
  inertialResponse?: TurbineSubscription_Turbine_InertialResponseInformation | undefined;
  assignPowerRef?: number | undefined;
  availablePowerFiltered?: number | undefined;
  pUsability?: TurbineSubscription_Turbine_PowerUsability | undefined;
  vUsability?: TurbineSubscription_Turbine_VoltageUsability | undefined;
  fallBackInformation?: TurbineSubscription_Turbine_FallBackInformation | undefined;
  parPCtrlEnabled?: boolean | undefined;
  parUCtrlEnabled?: boolean | undefined;
  islandModeState?: TurbineSubscription_Turbine_IslandModeState | undefined;
  islandModeSetting?: TurbineSubscription_Turbine_IslandModeSetting | undefined;
  powerRateChange?: number | undefined;
  isTargetCommOk?: boolean | undefined;
  availablePowerBoost?: number | undefined;
  vModeInfo?: TurbineSubscription_Turbine_VModeInformation | undefined;
  sdsReadRTT?: number | undefined;
  isVFRTActive?: boolean | undefined;
  manPowerRef?: number | undefined;
  manVoltageRef?: number | undefined;
  curtailmentPriority?: number | undefined;
  dmolPercentage?: number | undefined;
  isEventTriggered?: boolean | undefined;
  reactivePowerBalancing?: TurbineSubscription_Turbine_ReactivePowerBalancing | undefined;
  frtVoltageLimits?: TurbineSubscription_Turbine_FrtVoltageLimits | undefined;
  reactivePowerCapabilities?: TurbineSubscription_Turbine_ReactivePowerCapabilities | undefined;
  ratedPower?: number | undefined;
  curtailmentData?: TurbineSubscription_Turbine_CurtailmentData | undefined;
  references?: TurbineSubscription_Turbine_References | undefined;
  referencesFeedback?: TurbineSubscription_Turbine_References | undefined;
  curtailmentStopData?: TurbineSubscription_Turbine_CurtailmentStopData | undefined;
  towerDampingData?: TurbineSubscription_Turbine_TowerDampingData | undefined;
  estimatedAvailablePowerBoost?: number | undefined;
  dmol?: number | undefined;
  powerRateChangeDown?: number | undefined;
  maxPowerReferencePct?: number | undefined;
  ceasePData?: TurbineSubscription_Turbine_CeasePData | undefined;
  ambientTemp?: number | undefined;
  reactivePriority?: number | undefined;
  ratedPowerBoost?: number | undefined;
  staticOperationalLimit?: number | undefined;
  activeStopsByPPC?: number | undefined;
  activeStopsInTotal?: number | undefined;
  remotePPCStopState?: TurbineSubscription_Turbine_RemotePPCStopState | undefined;
  softRestorationLimit?: number | undefined;
  isIRTurActive?: boolean | undefined;
  turbineStatus?: TurbineSubscription_Turbine_TurbineCommunicationStatus | undefined;
  qMinMax?: number | undefined;
  poatdStateData?: TurbineSubscription_Turbine_POATDStateData | undefined;
  communicationSecure?: boolean | undefined;
}

export enum TurbineSubscription_Turbine_ControllerType {
  WTC2 = "WTC2",
  WTC3 = "WTC3",
  STC1 = "STC1",
  STC1TDA = "STC1TDA",
  STDA = "STDA",
  STC1STDA = "STC1STDA",
  WTC3STDA = "WTC3STDA",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function turbineSubscription_Turbine_ControllerTypeFromJSON(
  object: any,
): TurbineSubscription_Turbine_ControllerType {
  switch (object) {
    case 0:
    case "WTC2":
      return TurbineSubscription_Turbine_ControllerType.WTC2;
    case 1:
    case "WTC3":
      return TurbineSubscription_Turbine_ControllerType.WTC3;
    case 2:
    case "STC1":
      return TurbineSubscription_Turbine_ControllerType.STC1;
    case 3:
    case "STC1TDA":
      return TurbineSubscription_Turbine_ControllerType.STC1TDA;
    case 4:
    case "STDA":
      return TurbineSubscription_Turbine_ControllerType.STDA;
    case 5:
    case "STC1STDA":
      return TurbineSubscription_Turbine_ControllerType.STC1STDA;
    case 6:
    case "WTC3STDA":
      return TurbineSubscription_Turbine_ControllerType.WTC3STDA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TurbineSubscription_Turbine_ControllerType.UNRECOGNIZED;
  }
}

export function turbineSubscription_Turbine_ControllerTypeToJSON(
  object: TurbineSubscription_Turbine_ControllerType,
): string {
  switch (object) {
    case TurbineSubscription_Turbine_ControllerType.WTC2:
      return "WTC2";
    case TurbineSubscription_Turbine_ControllerType.WTC3:
      return "WTC3";
    case TurbineSubscription_Turbine_ControllerType.STC1:
      return "STC1";
    case TurbineSubscription_Turbine_ControllerType.STC1TDA:
      return "STC1TDA";
    case TurbineSubscription_Turbine_ControllerType.STDA:
      return "STDA";
    case TurbineSubscription_Turbine_ControllerType.STC1STDA:
      return "STC1STDA";
    case TurbineSubscription_Turbine_ControllerType.WTC3STDA:
      return "WTC3STDA";
    case TurbineSubscription_Turbine_ControllerType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TurbineSubscription_Turbine_CommStatus {
  ETCommOK = "ETCommOK",
  ETCommSampleError = "ETCommSampleError",
  ETCommTimeOut = "ETCommTimeOut",
  ETCommUnInitialised = "ETCommUnInitialised",
  UnknownComm = "UnknownComm",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function turbineSubscription_Turbine_CommStatusFromJSON(object: any): TurbineSubscription_Turbine_CommStatus {
  switch (object) {
    case 0:
    case "ETCommOK":
      return TurbineSubscription_Turbine_CommStatus.ETCommOK;
    case 1:
    case "ETCommSampleError":
      return TurbineSubscription_Turbine_CommStatus.ETCommSampleError;
    case 2:
    case "ETCommTimeOut":
      return TurbineSubscription_Turbine_CommStatus.ETCommTimeOut;
    case 4:
    case "ETCommUnInitialised":
      return TurbineSubscription_Turbine_CommStatus.ETCommUnInitialised;
    case 255:
    case "UnknownComm":
      return TurbineSubscription_Turbine_CommStatus.UnknownComm;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TurbineSubscription_Turbine_CommStatus.UNRECOGNIZED;
  }
}

export function turbineSubscription_Turbine_CommStatusToJSON(object: TurbineSubscription_Turbine_CommStatus): string {
  switch (object) {
    case TurbineSubscription_Turbine_CommStatus.ETCommOK:
      return "ETCommOK";
    case TurbineSubscription_Turbine_CommStatus.ETCommSampleError:
      return "ETCommSampleError";
    case TurbineSubscription_Turbine_CommStatus.ETCommTimeOut:
      return "ETCommTimeOut";
    case TurbineSubscription_Turbine_CommStatus.ETCommUnInitialised:
      return "ETCommUnInitialised";
    case TurbineSubscription_Turbine_CommStatus.UnknownComm:
      return "UnknownComm";
    case TurbineSubscription_Turbine_CommStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TurbineSubscription_Turbine_GeneratorDataPointQuality {
  Good = "Good",
  Invalid = "Invalid",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function turbineSubscription_Turbine_GeneratorDataPointQualityFromJSON(
  object: any,
): TurbineSubscription_Turbine_GeneratorDataPointQuality {
  switch (object) {
    case 0:
    case "Good":
      return TurbineSubscription_Turbine_GeneratorDataPointQuality.Good;
    case 1:
    case "Invalid":
      return TurbineSubscription_Turbine_GeneratorDataPointQuality.Invalid;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TurbineSubscription_Turbine_GeneratorDataPointQuality.UNRECOGNIZED;
  }
}

export function turbineSubscription_Turbine_GeneratorDataPointQualityToJSON(
  object: TurbineSubscription_Turbine_GeneratorDataPointQuality,
): string {
  switch (object) {
    case TurbineSubscription_Turbine_GeneratorDataPointQuality.Good:
      return "Good";
    case TurbineSubscription_Turbine_GeneratorDataPointQuality.Invalid:
      return "Invalid";
    case TurbineSubscription_Turbine_GeneratorDataPointQuality.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TurbineSubscription_Turbine_TurbineStatus {
  OperatingOnGrid = "OperatingOnGrid",
  OperatingNotOnGrid = "OperatingNotOnGrid",
  Ready = "Ready",
  AwaitingWind = "AwaitingWind",
  StoppedLubrication = "StoppedLubrication",
  StoppedUntwisting = "StoppedUntwisting",
  StoppedHighWind = "StoppedHighWind",
  StoppedGrid = "StoppedGrid",
  StoppedErrorAutoRestart = "StoppedErrorAutoRestart",
  StoppedErrorManualRestart = "StoppedErrorManualRestart",
  StoppedLocally = "StoppedLocally",
  StoppedRemotely = "StoppedRemotely",
  TurbineStatusUnknown = "TurbineStatusUnknown",
  UnknownStatus = "UnknownStatus",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function turbineSubscription_Turbine_TurbineStatusFromJSON(
  object: any,
): TurbineSubscription_Turbine_TurbineStatus {
  switch (object) {
    case 0:
    case "OperatingOnGrid":
      return TurbineSubscription_Turbine_TurbineStatus.OperatingOnGrid;
    case 1:
    case "OperatingNotOnGrid":
      return TurbineSubscription_Turbine_TurbineStatus.OperatingNotOnGrid;
    case 2:
    case "Ready":
      return TurbineSubscription_Turbine_TurbineStatus.Ready;
    case 3:
    case "AwaitingWind":
      return TurbineSubscription_Turbine_TurbineStatus.AwaitingWind;
    case 4:
    case "StoppedLubrication":
      return TurbineSubscription_Turbine_TurbineStatus.StoppedLubrication;
    case 5:
    case "StoppedUntwisting":
      return TurbineSubscription_Turbine_TurbineStatus.StoppedUntwisting;
    case 6:
    case "StoppedHighWind":
      return TurbineSubscription_Turbine_TurbineStatus.StoppedHighWind;
    case 7:
    case "StoppedGrid":
      return TurbineSubscription_Turbine_TurbineStatus.StoppedGrid;
    case 8:
    case "StoppedErrorAutoRestart":
      return TurbineSubscription_Turbine_TurbineStatus.StoppedErrorAutoRestart;
    case 9:
    case "StoppedErrorManualRestart":
      return TurbineSubscription_Turbine_TurbineStatus.StoppedErrorManualRestart;
    case 10:
    case "StoppedLocally":
      return TurbineSubscription_Turbine_TurbineStatus.StoppedLocally;
    case 11:
    case "StoppedRemotely":
      return TurbineSubscription_Turbine_TurbineStatus.StoppedRemotely;
    case 12:
    case "TurbineStatusUnknown":
      return TurbineSubscription_Turbine_TurbineStatus.TurbineStatusUnknown;
    case 255:
    case "UnknownStatus":
      return TurbineSubscription_Turbine_TurbineStatus.UnknownStatus;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TurbineSubscription_Turbine_TurbineStatus.UNRECOGNIZED;
  }
}

export function turbineSubscription_Turbine_TurbineStatusToJSON(
  object: TurbineSubscription_Turbine_TurbineStatus,
): string {
  switch (object) {
    case TurbineSubscription_Turbine_TurbineStatus.OperatingOnGrid:
      return "OperatingOnGrid";
    case TurbineSubscription_Turbine_TurbineStatus.OperatingNotOnGrid:
      return "OperatingNotOnGrid";
    case TurbineSubscription_Turbine_TurbineStatus.Ready:
      return "Ready";
    case TurbineSubscription_Turbine_TurbineStatus.AwaitingWind:
      return "AwaitingWind";
    case TurbineSubscription_Turbine_TurbineStatus.StoppedLubrication:
      return "StoppedLubrication";
    case TurbineSubscription_Turbine_TurbineStatus.StoppedUntwisting:
      return "StoppedUntwisting";
    case TurbineSubscription_Turbine_TurbineStatus.StoppedHighWind:
      return "StoppedHighWind";
    case TurbineSubscription_Turbine_TurbineStatus.StoppedGrid:
      return "StoppedGrid";
    case TurbineSubscription_Turbine_TurbineStatus.StoppedErrorAutoRestart:
      return "StoppedErrorAutoRestart";
    case TurbineSubscription_Turbine_TurbineStatus.StoppedErrorManualRestart:
      return "StoppedErrorManualRestart";
    case TurbineSubscription_Turbine_TurbineStatus.StoppedLocally:
      return "StoppedLocally";
    case TurbineSubscription_Turbine_TurbineStatus.StoppedRemotely:
      return "StoppedRemotely";
    case TurbineSubscription_Turbine_TurbineStatus.TurbineStatusUnknown:
      return "TurbineStatusUnknown";
    case TurbineSubscription_Turbine_TurbineStatus.UnknownStatus:
      return "UnknownStatus";
    case TurbineSubscription_Turbine_TurbineStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TurbineSubscription_Turbine_IpcStatus {
  IpcDataOk = "IpcDataOk",
  IpcDataNotOk = "IpcDataNotOk",
  IpcDataUninitialized = "IpcDataUninitialized",
  IpcAllNotOk = "IpcAllNotOk",
  UnknownIpcStatus = "UnknownIpcStatus",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function turbineSubscription_Turbine_IpcStatusFromJSON(object: any): TurbineSubscription_Turbine_IpcStatus {
  switch (object) {
    case 0:
    case "IpcDataOk":
      return TurbineSubscription_Turbine_IpcStatus.IpcDataOk;
    case 1:
    case "IpcDataNotOk":
      return TurbineSubscription_Turbine_IpcStatus.IpcDataNotOk;
    case 4:
    case "IpcDataUninitialized":
      return TurbineSubscription_Turbine_IpcStatus.IpcDataUninitialized;
    case 5:
    case "IpcAllNotOk":
      return TurbineSubscription_Turbine_IpcStatus.IpcAllNotOk;
    case 255:
    case "UnknownIpcStatus":
      return TurbineSubscription_Turbine_IpcStatus.UnknownIpcStatus;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TurbineSubscription_Turbine_IpcStatus.UNRECOGNIZED;
  }
}

export function turbineSubscription_Turbine_IpcStatusToJSON(object: TurbineSubscription_Turbine_IpcStatus): string {
  switch (object) {
    case TurbineSubscription_Turbine_IpcStatus.IpcDataOk:
      return "IpcDataOk";
    case TurbineSubscription_Turbine_IpcStatus.IpcDataNotOk:
      return "IpcDataNotOk";
    case TurbineSubscription_Turbine_IpcStatus.IpcDataUninitialized:
      return "IpcDataUninitialized";
    case TurbineSubscription_Turbine_IpcStatus.IpcAllNotOk:
      return "IpcAllNotOk";
    case TurbineSubscription_Turbine_IpcStatus.UnknownIpcStatus:
      return "UnknownIpcStatus";
    case TurbineSubscription_Turbine_IpcStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TurbineSubscription_Turbine_PowerUsability {
  PUsabilityOK = "PUsabilityOK",
  PUDisabled = "PUDisabled",
  PUOnlineDataCommErr = "PUOnlineDataCommErr",
  PUNoRemote = "PUNoRemote",
  PUConverterCommError = "PUConverterCommError",
  PUConverterStop = "PUConverterStop",
  PUTurbineStop = "PUTurbineStop",
  PUNoConfig = "PUNoConfig",
  PUIslandmodePassive = "PUIslandmodePassive",
  PUTurbineDataCommErr = "PUTurbineDataCommErr",
  PUControlNotPossible = "PUControlNotPossible",
  PUControlInhibited = "PUControlInhibited",
  UnknownPUsability = "UnknownPUsability",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function turbineSubscription_Turbine_PowerUsabilityFromJSON(
  object: any,
): TurbineSubscription_Turbine_PowerUsability {
  switch (object) {
    case 0:
    case "PUsabilityOK":
      return TurbineSubscription_Turbine_PowerUsability.PUsabilityOK;
    case 1:
    case "PUDisabled":
      return TurbineSubscription_Turbine_PowerUsability.PUDisabled;
    case 2:
    case "PUOnlineDataCommErr":
      return TurbineSubscription_Turbine_PowerUsability.PUOnlineDataCommErr;
    case 3:
    case "PUNoRemote":
      return TurbineSubscription_Turbine_PowerUsability.PUNoRemote;
    case 4:
    case "PUConverterCommError":
      return TurbineSubscription_Turbine_PowerUsability.PUConverterCommError;
    case 5:
    case "PUConverterStop":
      return TurbineSubscription_Turbine_PowerUsability.PUConverterStop;
    case 6:
    case "PUTurbineStop":
      return TurbineSubscription_Turbine_PowerUsability.PUTurbineStop;
    case 7:
    case "PUNoConfig":
      return TurbineSubscription_Turbine_PowerUsability.PUNoConfig;
    case 8:
    case "PUIslandmodePassive":
      return TurbineSubscription_Turbine_PowerUsability.PUIslandmodePassive;
    case 9:
    case "PUTurbineDataCommErr":
      return TurbineSubscription_Turbine_PowerUsability.PUTurbineDataCommErr;
    case 10:
    case "PUControlNotPossible":
      return TurbineSubscription_Turbine_PowerUsability.PUControlNotPossible;
    case 11:
    case "PUControlInhibited":
      return TurbineSubscription_Turbine_PowerUsability.PUControlInhibited;
    case 255:
    case "UnknownPUsability":
      return TurbineSubscription_Turbine_PowerUsability.UnknownPUsability;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TurbineSubscription_Turbine_PowerUsability.UNRECOGNIZED;
  }
}

export function turbineSubscription_Turbine_PowerUsabilityToJSON(
  object: TurbineSubscription_Turbine_PowerUsability,
): string {
  switch (object) {
    case TurbineSubscription_Turbine_PowerUsability.PUsabilityOK:
      return "PUsabilityOK";
    case TurbineSubscription_Turbine_PowerUsability.PUDisabled:
      return "PUDisabled";
    case TurbineSubscription_Turbine_PowerUsability.PUOnlineDataCommErr:
      return "PUOnlineDataCommErr";
    case TurbineSubscription_Turbine_PowerUsability.PUNoRemote:
      return "PUNoRemote";
    case TurbineSubscription_Turbine_PowerUsability.PUConverterCommError:
      return "PUConverterCommError";
    case TurbineSubscription_Turbine_PowerUsability.PUConverterStop:
      return "PUConverterStop";
    case TurbineSubscription_Turbine_PowerUsability.PUTurbineStop:
      return "PUTurbineStop";
    case TurbineSubscription_Turbine_PowerUsability.PUNoConfig:
      return "PUNoConfig";
    case TurbineSubscription_Turbine_PowerUsability.PUIslandmodePassive:
      return "PUIslandmodePassive";
    case TurbineSubscription_Turbine_PowerUsability.PUTurbineDataCommErr:
      return "PUTurbineDataCommErr";
    case TurbineSubscription_Turbine_PowerUsability.PUControlNotPossible:
      return "PUControlNotPossible";
    case TurbineSubscription_Turbine_PowerUsability.PUControlInhibited:
      return "PUControlInhibited";
    case TurbineSubscription_Turbine_PowerUsability.UnknownPUsability:
      return "UnknownPUsability";
    case TurbineSubscription_Turbine_PowerUsability.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TurbineSubscription_Turbine_VoltageUsability {
  VUsabilityOK = "VUsabilityOK",
  VUDisabled = "VUDisabled",
  VUOnlineDataUnInitialied = "VUOnlineDataUnInitialied",
  VUNoRemote = "VUNoRemote",
  VUConverterCommError = "VUConverterCommError",
  VUConverterStop = "VUConverterStop",
  VUNoConfig = "VUNoConfig",
  VUElspecCommError = "VUElspecCommError",
  VUElspecError = "VUElspecError",
  VUElspecSelftest = "VUElspecSelftest",
  VUElspecInhibited = "VUElspecInhibited",
  VUIslandmodePassive = "VUIslandmodePassive",
  VUOnlineDataCommErr = "VUOnlineDataCommErr",
  VUTurbineDataCommErr = "VUTurbineDataCommErr",
  VUControlNotPossible = "VUControlNotPossible",
  UnknownVUsability = "UnknownVUsability",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function turbineSubscription_Turbine_VoltageUsabilityFromJSON(
  object: any,
): TurbineSubscription_Turbine_VoltageUsability {
  switch (object) {
    case 0:
    case "VUsabilityOK":
      return TurbineSubscription_Turbine_VoltageUsability.VUsabilityOK;
    case 1:
    case "VUDisabled":
      return TurbineSubscription_Turbine_VoltageUsability.VUDisabled;
    case 2:
    case "VUOnlineDataUnInitialied":
      return TurbineSubscription_Turbine_VoltageUsability.VUOnlineDataUnInitialied;
    case 3:
    case "VUNoRemote":
      return TurbineSubscription_Turbine_VoltageUsability.VUNoRemote;
    case 4:
    case "VUConverterCommError":
      return TurbineSubscription_Turbine_VoltageUsability.VUConverterCommError;
    case 5:
    case "VUConverterStop":
      return TurbineSubscription_Turbine_VoltageUsability.VUConverterStop;
    case 6:
    case "VUNoConfig":
      return TurbineSubscription_Turbine_VoltageUsability.VUNoConfig;
    case 7:
    case "VUElspecCommError":
      return TurbineSubscription_Turbine_VoltageUsability.VUElspecCommError;
    case 8:
    case "VUElspecError":
      return TurbineSubscription_Turbine_VoltageUsability.VUElspecError;
    case 9:
    case "VUElspecSelftest":
      return TurbineSubscription_Turbine_VoltageUsability.VUElspecSelftest;
    case 10:
    case "VUElspecInhibited":
      return TurbineSubscription_Turbine_VoltageUsability.VUElspecInhibited;
    case 11:
    case "VUIslandmodePassive":
      return TurbineSubscription_Turbine_VoltageUsability.VUIslandmodePassive;
    case 12:
    case "VUOnlineDataCommErr":
      return TurbineSubscription_Turbine_VoltageUsability.VUOnlineDataCommErr;
    case 13:
    case "VUTurbineDataCommErr":
      return TurbineSubscription_Turbine_VoltageUsability.VUTurbineDataCommErr;
    case 14:
    case "VUControlNotPossible":
      return TurbineSubscription_Turbine_VoltageUsability.VUControlNotPossible;
    case 255:
    case "UnknownVUsability":
      return TurbineSubscription_Turbine_VoltageUsability.UnknownVUsability;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TurbineSubscription_Turbine_VoltageUsability.UNRECOGNIZED;
  }
}

export function turbineSubscription_Turbine_VoltageUsabilityToJSON(
  object: TurbineSubscription_Turbine_VoltageUsability,
): string {
  switch (object) {
    case TurbineSubscription_Turbine_VoltageUsability.VUsabilityOK:
      return "VUsabilityOK";
    case TurbineSubscription_Turbine_VoltageUsability.VUDisabled:
      return "VUDisabled";
    case TurbineSubscription_Turbine_VoltageUsability.VUOnlineDataUnInitialied:
      return "VUOnlineDataUnInitialied";
    case TurbineSubscription_Turbine_VoltageUsability.VUNoRemote:
      return "VUNoRemote";
    case TurbineSubscription_Turbine_VoltageUsability.VUConverterCommError:
      return "VUConverterCommError";
    case TurbineSubscription_Turbine_VoltageUsability.VUConverterStop:
      return "VUConverterStop";
    case TurbineSubscription_Turbine_VoltageUsability.VUNoConfig:
      return "VUNoConfig";
    case TurbineSubscription_Turbine_VoltageUsability.VUElspecCommError:
      return "VUElspecCommError";
    case TurbineSubscription_Turbine_VoltageUsability.VUElspecError:
      return "VUElspecError";
    case TurbineSubscription_Turbine_VoltageUsability.VUElspecSelftest:
      return "VUElspecSelftest";
    case TurbineSubscription_Turbine_VoltageUsability.VUElspecInhibited:
      return "VUElspecInhibited";
    case TurbineSubscription_Turbine_VoltageUsability.VUIslandmodePassive:
      return "VUIslandmodePassive";
    case TurbineSubscription_Turbine_VoltageUsability.VUOnlineDataCommErr:
      return "VUOnlineDataCommErr";
    case TurbineSubscription_Turbine_VoltageUsability.VUTurbineDataCommErr:
      return "VUTurbineDataCommErr";
    case TurbineSubscription_Turbine_VoltageUsability.VUControlNotPossible:
      return "VUControlNotPossible";
    case TurbineSubscription_Turbine_VoltageUsability.UnknownVUsability:
      return "UnknownVUsability";
    case TurbineSubscription_Turbine_VoltageUsability.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TurbineSubscription_Turbine_IslandModeState {
  IslandModeStateInactive = "IslandModeStateInactive",
  IslandModeStatePassive = "IslandModeStatePassive",
  IslandModeStateActive = "IslandModeStateActive",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function turbineSubscription_Turbine_IslandModeStateFromJSON(
  object: any,
): TurbineSubscription_Turbine_IslandModeState {
  switch (object) {
    case 0:
    case "IslandModeStateInactive":
      return TurbineSubscription_Turbine_IslandModeState.IslandModeStateInactive;
    case 1:
    case "IslandModeStatePassive":
      return TurbineSubscription_Turbine_IslandModeState.IslandModeStatePassive;
    case 2:
    case "IslandModeStateActive":
      return TurbineSubscription_Turbine_IslandModeState.IslandModeStateActive;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TurbineSubscription_Turbine_IslandModeState.UNRECOGNIZED;
  }
}

export function turbineSubscription_Turbine_IslandModeStateToJSON(
  object: TurbineSubscription_Turbine_IslandModeState,
): string {
  switch (object) {
    case TurbineSubscription_Turbine_IslandModeState.IslandModeStateInactive:
      return "IslandModeStateInactive";
    case TurbineSubscription_Turbine_IslandModeState.IslandModeStatePassive:
      return "IslandModeStatePassive";
    case TurbineSubscription_Turbine_IslandModeState.IslandModeStateActive:
      return "IslandModeStateActive";
    case TurbineSubscription_Turbine_IslandModeState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TurbineSubscription_Turbine_IslandModeSetting {
  IslandModeSettingPassive = "IslandModeSettingPassive",
  IslandModeSettingActive = "IslandModeSettingActive",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function turbineSubscription_Turbine_IslandModeSettingFromJSON(
  object: any,
): TurbineSubscription_Turbine_IslandModeSetting {
  switch (object) {
    case 0:
    case "IslandModeSettingPassive":
      return TurbineSubscription_Turbine_IslandModeSetting.IslandModeSettingPassive;
    case 1:
    case "IslandModeSettingActive":
      return TurbineSubscription_Turbine_IslandModeSetting.IslandModeSettingActive;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TurbineSubscription_Turbine_IslandModeSetting.UNRECOGNIZED;
  }
}

export function turbineSubscription_Turbine_IslandModeSettingToJSON(
  object: TurbineSubscription_Turbine_IslandModeSetting,
): string {
  switch (object) {
    case TurbineSubscription_Turbine_IslandModeSetting.IslandModeSettingPassive:
      return "IslandModeSettingPassive";
    case TurbineSubscription_Turbine_IslandModeSetting.IslandModeSettingActive:
      return "IslandModeSettingActive";
    case TurbineSubscription_Turbine_IslandModeSetting.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TurbineSubscription_Turbine_RemotePPCStopState {
  Uninitialized = "Uninitialized",
  Started = "Started",
  Stopped = "Stopped",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function turbineSubscription_Turbine_RemotePPCStopStateFromJSON(
  object: any,
): TurbineSubscription_Turbine_RemotePPCStopState {
  switch (object) {
    case 0:
    case "Uninitialized":
      return TurbineSubscription_Turbine_RemotePPCStopState.Uninitialized;
    case 1:
    case "Started":
      return TurbineSubscription_Turbine_RemotePPCStopState.Started;
    case 2:
    case "Stopped":
      return TurbineSubscription_Turbine_RemotePPCStopState.Stopped;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TurbineSubscription_Turbine_RemotePPCStopState.UNRECOGNIZED;
  }
}

export function turbineSubscription_Turbine_RemotePPCStopStateToJSON(
  object: TurbineSubscription_Turbine_RemotePPCStopState,
): string {
  switch (object) {
    case TurbineSubscription_Turbine_RemotePPCStopState.Uninitialized:
      return "Uninitialized";
    case TurbineSubscription_Turbine_RemotePPCStopState.Started:
      return "Started";
    case TurbineSubscription_Turbine_RemotePPCStopState.Stopped:
      return "Stopped";
    case TurbineSubscription_Turbine_RemotePPCStopState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TurbineSubscription_Turbine_TurbineCommunicationStatus {
  Ok = "Ok",
  Error = "Error",
  Unitialised = "Unitialised",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function turbineSubscription_Turbine_TurbineCommunicationStatusFromJSON(
  object: any,
): TurbineSubscription_Turbine_TurbineCommunicationStatus {
  switch (object) {
    case 0:
    case "Ok":
      return TurbineSubscription_Turbine_TurbineCommunicationStatus.Ok;
    case 1:
    case "Error":
      return TurbineSubscription_Turbine_TurbineCommunicationStatus.Error;
    case 4:
    case "Unitialised":
      return TurbineSubscription_Turbine_TurbineCommunicationStatus.Unitialised;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TurbineSubscription_Turbine_TurbineCommunicationStatus.UNRECOGNIZED;
  }
}

export function turbineSubscription_Turbine_TurbineCommunicationStatusToJSON(
  object: TurbineSubscription_Turbine_TurbineCommunicationStatus,
): string {
  switch (object) {
    case TurbineSubscription_Turbine_TurbineCommunicationStatus.Ok:
      return "Ok";
    case TurbineSubscription_Turbine_TurbineCommunicationStatus.Error:
      return "Error";
    case TurbineSubscription_Turbine_TurbineCommunicationStatus.Unitialised:
      return "Unitialised";
    case TurbineSubscription_Turbine_TurbineCommunicationStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface TurbineSubscription_Turbine_GeneratorDataPoint {
  value?: number | undefined;
  quality?: TurbineSubscription_Turbine_GeneratorDataPointQuality | undefined;
}

export interface TurbineSubscription_Turbine_InertialResponseInformation {
  inertiaSetPoint?: number | undefined;
  iRAvailable?: number | undefined;
  iRActual?: number | undefined;
  iRState?: TurbineSubscription_Turbine_InertialResponseInformation_IRState | undefined;
  iRInhibitSource?: number | undefined;
}

export enum TurbineSubscription_Turbine_InertialResponseInformation_IRState {
  IRNotReady = "IRNotReady",
  IRReady = "IRReady",
  IRActive = "IRActive",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function turbineSubscription_Turbine_InertialResponseInformation_IRStateFromJSON(
  object: any,
): TurbineSubscription_Turbine_InertialResponseInformation_IRState {
  switch (object) {
    case 0:
    case "IRNotReady":
      return TurbineSubscription_Turbine_InertialResponseInformation_IRState.IRNotReady;
    case 1:
    case "IRReady":
      return TurbineSubscription_Turbine_InertialResponseInformation_IRState.IRReady;
    case 2:
    case "IRActive":
      return TurbineSubscription_Turbine_InertialResponseInformation_IRState.IRActive;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TurbineSubscription_Turbine_InertialResponseInformation_IRState.UNRECOGNIZED;
  }
}

export function turbineSubscription_Turbine_InertialResponseInformation_IRStateToJSON(
  object: TurbineSubscription_Turbine_InertialResponseInformation_IRState,
): string {
  switch (object) {
    case TurbineSubscription_Turbine_InertialResponseInformation_IRState.IRNotReady:
      return "IRNotReady";
    case TurbineSubscription_Turbine_InertialResponseInformation_IRState.IRReady:
      return "IRReady";
    case TurbineSubscription_Turbine_InertialResponseInformation_IRState.IRActive:
      return "IRActive";
    case TurbineSubscription_Turbine_InertialResponseInformation_IRState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource {
  IRIOK = "IRIOK",
  IRIRotorspeedTooLow = "IRIRotorspeedTooLow",
  IRIGridVoltageTooLow = "IRIGridVoltageTooLow",
  IRIGridVoltageTooHigh = "IRIGridVoltageTooHigh",
  IRIIRTimeLastActivationLow = "IRIIRTimeLastActivationLow",
  IRIFRT = "IRIFRT",
  IRITimeGeneratorConnectedToGridLow = "IRITimeGeneratorConnectedToGridLow",
  IRITooManyActivations = "IRITooManyActivations",
  IRITooManyHourlyActivations = "IRITooManyHourlyActivations",
  IRIStopActive = "IRIStopActive",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function turbineSubscription_Turbine_InertialResponseInformation_IRInhibitSourceFromJSON(
  object: any,
): TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource {
  switch (object) {
    case 0:
    case "IRIOK":
      return TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource.IRIOK;
    case 1:
    case "IRIRotorspeedTooLow":
      return TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource.IRIRotorspeedTooLow;
    case 2:
    case "IRIGridVoltageTooLow":
      return TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource.IRIGridVoltageTooLow;
    case 4:
    case "IRIGridVoltageTooHigh":
      return TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource.IRIGridVoltageTooHigh;
    case 8:
    case "IRIIRTimeLastActivationLow":
      return TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource.IRIIRTimeLastActivationLow;
    case 16:
    case "IRIFRT":
      return TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource.IRIFRT;
    case 32:
    case "IRITimeGeneratorConnectedToGridLow":
      return TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource.IRITimeGeneratorConnectedToGridLow;
    case 64:
    case "IRITooManyActivations":
      return TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource.IRITooManyActivations;
    case 128:
    case "IRITooManyHourlyActivations":
      return TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource.IRITooManyHourlyActivations;
    case 256:
    case "IRIStopActive":
      return TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource.IRIStopActive;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource.UNRECOGNIZED;
  }
}

export function turbineSubscription_Turbine_InertialResponseInformation_IRInhibitSourceToJSON(
  object: TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource,
): string {
  switch (object) {
    case TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource.IRIOK:
      return "IRIOK";
    case TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource.IRIRotorspeedTooLow:
      return "IRIRotorspeedTooLow";
    case TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource.IRIGridVoltageTooLow:
      return "IRIGridVoltageTooLow";
    case TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource.IRIGridVoltageTooHigh:
      return "IRIGridVoltageTooHigh";
    case TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource.IRIIRTimeLastActivationLow:
      return "IRIIRTimeLastActivationLow";
    case TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource.IRIFRT:
      return "IRIFRT";
    case TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource.IRITimeGeneratorConnectedToGridLow:
      return "IRITimeGeneratorConnectedToGridLow";
    case TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource.IRITooManyActivations:
      return "IRITooManyActivations";
    case TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource.IRITooManyHourlyActivations:
      return "IRITooManyHourlyActivations";
    case TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource.IRIStopActive:
      return "IRIStopActive";
    case TurbineSubscription_Turbine_InertialResponseInformation_IRInhibitSource.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface TurbineSubscription_Turbine_FallBackInformation {
  fallBackPower?: number | undefined;
  fallBackTime?: number | undefined;
  fallBackPowerFeedback?: number | undefined;
  fallBackTimeFeedback?: number | undefined;
  qFallbackState?: TurbineSubscription_Turbine_FallBackInformation_QFallbackState | undefined;
  fallBackPowerRampRate?: number | undefined;
  fallBackPowerRampRateRestored?: number | undefined;
  fallBackPowerRampRateFeedback?: number | undefined;
  fallBackPowerRampRateRestoredFeedback?: number | undefined;
}

export enum TurbineSubscription_Turbine_FallBackInformation_QFallbackState {
  NotInitialized = "NotInitialized",
  AtReference = "AtReference",
  RampingToFallback = "RampingToFallback",
  AtFallback = "AtFallback",
  RampingToReference = "RampingToReference",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function turbineSubscription_Turbine_FallBackInformation_QFallbackStateFromJSON(
  object: any,
): TurbineSubscription_Turbine_FallBackInformation_QFallbackState {
  switch (object) {
    case 0:
    case "NotInitialized":
      return TurbineSubscription_Turbine_FallBackInformation_QFallbackState.NotInitialized;
    case 1:
    case "AtReference":
      return TurbineSubscription_Turbine_FallBackInformation_QFallbackState.AtReference;
    case 2:
    case "RampingToFallback":
      return TurbineSubscription_Turbine_FallBackInformation_QFallbackState.RampingToFallback;
    case 3:
    case "AtFallback":
      return TurbineSubscription_Turbine_FallBackInformation_QFallbackState.AtFallback;
    case 4:
    case "RampingToReference":
      return TurbineSubscription_Turbine_FallBackInformation_QFallbackState.RampingToReference;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TurbineSubscription_Turbine_FallBackInformation_QFallbackState.UNRECOGNIZED;
  }
}

export function turbineSubscription_Turbine_FallBackInformation_QFallbackStateToJSON(
  object: TurbineSubscription_Turbine_FallBackInformation_QFallbackState,
): string {
  switch (object) {
    case TurbineSubscription_Turbine_FallBackInformation_QFallbackState.NotInitialized:
      return "NotInitialized";
    case TurbineSubscription_Turbine_FallBackInformation_QFallbackState.AtReference:
      return "AtReference";
    case TurbineSubscription_Turbine_FallBackInformation_QFallbackState.RampingToFallback:
      return "RampingToFallback";
    case TurbineSubscription_Turbine_FallBackInformation_QFallbackState.AtFallback:
      return "AtFallback";
    case TurbineSubscription_Turbine_FallBackInformation_QFallbackState.RampingToReference:
      return "RampingToReference";
    case TurbineSubscription_Turbine_FallBackInformation_QFallbackState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface TurbineSubscription_Turbine_VModeInformation {
  noPowerVoltState?: TurbineSubscription_Turbine_VModeInformation_NoPowerVoltState | undefined;
  noPowerVoltReadyness?: TurbineSubscription_Turbine_VModeInformation_NoPowerVoltReadyness | undefined;
}

export enum TurbineSubscription_Turbine_VModeInformation_NoPowerVoltState {
  ConverterInactive = "ConverterInactive",
  PVMode = "PVMode",
  VModeReady = "VModeReady",
  VModeActive = "VModeActive",
  PowerStateUninitialised = "PowerStateUninitialised",
  UnknownPowerState = "UnknownPowerState",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function turbineSubscription_Turbine_VModeInformation_NoPowerVoltStateFromJSON(
  object: any,
): TurbineSubscription_Turbine_VModeInformation_NoPowerVoltState {
  switch (object) {
    case 0:
    case "ConverterInactive":
      return TurbineSubscription_Turbine_VModeInformation_NoPowerVoltState.ConverterInactive;
    case 1:
    case "PVMode":
      return TurbineSubscription_Turbine_VModeInformation_NoPowerVoltState.PVMode;
    case 2:
    case "VModeReady":
      return TurbineSubscription_Turbine_VModeInformation_NoPowerVoltState.VModeReady;
    case 3:
    case "VModeActive":
      return TurbineSubscription_Turbine_VModeInformation_NoPowerVoltState.VModeActive;
    case 14:
    case "PowerStateUninitialised":
      return TurbineSubscription_Turbine_VModeInformation_NoPowerVoltState.PowerStateUninitialised;
    case 255:
    case "UnknownPowerState":
      return TurbineSubscription_Turbine_VModeInformation_NoPowerVoltState.UnknownPowerState;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TurbineSubscription_Turbine_VModeInformation_NoPowerVoltState.UNRECOGNIZED;
  }
}

export function turbineSubscription_Turbine_VModeInformation_NoPowerVoltStateToJSON(
  object: TurbineSubscription_Turbine_VModeInformation_NoPowerVoltState,
): string {
  switch (object) {
    case TurbineSubscription_Turbine_VModeInformation_NoPowerVoltState.ConverterInactive:
      return "ConverterInactive";
    case TurbineSubscription_Turbine_VModeInformation_NoPowerVoltState.PVMode:
      return "PVMode";
    case TurbineSubscription_Turbine_VModeInformation_NoPowerVoltState.VModeReady:
      return "VModeReady";
    case TurbineSubscription_Turbine_VModeInformation_NoPowerVoltState.VModeActive:
      return "VModeActive";
    case TurbineSubscription_Turbine_VModeInformation_NoPowerVoltState.PowerStateUninitialised:
      return "PowerStateUninitialised";
    case TurbineSubscription_Turbine_VModeInformation_NoPowerVoltState.UnknownPowerState:
      return "UnknownPowerState";
    case TurbineSubscription_Turbine_VModeInformation_NoPowerVoltState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TurbineSubscription_Turbine_VModeInformation_NoPowerVoltReadyness {
  VModeNotAvailable = "VModeNotAvailable",
  VModeAvailable = "VModeAvailable",
  VoltReadyUninitialised = "VoltReadyUninitialised",
  UnknownVoltReady = "UnknownVoltReady",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function turbineSubscription_Turbine_VModeInformation_NoPowerVoltReadynessFromJSON(
  object: any,
): TurbineSubscription_Turbine_VModeInformation_NoPowerVoltReadyness {
  switch (object) {
    case 0:
    case "VModeNotAvailable":
      return TurbineSubscription_Turbine_VModeInformation_NoPowerVoltReadyness.VModeNotAvailable;
    case 1:
    case "VModeAvailable":
      return TurbineSubscription_Turbine_VModeInformation_NoPowerVoltReadyness.VModeAvailable;
    case 14:
    case "VoltReadyUninitialised":
      return TurbineSubscription_Turbine_VModeInformation_NoPowerVoltReadyness.VoltReadyUninitialised;
    case 255:
    case "UnknownVoltReady":
      return TurbineSubscription_Turbine_VModeInformation_NoPowerVoltReadyness.UnknownVoltReady;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TurbineSubscription_Turbine_VModeInformation_NoPowerVoltReadyness.UNRECOGNIZED;
  }
}

export function turbineSubscription_Turbine_VModeInformation_NoPowerVoltReadynessToJSON(
  object: TurbineSubscription_Turbine_VModeInformation_NoPowerVoltReadyness,
): string {
  switch (object) {
    case TurbineSubscription_Turbine_VModeInformation_NoPowerVoltReadyness.VModeNotAvailable:
      return "VModeNotAvailable";
    case TurbineSubscription_Turbine_VModeInformation_NoPowerVoltReadyness.VModeAvailable:
      return "VModeAvailable";
    case TurbineSubscription_Turbine_VModeInformation_NoPowerVoltReadyness.VoltReadyUninitialised:
      return "VoltReadyUninitialised";
    case TurbineSubscription_Turbine_VModeInformation_NoPowerVoltReadyness.UnknownVoltReady:
      return "UnknownVoltReady";
    case TurbineSubscription_Turbine_VModeInformation_NoPowerVoltReadyness.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface TurbineSubscription_Turbine_ReactivePowerBalancing {
  Output?: number | undefined;
  Weight?: number | undefined;
  Offset?: number | undefined;
}

export interface TurbineSubscription_Turbine_FrtVoltageLimits {
  UFrtMin?: number | undefined;
  UFrtMax?: number | undefined;
}

export interface TurbineSubscription_Turbine_ReactivePowerCapabilities {
  ConverterReactivePower?: number | undefined;
  ConverterReactivePowerMin?: number | undefined;
  ConverterReactivePowerMax?: number | undefined;
}

export interface TurbineSubscription_Turbine_CurtailmentData {
  powerLimitSource?: string | undefined;
  curtailed?: TurbineSubscription_Turbine_CurtailmentData_CurtailmentStatus | undefined;
}

export enum TurbineSubscription_Turbine_CurtailmentData_CurtailmentStatus {
  Unknown = "Unknown",
  No = "No",
  Yes = "Yes",
}

export function turbineSubscription_Turbine_CurtailmentData_CurtailmentStatusFromJSON(
  object: any,
): TurbineSubscription_Turbine_CurtailmentData_CurtailmentStatus {
  switch (object) {
    case -1:
    case "Unknown":
      return TurbineSubscription_Turbine_CurtailmentData_CurtailmentStatus.Unknown;
    case 0:
    case "No":
      return TurbineSubscription_Turbine_CurtailmentData_CurtailmentStatus.No;
    case 1:
    case "Yes":
      return TurbineSubscription_Turbine_CurtailmentData_CurtailmentStatus.Yes;
    default:
      return TurbineSubscription_Turbine_CurtailmentData_CurtailmentStatus.Unknown;
  }
}

export function turbineSubscription_Turbine_CurtailmentData_CurtailmentStatusToJSON(
  object: TurbineSubscription_Turbine_CurtailmentData_CurtailmentStatus,
): string {
  switch (object) {
    case TurbineSubscription_Turbine_CurtailmentData_CurtailmentStatus.Unknown:
      return "Unknown";
    case TurbineSubscription_Turbine_CurtailmentData_CurtailmentStatus.No:
      return "No";
    case TurbineSubscription_Turbine_CurtailmentData_CurtailmentStatus.Yes:
      return "Yes";
    default:
      return "Unknown";
  }
}

export interface TurbineSubscription_Turbine_References {
  voltageReferencePU?: number | undefined;
  voltageReference?: number | undefined;
  reactiveReference?: number | undefined;
  activePowerReference?: number | undefined;
}

export interface TurbineSubscription_Turbine_CurtailmentStopData {
  curtailmentStopState?: TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState | undefined;
  curtailmentStoppedHours?: number | undefined;
  curtailmentStopStateRequested?: TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState | undefined;
}

export enum TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState {
  Uninitialized = "Uninitialized",
  NotStopped = "NotStopped",
  Stopped = "Stopped",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function turbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopStateFromJSON(
  object: any,
): TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState {
  switch (object) {
    case 0:
    case "Uninitialized":
      return TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Uninitialized;
    case 1:
    case "NotStopped":
      return TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.NotStopped;
    case 2:
    case "Stopped":
      return TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Stopped;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.UNRECOGNIZED;
  }
}

export function turbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopStateToJSON(
  object: TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState,
): string {
  switch (object) {
    case TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Uninitialized:
      return "Uninitialized";
    case TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.NotStopped:
      return "NotStopped";
    case TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Stopped:
      return "Stopped";
    case TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface TurbineSubscription_Turbine_TowerDampingData {
  towerDampingFrequency?: number | undefined;
  towerDampingAmplitude?: number | undefined;
}

export interface TurbineSubscription_Turbine_CeasePData {
  ceasePState?: TurbineSubscription_Turbine_CeasePData_CeasePState | undefined;
}

export enum TurbineSubscription_Turbine_CeasePData_CeasePState {
  CeasePUninitialized = "CeasePUninitialized",
  PowerNotCeased = "PowerNotCeased",
  PowerCeased = "PowerCeased",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function turbineSubscription_Turbine_CeasePData_CeasePStateFromJSON(
  object: any,
): TurbineSubscription_Turbine_CeasePData_CeasePState {
  switch (object) {
    case 0:
    case "CeasePUninitialized":
      return TurbineSubscription_Turbine_CeasePData_CeasePState.CeasePUninitialized;
    case 1:
    case "PowerNotCeased":
      return TurbineSubscription_Turbine_CeasePData_CeasePState.PowerNotCeased;
    case 2:
    case "PowerCeased":
      return TurbineSubscription_Turbine_CeasePData_CeasePState.PowerCeased;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TurbineSubscription_Turbine_CeasePData_CeasePState.UNRECOGNIZED;
  }
}

export function turbineSubscription_Turbine_CeasePData_CeasePStateToJSON(
  object: TurbineSubscription_Turbine_CeasePData_CeasePState,
): string {
  switch (object) {
    case TurbineSubscription_Turbine_CeasePData_CeasePState.CeasePUninitialized:
      return "CeasePUninitialized";
    case TurbineSubscription_Turbine_CeasePData_CeasePState.PowerNotCeased:
      return "PowerNotCeased";
    case TurbineSubscription_Turbine_CeasePData_CeasePState.PowerCeased:
      return "PowerCeased";
    case TurbineSubscription_Turbine_CeasePData_CeasePState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface TurbineSubscription_Turbine_POATDStateData {
  poatdState?: TurbineSubscription_Turbine_POATDStateData_POATDState | undefined;
}

export enum TurbineSubscription_Turbine_POATDStateData_POATDState {
  Uninitialized = "Uninitialized",
  TurbineDefault = "TurbineDefault",
  TurbineReduced = "TurbineReduced",
  POATD = "POATD",
  POATDFallback = "POATDFallback",
  TurbineLocal = "TurbineLocal",
}

export function turbineSubscription_Turbine_POATDStateData_POATDStateFromJSON(
  object: any,
): TurbineSubscription_Turbine_POATDStateData_POATDState {
  switch (object) {
    case -1:
    case "Uninitialized":
      return TurbineSubscription_Turbine_POATDStateData_POATDState.Uninitialized;
    case 0:
    case "TurbineDefault":
      return TurbineSubscription_Turbine_POATDStateData_POATDState.TurbineDefault;
    case 1:
    case "TurbineReduced":
      return TurbineSubscription_Turbine_POATDStateData_POATDState.TurbineReduced;
    case 2:
    case "POATD":
      return TurbineSubscription_Turbine_POATDStateData_POATDState.POATD;
    case 3:
    case "POATDFallback":
      return TurbineSubscription_Turbine_POATDStateData_POATDState.POATDFallback;
    case 4:
    case "TurbineLocal":
      return TurbineSubscription_Turbine_POATDStateData_POATDState.TurbineLocal;
    default:
      return TurbineSubscription_Turbine_POATDStateData_POATDState.Uninitialized;
  }
}

export function turbineSubscription_Turbine_POATDStateData_POATDStateToJSON(
  object: TurbineSubscription_Turbine_POATDStateData_POATDState,
): string {
  switch (object) {
    case TurbineSubscription_Turbine_POATDStateData_POATDState.Uninitialized:
      return "Uninitialized";
    case TurbineSubscription_Turbine_POATDStateData_POATDState.TurbineDefault:
      return "TurbineDefault";
    case TurbineSubscription_Turbine_POATDStateData_POATDState.TurbineReduced:
      return "TurbineReduced";
    case TurbineSubscription_Turbine_POATDStateData_POATDState.POATD:
      return "POATD";
    case TurbineSubscription_Turbine_POATDStateData_POATDState.POATDFallback:
      return "POATDFallback";
    case TurbineSubscription_Turbine_POATDStateData_POATDState.TurbineLocal:
      return "TurbineLocal";
    default:
      return "Uninitialized";
  }
}

export interface GmsSubscription {
  sampleTime?: number | undefined;
  gmsDevice: GmsSubscription_GmsDevice[];
  isEventTriggered?: boolean | undefined;
  topology?: number | undefined;
}

export interface GmsSubscription_GmsDevice {
  name?: string | undefined;
  timestamp?: number | undefined;
  type?: GmsSubscription_GmsDevice_GridmeterType | undefined;
  status?: GmsSubscription_GmsDevice_GridmeterStatus | undefined;
  activePower?: GmsSubscription_GmsDevice_ValueQuality | undefined;
  frequency?: GmsSubscription_GmsDevice_ValueQuality | undefined;
  voltage?: GmsSubscription_GmsDevice_ValueQuality | undefined;
  reactivePower?: GmsSubscription_GmsDevice_ValueQuality | undefined;
  apparentPower?: GmsSubscription_GmsDevice_ValueQuality | undefined;
  voltagePhaseUab?: GmsSubscription_GmsDevice_ValueQuality | undefined;
  voltagePhaseUbc?: GmsSubscription_GmsDevice_ValueQuality | undefined;
  voltagePhaseUca?: GmsSubscription_GmsDevice_ValueQuality | undefined;
  physicalGridmeter?: GmsSubscription_GmsDevice_PhysicalGms | undefined;
  redundantGridmeter?: GmsSubscription_GmsDevice_RedundantGms | undefined;
  virtualGridmeter?: GmsSubscription_GmsDevice_VirtualGms | undefined;
  nominalVoltage?: number | undefined;
  groupName?: string | undefined;
}

export enum GmsSubscription_GmsDevice_GridmeterType {
  GeneratorSum = "GeneratorSum",
  ModbusGridmeterDevice = "ModbusGridmeterDevice",
  Redundant = "Redundant",
  Virtual = "Virtual",
  UnknownType = "UnknownType",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function gmsSubscription_GmsDevice_GridmeterTypeFromJSON(object: any): GmsSubscription_GmsDevice_GridmeterType {
  switch (object) {
    case 0:
    case "GeneratorSum":
      return GmsSubscription_GmsDevice_GridmeterType.GeneratorSum;
    case 2:
    case "ModbusGridmeterDevice":
      return GmsSubscription_GmsDevice_GridmeterType.ModbusGridmeterDevice;
    case 3:
    case "Redundant":
      return GmsSubscription_GmsDevice_GridmeterType.Redundant;
    case 4:
    case "Virtual":
      return GmsSubscription_GmsDevice_GridmeterType.Virtual;
    case 255:
    case "UnknownType":
      return GmsSubscription_GmsDevice_GridmeterType.UnknownType;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GmsSubscription_GmsDevice_GridmeterType.UNRECOGNIZED;
  }
}

export function gmsSubscription_GmsDevice_GridmeterTypeToJSON(object: GmsSubscription_GmsDevice_GridmeterType): string {
  switch (object) {
    case GmsSubscription_GmsDevice_GridmeterType.GeneratorSum:
      return "GeneratorSum";
    case GmsSubscription_GmsDevice_GridmeterType.ModbusGridmeterDevice:
      return "ModbusGridmeterDevice";
    case GmsSubscription_GmsDevice_GridmeterType.Redundant:
      return "Redundant";
    case GmsSubscription_GmsDevice_GridmeterType.Virtual:
      return "Virtual";
    case GmsSubscription_GmsDevice_GridmeterType.UnknownType:
      return "UnknownType";
    case GmsSubscription_GmsDevice_GridmeterType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum GmsSubscription_GmsDevice_GridmeterStatus {
  OK = "OK",
  UnInitialised = "UnInitialised",
  Error = "Error",
  InvalidData = "InvalidData",
  UnknownStatus = "UnknownStatus",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function gmsSubscription_GmsDevice_GridmeterStatusFromJSON(
  object: any,
): GmsSubscription_GmsDevice_GridmeterStatus {
  switch (object) {
    case 0:
    case "OK":
      return GmsSubscription_GmsDevice_GridmeterStatus.OK;
    case 1:
    case "UnInitialised":
      return GmsSubscription_GmsDevice_GridmeterStatus.UnInitialised;
    case 2:
    case "Error":
      return GmsSubscription_GmsDevice_GridmeterStatus.Error;
    case 3:
    case "InvalidData":
      return GmsSubscription_GmsDevice_GridmeterStatus.InvalidData;
    case 255:
    case "UnknownStatus":
      return GmsSubscription_GmsDevice_GridmeterStatus.UnknownStatus;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GmsSubscription_GmsDevice_GridmeterStatus.UNRECOGNIZED;
  }
}

export function gmsSubscription_GmsDevice_GridmeterStatusToJSON(
  object: GmsSubscription_GmsDevice_GridmeterStatus,
): string {
  switch (object) {
    case GmsSubscription_GmsDevice_GridmeterStatus.OK:
      return "OK";
    case GmsSubscription_GmsDevice_GridmeterStatus.UnInitialised:
      return "UnInitialised";
    case GmsSubscription_GmsDevice_GridmeterStatus.Error:
      return "Error";
    case GmsSubscription_GmsDevice_GridmeterStatus.InvalidData:
      return "InvalidData";
    case GmsSubscription_GmsDevice_GridmeterStatus.UnknownStatus:
      return "UnknownStatus";
    case GmsSubscription_GmsDevice_GridmeterStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum GmsSubscription_GmsDevice_GridMeasurementQuality {
  Invalid = "Invalid",
  Estimated = "Estimated",
  Measured = "Measured",
  Injected = "Injected",
  Frozen = "Frozen",
  GmsDisabled = "GmsDisabled",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function gmsSubscription_GmsDevice_GridMeasurementQualityFromJSON(
  object: any,
): GmsSubscription_GmsDevice_GridMeasurementQuality {
  switch (object) {
    case 1:
    case "Invalid":
      return GmsSubscription_GmsDevice_GridMeasurementQuality.Invalid;
    case 2:
    case "Estimated":
      return GmsSubscription_GmsDevice_GridMeasurementQuality.Estimated;
    case 4:
    case "Measured":
      return GmsSubscription_GmsDevice_GridMeasurementQuality.Measured;
    case 8:
    case "Injected":
      return GmsSubscription_GmsDevice_GridMeasurementQuality.Injected;
    case 256:
    case "Frozen":
      return GmsSubscription_GmsDevice_GridMeasurementQuality.Frozen;
    case 512:
    case "GmsDisabled":
      return GmsSubscription_GmsDevice_GridMeasurementQuality.GmsDisabled;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GmsSubscription_GmsDevice_GridMeasurementQuality.UNRECOGNIZED;
  }
}

export function gmsSubscription_GmsDevice_GridMeasurementQualityToJSON(
  object: GmsSubscription_GmsDevice_GridMeasurementQuality,
): string {
  switch (object) {
    case GmsSubscription_GmsDevice_GridMeasurementQuality.Invalid:
      return "Invalid";
    case GmsSubscription_GmsDevice_GridMeasurementQuality.Estimated:
      return "Estimated";
    case GmsSubscription_GmsDevice_GridMeasurementQuality.Measured:
      return "Measured";
    case GmsSubscription_GmsDevice_GridMeasurementQuality.Injected:
      return "Injected";
    case GmsSubscription_GmsDevice_GridMeasurementQuality.Frozen:
      return "Frozen";
    case GmsSubscription_GmsDevice_GridMeasurementQuality.GmsDisabled:
      return "GmsDisabled";
    case GmsSubscription_GmsDevice_GridMeasurementQuality.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum GmsSubscription_GmsDevice_RedundancyStatus {
  Uinitialized = "Uinitialized",
  FullyRedundant = "FullyRedundant",
  LimitedRedundancy = "LimitedRedundancy",
  NoRedundancy = "NoRedundancy",
  Inoperational = "Inoperational",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function gmsSubscription_GmsDevice_RedundancyStatusFromJSON(
  object: any,
): GmsSubscription_GmsDevice_RedundancyStatus {
  switch (object) {
    case 1:
    case "Uinitialized":
      return GmsSubscription_GmsDevice_RedundancyStatus.Uinitialized;
    case 2:
    case "FullyRedundant":
      return GmsSubscription_GmsDevice_RedundancyStatus.FullyRedundant;
    case 3:
    case "LimitedRedundancy":
      return GmsSubscription_GmsDevice_RedundancyStatus.LimitedRedundancy;
    case 4:
    case "NoRedundancy":
      return GmsSubscription_GmsDevice_RedundancyStatus.NoRedundancy;
    case 5:
    case "Inoperational":
      return GmsSubscription_GmsDevice_RedundancyStatus.Inoperational;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GmsSubscription_GmsDevice_RedundancyStatus.UNRECOGNIZED;
  }
}

export function gmsSubscription_GmsDevice_RedundancyStatusToJSON(
  object: GmsSubscription_GmsDevice_RedundancyStatus,
): string {
  switch (object) {
    case GmsSubscription_GmsDevice_RedundancyStatus.Uinitialized:
      return "Uinitialized";
    case GmsSubscription_GmsDevice_RedundancyStatus.FullyRedundant:
      return "FullyRedundant";
    case GmsSubscription_GmsDevice_RedundancyStatus.LimitedRedundancy:
      return "LimitedRedundancy";
    case GmsSubscription_GmsDevice_RedundancyStatus.NoRedundancy:
      return "NoRedundancy";
    case GmsSubscription_GmsDevice_RedundancyStatus.Inoperational:
      return "Inoperational";
    case GmsSubscription_GmsDevice_RedundancyStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GmsSubscription_GmsDevice_ValueQuality {
  value?: number | undefined;
  quality?: number | undefined;
}

export interface GmsSubscription_GmsDevice_PhysicalGms {
  state?: GridmeterState | undefined;
  rgmSelectionState?: GmsSubscription_GmsDevice_PhysicalGms_RgmSelectionState | undefined;
  ReadRTT?: number | undefined;
  faultStatus?: GmsSubscription_GmsDevice_PhysicalGms_FaultStatus | undefined;
}

export enum GmsSubscription_GmsDevice_PhysicalGms_RgmSelectionState {
  Selected = "Selected",
  NotSelected = "NotSelected",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function gmsSubscription_GmsDevice_PhysicalGms_RgmSelectionStateFromJSON(
  object: any,
): GmsSubscription_GmsDevice_PhysicalGms_RgmSelectionState {
  switch (object) {
    case 1:
    case "Selected":
      return GmsSubscription_GmsDevice_PhysicalGms_RgmSelectionState.Selected;
    case 2:
    case "NotSelected":
      return GmsSubscription_GmsDevice_PhysicalGms_RgmSelectionState.NotSelected;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GmsSubscription_GmsDevice_PhysicalGms_RgmSelectionState.UNRECOGNIZED;
  }
}

export function gmsSubscription_GmsDevice_PhysicalGms_RgmSelectionStateToJSON(
  object: GmsSubscription_GmsDevice_PhysicalGms_RgmSelectionState,
): string {
  switch (object) {
    case GmsSubscription_GmsDevice_PhysicalGms_RgmSelectionState.Selected:
      return "Selected";
    case GmsSubscription_GmsDevice_PhysicalGms_RgmSelectionState.NotSelected:
      return "NotSelected";
    case GmsSubscription_GmsDevice_PhysicalGms_RgmSelectionState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GmsSubscription_GmsDevice_PhysicalGms_FaultStatus {
  CTFault?: boolean | undefined;
  VTFault?: boolean | undefined;
}

export interface GmsSubscription_GmsDevice_RedundantGms {
  ActivePGM?: string | undefined;
  DisabledGmsCount?: number | undefined;
  FailedGmsCount?: number | undefined;
  RedundancyState?: GmsSubscription_GmsDevice_RedundancyStatus | undefined;
  physicalGridmeters: string[];
  upstream?: GmsSubscription_GmsDevice_Upstream | undefined;
}

export interface GmsSubscription_GmsDevice_VirtualGms {
  upstream?: GmsSubscription_GmsDevice_Upstream | undefined;
  RedundancyState?: GmsSubscription_GmsDevice_RedundancyStatus | undefined;
  redundantGridmeters: string[];
}

export interface GmsSubscription_GmsDevice_Upstream {
  upstreamActivePower?: number | undefined;
  upstreamVoltage?: number | undefined;
  upstreamReactivePower?: number | undefined;
  upstreamApparentPower?: number | undefined;
  upstreamNominalVoltage?: number | undefined;
}

export interface ControllerSubscription {
  sampleTime?: number | undefined;
  group: ControllerSubscription_ControllerGroup[];
  isEventTriggered?: boolean | undefined;
  generatorGroupModelSequenceNumber?: number | undefined;
}

export interface ControllerSubscription_ControllerGroup {
  controllerName?: string | undefined;
  groupName?: string | undefined;
  variable: { [key: number]: number };
  activeGridmeter?: string | undefined;
  plantControllerName?: string | undefined;
}

export interface ControllerSubscription_ControllerGroup_VariableEntry {
  key: number;
  value: number;
}

export interface ParameterSubscription {
  sampleTime?: number | undefined;
  group: ParameterSubscription_ControllerGroup[];
}

export enum ParameterSubscription_DataType {
  Integer = "Integer",
  Bool = "Bool",
  Real = "Real",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function parameterSubscription_DataTypeFromJSON(object: any): ParameterSubscription_DataType {
  switch (object) {
    case 0:
    case "Integer":
      return ParameterSubscription_DataType.Integer;
    case 1:
    case "Bool":
      return ParameterSubscription_DataType.Bool;
    case 2:
    case "Real":
      return ParameterSubscription_DataType.Real;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ParameterSubscription_DataType.UNRECOGNIZED;
  }
}

export function parameterSubscription_DataTypeToJSON(object: ParameterSubscription_DataType): string {
  switch (object) {
    case ParameterSubscription_DataType.Integer:
      return "Integer";
    case ParameterSubscription_DataType.Bool:
      return "Bool";
    case ParameterSubscription_DataType.Real:
      return "Real";
    case ParameterSubscription_DataType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ParameterSubscription_PermissionGroup {
  Other = "Other",
  Control = "Control",
  Feature = "Feature",
  Developer = "Developer",
  VgmSetup = "VgmSetup",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function parameterSubscription_PermissionGroupFromJSON(object: any): ParameterSubscription_PermissionGroup {
  switch (object) {
    case 0:
    case "Other":
      return ParameterSubscription_PermissionGroup.Other;
    case 1:
    case "Control":
      return ParameterSubscription_PermissionGroup.Control;
    case 2:
    case "Feature":
      return ParameterSubscription_PermissionGroup.Feature;
    case 3:
    case "Developer":
      return ParameterSubscription_PermissionGroup.Developer;
    case 4:
    case "VgmSetup":
      return ParameterSubscription_PermissionGroup.VgmSetup;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ParameterSubscription_PermissionGroup.UNRECOGNIZED;
  }
}

export function parameterSubscription_PermissionGroupToJSON(object: ParameterSubscription_PermissionGroup): string {
  switch (object) {
    case ParameterSubscription_PermissionGroup.Other:
      return "Other";
    case ParameterSubscription_PermissionGroup.Control:
      return "Control";
    case ParameterSubscription_PermissionGroup.Feature:
      return "Feature";
    case ParameterSubscription_PermissionGroup.Developer:
      return "Developer";
    case ParameterSubscription_PermissionGroup.VgmSetup:
      return "VgmSetup";
    case ParameterSubscription_PermissionGroup.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface ParameterSubscription_ControllerGroup {
  controllerName?: string | undefined;
  groupName?: string | undefined;
  parameter: { [key: number]: ParameterSubscription_ControllerGroup_ParameterInfo };
}

export interface ParameterSubscription_ControllerGroup_ParameterEntry {
  key: number;
  value: ParameterSubscription_ControllerGroup_ParameterInfo | undefined;
}

export interface ParameterSubscription_ControllerGroup_ParameterInfo {
  value?: number | undefined;
  unit?: string | undefined;
  controller?: string | undefined;
  function?: string | undefined;
  minValue?: number | undefined;
  maxValue?: number | undefined;
  allowedSources?: number | undefined;
  type?: ParameterSubscription_DataType | undefined;
  permissionGroup?: ParameterSubscription_PermissionGroup | undefined;
}

export interface ExecutionStatisticsSubscription {
  sampleTime?: number | undefined;
  msgDiff?: number | undefined;
  timeSinceStart?: number | undefined;
  djSendQueueCount?: number | undefined;
  djReceiveQueueCount?: number | undefined;
  controlLoopStatistics?: ExecutionStatisticsSubscription_ControlLoopStatistics | undefined;
  gridmeterManagerStatistics?: ExecutionStatisticsSubscription_GridmeterManagerStatistics | undefined;
  turbineManagerStatistics?: ExecutionStatisticsSubscription_TurbineManagerStatistics | undefined;
}

export interface ExecutionStatisticsSubscription_ControlLoopStatistics {
  cycleTime?: ExecutionStatisticsSubscription_StatisticsData | undefined;
  criticalWorkTime?: ExecutionStatisticsSubscription_StatisticsData | undefined;
  otherWorkTime?: ExecutionStatisticsSubscription_StatisticsData | undefined;
  commitTime?: ExecutionStatisticsSubscription_StatisticsData | undefined;
  gridMeasurementAge?: ExecutionStatisticsSubscription_StatisticsData | undefined;
}

export interface ExecutionStatisticsSubscription_GridmeterManagerStatistics {
  cycleTime?: ExecutionStatisticsSubscription_StatisticsData | undefined;
  leadTime?: ExecutionStatisticsSubscription_StatisticsData | undefined;
  roundTripTime?: ExecutionStatisticsSubscription_StatisticsData | undefined;
}

export interface ExecutionStatisticsSubscription_TurbineManagerStatistics {
  cycleTime?: ExecutionStatisticsSubscription_StatisticsData | undefined;
  leadTime?: ExecutionStatisticsSubscription_StatisticsData | undefined;
  turbineRoundTripTime?: ExecutionStatisticsSubscription_StatisticsData | undefined;
  genericGeneratorRoundTripTime?: ExecutionStatisticsSubscription_StatisticsData | undefined;
}

export interface ExecutionStatisticsSubscription_StatisticsData {
  minimum?: number | undefined;
  maximum?: number | undefined;
  average?: number | undefined;
}

export interface ParameterDataValue {
  doubleValue?: number | undefined;
  sint64Value?: number | undefined;
  uint64Value?: number | undefined;
  sint32Value?: number | undefined;
  uint32Value?: number | undefined;
  boolValue?: boolean | undefined;
}

export interface CustomSubscription {
  sampleTime?: number | undefined;
  namespaces: CustomSubscription_CustomNamespace[];
  dataset?: string | undefined;
}

export interface CustomSubscription_CustomNamespace {
  nameSpace?: string | undefined;
  parameters: CustomSubscription_CustomValue[];
  variables: CustomSubscription_CustomValue[];
}

export interface CustomSubscription_CustomValue {
  name?: string | undefined;
  value?: ParameterDataValue | undefined;
  minValue?: ParameterDataValue | undefined;
  maxValue?: ParameterDataValue | undefined;
  type?: ParameterDataType | undefined;
}

function createBaseSignal(): Signal {
  return { name: "", unit: "", controller: "", function: "", signals: [] };
}

export const Signal = {
  fromJSON(object: any): Signal {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      unit: isSet(object.unit) ? gt.String(object.unit) : "",
      controller: isSet(object.controller) ? gt.String(object.controller) : "",
      function: isSet(object.function) ? gt.String(object.function) : "",
      signals: gt.Array.isArray(object?.signals) ? object.signals.map((e: any) => Signal.fromJSON(e)) : [],
    };
  },

  toJSON(message: Signal): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.unit !== undefined && message.unit !== "") {
      obj.unit = message.unit;
    }
    if (message.controller !== undefined && message.controller !== "") {
      obj.controller = message.controller;
    }
    if (message.function !== undefined && message.function !== "") {
      obj.function = message.function;
    }
    if (message.signals?.length) {
      obj.signals = message.signals.map((e) => Signal.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Signal>, I>>(base?: I): Signal {
    return Signal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Signal>, I>>(object: I): Signal {
    const message = createBaseSignal();
    message.name = object.name ?? "";
    message.unit = object.unit ?? "";
    message.controller = object.controller ?? "";
    message.function = object.function ?? "";
    message.signals = object.signals?.map((e) => Signal.fromPartial(e)) || [];
    return message;
  },
};

function createBaseReactivePowerBalancing(): ReactivePowerBalancing {
  return { Output: 0, Weight: 0, Offset: 0 };
}

export const ReactivePowerBalancing = {
  fromJSON(object: any): ReactivePowerBalancing {
    return {
      Output: isSet(object.Output) ? gt.Number(object.Output) : 0,
      Weight: isSet(object.Weight) ? gt.Number(object.Weight) : 0,
      Offset: isSet(object.Offset) ? gt.Number(object.Offset) : 0,
    };
  },

  toJSON(message: ReactivePowerBalancing): unknown {
    const obj: any = {};
    if (message.Output !== undefined && message.Output !== 0) {
      obj.Output = message.Output;
    }
    if (message.Weight !== undefined && message.Weight !== 0) {
      obj.Weight = message.Weight;
    }
    if (message.Offset !== undefined && message.Offset !== 0) {
      obj.Offset = message.Offset;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReactivePowerBalancing>, I>>(base?: I): ReactivePowerBalancing {
    return ReactivePowerBalancing.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReactivePowerBalancing>, I>>(object: I): ReactivePowerBalancing {
    const message = createBaseReactivePowerBalancing();
    message.Output = object.Output ?? 0;
    message.Weight = object.Weight ?? 0;
    message.Offset = object.Offset ?? 0;
    return message;
  },
};

function createBasePpgSubscription(): PpgSubscription {
  return { sampleTime: 0, ppg: [] };
}

export const PpgSubscription = {
  fromJSON(object: any): PpgSubscription {
    return {
      sampleTime: isSet(object.sampleTime) ? gt.Number(object.sampleTime) : 0,
      ppg: gt.Array.isArray(object?.ppg) ? object.ppg.map((e: any) => PpgSubscription_Ppg.fromJSON(e)) : [],
    };
  },

  toJSON(message: PpgSubscription): unknown {
    const obj: any = {};
    if (message.sampleTime !== undefined && message.sampleTime !== 0) {
      obj.sampleTime = Math.round(message.sampleTime);
    }
    if (message.ppg?.length) {
      obj.ppg = message.ppg.map((e) => PpgSubscription_Ppg.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PpgSubscription>, I>>(base?: I): PpgSubscription {
    return PpgSubscription.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PpgSubscription>, I>>(object: I): PpgSubscription {
    const message = createBasePpgSubscription();
    message.sampleTime = object.sampleTime ?? 0;
    message.ppg = object.ppg?.map((e) => PpgSubscription_Ppg.fromPartial(e)) || [];
    return message;
  },
};

function createBasePpgSubscription_Ppg(): PpgSubscription_Ppg {
  return {
    CommunicationId: 0,
    GroupName: "",
    reactivePowerBalancing: undefined,
    Topology: 0,
    activePower: undefined,
    reactivePower: undefined,
  };
}

export const PpgSubscription_Ppg = {
  fromJSON(object: any): PpgSubscription_Ppg {
    return {
      CommunicationId: isSet(object.CommunicationId) ? gt.Number(object.CommunicationId) : 0,
      GroupName: isSet(object.GroupName) ? gt.String(object.GroupName) : "",
      reactivePowerBalancing: isSet(object.reactivePowerBalancing)
        ? ReactivePowerBalancing.fromJSON(object.reactivePowerBalancing)
        : undefined,
      Topology: isSet(object.Topology) ? gt.Number(object.Topology) : 0,
      activePower: isSet(object.activePower) ? PpgSubscription_Ppg_ActivePower.fromJSON(object.activePower) : undefined,
      reactivePower: isSet(object.reactivePower)
        ? PpgSubscription_Ppg_ReactivePower.fromJSON(object.reactivePower)
        : undefined,
    };
  },

  toJSON(message: PpgSubscription_Ppg): unknown {
    const obj: any = {};
    if (message.CommunicationId !== undefined && message.CommunicationId !== 0) {
      obj.CommunicationId = Math.round(message.CommunicationId);
    }
    if (message.GroupName !== undefined && message.GroupName !== "") {
      obj.GroupName = message.GroupName;
    }
    if (message.reactivePowerBalancing !== undefined) {
      obj.reactivePowerBalancing = ReactivePowerBalancing.toJSON(message.reactivePowerBalancing);
    }
    if (message.Topology !== undefined && message.Topology !== 0) {
      obj.Topology = Math.round(message.Topology);
    }
    if (message.activePower !== undefined) {
      obj.activePower = PpgSubscription_Ppg_ActivePower.toJSON(message.activePower);
    }
    if (message.reactivePower !== undefined) {
      obj.reactivePower = PpgSubscription_Ppg_ReactivePower.toJSON(message.reactivePower);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PpgSubscription_Ppg>, I>>(base?: I): PpgSubscription_Ppg {
    return PpgSubscription_Ppg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PpgSubscription_Ppg>, I>>(object: I): PpgSubscription_Ppg {
    const message = createBasePpgSubscription_Ppg();
    message.CommunicationId = object.CommunicationId ?? 0;
    message.GroupName = object.GroupName ?? "";
    message.reactivePowerBalancing =
      (object.reactivePowerBalancing !== undefined && object.reactivePowerBalancing !== null)
        ? ReactivePowerBalancing.fromPartial(object.reactivePowerBalancing)
        : undefined;
    message.Topology = object.Topology ?? 0;
    message.activePower = (object.activePower !== undefined && object.activePower !== null)
      ? PpgSubscription_Ppg_ActivePower.fromPartial(object.activePower)
      : undefined;
    message.reactivePower = (object.reactivePower !== undefined && object.reactivePower !== null)
      ? PpgSubscription_Ppg_ReactivePower.fromPartial(object.reactivePower)
      : undefined;
    return message;
  },
};

function createBasePpgSubscription_Ppg_ActivePower(): PpgSubscription_Ppg_ActivePower {
  return { Measured: 0, AppliedPowerReference: 0, PSlaveabilityMode: 0, ReferenceType: 0, GenereratorsInScope: 0 };
}

export const PpgSubscription_Ppg_ActivePower = {
  fromJSON(object: any): PpgSubscription_Ppg_ActivePower {
    return {
      Measured: isSet(object.Measured) ? gt.Number(object.Measured) : 0,
      AppliedPowerReference: isSet(object.AppliedPowerReference) ? gt.Number(object.AppliedPowerReference) : 0,
      PSlaveabilityMode: isSet(object.PSlaveabilityMode) ? gt.Number(object.PSlaveabilityMode) : 0,
      ReferenceType: isSet(object.ReferenceType) ? gt.Number(object.ReferenceType) : 0,
      GenereratorsInScope: isSet(object.GenereratorsInScope) ? gt.Number(object.GenereratorsInScope) : 0,
    };
  },

  toJSON(message: PpgSubscription_Ppg_ActivePower): unknown {
    const obj: any = {};
    if (message.Measured !== undefined && message.Measured !== 0) {
      obj.Measured = message.Measured;
    }
    if (message.AppliedPowerReference !== undefined && message.AppliedPowerReference !== 0) {
      obj.AppliedPowerReference = message.AppliedPowerReference;
    }
    if (message.PSlaveabilityMode !== undefined && message.PSlaveabilityMode !== 0) {
      obj.PSlaveabilityMode = Math.round(message.PSlaveabilityMode);
    }
    if (message.ReferenceType !== undefined && message.ReferenceType !== 0) {
      obj.ReferenceType = Math.round(message.ReferenceType);
    }
    if (message.GenereratorsInScope !== undefined && message.GenereratorsInScope !== 0) {
      obj.GenereratorsInScope = Math.round(message.GenereratorsInScope);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PpgSubscription_Ppg_ActivePower>, I>>(base?: I): PpgSubscription_Ppg_ActivePower {
    return PpgSubscription_Ppg_ActivePower.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PpgSubscription_Ppg_ActivePower>, I>>(
    object: I,
  ): PpgSubscription_Ppg_ActivePower {
    const message = createBasePpgSubscription_Ppg_ActivePower();
    message.Measured = object.Measured ?? 0;
    message.AppliedPowerReference = object.AppliedPowerReference ?? 0;
    message.PSlaveabilityMode = object.PSlaveabilityMode ?? 0;
    message.ReferenceType = object.ReferenceType ?? 0;
    message.GenereratorsInScope = object.GenereratorsInScope ?? 0;
    return message;
  },
};

function createBasePpgSubscription_Ppg_ReactivePower(): PpgSubscription_Ppg_ReactivePower {
  return { Measured: undefined, Referece: undefined, Mode: 0, GenereratorsInScope: 0 };
}

export const PpgSubscription_Ppg_ReactivePower = {
  fromJSON(object: any): PpgSubscription_Ppg_ReactivePower {
    return {
      Measured: isSet(object.Measured) ? PpgSubscription_Ppg_ReactivePower_QData.fromJSON(object.Measured) : undefined,
      Referece: isSet(object.Referece) ? PpgSubscription_Ppg_ReactivePower_QData.fromJSON(object.Referece) : undefined,
      Mode: isSet(object.Mode) ? gt.Number(object.Mode) : 0,
      GenereratorsInScope: isSet(object.GenereratorsInScope) ? gt.Number(object.GenereratorsInScope) : 0,
    };
  },

  toJSON(message: PpgSubscription_Ppg_ReactivePower): unknown {
    const obj: any = {};
    if (message.Measured !== undefined) {
      obj.Measured = PpgSubscription_Ppg_ReactivePower_QData.toJSON(message.Measured);
    }
    if (message.Referece !== undefined) {
      obj.Referece = PpgSubscription_Ppg_ReactivePower_QData.toJSON(message.Referece);
    }
    if (message.Mode !== undefined && message.Mode !== 0) {
      obj.Mode = Math.round(message.Mode);
    }
    if (message.GenereratorsInScope !== undefined && message.GenereratorsInScope !== 0) {
      obj.GenereratorsInScope = Math.round(message.GenereratorsInScope);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PpgSubscription_Ppg_ReactivePower>, I>>(
    base?: I,
  ): PpgSubscription_Ppg_ReactivePower {
    return PpgSubscription_Ppg_ReactivePower.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PpgSubscription_Ppg_ReactivePower>, I>>(
    object: I,
  ): PpgSubscription_Ppg_ReactivePower {
    const message = createBasePpgSubscription_Ppg_ReactivePower();
    message.Measured = (object.Measured !== undefined && object.Measured !== null)
      ? PpgSubscription_Ppg_ReactivePower_QData.fromPartial(object.Measured)
      : undefined;
    message.Referece = (object.Referece !== undefined && object.Referece !== null)
      ? PpgSubscription_Ppg_ReactivePower_QData.fromPartial(object.Referece)
      : undefined;
    message.Mode = object.Mode ?? 0;
    message.GenereratorsInScope = object.GenereratorsInScope ?? 0;
    return message;
  },
};

function createBasePpgSubscription_Ppg_ReactivePower_QData(): PpgSubscription_Ppg_ReactivePower_QData {
  return { MVar: 0, UPU: 0, PF: 0 };
}

export const PpgSubscription_Ppg_ReactivePower_QData = {
  fromJSON(object: any): PpgSubscription_Ppg_ReactivePower_QData {
    return {
      MVar: isSet(object.MVar) ? gt.Number(object.MVar) : 0,
      UPU: isSet(object.UPU) ? gt.Number(object.UPU) : 0,
      PF: isSet(object.PF) ? gt.Number(object.PF) : 0,
    };
  },

  toJSON(message: PpgSubscription_Ppg_ReactivePower_QData): unknown {
    const obj: any = {};
    if (message.MVar !== undefined && message.MVar !== 0) {
      obj.MVar = message.MVar;
    }
    if (message.UPU !== undefined && message.UPU !== 0) {
      obj.UPU = message.UPU;
    }
    if (message.PF !== undefined && message.PF !== 0) {
      obj.PF = message.PF;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PpgSubscription_Ppg_ReactivePower_QData>, I>>(
    base?: I,
  ): PpgSubscription_Ppg_ReactivePower_QData {
    return PpgSubscription_Ppg_ReactivePower_QData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PpgSubscription_Ppg_ReactivePower_QData>, I>>(
    object: I,
  ): PpgSubscription_Ppg_ReactivePower_QData {
    const message = createBasePpgSubscription_Ppg_ReactivePower_QData();
    message.MVar = object.MVar ?? 0;
    message.UPU = object.UPU ?? 0;
    message.PF = object.PF ?? 0;
    return message;
  },
};

function createBaseSubTurbineSubscription(): SubTurbineSubscription {
  return { sampleTime: undefined, subTurbines: [] };
}

export const SubTurbineSubscription = {
  fromJSON(object: any): SubTurbineSubscription {
    return {
      sampleTime: isSet(object.sampleTime) ? fromJsonTimestamp(object.sampleTime) : undefined,
      subTurbines: gt.Array.isArray(object?.subTurbines)
        ? object.subTurbines.map((e: any) => SubTurbineSubscription_SubTurbine.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubTurbineSubscription): unknown {
    const obj: any = {};
    if (message.sampleTime !== undefined) {
      obj.sampleTime = message.sampleTime.toISOString();
    }
    if (message.subTurbines?.length) {
      obj.subTurbines = message.subTurbines.map((e) => SubTurbineSubscription_SubTurbine.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubTurbineSubscription>, I>>(base?: I): SubTurbineSubscription {
    return SubTurbineSubscription.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SubTurbineSubscription>, I>>(object: I): SubTurbineSubscription {
    const message = createBaseSubTurbineSubscription();
    message.sampleTime = object.sampleTime ?? undefined;
    message.subTurbines = object.subTurbines?.map((e) => SubTurbineSubscription_SubTurbine.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSubTurbineSubscription_SubTurbine(): SubTurbineSubscription_SubTurbine {
  return {
    name: "",
    curtailmentPriority: 0,
    dmolKw: 0,
    ceaseStopSupported: false,
    remoteStopSupported: false,
    curtailmentStopSupported: false,
    curtailmentStopState: TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Uninitialized,
    ceaseStopState: TurbineSubscription_Turbine_CeasePData_CeasePState.CeasePUninitialized,
    remoteStopState: TurbineSubscription_Turbine_RemotePPCStopState.Uninitialized,
    minCapablePowerKw: 0,
    activePowerInscopeKw: 0,
    curtailmentStopAvailablePowerKw: 0,
    curtailmentStoppedHourCount: 0,
    isPSlaveable: false,
    stoppedByPPCCount: 0,
    uncontrolledPowerKw: 0,
    isCurtailmentStopControllable: false,
    isTurbineStartableByCurtailmentStopCurtailmentStop: false,
    curtailmentStopRequest: TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Uninitialized,
    ceaseStopRequest: TurbineSubscription_Turbine_CeasePData_CeasePState.CeasePUninitialized,
    remoteStopRequest: TurbineSubscription_Turbine_RemotePPCStopState.Uninitialized,
    isStartControllable: false,
    curtailmentStopConfirmedRequest: TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Uninitialized,
    isCurtailmentStopRequestActive: false,
    activePowerReferenceKw: 0,
    ratedPower: 0,
    groupName: "",
    isCurtailmentStopRequestFault: false,
    isCurtailmentStartRequestFault: false,
    isCeaseStopRequestFault: false,
    isCeaseStartRequestFault: false,
    isRemoteStopRequestFault: false,
    isRemoteStartRequestFault: false,
    sourceTimeStamp: undefined,
  };
}

export const SubTurbineSubscription_SubTurbine = {
  fromJSON(object: any): SubTurbineSubscription_SubTurbine {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      curtailmentPriority: isSet(object.curtailmentPriority) ? gt.Number(object.curtailmentPriority) : 0,
      dmolKw: isSet(object.dmolKw) ? gt.Number(object.dmolKw) : 0,
      ceaseStopSupported: isSet(object.ceaseStopSupported) ? gt.Boolean(object.ceaseStopSupported) : false,
      remoteStopSupported: isSet(object.remoteStopSupported) ? gt.Boolean(object.remoteStopSupported) : false,
      curtailmentStopSupported: isSet(object.curtailmentStopSupported)
        ? gt.Boolean(object.curtailmentStopSupported)
        : false,
      curtailmentStopState: isSet(object.curtailmentStopState)
        ? turbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopStateFromJSON(object.curtailmentStopState)
        : TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Uninitialized,
      ceaseStopState: isSet(object.ceaseStopState)
        ? turbineSubscription_Turbine_CeasePData_CeasePStateFromJSON(object.ceaseStopState)
        : TurbineSubscription_Turbine_CeasePData_CeasePState.CeasePUninitialized,
      remoteStopState: isSet(object.remoteStopState)
        ? turbineSubscription_Turbine_RemotePPCStopStateFromJSON(object.remoteStopState)
        : TurbineSubscription_Turbine_RemotePPCStopState.Uninitialized,
      minCapablePowerKw: isSet(object.minCapablePowerKw) ? gt.Number(object.minCapablePowerKw) : 0,
      activePowerInscopeKw: isSet(object.activePowerInscopeKw) ? gt.Number(object.activePowerInscopeKw) : 0,
      curtailmentStopAvailablePowerKw: isSet(object.curtailmentStopAvailablePowerKw)
        ? gt.Number(object.curtailmentStopAvailablePowerKw)
        : 0,
      curtailmentStoppedHourCount: isSet(object.curtailmentStoppedHourCount)
        ? gt.Number(object.curtailmentStoppedHourCount)
        : 0,
      isPSlaveable: isSet(object.isPSlaveable) ? gt.Boolean(object.isPSlaveable) : false,
      stoppedByPPCCount: isSet(object.stoppedByPPCCount) ? gt.Number(object.stoppedByPPCCount) : 0,
      uncontrolledPowerKw: isSet(object.uncontrolledPowerKw) ? gt.Number(object.uncontrolledPowerKw) : 0,
      isCurtailmentStopControllable: isSet(object.isCurtailmentStopControllable)
        ? gt.Boolean(object.isCurtailmentStopControllable)
        : false,
      isTurbineStartableByCurtailmentStopCurtailmentStop:
        isSet(object.isTurbineStartableByCurtailmentStopCurtailmentStop)
          ? gt.Boolean(object.isTurbineStartableByCurtailmentStopCurtailmentStop)
          : false,
      curtailmentStopRequest: isSet(object.curtailmentStopRequest)
        ? turbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopStateFromJSON(object.curtailmentStopRequest)
        : TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Uninitialized,
      ceaseStopRequest: isSet(object.ceaseStopRequest)
        ? turbineSubscription_Turbine_CeasePData_CeasePStateFromJSON(object.ceaseStopRequest)
        : TurbineSubscription_Turbine_CeasePData_CeasePState.CeasePUninitialized,
      remoteStopRequest: isSet(object.remoteStopRequest)
        ? turbineSubscription_Turbine_RemotePPCStopStateFromJSON(object.remoteStopRequest)
        : TurbineSubscription_Turbine_RemotePPCStopState.Uninitialized,
      isStartControllable: isSet(object.isStartControllable) ? gt.Boolean(object.isStartControllable) : false,
      curtailmentStopConfirmedRequest: isSet(object.curtailmentStopConfirmedRequest)
        ? turbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopStateFromJSON(
          object.curtailmentStopConfirmedRequest,
        )
        : TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Uninitialized,
      isCurtailmentStopRequestActive: isSet(object.isCurtailmentStopRequestActive)
        ? gt.Boolean(object.isCurtailmentStopRequestActive)
        : false,
      activePowerReferenceKw: isSet(object.activePowerReferenceKw) ? gt.Number(object.activePowerReferenceKw) : 0,
      ratedPower: isSet(object.ratedPower) ? gt.Number(object.ratedPower) : 0,
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      isCurtailmentStopRequestFault: isSet(object.isCurtailmentStopRequestFault)
        ? gt.Boolean(object.isCurtailmentStopRequestFault)
        : false,
      isCurtailmentStartRequestFault: isSet(object.isCurtailmentStartRequestFault)
        ? gt.Boolean(object.isCurtailmentStartRequestFault)
        : false,
      isCeaseStopRequestFault: isSet(object.isCeaseStopRequestFault)
        ? gt.Boolean(object.isCeaseStopRequestFault)
        : false,
      isCeaseStartRequestFault: isSet(object.isCeaseStartRequestFault)
        ? gt.Boolean(object.isCeaseStartRequestFault)
        : false,
      isRemoteStopRequestFault: isSet(object.isRemoteStopRequestFault)
        ? gt.Boolean(object.isRemoteStopRequestFault)
        : false,
      isRemoteStartRequestFault: isSet(object.isRemoteStartRequestFault)
        ? gt.Boolean(object.isRemoteStartRequestFault)
        : false,
      sourceTimeStamp: isSet(object.sourceTimeStamp) ? fromJsonTimestamp(object.sourceTimeStamp) : undefined,
    };
  },

  toJSON(message: SubTurbineSubscription_SubTurbine): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.curtailmentPriority !== undefined && message.curtailmentPriority !== 0) {
      obj.curtailmentPriority = Math.round(message.curtailmentPriority);
    }
    if (message.dmolKw !== undefined && message.dmolKw !== 0) {
      obj.dmolKw = message.dmolKw;
    }
    if (message.ceaseStopSupported !== undefined && message.ceaseStopSupported !== false) {
      obj.ceaseStopSupported = message.ceaseStopSupported;
    }
    if (message.remoteStopSupported !== undefined && message.remoteStopSupported !== false) {
      obj.remoteStopSupported = message.remoteStopSupported;
    }
    if (message.curtailmentStopSupported !== undefined && message.curtailmentStopSupported !== false) {
      obj.curtailmentStopSupported = message.curtailmentStopSupported;
    }
    if (
      message.curtailmentStopState !== undefined &&
      message.curtailmentStopState !==
        TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Uninitialized
    ) {
      obj.curtailmentStopState = turbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopStateToJSON(
        message.curtailmentStopState,
      );
    }
    if (
      message.ceaseStopState !== undefined &&
      message.ceaseStopState !== TurbineSubscription_Turbine_CeasePData_CeasePState.CeasePUninitialized
    ) {
      obj.ceaseStopState = turbineSubscription_Turbine_CeasePData_CeasePStateToJSON(message.ceaseStopState);
    }
    if (
      message.remoteStopState !== undefined &&
      message.remoteStopState !== TurbineSubscription_Turbine_RemotePPCStopState.Uninitialized
    ) {
      obj.remoteStopState = turbineSubscription_Turbine_RemotePPCStopStateToJSON(message.remoteStopState);
    }
    if (message.minCapablePowerKw !== undefined && message.minCapablePowerKw !== 0) {
      obj.minCapablePowerKw = message.minCapablePowerKw;
    }
    if (message.activePowerInscopeKw !== undefined && message.activePowerInscopeKw !== 0) {
      obj.activePowerInscopeKw = message.activePowerInscopeKw;
    }
    if (message.curtailmentStopAvailablePowerKw !== undefined && message.curtailmentStopAvailablePowerKw !== 0) {
      obj.curtailmentStopAvailablePowerKw = message.curtailmentStopAvailablePowerKw;
    }
    if (message.curtailmentStoppedHourCount !== undefined && message.curtailmentStoppedHourCount !== 0) {
      obj.curtailmentStoppedHourCount = message.curtailmentStoppedHourCount;
    }
    if (message.isPSlaveable !== undefined && message.isPSlaveable !== false) {
      obj.isPSlaveable = message.isPSlaveable;
    }
    if (message.stoppedByPPCCount !== undefined && message.stoppedByPPCCount !== 0) {
      obj.stoppedByPPCCount = Math.round(message.stoppedByPPCCount);
    }
    if (message.uncontrolledPowerKw !== undefined && message.uncontrolledPowerKw !== 0) {
      obj.uncontrolledPowerKw = message.uncontrolledPowerKw;
    }
    if (message.isCurtailmentStopControllable !== undefined && message.isCurtailmentStopControllable !== false) {
      obj.isCurtailmentStopControllable = message.isCurtailmentStopControllable;
    }
    if (
      message.isTurbineStartableByCurtailmentStopCurtailmentStop !== undefined &&
      message.isTurbineStartableByCurtailmentStopCurtailmentStop !== false
    ) {
      obj.isTurbineStartableByCurtailmentStopCurtailmentStop =
        message.isTurbineStartableByCurtailmentStopCurtailmentStop;
    }
    if (
      message.curtailmentStopRequest !== undefined &&
      message.curtailmentStopRequest !==
        TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Uninitialized
    ) {
      obj.curtailmentStopRequest = turbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopStateToJSON(
        message.curtailmentStopRequest,
      );
    }
    if (
      message.ceaseStopRequest !== undefined &&
      message.ceaseStopRequest !== TurbineSubscription_Turbine_CeasePData_CeasePState.CeasePUninitialized
    ) {
      obj.ceaseStopRequest = turbineSubscription_Turbine_CeasePData_CeasePStateToJSON(message.ceaseStopRequest);
    }
    if (
      message.remoteStopRequest !== undefined &&
      message.remoteStopRequest !== TurbineSubscription_Turbine_RemotePPCStopState.Uninitialized
    ) {
      obj.remoteStopRequest = turbineSubscription_Turbine_RemotePPCStopStateToJSON(message.remoteStopRequest);
    }
    if (message.isStartControllable !== undefined && message.isStartControllable !== false) {
      obj.isStartControllable = message.isStartControllable;
    }
    if (
      message.curtailmentStopConfirmedRequest !== undefined &&
      message.curtailmentStopConfirmedRequest !==
        TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Uninitialized
    ) {
      obj.curtailmentStopConfirmedRequest = turbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopStateToJSON(
        message.curtailmentStopConfirmedRequest,
      );
    }
    if (message.isCurtailmentStopRequestActive !== undefined && message.isCurtailmentStopRequestActive !== false) {
      obj.isCurtailmentStopRequestActive = message.isCurtailmentStopRequestActive;
    }
    if (message.activePowerReferenceKw !== undefined && message.activePowerReferenceKw !== 0) {
      obj.activePowerReferenceKw = message.activePowerReferenceKw;
    }
    if (message.ratedPower !== undefined && message.ratedPower !== 0) {
      obj.ratedPower = message.ratedPower;
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.isCurtailmentStopRequestFault !== undefined && message.isCurtailmentStopRequestFault !== false) {
      obj.isCurtailmentStopRequestFault = message.isCurtailmentStopRequestFault;
    }
    if (message.isCurtailmentStartRequestFault !== undefined && message.isCurtailmentStartRequestFault !== false) {
      obj.isCurtailmentStartRequestFault = message.isCurtailmentStartRequestFault;
    }
    if (message.isCeaseStopRequestFault !== undefined && message.isCeaseStopRequestFault !== false) {
      obj.isCeaseStopRequestFault = message.isCeaseStopRequestFault;
    }
    if (message.isCeaseStartRequestFault !== undefined && message.isCeaseStartRequestFault !== false) {
      obj.isCeaseStartRequestFault = message.isCeaseStartRequestFault;
    }
    if (message.isRemoteStopRequestFault !== undefined && message.isRemoteStopRequestFault !== false) {
      obj.isRemoteStopRequestFault = message.isRemoteStopRequestFault;
    }
    if (message.isRemoteStartRequestFault !== undefined && message.isRemoteStartRequestFault !== false) {
      obj.isRemoteStartRequestFault = message.isRemoteStartRequestFault;
    }
    if (message.sourceTimeStamp !== undefined) {
      obj.sourceTimeStamp = message.sourceTimeStamp.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubTurbineSubscription_SubTurbine>, I>>(
    base?: I,
  ): SubTurbineSubscription_SubTurbine {
    return SubTurbineSubscription_SubTurbine.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SubTurbineSubscription_SubTurbine>, I>>(
    object: I,
  ): SubTurbineSubscription_SubTurbine {
    const message = createBaseSubTurbineSubscription_SubTurbine();
    message.name = object.name ?? "";
    message.curtailmentPriority = object.curtailmentPriority ?? 0;
    message.dmolKw = object.dmolKw ?? 0;
    message.ceaseStopSupported = object.ceaseStopSupported ?? false;
    message.remoteStopSupported = object.remoteStopSupported ?? false;
    message.curtailmentStopSupported = object.curtailmentStopSupported ?? false;
    message.curtailmentStopState = object.curtailmentStopState ??
      TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Uninitialized;
    message.ceaseStopState = object.ceaseStopState ??
      TurbineSubscription_Turbine_CeasePData_CeasePState.CeasePUninitialized;
    message.remoteStopState = object.remoteStopState ?? TurbineSubscription_Turbine_RemotePPCStopState.Uninitialized;
    message.minCapablePowerKw = object.minCapablePowerKw ?? 0;
    message.activePowerInscopeKw = object.activePowerInscopeKw ?? 0;
    message.curtailmentStopAvailablePowerKw = object.curtailmentStopAvailablePowerKw ?? 0;
    message.curtailmentStoppedHourCount = object.curtailmentStoppedHourCount ?? 0;
    message.isPSlaveable = object.isPSlaveable ?? false;
    message.stoppedByPPCCount = object.stoppedByPPCCount ?? 0;
    message.uncontrolledPowerKw = object.uncontrolledPowerKw ?? 0;
    message.isCurtailmentStopControllable = object.isCurtailmentStopControllable ?? false;
    message.isTurbineStartableByCurtailmentStopCurtailmentStop =
      object.isTurbineStartableByCurtailmentStopCurtailmentStop ?? false;
    message.curtailmentStopRequest = object.curtailmentStopRequest ??
      TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Uninitialized;
    message.ceaseStopRequest = object.ceaseStopRequest ??
      TurbineSubscription_Turbine_CeasePData_CeasePState.CeasePUninitialized;
    message.remoteStopRequest = object.remoteStopRequest ??
      TurbineSubscription_Turbine_RemotePPCStopState.Uninitialized;
    message.isStartControllable = object.isStartControllable ?? false;
    message.curtailmentStopConfirmedRequest = object.curtailmentStopConfirmedRequest ??
      TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Uninitialized;
    message.isCurtailmentStopRequestActive = object.isCurtailmentStopRequestActive ?? false;
    message.activePowerReferenceKw = object.activePowerReferenceKw ?? 0;
    message.ratedPower = object.ratedPower ?? 0;
    message.groupName = object.groupName ?? "";
    message.isCurtailmentStopRequestFault = object.isCurtailmentStopRequestFault ?? false;
    message.isCurtailmentStartRequestFault = object.isCurtailmentStartRequestFault ?? false;
    message.isCeaseStopRequestFault = object.isCeaseStopRequestFault ?? false;
    message.isCeaseStartRequestFault = object.isCeaseStartRequestFault ?? false;
    message.isRemoteStopRequestFault = object.isRemoteStopRequestFault ?? false;
    message.isRemoteStartRequestFault = object.isRemoteStartRequestFault ?? false;
    message.sourceTimeStamp = object.sourceTimeStamp ?? undefined;
    return message;
  },
};

function createBaseGeneratorSubscription(): GeneratorSubscription {
  return { sampleTime: 0, generator: [] };
}

export const GeneratorSubscription = {
  fromJSON(object: any): GeneratorSubscription {
    return {
      sampleTime: isSet(object.sampleTime) ? gt.Number(object.sampleTime) : 0,
      generator: gt.Array.isArray(object?.generator)
        ? object.generator.map((e: any) => GeneratorSubscription_Generator.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GeneratorSubscription): unknown {
    const obj: any = {};
    if (message.sampleTime !== undefined && message.sampleTime !== 0) {
      obj.sampleTime = Math.round(message.sampleTime);
    }
    if (message.generator?.length) {
      obj.generator = message.generator.map((e) => GeneratorSubscription_Generator.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneratorSubscription>, I>>(base?: I): GeneratorSubscription {
    return GeneratorSubscription.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneratorSubscription>, I>>(object: I): GeneratorSubscription {
    const message = createBaseGeneratorSubscription();
    message.sampleTime = object.sampleTime ?? 0;
    message.generator = object.generator?.map((e) => GeneratorSubscription_Generator.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGeneratorSubscription_Generator(): GeneratorSubscription_Generator {
  return {
    timestamp: 0,
    readDataRTT: 0,
    generatorName: "",
    activePower: undefined,
    reactivePower: undefined,
    gridMeasurement: undefined,
    generatorType: 0,
    groupName: "",
    commStatusOk: false,
    references: undefined,
  };
}

export const GeneratorSubscription_Generator = {
  fromJSON(object: any): GeneratorSubscription_Generator {
    return {
      timestamp: isSet(object.timestamp) ? gt.Number(object.timestamp) : 0,
      readDataRTT: isSet(object.readDataRTT) ? gt.Number(object.readDataRTT) : 0,
      generatorName: isSet(object.generatorName) ? gt.String(object.generatorName) : "",
      activePower: isSet(object.activePower)
        ? GeneratorSubscription_Generator_ActivePower.fromJSON(object.activePower)
        : undefined,
      reactivePower: isSet(object.reactivePower)
        ? GeneratorSubscription_Generator_ReactivePower.fromJSON(object.reactivePower)
        : undefined,
      gridMeasurement: isSet(object.gridMeasurement)
        ? GeneratorSubscription_Generator_GridMeasurement.fromJSON(object.gridMeasurement)
        : undefined,
      generatorType: isSet(object.generatorType) ? gt.Number(object.generatorType) : 0,
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      commStatusOk: isSet(object.commStatusOk) ? gt.Boolean(object.commStatusOk) : false,
      references: isSet(object.references)
        ? GeneratorSubscription_Generator_References.fromJSON(object.references)
        : undefined,
    };
  },

  toJSON(message: GeneratorSubscription_Generator): unknown {
    const obj: any = {};
    if (message.timestamp !== undefined && message.timestamp !== 0) {
      obj.timestamp = Math.round(message.timestamp);
    }
    if (message.readDataRTT !== undefined && message.readDataRTT !== 0) {
      obj.readDataRTT = Math.round(message.readDataRTT);
    }
    if (message.generatorName !== undefined && message.generatorName !== "") {
      obj.generatorName = message.generatorName;
    }
    if (message.activePower !== undefined) {
      obj.activePower = GeneratorSubscription_Generator_ActivePower.toJSON(message.activePower);
    }
    if (message.reactivePower !== undefined) {
      obj.reactivePower = GeneratorSubscription_Generator_ReactivePower.toJSON(message.reactivePower);
    }
    if (message.gridMeasurement !== undefined) {
      obj.gridMeasurement = GeneratorSubscription_Generator_GridMeasurement.toJSON(message.gridMeasurement);
    }
    if (message.generatorType !== undefined && message.generatorType !== 0) {
      obj.generatorType = Math.round(message.generatorType);
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.commStatusOk !== undefined && message.commStatusOk !== false) {
      obj.commStatusOk = message.commStatusOk;
    }
    if (message.references !== undefined) {
      obj.references = GeneratorSubscription_Generator_References.toJSON(message.references);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneratorSubscription_Generator>, I>>(base?: I): GeneratorSubscription_Generator {
    return GeneratorSubscription_Generator.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneratorSubscription_Generator>, I>>(
    object: I,
  ): GeneratorSubscription_Generator {
    const message = createBaseGeneratorSubscription_Generator();
    message.timestamp = object.timestamp ?? 0;
    message.readDataRTT = object.readDataRTT ?? 0;
    message.generatorName = object.generatorName ?? "";
    message.activePower = (object.activePower !== undefined && object.activePower !== null)
      ? GeneratorSubscription_Generator_ActivePower.fromPartial(object.activePower)
      : undefined;
    message.reactivePower = (object.reactivePower !== undefined && object.reactivePower !== null)
      ? GeneratorSubscription_Generator_ReactivePower.fromPartial(object.reactivePower)
      : undefined;
    message.gridMeasurement = (object.gridMeasurement !== undefined && object.gridMeasurement !== null)
      ? GeneratorSubscription_Generator_GridMeasurement.fromPartial(object.gridMeasurement)
      : undefined;
    message.generatorType = object.generatorType ?? 0;
    message.groupName = object.groupName ?? "";
    message.commStatusOk = object.commStatusOk ?? false;
    message.references = (object.references !== undefined && object.references !== null)
      ? GeneratorSubscription_Generator_References.fromPartial(object.references)
      : undefined;
    return message;
  },
};

function createBaseGeneratorSubscription_Generator_ActivePower(): GeneratorSubscription_Generator_ActivePower {
  return {
    RatedPower: 0,
    IsPSlaveable: false,
    OverLoadLimit: 0,
    AvailablePower: 0,
    AvailablePowerInScope: 0,
    EstimatedPowerCapabilityLower: 0,
    EstimatedPowerCapabilityUpper: 0,
    PowerChangeRateUp: 0,
    PowerChangeRateDown: 0,
    RatedPowerIncluded: 0,
    AvailablePowerCtrl: 0,
    AvailablePowerCtrlInScope: 0,
    AvailablePowerRaw: 0,
    AvailablePowerRawSum: 0,
    MaxCapablePower: 0,
    MinCapablePower: 0,
    AvailablePowerBoost: 0,
    ActivePowerGeneratorSum: 0,
    ActivePowerGeneratorSumInScope: 0,
    RatedPowerOnGrid: 0,
    ActivePowerReference: 0,
    InscopeCount: 0,
    StateOfCharge: 0,
    StateOfHealth: 0,
    RatedStorageCapacity: 0,
    SoCMaxLimit: 0,
    SoCMinLimit: 0,
    PCtrlEnabled: false,
    PReference: 0,
  };
}

export const GeneratorSubscription_Generator_ActivePower = {
  fromJSON(object: any): GeneratorSubscription_Generator_ActivePower {
    return {
      RatedPower: isSet(object.RatedPower) ? gt.Number(object.RatedPower) : 0,
      IsPSlaveable: isSet(object.IsPSlaveable) ? gt.Boolean(object.IsPSlaveable) : false,
      OverLoadLimit: isSet(object.OverLoadLimit) ? gt.Number(object.OverLoadLimit) : 0,
      AvailablePower: isSet(object.AvailablePower) ? gt.Number(object.AvailablePower) : 0,
      AvailablePowerInScope: isSet(object.AvailablePowerInScope) ? gt.Number(object.AvailablePowerInScope) : 0,
      EstimatedPowerCapabilityLower: isSet(object.EstimatedPowerCapabilityLower)
        ? gt.Number(object.EstimatedPowerCapabilityLower)
        : 0,
      EstimatedPowerCapabilityUpper: isSet(object.EstimatedPowerCapabilityUpper)
        ? gt.Number(object.EstimatedPowerCapabilityUpper)
        : 0,
      PowerChangeRateUp: isSet(object.PowerChangeRateUp) ? gt.Number(object.PowerChangeRateUp) : 0,
      PowerChangeRateDown: isSet(object.PowerChangeRateDown) ? gt.Number(object.PowerChangeRateDown) : 0,
      RatedPowerIncluded: isSet(object.RatedPowerIncluded) ? gt.Number(object.RatedPowerIncluded) : 0,
      AvailablePowerCtrl: isSet(object.AvailablePowerCtrl) ? gt.Number(object.AvailablePowerCtrl) : 0,
      AvailablePowerCtrlInScope: isSet(object.AvailablePowerCtrlInScope)
        ? gt.Number(object.AvailablePowerCtrlInScope)
        : 0,
      AvailablePowerRaw: isSet(object.AvailablePowerRaw) ? gt.Number(object.AvailablePowerRaw) : 0,
      AvailablePowerRawSum: isSet(object.AvailablePowerRawSum) ? gt.Number(object.AvailablePowerRawSum) : 0,
      MaxCapablePower: isSet(object.MaxCapablePower) ? gt.Number(object.MaxCapablePower) : 0,
      MinCapablePower: isSet(object.MinCapablePower) ? gt.Number(object.MinCapablePower) : 0,
      AvailablePowerBoost: isSet(object.AvailablePowerBoost) ? gt.Number(object.AvailablePowerBoost) : 0,
      ActivePowerGeneratorSum: isSet(object.ActivePowerGeneratorSum) ? gt.Number(object.ActivePowerGeneratorSum) : 0,
      ActivePowerGeneratorSumInScope: isSet(object.ActivePowerGeneratorSumInScope)
        ? gt.Number(object.ActivePowerGeneratorSumInScope)
        : 0,
      RatedPowerOnGrid: isSet(object.RatedPowerOnGrid) ? gt.Number(object.RatedPowerOnGrid) : 0,
      ActivePowerReference: isSet(object.ActivePowerReference) ? gt.Number(object.ActivePowerReference) : 0,
      InscopeCount: isSet(object.InscopeCount) ? gt.Number(object.InscopeCount) : 0,
      StateOfCharge: isSet(object.StateOfCharge) ? gt.Number(object.StateOfCharge) : 0,
      StateOfHealth: isSet(object.StateOfHealth) ? gt.Number(object.StateOfHealth) : 0,
      RatedStorageCapacity: isSet(object.RatedStorageCapacity) ? gt.Number(object.RatedStorageCapacity) : 0,
      SoCMaxLimit: isSet(object.SoCMaxLimit) ? gt.Number(object.SoCMaxLimit) : 0,
      SoCMinLimit: isSet(object.SoCMinLimit) ? gt.Number(object.SoCMinLimit) : 0,
      PCtrlEnabled: isSet(object.PCtrlEnabled) ? gt.Boolean(object.PCtrlEnabled) : false,
      PReference: isSet(object.PReference) ? gt.Number(object.PReference) : 0,
    };
  },

  toJSON(message: GeneratorSubscription_Generator_ActivePower): unknown {
    const obj: any = {};
    if (message.RatedPower !== undefined && message.RatedPower !== 0) {
      obj.RatedPower = message.RatedPower;
    }
    if (message.IsPSlaveable !== undefined && message.IsPSlaveable !== false) {
      obj.IsPSlaveable = message.IsPSlaveable;
    }
    if (message.OverLoadLimit !== undefined && message.OverLoadLimit !== 0) {
      obj.OverLoadLimit = message.OverLoadLimit;
    }
    if (message.AvailablePower !== undefined && message.AvailablePower !== 0) {
      obj.AvailablePower = message.AvailablePower;
    }
    if (message.AvailablePowerInScope !== undefined && message.AvailablePowerInScope !== 0) {
      obj.AvailablePowerInScope = message.AvailablePowerInScope;
    }
    if (message.EstimatedPowerCapabilityLower !== undefined && message.EstimatedPowerCapabilityLower !== 0) {
      obj.EstimatedPowerCapabilityLower = message.EstimatedPowerCapabilityLower;
    }
    if (message.EstimatedPowerCapabilityUpper !== undefined && message.EstimatedPowerCapabilityUpper !== 0) {
      obj.EstimatedPowerCapabilityUpper = message.EstimatedPowerCapabilityUpper;
    }
    if (message.PowerChangeRateUp !== undefined && message.PowerChangeRateUp !== 0) {
      obj.PowerChangeRateUp = message.PowerChangeRateUp;
    }
    if (message.PowerChangeRateDown !== undefined && message.PowerChangeRateDown !== 0) {
      obj.PowerChangeRateDown = message.PowerChangeRateDown;
    }
    if (message.RatedPowerIncluded !== undefined && message.RatedPowerIncluded !== 0) {
      obj.RatedPowerIncluded = message.RatedPowerIncluded;
    }
    if (message.AvailablePowerCtrl !== undefined && message.AvailablePowerCtrl !== 0) {
      obj.AvailablePowerCtrl = message.AvailablePowerCtrl;
    }
    if (message.AvailablePowerCtrlInScope !== undefined && message.AvailablePowerCtrlInScope !== 0) {
      obj.AvailablePowerCtrlInScope = message.AvailablePowerCtrlInScope;
    }
    if (message.AvailablePowerRaw !== undefined && message.AvailablePowerRaw !== 0) {
      obj.AvailablePowerRaw = message.AvailablePowerRaw;
    }
    if (message.AvailablePowerRawSum !== undefined && message.AvailablePowerRawSum !== 0) {
      obj.AvailablePowerRawSum = message.AvailablePowerRawSum;
    }
    if (message.MaxCapablePower !== undefined && message.MaxCapablePower !== 0) {
      obj.MaxCapablePower = message.MaxCapablePower;
    }
    if (message.MinCapablePower !== undefined && message.MinCapablePower !== 0) {
      obj.MinCapablePower = message.MinCapablePower;
    }
    if (message.AvailablePowerBoost !== undefined && message.AvailablePowerBoost !== 0) {
      obj.AvailablePowerBoost = message.AvailablePowerBoost;
    }
    if (message.ActivePowerGeneratorSum !== undefined && message.ActivePowerGeneratorSum !== 0) {
      obj.ActivePowerGeneratorSum = message.ActivePowerGeneratorSum;
    }
    if (message.ActivePowerGeneratorSumInScope !== undefined && message.ActivePowerGeneratorSumInScope !== 0) {
      obj.ActivePowerGeneratorSumInScope = message.ActivePowerGeneratorSumInScope;
    }
    if (message.RatedPowerOnGrid !== undefined && message.RatedPowerOnGrid !== 0) {
      obj.RatedPowerOnGrid = message.RatedPowerOnGrid;
    }
    if (message.ActivePowerReference !== undefined && message.ActivePowerReference !== 0) {
      obj.ActivePowerReference = message.ActivePowerReference;
    }
    if (message.InscopeCount !== undefined && message.InscopeCount !== 0) {
      obj.InscopeCount = Math.round(message.InscopeCount);
    }
    if (message.StateOfCharge !== undefined && message.StateOfCharge !== 0) {
      obj.StateOfCharge = message.StateOfCharge;
    }
    if (message.StateOfHealth !== undefined && message.StateOfHealth !== 0) {
      obj.StateOfHealth = message.StateOfHealth;
    }
    if (message.RatedStorageCapacity !== undefined && message.RatedStorageCapacity !== 0) {
      obj.RatedStorageCapacity = message.RatedStorageCapacity;
    }
    if (message.SoCMaxLimit !== undefined && message.SoCMaxLimit !== 0) {
      obj.SoCMaxLimit = message.SoCMaxLimit;
    }
    if (message.SoCMinLimit !== undefined && message.SoCMinLimit !== 0) {
      obj.SoCMinLimit = message.SoCMinLimit;
    }
    if (message.PCtrlEnabled !== undefined && message.PCtrlEnabled !== false) {
      obj.PCtrlEnabled = message.PCtrlEnabled;
    }
    if (message.PReference !== undefined && message.PReference !== 0) {
      obj.PReference = message.PReference;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneratorSubscription_Generator_ActivePower>, I>>(
    base?: I,
  ): GeneratorSubscription_Generator_ActivePower {
    return GeneratorSubscription_Generator_ActivePower.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneratorSubscription_Generator_ActivePower>, I>>(
    object: I,
  ): GeneratorSubscription_Generator_ActivePower {
    const message = createBaseGeneratorSubscription_Generator_ActivePower();
    message.RatedPower = object.RatedPower ?? 0;
    message.IsPSlaveable = object.IsPSlaveable ?? false;
    message.OverLoadLimit = object.OverLoadLimit ?? 0;
    message.AvailablePower = object.AvailablePower ?? 0;
    message.AvailablePowerInScope = object.AvailablePowerInScope ?? 0;
    message.EstimatedPowerCapabilityLower = object.EstimatedPowerCapabilityLower ?? 0;
    message.EstimatedPowerCapabilityUpper = object.EstimatedPowerCapabilityUpper ?? 0;
    message.PowerChangeRateUp = object.PowerChangeRateUp ?? 0;
    message.PowerChangeRateDown = object.PowerChangeRateDown ?? 0;
    message.RatedPowerIncluded = object.RatedPowerIncluded ?? 0;
    message.AvailablePowerCtrl = object.AvailablePowerCtrl ?? 0;
    message.AvailablePowerCtrlInScope = object.AvailablePowerCtrlInScope ?? 0;
    message.AvailablePowerRaw = object.AvailablePowerRaw ?? 0;
    message.AvailablePowerRawSum = object.AvailablePowerRawSum ?? 0;
    message.MaxCapablePower = object.MaxCapablePower ?? 0;
    message.MinCapablePower = object.MinCapablePower ?? 0;
    message.AvailablePowerBoost = object.AvailablePowerBoost ?? 0;
    message.ActivePowerGeneratorSum = object.ActivePowerGeneratorSum ?? 0;
    message.ActivePowerGeneratorSumInScope = object.ActivePowerGeneratorSumInScope ?? 0;
    message.RatedPowerOnGrid = object.RatedPowerOnGrid ?? 0;
    message.ActivePowerReference = object.ActivePowerReference ?? 0;
    message.InscopeCount = object.InscopeCount ?? 0;
    message.StateOfCharge = object.StateOfCharge ?? 0;
    message.StateOfHealth = object.StateOfHealth ?? 0;
    message.RatedStorageCapacity = object.RatedStorageCapacity ?? 0;
    message.SoCMaxLimit = object.SoCMaxLimit ?? 0;
    message.SoCMinLimit = object.SoCMinLimit ?? 0;
    message.PCtrlEnabled = object.PCtrlEnabled ?? false;
    message.PReference = object.PReference ?? 0;
    return message;
  },
};

function createBaseGeneratorSubscription_Generator_ReactivePower(): GeneratorSubscription_Generator_ReactivePower {
  return {
    QMinMax: 0,
    QMin: 0,
    QMax: 0,
    IsQReactiveSlaveable: false,
    IsQPowerFactorSlaveable: false,
    IsUSlaveable: false,
    isFRTSupportedCount: 0,
    isVoltageFRTActiveCount: 0,
    VoltageReference: 0,
    InscopeCount: 0,
    PowerBalancingOutput: 0,
    PConnectLimit: 0,
    PDisconnectLimit: 0,
    QConnectLimit: 0,
    QDisconnectLimit: 0,
    ConnectDelay: 0,
    DisconnectDelay: 0,
    MinimumConnectedPeriod: 0,
    MinimumDisconnectedPeriod: 0,
    NumberOfOperations: 0,
    DiscreteDeviceStatus: 0,
    KeepAlive: 0,
    Anomaly: false,
    CloseLockState: false,
    OpenLockState: false,
    SecondaryContributorState: 0,
    UCtrlEnabled: false,
    QReference: 0,
    QPFReference: 0,
    UReference: 0,
  };
}

export const GeneratorSubscription_Generator_ReactivePower = {
  fromJSON(object: any): GeneratorSubscription_Generator_ReactivePower {
    return {
      QMinMax: isSet(object.QMinMax) ? gt.Number(object.QMinMax) : 0,
      QMin: isSet(object.QMin) ? gt.Number(object.QMin) : 0,
      QMax: isSet(object.QMax) ? gt.Number(object.QMax) : 0,
      IsQReactiveSlaveable: isSet(object.IsQReactiveSlaveable) ? gt.Boolean(object.IsQReactiveSlaveable) : false,
      IsQPowerFactorSlaveable: isSet(object.IsQPowerFactorSlaveable)
        ? gt.Boolean(object.IsQPowerFactorSlaveable)
        : false,
      IsUSlaveable: isSet(object.IsUSlaveable) ? gt.Boolean(object.IsUSlaveable) : false,
      isFRTSupportedCount: isSet(object.isFRTSupportedCount) ? gt.Number(object.isFRTSupportedCount) : 0,
      isVoltageFRTActiveCount: isSet(object.isVoltageFRTActiveCount) ? gt.Number(object.isVoltageFRTActiveCount) : 0,
      VoltageReference: isSet(object.VoltageReference) ? gt.Number(object.VoltageReference) : 0,
      InscopeCount: isSet(object.InscopeCount) ? gt.Number(object.InscopeCount) : 0,
      PowerBalancingOutput: isSet(object.PowerBalancingOutput) ? gt.Number(object.PowerBalancingOutput) : 0,
      PConnectLimit: isSet(object.PConnectLimit) ? gt.Number(object.PConnectLimit) : 0,
      PDisconnectLimit: isSet(object.PDisconnectLimit) ? gt.Number(object.PDisconnectLimit) : 0,
      QConnectLimit: isSet(object.QConnectLimit) ? gt.Number(object.QConnectLimit) : 0,
      QDisconnectLimit: isSet(object.QDisconnectLimit) ? gt.Number(object.QDisconnectLimit) : 0,
      ConnectDelay: isSet(object.ConnectDelay) ? gt.Number(object.ConnectDelay) : 0,
      DisconnectDelay: isSet(object.DisconnectDelay) ? gt.Number(object.DisconnectDelay) : 0,
      MinimumConnectedPeriod: isSet(object.MinimumConnectedPeriod) ? gt.Number(object.MinimumConnectedPeriod) : 0,
      MinimumDisconnectedPeriod: isSet(object.MinimumDisconnectedPeriod)
        ? gt.Number(object.MinimumDisconnectedPeriod)
        : 0,
      NumberOfOperations: isSet(object.NumberOfOperations) ? gt.Number(object.NumberOfOperations) : 0,
      DiscreteDeviceStatus: isSet(object.DiscreteDeviceStatus) ? gt.Number(object.DiscreteDeviceStatus) : 0,
      KeepAlive: isSet(object.KeepAlive) ? gt.Number(object.KeepAlive) : 0,
      Anomaly: isSet(object.Anomaly) ? gt.Boolean(object.Anomaly) : false,
      CloseLockState: isSet(object.CloseLockState) ? gt.Boolean(object.CloseLockState) : false,
      OpenLockState: isSet(object.OpenLockState) ? gt.Boolean(object.OpenLockState) : false,
      SecondaryContributorState: isSet(object.SecondaryContributorState)
        ? gt.Number(object.SecondaryContributorState)
        : 0,
      UCtrlEnabled: isSet(object.UCtrlEnabled) ? gt.Boolean(object.UCtrlEnabled) : false,
      QReference: isSet(object.QReference) ? gt.Number(object.QReference) : 0,
      QPFReference: isSet(object.QPFReference) ? gt.Number(object.QPFReference) : 0,
      UReference: isSet(object.UReference) ? gt.Number(object.UReference) : 0,
    };
  },

  toJSON(message: GeneratorSubscription_Generator_ReactivePower): unknown {
    const obj: any = {};
    if (message.QMinMax !== undefined && message.QMinMax !== 0) {
      obj.QMinMax = message.QMinMax;
    }
    if (message.QMin !== undefined && message.QMin !== 0) {
      obj.QMin = message.QMin;
    }
    if (message.QMax !== undefined && message.QMax !== 0) {
      obj.QMax = message.QMax;
    }
    if (message.IsQReactiveSlaveable !== undefined && message.IsQReactiveSlaveable !== false) {
      obj.IsQReactiveSlaveable = message.IsQReactiveSlaveable;
    }
    if (message.IsQPowerFactorSlaveable !== undefined && message.IsQPowerFactorSlaveable !== false) {
      obj.IsQPowerFactorSlaveable = message.IsQPowerFactorSlaveable;
    }
    if (message.IsUSlaveable !== undefined && message.IsUSlaveable !== false) {
      obj.IsUSlaveable = message.IsUSlaveable;
    }
    if (message.isFRTSupportedCount !== undefined && message.isFRTSupportedCount !== 0) {
      obj.isFRTSupportedCount = Math.round(message.isFRTSupportedCount);
    }
    if (message.isVoltageFRTActiveCount !== undefined && message.isVoltageFRTActiveCount !== 0) {
      obj.isVoltageFRTActiveCount = Math.round(message.isVoltageFRTActiveCount);
    }
    if (message.VoltageReference !== undefined && message.VoltageReference !== 0) {
      obj.VoltageReference = message.VoltageReference;
    }
    if (message.InscopeCount !== undefined && message.InscopeCount !== 0) {
      obj.InscopeCount = Math.round(message.InscopeCount);
    }
    if (message.PowerBalancingOutput !== undefined && message.PowerBalancingOutput !== 0) {
      obj.PowerBalancingOutput = message.PowerBalancingOutput;
    }
    if (message.PConnectLimit !== undefined && message.PConnectLimit !== 0) {
      obj.PConnectLimit = message.PConnectLimit;
    }
    if (message.PDisconnectLimit !== undefined && message.PDisconnectLimit !== 0) {
      obj.PDisconnectLimit = message.PDisconnectLimit;
    }
    if (message.QConnectLimit !== undefined && message.QConnectLimit !== 0) {
      obj.QConnectLimit = message.QConnectLimit;
    }
    if (message.QDisconnectLimit !== undefined && message.QDisconnectLimit !== 0) {
      obj.QDisconnectLimit = message.QDisconnectLimit;
    }
    if (message.ConnectDelay !== undefined && message.ConnectDelay !== 0) {
      obj.ConnectDelay = message.ConnectDelay;
    }
    if (message.DisconnectDelay !== undefined && message.DisconnectDelay !== 0) {
      obj.DisconnectDelay = message.DisconnectDelay;
    }
    if (message.MinimumConnectedPeriod !== undefined && message.MinimumConnectedPeriod !== 0) {
      obj.MinimumConnectedPeriod = message.MinimumConnectedPeriod;
    }
    if (message.MinimumDisconnectedPeriod !== undefined && message.MinimumDisconnectedPeriod !== 0) {
      obj.MinimumDisconnectedPeriod = message.MinimumDisconnectedPeriod;
    }
    if (message.NumberOfOperations !== undefined && message.NumberOfOperations !== 0) {
      obj.NumberOfOperations = Math.round(message.NumberOfOperations);
    }
    if (message.DiscreteDeviceStatus !== undefined && message.DiscreteDeviceStatus !== 0) {
      obj.DiscreteDeviceStatus = Math.round(message.DiscreteDeviceStatus);
    }
    if (message.KeepAlive !== undefined && message.KeepAlive !== 0) {
      obj.KeepAlive = Math.round(message.KeepAlive);
    }
    if (message.Anomaly !== undefined && message.Anomaly !== false) {
      obj.Anomaly = message.Anomaly;
    }
    if (message.CloseLockState !== undefined && message.CloseLockState !== false) {
      obj.CloseLockState = message.CloseLockState;
    }
    if (message.OpenLockState !== undefined && message.OpenLockState !== false) {
      obj.OpenLockState = message.OpenLockState;
    }
    if (message.SecondaryContributorState !== undefined && message.SecondaryContributorState !== 0) {
      obj.SecondaryContributorState = Math.round(message.SecondaryContributorState);
    }
    if (message.UCtrlEnabled !== undefined && message.UCtrlEnabled !== false) {
      obj.UCtrlEnabled = message.UCtrlEnabled;
    }
    if (message.QReference !== undefined && message.QReference !== 0) {
      obj.QReference = message.QReference;
    }
    if (message.QPFReference !== undefined && message.QPFReference !== 0) {
      obj.QPFReference = message.QPFReference;
    }
    if (message.UReference !== undefined && message.UReference !== 0) {
      obj.UReference = message.UReference;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneratorSubscription_Generator_ReactivePower>, I>>(
    base?: I,
  ): GeneratorSubscription_Generator_ReactivePower {
    return GeneratorSubscription_Generator_ReactivePower.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneratorSubscription_Generator_ReactivePower>, I>>(
    object: I,
  ): GeneratorSubscription_Generator_ReactivePower {
    const message = createBaseGeneratorSubscription_Generator_ReactivePower();
    message.QMinMax = object.QMinMax ?? 0;
    message.QMin = object.QMin ?? 0;
    message.QMax = object.QMax ?? 0;
    message.IsQReactiveSlaveable = object.IsQReactiveSlaveable ?? false;
    message.IsQPowerFactorSlaveable = object.IsQPowerFactorSlaveable ?? false;
    message.IsUSlaveable = object.IsUSlaveable ?? false;
    message.isFRTSupportedCount = object.isFRTSupportedCount ?? 0;
    message.isVoltageFRTActiveCount = object.isVoltageFRTActiveCount ?? 0;
    message.VoltageReference = object.VoltageReference ?? 0;
    message.InscopeCount = object.InscopeCount ?? 0;
    message.PowerBalancingOutput = object.PowerBalancingOutput ?? 0;
    message.PConnectLimit = object.PConnectLimit ?? 0;
    message.PDisconnectLimit = object.PDisconnectLimit ?? 0;
    message.QConnectLimit = object.QConnectLimit ?? 0;
    message.QDisconnectLimit = object.QDisconnectLimit ?? 0;
    message.ConnectDelay = object.ConnectDelay ?? 0;
    message.DisconnectDelay = object.DisconnectDelay ?? 0;
    message.MinimumConnectedPeriod = object.MinimumConnectedPeriod ?? 0;
    message.MinimumDisconnectedPeriod = object.MinimumDisconnectedPeriod ?? 0;
    message.NumberOfOperations = object.NumberOfOperations ?? 0;
    message.DiscreteDeviceStatus = object.DiscreteDeviceStatus ?? 0;
    message.KeepAlive = object.KeepAlive ?? 0;
    message.Anomaly = object.Anomaly ?? false;
    message.CloseLockState = object.CloseLockState ?? false;
    message.OpenLockState = object.OpenLockState ?? false;
    message.SecondaryContributorState = object.SecondaryContributorState ?? 0;
    message.UCtrlEnabled = object.UCtrlEnabled ?? false;
    message.QReference = object.QReference ?? 0;
    message.QPFReference = object.QPFReference ?? 0;
    message.UReference = object.UReference ?? 0;
    return message;
  },
};

function createBaseGeneratorSubscription_Generator_GridMeasurement(): GeneratorSubscription_Generator_GridMeasurement {
  return {
    GMSStatus: 0,
    ActivePower: 0,
    ReactivePower: 0,
    NominalVoltage: 0,
    Frequency: 0,
    NormalisedVoltage: 0,
    ActivePowerQuality: 0,
    ReactivePowerQuality: 0,
    VoltageQuality: 0,
    FrequencyQuality: 0,
  };
}

export const GeneratorSubscription_Generator_GridMeasurement = {
  fromJSON(object: any): GeneratorSubscription_Generator_GridMeasurement {
    return {
      GMSStatus: isSet(object.GMSStatus) ? gt.Number(object.GMSStatus) : 0,
      ActivePower: isSet(object.ActivePower) ? gt.Number(object.ActivePower) : 0,
      ReactivePower: isSet(object.ReactivePower) ? gt.Number(object.ReactivePower) : 0,
      NominalVoltage: isSet(object.NominalVoltage) ? gt.Number(object.NominalVoltage) : 0,
      Frequency: isSet(object.Frequency) ? gt.Number(object.Frequency) : 0,
      NormalisedVoltage: isSet(object.NormalisedVoltage) ? gt.Number(object.NormalisedVoltage) : 0,
      ActivePowerQuality: isSet(object.ActivePowerQuality) ? gt.Number(object.ActivePowerQuality) : 0,
      ReactivePowerQuality: isSet(object.ReactivePowerQuality) ? gt.Number(object.ReactivePowerQuality) : 0,
      VoltageQuality: isSet(object.VoltageQuality) ? gt.Number(object.VoltageQuality) : 0,
      FrequencyQuality: isSet(object.FrequencyQuality) ? gt.Number(object.FrequencyQuality) : 0,
    };
  },

  toJSON(message: GeneratorSubscription_Generator_GridMeasurement): unknown {
    const obj: any = {};
    if (message.GMSStatus !== undefined && message.GMSStatus !== 0) {
      obj.GMSStatus = Math.round(message.GMSStatus);
    }
    if (message.ActivePower !== undefined && message.ActivePower !== 0) {
      obj.ActivePower = message.ActivePower;
    }
    if (message.ReactivePower !== undefined && message.ReactivePower !== 0) {
      obj.ReactivePower = message.ReactivePower;
    }
    if (message.NominalVoltage !== undefined && message.NominalVoltage !== 0) {
      obj.NominalVoltage = message.NominalVoltage;
    }
    if (message.Frequency !== undefined && message.Frequency !== 0) {
      obj.Frequency = message.Frequency;
    }
    if (message.NormalisedVoltage !== undefined && message.NormalisedVoltage !== 0) {
      obj.NormalisedVoltage = message.NormalisedVoltage;
    }
    if (message.ActivePowerQuality !== undefined && message.ActivePowerQuality !== 0) {
      obj.ActivePowerQuality = Math.round(message.ActivePowerQuality);
    }
    if (message.ReactivePowerQuality !== undefined && message.ReactivePowerQuality !== 0) {
      obj.ReactivePowerQuality = Math.round(message.ReactivePowerQuality);
    }
    if (message.VoltageQuality !== undefined && message.VoltageQuality !== 0) {
      obj.VoltageQuality = Math.round(message.VoltageQuality);
    }
    if (message.FrequencyQuality !== undefined && message.FrequencyQuality !== 0) {
      obj.FrequencyQuality = Math.round(message.FrequencyQuality);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneratorSubscription_Generator_GridMeasurement>, I>>(
    base?: I,
  ): GeneratorSubscription_Generator_GridMeasurement {
    return GeneratorSubscription_Generator_GridMeasurement.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneratorSubscription_Generator_GridMeasurement>, I>>(
    object: I,
  ): GeneratorSubscription_Generator_GridMeasurement {
    const message = createBaseGeneratorSubscription_Generator_GridMeasurement();
    message.GMSStatus = object.GMSStatus ?? 0;
    message.ActivePower = object.ActivePower ?? 0;
    message.ReactivePower = object.ReactivePower ?? 0;
    message.NominalVoltage = object.NominalVoltage ?? 0;
    message.Frequency = object.Frequency ?? 0;
    message.NormalisedVoltage = object.NormalisedVoltage ?? 0;
    message.ActivePowerQuality = object.ActivePowerQuality ?? 0;
    message.ReactivePowerQuality = object.ReactivePowerQuality ?? 0;
    message.VoltageQuality = object.VoltageQuality ?? 0;
    message.FrequencyQuality = object.FrequencyQuality ?? 0;
    return message;
  },
};

function createBaseGeneratorSubscription_Generator_References(): GeneratorSubscription_Generator_References {
  return {
    PReference: 0,
    QReference: 0,
    QPFReference: 0,
    UReference: 0,
    Open: false,
    Close: false,
    ConnectSecondaryContributor: false,
    DisconnectSecondaryContributor: false,
  };
}

export const GeneratorSubscription_Generator_References = {
  fromJSON(object: any): GeneratorSubscription_Generator_References {
    return {
      PReference: isSet(object.PReference) ? gt.Number(object.PReference) : 0,
      QReference: isSet(object.QReference) ? gt.Number(object.QReference) : 0,
      QPFReference: isSet(object.QPFReference) ? gt.Number(object.QPFReference) : 0,
      UReference: isSet(object.UReference) ? gt.Number(object.UReference) : 0,
      Open: isSet(object.Open) ? gt.Boolean(object.Open) : false,
      Close: isSet(object.Close) ? gt.Boolean(object.Close) : false,
      ConnectSecondaryContributor: isSet(object.ConnectSecondaryContributor)
        ? gt.Boolean(object.ConnectSecondaryContributor)
        : false,
      DisconnectSecondaryContributor: isSet(object.DisconnectSecondaryContributor)
        ? gt.Boolean(object.DisconnectSecondaryContributor)
        : false,
    };
  },

  toJSON(message: GeneratorSubscription_Generator_References): unknown {
    const obj: any = {};
    if (message.PReference !== undefined && message.PReference !== 0) {
      obj.PReference = message.PReference;
    }
    if (message.QReference !== undefined && message.QReference !== 0) {
      obj.QReference = message.QReference;
    }
    if (message.QPFReference !== undefined && message.QPFReference !== 0) {
      obj.QPFReference = message.QPFReference;
    }
    if (message.UReference !== undefined && message.UReference !== 0) {
      obj.UReference = message.UReference;
    }
    if (message.Open !== undefined && message.Open !== false) {
      obj.Open = message.Open;
    }
    if (message.Close !== undefined && message.Close !== false) {
      obj.Close = message.Close;
    }
    if (message.ConnectSecondaryContributor !== undefined && message.ConnectSecondaryContributor !== false) {
      obj.ConnectSecondaryContributor = message.ConnectSecondaryContributor;
    }
    if (message.DisconnectSecondaryContributor !== undefined && message.DisconnectSecondaryContributor !== false) {
      obj.DisconnectSecondaryContributor = message.DisconnectSecondaryContributor;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneratorSubscription_Generator_References>, I>>(
    base?: I,
  ): GeneratorSubscription_Generator_References {
    return GeneratorSubscription_Generator_References.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneratorSubscription_Generator_References>, I>>(
    object: I,
  ): GeneratorSubscription_Generator_References {
    const message = createBaseGeneratorSubscription_Generator_References();
    message.PReference = object.PReference ?? 0;
    message.QReference = object.QReference ?? 0;
    message.QPFReference = object.QPFReference ?? 0;
    message.UReference = object.UReference ?? 0;
    message.Open = object.Open ?? false;
    message.Close = object.Close ?? false;
    message.ConnectSecondaryContributor = object.ConnectSecondaryContributor ?? false;
    message.DisconnectSecondaryContributor = object.DisconnectSecondaryContributor ?? false;
    return message;
  },
};

function createBaseTurbineSubscription(): TurbineSubscription {
  return { sampleTime: 0, turbine: [] };
}

export const TurbineSubscription = {
  fromJSON(object: any): TurbineSubscription {
    return {
      sampleTime: isSet(object.sampleTime) ? gt.Number(object.sampleTime) : 0,
      turbine: gt.Array.isArray(object?.turbine)
        ? object.turbine.map((e: any) => TurbineSubscription_Turbine.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TurbineSubscription): unknown {
    const obj: any = {};
    if (message.sampleTime !== undefined && message.sampleTime !== 0) {
      obj.sampleTime = Math.round(message.sampleTime);
    }
    if (message.turbine?.length) {
      obj.turbine = message.turbine.map((e) => TurbineSubscription_Turbine.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TurbineSubscription>, I>>(base?: I): TurbineSubscription {
    return TurbineSubscription.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TurbineSubscription>, I>>(object: I): TurbineSubscription {
    const message = createBaseTurbineSubscription();
    message.sampleTime = object.sampleTime ?? 0;
    message.turbine = object.turbine?.map((e) => TurbineSubscription_Turbine.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTurbineSubscription_Turbine(): TurbineSubscription_Turbine {
  return {
    turbineName: "",
    sourceTimeStamp: 0,
    groupName: "",
    controllerType: TurbineSubscription_Turbine_ControllerType.STC1,
    commStatus: TurbineSubscription_Turbine_CommStatus.UnknownComm,
    reactivePower: 0,
    voltage: 0,
    activePower: undefined,
    frequency: 0,
    availablePower: 0,
    rawAvailablePower: 0,
    wtOperationState: TurbineSubscription_Turbine_TurbineStatus.UnknownStatus,
    windSpeed: 0,
    remoteEnabled: false,
    powerReference: 0,
    ipcStatus: TurbineSubscription_Turbine_IpcStatus.UnknownIpcStatus,
    converterRunning: false,
    reactiveReference: 0,
    inertialResponse: undefined,
    assignPowerRef: 0,
    availablePowerFiltered: 0,
    pUsability: TurbineSubscription_Turbine_PowerUsability.UnknownPUsability,
    vUsability: TurbineSubscription_Turbine_VoltageUsability.UnknownVUsability,
    fallBackInformation: undefined,
    parPCtrlEnabled: false,
    parUCtrlEnabled: false,
    islandModeState: TurbineSubscription_Turbine_IslandModeState.IslandModeStateInactive,
    islandModeSetting: TurbineSubscription_Turbine_IslandModeSetting.IslandModeSettingPassive,
    powerRateChange: 0,
    isTargetCommOk: false,
    availablePowerBoost: 0,
    vModeInfo: undefined,
    sdsReadRTT: 0,
    isVFRTActive: false,
    manPowerRef: 0,
    manVoltageRef: 0,
    curtailmentPriority: 0,
    dmolPercentage: 0,
    isEventTriggered: false,
    reactivePowerBalancing: undefined,
    frtVoltageLimits: undefined,
    reactivePowerCapabilities: undefined,
    ratedPower: 0,
    curtailmentData: undefined,
    references: undefined,
    referencesFeedback: undefined,
    curtailmentStopData: undefined,
    towerDampingData: undefined,
    estimatedAvailablePowerBoost: 0,
    dmol: 0,
    powerRateChangeDown: 0,
    maxPowerReferencePct: 0,
    ceasePData: undefined,
    ambientTemp: 0,
    reactivePriority: 0,
    ratedPowerBoost: 0,
    staticOperationalLimit: 0,
    activeStopsByPPC: 0,
    activeStopsInTotal: 0,
    remotePPCStopState: TurbineSubscription_Turbine_RemotePPCStopState.Uninitialized,
    softRestorationLimit: 0,
    isIRTurActive: false,
    turbineStatus: TurbineSubscription_Turbine_TurbineCommunicationStatus.Ok,
    qMinMax: 0,
    poatdStateData: undefined,
    communicationSecure: false,
  };
}

export const TurbineSubscription_Turbine = {
  fromJSON(object: any): TurbineSubscription_Turbine {
    return {
      turbineName: isSet(object.turbineName) ? gt.String(object.turbineName) : "",
      sourceTimeStamp: isSet(object.sourceTimeStamp) ? gt.Number(object.sourceTimeStamp) : 0,
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      controllerType: isSet(object.controllerType)
        ? turbineSubscription_Turbine_ControllerTypeFromJSON(object.controllerType)
        : TurbineSubscription_Turbine_ControllerType.STC1,
      commStatus: isSet(object.commStatus)
        ? turbineSubscription_Turbine_CommStatusFromJSON(object.commStatus)
        : TurbineSubscription_Turbine_CommStatus.UnknownComm,
      reactivePower: isSet(object.reactivePower) ? gt.Number(object.reactivePower) : 0,
      voltage: isSet(object.voltage) ? gt.Number(object.voltage) : 0,
      activePower: isSet(object.activePower)
        ? TurbineSubscription_Turbine_GeneratorDataPoint.fromJSON(object.activePower)
        : undefined,
      frequency: isSet(object.frequency) ? gt.Number(object.frequency) : 0,
      availablePower: isSet(object.availablePower) ? gt.Number(object.availablePower) : 0,
      rawAvailablePower: isSet(object.rawAvailablePower) ? gt.Number(object.rawAvailablePower) : 0,
      wtOperationState: isSet(object.wtOperationState)
        ? turbineSubscription_Turbine_TurbineStatusFromJSON(object.wtOperationState)
        : TurbineSubscription_Turbine_TurbineStatus.UnknownStatus,
      windSpeed: isSet(object.windSpeed) ? gt.Number(object.windSpeed) : 0,
      remoteEnabled: isSet(object.remoteEnabled) ? gt.Boolean(object.remoteEnabled) : false,
      powerReference: isSet(object.powerReference) ? gt.Number(object.powerReference) : 0,
      ipcStatus: isSet(object.ipcStatus)
        ? turbineSubscription_Turbine_IpcStatusFromJSON(object.ipcStatus)
        : TurbineSubscription_Turbine_IpcStatus.UnknownIpcStatus,
      converterRunning: isSet(object.converterRunning) ? gt.Boolean(object.converterRunning) : false,
      reactiveReference: isSet(object.reactiveReference) ? gt.Number(object.reactiveReference) : 0,
      inertialResponse: isSet(object.inertialResponse)
        ? TurbineSubscription_Turbine_InertialResponseInformation.fromJSON(object.inertialResponse)
        : undefined,
      assignPowerRef: isSet(object.assignPowerRef) ? gt.Number(object.assignPowerRef) : 0,
      availablePowerFiltered: isSet(object.availablePowerFiltered) ? gt.Number(object.availablePowerFiltered) : 0,
      pUsability: isSet(object.pUsability)
        ? turbineSubscription_Turbine_PowerUsabilityFromJSON(object.pUsability)
        : TurbineSubscription_Turbine_PowerUsability.UnknownPUsability,
      vUsability: isSet(object.vUsability)
        ? turbineSubscription_Turbine_VoltageUsabilityFromJSON(object.vUsability)
        : TurbineSubscription_Turbine_VoltageUsability.UnknownVUsability,
      fallBackInformation: isSet(object.fallBackInformation)
        ? TurbineSubscription_Turbine_FallBackInformation.fromJSON(object.fallBackInformation)
        : undefined,
      parPCtrlEnabled: isSet(object.parPCtrlEnabled) ? gt.Boolean(object.parPCtrlEnabled) : false,
      parUCtrlEnabled: isSet(object.parUCtrlEnabled) ? gt.Boolean(object.parUCtrlEnabled) : false,
      islandModeState: isSet(object.islandModeState)
        ? turbineSubscription_Turbine_IslandModeStateFromJSON(object.islandModeState)
        : TurbineSubscription_Turbine_IslandModeState.IslandModeStateInactive,
      islandModeSetting: isSet(object.islandModeSetting)
        ? turbineSubscription_Turbine_IslandModeSettingFromJSON(object.islandModeSetting)
        : TurbineSubscription_Turbine_IslandModeSetting.IslandModeSettingPassive,
      powerRateChange: isSet(object.powerRateChange) ? gt.Number(object.powerRateChange) : 0,
      isTargetCommOk: isSet(object.isTargetCommOk) ? gt.Boolean(object.isTargetCommOk) : false,
      availablePowerBoost: isSet(object.availablePowerBoost) ? gt.Number(object.availablePowerBoost) : 0,
      vModeInfo: isSet(object.vModeInfo)
        ? TurbineSubscription_Turbine_VModeInformation.fromJSON(object.vModeInfo)
        : undefined,
      sdsReadRTT: isSet(object.sdsReadRTT) ? gt.Number(object.sdsReadRTT) : 0,
      isVFRTActive: isSet(object.isVFRTActive) ? gt.Boolean(object.isVFRTActive) : false,
      manPowerRef: isSet(object.manPowerRef) ? gt.Number(object.manPowerRef) : 0,
      manVoltageRef: isSet(object.manVoltageRef) ? gt.Number(object.manVoltageRef) : 0,
      curtailmentPriority: isSet(object.curtailmentPriority) ? gt.Number(object.curtailmentPriority) : 0,
      dmolPercentage: isSet(object.dmolPercentage) ? gt.Number(object.dmolPercentage) : 0,
      isEventTriggered: isSet(object.isEventTriggered) ? gt.Boolean(object.isEventTriggered) : false,
      reactivePowerBalancing: isSet(object.reactivePowerBalancing)
        ? TurbineSubscription_Turbine_ReactivePowerBalancing.fromJSON(object.reactivePowerBalancing)
        : undefined,
      frtVoltageLimits: isSet(object.frtVoltageLimits)
        ? TurbineSubscription_Turbine_FrtVoltageLimits.fromJSON(object.frtVoltageLimits)
        : undefined,
      reactivePowerCapabilities: isSet(object.reactivePowerCapabilities)
        ? TurbineSubscription_Turbine_ReactivePowerCapabilities.fromJSON(object.reactivePowerCapabilities)
        : undefined,
      ratedPower: isSet(object.ratedPower) ? gt.Number(object.ratedPower) : 0,
      curtailmentData: isSet(object.curtailmentData)
        ? TurbineSubscription_Turbine_CurtailmentData.fromJSON(object.curtailmentData)
        : undefined,
      references: isSet(object.references)
        ? TurbineSubscription_Turbine_References.fromJSON(object.references)
        : undefined,
      referencesFeedback: isSet(object.referencesFeedback)
        ? TurbineSubscription_Turbine_References.fromJSON(object.referencesFeedback)
        : undefined,
      curtailmentStopData: isSet(object.curtailmentStopData)
        ? TurbineSubscription_Turbine_CurtailmentStopData.fromJSON(object.curtailmentStopData)
        : undefined,
      towerDampingData: isSet(object.towerDampingData)
        ? TurbineSubscription_Turbine_TowerDampingData.fromJSON(object.towerDampingData)
        : undefined,
      estimatedAvailablePowerBoost: isSet(object.estimatedAvailablePowerBoost)
        ? gt.Number(object.estimatedAvailablePowerBoost)
        : 0,
      dmol: isSet(object.dmol) ? gt.Number(object.dmol) : 0,
      powerRateChangeDown: isSet(object.powerRateChangeDown) ? gt.Number(object.powerRateChangeDown) : 0,
      maxPowerReferencePct: isSet(object.maxPowerReferencePct) ? gt.Number(object.maxPowerReferencePct) : 0,
      ceasePData: isSet(object.ceasePData)
        ? TurbineSubscription_Turbine_CeasePData.fromJSON(object.ceasePData)
        : undefined,
      ambientTemp: isSet(object.ambientTemp) ? gt.Number(object.ambientTemp) : 0,
      reactivePriority: isSet(object.reactivePriority) ? gt.Number(object.reactivePriority) : 0,
      ratedPowerBoost: isSet(object.ratedPowerBoost) ? gt.Number(object.ratedPowerBoost) : 0,
      staticOperationalLimit: isSet(object.staticOperationalLimit) ? gt.Number(object.staticOperationalLimit) : 0,
      activeStopsByPPC: isSet(object.activeStopsByPPC) ? gt.Number(object.activeStopsByPPC) : 0,
      activeStopsInTotal: isSet(object.activeStopsInTotal) ? gt.Number(object.activeStopsInTotal) : 0,
      remotePPCStopState: isSet(object.remotePPCStopState)
        ? turbineSubscription_Turbine_RemotePPCStopStateFromJSON(object.remotePPCStopState)
        : TurbineSubscription_Turbine_RemotePPCStopState.Uninitialized,
      softRestorationLimit: isSet(object.softRestorationLimit) ? gt.Number(object.softRestorationLimit) : 0,
      isIRTurActive: isSet(object.isIRTurActive) ? gt.Boolean(object.isIRTurActive) : false,
      turbineStatus: isSet(object.turbineStatus)
        ? turbineSubscription_Turbine_TurbineCommunicationStatusFromJSON(object.turbineStatus)
        : TurbineSubscription_Turbine_TurbineCommunicationStatus.Ok,
      qMinMax: isSet(object.qMinMax) ? gt.Number(object.qMinMax) : 0,
      poatdStateData: isSet(object.poatdStateData)
        ? TurbineSubscription_Turbine_POATDStateData.fromJSON(object.poatdStateData)
        : undefined,
      communicationSecure: isSet(object.communicationSecure) ? gt.Boolean(object.communicationSecure) : false,
    };
  },

  toJSON(message: TurbineSubscription_Turbine): unknown {
    const obj: any = {};
    if (message.turbineName !== undefined && message.turbineName !== "") {
      obj.turbineName = message.turbineName;
    }
    if (message.sourceTimeStamp !== undefined && message.sourceTimeStamp !== 0) {
      obj.sourceTimeStamp = Math.round(message.sourceTimeStamp);
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (
      message.controllerType !== undefined && message.controllerType !== TurbineSubscription_Turbine_ControllerType.WTC2
    ) {
      obj.controllerType = turbineSubscription_Turbine_ControllerTypeToJSON(message.controllerType);
    }
    if (message.commStatus !== undefined && message.commStatus !== TurbineSubscription_Turbine_CommStatus.ETCommOK) {
      obj.commStatus = turbineSubscription_Turbine_CommStatusToJSON(message.commStatus);
    }
    if (message.reactivePower !== undefined && message.reactivePower !== 0) {
      obj.reactivePower = message.reactivePower;
    }
    if (message.voltage !== undefined && message.voltage !== 0) {
      obj.voltage = message.voltage;
    }
    if (message.activePower !== undefined) {
      obj.activePower = TurbineSubscription_Turbine_GeneratorDataPoint.toJSON(message.activePower);
    }
    if (message.frequency !== undefined && message.frequency !== 0) {
      obj.frequency = message.frequency;
    }
    if (message.availablePower !== undefined && message.availablePower !== 0) {
      obj.availablePower = message.availablePower;
    }
    if (message.rawAvailablePower !== undefined && message.rawAvailablePower !== 0) {
      obj.rawAvailablePower = message.rawAvailablePower;
    }
    if (
      message.wtOperationState !== undefined &&
      message.wtOperationState !== TurbineSubscription_Turbine_TurbineStatus.OperatingOnGrid
    ) {
      obj.wtOperationState = turbineSubscription_Turbine_TurbineStatusToJSON(message.wtOperationState);
    }
    if (message.windSpeed !== undefined && message.windSpeed !== 0) {
      obj.windSpeed = message.windSpeed;
    }
    if (message.remoteEnabled !== undefined && message.remoteEnabled !== false) {
      obj.remoteEnabled = message.remoteEnabled;
    }
    if (message.powerReference !== undefined && message.powerReference !== 0) {
      obj.powerReference = message.powerReference;
    }
    if (message.ipcStatus !== undefined && message.ipcStatus !== TurbineSubscription_Turbine_IpcStatus.IpcDataOk) {
      obj.ipcStatus = turbineSubscription_Turbine_IpcStatusToJSON(message.ipcStatus);
    }
    if (message.converterRunning !== undefined && message.converterRunning !== false) {
      obj.converterRunning = message.converterRunning;
    }
    if (message.reactiveReference !== undefined && message.reactiveReference !== 0) {
      obj.reactiveReference = message.reactiveReference;
    }
    if (message.inertialResponse !== undefined) {
      obj.inertialResponse = TurbineSubscription_Turbine_InertialResponseInformation.toJSON(message.inertialResponse);
    }
    if (message.assignPowerRef !== undefined && message.assignPowerRef !== 0) {
      obj.assignPowerRef = Math.round(message.assignPowerRef);
    }
    if (message.availablePowerFiltered !== undefined && message.availablePowerFiltered !== 0) {
      obj.availablePowerFiltered = message.availablePowerFiltered;
    }
    if (
      message.pUsability !== undefined && message.pUsability !== TurbineSubscription_Turbine_PowerUsability.PUsabilityOK
    ) {
      obj.pUsability = turbineSubscription_Turbine_PowerUsabilityToJSON(message.pUsability);
    }
    if (
      message.vUsability !== undefined &&
      message.vUsability !== TurbineSubscription_Turbine_VoltageUsability.VUsabilityOK
    ) {
      obj.vUsability = turbineSubscription_Turbine_VoltageUsabilityToJSON(message.vUsability);
    }
    if (message.fallBackInformation !== undefined) {
      obj.fallBackInformation = TurbineSubscription_Turbine_FallBackInformation.toJSON(message.fallBackInformation);
    }
    if (message.parPCtrlEnabled !== undefined && message.parPCtrlEnabled !== false) {
      obj.parPCtrlEnabled = message.parPCtrlEnabled;
    }
    if (message.parUCtrlEnabled !== undefined && message.parUCtrlEnabled !== false) {
      obj.parUCtrlEnabled = message.parUCtrlEnabled;
    }
    if (
      message.islandModeState !== undefined &&
      message.islandModeState !== TurbineSubscription_Turbine_IslandModeState.IslandModeStateInactive
    ) {
      obj.islandModeState = turbineSubscription_Turbine_IslandModeStateToJSON(message.islandModeState);
    }
    if (
      message.islandModeSetting !== undefined &&
      message.islandModeSetting !== TurbineSubscription_Turbine_IslandModeSetting.IslandModeSettingPassive
    ) {
      obj.islandModeSetting = turbineSubscription_Turbine_IslandModeSettingToJSON(message.islandModeSetting);
    }
    if (message.powerRateChange !== undefined && message.powerRateChange !== 0) {
      obj.powerRateChange = message.powerRateChange;
    }
    if (message.isTargetCommOk !== undefined && message.isTargetCommOk !== false) {
      obj.isTargetCommOk = message.isTargetCommOk;
    }
    if (message.availablePowerBoost !== undefined && message.availablePowerBoost !== 0) {
      obj.availablePowerBoost = message.availablePowerBoost;
    }
    if (message.vModeInfo !== undefined) {
      obj.vModeInfo = TurbineSubscription_Turbine_VModeInformation.toJSON(message.vModeInfo);
    }
    if (message.sdsReadRTT !== undefined && message.sdsReadRTT !== 0) {
      obj.sdsReadRTT = Math.round(message.sdsReadRTT);
    }
    if (message.isVFRTActive !== undefined && message.isVFRTActive !== false) {
      obj.isVFRTActive = message.isVFRTActive;
    }
    if (message.manPowerRef !== undefined && message.manPowerRef !== 0) {
      obj.manPowerRef = message.manPowerRef;
    }
    if (message.manVoltageRef !== undefined && message.manVoltageRef !== 0) {
      obj.manVoltageRef = message.manVoltageRef;
    }
    if (message.curtailmentPriority !== undefined && message.curtailmentPriority !== 0) {
      obj.curtailmentPriority = Math.round(message.curtailmentPriority);
    }
    if (message.dmolPercentage !== undefined && message.dmolPercentage !== 0) {
      obj.dmolPercentage = message.dmolPercentage;
    }
    if (message.isEventTriggered !== undefined && message.isEventTriggered !== false) {
      obj.isEventTriggered = message.isEventTriggered;
    }
    if (message.reactivePowerBalancing !== undefined) {
      obj.reactivePowerBalancing = TurbineSubscription_Turbine_ReactivePowerBalancing.toJSON(
        message.reactivePowerBalancing,
      );
    }
    if (message.frtVoltageLimits !== undefined) {
      obj.frtVoltageLimits = TurbineSubscription_Turbine_FrtVoltageLimits.toJSON(message.frtVoltageLimits);
    }
    if (message.reactivePowerCapabilities !== undefined) {
      obj.reactivePowerCapabilities = TurbineSubscription_Turbine_ReactivePowerCapabilities.toJSON(
        message.reactivePowerCapabilities,
      );
    }
    if (message.ratedPower !== undefined && message.ratedPower !== 0) {
      obj.ratedPower = message.ratedPower;
    }
    if (message.curtailmentData !== undefined) {
      obj.curtailmentData = TurbineSubscription_Turbine_CurtailmentData.toJSON(message.curtailmentData);
    }
    if (message.references !== undefined) {
      obj.references = TurbineSubscription_Turbine_References.toJSON(message.references);
    }
    if (message.referencesFeedback !== undefined) {
      obj.referencesFeedback = TurbineSubscription_Turbine_References.toJSON(message.referencesFeedback);
    }
    if (message.curtailmentStopData !== undefined) {
      obj.curtailmentStopData = TurbineSubscription_Turbine_CurtailmentStopData.toJSON(message.curtailmentStopData);
    }
    if (message.towerDampingData !== undefined) {
      obj.towerDampingData = TurbineSubscription_Turbine_TowerDampingData.toJSON(message.towerDampingData);
    }
    if (message.estimatedAvailablePowerBoost !== undefined && message.estimatedAvailablePowerBoost !== 0) {
      obj.estimatedAvailablePowerBoost = message.estimatedAvailablePowerBoost;
    }
    if (message.dmol !== undefined && message.dmol !== 0) {
      obj.dmol = message.dmol;
    }
    if (message.powerRateChangeDown !== undefined && message.powerRateChangeDown !== 0) {
      obj.powerRateChangeDown = message.powerRateChangeDown;
    }
    if (message.maxPowerReferencePct !== undefined && message.maxPowerReferencePct !== 0) {
      obj.maxPowerReferencePct = message.maxPowerReferencePct;
    }
    if (message.ceasePData !== undefined) {
      obj.ceasePData = TurbineSubscription_Turbine_CeasePData.toJSON(message.ceasePData);
    }
    if (message.ambientTemp !== undefined && message.ambientTemp !== 0) {
      obj.ambientTemp = message.ambientTemp;
    }
    if (message.reactivePriority !== undefined && message.reactivePriority !== 0) {
      obj.reactivePriority = Math.round(message.reactivePriority);
    }
    if (message.ratedPowerBoost !== undefined && message.ratedPowerBoost !== 0) {
      obj.ratedPowerBoost = message.ratedPowerBoost;
    }
    if (message.staticOperationalLimit !== undefined && message.staticOperationalLimit !== 0) {
      obj.staticOperationalLimit = message.staticOperationalLimit;
    }
    if (message.activeStopsByPPC !== undefined && message.activeStopsByPPC !== 0) {
      obj.activeStopsByPPC = Math.round(message.activeStopsByPPC);
    }
    if (message.activeStopsInTotal !== undefined && message.activeStopsInTotal !== 0) {
      obj.activeStopsInTotal = Math.round(message.activeStopsInTotal);
    }
    if (
      message.remotePPCStopState !== undefined &&
      message.remotePPCStopState !== TurbineSubscription_Turbine_RemotePPCStopState.Uninitialized
    ) {
      obj.remotePPCStopState = turbineSubscription_Turbine_RemotePPCStopStateToJSON(message.remotePPCStopState);
    }
    if (message.softRestorationLimit !== undefined && message.softRestorationLimit !== 0) {
      obj.softRestorationLimit = message.softRestorationLimit;
    }
    if (message.isIRTurActive !== undefined && message.isIRTurActive !== false) {
      obj.isIRTurActive = message.isIRTurActive;
    }
    if (
      message.turbineStatus !== undefined &&
      message.turbineStatus !== TurbineSubscription_Turbine_TurbineCommunicationStatus.Ok
    ) {
      obj.turbineStatus = turbineSubscription_Turbine_TurbineCommunicationStatusToJSON(message.turbineStatus);
    }
    if (message.qMinMax !== undefined && message.qMinMax !== 0) {
      obj.qMinMax = message.qMinMax;
    }
    if (message.poatdStateData !== undefined) {
      obj.poatdStateData = TurbineSubscription_Turbine_POATDStateData.toJSON(message.poatdStateData);
    }
    if (message.communicationSecure !== undefined && message.communicationSecure !== false) {
      obj.communicationSecure = message.communicationSecure;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TurbineSubscription_Turbine>, I>>(base?: I): TurbineSubscription_Turbine {
    return TurbineSubscription_Turbine.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TurbineSubscription_Turbine>, I>>(object: I): TurbineSubscription_Turbine {
    const message = createBaseTurbineSubscription_Turbine();
    message.turbineName = object.turbineName ?? "";
    message.sourceTimeStamp = object.sourceTimeStamp ?? 0;
    message.groupName = object.groupName ?? "";
    message.controllerType = object.controllerType ?? TurbineSubscription_Turbine_ControllerType.STC1;
    message.commStatus = object.commStatus ?? TurbineSubscription_Turbine_CommStatus.UnknownComm;
    message.reactivePower = object.reactivePower ?? 0;
    message.voltage = object.voltage ?? 0;
    message.activePower = (object.activePower !== undefined && object.activePower !== null)
      ? TurbineSubscription_Turbine_GeneratorDataPoint.fromPartial(object.activePower)
      : undefined;
    message.frequency = object.frequency ?? 0;
    message.availablePower = object.availablePower ?? 0;
    message.rawAvailablePower = object.rawAvailablePower ?? 0;
    message.wtOperationState = object.wtOperationState ?? TurbineSubscription_Turbine_TurbineStatus.UnknownStatus;
    message.windSpeed = object.windSpeed ?? 0;
    message.remoteEnabled = object.remoteEnabled ?? false;
    message.powerReference = object.powerReference ?? 0;
    message.ipcStatus = object.ipcStatus ?? TurbineSubscription_Turbine_IpcStatus.UnknownIpcStatus;
    message.converterRunning = object.converterRunning ?? false;
    message.reactiveReference = object.reactiveReference ?? 0;
    message.inertialResponse = (object.inertialResponse !== undefined && object.inertialResponse !== null)
      ? TurbineSubscription_Turbine_InertialResponseInformation.fromPartial(object.inertialResponse)
      : undefined;
    message.assignPowerRef = object.assignPowerRef ?? 0;
    message.availablePowerFiltered = object.availablePowerFiltered ?? 0;
    message.pUsability = object.pUsability ?? TurbineSubscription_Turbine_PowerUsability.UnknownPUsability;
    message.vUsability = object.vUsability ?? TurbineSubscription_Turbine_VoltageUsability.UnknownVUsability;
    message.fallBackInformation = (object.fallBackInformation !== undefined && object.fallBackInformation !== null)
      ? TurbineSubscription_Turbine_FallBackInformation.fromPartial(object.fallBackInformation)
      : undefined;
    message.parPCtrlEnabled = object.parPCtrlEnabled ?? false;
    message.parUCtrlEnabled = object.parUCtrlEnabled ?? false;
    message.islandModeState = object.islandModeState ??
      TurbineSubscription_Turbine_IslandModeState.IslandModeStateInactive;
    message.islandModeSetting = object.islandModeSetting ??
      TurbineSubscription_Turbine_IslandModeSetting.IslandModeSettingPassive;
    message.powerRateChange = object.powerRateChange ?? 0;
    message.isTargetCommOk = object.isTargetCommOk ?? false;
    message.availablePowerBoost = object.availablePowerBoost ?? 0;
    message.vModeInfo = (object.vModeInfo !== undefined && object.vModeInfo !== null)
      ? TurbineSubscription_Turbine_VModeInformation.fromPartial(object.vModeInfo)
      : undefined;
    message.sdsReadRTT = object.sdsReadRTT ?? 0;
    message.isVFRTActive = object.isVFRTActive ?? false;
    message.manPowerRef = object.manPowerRef ?? 0;
    message.manVoltageRef = object.manVoltageRef ?? 0;
    message.curtailmentPriority = object.curtailmentPriority ?? 0;
    message.dmolPercentage = object.dmolPercentage ?? 0;
    message.isEventTriggered = object.isEventTriggered ?? false;
    message.reactivePowerBalancing =
      (object.reactivePowerBalancing !== undefined && object.reactivePowerBalancing !== null)
        ? TurbineSubscription_Turbine_ReactivePowerBalancing.fromPartial(object.reactivePowerBalancing)
        : undefined;
    message.frtVoltageLimits = (object.frtVoltageLimits !== undefined && object.frtVoltageLimits !== null)
      ? TurbineSubscription_Turbine_FrtVoltageLimits.fromPartial(object.frtVoltageLimits)
      : undefined;
    message.reactivePowerCapabilities =
      (object.reactivePowerCapabilities !== undefined && object.reactivePowerCapabilities !== null)
        ? TurbineSubscription_Turbine_ReactivePowerCapabilities.fromPartial(object.reactivePowerCapabilities)
        : undefined;
    message.ratedPower = object.ratedPower ?? 0;
    message.curtailmentData = (object.curtailmentData !== undefined && object.curtailmentData !== null)
      ? TurbineSubscription_Turbine_CurtailmentData.fromPartial(object.curtailmentData)
      : undefined;
    message.references = (object.references !== undefined && object.references !== null)
      ? TurbineSubscription_Turbine_References.fromPartial(object.references)
      : undefined;
    message.referencesFeedback = (object.referencesFeedback !== undefined && object.referencesFeedback !== null)
      ? TurbineSubscription_Turbine_References.fromPartial(object.referencesFeedback)
      : undefined;
    message.curtailmentStopData = (object.curtailmentStopData !== undefined && object.curtailmentStopData !== null)
      ? TurbineSubscription_Turbine_CurtailmentStopData.fromPartial(object.curtailmentStopData)
      : undefined;
    message.towerDampingData = (object.towerDampingData !== undefined && object.towerDampingData !== null)
      ? TurbineSubscription_Turbine_TowerDampingData.fromPartial(object.towerDampingData)
      : undefined;
    message.estimatedAvailablePowerBoost = object.estimatedAvailablePowerBoost ?? 0;
    message.dmol = object.dmol ?? 0;
    message.powerRateChangeDown = object.powerRateChangeDown ?? 0;
    message.maxPowerReferencePct = object.maxPowerReferencePct ?? 0;
    message.ceasePData = (object.ceasePData !== undefined && object.ceasePData !== null)
      ? TurbineSubscription_Turbine_CeasePData.fromPartial(object.ceasePData)
      : undefined;
    message.ambientTemp = object.ambientTemp ?? 0;
    message.reactivePriority = object.reactivePriority ?? 0;
    message.ratedPowerBoost = object.ratedPowerBoost ?? 0;
    message.staticOperationalLimit = object.staticOperationalLimit ?? 0;
    message.activeStopsByPPC = object.activeStopsByPPC ?? 0;
    message.activeStopsInTotal = object.activeStopsInTotal ?? 0;
    message.remotePPCStopState = object.remotePPCStopState ??
      TurbineSubscription_Turbine_RemotePPCStopState.Uninitialized;
    message.softRestorationLimit = object.softRestorationLimit ?? 0;
    message.isIRTurActive = object.isIRTurActive ?? false;
    message.turbineStatus = object.turbineStatus ?? TurbineSubscription_Turbine_TurbineCommunicationStatus.Ok;
    message.qMinMax = object.qMinMax ?? 0;
    message.poatdStateData = (object.poatdStateData !== undefined && object.poatdStateData !== null)
      ? TurbineSubscription_Turbine_POATDStateData.fromPartial(object.poatdStateData)
      : undefined;
    message.communicationSecure = object.communicationSecure ?? false;
    return message;
  },
};

function createBaseTurbineSubscription_Turbine_GeneratorDataPoint(): TurbineSubscription_Turbine_GeneratorDataPoint {
  return { value: 0, quality: TurbineSubscription_Turbine_GeneratorDataPointQuality.Good };
}

export const TurbineSubscription_Turbine_GeneratorDataPoint = {
  fromJSON(object: any): TurbineSubscription_Turbine_GeneratorDataPoint {
    return {
      value: isSet(object.value) ? gt.Number(object.value) : 0,
      quality: isSet(object.quality)
        ? turbineSubscription_Turbine_GeneratorDataPointQualityFromJSON(object.quality)
        : TurbineSubscription_Turbine_GeneratorDataPointQuality.Good,
    };
  },

  toJSON(message: TurbineSubscription_Turbine_GeneratorDataPoint): unknown {
    const obj: any = {};
    if (message.value !== undefined && message.value !== 0) {
      obj.value = message.value;
    }
    if (
      message.quality !== undefined && message.quality !== TurbineSubscription_Turbine_GeneratorDataPointQuality.Good
    ) {
      obj.quality = turbineSubscription_Turbine_GeneratorDataPointQualityToJSON(message.quality);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TurbineSubscription_Turbine_GeneratorDataPoint>, I>>(
    base?: I,
  ): TurbineSubscription_Turbine_GeneratorDataPoint {
    return TurbineSubscription_Turbine_GeneratorDataPoint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TurbineSubscription_Turbine_GeneratorDataPoint>, I>>(
    object: I,
  ): TurbineSubscription_Turbine_GeneratorDataPoint {
    const message = createBaseTurbineSubscription_Turbine_GeneratorDataPoint();
    message.value = object.value ?? 0;
    message.quality = object.quality ?? TurbineSubscription_Turbine_GeneratorDataPointQuality.Good;
    return message;
  },
};

function createBaseTurbineSubscription_Turbine_InertialResponseInformation(): TurbineSubscription_Turbine_InertialResponseInformation {
  return {
    inertiaSetPoint: 0,
    iRAvailable: 0,
    iRActual: 0,
    iRState: TurbineSubscription_Turbine_InertialResponseInformation_IRState.IRNotReady,
    iRInhibitSource: 0,
  };
}

export const TurbineSubscription_Turbine_InertialResponseInformation = {
  fromJSON(object: any): TurbineSubscription_Turbine_InertialResponseInformation {
    return {
      inertiaSetPoint: isSet(object.inertiaSetPoint) ? gt.Number(object.inertiaSetPoint) : 0,
      iRAvailable: isSet(object.iRAvailable) ? gt.Number(object.iRAvailable) : 0,
      iRActual: isSet(object.iRActual) ? gt.Number(object.iRActual) : 0,
      iRState: isSet(object.iRState)
        ? turbineSubscription_Turbine_InertialResponseInformation_IRStateFromJSON(object.iRState)
        : TurbineSubscription_Turbine_InertialResponseInformation_IRState.IRNotReady,
      iRInhibitSource: isSet(object.iRInhibitSource) ? gt.Number(object.iRInhibitSource) : 0,
    };
  },

  toJSON(message: TurbineSubscription_Turbine_InertialResponseInformation): unknown {
    const obj: any = {};
    if (message.inertiaSetPoint !== undefined && message.inertiaSetPoint !== 0) {
      obj.inertiaSetPoint = message.inertiaSetPoint;
    }
    if (message.iRAvailable !== undefined && message.iRAvailable !== 0) {
      obj.iRAvailable = message.iRAvailable;
    }
    if (message.iRActual !== undefined && message.iRActual !== 0) {
      obj.iRActual = message.iRActual;
    }
    if (
      message.iRState !== undefined &&
      message.iRState !== TurbineSubscription_Turbine_InertialResponseInformation_IRState.IRNotReady
    ) {
      obj.iRState = turbineSubscription_Turbine_InertialResponseInformation_IRStateToJSON(message.iRState);
    }
    if (message.iRInhibitSource !== undefined && message.iRInhibitSource !== 0) {
      obj.iRInhibitSource = Math.round(message.iRInhibitSource);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TurbineSubscription_Turbine_InertialResponseInformation>, I>>(
    base?: I,
  ): TurbineSubscription_Turbine_InertialResponseInformation {
    return TurbineSubscription_Turbine_InertialResponseInformation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TurbineSubscription_Turbine_InertialResponseInformation>, I>>(
    object: I,
  ): TurbineSubscription_Turbine_InertialResponseInformation {
    const message = createBaseTurbineSubscription_Turbine_InertialResponseInformation();
    message.inertiaSetPoint = object.inertiaSetPoint ?? 0;
    message.iRAvailable = object.iRAvailable ?? 0;
    message.iRActual = object.iRActual ?? 0;
    message.iRState = object.iRState ?? TurbineSubscription_Turbine_InertialResponseInformation_IRState.IRNotReady;
    message.iRInhibitSource = object.iRInhibitSource ?? 0;
    return message;
  },
};

function createBaseTurbineSubscription_Turbine_FallBackInformation(): TurbineSubscription_Turbine_FallBackInformation {
  return {
    fallBackPower: 0,
    fallBackTime: 0,
    fallBackPowerFeedback: 0,
    fallBackTimeFeedback: 0,
    qFallbackState: TurbineSubscription_Turbine_FallBackInformation_QFallbackState.NotInitialized,
    fallBackPowerRampRate: 0,
    fallBackPowerRampRateRestored: 0,
    fallBackPowerRampRateFeedback: 0,
    fallBackPowerRampRateRestoredFeedback: 0,
  };
}

export const TurbineSubscription_Turbine_FallBackInformation = {
  fromJSON(object: any): TurbineSubscription_Turbine_FallBackInformation {
    return {
      fallBackPower: isSet(object.fallBackPower) ? gt.Number(object.fallBackPower) : 0,
      fallBackTime: isSet(object.fallBackTime) ? gt.Number(object.fallBackTime) : 0,
      fallBackPowerFeedback: isSet(object.fallBackPowerFeedback) ? gt.Number(object.fallBackPowerFeedback) : 0,
      fallBackTimeFeedback: isSet(object.fallBackTimeFeedback) ? gt.Number(object.fallBackTimeFeedback) : 0,
      qFallbackState: isSet(object.qFallbackState)
        ? turbineSubscription_Turbine_FallBackInformation_QFallbackStateFromJSON(object.qFallbackState)
        : TurbineSubscription_Turbine_FallBackInformation_QFallbackState.NotInitialized,
      fallBackPowerRampRate: isSet(object.fallBackPowerRampRate) ? gt.Number(object.fallBackPowerRampRate) : 0,
      fallBackPowerRampRateRestored: isSet(object.fallBackPowerRampRateRestored)
        ? gt.Number(object.fallBackPowerRampRateRestored)
        : 0,
      fallBackPowerRampRateFeedback: isSet(object.fallBackPowerRampRateFeedback)
        ? gt.Number(object.fallBackPowerRampRateFeedback)
        : 0,
      fallBackPowerRampRateRestoredFeedback: isSet(object.fallBackPowerRampRateRestoredFeedback)
        ? gt.Number(object.fallBackPowerRampRateRestoredFeedback)
        : 0,
    };
  },

  toJSON(message: TurbineSubscription_Turbine_FallBackInformation): unknown {
    const obj: any = {};
    if (message.fallBackPower !== undefined && message.fallBackPower !== 0) {
      obj.fallBackPower = message.fallBackPower;
    }
    if (message.fallBackTime !== undefined && message.fallBackTime !== 0) {
      obj.fallBackTime = message.fallBackTime;
    }
    if (message.fallBackPowerFeedback !== undefined && message.fallBackPowerFeedback !== 0) {
      obj.fallBackPowerFeedback = message.fallBackPowerFeedback;
    }
    if (message.fallBackTimeFeedback !== undefined && message.fallBackTimeFeedback !== 0) {
      obj.fallBackTimeFeedback = message.fallBackTimeFeedback;
    }
    if (
      message.qFallbackState !== undefined &&
      message.qFallbackState !== TurbineSubscription_Turbine_FallBackInformation_QFallbackState.NotInitialized
    ) {
      obj.qFallbackState = turbineSubscription_Turbine_FallBackInformation_QFallbackStateToJSON(message.qFallbackState);
    }
    if (message.fallBackPowerRampRate !== undefined && message.fallBackPowerRampRate !== 0) {
      obj.fallBackPowerRampRate = message.fallBackPowerRampRate;
    }
    if (message.fallBackPowerRampRateRestored !== undefined && message.fallBackPowerRampRateRestored !== 0) {
      obj.fallBackPowerRampRateRestored = message.fallBackPowerRampRateRestored;
    }
    if (message.fallBackPowerRampRateFeedback !== undefined && message.fallBackPowerRampRateFeedback !== 0) {
      obj.fallBackPowerRampRateFeedback = message.fallBackPowerRampRateFeedback;
    }
    if (
      message.fallBackPowerRampRateRestoredFeedback !== undefined && message.fallBackPowerRampRateRestoredFeedback !== 0
    ) {
      obj.fallBackPowerRampRateRestoredFeedback = message.fallBackPowerRampRateRestoredFeedback;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TurbineSubscription_Turbine_FallBackInformation>, I>>(
    base?: I,
  ): TurbineSubscription_Turbine_FallBackInformation {
    return TurbineSubscription_Turbine_FallBackInformation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TurbineSubscription_Turbine_FallBackInformation>, I>>(
    object: I,
  ): TurbineSubscription_Turbine_FallBackInformation {
    const message = createBaseTurbineSubscription_Turbine_FallBackInformation();
    message.fallBackPower = object.fallBackPower ?? 0;
    message.fallBackTime = object.fallBackTime ?? 0;
    message.fallBackPowerFeedback = object.fallBackPowerFeedback ?? 0;
    message.fallBackTimeFeedback = object.fallBackTimeFeedback ?? 0;
    message.qFallbackState = object.qFallbackState ??
      TurbineSubscription_Turbine_FallBackInformation_QFallbackState.NotInitialized;
    message.fallBackPowerRampRate = object.fallBackPowerRampRate ?? 0;
    message.fallBackPowerRampRateRestored = object.fallBackPowerRampRateRestored ?? 0;
    message.fallBackPowerRampRateFeedback = object.fallBackPowerRampRateFeedback ?? 0;
    message.fallBackPowerRampRateRestoredFeedback = object.fallBackPowerRampRateRestoredFeedback ?? 0;
    return message;
  },
};

function createBaseTurbineSubscription_Turbine_VModeInformation(): TurbineSubscription_Turbine_VModeInformation {
  return {
    noPowerVoltState: TurbineSubscription_Turbine_VModeInformation_NoPowerVoltState.UnknownPowerState,
    noPowerVoltReadyness: TurbineSubscription_Turbine_VModeInformation_NoPowerVoltReadyness.UnknownVoltReady,
  };
}

export const TurbineSubscription_Turbine_VModeInformation = {
  fromJSON(object: any): TurbineSubscription_Turbine_VModeInformation {
    return {
      noPowerVoltState: isSet(object.noPowerVoltState)
        ? turbineSubscription_Turbine_VModeInformation_NoPowerVoltStateFromJSON(object.noPowerVoltState)
        : TurbineSubscription_Turbine_VModeInformation_NoPowerVoltState.UnknownPowerState,
      noPowerVoltReadyness: isSet(object.noPowerVoltReadyness)
        ? turbineSubscription_Turbine_VModeInformation_NoPowerVoltReadynessFromJSON(object.noPowerVoltReadyness)
        : TurbineSubscription_Turbine_VModeInformation_NoPowerVoltReadyness.UnknownVoltReady,
    };
  },

  toJSON(message: TurbineSubscription_Turbine_VModeInformation): unknown {
    const obj: any = {};
    if (
      message.noPowerVoltState !== undefined &&
      message.noPowerVoltState !== TurbineSubscription_Turbine_VModeInformation_NoPowerVoltState.ConverterInactive
    ) {
      obj.noPowerVoltState = turbineSubscription_Turbine_VModeInformation_NoPowerVoltStateToJSON(
        message.noPowerVoltState,
      );
    }
    if (
      message.noPowerVoltReadyness !== undefined &&
      message.noPowerVoltReadyness !==
        TurbineSubscription_Turbine_VModeInformation_NoPowerVoltReadyness.VModeNotAvailable
    ) {
      obj.noPowerVoltReadyness = turbineSubscription_Turbine_VModeInformation_NoPowerVoltReadynessToJSON(
        message.noPowerVoltReadyness,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TurbineSubscription_Turbine_VModeInformation>, I>>(
    base?: I,
  ): TurbineSubscription_Turbine_VModeInformation {
    return TurbineSubscription_Turbine_VModeInformation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TurbineSubscription_Turbine_VModeInformation>, I>>(
    object: I,
  ): TurbineSubscription_Turbine_VModeInformation {
    const message = createBaseTurbineSubscription_Turbine_VModeInformation();
    message.noPowerVoltState = object.noPowerVoltState ??
      TurbineSubscription_Turbine_VModeInformation_NoPowerVoltState.UnknownPowerState;
    message.noPowerVoltReadyness = object.noPowerVoltReadyness ??
      TurbineSubscription_Turbine_VModeInformation_NoPowerVoltReadyness.UnknownVoltReady;
    return message;
  },
};

function createBaseTurbineSubscription_Turbine_ReactivePowerBalancing(): TurbineSubscription_Turbine_ReactivePowerBalancing {
  return { Output: 0, Weight: 0, Offset: 0 };
}

export const TurbineSubscription_Turbine_ReactivePowerBalancing = {
  fromJSON(object: any): TurbineSubscription_Turbine_ReactivePowerBalancing {
    return {
      Output: isSet(object.Output) ? gt.Number(object.Output) : 0,
      Weight: isSet(object.Weight) ? gt.Number(object.Weight) : 0,
      Offset: isSet(object.Offset) ? gt.Number(object.Offset) : 0,
    };
  },

  toJSON(message: TurbineSubscription_Turbine_ReactivePowerBalancing): unknown {
    const obj: any = {};
    if (message.Output !== undefined && message.Output !== 0) {
      obj.Output = message.Output;
    }
    if (message.Weight !== undefined && message.Weight !== 0) {
      obj.Weight = message.Weight;
    }
    if (message.Offset !== undefined && message.Offset !== 0) {
      obj.Offset = message.Offset;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TurbineSubscription_Turbine_ReactivePowerBalancing>, I>>(
    base?: I,
  ): TurbineSubscription_Turbine_ReactivePowerBalancing {
    return TurbineSubscription_Turbine_ReactivePowerBalancing.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TurbineSubscription_Turbine_ReactivePowerBalancing>, I>>(
    object: I,
  ): TurbineSubscription_Turbine_ReactivePowerBalancing {
    const message = createBaseTurbineSubscription_Turbine_ReactivePowerBalancing();
    message.Output = object.Output ?? 0;
    message.Weight = object.Weight ?? 0;
    message.Offset = object.Offset ?? 0;
    return message;
  },
};

function createBaseTurbineSubscription_Turbine_FrtVoltageLimits(): TurbineSubscription_Turbine_FrtVoltageLimits {
  return { UFrtMin: 0, UFrtMax: 0 };
}

export const TurbineSubscription_Turbine_FrtVoltageLimits = {
  fromJSON(object: any): TurbineSubscription_Turbine_FrtVoltageLimits {
    return {
      UFrtMin: isSet(object.UFrtMin) ? gt.Number(object.UFrtMin) : 0,
      UFrtMax: isSet(object.UFrtMax) ? gt.Number(object.UFrtMax) : 0,
    };
  },

  toJSON(message: TurbineSubscription_Turbine_FrtVoltageLimits): unknown {
    const obj: any = {};
    if (message.UFrtMin !== undefined && message.UFrtMin !== 0) {
      obj.UFrtMin = message.UFrtMin;
    }
    if (message.UFrtMax !== undefined && message.UFrtMax !== 0) {
      obj.UFrtMax = message.UFrtMax;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TurbineSubscription_Turbine_FrtVoltageLimits>, I>>(
    base?: I,
  ): TurbineSubscription_Turbine_FrtVoltageLimits {
    return TurbineSubscription_Turbine_FrtVoltageLimits.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TurbineSubscription_Turbine_FrtVoltageLimits>, I>>(
    object: I,
  ): TurbineSubscription_Turbine_FrtVoltageLimits {
    const message = createBaseTurbineSubscription_Turbine_FrtVoltageLimits();
    message.UFrtMin = object.UFrtMin ?? 0;
    message.UFrtMax = object.UFrtMax ?? 0;
    return message;
  },
};

function createBaseTurbineSubscription_Turbine_ReactivePowerCapabilities(): TurbineSubscription_Turbine_ReactivePowerCapabilities {
  return { ConverterReactivePower: 0, ConverterReactivePowerMin: 0, ConverterReactivePowerMax: 0 };
}

export const TurbineSubscription_Turbine_ReactivePowerCapabilities = {
  fromJSON(object: any): TurbineSubscription_Turbine_ReactivePowerCapabilities {
    return {
      ConverterReactivePower: isSet(object.ConverterReactivePower) ? gt.Number(object.ConverterReactivePower) : 0,
      ConverterReactivePowerMin: isSet(object.ConverterReactivePowerMin)
        ? gt.Number(object.ConverterReactivePowerMin)
        : 0,
      ConverterReactivePowerMax: isSet(object.ConverterReactivePowerMax)
        ? gt.Number(object.ConverterReactivePowerMax)
        : 0,
    };
  },

  toJSON(message: TurbineSubscription_Turbine_ReactivePowerCapabilities): unknown {
    const obj: any = {};
    if (message.ConverterReactivePower !== undefined && message.ConverterReactivePower !== 0) {
      obj.ConverterReactivePower = message.ConverterReactivePower;
    }
    if (message.ConverterReactivePowerMin !== undefined && message.ConverterReactivePowerMin !== 0) {
      obj.ConverterReactivePowerMin = message.ConverterReactivePowerMin;
    }
    if (message.ConverterReactivePowerMax !== undefined && message.ConverterReactivePowerMax !== 0) {
      obj.ConverterReactivePowerMax = message.ConverterReactivePowerMax;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TurbineSubscription_Turbine_ReactivePowerCapabilities>, I>>(
    base?: I,
  ): TurbineSubscription_Turbine_ReactivePowerCapabilities {
    return TurbineSubscription_Turbine_ReactivePowerCapabilities.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TurbineSubscription_Turbine_ReactivePowerCapabilities>, I>>(
    object: I,
  ): TurbineSubscription_Turbine_ReactivePowerCapabilities {
    const message = createBaseTurbineSubscription_Turbine_ReactivePowerCapabilities();
    message.ConverterReactivePower = object.ConverterReactivePower ?? 0;
    message.ConverterReactivePowerMin = object.ConverterReactivePowerMin ?? 0;
    message.ConverterReactivePowerMax = object.ConverterReactivePowerMax ?? 0;
    return message;
  },
};

function createBaseTurbineSubscription_Turbine_CurtailmentData(): TurbineSubscription_Turbine_CurtailmentData {
  return { powerLimitSource: "", curtailed: TurbineSubscription_Turbine_CurtailmentData_CurtailmentStatus.No };
}

export const TurbineSubscription_Turbine_CurtailmentData = {
  fromJSON(object: any): TurbineSubscription_Turbine_CurtailmentData {
    return {
      powerLimitSource: isSet(object.powerLimitSource) ? gt.String(object.powerLimitSource) : "",
      curtailed: isSet(object.curtailed)
        ? turbineSubscription_Turbine_CurtailmentData_CurtailmentStatusFromJSON(object.curtailed)
        : TurbineSubscription_Turbine_CurtailmentData_CurtailmentStatus.No,
    };
  },

  toJSON(message: TurbineSubscription_Turbine_CurtailmentData): unknown {
    const obj: any = {};
    if (message.powerLimitSource !== undefined && message.powerLimitSource !== "") {
      obj.powerLimitSource = message.powerLimitSource;
    }
    if (
      message.curtailed !== undefined &&
      message.curtailed !== TurbineSubscription_Turbine_CurtailmentData_CurtailmentStatus.Unknown
    ) {
      obj.curtailed = turbineSubscription_Turbine_CurtailmentData_CurtailmentStatusToJSON(message.curtailed);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TurbineSubscription_Turbine_CurtailmentData>, I>>(
    base?: I,
  ): TurbineSubscription_Turbine_CurtailmentData {
    return TurbineSubscription_Turbine_CurtailmentData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TurbineSubscription_Turbine_CurtailmentData>, I>>(
    object: I,
  ): TurbineSubscription_Turbine_CurtailmentData {
    const message = createBaseTurbineSubscription_Turbine_CurtailmentData();
    message.powerLimitSource = object.powerLimitSource ?? "";
    message.curtailed = object.curtailed ?? TurbineSubscription_Turbine_CurtailmentData_CurtailmentStatus.No;
    return message;
  },
};

function createBaseTurbineSubscription_Turbine_References(): TurbineSubscription_Turbine_References {
  return { voltageReferencePU: 0, voltageReference: 0, reactiveReference: 0, activePowerReference: 0 };
}

export const TurbineSubscription_Turbine_References = {
  fromJSON(object: any): TurbineSubscription_Turbine_References {
    return {
      voltageReferencePU: isSet(object.voltageReferencePU) ? gt.Number(object.voltageReferencePU) : 0,
      voltageReference: isSet(object.voltageReference) ? gt.Number(object.voltageReference) : 0,
      reactiveReference: isSet(object.reactiveReference) ? gt.Number(object.reactiveReference) : 0,
      activePowerReference: isSet(object.activePowerReference) ? gt.Number(object.activePowerReference) : 0,
    };
  },

  toJSON(message: TurbineSubscription_Turbine_References): unknown {
    const obj: any = {};
    if (message.voltageReferencePU !== undefined && message.voltageReferencePU !== 0) {
      obj.voltageReferencePU = message.voltageReferencePU;
    }
    if (message.voltageReference !== undefined && message.voltageReference !== 0) {
      obj.voltageReference = message.voltageReference;
    }
    if (message.reactiveReference !== undefined && message.reactiveReference !== 0) {
      obj.reactiveReference = message.reactiveReference;
    }
    if (message.activePowerReference !== undefined && message.activePowerReference !== 0) {
      obj.activePowerReference = message.activePowerReference;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TurbineSubscription_Turbine_References>, I>>(
    base?: I,
  ): TurbineSubscription_Turbine_References {
    return TurbineSubscription_Turbine_References.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TurbineSubscription_Turbine_References>, I>>(
    object: I,
  ): TurbineSubscription_Turbine_References {
    const message = createBaseTurbineSubscription_Turbine_References();
    message.voltageReferencePU = object.voltageReferencePU ?? 0;
    message.voltageReference = object.voltageReference ?? 0;
    message.reactiveReference = object.reactiveReference ?? 0;
    message.activePowerReference = object.activePowerReference ?? 0;
    return message;
  },
};

function createBaseTurbineSubscription_Turbine_CurtailmentStopData(): TurbineSubscription_Turbine_CurtailmentStopData {
  return {
    curtailmentStopState: TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Uninitialized,
    curtailmentStoppedHours: 0,
    curtailmentStopStateRequested: TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Uninitialized,
  };
}

export const TurbineSubscription_Turbine_CurtailmentStopData = {
  fromJSON(object: any): TurbineSubscription_Turbine_CurtailmentStopData {
    return {
      curtailmentStopState: isSet(object.curtailmentStopState)
        ? turbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopStateFromJSON(object.curtailmentStopState)
        : TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Uninitialized,
      curtailmentStoppedHours: isSet(object.curtailmentStoppedHours) ? gt.Number(object.curtailmentStoppedHours) : 0,
      curtailmentStopStateRequested: isSet(object.curtailmentStopStateRequested)
        ? turbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopStateFromJSON(
          object.curtailmentStopStateRequested,
        )
        : TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Uninitialized,
    };
  },

  toJSON(message: TurbineSubscription_Turbine_CurtailmentStopData): unknown {
    const obj: any = {};
    if (
      message.curtailmentStopState !== undefined &&
      message.curtailmentStopState !==
        TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Uninitialized
    ) {
      obj.curtailmentStopState = turbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopStateToJSON(
        message.curtailmentStopState,
      );
    }
    if (message.curtailmentStoppedHours !== undefined && message.curtailmentStoppedHours !== 0) {
      obj.curtailmentStoppedHours = message.curtailmentStoppedHours;
    }
    if (
      message.curtailmentStopStateRequested !== undefined &&
      message.curtailmentStopStateRequested !==
        TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Uninitialized
    ) {
      obj.curtailmentStopStateRequested = turbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopStateToJSON(
        message.curtailmentStopStateRequested,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TurbineSubscription_Turbine_CurtailmentStopData>, I>>(
    base?: I,
  ): TurbineSubscription_Turbine_CurtailmentStopData {
    return TurbineSubscription_Turbine_CurtailmentStopData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TurbineSubscription_Turbine_CurtailmentStopData>, I>>(
    object: I,
  ): TurbineSubscription_Turbine_CurtailmentStopData {
    const message = createBaseTurbineSubscription_Turbine_CurtailmentStopData();
    message.curtailmentStopState = object.curtailmentStopState ??
      TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Uninitialized;
    message.curtailmentStoppedHours = object.curtailmentStoppedHours ?? 0;
    message.curtailmentStopStateRequested = object.curtailmentStopStateRequested ??
      TurbineSubscription_Turbine_CurtailmentStopData_CurtailmentStopState.Uninitialized;
    return message;
  },
};

function createBaseTurbineSubscription_Turbine_TowerDampingData(): TurbineSubscription_Turbine_TowerDampingData {
  return { towerDampingFrequency: 0, towerDampingAmplitude: 0 };
}

export const TurbineSubscription_Turbine_TowerDampingData = {
  fromJSON(object: any): TurbineSubscription_Turbine_TowerDampingData {
    return {
      towerDampingFrequency: isSet(object.towerDampingFrequency) ? gt.Number(object.towerDampingFrequency) : 0,
      towerDampingAmplitude: isSet(object.towerDampingAmplitude) ? gt.Number(object.towerDampingAmplitude) : 0,
    };
  },

  toJSON(message: TurbineSubscription_Turbine_TowerDampingData): unknown {
    const obj: any = {};
    if (message.towerDampingFrequency !== undefined && message.towerDampingFrequency !== 0) {
      obj.towerDampingFrequency = message.towerDampingFrequency;
    }
    if (message.towerDampingAmplitude !== undefined && message.towerDampingAmplitude !== 0) {
      obj.towerDampingAmplitude = message.towerDampingAmplitude;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TurbineSubscription_Turbine_TowerDampingData>, I>>(
    base?: I,
  ): TurbineSubscription_Turbine_TowerDampingData {
    return TurbineSubscription_Turbine_TowerDampingData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TurbineSubscription_Turbine_TowerDampingData>, I>>(
    object: I,
  ): TurbineSubscription_Turbine_TowerDampingData {
    const message = createBaseTurbineSubscription_Turbine_TowerDampingData();
    message.towerDampingFrequency = object.towerDampingFrequency ?? 0;
    message.towerDampingAmplitude = object.towerDampingAmplitude ?? 0;
    return message;
  },
};

function createBaseTurbineSubscription_Turbine_CeasePData(): TurbineSubscription_Turbine_CeasePData {
  return { ceasePState: TurbineSubscription_Turbine_CeasePData_CeasePState.CeasePUninitialized };
}

export const TurbineSubscription_Turbine_CeasePData = {
  fromJSON(object: any): TurbineSubscription_Turbine_CeasePData {
    return {
      ceasePState: isSet(object.ceasePState)
        ? turbineSubscription_Turbine_CeasePData_CeasePStateFromJSON(object.ceasePState)
        : TurbineSubscription_Turbine_CeasePData_CeasePState.CeasePUninitialized,
    };
  },

  toJSON(message: TurbineSubscription_Turbine_CeasePData): unknown {
    const obj: any = {};
    if (
      message.ceasePState !== undefined &&
      message.ceasePState !== TurbineSubscription_Turbine_CeasePData_CeasePState.CeasePUninitialized
    ) {
      obj.ceasePState = turbineSubscription_Turbine_CeasePData_CeasePStateToJSON(message.ceasePState);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TurbineSubscription_Turbine_CeasePData>, I>>(
    base?: I,
  ): TurbineSubscription_Turbine_CeasePData {
    return TurbineSubscription_Turbine_CeasePData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TurbineSubscription_Turbine_CeasePData>, I>>(
    object: I,
  ): TurbineSubscription_Turbine_CeasePData {
    const message = createBaseTurbineSubscription_Turbine_CeasePData();
    message.ceasePState = object.ceasePState ?? TurbineSubscription_Turbine_CeasePData_CeasePState.CeasePUninitialized;
    return message;
  },
};

function createBaseTurbineSubscription_Turbine_POATDStateData(): TurbineSubscription_Turbine_POATDStateData {
  return { poatdState: TurbineSubscription_Turbine_POATDStateData_POATDState.TurbineDefault };
}

export const TurbineSubscription_Turbine_POATDStateData = {
  fromJSON(object: any): TurbineSubscription_Turbine_POATDStateData {
    return {
      poatdState: isSet(object.poatdState)
        ? turbineSubscription_Turbine_POATDStateData_POATDStateFromJSON(object.poatdState)
        : TurbineSubscription_Turbine_POATDStateData_POATDState.TurbineDefault,
    };
  },

  toJSON(message: TurbineSubscription_Turbine_POATDStateData): unknown {
    const obj: any = {};
    if (
      message.poatdState !== undefined &&
      message.poatdState !== TurbineSubscription_Turbine_POATDStateData_POATDState.Uninitialized
    ) {
      obj.poatdState = turbineSubscription_Turbine_POATDStateData_POATDStateToJSON(message.poatdState);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TurbineSubscription_Turbine_POATDStateData>, I>>(
    base?: I,
  ): TurbineSubscription_Turbine_POATDStateData {
    return TurbineSubscription_Turbine_POATDStateData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TurbineSubscription_Turbine_POATDStateData>, I>>(
    object: I,
  ): TurbineSubscription_Turbine_POATDStateData {
    const message = createBaseTurbineSubscription_Turbine_POATDStateData();
    message.poatdState = object.poatdState ?? TurbineSubscription_Turbine_POATDStateData_POATDState.TurbineDefault;
    return message;
  },
};

function createBaseGmsSubscription(): GmsSubscription {
  return { sampleTime: 0, gmsDevice: [], isEventTriggered: false, topology: 0 };
}

export const GmsSubscription = {
  fromJSON(object: any): GmsSubscription {
    return {
      sampleTime: isSet(object.sampleTime) ? gt.Number(object.sampleTime) : 0,
      gmsDevice: gt.Array.isArray(object?.gmsDevice)
        ? object.gmsDevice.map((e: any) => GmsSubscription_GmsDevice.fromJSON(e))
        : [],
      isEventTriggered: isSet(object.isEventTriggered) ? gt.Boolean(object.isEventTriggered) : false,
      topology: isSet(object.topology) ? gt.Number(object.topology) : 0,
    };
  },

  toJSON(message: GmsSubscription): unknown {
    const obj: any = {};
    if (message.sampleTime !== undefined && message.sampleTime !== 0) {
      obj.sampleTime = Math.round(message.sampleTime);
    }
    if (message.gmsDevice?.length) {
      obj.gmsDevice = message.gmsDevice.map((e) => GmsSubscription_GmsDevice.toJSON(e));
    }
    if (message.isEventTriggered !== undefined && message.isEventTriggered !== false) {
      obj.isEventTriggered = message.isEventTriggered;
    }
    if (message.topology !== undefined && message.topology !== 0) {
      obj.topology = Math.round(message.topology);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GmsSubscription>, I>>(base?: I): GmsSubscription {
    return GmsSubscription.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GmsSubscription>, I>>(object: I): GmsSubscription {
    const message = createBaseGmsSubscription();
    message.sampleTime = object.sampleTime ?? 0;
    message.gmsDevice = object.gmsDevice?.map((e) => GmsSubscription_GmsDevice.fromPartial(e)) || [];
    message.isEventTriggered = object.isEventTriggered ?? false;
    message.topology = object.topology ?? 0;
    return message;
  },
};

function createBaseGmsSubscription_GmsDevice(): GmsSubscription_GmsDevice {
  return {
    name: "",
    timestamp: 0,
    type: GmsSubscription_GmsDevice_GridmeterType.UnknownType,
    status: GmsSubscription_GmsDevice_GridmeterStatus.UnknownStatus,
    activePower: undefined,
    frequency: undefined,
    voltage: undefined,
    reactivePower: undefined,
    apparentPower: undefined,
    voltagePhaseUab: undefined,
    voltagePhaseUbc: undefined,
    voltagePhaseUca: undefined,
    physicalGridmeter: undefined,
    redundantGridmeter: undefined,
    virtualGridmeter: undefined,
    nominalVoltage: 0,
    groupName: "",
  };
}

export const GmsSubscription_GmsDevice = {
  fromJSON(object: any): GmsSubscription_GmsDevice {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      timestamp: isSet(object.timestamp) ? gt.Number(object.timestamp) : 0,
      type: isSet(object.type)
        ? gmsSubscription_GmsDevice_GridmeterTypeFromJSON(object.type)
        : GmsSubscription_GmsDevice_GridmeterType.UnknownType,
      status: isSet(object.status)
        ? gmsSubscription_GmsDevice_GridmeterStatusFromJSON(object.status)
        : GmsSubscription_GmsDevice_GridmeterStatus.UnknownStatus,
      activePower: isSet(object.activePower)
        ? GmsSubscription_GmsDevice_ValueQuality.fromJSON(object.activePower)
        : undefined,
      frequency: isSet(object.frequency)
        ? GmsSubscription_GmsDevice_ValueQuality.fromJSON(object.frequency)
        : undefined,
      voltage: isSet(object.voltage) ? GmsSubscription_GmsDevice_ValueQuality.fromJSON(object.voltage) : undefined,
      reactivePower: isSet(object.reactivePower)
        ? GmsSubscription_GmsDevice_ValueQuality.fromJSON(object.reactivePower)
        : undefined,
      apparentPower: isSet(object.apparentPower)
        ? GmsSubscription_GmsDevice_ValueQuality.fromJSON(object.apparentPower)
        : undefined,
      voltagePhaseUab: isSet(object.voltagePhaseUab)
        ? GmsSubscription_GmsDevice_ValueQuality.fromJSON(object.voltagePhaseUab)
        : undefined,
      voltagePhaseUbc: isSet(object.voltagePhaseUbc)
        ? GmsSubscription_GmsDevice_ValueQuality.fromJSON(object.voltagePhaseUbc)
        : undefined,
      voltagePhaseUca: isSet(object.voltagePhaseUca)
        ? GmsSubscription_GmsDevice_ValueQuality.fromJSON(object.voltagePhaseUca)
        : undefined,
      physicalGridmeter: isSet(object.physicalGridmeter)
        ? GmsSubscription_GmsDevice_PhysicalGms.fromJSON(object.physicalGridmeter)
        : undefined,
      redundantGridmeter: isSet(object.redundantGridmeter)
        ? GmsSubscription_GmsDevice_RedundantGms.fromJSON(object.redundantGridmeter)
        : undefined,
      virtualGridmeter: isSet(object.virtualGridmeter)
        ? GmsSubscription_GmsDevice_VirtualGms.fromJSON(object.virtualGridmeter)
        : undefined,
      nominalVoltage: isSet(object.nominalVoltage) ? gt.Number(object.nominalVoltage) : 0,
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
    };
  },

  toJSON(message: GmsSubscription_GmsDevice): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.timestamp !== undefined && message.timestamp !== 0) {
      obj.timestamp = Math.round(message.timestamp);
    }
    if (message.type !== undefined && message.type !== GmsSubscription_GmsDevice_GridmeterType.GeneratorSum) {
      obj.type = gmsSubscription_GmsDevice_GridmeterTypeToJSON(message.type);
    }
    if (message.status !== undefined && message.status !== GmsSubscription_GmsDevice_GridmeterStatus.OK) {
      obj.status = gmsSubscription_GmsDevice_GridmeterStatusToJSON(message.status);
    }
    if (message.activePower !== undefined) {
      obj.activePower = GmsSubscription_GmsDevice_ValueQuality.toJSON(message.activePower);
    }
    if (message.frequency !== undefined) {
      obj.frequency = GmsSubscription_GmsDevice_ValueQuality.toJSON(message.frequency);
    }
    if (message.voltage !== undefined) {
      obj.voltage = GmsSubscription_GmsDevice_ValueQuality.toJSON(message.voltage);
    }
    if (message.reactivePower !== undefined) {
      obj.reactivePower = GmsSubscription_GmsDevice_ValueQuality.toJSON(message.reactivePower);
    }
    if (message.apparentPower !== undefined) {
      obj.apparentPower = GmsSubscription_GmsDevice_ValueQuality.toJSON(message.apparentPower);
    }
    if (message.voltagePhaseUab !== undefined) {
      obj.voltagePhaseUab = GmsSubscription_GmsDevice_ValueQuality.toJSON(message.voltagePhaseUab);
    }
    if (message.voltagePhaseUbc !== undefined) {
      obj.voltagePhaseUbc = GmsSubscription_GmsDevice_ValueQuality.toJSON(message.voltagePhaseUbc);
    }
    if (message.voltagePhaseUca !== undefined) {
      obj.voltagePhaseUca = GmsSubscription_GmsDevice_ValueQuality.toJSON(message.voltagePhaseUca);
    }
    if (message.physicalGridmeter !== undefined) {
      obj.physicalGridmeter = GmsSubscription_GmsDevice_PhysicalGms.toJSON(message.physicalGridmeter);
    }
    if (message.redundantGridmeter !== undefined) {
      obj.redundantGridmeter = GmsSubscription_GmsDevice_RedundantGms.toJSON(message.redundantGridmeter);
    }
    if (message.virtualGridmeter !== undefined) {
      obj.virtualGridmeter = GmsSubscription_GmsDevice_VirtualGms.toJSON(message.virtualGridmeter);
    }
    if (message.nominalVoltage !== undefined && message.nominalVoltage !== 0) {
      obj.nominalVoltage = message.nominalVoltage;
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GmsSubscription_GmsDevice>, I>>(base?: I): GmsSubscription_GmsDevice {
    return GmsSubscription_GmsDevice.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GmsSubscription_GmsDevice>, I>>(object: I): GmsSubscription_GmsDevice {
    const message = createBaseGmsSubscription_GmsDevice();
    message.name = object.name ?? "";
    message.timestamp = object.timestamp ?? 0;
    message.type = object.type ?? GmsSubscription_GmsDevice_GridmeterType.UnknownType;
    message.status = object.status ?? GmsSubscription_GmsDevice_GridmeterStatus.UnknownStatus;
    message.activePower = (object.activePower !== undefined && object.activePower !== null)
      ? GmsSubscription_GmsDevice_ValueQuality.fromPartial(object.activePower)
      : undefined;
    message.frequency = (object.frequency !== undefined && object.frequency !== null)
      ? GmsSubscription_GmsDevice_ValueQuality.fromPartial(object.frequency)
      : undefined;
    message.voltage = (object.voltage !== undefined && object.voltage !== null)
      ? GmsSubscription_GmsDevice_ValueQuality.fromPartial(object.voltage)
      : undefined;
    message.reactivePower = (object.reactivePower !== undefined && object.reactivePower !== null)
      ? GmsSubscription_GmsDevice_ValueQuality.fromPartial(object.reactivePower)
      : undefined;
    message.apparentPower = (object.apparentPower !== undefined && object.apparentPower !== null)
      ? GmsSubscription_GmsDevice_ValueQuality.fromPartial(object.apparentPower)
      : undefined;
    message.voltagePhaseUab = (object.voltagePhaseUab !== undefined && object.voltagePhaseUab !== null)
      ? GmsSubscription_GmsDevice_ValueQuality.fromPartial(object.voltagePhaseUab)
      : undefined;
    message.voltagePhaseUbc = (object.voltagePhaseUbc !== undefined && object.voltagePhaseUbc !== null)
      ? GmsSubscription_GmsDevice_ValueQuality.fromPartial(object.voltagePhaseUbc)
      : undefined;
    message.voltagePhaseUca = (object.voltagePhaseUca !== undefined && object.voltagePhaseUca !== null)
      ? GmsSubscription_GmsDevice_ValueQuality.fromPartial(object.voltagePhaseUca)
      : undefined;
    message.physicalGridmeter = (object.physicalGridmeter !== undefined && object.physicalGridmeter !== null)
      ? GmsSubscription_GmsDevice_PhysicalGms.fromPartial(object.physicalGridmeter)
      : undefined;
    message.redundantGridmeter = (object.redundantGridmeter !== undefined && object.redundantGridmeter !== null)
      ? GmsSubscription_GmsDevice_RedundantGms.fromPartial(object.redundantGridmeter)
      : undefined;
    message.virtualGridmeter = (object.virtualGridmeter !== undefined && object.virtualGridmeter !== null)
      ? GmsSubscription_GmsDevice_VirtualGms.fromPartial(object.virtualGridmeter)
      : undefined;
    message.nominalVoltage = object.nominalVoltage ?? 0;
    message.groupName = object.groupName ?? "";
    return message;
  },
};

function createBaseGmsSubscription_GmsDevice_ValueQuality(): GmsSubscription_GmsDevice_ValueQuality {
  return { value: 0, quality: 0 };
}

export const GmsSubscription_GmsDevice_ValueQuality = {
  fromJSON(object: any): GmsSubscription_GmsDevice_ValueQuality {
    return {
      value: isSet(object.value) ? gt.Number(object.value) : 0,
      quality: isSet(object.quality) ? gt.Number(object.quality) : 0,
    };
  },

  toJSON(message: GmsSubscription_GmsDevice_ValueQuality): unknown {
    const obj: any = {};
    if (message.value !== undefined && message.value !== 0) {
      obj.value = message.value;
    }
    if (message.quality !== undefined && message.quality !== 0) {
      obj.quality = Math.round(message.quality);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GmsSubscription_GmsDevice_ValueQuality>, I>>(
    base?: I,
  ): GmsSubscription_GmsDevice_ValueQuality {
    return GmsSubscription_GmsDevice_ValueQuality.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GmsSubscription_GmsDevice_ValueQuality>, I>>(
    object: I,
  ): GmsSubscription_GmsDevice_ValueQuality {
    const message = createBaseGmsSubscription_GmsDevice_ValueQuality();
    message.value = object.value ?? 0;
    message.quality = object.quality ?? 0;
    return message;
  },
};

function createBaseGmsSubscription_GmsDevice_PhysicalGms(): GmsSubscription_GmsDevice_PhysicalGms {
  return {
    state: GridmeterState.Disabled,
    rgmSelectionState: GmsSubscription_GmsDevice_PhysicalGms_RgmSelectionState.Selected,
    ReadRTT: 0,
    faultStatus: undefined,
  };
}

export const GmsSubscription_GmsDevice_PhysicalGms = {
  fromJSON(object: any): GmsSubscription_GmsDevice_PhysicalGms {
    return {
      state: isSet(object.state) ? gridmeterStateFromJSON(object.state) : GridmeterState.Disabled,
      rgmSelectionState: isSet(object.rgmSelectionState)
        ? gmsSubscription_GmsDevice_PhysicalGms_RgmSelectionStateFromJSON(object.rgmSelectionState)
        : GmsSubscription_GmsDevice_PhysicalGms_RgmSelectionState.Selected,
      ReadRTT: isSet(object.ReadRTT) ? gt.Number(object.ReadRTT) : 0,
      faultStatus: isSet(object.faultStatus)
        ? GmsSubscription_GmsDevice_PhysicalGms_FaultStatus.fromJSON(object.faultStatus)
        : undefined,
    };
  },

  toJSON(message: GmsSubscription_GmsDevice_PhysicalGms): unknown {
    const obj: any = {};
    if (message.state !== undefined && message.state !== GridmeterState.Disabled) {
      obj.state = gridmeterStateToJSON(message.state);
    }
    if (
      message.rgmSelectionState !== undefined &&
      message.rgmSelectionState !== GmsSubscription_GmsDevice_PhysicalGms_RgmSelectionState.Selected
    ) {
      obj.rgmSelectionState = gmsSubscription_GmsDevice_PhysicalGms_RgmSelectionStateToJSON(message.rgmSelectionState);
    }
    if (message.ReadRTT !== undefined && message.ReadRTT !== 0) {
      obj.ReadRTT = Math.round(message.ReadRTT);
    }
    if (message.faultStatus !== undefined) {
      obj.faultStatus = GmsSubscription_GmsDevice_PhysicalGms_FaultStatus.toJSON(message.faultStatus);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GmsSubscription_GmsDevice_PhysicalGms>, I>>(
    base?: I,
  ): GmsSubscription_GmsDevice_PhysicalGms {
    return GmsSubscription_GmsDevice_PhysicalGms.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GmsSubscription_GmsDevice_PhysicalGms>, I>>(
    object: I,
  ): GmsSubscription_GmsDevice_PhysicalGms {
    const message = createBaseGmsSubscription_GmsDevice_PhysicalGms();
    message.state = object.state ?? GridmeterState.Disabled;
    message.rgmSelectionState = object.rgmSelectionState ??
      GmsSubscription_GmsDevice_PhysicalGms_RgmSelectionState.Selected;
    message.ReadRTT = object.ReadRTT ?? 0;
    message.faultStatus = (object.faultStatus !== undefined && object.faultStatus !== null)
      ? GmsSubscription_GmsDevice_PhysicalGms_FaultStatus.fromPartial(object.faultStatus)
      : undefined;
    return message;
  },
};

function createBaseGmsSubscription_GmsDevice_PhysicalGms_FaultStatus(): GmsSubscription_GmsDevice_PhysicalGms_FaultStatus {
  return { CTFault: false, VTFault: false };
}

export const GmsSubscription_GmsDevice_PhysicalGms_FaultStatus = {
  fromJSON(object: any): GmsSubscription_GmsDevice_PhysicalGms_FaultStatus {
    return {
      CTFault: isSet(object.CTFault) ? gt.Boolean(object.CTFault) : false,
      VTFault: isSet(object.VTFault) ? gt.Boolean(object.VTFault) : false,
    };
  },

  toJSON(message: GmsSubscription_GmsDevice_PhysicalGms_FaultStatus): unknown {
    const obj: any = {};
    if (message.CTFault !== undefined && message.CTFault !== false) {
      obj.CTFault = message.CTFault;
    }
    if (message.VTFault !== undefined && message.VTFault !== false) {
      obj.VTFault = message.VTFault;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GmsSubscription_GmsDevice_PhysicalGms_FaultStatus>, I>>(
    base?: I,
  ): GmsSubscription_GmsDevice_PhysicalGms_FaultStatus {
    return GmsSubscription_GmsDevice_PhysicalGms_FaultStatus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GmsSubscription_GmsDevice_PhysicalGms_FaultStatus>, I>>(
    object: I,
  ): GmsSubscription_GmsDevice_PhysicalGms_FaultStatus {
    const message = createBaseGmsSubscription_GmsDevice_PhysicalGms_FaultStatus();
    message.CTFault = object.CTFault ?? false;
    message.VTFault = object.VTFault ?? false;
    return message;
  },
};

function createBaseGmsSubscription_GmsDevice_RedundantGms(): GmsSubscription_GmsDevice_RedundantGms {
  return {
    ActivePGM: "",
    DisabledGmsCount: 0,
    FailedGmsCount: 0,
    RedundancyState: GmsSubscription_GmsDevice_RedundancyStatus.Uinitialized,
    physicalGridmeters: [],
    upstream: undefined,
  };
}

export const GmsSubscription_GmsDevice_RedundantGms = {
  fromJSON(object: any): GmsSubscription_GmsDevice_RedundantGms {
    return {
      ActivePGM: isSet(object.ActivePGM) ? gt.String(object.ActivePGM) : "",
      DisabledGmsCount: isSet(object.DisabledGmsCount) ? gt.Number(object.DisabledGmsCount) : 0,
      FailedGmsCount: isSet(object.FailedGmsCount) ? gt.Number(object.FailedGmsCount) : 0,
      RedundancyState: isSet(object.RedundancyState)
        ? gmsSubscription_GmsDevice_RedundancyStatusFromJSON(object.RedundancyState)
        : GmsSubscription_GmsDevice_RedundancyStatus.Uinitialized,
      physicalGridmeters: gt.Array.isArray(object?.physicalGridmeters)
        ? object.physicalGridmeters.map((e: any) => gt.String(e))
        : [],
      upstream: isSet(object.upstream) ? GmsSubscription_GmsDevice_Upstream.fromJSON(object.upstream) : undefined,
    };
  },

  toJSON(message: GmsSubscription_GmsDevice_RedundantGms): unknown {
    const obj: any = {};
    if (message.ActivePGM !== undefined && message.ActivePGM !== "") {
      obj.ActivePGM = message.ActivePGM;
    }
    if (message.DisabledGmsCount !== undefined && message.DisabledGmsCount !== 0) {
      obj.DisabledGmsCount = Math.round(message.DisabledGmsCount);
    }
    if (message.FailedGmsCount !== undefined && message.FailedGmsCount !== 0) {
      obj.FailedGmsCount = Math.round(message.FailedGmsCount);
    }
    if (
      message.RedundancyState !== undefined &&
      message.RedundancyState !== GmsSubscription_GmsDevice_RedundancyStatus.Uinitialized
    ) {
      obj.RedundancyState = gmsSubscription_GmsDevice_RedundancyStatusToJSON(message.RedundancyState);
    }
    if (message.physicalGridmeters?.length) {
      obj.physicalGridmeters = message.physicalGridmeters;
    }
    if (message.upstream !== undefined) {
      obj.upstream = GmsSubscription_GmsDevice_Upstream.toJSON(message.upstream);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GmsSubscription_GmsDevice_RedundantGms>, I>>(
    base?: I,
  ): GmsSubscription_GmsDevice_RedundantGms {
    return GmsSubscription_GmsDevice_RedundantGms.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GmsSubscription_GmsDevice_RedundantGms>, I>>(
    object: I,
  ): GmsSubscription_GmsDevice_RedundantGms {
    const message = createBaseGmsSubscription_GmsDevice_RedundantGms();
    message.ActivePGM = object.ActivePGM ?? "";
    message.DisabledGmsCount = object.DisabledGmsCount ?? 0;
    message.FailedGmsCount = object.FailedGmsCount ?? 0;
    message.RedundancyState = object.RedundancyState ?? GmsSubscription_GmsDevice_RedundancyStatus.Uinitialized;
    message.physicalGridmeters = object.physicalGridmeters?.map((e) => e) || [];
    message.upstream = (object.upstream !== undefined && object.upstream !== null)
      ? GmsSubscription_GmsDevice_Upstream.fromPartial(object.upstream)
      : undefined;
    return message;
  },
};

function createBaseGmsSubscription_GmsDevice_VirtualGms(): GmsSubscription_GmsDevice_VirtualGms {
  return {
    upstream: undefined,
    RedundancyState: GmsSubscription_GmsDevice_RedundancyStatus.Uinitialized,
    redundantGridmeters: [],
  };
}

export const GmsSubscription_GmsDevice_VirtualGms = {
  fromJSON(object: any): GmsSubscription_GmsDevice_VirtualGms {
    return {
      upstream: isSet(object.upstream) ? GmsSubscription_GmsDevice_Upstream.fromJSON(object.upstream) : undefined,
      RedundancyState: isSet(object.RedundancyState)
        ? gmsSubscription_GmsDevice_RedundancyStatusFromJSON(object.RedundancyState)
        : GmsSubscription_GmsDevice_RedundancyStatus.Uinitialized,
      redundantGridmeters: gt.Array.isArray(object?.redundantGridmeters)
        ? object.redundantGridmeters.map((e: any) => gt.String(e))
        : [],
    };
  },

  toJSON(message: GmsSubscription_GmsDevice_VirtualGms): unknown {
    const obj: any = {};
    if (message.upstream !== undefined) {
      obj.upstream = GmsSubscription_GmsDevice_Upstream.toJSON(message.upstream);
    }
    if (
      message.RedundancyState !== undefined &&
      message.RedundancyState !== GmsSubscription_GmsDevice_RedundancyStatus.Uinitialized
    ) {
      obj.RedundancyState = gmsSubscription_GmsDevice_RedundancyStatusToJSON(message.RedundancyState);
    }
    if (message.redundantGridmeters?.length) {
      obj.redundantGridmeters = message.redundantGridmeters;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GmsSubscription_GmsDevice_VirtualGms>, I>>(
    base?: I,
  ): GmsSubscription_GmsDevice_VirtualGms {
    return GmsSubscription_GmsDevice_VirtualGms.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GmsSubscription_GmsDevice_VirtualGms>, I>>(
    object: I,
  ): GmsSubscription_GmsDevice_VirtualGms {
    const message = createBaseGmsSubscription_GmsDevice_VirtualGms();
    message.upstream = (object.upstream !== undefined && object.upstream !== null)
      ? GmsSubscription_GmsDevice_Upstream.fromPartial(object.upstream)
      : undefined;
    message.RedundancyState = object.RedundancyState ?? GmsSubscription_GmsDevice_RedundancyStatus.Uinitialized;
    message.redundantGridmeters = object.redundantGridmeters?.map((e) => e) || [];
    return message;
  },
};

function createBaseGmsSubscription_GmsDevice_Upstream(): GmsSubscription_GmsDevice_Upstream {
  return {
    upstreamActivePower: 0,
    upstreamVoltage: 0,
    upstreamReactivePower: 0,
    upstreamApparentPower: 0,
    upstreamNominalVoltage: 0,
  };
}

export const GmsSubscription_GmsDevice_Upstream = {
  fromJSON(object: any): GmsSubscription_GmsDevice_Upstream {
    return {
      upstreamActivePower: isSet(object.upstreamActivePower) ? gt.Number(object.upstreamActivePower) : 0,
      upstreamVoltage: isSet(object.upstreamVoltage) ? gt.Number(object.upstreamVoltage) : 0,
      upstreamReactivePower: isSet(object.upstreamReactivePower) ? gt.Number(object.upstreamReactivePower) : 0,
      upstreamApparentPower: isSet(object.upstreamApparentPower) ? gt.Number(object.upstreamApparentPower) : 0,
      upstreamNominalVoltage: isSet(object.upstreamNominalVoltage) ? gt.Number(object.upstreamNominalVoltage) : 0,
    };
  },

  toJSON(message: GmsSubscription_GmsDevice_Upstream): unknown {
    const obj: any = {};
    if (message.upstreamActivePower !== undefined && message.upstreamActivePower !== 0) {
      obj.upstreamActivePower = message.upstreamActivePower;
    }
    if (message.upstreamVoltage !== undefined && message.upstreamVoltage !== 0) {
      obj.upstreamVoltage = message.upstreamVoltage;
    }
    if (message.upstreamReactivePower !== undefined && message.upstreamReactivePower !== 0) {
      obj.upstreamReactivePower = message.upstreamReactivePower;
    }
    if (message.upstreamApparentPower !== undefined && message.upstreamApparentPower !== 0) {
      obj.upstreamApparentPower = message.upstreamApparentPower;
    }
    if (message.upstreamNominalVoltage !== undefined && message.upstreamNominalVoltage !== 0) {
      obj.upstreamNominalVoltage = message.upstreamNominalVoltage;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GmsSubscription_GmsDevice_Upstream>, I>>(
    base?: I,
  ): GmsSubscription_GmsDevice_Upstream {
    return GmsSubscription_GmsDevice_Upstream.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GmsSubscription_GmsDevice_Upstream>, I>>(
    object: I,
  ): GmsSubscription_GmsDevice_Upstream {
    const message = createBaseGmsSubscription_GmsDevice_Upstream();
    message.upstreamActivePower = object.upstreamActivePower ?? 0;
    message.upstreamVoltage = object.upstreamVoltage ?? 0;
    message.upstreamReactivePower = object.upstreamReactivePower ?? 0;
    message.upstreamApparentPower = object.upstreamApparentPower ?? 0;
    message.upstreamNominalVoltage = object.upstreamNominalVoltage ?? 0;
    return message;
  },
};

function createBaseControllerSubscription(): ControllerSubscription {
  return { sampleTime: 0, group: [], isEventTriggered: false, generatorGroupModelSequenceNumber: 0 };
}

export const ControllerSubscription = {
  fromJSON(object: any): ControllerSubscription {
    return {
      sampleTime: isSet(object.sampleTime) ? gt.Number(object.sampleTime) : 0,
      group: gt.Array.isArray(object?.group)
        ? object.group.map((e: any) => ControllerSubscription_ControllerGroup.fromJSON(e))
        : [],
      isEventTriggered: isSet(object.isEventTriggered) ? gt.Boolean(object.isEventTriggered) : false,
      generatorGroupModelSequenceNumber: isSet(object.generatorGroupModelSequenceNumber)
        ? gt.Number(object.generatorGroupModelSequenceNumber)
        : 0,
    };
  },

  toJSON(message: ControllerSubscription): unknown {
    const obj: any = {};
    if (message.sampleTime !== undefined && message.sampleTime !== 0) {
      obj.sampleTime = Math.round(message.sampleTime);
    }
    if (message.group?.length) {
      obj.group = message.group.map((e) => ControllerSubscription_ControllerGroup.toJSON(e));
    }
    if (message.isEventTriggered !== undefined && message.isEventTriggered !== false) {
      obj.isEventTriggered = message.isEventTriggered;
    }
    if (message.generatorGroupModelSequenceNumber !== undefined && message.generatorGroupModelSequenceNumber !== 0) {
      obj.generatorGroupModelSequenceNumber = Math.round(message.generatorGroupModelSequenceNumber);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ControllerSubscription>, I>>(base?: I): ControllerSubscription {
    return ControllerSubscription.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ControllerSubscription>, I>>(object: I): ControllerSubscription {
    const message = createBaseControllerSubscription();
    message.sampleTime = object.sampleTime ?? 0;
    message.group = object.group?.map((e) => ControllerSubscription_ControllerGroup.fromPartial(e)) || [];
    message.isEventTriggered = object.isEventTriggered ?? false;
    message.generatorGroupModelSequenceNumber = object.generatorGroupModelSequenceNumber ?? 0;
    return message;
  },
};

function createBaseControllerSubscription_ControllerGroup(): ControllerSubscription_ControllerGroup {
  return { controllerName: "", groupName: "", variable: {}, activeGridmeter: "", plantControllerName: "" };
}

export const ControllerSubscription_ControllerGroup = {
  fromJSON(object: any): ControllerSubscription_ControllerGroup {
    return {
      controllerName: isSet(object.controllerName) ? gt.String(object.controllerName) : "",
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      variable: isObject(object.variable)
        ? Object.entries(object.variable).reduce<{ [key: number]: number }>((acc, [key, value]) => {
          acc[gt.Number(key)] = Number(value);
          return acc;
        }, {})
        : {},
      activeGridmeter: isSet(object.activeGridmeter) ? gt.String(object.activeGridmeter) : "",
      plantControllerName: isSet(object.plantControllerName) ? gt.String(object.plantControllerName) : "",
    };
  },

  toJSON(message: ControllerSubscription_ControllerGroup): unknown {
    const obj: any = {};
    if (message.controllerName !== undefined && message.controllerName !== "") {
      obj.controllerName = message.controllerName;
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.variable) {
      const entries = Object.entries(message.variable);
      if (entries.length > 0) {
        obj.variable = {};
        entries.forEach(([k, v]) => {
          obj.variable[k] = v;
        });
      }
    }
    if (message.activeGridmeter !== undefined && message.activeGridmeter !== "") {
      obj.activeGridmeter = message.activeGridmeter;
    }
    if (message.plantControllerName !== undefined && message.plantControllerName !== "") {
      obj.plantControllerName = message.plantControllerName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ControllerSubscription_ControllerGroup>, I>>(
    base?: I,
  ): ControllerSubscription_ControllerGroup {
    return ControllerSubscription_ControllerGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ControllerSubscription_ControllerGroup>, I>>(
    object: I,
  ): ControllerSubscription_ControllerGroup {
    const message = createBaseControllerSubscription_ControllerGroup();
    message.controllerName = object.controllerName ?? "";
    message.groupName = object.groupName ?? "";
    message.variable = Object.entries(object.variable ?? {}).reduce<{ [key: number]: number }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[gt.Number(key)] = gt.Number(value);
      }
      return acc;
    }, {});
    message.activeGridmeter = object.activeGridmeter ?? "";
    message.plantControllerName = object.plantControllerName ?? "";
    return message;
  },
};

function createBaseControllerSubscription_ControllerGroup_VariableEntry(): ControllerSubscription_ControllerGroup_VariableEntry {
  return { key: 0, value: 0 };
}

export const ControllerSubscription_ControllerGroup_VariableEntry = {
  fromJSON(object: any): ControllerSubscription_ControllerGroup_VariableEntry {
    return {
      key: isSet(object.key) ? gt.Number(object.key) : 0,
      value: isSet(object.value) ? gt.Number(object.value) : 0,
    };
  },

  toJSON(message: ControllerSubscription_ControllerGroup_VariableEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== 0) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ControllerSubscription_ControllerGroup_VariableEntry>, I>>(
    base?: I,
  ): ControllerSubscription_ControllerGroup_VariableEntry {
    return ControllerSubscription_ControllerGroup_VariableEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ControllerSubscription_ControllerGroup_VariableEntry>, I>>(
    object: I,
  ): ControllerSubscription_ControllerGroup_VariableEntry {
    const message = createBaseControllerSubscription_ControllerGroup_VariableEntry();
    message.key = object.key ?? 0;
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseParameterSubscription(): ParameterSubscription {
  return { sampleTime: 0, group: [] };
}

export const ParameterSubscription = {
  fromJSON(object: any): ParameterSubscription {
    return {
      sampleTime: isSet(object.sampleTime) ? gt.Number(object.sampleTime) : 0,
      group: gt.Array.isArray(object?.group)
        ? object.group.map((e: any) => ParameterSubscription_ControllerGroup.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ParameterSubscription): unknown {
    const obj: any = {};
    if (message.sampleTime !== undefined && message.sampleTime !== 0) {
      obj.sampleTime = Math.round(message.sampleTime);
    }
    if (message.group?.length) {
      obj.group = message.group.map((e) => ParameterSubscription_ControllerGroup.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParameterSubscription>, I>>(base?: I): ParameterSubscription {
    return ParameterSubscription.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParameterSubscription>, I>>(object: I): ParameterSubscription {
    const message = createBaseParameterSubscription();
    message.sampleTime = object.sampleTime ?? 0;
    message.group = object.group?.map((e) => ParameterSubscription_ControllerGroup.fromPartial(e)) || [];
    return message;
  },
};

function createBaseParameterSubscription_ControllerGroup(): ParameterSubscription_ControllerGroup {
  return { controllerName: "", groupName: "", parameter: {} };
}

export const ParameterSubscription_ControllerGroup = {
  fromJSON(object: any): ParameterSubscription_ControllerGroup {
    return {
      controllerName: isSet(object.controllerName) ? gt.String(object.controllerName) : "",
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      parameter: isObject(object.parameter)
        ? Object.entries(object.parameter).reduce<
          { [key: number]: ParameterSubscription_ControllerGroup_ParameterInfo }
        >((acc, [key, value]) => {
          acc[gt.Number(key)] = ParameterSubscription_ControllerGroup_ParameterInfo.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ParameterSubscription_ControllerGroup): unknown {
    const obj: any = {};
    if (message.controllerName !== undefined && message.controllerName !== "") {
      obj.controllerName = message.controllerName;
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.parameter) {
      const entries = Object.entries(message.parameter);
      if (entries.length > 0) {
        obj.parameter = {};
        entries.forEach(([k, v]) => {
          obj.parameter[k] = ParameterSubscription_ControllerGroup_ParameterInfo.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParameterSubscription_ControllerGroup>, I>>(
    base?: I,
  ): ParameterSubscription_ControllerGroup {
    return ParameterSubscription_ControllerGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParameterSubscription_ControllerGroup>, I>>(
    object: I,
  ): ParameterSubscription_ControllerGroup {
    const message = createBaseParameterSubscription_ControllerGroup();
    message.controllerName = object.controllerName ?? "";
    message.groupName = object.groupName ?? "";
    message.parameter = Object.entries(object.parameter ?? {}).reduce<
      { [key: number]: ParameterSubscription_ControllerGroup_ParameterInfo }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[gt.Number(key)] = ParameterSubscription_ControllerGroup_ParameterInfo.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseParameterSubscription_ControllerGroup_ParameterEntry(): ParameterSubscription_ControllerGroup_ParameterEntry {
  return { key: 0, value: undefined };
}

export const ParameterSubscription_ControllerGroup_ParameterEntry = {
  fromJSON(object: any): ParameterSubscription_ControllerGroup_ParameterEntry {
    return {
      key: isSet(object.key) ? gt.Number(object.key) : 0,
      value: isSet(object.value)
        ? ParameterSubscription_ControllerGroup_ParameterInfo.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: ParameterSubscription_ControllerGroup_ParameterEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = ParameterSubscription_ControllerGroup_ParameterInfo.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParameterSubscription_ControllerGroup_ParameterEntry>, I>>(
    base?: I,
  ): ParameterSubscription_ControllerGroup_ParameterEntry {
    return ParameterSubscription_ControllerGroup_ParameterEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParameterSubscription_ControllerGroup_ParameterEntry>, I>>(
    object: I,
  ): ParameterSubscription_ControllerGroup_ParameterEntry {
    const message = createBaseParameterSubscription_ControllerGroup_ParameterEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? ParameterSubscription_ControllerGroup_ParameterInfo.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseParameterSubscription_ControllerGroup_ParameterInfo(): ParameterSubscription_ControllerGroup_ParameterInfo {
  return {
    value: 0,
    unit: "",
    controller: "",
    function: "",
    minValue: 0,
    maxValue: 0,
    allowedSources: 0,
    type: ParameterSubscription_DataType.Integer,
    permissionGroup: ParameterSubscription_PermissionGroup.Other,
  };
}

export const ParameterSubscription_ControllerGroup_ParameterInfo = {
  fromJSON(object: any): ParameterSubscription_ControllerGroup_ParameterInfo {
    return {
      value: isSet(object.value) ? gt.Number(object.value) : 0,
      unit: isSet(object.unit) ? gt.String(object.unit) : "",
      controller: isSet(object.controller) ? gt.String(object.controller) : "",
      function: isSet(object.function) ? gt.String(object.function) : "",
      minValue: isSet(object.minValue) ? gt.Number(object.minValue) : 0,
      maxValue: isSet(object.maxValue) ? gt.Number(object.maxValue) : 0,
      allowedSources: isSet(object.allowedSources) ? gt.Number(object.allowedSources) : 0,
      type: isSet(object.type)
        ? parameterSubscription_DataTypeFromJSON(object.type)
        : ParameterSubscription_DataType.Integer,
      permissionGroup: isSet(object.permissionGroup)
        ? parameterSubscription_PermissionGroupFromJSON(object.permissionGroup)
        : ParameterSubscription_PermissionGroup.Other,
    };
  },

  toJSON(message: ParameterSubscription_ControllerGroup_ParameterInfo): unknown {
    const obj: any = {};
    if (message.value !== undefined && message.value !== 0) {
      obj.value = message.value;
    }
    if (message.unit !== undefined && message.unit !== "") {
      obj.unit = message.unit;
    }
    if (message.controller !== undefined && message.controller !== "") {
      obj.controller = message.controller;
    }
    if (message.function !== undefined && message.function !== "") {
      obj.function = message.function;
    }
    if (message.minValue !== undefined && message.minValue !== 0) {
      obj.minValue = message.minValue;
    }
    if (message.maxValue !== undefined && message.maxValue !== 0) {
      obj.maxValue = message.maxValue;
    }
    if (message.allowedSources !== undefined && message.allowedSources !== 0) {
      obj.allowedSources = Math.round(message.allowedSources);
    }
    if (message.type !== undefined && message.type !== ParameterSubscription_DataType.Integer) {
      obj.type = parameterSubscription_DataTypeToJSON(message.type);
    }
    if (
      message.permissionGroup !== undefined && message.permissionGroup !== ParameterSubscription_PermissionGroup.Other
    ) {
      obj.permissionGroup = parameterSubscription_PermissionGroupToJSON(message.permissionGroup);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParameterSubscription_ControllerGroup_ParameterInfo>, I>>(
    base?: I,
  ): ParameterSubscription_ControllerGroup_ParameterInfo {
    return ParameterSubscription_ControllerGroup_ParameterInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParameterSubscription_ControllerGroup_ParameterInfo>, I>>(
    object: I,
  ): ParameterSubscription_ControllerGroup_ParameterInfo {
    const message = createBaseParameterSubscription_ControllerGroup_ParameterInfo();
    message.value = object.value ?? 0;
    message.unit = object.unit ?? "";
    message.controller = object.controller ?? "";
    message.function = object.function ?? "";
    message.minValue = object.minValue ?? 0;
    message.maxValue = object.maxValue ?? 0;
    message.allowedSources = object.allowedSources ?? 0;
    message.type = object.type ?? ParameterSubscription_DataType.Integer;
    message.permissionGroup = object.permissionGroup ?? ParameterSubscription_PermissionGroup.Other;
    return message;
  },
};

function createBaseExecutionStatisticsSubscription(): ExecutionStatisticsSubscription {
  return {
    sampleTime: 0,
    msgDiff: 0,
    timeSinceStart: 0,
    djSendQueueCount: 0,
    djReceiveQueueCount: 0,
    controlLoopStatistics: undefined,
    gridmeterManagerStatistics: undefined,
    turbineManagerStatistics: undefined,
  };
}

export const ExecutionStatisticsSubscription = {
  fromJSON(object: any): ExecutionStatisticsSubscription {
    return {
      sampleTime: isSet(object.sampleTime) ? gt.Number(object.sampleTime) : 0,
      msgDiff: isSet(object.msgDiff) ? gt.Number(object.msgDiff) : 0,
      timeSinceStart: isSet(object.timeSinceStart) ? gt.Number(object.timeSinceStart) : 0,
      djSendQueueCount: isSet(object.djSendQueueCount) ? gt.Number(object.djSendQueueCount) : 0,
      djReceiveQueueCount: isSet(object.djReceiveQueueCount) ? gt.Number(object.djReceiveQueueCount) : 0,
      controlLoopStatistics: isSet(object.controlLoopStatistics)
        ? ExecutionStatisticsSubscription_ControlLoopStatistics.fromJSON(object.controlLoopStatistics)
        : undefined,
      gridmeterManagerStatistics: isSet(object.gridmeterManagerStatistics)
        ? ExecutionStatisticsSubscription_GridmeterManagerStatistics.fromJSON(object.gridmeterManagerStatistics)
        : undefined,
      turbineManagerStatistics: isSet(object.turbineManagerStatistics)
        ? ExecutionStatisticsSubscription_TurbineManagerStatistics.fromJSON(object.turbineManagerStatistics)
        : undefined,
    };
  },

  toJSON(message: ExecutionStatisticsSubscription): unknown {
    const obj: any = {};
    if (message.sampleTime !== undefined && message.sampleTime !== 0) {
      obj.sampleTime = Math.round(message.sampleTime);
    }
    if (message.msgDiff !== undefined && message.msgDiff !== 0) {
      obj.msgDiff = Math.round(message.msgDiff);
    }
    if (message.timeSinceStart !== undefined && message.timeSinceStart !== 0) {
      obj.timeSinceStart = message.timeSinceStart;
    }
    if (message.djSendQueueCount !== undefined && message.djSendQueueCount !== 0) {
      obj.djSendQueueCount = Math.round(message.djSendQueueCount);
    }
    if (message.djReceiveQueueCount !== undefined && message.djReceiveQueueCount !== 0) {
      obj.djReceiveQueueCount = Math.round(message.djReceiveQueueCount);
    }
    if (message.controlLoopStatistics !== undefined) {
      obj.controlLoopStatistics = ExecutionStatisticsSubscription_ControlLoopStatistics.toJSON(
        message.controlLoopStatistics,
      );
    }
    if (message.gridmeterManagerStatistics !== undefined) {
      obj.gridmeterManagerStatistics = ExecutionStatisticsSubscription_GridmeterManagerStatistics.toJSON(
        message.gridmeterManagerStatistics,
      );
    }
    if (message.turbineManagerStatistics !== undefined) {
      obj.turbineManagerStatistics = ExecutionStatisticsSubscription_TurbineManagerStatistics.toJSON(
        message.turbineManagerStatistics,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecutionStatisticsSubscription>, I>>(base?: I): ExecutionStatisticsSubscription {
    return ExecutionStatisticsSubscription.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExecutionStatisticsSubscription>, I>>(
    object: I,
  ): ExecutionStatisticsSubscription {
    const message = createBaseExecutionStatisticsSubscription();
    message.sampleTime = object.sampleTime ?? 0;
    message.msgDiff = object.msgDiff ?? 0;
    message.timeSinceStart = object.timeSinceStart ?? 0;
    message.djSendQueueCount = object.djSendQueueCount ?? 0;
    message.djReceiveQueueCount = object.djReceiveQueueCount ?? 0;
    message.controlLoopStatistics =
      (object.controlLoopStatistics !== undefined && object.controlLoopStatistics !== null)
        ? ExecutionStatisticsSubscription_ControlLoopStatistics.fromPartial(object.controlLoopStatistics)
        : undefined;
    message.gridmeterManagerStatistics =
      (object.gridmeterManagerStatistics !== undefined && object.gridmeterManagerStatistics !== null)
        ? ExecutionStatisticsSubscription_GridmeterManagerStatistics.fromPartial(object.gridmeterManagerStatistics)
        : undefined;
    message.turbineManagerStatistics =
      (object.turbineManagerStatistics !== undefined && object.turbineManagerStatistics !== null)
        ? ExecutionStatisticsSubscription_TurbineManagerStatistics.fromPartial(object.turbineManagerStatistics)
        : undefined;
    return message;
  },
};

function createBaseExecutionStatisticsSubscription_ControlLoopStatistics(): ExecutionStatisticsSubscription_ControlLoopStatistics {
  return {
    cycleTime: undefined,
    criticalWorkTime: undefined,
    otherWorkTime: undefined,
    commitTime: undefined,
    gridMeasurementAge: undefined,
  };
}

export const ExecutionStatisticsSubscription_ControlLoopStatistics = {
  fromJSON(object: any): ExecutionStatisticsSubscription_ControlLoopStatistics {
    return {
      cycleTime: isSet(object.cycleTime)
        ? ExecutionStatisticsSubscription_StatisticsData.fromJSON(object.cycleTime)
        : undefined,
      criticalWorkTime: isSet(object.criticalWorkTime)
        ? ExecutionStatisticsSubscription_StatisticsData.fromJSON(object.criticalWorkTime)
        : undefined,
      otherWorkTime: isSet(object.otherWorkTime)
        ? ExecutionStatisticsSubscription_StatisticsData.fromJSON(object.otherWorkTime)
        : undefined,
      commitTime: isSet(object.commitTime)
        ? ExecutionStatisticsSubscription_StatisticsData.fromJSON(object.commitTime)
        : undefined,
      gridMeasurementAge: isSet(object.gridMeasurementAge)
        ? ExecutionStatisticsSubscription_StatisticsData.fromJSON(object.gridMeasurementAge)
        : undefined,
    };
  },

  toJSON(message: ExecutionStatisticsSubscription_ControlLoopStatistics): unknown {
    const obj: any = {};
    if (message.cycleTime !== undefined) {
      obj.cycleTime = ExecutionStatisticsSubscription_StatisticsData.toJSON(message.cycleTime);
    }
    if (message.criticalWorkTime !== undefined) {
      obj.criticalWorkTime = ExecutionStatisticsSubscription_StatisticsData.toJSON(message.criticalWorkTime);
    }
    if (message.otherWorkTime !== undefined) {
      obj.otherWorkTime = ExecutionStatisticsSubscription_StatisticsData.toJSON(message.otherWorkTime);
    }
    if (message.commitTime !== undefined) {
      obj.commitTime = ExecutionStatisticsSubscription_StatisticsData.toJSON(message.commitTime);
    }
    if (message.gridMeasurementAge !== undefined) {
      obj.gridMeasurementAge = ExecutionStatisticsSubscription_StatisticsData.toJSON(message.gridMeasurementAge);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecutionStatisticsSubscription_ControlLoopStatistics>, I>>(
    base?: I,
  ): ExecutionStatisticsSubscription_ControlLoopStatistics {
    return ExecutionStatisticsSubscription_ControlLoopStatistics.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExecutionStatisticsSubscription_ControlLoopStatistics>, I>>(
    object: I,
  ): ExecutionStatisticsSubscription_ControlLoopStatistics {
    const message = createBaseExecutionStatisticsSubscription_ControlLoopStatistics();
    message.cycleTime = (object.cycleTime !== undefined && object.cycleTime !== null)
      ? ExecutionStatisticsSubscription_StatisticsData.fromPartial(object.cycleTime)
      : undefined;
    message.criticalWorkTime = (object.criticalWorkTime !== undefined && object.criticalWorkTime !== null)
      ? ExecutionStatisticsSubscription_StatisticsData.fromPartial(object.criticalWorkTime)
      : undefined;
    message.otherWorkTime = (object.otherWorkTime !== undefined && object.otherWorkTime !== null)
      ? ExecutionStatisticsSubscription_StatisticsData.fromPartial(object.otherWorkTime)
      : undefined;
    message.commitTime = (object.commitTime !== undefined && object.commitTime !== null)
      ? ExecutionStatisticsSubscription_StatisticsData.fromPartial(object.commitTime)
      : undefined;
    message.gridMeasurementAge = (object.gridMeasurementAge !== undefined && object.gridMeasurementAge !== null)
      ? ExecutionStatisticsSubscription_StatisticsData.fromPartial(object.gridMeasurementAge)
      : undefined;
    return message;
  },
};

function createBaseExecutionStatisticsSubscription_GridmeterManagerStatistics(): ExecutionStatisticsSubscription_GridmeterManagerStatistics {
  return { cycleTime: undefined, leadTime: undefined, roundTripTime: undefined };
}

export const ExecutionStatisticsSubscription_GridmeterManagerStatistics = {
  fromJSON(object: any): ExecutionStatisticsSubscription_GridmeterManagerStatistics {
    return {
      cycleTime: isSet(object.cycleTime)
        ? ExecutionStatisticsSubscription_StatisticsData.fromJSON(object.cycleTime)
        : undefined,
      leadTime: isSet(object.leadTime)
        ? ExecutionStatisticsSubscription_StatisticsData.fromJSON(object.leadTime)
        : undefined,
      roundTripTime: isSet(object.roundTripTime)
        ? ExecutionStatisticsSubscription_StatisticsData.fromJSON(object.roundTripTime)
        : undefined,
    };
  },

  toJSON(message: ExecutionStatisticsSubscription_GridmeterManagerStatistics): unknown {
    const obj: any = {};
    if (message.cycleTime !== undefined) {
      obj.cycleTime = ExecutionStatisticsSubscription_StatisticsData.toJSON(message.cycleTime);
    }
    if (message.leadTime !== undefined) {
      obj.leadTime = ExecutionStatisticsSubscription_StatisticsData.toJSON(message.leadTime);
    }
    if (message.roundTripTime !== undefined) {
      obj.roundTripTime = ExecutionStatisticsSubscription_StatisticsData.toJSON(message.roundTripTime);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecutionStatisticsSubscription_GridmeterManagerStatistics>, I>>(
    base?: I,
  ): ExecutionStatisticsSubscription_GridmeterManagerStatistics {
    return ExecutionStatisticsSubscription_GridmeterManagerStatistics.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExecutionStatisticsSubscription_GridmeterManagerStatistics>, I>>(
    object: I,
  ): ExecutionStatisticsSubscription_GridmeterManagerStatistics {
    const message = createBaseExecutionStatisticsSubscription_GridmeterManagerStatistics();
    message.cycleTime = (object.cycleTime !== undefined && object.cycleTime !== null)
      ? ExecutionStatisticsSubscription_StatisticsData.fromPartial(object.cycleTime)
      : undefined;
    message.leadTime = (object.leadTime !== undefined && object.leadTime !== null)
      ? ExecutionStatisticsSubscription_StatisticsData.fromPartial(object.leadTime)
      : undefined;
    message.roundTripTime = (object.roundTripTime !== undefined && object.roundTripTime !== null)
      ? ExecutionStatisticsSubscription_StatisticsData.fromPartial(object.roundTripTime)
      : undefined;
    return message;
  },
};

function createBaseExecutionStatisticsSubscription_TurbineManagerStatistics(): ExecutionStatisticsSubscription_TurbineManagerStatistics {
  return {
    cycleTime: undefined,
    leadTime: undefined,
    turbineRoundTripTime: undefined,
    genericGeneratorRoundTripTime: undefined,
  };
}

export const ExecutionStatisticsSubscription_TurbineManagerStatistics = {
  fromJSON(object: any): ExecutionStatisticsSubscription_TurbineManagerStatistics {
    return {
      cycleTime: isSet(object.cycleTime)
        ? ExecutionStatisticsSubscription_StatisticsData.fromJSON(object.cycleTime)
        : undefined,
      leadTime: isSet(object.leadTime)
        ? ExecutionStatisticsSubscription_StatisticsData.fromJSON(object.leadTime)
        : undefined,
      turbineRoundTripTime: isSet(object.turbineRoundTripTime)
        ? ExecutionStatisticsSubscription_StatisticsData.fromJSON(object.turbineRoundTripTime)
        : undefined,
      genericGeneratorRoundTripTime: isSet(object.genericGeneratorRoundTripTime)
        ? ExecutionStatisticsSubscription_StatisticsData.fromJSON(object.genericGeneratorRoundTripTime)
        : undefined,
    };
  },

  toJSON(message: ExecutionStatisticsSubscription_TurbineManagerStatistics): unknown {
    const obj: any = {};
    if (message.cycleTime !== undefined) {
      obj.cycleTime = ExecutionStatisticsSubscription_StatisticsData.toJSON(message.cycleTime);
    }
    if (message.leadTime !== undefined) {
      obj.leadTime = ExecutionStatisticsSubscription_StatisticsData.toJSON(message.leadTime);
    }
    if (message.turbineRoundTripTime !== undefined) {
      obj.turbineRoundTripTime = ExecutionStatisticsSubscription_StatisticsData.toJSON(message.turbineRoundTripTime);
    }
    if (message.genericGeneratorRoundTripTime !== undefined) {
      obj.genericGeneratorRoundTripTime = ExecutionStatisticsSubscription_StatisticsData.toJSON(
        message.genericGeneratorRoundTripTime,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecutionStatisticsSubscription_TurbineManagerStatistics>, I>>(
    base?: I,
  ): ExecutionStatisticsSubscription_TurbineManagerStatistics {
    return ExecutionStatisticsSubscription_TurbineManagerStatistics.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExecutionStatisticsSubscription_TurbineManagerStatistics>, I>>(
    object: I,
  ): ExecutionStatisticsSubscription_TurbineManagerStatistics {
    const message = createBaseExecutionStatisticsSubscription_TurbineManagerStatistics();
    message.cycleTime = (object.cycleTime !== undefined && object.cycleTime !== null)
      ? ExecutionStatisticsSubscription_StatisticsData.fromPartial(object.cycleTime)
      : undefined;
    message.leadTime = (object.leadTime !== undefined && object.leadTime !== null)
      ? ExecutionStatisticsSubscription_StatisticsData.fromPartial(object.leadTime)
      : undefined;
    message.turbineRoundTripTime = (object.turbineRoundTripTime !== undefined && object.turbineRoundTripTime !== null)
      ? ExecutionStatisticsSubscription_StatisticsData.fromPartial(object.turbineRoundTripTime)
      : undefined;
    message.genericGeneratorRoundTripTime =
      (object.genericGeneratorRoundTripTime !== undefined && object.genericGeneratorRoundTripTime !== null)
        ? ExecutionStatisticsSubscription_StatisticsData.fromPartial(object.genericGeneratorRoundTripTime)
        : undefined;
    return message;
  },
};

function createBaseExecutionStatisticsSubscription_StatisticsData(): ExecutionStatisticsSubscription_StatisticsData {
  return { minimum: 0, maximum: 0, average: 0 };
}

export const ExecutionStatisticsSubscription_StatisticsData = {
  fromJSON(object: any): ExecutionStatisticsSubscription_StatisticsData {
    return {
      minimum: isSet(object.minimum) ? gt.Number(object.minimum) : 0,
      maximum: isSet(object.maximum) ? gt.Number(object.maximum) : 0,
      average: isSet(object.average) ? gt.Number(object.average) : 0,
    };
  },

  toJSON(message: ExecutionStatisticsSubscription_StatisticsData): unknown {
    const obj: any = {};
    if (message.minimum !== undefined && message.minimum !== 0) {
      obj.minimum = message.minimum;
    }
    if (message.maximum !== undefined && message.maximum !== 0) {
      obj.maximum = message.maximum;
    }
    if (message.average !== undefined && message.average !== 0) {
      obj.average = message.average;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExecutionStatisticsSubscription_StatisticsData>, I>>(
    base?: I,
  ): ExecutionStatisticsSubscription_StatisticsData {
    return ExecutionStatisticsSubscription_StatisticsData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ExecutionStatisticsSubscription_StatisticsData>, I>>(
    object: I,
  ): ExecutionStatisticsSubscription_StatisticsData {
    const message = createBaseExecutionStatisticsSubscription_StatisticsData();
    message.minimum = object.minimum ?? 0;
    message.maximum = object.maximum ?? 0;
    message.average = object.average ?? 0;
    return message;
  },
};

function createBaseParameterDataValue(): ParameterDataValue {
  return { doubleValue: 0, sint64Value: 0, uint64Value: 0, sint32Value: 0, uint32Value: 0, boolValue: false };
}

export const ParameterDataValue = {
  fromJSON(object: any): ParameterDataValue {
    return {
      doubleValue: isSet(object.doubleValue) ? gt.Number(object.doubleValue) : 0,
      sint64Value: isSet(object.sint64Value) ? gt.Number(object.sint64Value) : 0,
      uint64Value: isSet(object.uint64Value) ? gt.Number(object.uint64Value) : 0,
      sint32Value: isSet(object.sint32Value) ? gt.Number(object.sint32Value) : 0,
      uint32Value: isSet(object.uint32Value) ? gt.Number(object.uint32Value) : 0,
      boolValue: isSet(object.boolValue) ? gt.Boolean(object.boolValue) : false,
    };
  },

  toJSON(message: ParameterDataValue): unknown {
    const obj: any = {};
    if (message.doubleValue !== undefined && message.doubleValue !== 0) {
      obj.doubleValue = message.doubleValue;
    }
    if (message.sint64Value !== undefined && message.sint64Value !== 0) {
      obj.sint64Value = Math.round(message.sint64Value);
    }
    if (message.uint64Value !== undefined && message.uint64Value !== 0) {
      obj.uint64Value = Math.round(message.uint64Value);
    }
    if (message.sint32Value !== undefined && message.sint32Value !== 0) {
      obj.sint32Value = Math.round(message.sint32Value);
    }
    if (message.uint32Value !== undefined && message.uint32Value !== 0) {
      obj.uint32Value = Math.round(message.uint32Value);
    }
    if (message.boolValue !== undefined && message.boolValue !== false) {
      obj.boolValue = message.boolValue;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParameterDataValue>, I>>(base?: I): ParameterDataValue {
    return ParameterDataValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParameterDataValue>, I>>(object: I): ParameterDataValue {
    const message = createBaseParameterDataValue();
    message.doubleValue = object.doubleValue ?? 0;
    message.sint64Value = object.sint64Value ?? 0;
    message.uint64Value = object.uint64Value ?? 0;
    message.sint32Value = object.sint32Value ?? 0;
    message.uint32Value = object.uint32Value ?? 0;
    message.boolValue = object.boolValue ?? false;
    return message;
  },
};

function createBaseCustomSubscription(): CustomSubscription {
  return { sampleTime: 0, namespaces: [], dataset: "" };
}

export const CustomSubscription = {
  fromJSON(object: any): CustomSubscription {
    return {
      sampleTime: isSet(object.sampleTime) ? gt.Number(object.sampleTime) : 0,
      namespaces: gt.Array.isArray(object?.namespaces)
        ? object.namespaces.map((e: any) => CustomSubscription_CustomNamespace.fromJSON(e))
        : [],
      dataset: isSet(object.dataset) ? gt.String(object.dataset) : "",
    };
  },

  toJSON(message: CustomSubscription): unknown {
    const obj: any = {};
    if (message.sampleTime !== undefined && message.sampleTime !== 0) {
      obj.sampleTime = Math.round(message.sampleTime);
    }
    if (message.namespaces?.length) {
      obj.namespaces = message.namespaces.map((e) => CustomSubscription_CustomNamespace.toJSON(e));
    }
    if (message.dataset !== undefined && message.dataset !== "") {
      obj.dataset = message.dataset;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CustomSubscription>, I>>(base?: I): CustomSubscription {
    return CustomSubscription.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CustomSubscription>, I>>(object: I): CustomSubscription {
    const message = createBaseCustomSubscription();
    message.sampleTime = object.sampleTime ?? 0;
    message.namespaces = object.namespaces?.map((e) => CustomSubscription_CustomNamespace.fromPartial(e)) || [];
    message.dataset = object.dataset ?? "";
    return message;
  },
};

function createBaseCustomSubscription_CustomNamespace(): CustomSubscription_CustomNamespace {
  return { nameSpace: "", parameters: [], variables: [] };
}

export const CustomSubscription_CustomNamespace = {
  fromJSON(object: any): CustomSubscription_CustomNamespace {
    return {
      nameSpace: isSet(object.nameSpace) ? gt.String(object.nameSpace) : "",
      parameters: gt.Array.isArray(object?.parameters)
        ? object.parameters.map((e: any) => CustomSubscription_CustomValue.fromJSON(e))
        : [],
      variables: gt.Array.isArray(object?.variables)
        ? object.variables.map((e: any) => CustomSubscription_CustomValue.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CustomSubscription_CustomNamespace): unknown {
    const obj: any = {};
    if (message.nameSpace !== undefined && message.nameSpace !== "") {
      obj.nameSpace = message.nameSpace;
    }
    if (message.parameters?.length) {
      obj.parameters = message.parameters.map((e) => CustomSubscription_CustomValue.toJSON(e));
    }
    if (message.variables?.length) {
      obj.variables = message.variables.map((e) => CustomSubscription_CustomValue.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CustomSubscription_CustomNamespace>, I>>(
    base?: I,
  ): CustomSubscription_CustomNamespace {
    return CustomSubscription_CustomNamespace.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CustomSubscription_CustomNamespace>, I>>(
    object: I,
  ): CustomSubscription_CustomNamespace {
    const message = createBaseCustomSubscription_CustomNamespace();
    message.nameSpace = object.nameSpace ?? "";
    message.parameters = object.parameters?.map((e) => CustomSubscription_CustomValue.fromPartial(e)) || [];
    message.variables = object.variables?.map((e) => CustomSubscription_CustomValue.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCustomSubscription_CustomValue(): CustomSubscription_CustomValue {
  return { name: "", value: undefined, minValue: undefined, maxValue: undefined, type: ParameterDataType.Double };
}

export const CustomSubscription_CustomValue = {
  fromJSON(object: any): CustomSubscription_CustomValue {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      value: isSet(object.value) ? ParameterDataValue.fromJSON(object.value) : undefined,
      minValue: isSet(object.minValue) ? ParameterDataValue.fromJSON(object.minValue) : undefined,
      maxValue: isSet(object.maxValue) ? ParameterDataValue.fromJSON(object.maxValue) : undefined,
      type: isSet(object.type) ? parameterDataTypeFromJSON(object.type) : ParameterDataType.Double,
    };
  },

  toJSON(message: CustomSubscription_CustomValue): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.value !== undefined) {
      obj.value = ParameterDataValue.toJSON(message.value);
    }
    if (message.minValue !== undefined) {
      obj.minValue = ParameterDataValue.toJSON(message.minValue);
    }
    if (message.maxValue !== undefined) {
      obj.maxValue = ParameterDataValue.toJSON(message.maxValue);
    }
    if (message.type !== undefined && message.type !== ParameterDataType.Double) {
      obj.type = parameterDataTypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CustomSubscription_CustomValue>, I>>(base?: I): CustomSubscription_CustomValue {
    return CustomSubscription_CustomValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CustomSubscription_CustomValue>, I>>(
    object: I,
  ): CustomSubscription_CustomValue {
    const message = createBaseCustomSubscription_CustomValue();
    message.name = object.name ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? ParameterDataValue.fromPartial(object.value)
      : undefined;
    message.minValue = (object.minValue !== undefined && object.minValue !== null)
      ? ParameterDataValue.fromPartial(object.minValue)
      : undefined;
    message.maxValue = (object.maxValue !== undefined && object.maxValue !== null)
      ? ParameterDataValue.fromPartial(object.maxValue)
      : undefined;
    message.type = object.type ?? ParameterDataType.Double;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
