/* eslint-disable */
import {
  HaBackupStatus,
  haBackupStatusFromJSON,
  haBackupStatusToJSON,
  HaClusterStatus,
  haClusterStatusFromJSON,
  haClusterStatusToJSON,
  InitialState,
  initialStateFromJSON,
  initialStateToJSON,
} from "./HACommon.Generated";
import { Permission, permissionFromJSON, permissionToJSON } from "./Permission.Generated";
import {
  ParameterSubscription_PermissionGroup,
  parameterSubscription_PermissionGroupFromJSON,
  parameterSubscription_PermissionGroupToJSON,
} from "./SACommon.Generated";
import { Timestamp } from "./google/protobuf/timestamp.Generated";

export enum DataTypes {
  DataTypeInteger = "DataTypeInteger",
  DataTypeBoolean = "DataTypeBoolean",
  DataTypeDouble = "DataTypeDouble",
  DataTypeString = "DataTypeString",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function dataTypesFromJSON(object: any): DataTypes {
  switch (object) {
    case 0:
    case "DataTypeInteger":
      return DataTypes.DataTypeInteger;
    case 1:
    case "DataTypeBoolean":
      return DataTypes.DataTypeBoolean;
    case 2:
    case "DataTypeDouble":
      return DataTypes.DataTypeDouble;
    case 3:
    case "DataTypeString":
      return DataTypes.DataTypeString;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DataTypes.UNRECOGNIZED;
  }
}

export function dataTypesToJSON(object: DataTypes): string {
  switch (object) {
    case DataTypes.DataTypeInteger:
      return "DataTypeInteger";
    case DataTypes.DataTypeBoolean:
      return "DataTypeBoolean";
    case DataTypes.DataTypeDouble:
      return "DataTypeDouble";
    case DataTypes.DataTypeString:
      return "DataTypeString";
    case DataTypes.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum CustomDataDataType {
  SInt64 = "SInt64",
  UInt64 = "UInt64",
  SInt32 = "SInt32",
  UInt32 = "UInt32",
  Boolean = "Boolean",
  Double = "Double",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function customDataDataTypeFromJSON(object: any): CustomDataDataType {
  switch (object) {
    case 0:
    case "SInt64":
      return CustomDataDataType.SInt64;
    case 1:
    case "UInt64":
      return CustomDataDataType.UInt64;
    case 2:
    case "SInt32":
      return CustomDataDataType.SInt32;
    case 3:
    case "UInt32":
      return CustomDataDataType.UInt32;
    case 4:
    case "Boolean":
      return CustomDataDataType.Boolean;
    case 5:
    case "Double":
      return CustomDataDataType.Double;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CustomDataDataType.UNRECOGNIZED;
  }
}

export function customDataDataTypeToJSON(object: CustomDataDataType): string {
  switch (object) {
    case CustomDataDataType.SInt64:
      return "SInt64";
    case CustomDataDataType.UInt64:
      return "UInt64";
    case CustomDataDataType.SInt32:
      return "SInt32";
    case CustomDataDataType.UInt32:
      return "UInt32";
    case CustomDataDataType.Boolean:
      return "Boolean";
    case CustomDataDataType.Double:
      return "Double";
    case CustomDataDataType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum StatisticInterest {
  Boring = "Boring",
  Normal = "Normal",
  Interesting = "Interesting",
  AttentionNeeded = "AttentionNeeded",
}

export function statisticInterestFromJSON(object: any): StatisticInterest {
  switch (object) {
    case -1:
    case "Boring":
      return StatisticInterest.Boring;
    case 0:
    case "Normal":
      return StatisticInterest.Normal;
    case 1:
    case "Interesting":
      return StatisticInterest.Interesting;
    case 2:
    case "AttentionNeeded":
      return StatisticInterest.AttentionNeeded;
    default:
      return StatisticInterest.Boring;
  }
}

export function statisticInterestToJSON(object: StatisticInterest): string {
  switch (object) {
    case StatisticInterest.Boring:
      return "Boring";
    case StatisticInterest.Normal:
      return "Normal";
    case StatisticInterest.Interesting:
      return "Interesting";
    case StatisticInterest.AttentionNeeded:
      return "AttentionNeeded";
    default:
      return "Boring";
  }
}

export interface Alarm {
  stationName?: string | undefined;
  code?: number | undefined;
  alarmName?: string | undefined;
  severity?: number | undefined;
  level?: string | undefined;
  levelNumber?: number | undefined;
  timeOn?: Date | undefined;
  timeOff?: Date | undefined;
  parameter?: string | undefined;
  description?: string | undefined;
  acknowledgeText?: string | undefined;
  acknowledgeOriginator?: string | undefined;
  acknowledgeTime?: Date | undefined;
  seqId?: number | undefined;
  groupName?: string | undefined;
  source?: string | undefined;
}

export interface AlarmDefinition {
  name?: string | undefined;
  code?: number | undefined;
  level?: string | undefined;
  severity?: number | undefined;
  type?: string | undefined;
  description?: string | undefined;
  stationType?: AlarmDefinition_StationType | undefined;
}

export enum AlarmDefinition_StationType {
  Unknown = "Unknown",
  Hppp = "Hppp",
  Turbine = "Turbine",
  GridMeter = "GridMeter",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function alarmDefinition_StationTypeFromJSON(object: any): AlarmDefinition_StationType {
  switch (object) {
    case 0:
    case "Unknown":
      return AlarmDefinition_StationType.Unknown;
    case 1:
    case "Hppp":
      return AlarmDefinition_StationType.Hppp;
    case 2:
    case "Turbine":
      return AlarmDefinition_StationType.Turbine;
    case 3:
    case "GridMeter":
      return AlarmDefinition_StationType.GridMeter;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AlarmDefinition_StationType.UNRECOGNIZED;
  }
}

export function alarmDefinition_StationTypeToJSON(object: AlarmDefinition_StationType): string {
  switch (object) {
    case AlarmDefinition_StationType.Unknown:
      return "Unknown";
    case AlarmDefinition_StationType.Hppp:
      return "Hppp";
    case AlarmDefinition_StationType.Turbine:
      return "Turbine";
    case AlarmDefinition_StationType.GridMeter:
      return "GridMeter";
    case AlarmDefinition_StationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface AlarmLogReply {
  alarms: AlarmLogReply_AlarmLog[];
}

export interface AlarmLogReply_AlarmLog {
  parameter?: string | undefined;
  acknowledgeOriginator?: string | undefined;
  stationName?: string | undefined;
  alarmCode?: number | undefined;
  alarmName?: string | undefined;
  timeOn?: Date | undefined;
  timeOff?: Date | undefined;
  currentStation?: boolean | undefined;
  acknowledgeText?: string | undefined;
  acknowledgeTime?: Date | undefined;
  groupName?: string | undefined;
  source?: string | undefined;
}

export interface HealthReply {
  isHealthy: boolean;
  details?: string | undefined;
}

export interface AuditTrailReply {
  trails: AuditTrailReply_AuditTrail[];
}

export interface AuditTrailReply_AuditTrail {
  entryTime?: Date | undefined;
  userName?: string | undefined;
  detailedDescription?: string | undefined;
  source?: string | undefined;
  trailId?: string | undefined;
  type?: string | undefined;
  serverRole?: string | undefined;
  groupName?: string | undefined;
  status?: string | undefined;
}

export interface ControllerData {
  variableName?: string | undefined;
  controllerName?: string | undefined;
  groupName?: string | undefined;
  sampleTime?: Date | undefined;
  activeGridmeter?: string | undefined;
  unit?: string | undefined;
  variableValue?: number | undefined;
  displayAccuracy?: number | undefined;
  friendlyName?: string | undefined;
  plantControllerName?: string | undefined;
}

export interface CustomAlarm {
  name: string;
  code: number;
  description?: string | undefined;
  level?: CustomAlarm_Level | undefined;
  type?: CustomAlarm_Type | undefined;
  consequence?: CustomAlarm_Consequence | undefined;
  action?: CustomAlarm_Action | undefined;
}

export enum CustomAlarm_Level {
  NONE = "NONE",
  LOW = "LOW",
  NORMAL = "NORMAL",
  URGENT = "URGENT",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function customAlarm_LevelFromJSON(object: any): CustomAlarm_Level {
  switch (object) {
    case 0:
    case "NONE":
      return CustomAlarm_Level.NONE;
    case 1:
    case "LOW":
      return CustomAlarm_Level.LOW;
    case 2:
    case "NORMAL":
      return CustomAlarm_Level.NORMAL;
    case 3:
    case "URGENT":
      return CustomAlarm_Level.URGENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CustomAlarm_Level.UNRECOGNIZED;
  }
}

export function customAlarm_LevelToJSON(object: CustomAlarm_Level): string {
  switch (object) {
    case CustomAlarm_Level.NONE:
      return "NONE";
    case CustomAlarm_Level.LOW:
      return "LOW";
    case CustomAlarm_Level.NORMAL:
      return "NORMAL";
    case CustomAlarm_Level.URGENT:
      return "URGENT";
    case CustomAlarm_Level.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum CustomAlarm_Type {
  Alarm = "Alarm",
  Event = "Event",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function customAlarm_TypeFromJSON(object: any): CustomAlarm_Type {
  switch (object) {
    case 0:
    case "Alarm":
      return CustomAlarm_Type.Alarm;
    case 1:
    case "Event":
      return CustomAlarm_Type.Event;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CustomAlarm_Type.UNRECOGNIZED;
  }
}

export function customAlarm_TypeToJSON(object: CustomAlarm_Type): string {
  switch (object) {
    case CustomAlarm_Type.Alarm:
      return "Alarm";
    case CustomAlarm_Type.Event:
      return "Event";
    case CustomAlarm_Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum CustomAlarm_Consequence {
  NoConsequence = "NoConsequence",
  TurbineControlLost = "TurbineControlLost",
  ParkPowerReduced = "ParkPowerReduced",
  ParkPowerZero = "ParkPowerZero",
  ParkControlLost = "ParkControlLost",
  ParkPowerChanged = "ParkPowerChanged",
  ParkPowerControlReduced = "ParkPowerControlReduced",
  ParkControlSaturated = "ParkControlSaturated",
  ParkVoltageControlLost = "ParkVoltageControlLost",
  ParkPowerControlLost = "ParkPowerControlLost",
  HighAvailabilityLost = "HighAvailabilityLost",
  PolicyRestrictionLost = "PolicyRestrictionLost",
  ReducedSystemPerformance = "ReducedSystemPerformance",
}

export function customAlarm_ConsequenceFromJSON(object: any): CustomAlarm_Consequence {
  switch (object) {
    case -1:
    case "NoConsequence":
      return CustomAlarm_Consequence.NoConsequence;
    case 0:
    case "TurbineControlLost":
      return CustomAlarm_Consequence.TurbineControlLost;
    case 1:
    case "ParkPowerReduced":
      return CustomAlarm_Consequence.ParkPowerReduced;
    case 2:
    case "ParkPowerZero":
      return CustomAlarm_Consequence.ParkPowerZero;
    case 3:
    case "ParkControlLost":
      return CustomAlarm_Consequence.ParkControlLost;
    case 4:
    case "ParkPowerChanged":
      return CustomAlarm_Consequence.ParkPowerChanged;
    case 5:
    case "ParkPowerControlReduced":
      return CustomAlarm_Consequence.ParkPowerControlReduced;
    case 6:
    case "ParkControlSaturated":
      return CustomAlarm_Consequence.ParkControlSaturated;
    case 7:
    case "ParkVoltageControlLost":
      return CustomAlarm_Consequence.ParkVoltageControlLost;
    case 8:
    case "ParkPowerControlLost":
      return CustomAlarm_Consequence.ParkPowerControlLost;
    case 9:
    case "HighAvailabilityLost":
      return CustomAlarm_Consequence.HighAvailabilityLost;
    case 10:
    case "PolicyRestrictionLost":
      return CustomAlarm_Consequence.PolicyRestrictionLost;
    case 11:
    case "ReducedSystemPerformance":
      return CustomAlarm_Consequence.ReducedSystemPerformance;
    default:
      return CustomAlarm_Consequence.NoConsequence;
  }
}

export function customAlarm_ConsequenceToJSON(object: CustomAlarm_Consequence): string {
  switch (object) {
    case CustomAlarm_Consequence.NoConsequence:
      return "NoConsequence";
    case CustomAlarm_Consequence.TurbineControlLost:
      return "TurbineControlLost";
    case CustomAlarm_Consequence.ParkPowerReduced:
      return "ParkPowerReduced";
    case CustomAlarm_Consequence.ParkPowerZero:
      return "ParkPowerZero";
    case CustomAlarm_Consequence.ParkControlLost:
      return "ParkControlLost";
    case CustomAlarm_Consequence.ParkPowerChanged:
      return "ParkPowerChanged";
    case CustomAlarm_Consequence.ParkPowerControlReduced:
      return "ParkPowerControlReduced";
    case CustomAlarm_Consequence.ParkControlSaturated:
      return "ParkControlSaturated";
    case CustomAlarm_Consequence.ParkVoltageControlLost:
      return "ParkVoltageControlLost";
    case CustomAlarm_Consequence.ParkPowerControlLost:
      return "ParkPowerControlLost";
    case CustomAlarm_Consequence.HighAvailabilityLost:
      return "HighAvailabilityLost";
    case CustomAlarm_Consequence.PolicyRestrictionLost:
      return "PolicyRestrictionLost";
    case CustomAlarm_Consequence.ReducedSystemPerformance:
      return "ReducedSystemPerformance";
    default:
      return "NoConsequence";
  }
}

export enum CustomAlarm_Action {
  NoAction = "NoAction",
  InformService = "InformService",
  CallSitePersonel = "CallSitePersonel",
  InformServiceDep = "InformServiceDep",
  InformDevTeam = "InformDevTeam",
}

export function customAlarm_ActionFromJSON(object: any): CustomAlarm_Action {
  switch (object) {
    case -1:
    case "NoAction":
      return CustomAlarm_Action.NoAction;
    case 0:
    case "InformService":
      return CustomAlarm_Action.InformService;
    case 1:
    case "CallSitePersonel":
      return CustomAlarm_Action.CallSitePersonel;
    case 2:
    case "InformServiceDep":
      return CustomAlarm_Action.InformServiceDep;
    case 3:
    case "InformDevTeam":
      return CustomAlarm_Action.InformDevTeam;
    default:
      return CustomAlarm_Action.NoAction;
  }
}

export function customAlarm_ActionToJSON(object: CustomAlarm_Action): string {
  switch (object) {
    case CustomAlarm_Action.NoAction:
      return "NoAction";
    case CustomAlarm_Action.InformService:
      return "InformService";
    case CustomAlarm_Action.CallSitePersonel:
      return "CallSitePersonel";
    case CustomAlarm_Action.InformServiceDep:
      return "InformServiceDep";
    case CustomAlarm_Action.InformDevTeam:
      return "InformDevTeam";
    default:
      return "NoAction";
  }
}

export interface customData {
  name: string;
  description?: string | undefined;
  unit: string;
  datatype: string;
  value: string;
  minvalue?: string | undefined;
  maxvalue?: string | undefined;
}

export interface CustomDataNamespace {
  name: string;
  customparameters: customData[];
  customvariables: customData[];
}

export interface CustomDataReply {
  customNameSpaces: CustomDataNamespace[];
  sampleTime: Date | undefined;
}

export interface customparameter {
  namespace?: string | undefined;
  name: string;
  description?: string | undefined;
  minimum?: number | undefined;
  maximum?: number | undefined;
  unit: string;
  datatype: CustomDataDataType;
}

export interface CustomTagReply {
  customparameters: customparameter[];
  customvariables: customvariable[];
}

export interface customvariable {
  namespace?: string | undefined;
  name: string;
  description: string;
  unit: string;
  datatype: CustomDataDataType;
}

export interface Dataset {
  dataSetId?: number | undefined;
  name?: string | undefined;
  label?: string | undefined;
  xlabel?: string | undefined;
  xmin?: number | undefined;
  xmax?: number | undefined;
  xunit?: string | undefined;
  ylabel?: string | undefined;
  ymin?: number | undefined;
  ymax?: number | undefined;
  yunit?: string | undefined;
  points: Point[];
  groupName?: string | undefined;
}

export interface DatasetDetails {
  description?: string | undefined;
  descriptionId?: number | undefined;
  datasetId?: number | undefined;
}

export interface DirectoryBrowseReply {
  directories: DirectoryBrowseReply_Directory[];
}

export interface DirectoryBrowseReply_Directory {
  name?: string | undefined;
  subDirectories: string[];
  files: DirectoryBrowseReply_Directory_File[];
}

export interface DirectoryBrowseReply_Directory_File {
  name?: string | undefined;
  size?: number | undefined;
}

export interface FileSyncStatusReply {
  serviceState?: FileSyncStatusReply_FileSyncState | undefined;
  folders: FileSyncStatusReply_FolderStatus[];
}

export enum FileSyncStatusReply_FolderId {
  LocalStorage = "LocalStorage",
  PlcWorkingDir = "PlcWorkingDir",
  BackedupConfiguration = "BackedupConfiguration",
  BackedupConfigurationMirror = "BackedupConfigurationMirror",
  WfcData = "WfcData",
  LookupTableHistory = "LookupTableHistory",
  GeneratorGroupHistory = "GeneratorGroupHistory",
  SharedUiConfigs = "SharedUiConfigs",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function fileSyncStatusReply_FolderIdFromJSON(object: any): FileSyncStatusReply_FolderId {
  switch (object) {
    case 0:
    case "LocalStorage":
      return FileSyncStatusReply_FolderId.LocalStorage;
    case 1:
    case "PlcWorkingDir":
      return FileSyncStatusReply_FolderId.PlcWorkingDir;
    case 2:
    case "BackedupConfiguration":
      return FileSyncStatusReply_FolderId.BackedupConfiguration;
    case 3:
    case "BackedupConfigurationMirror":
      return FileSyncStatusReply_FolderId.BackedupConfigurationMirror;
    case 4:
    case "WfcData":
      return FileSyncStatusReply_FolderId.WfcData;
    case 5:
    case "LookupTableHistory":
      return FileSyncStatusReply_FolderId.LookupTableHistory;
    case 6:
    case "GeneratorGroupHistory":
      return FileSyncStatusReply_FolderId.GeneratorGroupHistory;
    case 7:
    case "SharedUiConfigs":
      return FileSyncStatusReply_FolderId.SharedUiConfigs;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FileSyncStatusReply_FolderId.UNRECOGNIZED;
  }
}

export function fileSyncStatusReply_FolderIdToJSON(object: FileSyncStatusReply_FolderId): string {
  switch (object) {
    case FileSyncStatusReply_FolderId.LocalStorage:
      return "LocalStorage";
    case FileSyncStatusReply_FolderId.PlcWorkingDir:
      return "PlcWorkingDir";
    case FileSyncStatusReply_FolderId.BackedupConfiguration:
      return "BackedupConfiguration";
    case FileSyncStatusReply_FolderId.BackedupConfigurationMirror:
      return "BackedupConfigurationMirror";
    case FileSyncStatusReply_FolderId.WfcData:
      return "WfcData";
    case FileSyncStatusReply_FolderId.LookupTableHistory:
      return "LookupTableHistory";
    case FileSyncStatusReply_FolderId.GeneratorGroupHistory:
      return "GeneratorGroupHistory";
    case FileSyncStatusReply_FolderId.SharedUiConfigs:
      return "SharedUiConfigs";
    case FileSyncStatusReply_FolderId.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum FileSyncStatusReply_FileSyncState {
  Unknown = "Unknown",
  Running = "Running",
  Initializing = "Initializing",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function fileSyncStatusReply_FileSyncStateFromJSON(object: any): FileSyncStatusReply_FileSyncState {
  switch (object) {
    case 0:
    case "Unknown":
      return FileSyncStatusReply_FileSyncState.Unknown;
    case 1:
    case "Running":
      return FileSyncStatusReply_FileSyncState.Running;
    case 2:
    case "Initializing":
      return FileSyncStatusReply_FileSyncState.Initializing;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FileSyncStatusReply_FileSyncState.UNRECOGNIZED;
  }
}

export function fileSyncStatusReply_FileSyncStateToJSON(object: FileSyncStatusReply_FileSyncState): string {
  switch (object) {
    case FileSyncStatusReply_FileSyncState.Unknown:
      return "Unknown";
    case FileSyncStatusReply_FileSyncState.Running:
      return "Running";
    case FileSyncStatusReply_FileSyncState.Initializing:
      return "Initializing";
    case FileSyncStatusReply_FileSyncState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface FileSyncStatusReply_FolderStatus {
  folder?: FileSyncStatusReply_FolderId | undefined;
  lastUpdateEpoch?: number | undefined;
  pendingDownloadsNotOnTheFly?: number | undefined;
  transfersDuringLastMinute?: number | undefined;
}

export interface Gms {
  name?: string | undefined;
  timestamp?: Date | undefined;
  gmsType?: string | undefined;
  status?: string | undefined;
  activePower?: number | undefined;
  activePowerQuality?: string | undefined;
  frequency?: number | undefined;
  frequencyQuality?: string | undefined;
  voltage?: number | undefined;
  voltageQuality?: string | undefined;
  reactivePower?: number | undefined;
  reactivePowerQuality?: string | undefined;
  physicalData?: Physical | undefined;
  redundantData?: Redundant | undefined;
  virtualData?: Virtual | undefined;
  nominalVoltage?: number | undefined;
  apparentPower?: number | undefined;
  apparentPowerQuality?: string | undefined;
  upstreamCompensated?: Upstream | undefined;
  groupName?: string | undefined;
  voltagePhaseUab?: number | undefined;
  voltagePhaseUabQuality?: string | undefined;
  voltagePhaseUbc?: number | undefined;
  voltagePhaseUbcQuality?: string | undefined;
  voltagePhaseUca?: number | undefined;
  voltagePhaseUcaQuality?: string | undefined;
  id?: number | undefined;
}

export interface GeneratorActivePower {
  ratedPower?: number | undefined;
  isPSlaveable?: boolean | undefined;
  overLoadLimit?: number | undefined;
  availablePower?: number | undefined;
  availablePowerInScope?: number | undefined;
  estimatedPowerCapabilityLower?: number | undefined;
  estimatedPowerCapabilityUpper?: number | undefined;
  powerChangeRateUp?: number | undefined;
  powerChangeRateDown?: number | undefined;
  ratedPowerIncluded?: number | undefined;
  availablePowerCtrl?: number | undefined;
  availablePowerCtrlInScope?: number | undefined;
  availablePowerRaw?: number | undefined;
  availablePowerRawSum?: number | undefined;
  maxCapablePower?: number | undefined;
  minCapablePower?: number | undefined;
  availablePowerBoost?: number | undefined;
  activePowerGeneratorSum?: number | undefined;
  activePowerGeneratorSumInScope?: number | undefined;
  ratedPowerOnGrid?: number | undefined;
  activePowerReference?: number | undefined;
  pInscopeCount?: number | undefined;
  stateOfCharge?: number | undefined;
  stateOfHealth?: number | undefined;
  ratedStorageCapacity?: number | undefined;
  soCMaxLimit?: number | undefined;
  soCMinLimit?: number | undefined;
}

export interface GeneratorDefault {
  name?: string | undefined;
  associatedGenerators?: string | undefined;
  parameters: GeneratorDefaultParameter[];
}

export interface GeneratorDefaultMetadata {
  name: string;
  description: string;
  displayAccuracy: number;
  unit: string;
  datatype: DataTypes;
}

export interface GeneratorDefaultParameter {
  value?: number | undefined;
  function?: string | undefined;
  name?: string | undefined;
}

export interface GeneratorGroup {
  generators: KeyValuePair[];
  group?: string | undefined;
}

export interface GeneratorGroupModel {
  localGroups: GeneratorGroupModel_GeneratorGroup[];
  topology?: number | undefined;
}

export interface GeneratorGroupModel_GeneratorGroup {
  limitation?: GeneratorGroupModel_GeneratorGroup_Limitation | undefined;
  generatorGroups: GeneratorGroupModel_GeneratorGroup[];
  turbines: string[];
  genericGenerators: GeneratorGroupModel_GeneratorGroup_GenericGenerator[];
  parkPilotGenerators: string[];
  name?: string | undefined;
}

export interface GeneratorGroupModel_GeneratorGroup_Limitation {
  customParameterRef?: string | undefined;
  value?: number | undefined;
}

export interface GeneratorGroupModel_GeneratorGroup_GenericGenerator {
  name?: string | undefined;
  type?: GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType | undefined;
  parent?: string | undefined;
}

export enum GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType {
  Generator = "Generator",
  WindTurbine = "WindTurbine",
  Photovoltaic = "Photovoltaic",
  EnergyStorage = "EnergyStorage",
  STATCOM = "STATCOM",
  CapacitorBank = "CapacitorBank",
  ShuntReactor = "ShuntReactor",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function generatorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorTypeFromJSON(
  object: any,
): GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType {
  switch (object) {
    case 0:
    case "Generator":
      return GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType.Generator;
    case 1:
    case "WindTurbine":
      return GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType.WindTurbine;
    case 2:
    case "Photovoltaic":
      return GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType.Photovoltaic;
    case 3:
    case "EnergyStorage":
      return GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType.EnergyStorage;
    case 4:
    case "STATCOM":
      return GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType.STATCOM;
    case 5:
    case "CapacitorBank":
      return GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType.CapacitorBank;
    case 6:
    case "ShuntReactor":
      return GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType.ShuntReactor;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType.UNRECOGNIZED;
  }
}

export function generatorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorTypeToJSON(
  object: GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType,
): string {
  switch (object) {
    case GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType.Generator:
      return "Generator";
    case GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType.WindTurbine:
      return "WindTurbine";
    case GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType.Photovoltaic:
      return "Photovoltaic";
    case GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType.EnergyStorage:
      return "EnergyStorage";
    case GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType.STATCOM:
      return "STATCOM";
    case GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType.CapacitorBank:
      return "CapacitorBank";
    case GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType.ShuntReactor:
      return "ShuntReactor";
    case GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GeneratorGridMeasurement {
  gmsStatus?: number | undefined;
  activePower?: number | undefined;
  reactivePower?: number | undefined;
  nominalVoltage?: number | undefined;
  frequency?: number | undefined;
  normalisedVoltage?: number | undefined;
  activePowerQuality?: number | undefined;
  reactivePowerQuality?: number | undefined;
  voltageQuality?: number | undefined;
  frequencyQuality?: number | undefined;
}

export interface GeneratorReactivePower {
  qMinMax?: number | undefined;
  qMin?: number | undefined;
  qMax?: number | undefined;
  isQReactiveSlaveable?: boolean | undefined;
  isQPowerFactorSlaveable?: boolean | undefined;
  isUSlaveable?: boolean | undefined;
  isFRTSupportedCount?: number | undefined;
  isVoltageFRTActiveCount?: number | undefined;
  voltageReference?: number | undefined;
  qUInscopeCount?: number | undefined;
  powerBalancingOutput?: number | undefined;
  pConnectLimit?: number | undefined;
  pDisconnectLimit?: number | undefined;
  qConnectLimit?: number | undefined;
  qDisconnectLimit?: number | undefined;
  connectDelay?: number | undefined;
  disconnectDelay?: number | undefined;
  minimumConnectedPeriod?: number | undefined;
  minimumDisconnectedPeriod?: number | undefined;
  numberOfOperations?: number | undefined;
  discreteDeviceStatus?: number | undefined;
  keepAlive?: number | undefined;
  anomaly?: boolean | undefined;
  closeLockState?: boolean | undefined;
  openLockState?: boolean | undefined;
  secondaryContributorState?: number | undefined;
}

export interface GeneratorReply {
  name?: string | undefined;
  fieldSelection?: string | undefined;
  sourceTimeStamp?: Date | undefined;
  readDataRTT?: number | undefined;
  generatorType?: string | undefined;
  groupName?: string | undefined;
  commStatusOk?: boolean | undefined;
  activePower?: GeneratorActivePower | undefined;
  reactivePower?: GeneratorReactivePower | undefined;
  gridMeasurement?: GeneratorGridMeasurement | undefined;
}

export interface GeneratorSetup {
  name: string;
  pCtrlEnabled?: boolean | undefined;
  uCtrlEnabled?: boolean | undefined;
  manPowerRef?: number | undefined;
  manVoltageRef?: number | undefined;
  islandModeOperationMode?: number | undefined;
  curtailmentPriority?: number | undefined;
  dmolPercentage?: number | undefined;
  reactivePowerBalancingWeight?: number | undefined;
  reactivePowerBalancingOffset?: number | undefined;
  maxPowerReferencePct?: number | undefined;
  groupName?: string | undefined;
  reactivePriority?: number | undefined;
  generatorType?: GeneratorSetup_GeneratorType_Values | undefined;
  reactiveContributorMode?: GeneratorSetup_ReactiveContributorMode_Values | undefined;
}

export enum GeneratorSetup_GeneratorType_Values {
  Generator = "Generator",
  WindTurbine = "WindTurbine",
  Photovoltaic = "Photovoltaic",
  EnergyStorage = "EnergyStorage",
  STATCOM = "STATCOM",
  CapacitorBank = "CapacitorBank",
  ShuntReactor = "ShuntReactor",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function generatorSetup_GeneratorType_ValuesFromJSON(object: any): GeneratorSetup_GeneratorType_Values {
  switch (object) {
    case 0:
    case "Generator":
      return GeneratorSetup_GeneratorType_Values.Generator;
    case 1:
    case "WindTurbine":
      return GeneratorSetup_GeneratorType_Values.WindTurbine;
    case 2:
    case "Photovoltaic":
      return GeneratorSetup_GeneratorType_Values.Photovoltaic;
    case 3:
    case "EnergyStorage":
      return GeneratorSetup_GeneratorType_Values.EnergyStorage;
    case 4:
    case "STATCOM":
      return GeneratorSetup_GeneratorType_Values.STATCOM;
    case 5:
    case "CapacitorBank":
      return GeneratorSetup_GeneratorType_Values.CapacitorBank;
    case 6:
    case "ShuntReactor":
      return GeneratorSetup_GeneratorType_Values.ShuntReactor;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GeneratorSetup_GeneratorType_Values.UNRECOGNIZED;
  }
}

export function generatorSetup_GeneratorType_ValuesToJSON(object: GeneratorSetup_GeneratorType_Values): string {
  switch (object) {
    case GeneratorSetup_GeneratorType_Values.Generator:
      return "Generator";
    case GeneratorSetup_GeneratorType_Values.WindTurbine:
      return "WindTurbine";
    case GeneratorSetup_GeneratorType_Values.Photovoltaic:
      return "Photovoltaic";
    case GeneratorSetup_GeneratorType_Values.EnergyStorage:
      return "EnergyStorage";
    case GeneratorSetup_GeneratorType_Values.STATCOM:
      return "STATCOM";
    case GeneratorSetup_GeneratorType_Values.CapacitorBank:
      return "CapacitorBank";
    case GeneratorSetup_GeneratorType_Values.ShuntReactor:
      return "ShuntReactor";
    case GeneratorSetup_GeneratorType_Values.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum GeneratorSetup_ReactiveContributorMode_Values {
  Primary = "Primary",
  Secondary = "Secondary",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function generatorSetup_ReactiveContributorMode_ValuesFromJSON(
  object: any,
): GeneratorSetup_ReactiveContributorMode_Values {
  switch (object) {
    case 1:
    case "Primary":
      return GeneratorSetup_ReactiveContributorMode_Values.Primary;
    case 2:
    case "Secondary":
      return GeneratorSetup_ReactiveContributorMode_Values.Secondary;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GeneratorSetup_ReactiveContributorMode_Values.UNRECOGNIZED;
  }
}

export function generatorSetup_ReactiveContributorMode_ValuesToJSON(
  object: GeneratorSetup_ReactiveContributorMode_Values,
): string {
  switch (object) {
    case GeneratorSetup_ReactiveContributorMode_Values.Primary:
      return "Primary";
    case GeneratorSetup_ReactiveContributorMode_Values.Secondary:
      return "Secondary";
    case GeneratorSetup_ReactiveContributorMode_Values.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface GridProtection {
  id?: number | undefined;
  parameter?: string | undefined;
  name?: string | undefined;
  groupName?: string | undefined;
  points: GridProtectionPoint[];
}

export interface GridProtectionFeature {
  gridProtectionData: GridProtection[];
  parametersData: ParameterData[];
}

export interface GridProtectionPoint {
  pointId?: string | undefined;
  pctValue?: number | undefined;
  rampBy?: number | undefined;
  pctType?: string | undefined;
}

export interface Group {
  name: string;
  id: number;
}

export interface HaMessaurementWithRights {
  timestamp: Date | undefined;
  clusterStatus: HaClusterStatus;
  backupStatus?: HaBackupStatus | undefined;
  staticIp?: string | undefined;
  remoteStaticIp?: string | undefined;
  localRole?: InitialState | undefined;
  compatibleVersions?: boolean | undefined;
  canControl?: boolean | undefined;
  updatePossible?: boolean | undefined;
}

export interface InspectionGraphData {
  values: number[];
  timeStamp: Date | undefined;
}

export interface InspectionGraphReply {
  inspectionGraphData: InspectionGraphData[];
  signals: string[];
  omittedList: Date[];
  precision?: number | undefined;
  timestamp?: Date | undefined;
}

export interface Jitter {
  rangeMax?: number | undefined;
  countJitterNeg?: number | undefined;
  countJitterPos?: number | undefined;
}

export interface KeyValuePair {
  key?: string | undefined;
  value?: string | undefined;
}

export interface LogEntry {
  index?: number | undefined;
  domain?: string | undefined;
  level?: string | undefined;
  logger?: string | undefined;
  message?: string | undefined;
  thread?: string | undefined;
  timestamp?: Date | undefined;
  username?: string | undefined;
}

export interface LogfilesZipReply {
  bytes?: Uint8Array | undefined;
}

export interface LogReply {
  isloggingPersistenceEnabled: boolean;
  logEntries: LogEntry[];
}

export interface LookupTable {
  tableName: string;
  groupName: string;
  xAxis: LookupTableAxis | undefined;
  yAxis: LookupTableAxis | undefined;
  rows: LookupTableRow[];
  columnValues: number[];
}

export interface LookupTableAxis {
  label: string;
  unit: string;
}

export interface LookupTableRow {
  rowHeader?: number | undefined;
  cellValues: number[];
}

export interface ManualVoltageLimitsGroupData {
  group: string;
  manualVoltageLimits: { [key: string]: number };
}

export interface ManualVoltageLimitsGroupData_ManualVoltageLimitsEntry {
  key: string;
  value: number;
}

export interface MenuItem {
  link: string;
  text: string;
  section: string;
  permissions: Permission[];
  isSelected: boolean;
}

export interface MenuSection {
  id: string;
  title: string;
  visible: boolean;
  menuItems: MenuItem[];
  totals?: number | undefined;
  isSelected: boolean;
}

export interface ParquetFilesData {
  path?: string | undefined;
  status?: string | undefined;
  viewName?: string | undefined;
  estimated?: string | undefined;
  timeout?: number | undefined;
  userName?: string | undefined;
  sourceApplication?: string | undefined;
}

export interface ParquetFileReply {
  bytes?: Uint8Array | undefined;
}

export interface ParkPilotGenerator {
  generatorName?: string | undefined;
  generators: GeneratorGroup[];
  turbines: GeneratorGroup[];
  vgms: string[];
  hppps: string[];
}

export interface ParameterChangeLog {
  timeStamp?: Date | undefined;
  user?: string | undefined;
  parameter?: string | undefined;
  oldValue?: number | undefined;
  newValue?: number | undefined;
  topologyId?: number | undefined;
  controller?: string | undefined;
  function?: string | undefined;
  groupId?: number | undefined;
  groupName?: string | undefined;
}

export interface ParameterData {
  min?: number | undefined;
  max?: number | undefined;
  unit?: string | undefined;
  value?: number | undefined;
  type?: DataTypes | undefined;
  permissionGroup?: ParameterSubscription_PermissionGroup | undefined;
  userCanEdit?: boolean | undefined;
  function?: string | undefined;
  outsideParameter?: boolean | undefined;
  functionalGroup?: string | undefined;
  name?: string | undefined;
  group?: string | undefined;
  controller?: string | undefined;
  friendlyName?: string | undefined;
  topologyValues: number[];
  groupId?: number | undefined;
  secondaryFunction?: string | undefined;
  groupsAndValues: KeyValuePair[];
}

export interface ParameterDataListReply {
  timestamp?: Date | undefined;
  parameterDatas: ParameterData[];
}

export interface ParameterMetaData {
  name?: string | undefined;
  description?: string | undefined;
  displayAccuracy?: number | undefined;
  unit?: string | undefined;
  function?: string | undefined;
  minimum?: number | undefined;
  maximum?: number | undefined;
}

export interface ParVarEnum {
  name?: string | undefined;
  items: ParVarEnumItem[];
}

export interface ParVarEnumItem {
  name?: string | undefined;
  value?: number | undefined;
  description?: string | undefined;
  protect?: boolean | undefined;
}

export interface ParVarNameWithEnum {
  parVarName?: string | undefined;
  parVarEnum?: ParVarEnum | undefined;
}

export interface Physical {
  enabled?: boolean | undefined;
  readRTT?: number | undefined;
  ctFault?: boolean | undefined;
  vtFault?: boolean | undefined;
}

export interface PolicyParameter {
  controllerName?: string | undefined;
  groupName?: string | undefined;
  paramName?: string | undefined;
}

export interface PoliciesData {
  id?: number | undefined;
  name?: string | undefined;
  active?: boolean | undefined;
  canEdit?: boolean | undefined;
  allowedSources: PolicySource[];
  parameters: PolicyParameter[];
}

export interface PolicySource {
  source?: string | undefined;
  username?: string | undefined;
  bitmask?: number | undefined;
}

export interface PoliciesAndSources {
  policies: PoliciesData[];
  sources: PolicySource[];
}

export interface Point {
  pointId?: number | undefined;
  name?: string | undefined;
  x?: number | undefined;
  y?: number | undefined;
  key?: string | undefined;
  groupName?: string | undefined;
  dataSetId?: number | undefined;
  status?: boolean | undefined;
}

export interface PointDataset {
  dataSetId?: number | undefined;
  point?: Point | undefined;
  groupName?: string | undefined;
}

export interface PossibleSettingReply {
  settings: StationSettingsWithManRef[];
  manualVoltageLimitsGroup: ManualVoltageLimitsGroupData[];
  manualPowerLimits: { [key: string]: number };
}

export interface PossibleSettingReply_ManualPowerLimitsEntry {
  key: string;
  value: number;
}

export interface ProcessData {
  name: string;
  restartCount?: number | undefined;
  startTime?: Date | undefined;
  state: string;
  errorMessage?: string | undefined;
  canControl?: boolean | undefined;
  runningMode?: string | undefined;
  autoStartup?: boolean | undefined;
}

export interface Layout {
  ppgs: Layout_PPG[];
}

export interface Layout_PPG {
  name?: string | undefined;
  activePowerVgmSelection?: Layout_PPG_VGMSelection | undefined;
  reactivePowerVgmSelection?: Layout_PPG_VGMSelection | undefined;
  voltageVgmSelection?: Layout_PPG_VGMSelection | undefined;
  frequencyVgmSelection?: Layout_PPG_VGMSelection | undefined;
  id?: number | undefined;
}

export interface Layout_PPG_VGMSelection {
  defaultVgm?: Layout_PPG_VGMSelection_VGM | undefined;
  alternateVgm?: Layout_PPG_VGMSelection_VGM | undefined;
}

export interface Layout_PPG_VGMSelection_VGM {
  name?: string | undefined;
  voltageSourceRgmName?: string | undefined;
  rgms: Layout_PPG_VGMSelection_VGM_RGM[];
}

export interface Layout_PPG_VGMSelection_VGM_RGM {
  operation?: Layout_PPG_VGMSelection_VGM_RGM_OperationType | undefined;
  name?: string | undefined;
  pgms: Layout_PPG_VGMSelection_VGM_RGM_PGM[];
}

export enum Layout_PPG_VGMSelection_VGM_RGM_OperationType {
  ADD = "ADD",
  SUBTRACT = "SUBTRACT",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function layout_PPG_VGMSelection_VGM_RGM_OperationTypeFromJSON(
  object: any,
): Layout_PPG_VGMSelection_VGM_RGM_OperationType {
  switch (object) {
    case 0:
    case "ADD":
      return Layout_PPG_VGMSelection_VGM_RGM_OperationType.ADD;
    case 1:
    case "SUBTRACT":
      return Layout_PPG_VGMSelection_VGM_RGM_OperationType.SUBTRACT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Layout_PPG_VGMSelection_VGM_RGM_OperationType.UNRECOGNIZED;
  }
}

export function layout_PPG_VGMSelection_VGM_RGM_OperationTypeToJSON(
  object: Layout_PPG_VGMSelection_VGM_RGM_OperationType,
): string {
  switch (object) {
    case Layout_PPG_VGMSelection_VGM_RGM_OperationType.ADD:
      return "ADD";
    case Layout_PPG_VGMSelection_VGM_RGM_OperationType.SUBTRACT:
      return "SUBTRACT";
    case Layout_PPG_VGMSelection_VGM_RGM_OperationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Layout_PPG_VGMSelection_VGM_RGM_PGM {
  name?: string | undefined;
}

export interface PpgReply {
  name?: string | undefined;
  communicationId?: number | undefined;
  reactivePowerBalancingOffset?: number | undefined;
  reactivePowerBalancingWeight?: number | undefined;
  reactivePowerBalancingOutput?: number | undefined;
  activePower?: PlantControllerPPGInfo | undefined;
  reactivePower?: PlantControllerPPGInfo | undefined;
  topologySelection?: string | undefined;
}

export interface PpgSetupResponse {
  failedNames: string[];
  succesNames: string[];
}

export interface PlantControllerPPGInfo {
  controllerType?: string | undefined;
  mode?: string | undefined;
  unit?: string | undefined;
  measured?: number | undefined;
  reference?: number | undefined;
  referenceType?: string | undefined;
  generatorsInScope?: number | undefined;
  state: PlantControllerPPGInfo_PPGState;
  accuracy?: number | undefined;
  unitPU?: string | undefined;
  measuredPU?: number | undefined;
  accuracyPU?: number | undefined;
}

export enum PlantControllerPPGInfo_PPGState {
  disabled = "disabled",
  inconsistent = "inconsistent",
  ok = "ok",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function plantControllerPPGInfo_PPGStateFromJSON(object: any): PlantControllerPPGInfo_PPGState {
  switch (object) {
    case 0:
    case "disabled":
      return PlantControllerPPGInfo_PPGState.disabled;
    case 1:
    case "inconsistent":
      return PlantControllerPPGInfo_PPGState.inconsistent;
    case 2:
    case "ok":
      return PlantControllerPPGInfo_PPGState.ok;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PlantControllerPPGInfo_PPGState.UNRECOGNIZED;
  }
}

export function plantControllerPPGInfo_PPGStateToJSON(object: PlantControllerPPGInfo_PPGState): string {
  switch (object) {
    case PlantControllerPPGInfo_PPGState.disabled:
      return "disabled";
    case PlantControllerPPGInfo_PPGState.inconsistent:
      return "inconsistent";
    case PlantControllerPPGInfo_PPGState.ok:
      return "ok";
    case PlantControllerPPGInfo_PPGState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface PlcApplication {
  name?: string | undefined;
  taskInformations: TaskInformation[];
}

export interface PlcStatisticsSample {
  sampleTime?: Date | undefined;
  plcApplications: PlcApplication[];
}

export interface Redundant {
  activePGM?: string | undefined;
  failedGmsCount?: number | undefined;
  disabledGmsCount?: number | undefined;
  redundancyState?: string | undefined;
}

export interface ReferenceLog {
  timeStamp?: Date | undefined;
  user?: string | undefined;
  parameter?: string | undefined;
  newValue?: number | undefined;
  controller?: string | undefined;
  source?: number | undefined;
  groupName?: string | undefined;
}

export interface References {
  voltageReferencePU?: number | undefined;
  voltageReference?: number | undefined;
  reactiveReference?: number | undefined;
}

export interface SetGeneratorSetupReply {
  failedNames: string[];
  successNames: string[];
}

export interface SetPointDaily {
  value?: number | undefined;
  user?: string | undefined;
  groupName?: string | undefined;
  timeOfDay: string;
  parameter?: string | undefined;
}

export interface SetPointWeekly {
  value?: number | undefined;
  user?: string | undefined;
  groupName?: string | undefined;
  timeOfDay: string;
  day?: number | undefined;
  parameter?: string | undefined;
}

export interface SetPointSchedule {
  value?: number | undefined;
  user?: string | undefined;
  groupName?: string | undefined;
  timeStamp: Date | undefined;
  setpointSource: string;
  parameter?: string | undefined;
}

export interface DailySetpointGroup {
  parameter?: string | undefined;
  setPoints: SetPointDaily[];
}

export interface WeeklySetpointGroup {
  parameter?: string | undefined;
  setPoints: SetPointWeekly[];
}

export interface ScheduleSetpointGroup {
  parameter?: string | undefined;
  setPoints: SetPointSchedule[];
}

export interface SetPoints {
  scheduleSetpointGroups: ScheduleSetpointGroup[];
  weeklySetpointGroups: WeeklySetpointGroup[];
  dailySetpointGroups: DailySetpointGroup[];
}

export interface SingleLineModel {
  wires: SingleLineModel_Wire[];
  nodes: SingleLineModel_Node[];
  measurementWires: SingleLineModel_Wire[];
}

export interface SingleLineModel_Wire {
  to?: string | undefined;
  from?: string | undefined;
  breaker?: SingleLineModel_Wire_Breaker | undefined;
  activePowerLimit?: SingleLineModel_Wire_ActivePowerLimit | undefined;
}

export interface SingleLineModel_Wire_Breaker {
  name?: string | undefined;
  state?: boolean | undefined;
  description?: string | undefined;
}

export interface SingleLineModel_Wire_ActivePowerLimit {
  name?: string | undefined;
  value?: number | undefined;
  minimum?: string | undefined;
  maximum?: string | undefined;
  description?: string | undefined;
}

export interface SingleLineModel_Node {
  name?: string | undefined;
  type?: string | undefined;
  controllerName?: string | undefined;
}

export interface StationSettings {
  settingName: string;
  settingDataType: string;
  setupName: string;
  unit: string;
}

export interface StationSettingsWithManRef {
  stationSettings: StationSettings | undefined;
  isManual: boolean;
}

export interface StatisticValue {
  value?: string | undefined;
  minimum?: number | undefined;
  maximum?: number | undefined;
  average?: number | undefined;
}

export interface Statistic {
  statisticId?: number | undefined;
  name?: string | undefined;
  value?: StatisticValue | undefined;
  sampleTime?: Date | undefined;
  interest?: StatisticInterest | undefined;
  unit?: string | undefined;
  source?: string | undefined;
}

export interface TaskInformation {
  name?: string | undefined;
  cycleTime?: number | undefined;
  minCycleTime?: number | undefined;
  maxCycleTime?: number | undefined;
  averageCycleTime?: number | undefined;
  jitter?: number | undefined;
  jitterMin?: number | undefined;
  jitterMax?: number | undefined;
  priority?: number | undefined;
  kindOfTask?: string | undefined;
  watchdogEnabled?: boolean | undefined;
  cycleCount?: number | undefined;
  interval?: number | undefined;
  state?: number | undefined;
  iecCycleCount?: number | undefined;
  jitterInformations: Jitter[];
}

export interface TopologyData {
  topologyId?: number | undefined;
  topologyName?: string | undefined;
}

export interface TopologyParameter {
  name?: string | undefined;
  group?: string | undefined;
  controller?: string | undefined;
  min?: number | undefined;
  max?: number | undefined;
  unit?: string | undefined;
  value?: number | undefined;
  type?: DataTypes | undefined;
  userCanEdit?: boolean | undefined;
  function?: string | undefined;
  topologyValues: number[];
  secondaryFunction?: string | undefined;
}

export interface TopologyParametersListReply {
  activeTopologyId?: number | undefined;
  templateTopologies?: boolean | undefined;
  topologies: TopologyData[];
  parameters: TopologyParameter[];
}

export interface TopologyView {
  topologyId?: number | undefined;
  topologyName?: string | undefined;
  parkPilotGenerators: ParkPilotGenerator[];
}

export interface TurbineParameterChangeLog {
  timeStamp?: Date | undefined;
  user?: string | undefined;
  parameter?: string | undefined;
  oldValue?: number | undefined;
  newValue?: number | undefined;
  turbineName?: string | undefined;
}

export interface TurbineSubscriptionReply {
  availablePowerBoost?: number | undefined;
  noPowerVoltReadyness?: string | undefined;
  noPowerVoltState?: string | undefined;
  sourceTimeStamp?: Date | undefined;
  groupName?: string | undefined;
  commStatus?: string | undefined;
  reactivePower?: number | undefined;
  voltage?: number | undefined;
  activePower?: number | undefined;
  frequency?: number | undefined;
  availablePower?: number | undefined;
  rawAvailablePower?: number | undefined;
  wtOperationState?: string | undefined;
  windSpeed?: number | undefined;
  remoteEnabled?: boolean | undefined;
  powerReference?: number | undefined;
  ipcStatus?: string | undefined;
  converterRunning?: boolean | undefined;
  reactiveReference?: number | undefined;
  inertiaSetPoint?: number | undefined;
  assignPowerRef?: number | undefined;
  availablePowerFiltered?: number | undefined;
  pUsability?: string | undefined;
  vUsability?: string | undefined;
  fallBackPower?: number | undefined;
  fallBackTime?: number | undefined;
  fallBackPowerFeedback?: number | undefined;
  fallBackTimeFeedback?: number | undefined;
  parPCtrlEnabled?: boolean | undefined;
  parUCtrlEnabled?: boolean | undefined;
  targetCommOk?: boolean | undefined;
  powerRateChange?: number | undefined;
  islandModeState?: string | undefined;
  islandModeSetting?: string | undefined;
  sdsReadRTT?: number | undefined;
  iRAvailable?: number | undefined;
  iRActual?: number | undefined;
  iRState?: string | undefined;
  iRInhibitSource?: string | undefined;
  reactivePowerBalancingOutput?: number | undefined;
  reactivePowerBalancingWeight?: number | undefined;
  reactivePowerBalancingOffset?: number | undefined;
  uFrtMin?: number | undefined;
  uFrtMax?: number | undefined;
  ratedPower?: number | undefined;
  referenceInfo?: References | undefined;
  powerLimitSource?: string | undefined;
  curtailed?: string | undefined;
  referenceFeedbackInfo?: References | undefined;
  ipAddress?: string | undefined;
  communicationId?: number | undefined;
  curtailmentStopState?: string | undefined;
  curtailmentStoppedHours?: number | undefined;
  towerDampingFrequency?: number | undefined;
  towerDampingAmplitude?: number | undefined;
  qFallbackState?: string | undefined;
  estimatedAvailablePowerBoost?: number | undefined;
  dMOL?: number | undefined;
  powerRateChangeDown?: number | undefined;
  maxVoltageRampRateUp?: number | undefined;
  maxVoltageRampRateDown?: number | undefined;
  ambientTemp?: number | undefined;
  fallBackPowerRampRate?: number | undefined;
  fallBackPowerRampRateRestored?: number | undefined;
  fallBackPowerRampRateFeedback?: number | undefined;
  fallBackPowerRampRateRestoredFeedback?: number | undefined;
  name?: string | undefined;
  controllerType?: string | undefined;
  staticOperationalLimit?: number | undefined;
  activeStopsByPPC?: number | undefined;
  activeStopsInTotal?: number | undefined;
  remotePPCStopState?: string | undefined;
  ceasePowerState?: string | undefined;
  poatdState?: string | undefined;
  communicationSecure?: boolean | undefined;
}

export interface SubTurbineSubscriptionReply {
  name?: string | undefined;
  curtailmentPriority?: number | undefined;
  dmolKw?: number | undefined;
  ceaseStopSupported?: boolean | undefined;
  remoteStopSupported?: boolean | undefined;
  curtailmentStopSupported?: boolean | undefined;
  curtailmentStopState?: SubTurbineSubscriptionReply_CurtailmentStopState | undefined;
  ceaseStopState?: SubTurbineSubscriptionReply_CeasePState | undefined;
  remoteStopState?: SubTurbineSubscriptionReply_RemotePPCStopState | undefined;
  minCapablePowerKw?: number | undefined;
  activePowerInscopeKw?: number | undefined;
  curtailmentStopAvailablePowerKw?: number | undefined;
  curtailmentStoppedHourCount?: number | undefined;
  isPSlaveable?: boolean | undefined;
  stoppedByPPCCount?: number | undefined;
  uncontrolledPowerKw?: number | undefined;
  isCurtailmentStopControllable?: boolean | undefined;
  isTurbineStartableByCurtailmentStopCurtailmentStop?: boolean | undefined;
  curtailmentStopRequest?: SubTurbineSubscriptionReply_CurtailmentStopState | undefined;
  isStartControllable?: boolean | undefined;
  isCurtailmentStopRequestActive?: boolean | undefined;
  curtailmentStopConfirmedRequest?: SubTurbineSubscriptionReply_CurtailmentStopState | undefined;
  activePowerReferenceKw?: number | undefined;
  ratedPower?: number | undefined;
  sourceTimeStamp?: Date | undefined;
  groupName?: string | undefined;
}

export enum SubTurbineSubscriptionReply_CurtailmentStopState {
  CurtailmentStopUninitialized = "CurtailmentStopUninitialized",
  CurtailmentStopNotStopped = "CurtailmentStopNotStopped",
  CurtailmentStopStopped = "CurtailmentStopStopped",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function subTurbineSubscriptionReply_CurtailmentStopStateFromJSON(
  object: any,
): SubTurbineSubscriptionReply_CurtailmentStopState {
  switch (object) {
    case 0:
    case "CurtailmentStopUninitialized":
      return SubTurbineSubscriptionReply_CurtailmentStopState.CurtailmentStopUninitialized;
    case 1:
    case "CurtailmentStopNotStopped":
      return SubTurbineSubscriptionReply_CurtailmentStopState.CurtailmentStopNotStopped;
    case 2:
    case "CurtailmentStopStopped":
      return SubTurbineSubscriptionReply_CurtailmentStopState.CurtailmentStopStopped;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SubTurbineSubscriptionReply_CurtailmentStopState.UNRECOGNIZED;
  }
}

export function subTurbineSubscriptionReply_CurtailmentStopStateToJSON(
  object: SubTurbineSubscriptionReply_CurtailmentStopState,
): string {
  switch (object) {
    case SubTurbineSubscriptionReply_CurtailmentStopState.CurtailmentStopUninitialized:
      return "CurtailmentStopUninitialized";
    case SubTurbineSubscriptionReply_CurtailmentStopState.CurtailmentStopNotStopped:
      return "CurtailmentStopNotStopped";
    case SubTurbineSubscriptionReply_CurtailmentStopState.CurtailmentStopStopped:
      return "CurtailmentStopStopped";
    case SubTurbineSubscriptionReply_CurtailmentStopState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum SubTurbineSubscriptionReply_CeasePState {
  CeasePUninitialized = "CeasePUninitialized",
  PowerNotCeased = "PowerNotCeased",
  PowerCeased = "PowerCeased",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function subTurbineSubscriptionReply_CeasePStateFromJSON(object: any): SubTurbineSubscriptionReply_CeasePState {
  switch (object) {
    case 0:
    case "CeasePUninitialized":
      return SubTurbineSubscriptionReply_CeasePState.CeasePUninitialized;
    case 1:
    case "PowerNotCeased":
      return SubTurbineSubscriptionReply_CeasePState.PowerNotCeased;
    case 2:
    case "PowerCeased":
      return SubTurbineSubscriptionReply_CeasePState.PowerCeased;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SubTurbineSubscriptionReply_CeasePState.UNRECOGNIZED;
  }
}

export function subTurbineSubscriptionReply_CeasePStateToJSON(object: SubTurbineSubscriptionReply_CeasePState): string {
  switch (object) {
    case SubTurbineSubscriptionReply_CeasePState.CeasePUninitialized:
      return "CeasePUninitialized";
    case SubTurbineSubscriptionReply_CeasePState.PowerNotCeased:
      return "PowerNotCeased";
    case SubTurbineSubscriptionReply_CeasePState.PowerCeased:
      return "PowerCeased";
    case SubTurbineSubscriptionReply_CeasePState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum SubTurbineSubscriptionReply_RemotePPCStopState {
  Uninitialized = "Uninitialized",
  Started = "Started",
  Stopped = "Stopped",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function subTurbineSubscriptionReply_RemotePPCStopStateFromJSON(
  object: any,
): SubTurbineSubscriptionReply_RemotePPCStopState {
  switch (object) {
    case 0:
    case "Uninitialized":
      return SubTurbineSubscriptionReply_RemotePPCStopState.Uninitialized;
    case 1:
    case "Started":
      return SubTurbineSubscriptionReply_RemotePPCStopState.Started;
    case 2:
    case "Stopped":
      return SubTurbineSubscriptionReply_RemotePPCStopState.Stopped;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SubTurbineSubscriptionReply_RemotePPCStopState.UNRECOGNIZED;
  }
}

export function subTurbineSubscriptionReply_RemotePPCStopStateToJSON(
  object: SubTurbineSubscriptionReply_RemotePPCStopState,
): string {
  switch (object) {
    case SubTurbineSubscriptionReply_RemotePPCStopState.Uninitialized:
      return "Uninitialized";
    case SubTurbineSubscriptionReply_RemotePPCStopState.Started:
      return "Started";
    case SubTurbineSubscriptionReply_RemotePPCStopState.Stopped:
      return "Stopped";
    case SubTurbineSubscriptionReply_RemotePPCStopState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Upstream {
  activePower?: number | undefined;
  reactivePower?: number | undefined;
  voltage?: number | undefined;
  apparentPower?: number | undefined;
  nominalvoltage?: number | undefined;
}

export interface UpdateCustomData {
  name?: string | undefined;
  value?: string | undefined;
  nameSpace?: string | undefined;
}

export interface UpdateTopologyParameterReply {
  topologyId?: number | undefined;
  group?: string | undefined;
  groupId?: number | undefined;
  name?: string | undefined;
  newValue?: number | undefined;
}

export interface VariableDescription {
  controllerName?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  unit?: string | undefined;
  displayAccuracy?: number | undefined;
  logName?: string | undefined;
}

export interface VersionHistoryReply {
  versionHistory: VersionHistoryReply_VersionEntry[];
}

export interface VersionHistoryReply_VersionEntry {
  version?: string | undefined;
  initials?: string | undefined;
  releaseDate?: Date | undefined;
  updateDate?: Date | undefined;
}

export interface Virtual {
  redundancyState?: string | undefined;
}

export interface Signals {
  signal: InjectableSignal | undefined;
  sourceStationList: InjectableSourceStation[];
  signalValues: InjectionSignalValues[];
}

export interface InjectableSignal {
  name: string;
  signalDisplayName?: string | undefined;
  isSignalSelected?: boolean | undefined;
  isSourceStationValid?: boolean | undefined;
  isInjectionValueValid?: boolean | undefined;
  isStartTimeZero?: boolean | undefined;
  isTimeValueValid?: boolean | undefined;
  defaultValue: number;
  minimumValue: number;
  maximumValue: number;
  unitName: string;
  isValueRangeValid?: boolean | undefined;
  displayAccuracy: number;
}

export interface InjectableSourceStation {
  stationName: string;
  isSourceSelected?: boolean | undefined;
  isSourceAlreadyUsed?: boolean | undefined;
  stationDuplicatedIn?: string | undefined;
}

export interface InjectionSignalValues {
  serialNo?: number | undefined;
  injectionTime: number;
  injectionValue: number;
  ramp?: boolean | undefined;
}

export interface OverrideSourceStationlist {
  ischecked?: boolean | undefined;
  signalName: string;
  sourceStationName: string;
  sourceSelecteIn?: string | undefined;
}

export interface StubDataReply {
  parameterStat?: StubDataParameterStat | undefined;
  topologyParameterStat?: StubDataTopologyParameterStat | undefined;
}

export interface StubDataParameterStat {
  groupNames: string[];
  parametersTotalCount?: number | undefined;
  parametersPerGroupCount: KeyValuePair[];
  powerParametersPerGroupCount?: number | undefined;
  reactivePowerParametersPerGroupCount?: number | undefined;
  controllerGroupsParameterCount?: number | undefined;
}

export interface StubDataTopologyParameterStat {
  groupNames: string[];
  parametersTotalCount?: number | undefined;
  parametersPerGroupCount?: number | undefined;
}

export interface ActionLogReply {
  actionName: string;
  timestamp: Date | undefined;
  parameterName?: string | undefined;
  previousValue?: string | undefined;
  updatedValue?: string | undefined;
  user?: string | undefined;
  hosts?: string | undefined;
}

export interface ParameterReply {
  name: string;
  group: string;
  controller: string;
  newValue?: number | undefined;
}

function createBaseAlarm(): Alarm {
  return {
    stationName: "",
    code: 0,
    alarmName: "",
    severity: 0,
    level: "",
    levelNumber: 0,
    timeOn: undefined,
    timeOff: undefined,
    parameter: "",
    description: "",
    acknowledgeText: "",
    acknowledgeOriginator: "",
    acknowledgeTime: undefined,
    seqId: 0,
    groupName: "",
    source: "",
  };
}

export const Alarm = {
  fromJSON(object: any): Alarm {
    return {
      stationName: isSet(object.stationName) ? gt.String(object.stationName) : "",
      code: isSet(object.code) ? gt.Number(object.code) : 0,
      alarmName: isSet(object.alarmName) ? gt.String(object.alarmName) : "",
      severity: isSet(object.severity) ? gt.Number(object.severity) : 0,
      level: isSet(object.level) ? gt.String(object.level) : "",
      levelNumber: isSet(object.levelNumber) ? gt.Number(object.levelNumber) : 0,
      timeOn: isSet(object.timeOn) ? fromJsonTimestamp(object.timeOn) : undefined,
      timeOff: isSet(object.timeOff) ? fromJsonTimestamp(object.timeOff) : undefined,
      parameter: isSet(object.parameter) ? gt.String(object.parameter) : "",
      description: isSet(object.description) ? gt.String(object.description) : "",
      acknowledgeText: isSet(object.acknowledgeText) ? gt.String(object.acknowledgeText) : "",
      acknowledgeOriginator: isSet(object.acknowledgeOriginator) ? gt.String(object.acknowledgeOriginator) : "",
      acknowledgeTime: isSet(object.acknowledgeTime) ? fromJsonTimestamp(object.acknowledgeTime) : undefined,
      seqId: isSet(object.seqId) ? gt.Number(object.seqId) : 0,
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      source: isSet(object.source) ? gt.String(object.source) : "",
    };
  },

  toJSON(message: Alarm): unknown {
    const obj: any = {};
    if (message.stationName !== undefined && message.stationName !== "") {
      obj.stationName = message.stationName;
    }
    if (message.code !== undefined && message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.alarmName !== undefined && message.alarmName !== "") {
      obj.alarmName = message.alarmName;
    }
    if (message.severity !== undefined && message.severity !== 0) {
      obj.severity = Math.round(message.severity);
    }
    if (message.level !== undefined && message.level !== "") {
      obj.level = message.level;
    }
    if (message.levelNumber !== undefined && message.levelNumber !== 0) {
      obj.levelNumber = Math.round(message.levelNumber);
    }
    if (message.timeOn !== undefined) {
      obj.timeOn = message.timeOn.toISOString();
    }
    if (message.timeOff !== undefined) {
      obj.timeOff = message.timeOff.toISOString();
    }
    if (message.parameter !== undefined && message.parameter !== "") {
      obj.parameter = message.parameter;
    }
    if (message.description !== undefined && message.description !== "") {
      obj.description = message.description;
    }
    if (message.acknowledgeText !== undefined && message.acknowledgeText !== "") {
      obj.acknowledgeText = message.acknowledgeText;
    }
    if (message.acknowledgeOriginator !== undefined && message.acknowledgeOriginator !== "") {
      obj.acknowledgeOriginator = message.acknowledgeOriginator;
    }
    if (message.acknowledgeTime !== undefined) {
      obj.acknowledgeTime = message.acknowledgeTime.toISOString();
    }
    if (message.seqId !== undefined && message.seqId !== 0) {
      obj.seqId = Math.round(message.seqId);
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.source !== undefined && message.source !== "") {
      obj.source = message.source;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Alarm>, I>>(base?: I): Alarm {
    return Alarm.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Alarm>, I>>(object: I): Alarm {
    const message = createBaseAlarm();
    message.stationName = object.stationName ?? "";
    message.code = object.code ?? 0;
    message.alarmName = object.alarmName ?? "";
    message.severity = object.severity ?? 0;
    message.level = object.level ?? "";
    message.levelNumber = object.levelNumber ?? 0;
    message.timeOn = object.timeOn ?? undefined;
    message.timeOff = object.timeOff ?? undefined;
    message.parameter = object.parameter ?? "";
    message.description = object.description ?? "";
    message.acknowledgeText = object.acknowledgeText ?? "";
    message.acknowledgeOriginator = object.acknowledgeOriginator ?? "";
    message.acknowledgeTime = object.acknowledgeTime ?? undefined;
    message.seqId = object.seqId ?? 0;
    message.groupName = object.groupName ?? "";
    message.source = object.source ?? "";
    return message;
  },
};

function createBaseAlarmDefinition(): AlarmDefinition {
  return {
    name: "",
    code: 0,
    level: "",
    severity: 0,
    type: "",
    description: "",
    stationType: AlarmDefinition_StationType.Unknown,
  };
}

export const AlarmDefinition = {
  fromJSON(object: any): AlarmDefinition {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      code: isSet(object.code) ? gt.Number(object.code) : 0,
      level: isSet(object.level) ? gt.String(object.level) : "",
      severity: isSet(object.severity) ? gt.Number(object.severity) : 0,
      type: isSet(object.type) ? gt.String(object.type) : "",
      description: isSet(object.description) ? gt.String(object.description) : "",
      stationType: isSet(object.stationType)
        ? alarmDefinition_StationTypeFromJSON(object.stationType)
        : AlarmDefinition_StationType.Unknown,
    };
  },

  toJSON(message: AlarmDefinition): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.code !== undefined && message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.level !== undefined && message.level !== "") {
      obj.level = message.level;
    }
    if (message.severity !== undefined && message.severity !== 0) {
      obj.severity = Math.round(message.severity);
    }
    if (message.type !== undefined && message.type !== "") {
      obj.type = message.type;
    }
    if (message.description !== undefined && message.description !== "") {
      obj.description = message.description;
    }
    if (message.stationType !== undefined && message.stationType !== AlarmDefinition_StationType.Unknown) {
      obj.stationType = alarmDefinition_StationTypeToJSON(message.stationType);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AlarmDefinition>, I>>(base?: I): AlarmDefinition {
    return AlarmDefinition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AlarmDefinition>, I>>(object: I): AlarmDefinition {
    const message = createBaseAlarmDefinition();
    message.name = object.name ?? "";
    message.code = object.code ?? 0;
    message.level = object.level ?? "";
    message.severity = object.severity ?? 0;
    message.type = object.type ?? "";
    message.description = object.description ?? "";
    message.stationType = object.stationType ?? AlarmDefinition_StationType.Unknown;
    return message;
  },
};

function createBaseAlarmLogReply(): AlarmLogReply {
  return { alarms: [] };
}

export const AlarmLogReply = {
  fromJSON(object: any): AlarmLogReply {
    return {
      alarms: gt.Array.isArray(object?.alarms) ? object.alarms.map((e: any) => AlarmLogReply_AlarmLog.fromJSON(e)) : [],
    };
  },

  toJSON(message: AlarmLogReply): unknown {
    const obj: any = {};
    if (message.alarms?.length) {
      obj.alarms = message.alarms.map((e) => AlarmLogReply_AlarmLog.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AlarmLogReply>, I>>(base?: I): AlarmLogReply {
    return AlarmLogReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AlarmLogReply>, I>>(object: I): AlarmLogReply {
    const message = createBaseAlarmLogReply();
    message.alarms = object.alarms?.map((e) => AlarmLogReply_AlarmLog.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAlarmLogReply_AlarmLog(): AlarmLogReply_AlarmLog {
  return {
    parameter: "",
    acknowledgeOriginator: "",
    stationName: "",
    alarmCode: 0,
    alarmName: "",
    timeOn: undefined,
    timeOff: undefined,
    currentStation: false,
    acknowledgeText: "",
    acknowledgeTime: undefined,
    groupName: "",
    source: "",
  };
}

export const AlarmLogReply_AlarmLog = {
  fromJSON(object: any): AlarmLogReply_AlarmLog {
    return {
      parameter: isSet(object.parameter) ? gt.String(object.parameter) : "",
      acknowledgeOriginator: isSet(object.acknowledgeOriginator) ? gt.String(object.acknowledgeOriginator) : "",
      stationName: isSet(object.stationName) ? gt.String(object.stationName) : "",
      alarmCode: isSet(object.alarmCode) ? gt.Number(object.alarmCode) : 0,
      alarmName: isSet(object.alarmName) ? gt.String(object.alarmName) : "",
      timeOn: isSet(object.timeOn) ? fromJsonTimestamp(object.timeOn) : undefined,
      timeOff: isSet(object.timeOff) ? fromJsonTimestamp(object.timeOff) : undefined,
      currentStation: isSet(object.currentStation) ? gt.Boolean(object.currentStation) : false,
      acknowledgeText: isSet(object.acknowledgeText) ? gt.String(object.acknowledgeText) : "",
      acknowledgeTime: isSet(object.acknowledgeTime) ? fromJsonTimestamp(object.acknowledgeTime) : undefined,
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      source: isSet(object.source) ? gt.String(object.source) : "",
    };
  },

  toJSON(message: AlarmLogReply_AlarmLog): unknown {
    const obj: any = {};
    if (message.parameter !== undefined && message.parameter !== "") {
      obj.parameter = message.parameter;
    }
    if (message.acknowledgeOriginator !== undefined && message.acknowledgeOriginator !== "") {
      obj.acknowledgeOriginator = message.acknowledgeOriginator;
    }
    if (message.stationName !== undefined && message.stationName !== "") {
      obj.stationName = message.stationName;
    }
    if (message.alarmCode !== undefined && message.alarmCode !== 0) {
      obj.alarmCode = Math.round(message.alarmCode);
    }
    if (message.alarmName !== undefined && message.alarmName !== "") {
      obj.alarmName = message.alarmName;
    }
    if (message.timeOn !== undefined) {
      obj.timeOn = message.timeOn.toISOString();
    }
    if (message.timeOff !== undefined) {
      obj.timeOff = message.timeOff.toISOString();
    }
    if (message.currentStation !== undefined && message.currentStation !== false) {
      obj.currentStation = message.currentStation;
    }
    if (message.acknowledgeText !== undefined && message.acknowledgeText !== "") {
      obj.acknowledgeText = message.acknowledgeText;
    }
    if (message.acknowledgeTime !== undefined) {
      obj.acknowledgeTime = message.acknowledgeTime.toISOString();
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.source !== undefined && message.source !== "") {
      obj.source = message.source;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AlarmLogReply_AlarmLog>, I>>(base?: I): AlarmLogReply_AlarmLog {
    return AlarmLogReply_AlarmLog.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AlarmLogReply_AlarmLog>, I>>(object: I): AlarmLogReply_AlarmLog {
    const message = createBaseAlarmLogReply_AlarmLog();
    message.parameter = object.parameter ?? "";
    message.acknowledgeOriginator = object.acknowledgeOriginator ?? "";
    message.stationName = object.stationName ?? "";
    message.alarmCode = object.alarmCode ?? 0;
    message.alarmName = object.alarmName ?? "";
    message.timeOn = object.timeOn ?? undefined;
    message.timeOff = object.timeOff ?? undefined;
    message.currentStation = object.currentStation ?? false;
    message.acknowledgeText = object.acknowledgeText ?? "";
    message.acknowledgeTime = object.acknowledgeTime ?? undefined;
    message.groupName = object.groupName ?? "";
    message.source = object.source ?? "";
    return message;
  },
};

function createBaseHealthReply(): HealthReply {
  return { isHealthy: false, details: "" };
}

export const HealthReply = {
  fromJSON(object: any): HealthReply {
    return {
      isHealthy: isSet(object.isHealthy) ? gt.Boolean(object.isHealthy) : false,
      details: isSet(object.details) ? gt.String(object.details) : "",
    };
  },

  toJSON(message: HealthReply): unknown {
    const obj: any = {};
    if (message.isHealthy !== false) {
      obj.isHealthy = message.isHealthy;
    }
    if (message.details !== undefined && message.details !== "") {
      obj.details = message.details;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HealthReply>, I>>(base?: I): HealthReply {
    return HealthReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HealthReply>, I>>(object: I): HealthReply {
    const message = createBaseHealthReply();
    message.isHealthy = object.isHealthy ?? false;
    message.details = object.details ?? "";
    return message;
  },
};

function createBaseAuditTrailReply(): AuditTrailReply {
  return { trails: [] };
}

export const AuditTrailReply = {
  fromJSON(object: any): AuditTrailReply {
    return {
      trails: gt.Array.isArray(object?.trails)
        ? object.trails.map((e: any) => AuditTrailReply_AuditTrail.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AuditTrailReply): unknown {
    const obj: any = {};
    if (message.trails?.length) {
      obj.trails = message.trails.map((e) => AuditTrailReply_AuditTrail.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AuditTrailReply>, I>>(base?: I): AuditTrailReply {
    return AuditTrailReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuditTrailReply>, I>>(object: I): AuditTrailReply {
    const message = createBaseAuditTrailReply();
    message.trails = object.trails?.map((e) => AuditTrailReply_AuditTrail.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAuditTrailReply_AuditTrail(): AuditTrailReply_AuditTrail {
  return {
    entryTime: undefined,
    userName: "",
    detailedDescription: "",
    source: "",
    trailId: "",
    type: "",
    serverRole: "",
    groupName: "",
    status: "",
  };
}

export const AuditTrailReply_AuditTrail = {
  fromJSON(object: any): AuditTrailReply_AuditTrail {
    return {
      entryTime: isSet(object.entryTime) ? fromJsonTimestamp(object.entryTime) : undefined,
      userName: isSet(object.userName) ? gt.String(object.userName) : "",
      detailedDescription: isSet(object.detailedDescription) ? gt.String(object.detailedDescription) : "",
      source: isSet(object.source) ? gt.String(object.source) : "",
      trailId: isSet(object.trailId) ? gt.String(object.trailId) : "",
      type: isSet(object.type) ? gt.String(object.type) : "",
      serverRole: isSet(object.serverRole) ? gt.String(object.serverRole) : "",
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      status: isSet(object.status) ? gt.String(object.status) : "",
    };
  },

  toJSON(message: AuditTrailReply_AuditTrail): unknown {
    const obj: any = {};
    if (message.entryTime !== undefined) {
      obj.entryTime = message.entryTime.toISOString();
    }
    if (message.userName !== undefined && message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.detailedDescription !== undefined && message.detailedDescription !== "") {
      obj.detailedDescription = message.detailedDescription;
    }
    if (message.source !== undefined && message.source !== "") {
      obj.source = message.source;
    }
    if (message.trailId !== undefined && message.trailId !== "") {
      obj.trailId = message.trailId;
    }
    if (message.type !== undefined && message.type !== "") {
      obj.type = message.type;
    }
    if (message.serverRole !== undefined && message.serverRole !== "") {
      obj.serverRole = message.serverRole;
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.status !== undefined && message.status !== "") {
      obj.status = message.status;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AuditTrailReply_AuditTrail>, I>>(base?: I): AuditTrailReply_AuditTrail {
    return AuditTrailReply_AuditTrail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuditTrailReply_AuditTrail>, I>>(object: I): AuditTrailReply_AuditTrail {
    const message = createBaseAuditTrailReply_AuditTrail();
    message.entryTime = object.entryTime ?? undefined;
    message.userName = object.userName ?? "";
    message.detailedDescription = object.detailedDescription ?? "";
    message.source = object.source ?? "";
    message.trailId = object.trailId ?? "";
    message.type = object.type ?? "";
    message.serverRole = object.serverRole ?? "";
    message.groupName = object.groupName ?? "";
    message.status = object.status ?? "";
    return message;
  },
};

function createBaseControllerData(): ControllerData {
  return {
    variableName: "",
    controllerName: "",
    groupName: "",
    sampleTime: undefined,
    activeGridmeter: "",
    unit: "",
    variableValue: 0,
    displayAccuracy: 0,
    friendlyName: "",
    plantControllerName: "",
  };
}

export const ControllerData = {
  fromJSON(object: any): ControllerData {
    return {
      variableName: isSet(object.variableName) ? gt.String(object.variableName) : "",
      controllerName: isSet(object.controllerName) ? gt.String(object.controllerName) : "",
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      sampleTime: isSet(object.sampleTime) ? fromJsonTimestamp(object.sampleTime) : undefined,
      activeGridmeter: isSet(object.activeGridmeter) ? gt.String(object.activeGridmeter) : "",
      unit: isSet(object.unit) ? gt.String(object.unit) : "",
      variableValue: isSet(object.variableValue) ? gt.Number(object.variableValue) : 0,
      displayAccuracy: isSet(object.displayAccuracy) ? gt.Number(object.displayAccuracy) : 0,
      friendlyName: isSet(object.friendlyName) ? gt.String(object.friendlyName) : "",
      plantControllerName: isSet(object.plantControllerName) ? gt.String(object.plantControllerName) : "",
    };
  },

  toJSON(message: ControllerData): unknown {
    const obj: any = {};
    if (message.variableName !== undefined && message.variableName !== "") {
      obj.variableName = message.variableName;
    }
    if (message.controllerName !== undefined && message.controllerName !== "") {
      obj.controllerName = message.controllerName;
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.sampleTime !== undefined) {
      obj.sampleTime = message.sampleTime.toISOString();
    }
    if (message.activeGridmeter !== undefined && message.activeGridmeter !== "") {
      obj.activeGridmeter = message.activeGridmeter;
    }
    if (message.unit !== undefined && message.unit !== "") {
      obj.unit = message.unit;
    }
    if (message.variableValue !== undefined && message.variableValue !== 0) {
      obj.variableValue = message.variableValue;
    }
    if (message.displayAccuracy !== undefined && message.displayAccuracy !== 0) {
      obj.displayAccuracy = message.displayAccuracy;
    }
    if (message.friendlyName !== undefined && message.friendlyName !== "") {
      obj.friendlyName = message.friendlyName;
    }
    if (message.plantControllerName !== undefined && message.plantControllerName !== "") {
      obj.plantControllerName = message.plantControllerName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ControllerData>, I>>(base?: I): ControllerData {
    return ControllerData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ControllerData>, I>>(object: I): ControllerData {
    const message = createBaseControllerData();
    message.variableName = object.variableName ?? "";
    message.controllerName = object.controllerName ?? "";
    message.groupName = object.groupName ?? "";
    message.sampleTime = object.sampleTime ?? undefined;
    message.activeGridmeter = object.activeGridmeter ?? "";
    message.unit = object.unit ?? "";
    message.variableValue = object.variableValue ?? 0;
    message.displayAccuracy = object.displayAccuracy ?? 0;
    message.friendlyName = object.friendlyName ?? "";
    message.plantControllerName = object.plantControllerName ?? "";
    return message;
  },
};

function createBaseCustomAlarm(): CustomAlarm {
  return {
    name: "",
    code: 0,
    description: "",
    level: CustomAlarm_Level.NONE,
    type: CustomAlarm_Type.Alarm,
    consequence: CustomAlarm_Consequence.TurbineControlLost,
    action: CustomAlarm_Action.InformService,
  };
}

export const CustomAlarm = {
  fromJSON(object: any): CustomAlarm {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      code: isSet(object.code) ? gt.Number(object.code) : 0,
      description: isSet(object.description) ? gt.String(object.description) : "",
      level: isSet(object.level) ? customAlarm_LevelFromJSON(object.level) : CustomAlarm_Level.NONE,
      type: isSet(object.type) ? customAlarm_TypeFromJSON(object.type) : CustomAlarm_Type.Alarm,
      consequence: isSet(object.consequence)
        ? customAlarm_ConsequenceFromJSON(object.consequence)
        : CustomAlarm_Consequence.TurbineControlLost,
      action: isSet(object.action) ? customAlarm_ActionFromJSON(object.action) : CustomAlarm_Action.InformService,
    };
  },

  toJSON(message: CustomAlarm): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    if (message.description !== undefined && message.description !== "") {
      obj.description = message.description;
    }
    if (message.level !== undefined && message.level !== CustomAlarm_Level.NONE) {
      obj.level = customAlarm_LevelToJSON(message.level);
    }
    if (message.type !== undefined && message.type !== CustomAlarm_Type.Alarm) {
      obj.type = customAlarm_TypeToJSON(message.type);
    }
    if (message.consequence !== undefined && message.consequence !== CustomAlarm_Consequence.NoConsequence) {
      obj.consequence = customAlarm_ConsequenceToJSON(message.consequence);
    }
    if (message.action !== undefined && message.action !== CustomAlarm_Action.NoAction) {
      obj.action = customAlarm_ActionToJSON(message.action);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CustomAlarm>, I>>(base?: I): CustomAlarm {
    return CustomAlarm.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CustomAlarm>, I>>(object: I): CustomAlarm {
    const message = createBaseCustomAlarm();
    message.name = object.name ?? "";
    message.code = object.code ?? 0;
    message.description = object.description ?? "";
    message.level = object.level ?? CustomAlarm_Level.NONE;
    message.type = object.type ?? CustomAlarm_Type.Alarm;
    message.consequence = object.consequence ?? CustomAlarm_Consequence.TurbineControlLost;
    message.action = object.action ?? CustomAlarm_Action.InformService;
    return message;
  },
};

function createBasecustomData(): customData {
  return { name: "", description: "", unit: "", datatype: "", value: "", minvalue: "", maxvalue: "" };
}

export const customData = {
  fromJSON(object: any): customData {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      description: isSet(object.description) ? gt.String(object.description) : "",
      unit: isSet(object.unit) ? gt.String(object.unit) : "",
      datatype: isSet(object.datatype) ? gt.String(object.datatype) : "",
      value: isSet(object.value) ? gt.String(object.value) : "",
      minvalue: isSet(object.minvalue) ? gt.String(object.minvalue) : "",
      maxvalue: isSet(object.maxvalue) ? gt.String(object.maxvalue) : "",
    };
  },

  toJSON(message: customData): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== undefined && message.description !== "") {
      obj.description = message.description;
    }
    if (message.unit !== "") {
      obj.unit = message.unit;
    }
    if (message.datatype !== "") {
      obj.datatype = message.datatype;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    if (message.minvalue !== undefined && message.minvalue !== "") {
      obj.minvalue = message.minvalue;
    }
    if (message.maxvalue !== undefined && message.maxvalue !== "") {
      obj.maxvalue = message.maxvalue;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<customData>, I>>(base?: I): customData {
    return customData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<customData>, I>>(object: I): customData {
    const message = createBasecustomData();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.unit = object.unit ?? "";
    message.datatype = object.datatype ?? "";
    message.value = object.value ?? "";
    message.minvalue = object.minvalue ?? "";
    message.maxvalue = object.maxvalue ?? "";
    return message;
  },
};

function createBaseCustomDataNamespace(): CustomDataNamespace {
  return { name: "", customparameters: [], customvariables: [] };
}

export const CustomDataNamespace = {
  fromJSON(object: any): CustomDataNamespace {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      customparameters: gt.Array.isArray(object?.customparameters)
        ? object.customparameters.map((e: any) => customData.fromJSON(e))
        : [],
      customvariables: gt.Array.isArray(object?.customvariables)
        ? object.customvariables.map((e: any) => customData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CustomDataNamespace): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.customparameters?.length) {
      obj.customparameters = message.customparameters.map((e) => customData.toJSON(e));
    }
    if (message.customvariables?.length) {
      obj.customvariables = message.customvariables.map((e) => customData.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CustomDataNamespace>, I>>(base?: I): CustomDataNamespace {
    return CustomDataNamespace.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CustomDataNamespace>, I>>(object: I): CustomDataNamespace {
    const message = createBaseCustomDataNamespace();
    message.name = object.name ?? "";
    message.customparameters = object.customparameters?.map((e) => customData.fromPartial(e)) || [];
    message.customvariables = object.customvariables?.map((e) => customData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCustomDataReply(): CustomDataReply {
  return { customNameSpaces: [], sampleTime: undefined };
}

export const CustomDataReply = {
  fromJSON(object: any): CustomDataReply {
    return {
      customNameSpaces: gt.Array.isArray(object?.customNameSpaces)
        ? object.customNameSpaces.map((e: any) => CustomDataNamespace.fromJSON(e))
        : [],
      sampleTime: isSet(object.sampleTime) ? fromJsonTimestamp(object.sampleTime) : undefined,
    };
  },

  toJSON(message: CustomDataReply): unknown {
    const obj: any = {};
    if (message.customNameSpaces?.length) {
      obj.customNameSpaces = message.customNameSpaces.map((e) => CustomDataNamespace.toJSON(e));
    }
    if (message.sampleTime !== undefined) {
      obj.sampleTime = message.sampleTime.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CustomDataReply>, I>>(base?: I): CustomDataReply {
    return CustomDataReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CustomDataReply>, I>>(object: I): CustomDataReply {
    const message = createBaseCustomDataReply();
    message.customNameSpaces = object.customNameSpaces?.map((e) => CustomDataNamespace.fromPartial(e)) || [];
    message.sampleTime = object.sampleTime ?? undefined;
    return message;
  },
};

function createBasecustomparameter(): customparameter {
  return {
    namespace: "",
    name: "",
    description: "",
    minimum: 0,
    maximum: 0,
    unit: "",
    datatype: CustomDataDataType.SInt64,
  };
}

export const customparameter = {
  fromJSON(object: any): customparameter {
    return {
      namespace: isSet(object.namespace) ? gt.String(object.namespace) : "",
      name: isSet(object.name) ? gt.String(object.name) : "",
      description: isSet(object.description) ? gt.String(object.description) : "",
      minimum: isSet(object.minimum) ? gt.Number(object.minimum) : 0,
      maximum: isSet(object.maximum) ? gt.Number(object.maximum) : 0,
      unit: isSet(object.unit) ? gt.String(object.unit) : "",
      datatype: isSet(object.datatype) ? customDataDataTypeFromJSON(object.datatype) : CustomDataDataType.SInt64,
    };
  },

  toJSON(message: customparameter): unknown {
    const obj: any = {};
    if (message.namespace !== undefined && message.namespace !== "") {
      obj.namespace = message.namespace;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== undefined && message.description !== "") {
      obj.description = message.description;
    }
    if (message.minimum !== undefined && message.minimum !== 0) {
      obj.minimum = message.minimum;
    }
    if (message.maximum !== undefined && message.maximum !== 0) {
      obj.maximum = message.maximum;
    }
    if (message.unit !== "") {
      obj.unit = message.unit;
    }
    if (message.datatype !== CustomDataDataType.SInt64) {
      obj.datatype = customDataDataTypeToJSON(message.datatype);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<customparameter>, I>>(base?: I): customparameter {
    return customparameter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<customparameter>, I>>(object: I): customparameter {
    const message = createBasecustomparameter();
    message.namespace = object.namespace ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.minimum = object.minimum ?? 0;
    message.maximum = object.maximum ?? 0;
    message.unit = object.unit ?? "";
    message.datatype = object.datatype ?? CustomDataDataType.SInt64;
    return message;
  },
};

function createBaseCustomTagReply(): CustomTagReply {
  return { customparameters: [], customvariables: [] };
}

export const CustomTagReply = {
  fromJSON(object: any): CustomTagReply {
    return {
      customparameters: gt.Array.isArray(object?.customparameters)
        ? object.customparameters.map((e: any) => customparameter.fromJSON(e))
        : [],
      customvariables: gt.Array.isArray(object?.customvariables)
        ? object.customvariables.map((e: any) => customvariable.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CustomTagReply): unknown {
    const obj: any = {};
    if (message.customparameters?.length) {
      obj.customparameters = message.customparameters.map((e) => customparameter.toJSON(e));
    }
    if (message.customvariables?.length) {
      obj.customvariables = message.customvariables.map((e) => customvariable.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CustomTagReply>, I>>(base?: I): CustomTagReply {
    return CustomTagReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CustomTagReply>, I>>(object: I): CustomTagReply {
    const message = createBaseCustomTagReply();
    message.customparameters = object.customparameters?.map((e) => customparameter.fromPartial(e)) || [];
    message.customvariables = object.customvariables?.map((e) => customvariable.fromPartial(e)) || [];
    return message;
  },
};

function createBasecustomvariable(): customvariable {
  return { namespace: "", name: "", description: "", unit: "", datatype: CustomDataDataType.SInt64 };
}

export const customvariable = {
  fromJSON(object: any): customvariable {
    return {
      namespace: isSet(object.namespace) ? gt.String(object.namespace) : "",
      name: isSet(object.name) ? gt.String(object.name) : "",
      description: isSet(object.description) ? gt.String(object.description) : "",
      unit: isSet(object.unit) ? gt.String(object.unit) : "",
      datatype: isSet(object.datatype) ? customDataDataTypeFromJSON(object.datatype) : CustomDataDataType.SInt64,
    };
  },

  toJSON(message: customvariable): unknown {
    const obj: any = {};
    if (message.namespace !== undefined && message.namespace !== "") {
      obj.namespace = message.namespace;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.unit !== "") {
      obj.unit = message.unit;
    }
    if (message.datatype !== CustomDataDataType.SInt64) {
      obj.datatype = customDataDataTypeToJSON(message.datatype);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<customvariable>, I>>(base?: I): customvariable {
    return customvariable.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<customvariable>, I>>(object: I): customvariable {
    const message = createBasecustomvariable();
    message.namespace = object.namespace ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.unit = object.unit ?? "";
    message.datatype = object.datatype ?? CustomDataDataType.SInt64;
    return message;
  },
};

function createBaseDataset(): Dataset {
  return {
    dataSetId: 0,
    name: "",
    label: "",
    xlabel: "",
    xmin: 0,
    xmax: 0,
    xunit: "",
    ylabel: "",
    ymin: 0,
    ymax: 0,
    yunit: "",
    points: [],
    groupName: "",
  };
}

export const Dataset = {
  fromJSON(object: any): Dataset {
    return {
      dataSetId: isSet(object.dataSetId) ? gt.Number(object.dataSetId) : 0,
      name: isSet(object.name) ? gt.String(object.name) : "",
      label: isSet(object.label) ? gt.String(object.label) : "",
      xlabel: isSet(object.xlabel) ? gt.String(object.xlabel) : "",
      xmin: isSet(object.xmin) ? gt.Number(object.xmin) : 0,
      xmax: isSet(object.xmax) ? gt.Number(object.xmax) : 0,
      xunit: isSet(object.xunit) ? gt.String(object.xunit) : "",
      ylabel: isSet(object.ylabel) ? gt.String(object.ylabel) : "",
      ymin: isSet(object.ymin) ? gt.Number(object.ymin) : 0,
      ymax: isSet(object.ymax) ? gt.Number(object.ymax) : 0,
      yunit: isSet(object.yunit) ? gt.String(object.yunit) : "",
      points: gt.Array.isArray(object?.points)
        ? object.points.map((e: any) => Point.fromJSON(e))
        : [],
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
    };
  },

  toJSON(message: Dataset): unknown {
    const obj: any = {};
    if (message.dataSetId !== undefined && message.dataSetId !== 0) {
      obj.dataSetId = Math.round(message.dataSetId);
    }
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.label !== undefined && message.label !== "") {
      obj.label = message.label;
    }
    if (message.xlabel !== undefined && message.xlabel !== "") {
      obj.xlabel = message.xlabel;
    }
    if (message.xmin !== undefined && message.xmin !== 0) {
      obj.xmin = message.xmin;
    }
    if (message.xmax !== undefined && message.xmax !== 0) {
      obj.xmax = message.xmax;
    }
    if (message.xunit !== undefined && message.xunit !== "") {
      obj.xunit = message.xunit;
    }
    if (message.ylabel !== undefined && message.ylabel !== "") {
      obj.ylabel = message.ylabel;
    }
    if (message.ymin !== undefined && message.ymin !== 0) {
      obj.ymin = message.ymin;
    }
    if (message.ymax !== undefined && message.ymax !== 0) {
      obj.ymax = message.ymax;
    }
    if (message.yunit !== undefined && message.yunit !== "") {
      obj.yunit = message.yunit;
    }
    if (message.points?.length) {
      obj.points = message.points.map((e) => Point.toJSON(e));
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Dataset>, I>>(base?: I): Dataset {
    return Dataset.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Dataset>, I>>(object: I): Dataset {
    const message = createBaseDataset();
    message.dataSetId = object.dataSetId ?? 0;
    message.name = object.name ?? "";
    message.label = object.label ?? "";
    message.xlabel = object.xlabel ?? "";
    message.xmin = object.xmin ?? 0;
    message.xmax = object.xmax ?? 0;
    message.xunit = object.xunit ?? "";
    message.ylabel = object.ylabel ?? "";
    message.ymin = object.ymin ?? 0;
    message.ymax = object.ymax ?? 0;
    message.yunit = object.yunit ?? "";
    message.points = object.points?.map((e) => Point.fromPartial(e)) || [];
    message.groupName = object.groupName ?? "";
    return message;
  },
};

function createBaseDatasetDetails(): DatasetDetails {
  return { description: "", descriptionId: 0, datasetId: 0 };
}

export const DatasetDetails = {
  fromJSON(object: any): DatasetDetails {
    return {
      description: isSet(object.description) ? gt.String(object.description) : "",
      descriptionId: isSet(object.descriptionId) ? gt.Number(object.descriptionId) : 0,
      datasetId: isSet(object.datasetId) ? gt.Number(object.datasetId) : 0,
    };
  },

  toJSON(message: DatasetDetails): unknown {
    const obj: any = {};
    if (message.description !== undefined && message.description !== "") {
      obj.description = message.description;
    }
    if (message.descriptionId !== undefined && message.descriptionId !== 0) {
      obj.descriptionId = Math.round(message.descriptionId);
    }
    if (message.datasetId !== undefined && message.datasetId !== 0) {
      obj.datasetId = Math.round(message.datasetId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DatasetDetails>, I>>(base?: I): DatasetDetails {
    return DatasetDetails.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DatasetDetails>, I>>(object: I): DatasetDetails {
    const message = createBaseDatasetDetails();
    message.description = object.description ?? "";
    message.descriptionId = object.descriptionId ?? 0;
    message.datasetId = object.datasetId ?? 0;
    return message;
  },
};

function createBaseDirectoryBrowseReply(): DirectoryBrowseReply {
  return { directories: [] };
}

export const DirectoryBrowseReply = {
  fromJSON(object: any): DirectoryBrowseReply {
    return {
      directories: gt.Array.isArray(object?.directories)
        ? object.directories.map((e: any) => DirectoryBrowseReply_Directory.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DirectoryBrowseReply): unknown {
    const obj: any = {};
    if (message.directories?.length) {
      obj.directories = message.directories.map((e) => DirectoryBrowseReply_Directory.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DirectoryBrowseReply>, I>>(base?: I): DirectoryBrowseReply {
    return DirectoryBrowseReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DirectoryBrowseReply>, I>>(object: I): DirectoryBrowseReply {
    const message = createBaseDirectoryBrowseReply();
    message.directories = object.directories?.map((e) => DirectoryBrowseReply_Directory.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDirectoryBrowseReply_Directory(): DirectoryBrowseReply_Directory {
  return { name: "", subDirectories: [], files: [] };
}

export const DirectoryBrowseReply_Directory = {
  fromJSON(object: any): DirectoryBrowseReply_Directory {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      subDirectories: gt.Array.isArray(object?.subDirectories)
        ? object.subDirectories.map((e: any) => gt.String(e))
        : [],
      files: gt.Array.isArray(object?.files)
        ? object.files.map((e: any) => DirectoryBrowseReply_Directory_File.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DirectoryBrowseReply_Directory): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.subDirectories?.length) {
      obj.subDirectories = message.subDirectories;
    }
    if (message.files?.length) {
      obj.files = message.files.map((e) => DirectoryBrowseReply_Directory_File.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DirectoryBrowseReply_Directory>, I>>(base?: I): DirectoryBrowseReply_Directory {
    return DirectoryBrowseReply_Directory.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DirectoryBrowseReply_Directory>, I>>(
    object: I,
  ): DirectoryBrowseReply_Directory {
    const message = createBaseDirectoryBrowseReply_Directory();
    message.name = object.name ?? "";
    message.subDirectories = object.subDirectories?.map((e) => e) || [];
    message.files = object.files?.map((e) => DirectoryBrowseReply_Directory_File.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDirectoryBrowseReply_Directory_File(): DirectoryBrowseReply_Directory_File {
  return { name: "", size: 0 };
}

export const DirectoryBrowseReply_Directory_File = {
  fromJSON(object: any): DirectoryBrowseReply_Directory_File {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      size: isSet(object.size) ? gt.Number(object.size) : 0,
    };
  },

  toJSON(message: DirectoryBrowseReply_Directory_File): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.size !== undefined && message.size !== 0) {
      obj.size = Math.round(message.size);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DirectoryBrowseReply_Directory_File>, I>>(
    base?: I,
  ): DirectoryBrowseReply_Directory_File {
    return DirectoryBrowseReply_Directory_File.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DirectoryBrowseReply_Directory_File>, I>>(
    object: I,
  ): DirectoryBrowseReply_Directory_File {
    const message = createBaseDirectoryBrowseReply_Directory_File();
    message.name = object.name ?? "";
    message.size = object.size ?? 0;
    return message;
  },
};

function createBaseFileSyncStatusReply(): FileSyncStatusReply {
  return { serviceState: FileSyncStatusReply_FileSyncState.Unknown, folders: [] };
}

export const FileSyncStatusReply = {
  fromJSON(object: any): FileSyncStatusReply {
    return {
      serviceState: isSet(object.serviceState)
        ? fileSyncStatusReply_FileSyncStateFromJSON(object.serviceState)
        : FileSyncStatusReply_FileSyncState.Unknown,
      folders: gt.Array.isArray(object?.folders)
        ? object.folders.map((e: any) => FileSyncStatusReply_FolderStatus.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FileSyncStatusReply): unknown {
    const obj: any = {};
    if (message.serviceState !== undefined && message.serviceState !== FileSyncStatusReply_FileSyncState.Unknown) {
      obj.serviceState = fileSyncStatusReply_FileSyncStateToJSON(message.serviceState);
    }
    if (message.folders?.length) {
      obj.folders = message.folders.map((e) => FileSyncStatusReply_FolderStatus.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FileSyncStatusReply>, I>>(base?: I): FileSyncStatusReply {
    return FileSyncStatusReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FileSyncStatusReply>, I>>(object: I): FileSyncStatusReply {
    const message = createBaseFileSyncStatusReply();
    message.serviceState = object.serviceState ?? FileSyncStatusReply_FileSyncState.Unknown;
    message.folders = object.folders?.map((e) => FileSyncStatusReply_FolderStatus.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFileSyncStatusReply_FolderStatus(): FileSyncStatusReply_FolderStatus {
  return {
    folder: FileSyncStatusReply_FolderId.LocalStorage,
    lastUpdateEpoch: 0,
    pendingDownloadsNotOnTheFly: 0,
    transfersDuringLastMinute: 0,
  };
}

export const FileSyncStatusReply_FolderStatus = {
  fromJSON(object: any): FileSyncStatusReply_FolderStatus {
    return {
      folder: isSet(object.folder)
        ? fileSyncStatusReply_FolderIdFromJSON(object.folder)
        : FileSyncStatusReply_FolderId.LocalStorage,
      lastUpdateEpoch: isSet(object.lastUpdateEpoch) ? gt.Number(object.lastUpdateEpoch) : 0,
      pendingDownloadsNotOnTheFly: isSet(object.pendingDownloadsNotOnTheFly)
        ? gt.Number(object.pendingDownloadsNotOnTheFly)
        : 0,
      transfersDuringLastMinute: isSet(object.transfersDuringLastMinute)
        ? gt.Number(object.transfersDuringLastMinute)
        : 0,
    };
  },

  toJSON(message: FileSyncStatusReply_FolderStatus): unknown {
    const obj: any = {};
    if (message.folder !== undefined && message.folder !== FileSyncStatusReply_FolderId.LocalStorage) {
      obj.folder = fileSyncStatusReply_FolderIdToJSON(message.folder);
    }
    if (message.lastUpdateEpoch !== undefined && message.lastUpdateEpoch !== 0) {
      obj.lastUpdateEpoch = Math.round(message.lastUpdateEpoch);
    }
    if (message.pendingDownloadsNotOnTheFly !== undefined && message.pendingDownloadsNotOnTheFly !== 0) {
      obj.pendingDownloadsNotOnTheFly = Math.round(message.pendingDownloadsNotOnTheFly);
    }
    if (message.transfersDuringLastMinute !== undefined && message.transfersDuringLastMinute !== 0) {
      obj.transfersDuringLastMinute = Math.round(message.transfersDuringLastMinute);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FileSyncStatusReply_FolderStatus>, I>>(
    base?: I,
  ): FileSyncStatusReply_FolderStatus {
    return FileSyncStatusReply_FolderStatus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FileSyncStatusReply_FolderStatus>, I>>(
    object: I,
  ): FileSyncStatusReply_FolderStatus {
    const message = createBaseFileSyncStatusReply_FolderStatus();
    message.folder = object.folder ?? FileSyncStatusReply_FolderId.LocalStorage;
    message.lastUpdateEpoch = object.lastUpdateEpoch ?? 0;
    message.pendingDownloadsNotOnTheFly = object.pendingDownloadsNotOnTheFly ?? 0;
    message.transfersDuringLastMinute = object.transfersDuringLastMinute ?? 0;
    return message;
  },
};

function createBaseGms(): Gms {
  return {
    name: "",
    timestamp: undefined,
    gmsType: "",
    status: "",
    activePower: 0,
    activePowerQuality: "",
    frequency: 0,
    frequencyQuality: "",
    voltage: 0,
    voltageQuality: "",
    reactivePower: 0,
    reactivePowerQuality: "",
    physicalData: undefined,
    redundantData: undefined,
    virtualData: undefined,
    nominalVoltage: 0,
    apparentPower: 0,
    apparentPowerQuality: "",
    upstreamCompensated: undefined,
    groupName: "",
    voltagePhaseUab: 0,
    voltagePhaseUabQuality: "",
    voltagePhaseUbc: 0,
    voltagePhaseUbcQuality: "",
    voltagePhaseUca: 0,
    voltagePhaseUcaQuality: "",
    id: 0,
  };
}

export const Gms = {
  fromJSON(object: any): Gms {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      gmsType: isSet(object.gmsType) ? gt.String(object.gmsType) : "",
      status: isSet(object.status) ? gt.String(object.status) : "",
      activePower: isSet(object.activePower) ? gt.Number(object.activePower) : 0,
      activePowerQuality: isSet(object.activePowerQuality) ? gt.String(object.activePowerQuality) : "",
      frequency: isSet(object.frequency) ? gt.Number(object.frequency) : 0,
      frequencyQuality: isSet(object.frequencyQuality) ? gt.String(object.frequencyQuality) : "",
      voltage: isSet(object.voltage) ? gt.Number(object.voltage) : 0,
      voltageQuality: isSet(object.voltageQuality) ? gt.String(object.voltageQuality) : "",
      reactivePower: isSet(object.reactivePower) ? gt.Number(object.reactivePower) : 0,
      reactivePowerQuality: isSet(object.reactivePowerQuality) ? gt.String(object.reactivePowerQuality) : "",
      physicalData: isSet(object.physicalData) ? Physical.fromJSON(object.physicalData) : undefined,
      redundantData: isSet(object.redundantData) ? Redundant.fromJSON(object.redundantData) : undefined,
      virtualData: isSet(object.virtualData) ? Virtual.fromJSON(object.virtualData) : undefined,
      nominalVoltage: isSet(object.nominalVoltage) ? gt.Number(object.nominalVoltage) : 0,
      apparentPower: isSet(object.apparentPower) ? gt.Number(object.apparentPower) : 0,
      apparentPowerQuality: isSet(object.apparentPowerQuality) ? gt.String(object.apparentPowerQuality) : "",
      upstreamCompensated: isSet(object.upstreamCompensated)
        ? Upstream.fromJSON(object.upstreamCompensated)
        : undefined,
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      voltagePhaseUab: isSet(object.voltagePhaseUab) ? gt.Number(object.voltagePhaseUab) : 0,
      voltagePhaseUabQuality: isSet(object.voltagePhaseUabQuality) ? gt.String(object.voltagePhaseUabQuality) : "",
      voltagePhaseUbc: isSet(object.voltagePhaseUbc) ? gt.Number(object.voltagePhaseUbc) : 0,
      voltagePhaseUbcQuality: isSet(object.voltagePhaseUbcQuality) ? gt.String(object.voltagePhaseUbcQuality) : "",
      voltagePhaseUca: isSet(object.voltagePhaseUca) ? gt.Number(object.voltagePhaseUca) : 0,
      voltagePhaseUcaQuality: isSet(object.voltagePhaseUcaQuality) ? gt.String(object.voltagePhaseUcaQuality) : "",
      id: isSet(object.id) ? gt.Number(object.id) : 0,
    };
  },

  toJSON(message: Gms): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    if (message.gmsType !== undefined && message.gmsType !== "") {
      obj.gmsType = message.gmsType;
    }
    if (message.status !== undefined && message.status !== "") {
      obj.status = message.status;
    }
    if (message.activePower !== undefined && message.activePower !== 0) {
      obj.activePower = message.activePower;
    }
    if (message.activePowerQuality !== undefined && message.activePowerQuality !== "") {
      obj.activePowerQuality = message.activePowerQuality;
    }
    if (message.frequency !== undefined && message.frequency !== 0) {
      obj.frequency = message.frequency;
    }
    if (message.frequencyQuality !== undefined && message.frequencyQuality !== "") {
      obj.frequencyQuality = message.frequencyQuality;
    }
    if (message.voltage !== undefined && message.voltage !== 0) {
      obj.voltage = message.voltage;
    }
    if (message.voltageQuality !== undefined && message.voltageQuality !== "") {
      obj.voltageQuality = message.voltageQuality;
    }
    if (message.reactivePower !== undefined && message.reactivePower !== 0) {
      obj.reactivePower = message.reactivePower;
    }
    if (message.reactivePowerQuality !== undefined && message.reactivePowerQuality !== "") {
      obj.reactivePowerQuality = message.reactivePowerQuality;
    }
    if (message.physicalData !== undefined) {
      obj.physicalData = Physical.toJSON(message.physicalData);
    }
    if (message.redundantData !== undefined) {
      obj.redundantData = Redundant.toJSON(message.redundantData);
    }
    if (message.virtualData !== undefined) {
      obj.virtualData = Virtual.toJSON(message.virtualData);
    }
    if (message.nominalVoltage !== undefined && message.nominalVoltage !== 0) {
      obj.nominalVoltage = message.nominalVoltage;
    }
    if (message.apparentPower !== undefined && message.apparentPower !== 0) {
      obj.apparentPower = message.apparentPower;
    }
    if (message.apparentPowerQuality !== undefined && message.apparentPowerQuality !== "") {
      obj.apparentPowerQuality = message.apparentPowerQuality;
    }
    if (message.upstreamCompensated !== undefined) {
      obj.upstreamCompensated = Upstream.toJSON(message.upstreamCompensated);
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.voltagePhaseUab !== undefined && message.voltagePhaseUab !== 0) {
      obj.voltagePhaseUab = message.voltagePhaseUab;
    }
    if (message.voltagePhaseUabQuality !== undefined && message.voltagePhaseUabQuality !== "") {
      obj.voltagePhaseUabQuality = message.voltagePhaseUabQuality;
    }
    if (message.voltagePhaseUbc !== undefined && message.voltagePhaseUbc !== 0) {
      obj.voltagePhaseUbc = message.voltagePhaseUbc;
    }
    if (message.voltagePhaseUbcQuality !== undefined && message.voltagePhaseUbcQuality !== "") {
      obj.voltagePhaseUbcQuality = message.voltagePhaseUbcQuality;
    }
    if (message.voltagePhaseUca !== undefined && message.voltagePhaseUca !== 0) {
      obj.voltagePhaseUca = message.voltagePhaseUca;
    }
    if (message.voltagePhaseUcaQuality !== undefined && message.voltagePhaseUcaQuality !== "") {
      obj.voltagePhaseUcaQuality = message.voltagePhaseUcaQuality;
    }
    if (message.id !== undefined && message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Gms>, I>>(base?: I): Gms {
    return Gms.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Gms>, I>>(object: I): Gms {
    const message = createBaseGms();
    message.name = object.name ?? "";
    message.timestamp = object.timestamp ?? undefined;
    message.gmsType = object.gmsType ?? "";
    message.status = object.status ?? "";
    message.activePower = object.activePower ?? 0;
    message.activePowerQuality = object.activePowerQuality ?? "";
    message.frequency = object.frequency ?? 0;
    message.frequencyQuality = object.frequencyQuality ?? "";
    message.voltage = object.voltage ?? 0;
    message.voltageQuality = object.voltageQuality ?? "";
    message.reactivePower = object.reactivePower ?? 0;
    message.reactivePowerQuality = object.reactivePowerQuality ?? "";
    message.physicalData = (object.physicalData !== undefined && object.physicalData !== null)
      ? Physical.fromPartial(object.physicalData)
      : undefined;
    message.redundantData = (object.redundantData !== undefined && object.redundantData !== null)
      ? Redundant.fromPartial(object.redundantData)
      : undefined;
    message.virtualData = (object.virtualData !== undefined && object.virtualData !== null)
      ? Virtual.fromPartial(object.virtualData)
      : undefined;
    message.nominalVoltage = object.nominalVoltage ?? 0;
    message.apparentPower = object.apparentPower ?? 0;
    message.apparentPowerQuality = object.apparentPowerQuality ?? "";
    message.upstreamCompensated = (object.upstreamCompensated !== undefined && object.upstreamCompensated !== null)
      ? Upstream.fromPartial(object.upstreamCompensated)
      : undefined;
    message.groupName = object.groupName ?? "";
    message.voltagePhaseUab = object.voltagePhaseUab ?? 0;
    message.voltagePhaseUabQuality = object.voltagePhaseUabQuality ?? "";
    message.voltagePhaseUbc = object.voltagePhaseUbc ?? 0;
    message.voltagePhaseUbcQuality = object.voltagePhaseUbcQuality ?? "";
    message.voltagePhaseUca = object.voltagePhaseUca ?? 0;
    message.voltagePhaseUcaQuality = object.voltagePhaseUcaQuality ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseGeneratorActivePower(): GeneratorActivePower {
  return {
    ratedPower: 0,
    isPSlaveable: false,
    overLoadLimit: 0,
    availablePower: 0,
    availablePowerInScope: 0,
    estimatedPowerCapabilityLower: 0,
    estimatedPowerCapabilityUpper: 0,
    powerChangeRateUp: 0,
    powerChangeRateDown: 0,
    ratedPowerIncluded: 0,
    availablePowerCtrl: 0,
    availablePowerCtrlInScope: 0,
    availablePowerRaw: 0,
    availablePowerRawSum: 0,
    maxCapablePower: 0,
    minCapablePower: 0,
    availablePowerBoost: 0,
    activePowerGeneratorSum: 0,
    activePowerGeneratorSumInScope: 0,
    ratedPowerOnGrid: 0,
    activePowerReference: 0,
    pInscopeCount: 0,
    stateOfCharge: 0,
    stateOfHealth: 0,
    ratedStorageCapacity: 0,
    soCMaxLimit: 0,
    soCMinLimit: 0,
  };
}

export const GeneratorActivePower = {
  fromJSON(object: any): GeneratorActivePower {
    return {
      ratedPower: isSet(object.ratedPower) ? gt.Number(object.ratedPower) : 0,
      isPSlaveable: isSet(object.isPSlaveable) ? gt.Boolean(object.isPSlaveable) : false,
      overLoadLimit: isSet(object.overLoadLimit) ? gt.Number(object.overLoadLimit) : 0,
      availablePower: isSet(object.availablePower) ? gt.Number(object.availablePower) : 0,
      availablePowerInScope: isSet(object.availablePowerInScope) ? gt.Number(object.availablePowerInScope) : 0,
      estimatedPowerCapabilityLower: isSet(object.estimatedPowerCapabilityLower)
        ? gt.Number(object.estimatedPowerCapabilityLower)
        : 0,
      estimatedPowerCapabilityUpper: isSet(object.estimatedPowerCapabilityUpper)
        ? gt.Number(object.estimatedPowerCapabilityUpper)
        : 0,
      powerChangeRateUp: isSet(object.powerChangeRateUp) ? gt.Number(object.powerChangeRateUp) : 0,
      powerChangeRateDown: isSet(object.powerChangeRateDown) ? gt.Number(object.powerChangeRateDown) : 0,
      ratedPowerIncluded: isSet(object.ratedPowerIncluded) ? gt.Number(object.ratedPowerIncluded) : 0,
      availablePowerCtrl: isSet(object.availablePowerCtrl) ? gt.Number(object.availablePowerCtrl) : 0,
      availablePowerCtrlInScope: isSet(object.availablePowerCtrlInScope)
        ? gt.Number(object.availablePowerCtrlInScope)
        : 0,
      availablePowerRaw: isSet(object.availablePowerRaw) ? gt.Number(object.availablePowerRaw) : 0,
      availablePowerRawSum: isSet(object.availablePowerRawSum) ? gt.Number(object.availablePowerRawSum) : 0,
      maxCapablePower: isSet(object.maxCapablePower) ? gt.Number(object.maxCapablePower) : 0,
      minCapablePower: isSet(object.minCapablePower) ? gt.Number(object.minCapablePower) : 0,
      availablePowerBoost: isSet(object.availablePowerBoost) ? gt.Number(object.availablePowerBoost) : 0,
      activePowerGeneratorSum: isSet(object.activePowerGeneratorSum) ? gt.Number(object.activePowerGeneratorSum) : 0,
      activePowerGeneratorSumInScope: isSet(object.activePowerGeneratorSumInScope)
        ? gt.Number(object.activePowerGeneratorSumInScope)
        : 0,
      ratedPowerOnGrid: isSet(object.ratedPowerOnGrid) ? gt.Number(object.ratedPowerOnGrid) : 0,
      activePowerReference: isSet(object.activePowerReference) ? gt.Number(object.activePowerReference) : 0,
      pInscopeCount: isSet(object.pInscopeCount) ? gt.Number(object.pInscopeCount) : 0,
      stateOfCharge: isSet(object.stateOfCharge) ? gt.Number(object.stateOfCharge) : 0,
      stateOfHealth: isSet(object.stateOfHealth) ? gt.Number(object.stateOfHealth) : 0,
      ratedStorageCapacity: isSet(object.ratedStorageCapacity) ? gt.Number(object.ratedStorageCapacity) : 0,
      soCMaxLimit: isSet(object.soCMaxLimit) ? gt.Number(object.soCMaxLimit) : 0,
      soCMinLimit: isSet(object.soCMinLimit) ? gt.Number(object.soCMinLimit) : 0,
    };
  },

  toJSON(message: GeneratorActivePower): unknown {
    const obj: any = {};
    if (message.ratedPower !== undefined && message.ratedPower !== 0) {
      obj.ratedPower = message.ratedPower;
    }
    if (message.isPSlaveable !== undefined && message.isPSlaveable !== false) {
      obj.isPSlaveable = message.isPSlaveable;
    }
    if (message.overLoadLimit !== undefined && message.overLoadLimit !== 0) {
      obj.overLoadLimit = message.overLoadLimit;
    }
    if (message.availablePower !== undefined && message.availablePower !== 0) {
      obj.availablePower = message.availablePower;
    }
    if (message.availablePowerInScope !== undefined && message.availablePowerInScope !== 0) {
      obj.availablePowerInScope = message.availablePowerInScope;
    }
    if (message.estimatedPowerCapabilityLower !== undefined && message.estimatedPowerCapabilityLower !== 0) {
      obj.estimatedPowerCapabilityLower = message.estimatedPowerCapabilityLower;
    }
    if (message.estimatedPowerCapabilityUpper !== undefined && message.estimatedPowerCapabilityUpper !== 0) {
      obj.estimatedPowerCapabilityUpper = message.estimatedPowerCapabilityUpper;
    }
    if (message.powerChangeRateUp !== undefined && message.powerChangeRateUp !== 0) {
      obj.powerChangeRateUp = message.powerChangeRateUp;
    }
    if (message.powerChangeRateDown !== undefined && message.powerChangeRateDown !== 0) {
      obj.powerChangeRateDown = message.powerChangeRateDown;
    }
    if (message.ratedPowerIncluded !== undefined && message.ratedPowerIncluded !== 0) {
      obj.ratedPowerIncluded = message.ratedPowerIncluded;
    }
    if (message.availablePowerCtrl !== undefined && message.availablePowerCtrl !== 0) {
      obj.availablePowerCtrl = message.availablePowerCtrl;
    }
    if (message.availablePowerCtrlInScope !== undefined && message.availablePowerCtrlInScope !== 0) {
      obj.availablePowerCtrlInScope = message.availablePowerCtrlInScope;
    }
    if (message.availablePowerRaw !== undefined && message.availablePowerRaw !== 0) {
      obj.availablePowerRaw = message.availablePowerRaw;
    }
    if (message.availablePowerRawSum !== undefined && message.availablePowerRawSum !== 0) {
      obj.availablePowerRawSum = message.availablePowerRawSum;
    }
    if (message.maxCapablePower !== undefined && message.maxCapablePower !== 0) {
      obj.maxCapablePower = message.maxCapablePower;
    }
    if (message.minCapablePower !== undefined && message.minCapablePower !== 0) {
      obj.minCapablePower = message.minCapablePower;
    }
    if (message.availablePowerBoost !== undefined && message.availablePowerBoost !== 0) {
      obj.availablePowerBoost = message.availablePowerBoost;
    }
    if (message.activePowerGeneratorSum !== undefined && message.activePowerGeneratorSum !== 0) {
      obj.activePowerGeneratorSum = message.activePowerGeneratorSum;
    }
    if (message.activePowerGeneratorSumInScope !== undefined && message.activePowerGeneratorSumInScope !== 0) {
      obj.activePowerGeneratorSumInScope = message.activePowerGeneratorSumInScope;
    }
    if (message.ratedPowerOnGrid !== undefined && message.ratedPowerOnGrid !== 0) {
      obj.ratedPowerOnGrid = message.ratedPowerOnGrid;
    }
    if (message.activePowerReference !== undefined && message.activePowerReference !== 0) {
      obj.activePowerReference = message.activePowerReference;
    }
    if (message.pInscopeCount !== undefined && message.pInscopeCount !== 0) {
      obj.pInscopeCount = Math.round(message.pInscopeCount);
    }
    if (message.stateOfCharge !== undefined && message.stateOfCharge !== 0) {
      obj.stateOfCharge = message.stateOfCharge;
    }
    if (message.stateOfHealth !== undefined && message.stateOfHealth !== 0) {
      obj.stateOfHealth = message.stateOfHealth;
    }
    if (message.ratedStorageCapacity !== undefined && message.ratedStorageCapacity !== 0) {
      obj.ratedStorageCapacity = message.ratedStorageCapacity;
    }
    if (message.soCMaxLimit !== undefined && message.soCMaxLimit !== 0) {
      obj.soCMaxLimit = message.soCMaxLimit;
    }
    if (message.soCMinLimit !== undefined && message.soCMinLimit !== 0) {
      obj.soCMinLimit = message.soCMinLimit;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneratorActivePower>, I>>(base?: I): GeneratorActivePower {
    return GeneratorActivePower.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneratorActivePower>, I>>(object: I): GeneratorActivePower {
    const message = createBaseGeneratorActivePower();
    message.ratedPower = object.ratedPower ?? 0;
    message.isPSlaveable = object.isPSlaveable ?? false;
    message.overLoadLimit = object.overLoadLimit ?? 0;
    message.availablePower = object.availablePower ?? 0;
    message.availablePowerInScope = object.availablePowerInScope ?? 0;
    message.estimatedPowerCapabilityLower = object.estimatedPowerCapabilityLower ?? 0;
    message.estimatedPowerCapabilityUpper = object.estimatedPowerCapabilityUpper ?? 0;
    message.powerChangeRateUp = object.powerChangeRateUp ?? 0;
    message.powerChangeRateDown = object.powerChangeRateDown ?? 0;
    message.ratedPowerIncluded = object.ratedPowerIncluded ?? 0;
    message.availablePowerCtrl = object.availablePowerCtrl ?? 0;
    message.availablePowerCtrlInScope = object.availablePowerCtrlInScope ?? 0;
    message.availablePowerRaw = object.availablePowerRaw ?? 0;
    message.availablePowerRawSum = object.availablePowerRawSum ?? 0;
    message.maxCapablePower = object.maxCapablePower ?? 0;
    message.minCapablePower = object.minCapablePower ?? 0;
    message.availablePowerBoost = object.availablePowerBoost ?? 0;
    message.activePowerGeneratorSum = object.activePowerGeneratorSum ?? 0;
    message.activePowerGeneratorSumInScope = object.activePowerGeneratorSumInScope ?? 0;
    message.ratedPowerOnGrid = object.ratedPowerOnGrid ?? 0;
    message.activePowerReference = object.activePowerReference ?? 0;
    message.pInscopeCount = object.pInscopeCount ?? 0;
    message.stateOfCharge = object.stateOfCharge ?? 0;
    message.stateOfHealth = object.stateOfHealth ?? 0;
    message.ratedStorageCapacity = object.ratedStorageCapacity ?? 0;
    message.soCMaxLimit = object.soCMaxLimit ?? 0;
    message.soCMinLimit = object.soCMinLimit ?? 0;
    return message;
  },
};

function createBaseGeneratorDefault(): GeneratorDefault {
  return { name: "", associatedGenerators: "", parameters: [] };
}

export const GeneratorDefault = {
  fromJSON(object: any): GeneratorDefault {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      associatedGenerators: isSet(object.associatedGenerators) ? gt.String(object.associatedGenerators) : "",
      parameters: gt.Array.isArray(object?.parameters)
        ? object.parameters.map((e: any) => GeneratorDefaultParameter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GeneratorDefault): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.associatedGenerators !== undefined && message.associatedGenerators !== "") {
      obj.associatedGenerators = message.associatedGenerators;
    }
    if (message.parameters?.length) {
      obj.parameters = message.parameters.map((e) => GeneratorDefaultParameter.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneratorDefault>, I>>(base?: I): GeneratorDefault {
    return GeneratorDefault.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneratorDefault>, I>>(object: I): GeneratorDefault {
    const message = createBaseGeneratorDefault();
    message.name = object.name ?? "";
    message.associatedGenerators = object.associatedGenerators ?? "";
    message.parameters = object.parameters?.map((e) => GeneratorDefaultParameter.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGeneratorDefaultMetadata(): GeneratorDefaultMetadata {
  return { name: "", description: "", displayAccuracy: 0, unit: "", datatype: DataTypes.DataTypeInteger };
}

export const GeneratorDefaultMetadata = {
  fromJSON(object: any): GeneratorDefaultMetadata {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      description: isSet(object.description) ? gt.String(object.description) : "",
      displayAccuracy: isSet(object.displayAccuracy) ? gt.Number(object.displayAccuracy) : 0,
      unit: isSet(object.unit) ? gt.String(object.unit) : "",
      datatype: isSet(object.datatype) ? dataTypesFromJSON(object.datatype) : DataTypes.DataTypeInteger,
    };
  },

  toJSON(message: GeneratorDefaultMetadata): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.displayAccuracy !== 0) {
      obj.displayAccuracy = message.displayAccuracy;
    }
    if (message.unit !== "") {
      obj.unit = message.unit;
    }
    if (message.datatype !== DataTypes.DataTypeInteger) {
      obj.datatype = dataTypesToJSON(message.datatype);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneratorDefaultMetadata>, I>>(base?: I): GeneratorDefaultMetadata {
    return GeneratorDefaultMetadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneratorDefaultMetadata>, I>>(object: I): GeneratorDefaultMetadata {
    const message = createBaseGeneratorDefaultMetadata();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.displayAccuracy = object.displayAccuracy ?? 0;
    message.unit = object.unit ?? "";
    message.datatype = object.datatype ?? DataTypes.DataTypeInteger;
    return message;
  },
};

function createBaseGeneratorDefaultParameter(): GeneratorDefaultParameter {
  return { value: 0, function: "", name: "" };
}

export const GeneratorDefaultParameter = {
  fromJSON(object: any): GeneratorDefaultParameter {
    return {
      value: isSet(object.value) ? gt.Number(object.value) : 0,
      function: isSet(object.function) ? gt.String(object.function) : "",
      name: isSet(object.name) ? gt.String(object.name) : "",
    };
  },

  toJSON(message: GeneratorDefaultParameter): unknown {
    const obj: any = {};
    if (message.value !== undefined && message.value !== 0) {
      obj.value = message.value;
    }
    if (message.function !== undefined && message.function !== "") {
      obj.function = message.function;
    }
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneratorDefaultParameter>, I>>(base?: I): GeneratorDefaultParameter {
    return GeneratorDefaultParameter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneratorDefaultParameter>, I>>(object: I): GeneratorDefaultParameter {
    const message = createBaseGeneratorDefaultParameter();
    message.value = object.value ?? 0;
    message.function = object.function ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseGeneratorGroup(): GeneratorGroup {
  return { generators: [], group: "" };
}

export const GeneratorGroup = {
  fromJSON(object: any): GeneratorGroup {
    return {
      generators: gt.Array.isArray(object?.generators)
        ? object.generators.map((e: any) => KeyValuePair.fromJSON(e))
        : [],
      group: isSet(object.group) ? gt.String(object.group) : "",
    };
  },

  toJSON(message: GeneratorGroup): unknown {
    const obj: any = {};
    if (message.generators?.length) {
      obj.generators = message.generators.map((e) => KeyValuePair.toJSON(e));
    }
    if (message.group !== undefined && message.group !== "") {
      obj.group = message.group;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneratorGroup>, I>>(base?: I): GeneratorGroup {
    return GeneratorGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneratorGroup>, I>>(object: I): GeneratorGroup {
    const message = createBaseGeneratorGroup();
    message.generators = object.generators?.map((e) => KeyValuePair.fromPartial(e)) || [];
    message.group = object.group ?? "";
    return message;
  },
};

function createBaseGeneratorGroupModel(): GeneratorGroupModel {
  return { localGroups: [], topology: 0 };
}

export const GeneratorGroupModel = {
  fromJSON(object: any): GeneratorGroupModel {
    return {
      localGroups: gt.Array.isArray(object?.localGroups)
        ? object.localGroups.map((e: any) => GeneratorGroupModel_GeneratorGroup.fromJSON(e))
        : [],
      topology: isSet(object.topology) ? gt.Number(object.topology) : 0,
    };
  },

  toJSON(message: GeneratorGroupModel): unknown {
    const obj: any = {};
    if (message.localGroups?.length) {
      obj.localGroups = message.localGroups.map((e) => GeneratorGroupModel_GeneratorGroup.toJSON(e));
    }
    if (message.topology !== undefined && message.topology !== 0) {
      obj.topology = Math.round(message.topology);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneratorGroupModel>, I>>(base?: I): GeneratorGroupModel {
    return GeneratorGroupModel.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneratorGroupModel>, I>>(object: I): GeneratorGroupModel {
    const message = createBaseGeneratorGroupModel();
    message.localGroups = object.localGroups?.map((e) => GeneratorGroupModel_GeneratorGroup.fromPartial(e)) || [];
    message.topology = object.topology ?? 0;
    return message;
  },
};

function createBaseGeneratorGroupModel_GeneratorGroup(): GeneratorGroupModel_GeneratorGroup {
  return {
    limitation: undefined,
    generatorGroups: [],
    turbines: [],
    genericGenerators: [],
    parkPilotGenerators: [],
    name: "",
  };
}

export const GeneratorGroupModel_GeneratorGroup = {
  fromJSON(object: any): GeneratorGroupModel_GeneratorGroup {
    return {
      limitation: isSet(object.limitation)
        ? GeneratorGroupModel_GeneratorGroup_Limitation.fromJSON(object.limitation)
        : undefined,
      generatorGroups: gt.Array.isArray(object?.generatorGroups)
        ? object.generatorGroups.map((e: any) => GeneratorGroupModel_GeneratorGroup.fromJSON(e))
        : [],
      turbines: gt.Array.isArray(object?.turbines) ? object.turbines.map((e: any) => gt.String(e)) : [],
      genericGenerators: gt.Array.isArray(object?.genericGenerators)
        ? object.genericGenerators.map((e: any) => GeneratorGroupModel_GeneratorGroup_GenericGenerator.fromJSON(e))
        : [],
      parkPilotGenerators: gt.Array.isArray(object?.parkPilotGenerators)
        ? object.parkPilotGenerators.map((e: any) => gt.String(e))
        : [],
      name: isSet(object.name) ? gt.String(object.name) : "",
    };
  },

  toJSON(message: GeneratorGroupModel_GeneratorGroup): unknown {
    const obj: any = {};
    if (message.limitation !== undefined) {
      obj.limitation = GeneratorGroupModel_GeneratorGroup_Limitation.toJSON(message.limitation);
    }
    if (message.generatorGroups?.length) {
      obj.generatorGroups = message.generatorGroups.map((e) => GeneratorGroupModel_GeneratorGroup.toJSON(e));
    }
    if (message.turbines?.length) {
      obj.turbines = message.turbines;
    }
    if (message.genericGenerators?.length) {
      obj.genericGenerators = message.genericGenerators.map((e) =>
        GeneratorGroupModel_GeneratorGroup_GenericGenerator.toJSON(e)
      );
    }
    if (message.parkPilotGenerators?.length) {
      obj.parkPilotGenerators = message.parkPilotGenerators;
    }
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneratorGroupModel_GeneratorGroup>, I>>(
    base?: I,
  ): GeneratorGroupModel_GeneratorGroup {
    return GeneratorGroupModel_GeneratorGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneratorGroupModel_GeneratorGroup>, I>>(
    object: I,
  ): GeneratorGroupModel_GeneratorGroup {
    const message = createBaseGeneratorGroupModel_GeneratorGroup();
    message.limitation = (object.limitation !== undefined && object.limitation !== null)
      ? GeneratorGroupModel_GeneratorGroup_Limitation.fromPartial(object.limitation)
      : undefined;
    message.generatorGroups = object.generatorGroups?.map((e) => GeneratorGroupModel_GeneratorGroup.fromPartial(e)) ||
      [];
    message.turbines = object.turbines?.map((e) => e) || [];
    message.genericGenerators =
      object.genericGenerators?.map((e) => GeneratorGroupModel_GeneratorGroup_GenericGenerator.fromPartial(e)) || [];
    message.parkPilotGenerators = object.parkPilotGenerators?.map((e) => e) || [];
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseGeneratorGroupModel_GeneratorGroup_Limitation(): GeneratorGroupModel_GeneratorGroup_Limitation {
  return { customParameterRef: "", value: 0 };
}

export const GeneratorGroupModel_GeneratorGroup_Limitation = {
  fromJSON(object: any): GeneratorGroupModel_GeneratorGroup_Limitation {
    return {
      customParameterRef: isSet(object.customParameterRef) ? gt.String(object.customParameterRef) : "",
      value: isSet(object.value) ? gt.Number(object.value) : 0,
    };
  },

  toJSON(message: GeneratorGroupModel_GeneratorGroup_Limitation): unknown {
    const obj: any = {};
    if (message.customParameterRef !== undefined && message.customParameterRef !== "") {
      obj.customParameterRef = message.customParameterRef;
    }
    if (message.value !== undefined && message.value !== 0) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneratorGroupModel_GeneratorGroup_Limitation>, I>>(
    base?: I,
  ): GeneratorGroupModel_GeneratorGroup_Limitation {
    return GeneratorGroupModel_GeneratorGroup_Limitation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneratorGroupModel_GeneratorGroup_Limitation>, I>>(
    object: I,
  ): GeneratorGroupModel_GeneratorGroup_Limitation {
    const message = createBaseGeneratorGroupModel_GeneratorGroup_Limitation();
    message.customParameterRef = object.customParameterRef ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseGeneratorGroupModel_GeneratorGroup_GenericGenerator(): GeneratorGroupModel_GeneratorGroup_GenericGenerator {
  return {
    name: "",
    type: GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType.Generator,
    parent: "",
  };
}

export const GeneratorGroupModel_GeneratorGroup_GenericGenerator = {
  fromJSON(object: any): GeneratorGroupModel_GeneratorGroup_GenericGenerator {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      type: isSet(object.type)
        ? generatorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorTypeFromJSON(object.type)
        : GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType.Generator,
      parent: isSet(object.parent) ? gt.String(object.parent) : "",
    };
  },

  toJSON(message: GeneratorGroupModel_GeneratorGroup_GenericGenerator): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (
      message.type !== undefined &&
      message.type !== GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType.Generator
    ) {
      obj.type = generatorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorTypeToJSON(message.type);
    }
    if (message.parent !== undefined && message.parent !== "") {
      obj.parent = message.parent;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneratorGroupModel_GeneratorGroup_GenericGenerator>, I>>(
    base?: I,
  ): GeneratorGroupModel_GeneratorGroup_GenericGenerator {
    return GeneratorGroupModel_GeneratorGroup_GenericGenerator.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneratorGroupModel_GeneratorGroup_GenericGenerator>, I>>(
    object: I,
  ): GeneratorGroupModel_GeneratorGroup_GenericGenerator {
    const message = createBaseGeneratorGroupModel_GeneratorGroup_GenericGenerator();
    message.name = object.name ?? "";
    message.type = object.type ?? GeneratorGroupModel_GeneratorGroup_GenericGenerator_GenericGeneratorType.Generator;
    message.parent = object.parent ?? "";
    return message;
  },
};

function createBaseGeneratorGridMeasurement(): GeneratorGridMeasurement {
  return {
    gmsStatus: 0,
    activePower: 0,
    reactivePower: 0,
    nominalVoltage: 0,
    frequency: 0,
    normalisedVoltage: 0,
    activePowerQuality: 0,
    reactivePowerQuality: 0,
    voltageQuality: 0,
    frequencyQuality: 0,
  };
}

export const GeneratorGridMeasurement = {
  fromJSON(object: any): GeneratorGridMeasurement {
    return {
      gmsStatus: isSet(object.gmsStatus) ? gt.Number(object.gmsStatus) : 0,
      activePower: isSet(object.activePower) ? gt.Number(object.activePower) : 0,
      reactivePower: isSet(object.reactivePower) ? gt.Number(object.reactivePower) : 0,
      nominalVoltage: isSet(object.nominalVoltage) ? gt.Number(object.nominalVoltage) : 0,
      frequency: isSet(object.frequency) ? gt.Number(object.frequency) : 0,
      normalisedVoltage: isSet(object.normalisedVoltage) ? gt.Number(object.normalisedVoltage) : 0,
      activePowerQuality: isSet(object.activePowerQuality) ? gt.Number(object.activePowerQuality) : 0,
      reactivePowerQuality: isSet(object.reactivePowerQuality) ? gt.Number(object.reactivePowerQuality) : 0,
      voltageQuality: isSet(object.voltageQuality) ? gt.Number(object.voltageQuality) : 0,
      frequencyQuality: isSet(object.frequencyQuality) ? gt.Number(object.frequencyQuality) : 0,
    };
  },

  toJSON(message: GeneratorGridMeasurement): unknown {
    const obj: any = {};
    if (message.gmsStatus !== undefined && message.gmsStatus !== 0) {
      obj.gmsStatus = Math.round(message.gmsStatus);
    }
    if (message.activePower !== undefined && message.activePower !== 0) {
      obj.activePower = message.activePower;
    }
    if (message.reactivePower !== undefined && message.reactivePower !== 0) {
      obj.reactivePower = message.reactivePower;
    }
    if (message.nominalVoltage !== undefined && message.nominalVoltage !== 0) {
      obj.nominalVoltage = message.nominalVoltage;
    }
    if (message.frequency !== undefined && message.frequency !== 0) {
      obj.frequency = message.frequency;
    }
    if (message.normalisedVoltage !== undefined && message.normalisedVoltage !== 0) {
      obj.normalisedVoltage = message.normalisedVoltage;
    }
    if (message.activePowerQuality !== undefined && message.activePowerQuality !== 0) {
      obj.activePowerQuality = Math.round(message.activePowerQuality);
    }
    if (message.reactivePowerQuality !== undefined && message.reactivePowerQuality !== 0) {
      obj.reactivePowerQuality = Math.round(message.reactivePowerQuality);
    }
    if (message.voltageQuality !== undefined && message.voltageQuality !== 0) {
      obj.voltageQuality = Math.round(message.voltageQuality);
    }
    if (message.frequencyQuality !== undefined && message.frequencyQuality !== 0) {
      obj.frequencyQuality = Math.round(message.frequencyQuality);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneratorGridMeasurement>, I>>(base?: I): GeneratorGridMeasurement {
    return GeneratorGridMeasurement.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneratorGridMeasurement>, I>>(object: I): GeneratorGridMeasurement {
    const message = createBaseGeneratorGridMeasurement();
    message.gmsStatus = object.gmsStatus ?? 0;
    message.activePower = object.activePower ?? 0;
    message.reactivePower = object.reactivePower ?? 0;
    message.nominalVoltage = object.nominalVoltage ?? 0;
    message.frequency = object.frequency ?? 0;
    message.normalisedVoltage = object.normalisedVoltage ?? 0;
    message.activePowerQuality = object.activePowerQuality ?? 0;
    message.reactivePowerQuality = object.reactivePowerQuality ?? 0;
    message.voltageQuality = object.voltageQuality ?? 0;
    message.frequencyQuality = object.frequencyQuality ?? 0;
    return message;
  },
};

function createBaseGeneratorReactivePower(): GeneratorReactivePower {
  return {
    qMinMax: 0,
    qMin: 0,
    qMax: 0,
    isQReactiveSlaveable: false,
    isQPowerFactorSlaveable: false,
    isUSlaveable: false,
    isFRTSupportedCount: 0,
    isVoltageFRTActiveCount: 0,
    voltageReference: 0,
    qUInscopeCount: 0,
    powerBalancingOutput: 0,
    pConnectLimit: 0,
    pDisconnectLimit: 0,
    qConnectLimit: 0,
    qDisconnectLimit: 0,
    connectDelay: 0,
    disconnectDelay: 0,
    minimumConnectedPeriod: 0,
    minimumDisconnectedPeriod: 0,
    numberOfOperations: 0,
    discreteDeviceStatus: 0,
    keepAlive: 0,
    anomaly: false,
    closeLockState: false,
    openLockState: false,
    secondaryContributorState: 0,
  };
}

export const GeneratorReactivePower = {
  fromJSON(object: any): GeneratorReactivePower {
    return {
      qMinMax: isSet(object.qMinMax) ? gt.Number(object.qMinMax) : 0,
      qMin: isSet(object.qMin) ? gt.Number(object.qMin) : 0,
      qMax: isSet(object.qMax) ? gt.Number(object.qMax) : 0,
      isQReactiveSlaveable: isSet(object.isQReactiveSlaveable) ? gt.Boolean(object.isQReactiveSlaveable) : false,
      isQPowerFactorSlaveable: isSet(object.isQPowerFactorSlaveable)
        ? gt.Boolean(object.isQPowerFactorSlaveable)
        : false,
      isUSlaveable: isSet(object.isUSlaveable) ? gt.Boolean(object.isUSlaveable) : false,
      isFRTSupportedCount: isSet(object.isFRTSupportedCount) ? gt.Number(object.isFRTSupportedCount) : 0,
      isVoltageFRTActiveCount: isSet(object.isVoltageFRTActiveCount) ? gt.Number(object.isVoltageFRTActiveCount) : 0,
      voltageReference: isSet(object.voltageReference) ? gt.Number(object.voltageReference) : 0,
      qUInscopeCount: isSet(object.qUInscopeCount) ? gt.Number(object.qUInscopeCount) : 0,
      powerBalancingOutput: isSet(object.powerBalancingOutput) ? gt.Number(object.powerBalancingOutput) : 0,
      pConnectLimit: isSet(object.pConnectLimit) ? gt.Number(object.pConnectLimit) : 0,
      pDisconnectLimit: isSet(object.pDisconnectLimit) ? gt.Number(object.pDisconnectLimit) : 0,
      qConnectLimit: isSet(object.qConnectLimit) ? gt.Number(object.qConnectLimit) : 0,
      qDisconnectLimit: isSet(object.qDisconnectLimit) ? gt.Number(object.qDisconnectLimit) : 0,
      connectDelay: isSet(object.connectDelay) ? gt.Number(object.connectDelay) : 0,
      disconnectDelay: isSet(object.disconnectDelay) ? gt.Number(object.disconnectDelay) : 0,
      minimumConnectedPeriod: isSet(object.minimumConnectedPeriod) ? gt.Number(object.minimumConnectedPeriod) : 0,
      minimumDisconnectedPeriod: isSet(object.minimumDisconnectedPeriod)
        ? gt.Number(object.minimumDisconnectedPeriod)
        : 0,
      numberOfOperations: isSet(object.numberOfOperations) ? gt.Number(object.numberOfOperations) : 0,
      discreteDeviceStatus: isSet(object.discreteDeviceStatus) ? gt.Number(object.discreteDeviceStatus) : 0,
      keepAlive: isSet(object.keepAlive) ? gt.Number(object.keepAlive) : 0,
      anomaly: isSet(object.anomaly) ? gt.Boolean(object.anomaly) : false,
      closeLockState: isSet(object.closeLockState) ? gt.Boolean(object.closeLockState) : false,
      openLockState: isSet(object.openLockState) ? gt.Boolean(object.openLockState) : false,
      secondaryContributorState: isSet(object.secondaryContributorState)
        ? gt.Number(object.secondaryContributorState)
        : 0,
    };
  },

  toJSON(message: GeneratorReactivePower): unknown {
    const obj: any = {};
    if (message.qMinMax !== undefined && message.qMinMax !== 0) {
      obj.qMinMax = message.qMinMax;
    }
    if (message.qMin !== undefined && message.qMin !== 0) {
      obj.qMin = message.qMin;
    }
    if (message.qMax !== undefined && message.qMax !== 0) {
      obj.qMax = message.qMax;
    }
    if (message.isQReactiveSlaveable !== undefined && message.isQReactiveSlaveable !== false) {
      obj.isQReactiveSlaveable = message.isQReactiveSlaveable;
    }
    if (message.isQPowerFactorSlaveable !== undefined && message.isQPowerFactorSlaveable !== false) {
      obj.isQPowerFactorSlaveable = message.isQPowerFactorSlaveable;
    }
    if (message.isUSlaveable !== undefined && message.isUSlaveable !== false) {
      obj.isUSlaveable = message.isUSlaveable;
    }
    if (message.isFRTSupportedCount !== undefined && message.isFRTSupportedCount !== 0) {
      obj.isFRTSupportedCount = Math.round(message.isFRTSupportedCount);
    }
    if (message.isVoltageFRTActiveCount !== undefined && message.isVoltageFRTActiveCount !== 0) {
      obj.isVoltageFRTActiveCount = Math.round(message.isVoltageFRTActiveCount);
    }
    if (message.voltageReference !== undefined && message.voltageReference !== 0) {
      obj.voltageReference = message.voltageReference;
    }
    if (message.qUInscopeCount !== undefined && message.qUInscopeCount !== 0) {
      obj.qUInscopeCount = Math.round(message.qUInscopeCount);
    }
    if (message.powerBalancingOutput !== undefined && message.powerBalancingOutput !== 0) {
      obj.powerBalancingOutput = message.powerBalancingOutput;
    }
    if (message.pConnectLimit !== undefined && message.pConnectLimit !== 0) {
      obj.pConnectLimit = message.pConnectLimit;
    }
    if (message.pDisconnectLimit !== undefined && message.pDisconnectLimit !== 0) {
      obj.pDisconnectLimit = message.pDisconnectLimit;
    }
    if (message.qConnectLimit !== undefined && message.qConnectLimit !== 0) {
      obj.qConnectLimit = message.qConnectLimit;
    }
    if (message.qDisconnectLimit !== undefined && message.qDisconnectLimit !== 0) {
      obj.qDisconnectLimit = message.qDisconnectLimit;
    }
    if (message.connectDelay !== undefined && message.connectDelay !== 0) {
      obj.connectDelay = message.connectDelay;
    }
    if (message.disconnectDelay !== undefined && message.disconnectDelay !== 0) {
      obj.disconnectDelay = message.disconnectDelay;
    }
    if (message.minimumConnectedPeriod !== undefined && message.minimumConnectedPeriod !== 0) {
      obj.minimumConnectedPeriod = message.minimumConnectedPeriod;
    }
    if (message.minimumDisconnectedPeriod !== undefined && message.minimumDisconnectedPeriod !== 0) {
      obj.minimumDisconnectedPeriod = message.minimumDisconnectedPeriod;
    }
    if (message.numberOfOperations !== undefined && message.numberOfOperations !== 0) {
      obj.numberOfOperations = Math.round(message.numberOfOperations);
    }
    if (message.discreteDeviceStatus !== undefined && message.discreteDeviceStatus !== 0) {
      obj.discreteDeviceStatus = Math.round(message.discreteDeviceStatus);
    }
    if (message.keepAlive !== undefined && message.keepAlive !== 0) {
      obj.keepAlive = Math.round(message.keepAlive);
    }
    if (message.anomaly !== undefined && message.anomaly !== false) {
      obj.anomaly = message.anomaly;
    }
    if (message.closeLockState !== undefined && message.closeLockState !== false) {
      obj.closeLockState = message.closeLockState;
    }
    if (message.openLockState !== undefined && message.openLockState !== false) {
      obj.openLockState = message.openLockState;
    }
    if (message.secondaryContributorState !== undefined && message.secondaryContributorState !== 0) {
      obj.secondaryContributorState = Math.round(message.secondaryContributorState);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneratorReactivePower>, I>>(base?: I): GeneratorReactivePower {
    return GeneratorReactivePower.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneratorReactivePower>, I>>(object: I): GeneratorReactivePower {
    const message = createBaseGeneratorReactivePower();
    message.qMinMax = object.qMinMax ?? 0;
    message.qMin = object.qMin ?? 0;
    message.qMax = object.qMax ?? 0;
    message.isQReactiveSlaveable = object.isQReactiveSlaveable ?? false;
    message.isQPowerFactorSlaveable = object.isQPowerFactorSlaveable ?? false;
    message.isUSlaveable = object.isUSlaveable ?? false;
    message.isFRTSupportedCount = object.isFRTSupportedCount ?? 0;
    message.isVoltageFRTActiveCount = object.isVoltageFRTActiveCount ?? 0;
    message.voltageReference = object.voltageReference ?? 0;
    message.qUInscopeCount = object.qUInscopeCount ?? 0;
    message.powerBalancingOutput = object.powerBalancingOutput ?? 0;
    message.pConnectLimit = object.pConnectLimit ?? 0;
    message.pDisconnectLimit = object.pDisconnectLimit ?? 0;
    message.qConnectLimit = object.qConnectLimit ?? 0;
    message.qDisconnectLimit = object.qDisconnectLimit ?? 0;
    message.connectDelay = object.connectDelay ?? 0;
    message.disconnectDelay = object.disconnectDelay ?? 0;
    message.minimumConnectedPeriod = object.minimumConnectedPeriod ?? 0;
    message.minimumDisconnectedPeriod = object.minimumDisconnectedPeriod ?? 0;
    message.numberOfOperations = object.numberOfOperations ?? 0;
    message.discreteDeviceStatus = object.discreteDeviceStatus ?? 0;
    message.keepAlive = object.keepAlive ?? 0;
    message.anomaly = object.anomaly ?? false;
    message.closeLockState = object.closeLockState ?? false;
    message.openLockState = object.openLockState ?? false;
    message.secondaryContributorState = object.secondaryContributorState ?? 0;
    return message;
  },
};

function createBaseGeneratorReply(): GeneratorReply {
  return {
    name: "",
    fieldSelection: "",
    sourceTimeStamp: undefined,
    readDataRTT: 0,
    generatorType: "",
    groupName: "",
    commStatusOk: false,
    activePower: undefined,
    reactivePower: undefined,
    gridMeasurement: undefined,
  };
}

export const GeneratorReply = {
  fromJSON(object: any): GeneratorReply {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      fieldSelection: isSet(object.fieldSelection) ? gt.String(object.fieldSelection) : "",
      sourceTimeStamp: isSet(object.sourceTimeStamp) ? fromJsonTimestamp(object.sourceTimeStamp) : undefined,
      readDataRTT: isSet(object.readDataRTT) ? gt.Number(object.readDataRTT) : 0,
      generatorType: isSet(object.generatorType) ? gt.String(object.generatorType) : "",
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      commStatusOk: isSet(object.commStatusOk) ? gt.Boolean(object.commStatusOk) : false,
      activePower: isSet(object.activePower) ? GeneratorActivePower.fromJSON(object.activePower) : undefined,
      reactivePower: isSet(object.reactivePower) ? GeneratorReactivePower.fromJSON(object.reactivePower) : undefined,
      gridMeasurement: isSet(object.gridMeasurement)
        ? GeneratorGridMeasurement.fromJSON(object.gridMeasurement)
        : undefined,
    };
  },

  toJSON(message: GeneratorReply): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.fieldSelection !== undefined && message.fieldSelection !== "") {
      obj.fieldSelection = message.fieldSelection;
    }
    if (message.sourceTimeStamp !== undefined) {
      obj.sourceTimeStamp = message.sourceTimeStamp.toISOString();
    }
    if (message.readDataRTT !== undefined && message.readDataRTT !== 0) {
      obj.readDataRTT = Math.round(message.readDataRTT);
    }
    if (message.generatorType !== undefined && message.generatorType !== "") {
      obj.generatorType = message.generatorType;
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.commStatusOk !== undefined && message.commStatusOk !== false) {
      obj.commStatusOk = message.commStatusOk;
    }
    if (message.activePower !== undefined) {
      obj.activePower = GeneratorActivePower.toJSON(message.activePower);
    }
    if (message.reactivePower !== undefined) {
      obj.reactivePower = GeneratorReactivePower.toJSON(message.reactivePower);
    }
    if (message.gridMeasurement !== undefined) {
      obj.gridMeasurement = GeneratorGridMeasurement.toJSON(message.gridMeasurement);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneratorReply>, I>>(base?: I): GeneratorReply {
    return GeneratorReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneratorReply>, I>>(object: I): GeneratorReply {
    const message = createBaseGeneratorReply();
    message.name = object.name ?? "";
    message.fieldSelection = object.fieldSelection ?? "";
    message.sourceTimeStamp = object.sourceTimeStamp ?? undefined;
    message.readDataRTT = object.readDataRTT ?? 0;
    message.generatorType = object.generatorType ?? "";
    message.groupName = object.groupName ?? "";
    message.commStatusOk = object.commStatusOk ?? false;
    message.activePower = (object.activePower !== undefined && object.activePower !== null)
      ? GeneratorActivePower.fromPartial(object.activePower)
      : undefined;
    message.reactivePower = (object.reactivePower !== undefined && object.reactivePower !== null)
      ? GeneratorReactivePower.fromPartial(object.reactivePower)
      : undefined;
    message.gridMeasurement = (object.gridMeasurement !== undefined && object.gridMeasurement !== null)
      ? GeneratorGridMeasurement.fromPartial(object.gridMeasurement)
      : undefined;
    return message;
  },
};

function createBaseGeneratorSetup(): GeneratorSetup {
  return {
    name: "",
    pCtrlEnabled: false,
    uCtrlEnabled: false,
    manPowerRef: 0,
    manVoltageRef: 0,
    islandModeOperationMode: 0,
    curtailmentPriority: 0,
    dmolPercentage: 0,
    reactivePowerBalancingWeight: 0,
    reactivePowerBalancingOffset: 0,
    maxPowerReferencePct: 0,
    groupName: "",
    reactivePriority: 0,
    generatorType: GeneratorSetup_GeneratorType_Values.Generator,
    reactiveContributorMode: GeneratorSetup_ReactiveContributorMode_Values.Primary,
  };
}

export const GeneratorSetup = {
  fromJSON(object: any): GeneratorSetup {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      pCtrlEnabled: isSet(object.pCtrlEnabled) ? gt.Boolean(object.pCtrlEnabled) : false,
      uCtrlEnabled: isSet(object.uCtrlEnabled) ? gt.Boolean(object.uCtrlEnabled) : false,
      manPowerRef: isSet(object.manPowerRef) ? gt.Number(object.manPowerRef) : 0,
      manVoltageRef: isSet(object.manVoltageRef) ? gt.Number(object.manVoltageRef) : 0,
      islandModeOperationMode: isSet(object.islandModeOperationMode) ? gt.Number(object.islandModeOperationMode) : 0,
      curtailmentPriority: isSet(object.curtailmentPriority) ? gt.Number(object.curtailmentPriority) : 0,
      dmolPercentage: isSet(object.dmolPercentage) ? gt.Number(object.dmolPercentage) : 0,
      reactivePowerBalancingWeight: isSet(object.reactivePowerBalancingWeight)
        ? gt.Number(object.reactivePowerBalancingWeight)
        : 0,
      reactivePowerBalancingOffset: isSet(object.reactivePowerBalancingOffset)
        ? gt.Number(object.reactivePowerBalancingOffset)
        : 0,
      maxPowerReferencePct: isSet(object.maxPowerReferencePct) ? gt.Number(object.maxPowerReferencePct) : 0,
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      reactivePriority: isSet(object.reactivePriority) ? gt.Number(object.reactivePriority) : 0,
      generatorType: isSet(object.generatorType)
        ? generatorSetup_GeneratorType_ValuesFromJSON(object.generatorType)
        : GeneratorSetup_GeneratorType_Values.Generator,
      reactiveContributorMode: isSet(object.reactiveContributorMode)
        ? generatorSetup_ReactiveContributorMode_ValuesFromJSON(object.reactiveContributorMode)
        : GeneratorSetup_ReactiveContributorMode_Values.Primary,
    };
  },

  toJSON(message: GeneratorSetup): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.pCtrlEnabled !== undefined && message.pCtrlEnabled !== false) {
      obj.pCtrlEnabled = message.pCtrlEnabled;
    }
    if (message.uCtrlEnabled !== undefined && message.uCtrlEnabled !== false) {
      obj.uCtrlEnabled = message.uCtrlEnabled;
    }
    if (message.manPowerRef !== undefined && message.manPowerRef !== 0) {
      obj.manPowerRef = message.manPowerRef;
    }
    if (message.manVoltageRef !== undefined && message.manVoltageRef !== 0) {
      obj.manVoltageRef = message.manVoltageRef;
    }
    if (message.islandModeOperationMode !== undefined && message.islandModeOperationMode !== 0) {
      obj.islandModeOperationMode = Math.round(message.islandModeOperationMode);
    }
    if (message.curtailmentPriority !== undefined && message.curtailmentPriority !== 0) {
      obj.curtailmentPriority = Math.round(message.curtailmentPriority);
    }
    if (message.dmolPercentage !== undefined && message.dmolPercentage !== 0) {
      obj.dmolPercentage = message.dmolPercentage;
    }
    if (message.reactivePowerBalancingWeight !== undefined && message.reactivePowerBalancingWeight !== 0) {
      obj.reactivePowerBalancingWeight = message.reactivePowerBalancingWeight;
    }
    if (message.reactivePowerBalancingOffset !== undefined && message.reactivePowerBalancingOffset !== 0) {
      obj.reactivePowerBalancingOffset = message.reactivePowerBalancingOffset;
    }
    if (message.maxPowerReferencePct !== undefined && message.maxPowerReferencePct !== 0) {
      obj.maxPowerReferencePct = message.maxPowerReferencePct;
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.reactivePriority !== undefined && message.reactivePriority !== 0) {
      obj.reactivePriority = Math.round(message.reactivePriority);
    }
    if (
      message.generatorType !== undefined && message.generatorType !== GeneratorSetup_GeneratorType_Values.Generator
    ) {
      obj.generatorType = generatorSetup_GeneratorType_ValuesToJSON(message.generatorType);
    }
    if (
      message.reactiveContributorMode !== undefined &&
      message.reactiveContributorMode !== GeneratorSetup_ReactiveContributorMode_Values.Primary
    ) {
      obj.reactiveContributorMode = generatorSetup_ReactiveContributorMode_ValuesToJSON(
        message.reactiveContributorMode,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneratorSetup>, I>>(base?: I): GeneratorSetup {
    return GeneratorSetup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneratorSetup>, I>>(object: I): GeneratorSetup {
    const message = createBaseGeneratorSetup();
    message.name = object.name ?? "";
    message.pCtrlEnabled = object.pCtrlEnabled ?? false;
    message.uCtrlEnabled = object.uCtrlEnabled ?? false;
    message.manPowerRef = object.manPowerRef ?? 0;
    message.manVoltageRef = object.manVoltageRef ?? 0;
    message.islandModeOperationMode = object.islandModeOperationMode ?? 0;
    message.curtailmentPriority = object.curtailmentPriority ?? 0;
    message.dmolPercentage = object.dmolPercentage ?? 0;
    message.reactivePowerBalancingWeight = object.reactivePowerBalancingWeight ?? 0;
    message.reactivePowerBalancingOffset = object.reactivePowerBalancingOffset ?? 0;
    message.maxPowerReferencePct = object.maxPowerReferencePct ?? 0;
    message.groupName = object.groupName ?? "";
    message.reactivePriority = object.reactivePriority ?? 0;
    message.generatorType = object.generatorType ?? GeneratorSetup_GeneratorType_Values.Generator;
    message.reactiveContributorMode = object.reactiveContributorMode ??
      GeneratorSetup_ReactiveContributorMode_Values.Primary;
    return message;
  },
};

function createBaseGridProtection(): GridProtection {
  return { id: 0, parameter: "", name: "", groupName: "", points: [] };
}

export const GridProtection = {
  fromJSON(object: any): GridProtection {
    return {
      id: isSet(object.id) ? gt.Number(object.id) : 0,
      parameter: isSet(object.parameter) ? gt.String(object.parameter) : "",
      name: isSet(object.name) ? gt.String(object.name) : "",
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      points: gt.Array.isArray(object?.points) ? object.points.map((e: any) => GridProtectionPoint.fromJSON(e)) : [],
    };
  },

  toJSON(message: GridProtection): unknown {
    const obj: any = {};
    if (message.id !== undefined && message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.parameter !== undefined && message.parameter !== "") {
      obj.parameter = message.parameter;
    }
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.points?.length) {
      obj.points = message.points.map((e) => GridProtectionPoint.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GridProtection>, I>>(base?: I): GridProtection {
    return GridProtection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GridProtection>, I>>(object: I): GridProtection {
    const message = createBaseGridProtection();
    message.id = object.id ?? 0;
    message.parameter = object.parameter ?? "";
    message.name = object.name ?? "";
    message.groupName = object.groupName ?? "";
    message.points = object.points?.map((e) => GridProtectionPoint.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGridProtectionFeature(): GridProtectionFeature {
  return { gridProtectionData: [], parametersData: [] };
}

export const GridProtectionFeature = {
  fromJSON(object: any): GridProtectionFeature {
    return {
      gridProtectionData: gt.Array.isArray(object?.gridProtectionData)
        ? object.gridProtectionData.map((e: any) => GridProtection.fromJSON(e))
        : [],
      parametersData: gt.Array.isArray(object?.parametersData)
        ? object.parametersData.map((e: any) => ParameterData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GridProtectionFeature): unknown {
    const obj: any = {};
    if (message.gridProtectionData?.length) {
      obj.gridProtectionData = message.gridProtectionData.map((e) => GridProtection.toJSON(e));
    }
    if (message.parametersData?.length) {
      obj.parametersData = message.parametersData.map((e) => ParameterData.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GridProtectionFeature>, I>>(base?: I): GridProtectionFeature {
    return GridProtectionFeature.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GridProtectionFeature>, I>>(object: I): GridProtectionFeature {
    const message = createBaseGridProtectionFeature();
    message.gridProtectionData = object.gridProtectionData?.map((e) => GridProtection.fromPartial(e)) || [];
    message.parametersData = object.parametersData?.map((e) => ParameterData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGridProtectionPoint(): GridProtectionPoint {
  return { pointId: "", pctValue: 0, rampBy: 0, pctType: "" };
}

export const GridProtectionPoint = {
  fromJSON(object: any): GridProtectionPoint {
    return {
      pointId: isSet(object.pointId) ? gt.String(object.pointId) : "",
      pctValue: isSet(object.pctValue) ? gt.Number(object.pctValue) : 0,
      rampBy: isSet(object.rampBy) ? gt.Number(object.rampBy) : 0,
      pctType: isSet(object.pctType) ? gt.String(object.pctType) : "",
    };
  },

  toJSON(message: GridProtectionPoint): unknown {
    const obj: any = {};
    if (message.pointId !== undefined && message.pointId !== "") {
      obj.pointId = message.pointId;
    }
    if (message.pctValue !== undefined && message.pctValue !== 0) {
      obj.pctValue = message.pctValue;
    }
    if (message.rampBy !== undefined && message.rampBy !== 0) {
      obj.rampBy = message.rampBy;
    }
    if (message.pctType !== undefined && message.pctType !== "") {
      obj.pctType = message.pctType;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GridProtectionPoint>, I>>(base?: I): GridProtectionPoint {
    return GridProtectionPoint.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GridProtectionPoint>, I>>(object: I): GridProtectionPoint {
    const message = createBaseGridProtectionPoint();
    message.pointId = object.pointId ?? "";
    message.pctValue = object.pctValue ?? 0;
    message.rampBy = object.rampBy ?? 0;
    message.pctType = object.pctType ?? "";
    return message;
  },
};

function createBaseGroup(): Group {
  return { name: "", id: 0 };
}

export const Group = {
  fromJSON(object: any): Group {
    return { name: isSet(object.name) ? gt.String(object.name) : "", id: isSet(object.id) ? gt.Number(object.id) : 0 };
  },

  toJSON(message: Group): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Group>, I>>(base?: I): Group {
    return Group.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Group>, I>>(object: I): Group {
    const message = createBaseGroup();
    message.name = object.name ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseHaMessaurementWithRights(): HaMessaurementWithRights {
  return {
    timestamp: undefined,
    clusterStatus: HaClusterStatus.OFF,
    backupStatus: HaBackupStatus.Unknown,
    staticIp: "",
    remoteStaticIp: "",
    localRole: InitialState.PRIMARY,
    compatibleVersions: false,
    canControl: false,
    updatePossible: false,
  };
}

export const HaMessaurementWithRights = {
  fromJSON(object: any): HaMessaurementWithRights {
    return {
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      clusterStatus: isSet(object.clusterStatus) ? haClusterStatusFromJSON(object.clusterStatus) : HaClusterStatus.OFF,
      backupStatus: isSet(object.backupStatus) ? haBackupStatusFromJSON(object.backupStatus) : HaBackupStatus.Unknown,
      staticIp: isSet(object.staticIp) ? gt.String(object.staticIp) : "",
      remoteStaticIp: isSet(object.remoteStaticIp) ? gt.String(object.remoteStaticIp) : "",
      localRole: isSet(object.localRole) ? initialStateFromJSON(object.localRole) : InitialState.PRIMARY,
      compatibleVersions: isSet(object.compatibleVersions) ? gt.Boolean(object.compatibleVersions) : false,
      canControl: isSet(object.canControl) ? gt.Boolean(object.canControl) : false,
      updatePossible: isSet(object.updatePossible) ? gt.Boolean(object.updatePossible) : false,
    };
  },

  toJSON(message: HaMessaurementWithRights): unknown {
    const obj: any = {};
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    if (message.clusterStatus !== HaClusterStatus.OFF) {
      obj.clusterStatus = haClusterStatusToJSON(message.clusterStatus);
    }
    if (message.backupStatus !== undefined && message.backupStatus !== HaBackupStatus.Unknown) {
      obj.backupStatus = haBackupStatusToJSON(message.backupStatus);
    }
    if (message.staticIp !== undefined && message.staticIp !== "") {
      obj.staticIp = message.staticIp;
    }
    if (message.remoteStaticIp !== undefined && message.remoteStaticIp !== "") {
      obj.remoteStaticIp = message.remoteStaticIp;
    }
    if (message.localRole !== undefined && message.localRole !== InitialState.PRIMARY) {
      obj.localRole = initialStateToJSON(message.localRole);
    }
    if (message.compatibleVersions !== undefined && message.compatibleVersions !== false) {
      obj.compatibleVersions = message.compatibleVersions;
    }
    if (message.canControl !== undefined && message.canControl !== false) {
      obj.canControl = message.canControl;
    }
    if (message.updatePossible !== undefined && message.updatePossible !== false) {
      obj.updatePossible = message.updatePossible;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HaMessaurementWithRights>, I>>(base?: I): HaMessaurementWithRights {
    return HaMessaurementWithRights.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HaMessaurementWithRights>, I>>(object: I): HaMessaurementWithRights {
    const message = createBaseHaMessaurementWithRights();
    message.timestamp = object.timestamp ?? undefined;
    message.clusterStatus = object.clusterStatus ?? HaClusterStatus.OFF;
    message.backupStatus = object.backupStatus ?? HaBackupStatus.Unknown;
    message.staticIp = object.staticIp ?? "";
    message.remoteStaticIp = object.remoteStaticIp ?? "";
    message.localRole = object.localRole ?? InitialState.PRIMARY;
    message.compatibleVersions = object.compatibleVersions ?? false;
    message.canControl = object.canControl ?? false;
    message.updatePossible = object.updatePossible ?? false;
    return message;
  },
};

function createBaseInspectionGraphData(): InspectionGraphData {
  return { values: [], timeStamp: undefined };
}

export const InspectionGraphData = {
  fromJSON(object: any): InspectionGraphData {
    return {
      values: gt.Array.isArray(object?.values) ? object.values.map((e: any) => gt.Number(e)) : [],
      timeStamp: isSet(object.timeStamp) ? fromJsonTimestamp(object.timeStamp) : undefined,
    };
  },

  toJSON(message: InspectionGraphData): unknown {
    const obj: any = {};
    if (message.values?.length) {
      obj.values = message.values;
    }
    if (message.timeStamp !== undefined) {
      obj.timeStamp = message.timeStamp.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InspectionGraphData>, I>>(base?: I): InspectionGraphData {
    return InspectionGraphData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InspectionGraphData>, I>>(object: I): InspectionGraphData {
    const message = createBaseInspectionGraphData();
    message.values = object.values?.map((e) => e) || [];
    message.timeStamp = object.timeStamp ?? undefined;
    return message;
  },
};

function createBaseInspectionGraphReply(): InspectionGraphReply {
  return { inspectionGraphData: [], signals: [], omittedList: [], precision: 0, timestamp: undefined };
}

export const InspectionGraphReply = {
  fromJSON(object: any): InspectionGraphReply {
    return {
      inspectionGraphData: gt.Array.isArray(object?.inspectionGraphData)
        ? object.inspectionGraphData.map((e: any) => InspectionGraphData.fromJSON(e))
        : [],
      signals: gt.Array.isArray(object?.signals)
        ? object.signals.map((e: any) => gt.String(e))
        : [],
      omittedList: gt.Array.isArray(object?.omittedList)
        ? object.omittedList.map((e: any) => fromJsonTimestamp(e))
        : [],
      precision: isSet(object.precision) ? gt.Number(object.precision) : 0,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
    };
  },

  toJSON(message: InspectionGraphReply): unknown {
    const obj: any = {};
    if (message.inspectionGraphData?.length) {
      obj.inspectionGraphData = message.inspectionGraphData.map((e) => InspectionGraphData.toJSON(e));
    }
    if (message.signals?.length) {
      obj.signals = message.signals;
    }
    if (message.omittedList?.length) {
      obj.omittedList = message.omittedList.map((e) => e.toISOString());
    }
    if (message.precision !== undefined && message.precision !== 0) {
      obj.precision = Math.round(message.precision);
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InspectionGraphReply>, I>>(base?: I): InspectionGraphReply {
    return InspectionGraphReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InspectionGraphReply>, I>>(object: I): InspectionGraphReply {
    const message = createBaseInspectionGraphReply();
    message.inspectionGraphData = object.inspectionGraphData?.map((e) => InspectionGraphData.fromPartial(e)) || [];
    message.signals = object.signals?.map((e) => e) || [];
    message.omittedList = object.omittedList?.map((e) => e) || [];
    message.precision = object.precision ?? 0;
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

function createBaseJitter(): Jitter {
  return { rangeMax: 0, countJitterNeg: 0, countJitterPos: 0 };
}

export const Jitter = {
  fromJSON(object: any): Jitter {
    return {
      rangeMax: isSet(object.rangeMax) ? gt.Number(object.rangeMax) : 0,
      countJitterNeg: isSet(object.countJitterNeg) ? gt.Number(object.countJitterNeg) : 0,
      countJitterPos: isSet(object.countJitterPos) ? gt.Number(object.countJitterPos) : 0,
    };
  },

  toJSON(message: Jitter): unknown {
    const obj: any = {};
    if (message.rangeMax !== undefined && message.rangeMax !== 0) {
      obj.rangeMax = Math.round(message.rangeMax);
    }
    if (message.countJitterNeg !== undefined && message.countJitterNeg !== 0) {
      obj.countJitterNeg = Math.round(message.countJitterNeg);
    }
    if (message.countJitterPos !== undefined && message.countJitterPos !== 0) {
      obj.countJitterPos = Math.round(message.countJitterPos);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Jitter>, I>>(base?: I): Jitter {
    return Jitter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Jitter>, I>>(object: I): Jitter {
    const message = createBaseJitter();
    message.rangeMax = object.rangeMax ?? 0;
    message.countJitterNeg = object.countJitterNeg ?? 0;
    message.countJitterPos = object.countJitterPos ?? 0;
    return message;
  },
};

function createBaseKeyValuePair(): KeyValuePair {
  return { key: "", value: "" };
}

export const KeyValuePair = {
  fromJSON(object: any): KeyValuePair {
    return {
      key: isSet(object.key) ? gt.String(object.key) : "",
      value: isSet(object.value) ? gt.String(object.value) : "",
    };
  },

  toJSON(message: KeyValuePair): unknown {
    const obj: any = {};
    if (message.key !== undefined && message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined && message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KeyValuePair>, I>>(base?: I): KeyValuePair {
    return KeyValuePair.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<KeyValuePair>, I>>(object: I): KeyValuePair {
    const message = createBaseKeyValuePair();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseLogEntry(): LogEntry {
  return { index: 0, domain: "", level: "", logger: "", message: "", thread: "", timestamp: undefined, username: "" };
}

export const LogEntry = {
  fromJSON(object: any): LogEntry {
    return {
      index: isSet(object.index) ? gt.Number(object.index) : 0,
      domain: isSet(object.domain) ? gt.String(object.domain) : "",
      level: isSet(object.level) ? gt.String(object.level) : "",
      logger: isSet(object.logger) ? gt.String(object.logger) : "",
      message: isSet(object.message) ? gt.String(object.message) : "",
      thread: isSet(object.thread) ? gt.String(object.thread) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      username: isSet(object.username) ? gt.String(object.username) : "",
    };
  },

  toJSON(message: LogEntry): unknown {
    const obj: any = {};
    if (message.index !== undefined && message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.domain !== undefined && message.domain !== "") {
      obj.domain = message.domain;
    }
    if (message.level !== undefined && message.level !== "") {
      obj.level = message.level;
    }
    if (message.logger !== undefined && message.logger !== "") {
      obj.logger = message.logger;
    }
    if (message.message !== undefined && message.message !== "") {
      obj.message = message.message;
    }
    if (message.thread !== undefined && message.thread !== "") {
      obj.thread = message.thread;
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    if (message.username !== undefined && message.username !== "") {
      obj.username = message.username;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogEntry>, I>>(base?: I): LogEntry {
    return LogEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogEntry>, I>>(object: I): LogEntry {
    const message = createBaseLogEntry();
    message.index = object.index ?? 0;
    message.domain = object.domain ?? "";
    message.level = object.level ?? "";
    message.logger = object.logger ?? "";
    message.message = object.message ?? "";
    message.thread = object.thread ?? "";
    message.timestamp = object.timestamp ?? undefined;
    message.username = object.username ?? "";
    return message;
  },
};

function createBaseLogfilesZipReply(): LogfilesZipReply {
  return { bytes: new Uint8Array(0) };
}

export const LogfilesZipReply = {
  fromJSON(object: any): LogfilesZipReply {
    return { bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : new Uint8Array(0) };
  },

  toJSON(message: LogfilesZipReply): unknown {
    const obj: any = {};
    if (message.bytes !== undefined && message.bytes.length !== 0) {
      obj.bytes = base64FromBytes(message.bytes);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogfilesZipReply>, I>>(base?: I): LogfilesZipReply {
    return LogfilesZipReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogfilesZipReply>, I>>(object: I): LogfilesZipReply {
    const message = createBaseLogfilesZipReply();
    message.bytes = object.bytes ?? new Uint8Array(0);
    return message;
  },
};

function createBaseLogReply(): LogReply {
  return { isloggingPersistenceEnabled: false, logEntries: [] };
}

export const LogReply = {
  fromJSON(object: any): LogReply {
    return {
      isloggingPersistenceEnabled: isSet(object.isloggingPersistenceEnabled)
        ? gt.Boolean(object.isloggingPersistenceEnabled)
        : false,
      logEntries: gt.Array.isArray(object?.logEntries)
        ? object.logEntries.map((e: any) => LogEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LogReply): unknown {
    const obj: any = {};
    if (message.isloggingPersistenceEnabled !== false) {
      obj.isloggingPersistenceEnabled = message.isloggingPersistenceEnabled;
    }
    if (message.logEntries?.length) {
      obj.logEntries = message.logEntries.map((e) => LogEntry.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogReply>, I>>(base?: I): LogReply {
    return LogReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogReply>, I>>(object: I): LogReply {
    const message = createBaseLogReply();
    message.isloggingPersistenceEnabled = object.isloggingPersistenceEnabled ?? false;
    message.logEntries = object.logEntries?.map((e) => LogEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLookupTable(): LookupTable {
  return { tableName: "", groupName: "", xAxis: undefined, yAxis: undefined, rows: [], columnValues: [] };
}

export const LookupTable = {
  fromJSON(object: any): LookupTable {
    return {
      tableName: isSet(object.tableName) ? gt.String(object.tableName) : "",
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      xAxis: isSet(object.xAxis) ? LookupTableAxis.fromJSON(object.xAxis) : undefined,
      yAxis: isSet(object.yAxis) ? LookupTableAxis.fromJSON(object.yAxis) : undefined,
      rows: gt.Array.isArray(object?.rows) ? object.rows.map((e: any) => LookupTableRow.fromJSON(e)) : [],
      columnValues: gt.Array.isArray(object?.columnValues) ? object.columnValues.map((e: any) => gt.Number(e)) : [],
    };
  },

  toJSON(message: LookupTable): unknown {
    const obj: any = {};
    if (message.tableName !== "") {
      obj.tableName = message.tableName;
    }
    if (message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.xAxis !== undefined) {
      obj.xAxis = LookupTableAxis.toJSON(message.xAxis);
    }
    if (message.yAxis !== undefined) {
      obj.yAxis = LookupTableAxis.toJSON(message.yAxis);
    }
    if (message.rows?.length) {
      obj.rows = message.rows.map((e) => LookupTableRow.toJSON(e));
    }
    if (message.columnValues?.length) {
      obj.columnValues = message.columnValues;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LookupTable>, I>>(base?: I): LookupTable {
    return LookupTable.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LookupTable>, I>>(object: I): LookupTable {
    const message = createBaseLookupTable();
    message.tableName = object.tableName ?? "";
    message.groupName = object.groupName ?? "";
    message.xAxis = (object.xAxis !== undefined && object.xAxis !== null)
      ? LookupTableAxis.fromPartial(object.xAxis)
      : undefined;
    message.yAxis = (object.yAxis !== undefined && object.yAxis !== null)
      ? LookupTableAxis.fromPartial(object.yAxis)
      : undefined;
    message.rows = object.rows?.map((e) => LookupTableRow.fromPartial(e)) || [];
    message.columnValues = object.columnValues?.map((e) => e) || [];
    return message;
  },
};

function createBaseLookupTableAxis(): LookupTableAxis {
  return { label: "", unit: "" };
}

export const LookupTableAxis = {
  fromJSON(object: any): LookupTableAxis {
    return {
      label: isSet(object.label) ? gt.String(object.label) : "",
      unit: isSet(object.unit) ? gt.String(object.unit) : "",
    };
  },

  toJSON(message: LookupTableAxis): unknown {
    const obj: any = {};
    if (message.label !== "") {
      obj.label = message.label;
    }
    if (message.unit !== "") {
      obj.unit = message.unit;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LookupTableAxis>, I>>(base?: I): LookupTableAxis {
    return LookupTableAxis.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LookupTableAxis>, I>>(object: I): LookupTableAxis {
    const message = createBaseLookupTableAxis();
    message.label = object.label ?? "";
    message.unit = object.unit ?? "";
    return message;
  },
};

function createBaseLookupTableRow(): LookupTableRow {
  return { rowHeader: 0, cellValues: [] };
}

export const LookupTableRow = {
  fromJSON(object: any): LookupTableRow {
    return {
      rowHeader: isSet(object.rowHeader) ? gt.Number(object.rowHeader) : 0,
      cellValues: gt.Array.isArray(object?.cellValues) ? object.cellValues.map((e: any) => gt.Number(e)) : [],
    };
  },

  toJSON(message: LookupTableRow): unknown {
    const obj: any = {};
    if (message.rowHeader !== undefined && message.rowHeader !== 0) {
      obj.rowHeader = message.rowHeader;
    }
    if (message.cellValues?.length) {
      obj.cellValues = message.cellValues;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LookupTableRow>, I>>(base?: I): LookupTableRow {
    return LookupTableRow.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LookupTableRow>, I>>(object: I): LookupTableRow {
    const message = createBaseLookupTableRow();
    message.rowHeader = object.rowHeader ?? 0;
    message.cellValues = object.cellValues?.map((e) => e) || [];
    return message;
  },
};

function createBaseManualVoltageLimitsGroupData(): ManualVoltageLimitsGroupData {
  return { group: "", manualVoltageLimits: {} };
}

export const ManualVoltageLimitsGroupData = {
  fromJSON(object: any): ManualVoltageLimitsGroupData {
    return {
      group: isSet(object.group) ? gt.String(object.group) : "",
      manualVoltageLimits: isObject(object.manualVoltageLimits)
        ? Object.entries(object.manualVoltageLimits).reduce<{ [key: string]: number }>((acc, [key, value]) => {
          acc[key] = Number(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: ManualVoltageLimitsGroupData): unknown {
    const obj: any = {};
    if (message.group !== "") {
      obj.group = message.group;
    }
    if (message.manualVoltageLimits) {
      const entries = Object.entries(message.manualVoltageLimits);
      if (entries.length > 0) {
        obj.manualVoltageLimits = {};
        entries.forEach(([k, v]) => {
          obj.manualVoltageLimits[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ManualVoltageLimitsGroupData>, I>>(base?: I): ManualVoltageLimitsGroupData {
    return ManualVoltageLimitsGroupData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ManualVoltageLimitsGroupData>, I>>(object: I): ManualVoltageLimitsGroupData {
    const message = createBaseManualVoltageLimitsGroupData();
    message.group = object.group ?? "";
    message.manualVoltageLimits = Object.entries(object.manualVoltageLimits ?? {}).reduce<{ [key: string]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = gt.Number(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseManualVoltageLimitsGroupData_ManualVoltageLimitsEntry(): ManualVoltageLimitsGroupData_ManualVoltageLimitsEntry {
  return { key: "", value: 0 };
}

export const ManualVoltageLimitsGroupData_ManualVoltageLimitsEntry = {
  fromJSON(object: any): ManualVoltageLimitsGroupData_ManualVoltageLimitsEntry {
    return {
      key: isSet(object.key) ? gt.String(object.key) : "",
      value: isSet(object.value) ? gt.Number(object.value) : 0,
    };
  },

  toJSON(message: ManualVoltageLimitsGroupData_ManualVoltageLimitsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== 0) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ManualVoltageLimitsGroupData_ManualVoltageLimitsEntry>, I>>(
    base?: I,
  ): ManualVoltageLimitsGroupData_ManualVoltageLimitsEntry {
    return ManualVoltageLimitsGroupData_ManualVoltageLimitsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ManualVoltageLimitsGroupData_ManualVoltageLimitsEntry>, I>>(
    object: I,
  ): ManualVoltageLimitsGroupData_ManualVoltageLimitsEntry {
    const message = createBaseManualVoltageLimitsGroupData_ManualVoltageLimitsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseMenuItem(): MenuItem {
  return { link: "", text: "", section: "", permissions: [], isSelected: false };
}

export const MenuItem = {
  fromJSON(object: any): MenuItem {
    return {
      link: isSet(object.link) ? gt.String(object.link) : "",
      text: isSet(object.text) ? gt.String(object.text) : "",
      section: isSet(object.section) ? gt.String(object.section) : "",
      permissions: gt.Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => permissionFromJSON(e))
        : [],
      isSelected: isSet(object.isSelected) ? gt.Boolean(object.isSelected) : false,
    };
  },

  toJSON(message: MenuItem): unknown {
    const obj: any = {};
    if (message.link !== "") {
      obj.link = message.link;
    }
    if (message.text !== "") {
      obj.text = message.text;
    }
    if (message.section !== "") {
      obj.section = message.section;
    }
    if (message.permissions?.length) {
      obj.permissions = message.permissions.map((e) => permissionToJSON(e));
    }
    if (message.isSelected !== false) {
      obj.isSelected = message.isSelected;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MenuItem>, I>>(base?: I): MenuItem {
    return MenuItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MenuItem>, I>>(object: I): MenuItem {
    const message = createBaseMenuItem();
    message.link = object.link ?? "";
    message.text = object.text ?? "";
    message.section = object.section ?? "";
    message.permissions = object.permissions?.map((e) => e) || [];
    message.isSelected = object.isSelected ?? false;
    return message;
  },
};

function createBaseMenuSection(): MenuSection {
  return { id: "", title: "", visible: false, menuItems: [], totals: 0, isSelected: false };
}

export const MenuSection = {
  fromJSON(object: any): MenuSection {
    return {
      id: isSet(object.id) ? gt.String(object.id) : "",
      title: isSet(object.title) ? gt.String(object.title) : "",
      visible: isSet(object.visible) ? gt.Boolean(object.visible) : false,
      menuItems: gt.Array.isArray(object?.menuItems) ? object.menuItems.map((e: any) => MenuItem.fromJSON(e)) : [],
      totals: isSet(object.totals) ? gt.Number(object.totals) : 0,
      isSelected: isSet(object.isSelected) ? gt.Boolean(object.isSelected) : false,
    };
  },

  toJSON(message: MenuSection): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.visible !== false) {
      obj.visible = message.visible;
    }
    if (message.menuItems?.length) {
      obj.menuItems = message.menuItems.map((e) => MenuItem.toJSON(e));
    }
    if (message.totals !== undefined && message.totals !== 0) {
      obj.totals = Math.round(message.totals);
    }
    if (message.isSelected !== false) {
      obj.isSelected = message.isSelected;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MenuSection>, I>>(base?: I): MenuSection {
    return MenuSection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MenuSection>, I>>(object: I): MenuSection {
    const message = createBaseMenuSection();
    message.id = object.id ?? "";
    message.title = object.title ?? "";
    message.visible = object.visible ?? false;
    message.menuItems = object.menuItems?.map((e) => MenuItem.fromPartial(e)) || [];
    message.totals = object.totals ?? 0;
    message.isSelected = object.isSelected ?? false;
    return message;
  },
};

function createBaseParquetFilesData(): ParquetFilesData {
  return { path: "", status: "", viewName: "", estimated: "", timeout: 0, userName: "", sourceApplication: "" };
}

export const ParquetFilesData = {
  fromJSON(object: any): ParquetFilesData {
    return {
      path: isSet(object.path) ? gt.String(object.path) : "",
      status: isSet(object.status) ? gt.String(object.status) : "",
      viewName: isSet(object.viewName) ? gt.String(object.viewName) : "",
      estimated: isSet(object.estimated) ? gt.String(object.estimated) : "",
      timeout: isSet(object.timeout) ? gt.Number(object.timeout) : 0,
      userName: isSet(object.userName) ? gt.String(object.userName) : "",
      sourceApplication: isSet(object.sourceApplication) ? gt.String(object.sourceApplication) : "",
    };
  },

  toJSON(message: ParquetFilesData): unknown {
    const obj: any = {};
    if (message.path !== undefined && message.path !== "") {
      obj.path = message.path;
    }
    if (message.status !== undefined && message.status !== "") {
      obj.status = message.status;
    }
    if (message.viewName !== undefined && message.viewName !== "") {
      obj.viewName = message.viewName;
    }
    if (message.estimated !== undefined && message.estimated !== "") {
      obj.estimated = message.estimated;
    }
    if (message.timeout !== undefined && message.timeout !== 0) {
      obj.timeout = Math.round(message.timeout);
    }
    if (message.userName !== undefined && message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.sourceApplication !== undefined && message.sourceApplication !== "") {
      obj.sourceApplication = message.sourceApplication;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParquetFilesData>, I>>(base?: I): ParquetFilesData {
    return ParquetFilesData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParquetFilesData>, I>>(object: I): ParquetFilesData {
    const message = createBaseParquetFilesData();
    message.path = object.path ?? "";
    message.status = object.status ?? "";
    message.viewName = object.viewName ?? "";
    message.estimated = object.estimated ?? "";
    message.timeout = object.timeout ?? 0;
    message.userName = object.userName ?? "";
    message.sourceApplication = object.sourceApplication ?? "";
    return message;
  },
};

function createBaseParquetFileReply(): ParquetFileReply {
  return { bytes: new Uint8Array(0) };
}

export const ParquetFileReply = {
  fromJSON(object: any): ParquetFileReply {
    return { bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : new Uint8Array(0) };
  },

  toJSON(message: ParquetFileReply): unknown {
    const obj: any = {};
    if (message.bytes !== undefined && message.bytes.length !== 0) {
      obj.bytes = base64FromBytes(message.bytes);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParquetFileReply>, I>>(base?: I): ParquetFileReply {
    return ParquetFileReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParquetFileReply>, I>>(object: I): ParquetFileReply {
    const message = createBaseParquetFileReply();
    message.bytes = object.bytes ?? new Uint8Array(0);
    return message;
  },
};

function createBaseParkPilotGenerator(): ParkPilotGenerator {
  return { generatorName: "", generators: [], turbines: [], vgms: [], hppps: [] };
}

export const ParkPilotGenerator = {
  fromJSON(object: any): ParkPilotGenerator {
    return {
      generatorName: isSet(object.generatorName) ? gt.String(object.generatorName) : "",
      generators: gt.Array.isArray(object?.generators)
        ? object.generators.map((e: any) => GeneratorGroup.fromJSON(e))
        : [],
      turbines: gt.Array.isArray(object?.turbines)
        ? object.turbines.map((e: any) => GeneratorGroup.fromJSON(e))
        : [],
      vgms: gt.Array.isArray(object?.vgms) ? object.vgms.map((e: any) => gt.String(e)) : [],
      hppps: gt.Array.isArray(object?.hppps) ? object.hppps.map((e: any) => gt.String(e)) : [],
    };
  },

  toJSON(message: ParkPilotGenerator): unknown {
    const obj: any = {};
    if (message.generatorName !== undefined && message.generatorName !== "") {
      obj.generatorName = message.generatorName;
    }
    if (message.generators?.length) {
      obj.generators = message.generators.map((e) => GeneratorGroup.toJSON(e));
    }
    if (message.turbines?.length) {
      obj.turbines = message.turbines.map((e) => GeneratorGroup.toJSON(e));
    }
    if (message.vgms?.length) {
      obj.vgms = message.vgms;
    }
    if (message.hppps?.length) {
      obj.hppps = message.hppps;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParkPilotGenerator>, I>>(base?: I): ParkPilotGenerator {
    return ParkPilotGenerator.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParkPilotGenerator>, I>>(object: I): ParkPilotGenerator {
    const message = createBaseParkPilotGenerator();
    message.generatorName = object.generatorName ?? "";
    message.generators = object.generators?.map((e) => GeneratorGroup.fromPartial(e)) || [];
    message.turbines = object.turbines?.map((e) => GeneratorGroup.fromPartial(e)) || [];
    message.vgms = object.vgms?.map((e) => e) || [];
    message.hppps = object.hppps?.map((e) => e) || [];
    return message;
  },
};

function createBaseParameterChangeLog(): ParameterChangeLog {
  return {
    timeStamp: undefined,
    user: "",
    parameter: "",
    oldValue: 0,
    newValue: 0,
    topologyId: 0,
    controller: "",
    function: "",
    groupId: 0,
    groupName: "",
  };
}

export const ParameterChangeLog = {
  fromJSON(object: any): ParameterChangeLog {
    return {
      timeStamp: isSet(object.timeStamp) ? fromJsonTimestamp(object.timeStamp) : undefined,
      user: isSet(object.user) ? gt.String(object.user) : "",
      parameter: isSet(object.parameter) ? gt.String(object.parameter) : "",
      oldValue: isSet(object.oldValue) ? gt.Number(object.oldValue) : 0,
      newValue: isSet(object.newValue) ? gt.Number(object.newValue) : 0,
      topologyId: isSet(object.topologyId) ? gt.Number(object.topologyId) : 0,
      controller: isSet(object.controller) ? gt.String(object.controller) : "",
      function: isSet(object.function) ? gt.String(object.function) : "",
      groupId: isSet(object.groupId) ? gt.Number(object.groupId) : 0,
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
    };
  },

  toJSON(message: ParameterChangeLog): unknown {
    const obj: any = {};
    if (message.timeStamp !== undefined) {
      obj.timeStamp = message.timeStamp.toISOString();
    }
    if (message.user !== undefined && message.user !== "") {
      obj.user = message.user;
    }
    if (message.parameter !== undefined && message.parameter !== "") {
      obj.parameter = message.parameter;
    }
    if (message.oldValue !== undefined && message.oldValue !== 0) {
      obj.oldValue = message.oldValue;
    }
    if (message.newValue !== undefined && message.newValue !== 0) {
      obj.newValue = message.newValue;
    }
    if (message.topologyId !== undefined && message.topologyId !== 0) {
      obj.topologyId = Math.round(message.topologyId);
    }
    if (message.controller !== undefined && message.controller !== "") {
      obj.controller = message.controller;
    }
    if (message.function !== undefined && message.function !== "") {
      obj.function = message.function;
    }
    if (message.groupId !== undefined && message.groupId !== 0) {
      obj.groupId = Math.round(message.groupId);
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParameterChangeLog>, I>>(base?: I): ParameterChangeLog {
    return ParameterChangeLog.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParameterChangeLog>, I>>(object: I): ParameterChangeLog {
    const message = createBaseParameterChangeLog();
    message.timeStamp = object.timeStamp ?? undefined;
    message.user = object.user ?? "";
    message.parameter = object.parameter ?? "";
    message.oldValue = object.oldValue ?? 0;
    message.newValue = object.newValue ?? 0;
    message.topologyId = object.topologyId ?? 0;
    message.controller = object.controller ?? "";
    message.function = object.function ?? "";
    message.groupId = object.groupId ?? 0;
    message.groupName = object.groupName ?? "";
    return message;
  },
};

function createBaseParameterData(): ParameterData {
  return {
    min: 0,
    max: 0,
    unit: "",
    value: 0,
    type: DataTypes.DataTypeInteger,
    permissionGroup: ParameterSubscription_PermissionGroup.Other,
    userCanEdit: false,
    function: "",
    outsideParameter: false,
    functionalGroup: "",
    name: "",
    group: "",
    controller: "",
    friendlyName: "",
    topologyValues: [],
    groupId: 0,
    secondaryFunction: "",
    groupsAndValues: [],
  };
}

export const ParameterData = {
  fromJSON(object: any): ParameterData {
    return {
      min: isSet(object.min) ? gt.Number(object.min) : 0,
      max: isSet(object.max) ? gt.Number(object.max) : 0,
      unit: isSet(object.unit) ? gt.String(object.unit) : "",
      value: isSet(object.value) ? gt.Number(object.value) : 0,
      type: isSet(object.type) ? dataTypesFromJSON(object.type) : DataTypes.DataTypeInteger,
      permissionGroup: isSet(object.permissionGroup)
        ? parameterSubscription_PermissionGroupFromJSON(object.permissionGroup)
        : ParameterSubscription_PermissionGroup.Other,
      userCanEdit: isSet(object.userCanEdit) ? gt.Boolean(object.userCanEdit) : false,
      function: isSet(object.function) ? gt.String(object.function) : "",
      outsideParameter: isSet(object.outsideParameter) ? gt.Boolean(object.outsideParameter) : false,
      functionalGroup: isSet(object.functionalGroup) ? gt.String(object.functionalGroup) : "",
      name: isSet(object.name) ? gt.String(object.name) : "",
      group: isSet(object.group) ? gt.String(object.group) : "",
      controller: isSet(object.controller) ? gt.String(object.controller) : "",
      friendlyName: isSet(object.friendlyName) ? gt.String(object.friendlyName) : "",
      topologyValues: gt.Array.isArray(object?.topologyValues)
        ? object.topologyValues.map((e: any) => gt.Number(e))
        : [],
      groupId: isSet(object.groupId) ? gt.Number(object.groupId) : 0,
      secondaryFunction: isSet(object.secondaryFunction) ? gt.String(object.secondaryFunction) : "",
      groupsAndValues: gt.Array.isArray(object?.groupsAndValues)
        ? object.groupsAndValues.map((e: any) => KeyValuePair.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ParameterData): unknown {
    const obj: any = {};
    if (message.min !== undefined && message.min !== 0) {
      obj.min = message.min;
    }
    if (message.max !== undefined && message.max !== 0) {
      obj.max = message.max;
    }
    if (message.unit !== undefined && message.unit !== "") {
      obj.unit = message.unit;
    }
    if (message.value !== undefined && message.value !== 0) {
      obj.value = message.value;
    }
    if (message.type !== undefined && message.type !== DataTypes.DataTypeInteger) {
      obj.type = dataTypesToJSON(message.type);
    }
    if (
      message.permissionGroup !== undefined && message.permissionGroup !== ParameterSubscription_PermissionGroup.Other
    ) {
      obj.permissionGroup = parameterSubscription_PermissionGroupToJSON(message.permissionGroup);
    }
    if (message.userCanEdit !== undefined && message.userCanEdit !== false) {
      obj.userCanEdit = message.userCanEdit;
    }
    if (message.function !== undefined && message.function !== "") {
      obj.function = message.function;
    }
    if (message.outsideParameter !== undefined && message.outsideParameter !== false) {
      obj.outsideParameter = message.outsideParameter;
    }
    if (message.functionalGroup !== undefined && message.functionalGroup !== "") {
      obj.functionalGroup = message.functionalGroup;
    }
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.group !== undefined && message.group !== "") {
      obj.group = message.group;
    }
    if (message.controller !== undefined && message.controller !== "") {
      obj.controller = message.controller;
    }
    if (message.friendlyName !== undefined && message.friendlyName !== "") {
      obj.friendlyName = message.friendlyName;
    }
    if (message.topologyValues?.length) {
      obj.topologyValues = message.topologyValues;
    }
    if (message.groupId !== undefined && message.groupId !== 0) {
      obj.groupId = Math.round(message.groupId);
    }
    if (message.secondaryFunction !== undefined && message.secondaryFunction !== "") {
      obj.secondaryFunction = message.secondaryFunction;
    }
    if (message.groupsAndValues?.length) {
      obj.groupsAndValues = message.groupsAndValues.map((e) => KeyValuePair.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParameterData>, I>>(base?: I): ParameterData {
    return ParameterData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParameterData>, I>>(object: I): ParameterData {
    const message = createBaseParameterData();
    message.min = object.min ?? 0;
    message.max = object.max ?? 0;
    message.unit = object.unit ?? "";
    message.value = object.value ?? 0;
    message.type = object.type ?? DataTypes.DataTypeInteger;
    message.permissionGroup = object.permissionGroup ?? ParameterSubscription_PermissionGroup.Other;
    message.userCanEdit = object.userCanEdit ?? false;
    message.function = object.function ?? "";
    message.outsideParameter = object.outsideParameter ?? false;
    message.functionalGroup = object.functionalGroup ?? "";
    message.name = object.name ?? "";
    message.group = object.group ?? "";
    message.controller = object.controller ?? "";
    message.friendlyName = object.friendlyName ?? "";
    message.topologyValues = object.topologyValues?.map((e) => e) || [];
    message.groupId = object.groupId ?? 0;
    message.secondaryFunction = object.secondaryFunction ?? "";
    message.groupsAndValues = object.groupsAndValues?.map((e) => KeyValuePair.fromPartial(e)) || [];
    return message;
  },
};

function createBaseParameterDataListReply(): ParameterDataListReply {
  return { timestamp: undefined, parameterDatas: [] };
}

export const ParameterDataListReply = {
  fromJSON(object: any): ParameterDataListReply {
    return {
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      parameterDatas: gt.Array.isArray(object?.parameterDatas)
        ? object.parameterDatas.map((e: any) => ParameterData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ParameterDataListReply): unknown {
    const obj: any = {};
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    if (message.parameterDatas?.length) {
      obj.parameterDatas = message.parameterDatas.map((e) => ParameterData.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParameterDataListReply>, I>>(base?: I): ParameterDataListReply {
    return ParameterDataListReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParameterDataListReply>, I>>(object: I): ParameterDataListReply {
    const message = createBaseParameterDataListReply();
    message.timestamp = object.timestamp ?? undefined;
    message.parameterDatas = object.parameterDatas?.map((e) => ParameterData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseParameterMetaData(): ParameterMetaData {
  return { name: "", description: "", displayAccuracy: 0, unit: "", function: "", minimum: 0, maximum: 0 };
}

export const ParameterMetaData = {
  fromJSON(object: any): ParameterMetaData {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      description: isSet(object.description) ? gt.String(object.description) : "",
      displayAccuracy: isSet(object.displayAccuracy) ? gt.Number(object.displayAccuracy) : 0,
      unit: isSet(object.unit) ? gt.String(object.unit) : "",
      function: isSet(object.function) ? gt.String(object.function) : "",
      minimum: isSet(object.minimum) ? gt.Number(object.minimum) : 0,
      maximum: isSet(object.maximum) ? gt.Number(object.maximum) : 0,
    };
  },

  toJSON(message: ParameterMetaData): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== undefined && message.description !== "") {
      obj.description = message.description;
    }
    if (message.displayAccuracy !== undefined && message.displayAccuracy !== 0) {
      obj.displayAccuracy = message.displayAccuracy;
    }
    if (message.unit !== undefined && message.unit !== "") {
      obj.unit = message.unit;
    }
    if (message.function !== undefined && message.function !== "") {
      obj.function = message.function;
    }
    if (message.minimum !== undefined && message.minimum !== 0) {
      obj.minimum = message.minimum;
    }
    if (message.maximum !== undefined && message.maximum !== 0) {
      obj.maximum = message.maximum;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParameterMetaData>, I>>(base?: I): ParameterMetaData {
    return ParameterMetaData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParameterMetaData>, I>>(object: I): ParameterMetaData {
    const message = createBaseParameterMetaData();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.displayAccuracy = object.displayAccuracy ?? 0;
    message.unit = object.unit ?? "";
    message.function = object.function ?? "";
    message.minimum = object.minimum ?? 0;
    message.maximum = object.maximum ?? 0;
    return message;
  },
};

function createBaseParVarEnum(): ParVarEnum {
  return { name: "", items: [] };
}

export const ParVarEnum = {
  fromJSON(object: any): ParVarEnum {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      items: gt.Array.isArray(object?.items) ? object.items.map((e: any) => ParVarEnumItem.fromJSON(e)) : [],
    };
  },

  toJSON(message: ParVarEnum): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.items?.length) {
      obj.items = message.items.map((e) => ParVarEnumItem.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParVarEnum>, I>>(base?: I): ParVarEnum {
    return ParVarEnum.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParVarEnum>, I>>(object: I): ParVarEnum {
    const message = createBaseParVarEnum();
    message.name = object.name ?? "";
    message.items = object.items?.map((e) => ParVarEnumItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseParVarEnumItem(): ParVarEnumItem {
  return { name: "", value: 0, description: "", protect: false };
}

export const ParVarEnumItem = {
  fromJSON(object: any): ParVarEnumItem {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      value: isSet(object.value) ? gt.Number(object.value) : 0,
      description: isSet(object.description) ? gt.String(object.description) : "",
      protect: isSet(object.protect) ? gt.Boolean(object.protect) : false,
    };
  },

  toJSON(message: ParVarEnumItem): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.value !== undefined && message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    if (message.description !== undefined && message.description !== "") {
      obj.description = message.description;
    }
    if (message.protect !== undefined && message.protect !== false) {
      obj.protect = message.protect;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParVarEnumItem>, I>>(base?: I): ParVarEnumItem {
    return ParVarEnumItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParVarEnumItem>, I>>(object: I): ParVarEnumItem {
    const message = createBaseParVarEnumItem();
    message.name = object.name ?? "";
    message.value = object.value ?? 0;
    message.description = object.description ?? "";
    message.protect = object.protect ?? false;
    return message;
  },
};

function createBaseParVarNameWithEnum(): ParVarNameWithEnum {
  return { parVarName: "", parVarEnum: undefined };
}

export const ParVarNameWithEnum = {
  fromJSON(object: any): ParVarNameWithEnum {
    return {
      parVarName: isSet(object.parVarName) ? gt.String(object.parVarName) : "",
      parVarEnum: isSet(object.parVarEnum) ? ParVarEnum.fromJSON(object.parVarEnum) : undefined,
    };
  },

  toJSON(message: ParVarNameWithEnum): unknown {
    const obj: any = {};
    if (message.parVarName !== undefined && message.parVarName !== "") {
      obj.parVarName = message.parVarName;
    }
    if (message.parVarEnum !== undefined) {
      obj.parVarEnum = ParVarEnum.toJSON(message.parVarEnum);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParVarNameWithEnum>, I>>(base?: I): ParVarNameWithEnum {
    return ParVarNameWithEnum.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParVarNameWithEnum>, I>>(object: I): ParVarNameWithEnum {
    const message = createBaseParVarNameWithEnum();
    message.parVarName = object.parVarName ?? "";
    message.parVarEnum = (object.parVarEnum !== undefined && object.parVarEnum !== null)
      ? ParVarEnum.fromPartial(object.parVarEnum)
      : undefined;
    return message;
  },
};

function createBasePhysical(): Physical {
  return { enabled: false, readRTT: 0, ctFault: false, vtFault: false };
}

export const Physical = {
  fromJSON(object: any): Physical {
    return {
      enabled: isSet(object.enabled) ? gt.Boolean(object.enabled) : false,
      readRTT: isSet(object.readRTT) ? gt.Number(object.readRTT) : 0,
      ctFault: isSet(object.ctFault) ? gt.Boolean(object.ctFault) : false,
      vtFault: isSet(object.vtFault) ? gt.Boolean(object.vtFault) : false,
    };
  },

  toJSON(message: Physical): unknown {
    const obj: any = {};
    if (message.enabled !== undefined && message.enabled !== false) {
      obj.enabled = message.enabled;
    }
    if (message.readRTT !== undefined && message.readRTT !== 0) {
      obj.readRTT = Math.round(message.readRTT);
    }
    if (message.ctFault !== undefined && message.ctFault !== false) {
      obj.ctFault = message.ctFault;
    }
    if (message.vtFault !== undefined && message.vtFault !== false) {
      obj.vtFault = message.vtFault;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Physical>, I>>(base?: I): Physical {
    return Physical.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Physical>, I>>(object: I): Physical {
    const message = createBasePhysical();
    message.enabled = object.enabled ?? false;
    message.readRTT = object.readRTT ?? 0;
    message.ctFault = object.ctFault ?? false;
    message.vtFault = object.vtFault ?? false;
    return message;
  },
};

function createBasePolicyParameter(): PolicyParameter {
  return { controllerName: "", groupName: "", paramName: "" };
}

export const PolicyParameter = {
  fromJSON(object: any): PolicyParameter {
    return {
      controllerName: isSet(object.controllerName) ? gt.String(object.controllerName) : "",
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      paramName: isSet(object.paramName) ? gt.String(object.paramName) : "",
    };
  },

  toJSON(message: PolicyParameter): unknown {
    const obj: any = {};
    if (message.controllerName !== undefined && message.controllerName !== "") {
      obj.controllerName = message.controllerName;
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.paramName !== undefined && message.paramName !== "") {
      obj.paramName = message.paramName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PolicyParameter>, I>>(base?: I): PolicyParameter {
    return PolicyParameter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PolicyParameter>, I>>(object: I): PolicyParameter {
    const message = createBasePolicyParameter();
    message.controllerName = object.controllerName ?? "";
    message.groupName = object.groupName ?? "";
    message.paramName = object.paramName ?? "";
    return message;
  },
};

function createBasePoliciesData(): PoliciesData {
  return { id: 0, name: "", active: false, canEdit: false, allowedSources: [], parameters: [] };
}

export const PoliciesData = {
  fromJSON(object: any): PoliciesData {
    return {
      id: isSet(object.id) ? gt.Number(object.id) : 0,
      name: isSet(object.name) ? gt.String(object.name) : "",
      active: isSet(object.active) ? gt.Boolean(object.active) : false,
      canEdit: isSet(object.canEdit) ? gt.Boolean(object.canEdit) : false,
      allowedSources: gt.Array.isArray(object?.allowedSources)
        ? object.allowedSources.map((e: any) => PolicySource.fromJSON(e))
        : [],
      parameters: gt.Array.isArray(object?.parameters)
        ? object.parameters.map((e: any) => PolicyParameter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PoliciesData): unknown {
    const obj: any = {};
    if (message.id !== undefined && message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.active !== undefined && message.active !== false) {
      obj.active = message.active;
    }
    if (message.canEdit !== undefined && message.canEdit !== false) {
      obj.canEdit = message.canEdit;
    }
    if (message.allowedSources?.length) {
      obj.allowedSources = message.allowedSources.map((e) => PolicySource.toJSON(e));
    }
    if (message.parameters?.length) {
      obj.parameters = message.parameters.map((e) => PolicyParameter.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PoliciesData>, I>>(base?: I): PoliciesData {
    return PoliciesData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PoliciesData>, I>>(object: I): PoliciesData {
    const message = createBasePoliciesData();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.active = object.active ?? false;
    message.canEdit = object.canEdit ?? false;
    message.allowedSources = object.allowedSources?.map((e) => PolicySource.fromPartial(e)) || [];
    message.parameters = object.parameters?.map((e) => PolicyParameter.fromPartial(e)) || [];
    return message;
  },
};

function createBasePolicySource(): PolicySource {
  return { source: "", username: "", bitmask: 0 };
}

export const PolicySource = {
  fromJSON(object: any): PolicySource {
    return {
      source: isSet(object.source) ? gt.String(object.source) : "",
      username: isSet(object.username) ? gt.String(object.username) : "",
      bitmask: isSet(object.bitmask) ? gt.Number(object.bitmask) : 0,
    };
  },

  toJSON(message: PolicySource): unknown {
    const obj: any = {};
    if (message.source !== undefined && message.source !== "") {
      obj.source = message.source;
    }
    if (message.username !== undefined && message.username !== "") {
      obj.username = message.username;
    }
    if (message.bitmask !== undefined && message.bitmask !== 0) {
      obj.bitmask = Math.round(message.bitmask);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PolicySource>, I>>(base?: I): PolicySource {
    return PolicySource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PolicySource>, I>>(object: I): PolicySource {
    const message = createBasePolicySource();
    message.source = object.source ?? "";
    message.username = object.username ?? "";
    message.bitmask = object.bitmask ?? 0;
    return message;
  },
};

function createBasePoliciesAndSources(): PoliciesAndSources {
  return { policies: [], sources: [] };
}

export const PoliciesAndSources = {
  fromJSON(object: any): PoliciesAndSources {
    return {
      policies: gt.Array.isArray(object?.policies) ? object.policies.map((e: any) => PoliciesData.fromJSON(e)) : [],
      sources: gt.Array.isArray(object?.sources) ? object.sources.map((e: any) => PolicySource.fromJSON(e)) : [],
    };
  },

  toJSON(message: PoliciesAndSources): unknown {
    const obj: any = {};
    if (message.policies?.length) {
      obj.policies = message.policies.map((e) => PoliciesData.toJSON(e));
    }
    if (message.sources?.length) {
      obj.sources = message.sources.map((e) => PolicySource.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PoliciesAndSources>, I>>(base?: I): PoliciesAndSources {
    return PoliciesAndSources.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PoliciesAndSources>, I>>(object: I): PoliciesAndSources {
    const message = createBasePoliciesAndSources();
    message.policies = object.policies?.map((e) => PoliciesData.fromPartial(e)) || [];
    message.sources = object.sources?.map((e) => PolicySource.fromPartial(e)) || [];
    return message;
  },
};

function createBasePoint(): Point {
  return { pointId: 0, name: "", x: 0, y: 0, key: "", groupName: "", dataSetId: 0, status: false };
}

export const Point = {
  fromJSON(object: any): Point {
    return {
      pointId: isSet(object.pointId) ? gt.Number(object.pointId) : 0,
      name: isSet(object.name) ? gt.String(object.name) : "",
      x: isSet(object.x) ? gt.Number(object.x) : 0,
      y: isSet(object.y) ? gt.Number(object.y) : 0,
      key: isSet(object.key) ? gt.String(object.key) : "",
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      dataSetId: isSet(object.dataSetId) ? gt.Number(object.dataSetId) : 0,
      status: isSet(object.status) ? gt.Boolean(object.status) : false,
    };
  },

  toJSON(message: Point): unknown {
    const obj: any = {};
    if (message.pointId !== undefined && message.pointId !== 0) {
      obj.pointId = Math.round(message.pointId);
    }
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.x !== undefined && message.x !== 0) {
      obj.x = message.x;
    }
    if (message.y !== undefined && message.y !== 0) {
      obj.y = message.y;
    }
    if (message.key !== undefined && message.key !== "") {
      obj.key = message.key;
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.dataSetId !== undefined && message.dataSetId !== 0) {
      obj.dataSetId = Math.round(message.dataSetId);
    }
    if (message.status !== undefined && message.status !== false) {
      obj.status = message.status;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Point>, I>>(base?: I): Point {
    return Point.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Point>, I>>(object: I): Point {
    const message = createBasePoint();
    message.pointId = object.pointId ?? 0;
    message.name = object.name ?? "";
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.key = object.key ?? "";
    message.groupName = object.groupName ?? "";
    message.dataSetId = object.dataSetId ?? 0;
    message.status = object.status ?? false;
    return message;
  },
};

function createBasePointDataset(): PointDataset {
  return { dataSetId: 0, point: undefined, groupName: "" };
}

export const PointDataset = {
  fromJSON(object: any): PointDataset {
    return {
      dataSetId: isSet(object.dataSetId) ? gt.Number(object.dataSetId) : 0,
      point: isSet(object.point) ? Point.fromJSON(object.point) : undefined,
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
    };
  },

  toJSON(message: PointDataset): unknown {
    const obj: any = {};
    if (message.dataSetId !== undefined && message.dataSetId !== 0) {
      obj.dataSetId = Math.round(message.dataSetId);
    }
    if (message.point !== undefined) {
      obj.point = Point.toJSON(message.point);
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PointDataset>, I>>(base?: I): PointDataset {
    return PointDataset.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PointDataset>, I>>(object: I): PointDataset {
    const message = createBasePointDataset();
    message.dataSetId = object.dataSetId ?? 0;
    message.point = (object.point !== undefined && object.point !== null) ? Point.fromPartial(object.point) : undefined;
    message.groupName = object.groupName ?? "";
    return message;
  },
};

function createBasePossibleSettingReply(): PossibleSettingReply {
  return { settings: [], manualVoltageLimitsGroup: [], manualPowerLimits: {} };
}

export const PossibleSettingReply = {
  fromJSON(object: any): PossibleSettingReply {
    return {
      settings: gt.Array.isArray(object?.settings)
        ? object.settings.map((e: any) => StationSettingsWithManRef.fromJSON(e))
        : [],
      manualVoltageLimitsGroup: gt.Array.isArray(object?.manualVoltageLimitsGroup)
        ? object.manualVoltageLimitsGroup.map((e: any) => ManualVoltageLimitsGroupData.fromJSON(e))
        : [],
      manualPowerLimits: isObject(object.manualPowerLimits)
        ? Object.entries(object.manualPowerLimits).reduce<{ [key: string]: number }>((acc, [key, value]) => {
          acc[key] = Number(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: PossibleSettingReply): unknown {
    const obj: any = {};
    if (message.settings?.length) {
      obj.settings = message.settings.map((e) => StationSettingsWithManRef.toJSON(e));
    }
    if (message.manualVoltageLimitsGroup?.length) {
      obj.manualVoltageLimitsGroup = message.manualVoltageLimitsGroup.map((e) =>
        ManualVoltageLimitsGroupData.toJSON(e)
      );
    }
    if (message.manualPowerLimits) {
      const entries = Object.entries(message.manualPowerLimits);
      if (entries.length > 0) {
        obj.manualPowerLimits = {};
        entries.forEach(([k, v]) => {
          obj.manualPowerLimits[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PossibleSettingReply>, I>>(base?: I): PossibleSettingReply {
    return PossibleSettingReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PossibleSettingReply>, I>>(object: I): PossibleSettingReply {
    const message = createBasePossibleSettingReply();
    message.settings = object.settings?.map((e) => StationSettingsWithManRef.fromPartial(e)) || [];
    message.manualVoltageLimitsGroup =
      object.manualVoltageLimitsGroup?.map((e) => ManualVoltageLimitsGroupData.fromPartial(e)) || [];
    message.manualPowerLimits = Object.entries(object.manualPowerLimits ?? {}).reduce<{ [key: string]: number }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = gt.Number(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBasePossibleSettingReply_ManualPowerLimitsEntry(): PossibleSettingReply_ManualPowerLimitsEntry {
  return { key: "", value: 0 };
}

export const PossibleSettingReply_ManualPowerLimitsEntry = {
  fromJSON(object: any): PossibleSettingReply_ManualPowerLimitsEntry {
    return {
      key: isSet(object.key) ? gt.String(object.key) : "",
      value: isSet(object.value) ? gt.Number(object.value) : 0,
    };
  },

  toJSON(message: PossibleSettingReply_ManualPowerLimitsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== 0) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PossibleSettingReply_ManualPowerLimitsEntry>, I>>(
    base?: I,
  ): PossibleSettingReply_ManualPowerLimitsEntry {
    return PossibleSettingReply_ManualPowerLimitsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PossibleSettingReply_ManualPowerLimitsEntry>, I>>(
    object: I,
  ): PossibleSettingReply_ManualPowerLimitsEntry {
    const message = createBasePossibleSettingReply_ManualPowerLimitsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseProcessData(): ProcessData {
  return {
    name: "",
    restartCount: 0,
    startTime: undefined,
    state: "",
    errorMessage: "",
    canControl: false,
    runningMode: "",
    autoStartup: false,
  };
}

export const ProcessData = {
  fromJSON(object: any): ProcessData {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      restartCount: isSet(object.restartCount) ? gt.Number(object.restartCount) : 0,
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      state: isSet(object.state) ? gt.String(object.state) : "",
      errorMessage: isSet(object.errorMessage) ? gt.String(object.errorMessage) : "",
      canControl: isSet(object.canControl) ? gt.Boolean(object.canControl) : false,
      runningMode: isSet(object.runningMode) ? gt.String(object.runningMode) : "",
      autoStartup: isSet(object.autoStartup) ? gt.Boolean(object.autoStartup) : false,
    };
  },

  toJSON(message: ProcessData): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.restartCount !== undefined && message.restartCount !== 0) {
      obj.restartCount = Math.round(message.restartCount);
    }
    if (message.startTime !== undefined) {
      obj.startTime = message.startTime.toISOString();
    }
    if (message.state !== "") {
      obj.state = message.state;
    }
    if (message.errorMessage !== undefined && message.errorMessage !== "") {
      obj.errorMessage = message.errorMessage;
    }
    if (message.canControl !== undefined && message.canControl !== false) {
      obj.canControl = message.canControl;
    }
    if (message.runningMode !== undefined && message.runningMode !== "") {
      obj.runningMode = message.runningMode;
    }
    if (message.autoStartup !== undefined && message.autoStartup !== false) {
      obj.autoStartup = message.autoStartup;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProcessData>, I>>(base?: I): ProcessData {
    return ProcessData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProcessData>, I>>(object: I): ProcessData {
    const message = createBaseProcessData();
    message.name = object.name ?? "";
    message.restartCount = object.restartCount ?? 0;
    message.startTime = object.startTime ?? undefined;
    message.state = object.state ?? "";
    message.errorMessage = object.errorMessage ?? "";
    message.canControl = object.canControl ?? false;
    message.runningMode = object.runningMode ?? "";
    message.autoStartup = object.autoStartup ?? false;
    return message;
  },
};

function createBaseLayout(): Layout {
  return { ppgs: [] };
}

export const Layout = {
  fromJSON(object: any): Layout {
    return { ppgs: gt.Array.isArray(object?.ppgs) ? object.ppgs.map((e: any) => Layout_PPG.fromJSON(e)) : [] };
  },

  toJSON(message: Layout): unknown {
    const obj: any = {};
    if (message.ppgs?.length) {
      obj.ppgs = message.ppgs.map((e) => Layout_PPG.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Layout>, I>>(base?: I): Layout {
    return Layout.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Layout>, I>>(object: I): Layout {
    const message = createBaseLayout();
    message.ppgs = object.ppgs?.map((e) => Layout_PPG.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLayout_PPG(): Layout_PPG {
  return {
    name: "",
    activePowerVgmSelection: undefined,
    reactivePowerVgmSelection: undefined,
    voltageVgmSelection: undefined,
    frequencyVgmSelection: undefined,
    id: 0,
  };
}

export const Layout_PPG = {
  fromJSON(object: any): Layout_PPG {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      activePowerVgmSelection: isSet(object.activePowerVgmSelection)
        ? Layout_PPG_VGMSelection.fromJSON(object.activePowerVgmSelection)
        : undefined,
      reactivePowerVgmSelection: isSet(object.reactivePowerVgmSelection)
        ? Layout_PPG_VGMSelection.fromJSON(object.reactivePowerVgmSelection)
        : undefined,
      voltageVgmSelection: isSet(object.voltageVgmSelection)
        ? Layout_PPG_VGMSelection.fromJSON(object.voltageVgmSelection)
        : undefined,
      frequencyVgmSelection: isSet(object.frequencyVgmSelection)
        ? Layout_PPG_VGMSelection.fromJSON(object.frequencyVgmSelection)
        : undefined,
      id: isSet(object.id) ? gt.Number(object.id) : 0,
    };
  },

  toJSON(message: Layout_PPG): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.activePowerVgmSelection !== undefined) {
      obj.activePowerVgmSelection = Layout_PPG_VGMSelection.toJSON(message.activePowerVgmSelection);
    }
    if (message.reactivePowerVgmSelection !== undefined) {
      obj.reactivePowerVgmSelection = Layout_PPG_VGMSelection.toJSON(message.reactivePowerVgmSelection);
    }
    if (message.voltageVgmSelection !== undefined) {
      obj.voltageVgmSelection = Layout_PPG_VGMSelection.toJSON(message.voltageVgmSelection);
    }
    if (message.frequencyVgmSelection !== undefined) {
      obj.frequencyVgmSelection = Layout_PPG_VGMSelection.toJSON(message.frequencyVgmSelection);
    }
    if (message.id !== undefined && message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Layout_PPG>, I>>(base?: I): Layout_PPG {
    return Layout_PPG.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Layout_PPG>, I>>(object: I): Layout_PPG {
    const message = createBaseLayout_PPG();
    message.name = object.name ?? "";
    message.activePowerVgmSelection =
      (object.activePowerVgmSelection !== undefined && object.activePowerVgmSelection !== null)
        ? Layout_PPG_VGMSelection.fromPartial(object.activePowerVgmSelection)
        : undefined;
    message.reactivePowerVgmSelection =
      (object.reactivePowerVgmSelection !== undefined && object.reactivePowerVgmSelection !== null)
        ? Layout_PPG_VGMSelection.fromPartial(object.reactivePowerVgmSelection)
        : undefined;
    message.voltageVgmSelection = (object.voltageVgmSelection !== undefined && object.voltageVgmSelection !== null)
      ? Layout_PPG_VGMSelection.fromPartial(object.voltageVgmSelection)
      : undefined;
    message.frequencyVgmSelection =
      (object.frequencyVgmSelection !== undefined && object.frequencyVgmSelection !== null)
        ? Layout_PPG_VGMSelection.fromPartial(object.frequencyVgmSelection)
        : undefined;
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseLayout_PPG_VGMSelection(): Layout_PPG_VGMSelection {
  return { defaultVgm: undefined, alternateVgm: undefined };
}

export const Layout_PPG_VGMSelection = {
  fromJSON(object: any): Layout_PPG_VGMSelection {
    return {
      defaultVgm: isSet(object.defaultVgm) ? Layout_PPG_VGMSelection_VGM.fromJSON(object.defaultVgm) : undefined,
      alternateVgm: isSet(object.alternateVgm) ? Layout_PPG_VGMSelection_VGM.fromJSON(object.alternateVgm) : undefined,
    };
  },

  toJSON(message: Layout_PPG_VGMSelection): unknown {
    const obj: any = {};
    if (message.defaultVgm !== undefined) {
      obj.defaultVgm = Layout_PPG_VGMSelection_VGM.toJSON(message.defaultVgm);
    }
    if (message.alternateVgm !== undefined) {
      obj.alternateVgm = Layout_PPG_VGMSelection_VGM.toJSON(message.alternateVgm);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Layout_PPG_VGMSelection>, I>>(base?: I): Layout_PPG_VGMSelection {
    return Layout_PPG_VGMSelection.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Layout_PPG_VGMSelection>, I>>(object: I): Layout_PPG_VGMSelection {
    const message = createBaseLayout_PPG_VGMSelection();
    message.defaultVgm = (object.defaultVgm !== undefined && object.defaultVgm !== null)
      ? Layout_PPG_VGMSelection_VGM.fromPartial(object.defaultVgm)
      : undefined;
    message.alternateVgm = (object.alternateVgm !== undefined && object.alternateVgm !== null)
      ? Layout_PPG_VGMSelection_VGM.fromPartial(object.alternateVgm)
      : undefined;
    return message;
  },
};

function createBaseLayout_PPG_VGMSelection_VGM(): Layout_PPG_VGMSelection_VGM {
  return { name: "", voltageSourceRgmName: "", rgms: [] };
}

export const Layout_PPG_VGMSelection_VGM = {
  fromJSON(object: any): Layout_PPG_VGMSelection_VGM {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      voltageSourceRgmName: isSet(object.voltageSourceRgmName) ? gt.String(object.voltageSourceRgmName) : "",
      rgms: gt.Array.isArray(object?.rgms)
        ? object.rgms.map((e: any) => Layout_PPG_VGMSelection_VGM_RGM.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Layout_PPG_VGMSelection_VGM): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.voltageSourceRgmName !== undefined && message.voltageSourceRgmName !== "") {
      obj.voltageSourceRgmName = message.voltageSourceRgmName;
    }
    if (message.rgms?.length) {
      obj.rgms = message.rgms.map((e) => Layout_PPG_VGMSelection_VGM_RGM.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Layout_PPG_VGMSelection_VGM>, I>>(base?: I): Layout_PPG_VGMSelection_VGM {
    return Layout_PPG_VGMSelection_VGM.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Layout_PPG_VGMSelection_VGM>, I>>(object: I): Layout_PPG_VGMSelection_VGM {
    const message = createBaseLayout_PPG_VGMSelection_VGM();
    message.name = object.name ?? "";
    message.voltageSourceRgmName = object.voltageSourceRgmName ?? "";
    message.rgms = object.rgms?.map((e) => Layout_PPG_VGMSelection_VGM_RGM.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLayout_PPG_VGMSelection_VGM_RGM(): Layout_PPG_VGMSelection_VGM_RGM {
  return { operation: Layout_PPG_VGMSelection_VGM_RGM_OperationType.ADD, name: "", pgms: [] };
}

export const Layout_PPG_VGMSelection_VGM_RGM = {
  fromJSON(object: any): Layout_PPG_VGMSelection_VGM_RGM {
    return {
      operation: isSet(object.operation)
        ? layout_PPG_VGMSelection_VGM_RGM_OperationTypeFromJSON(object.operation)
        : Layout_PPG_VGMSelection_VGM_RGM_OperationType.ADD,
      name: isSet(object.name) ? gt.String(object.name) : "",
      pgms: gt.Array.isArray(object?.pgms)
        ? object.pgms.map((e: any) => Layout_PPG_VGMSelection_VGM_RGM_PGM.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Layout_PPG_VGMSelection_VGM_RGM): unknown {
    const obj: any = {};
    if (message.operation !== undefined && message.operation !== Layout_PPG_VGMSelection_VGM_RGM_OperationType.ADD) {
      obj.operation = layout_PPG_VGMSelection_VGM_RGM_OperationTypeToJSON(message.operation);
    }
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.pgms?.length) {
      obj.pgms = message.pgms.map((e) => Layout_PPG_VGMSelection_VGM_RGM_PGM.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Layout_PPG_VGMSelection_VGM_RGM>, I>>(base?: I): Layout_PPG_VGMSelection_VGM_RGM {
    return Layout_PPG_VGMSelection_VGM_RGM.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Layout_PPG_VGMSelection_VGM_RGM>, I>>(
    object: I,
  ): Layout_PPG_VGMSelection_VGM_RGM {
    const message = createBaseLayout_PPG_VGMSelection_VGM_RGM();
    message.operation = object.operation ?? Layout_PPG_VGMSelection_VGM_RGM_OperationType.ADD;
    message.name = object.name ?? "";
    message.pgms = object.pgms?.map((e) => Layout_PPG_VGMSelection_VGM_RGM_PGM.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLayout_PPG_VGMSelection_VGM_RGM_PGM(): Layout_PPG_VGMSelection_VGM_RGM_PGM {
  return { name: "" };
}

export const Layout_PPG_VGMSelection_VGM_RGM_PGM = {
  fromJSON(object: any): Layout_PPG_VGMSelection_VGM_RGM_PGM {
    return { name: isSet(object.name) ? gt.String(object.name) : "" };
  },

  toJSON(message: Layout_PPG_VGMSelection_VGM_RGM_PGM): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Layout_PPG_VGMSelection_VGM_RGM_PGM>, I>>(
    base?: I,
  ): Layout_PPG_VGMSelection_VGM_RGM_PGM {
    return Layout_PPG_VGMSelection_VGM_RGM_PGM.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Layout_PPG_VGMSelection_VGM_RGM_PGM>, I>>(
    object: I,
  ): Layout_PPG_VGMSelection_VGM_RGM_PGM {
    const message = createBaseLayout_PPG_VGMSelection_VGM_RGM_PGM();
    message.name = object.name ?? "";
    return message;
  },
};

function createBasePpgReply(): PpgReply {
  return {
    name: "",
    communicationId: 0,
    reactivePowerBalancingOffset: 0,
    reactivePowerBalancingWeight: 0,
    reactivePowerBalancingOutput: 0,
    activePower: undefined,
    reactivePower: undefined,
    topologySelection: "",
  };
}

export const PpgReply = {
  fromJSON(object: any): PpgReply {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      communicationId: isSet(object.communicationId) ? gt.Number(object.communicationId) : 0,
      reactivePowerBalancingOffset: isSet(object.reactivePowerBalancingOffset)
        ? gt.Number(object.reactivePowerBalancingOffset)
        : 0,
      reactivePowerBalancingWeight: isSet(object.reactivePowerBalancingWeight)
        ? gt.Number(object.reactivePowerBalancingWeight)
        : 0,
      reactivePowerBalancingOutput: isSet(object.reactivePowerBalancingOutput)
        ? gt.Number(object.reactivePowerBalancingOutput)
        : 0,
      activePower: isSet(object.activePower) ? PlantControllerPPGInfo.fromJSON(object.activePower) : undefined,
      reactivePower: isSet(object.reactivePower) ? PlantControllerPPGInfo.fromJSON(object.reactivePower) : undefined,
      topologySelection: isSet(object.topologySelection) ? gt.String(object.topologySelection) : "",
    };
  },

  toJSON(message: PpgReply): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.communicationId !== undefined && message.communicationId !== 0) {
      obj.communicationId = Math.round(message.communicationId);
    }
    if (message.reactivePowerBalancingOffset !== undefined && message.reactivePowerBalancingOffset !== 0) {
      obj.reactivePowerBalancingOffset = message.reactivePowerBalancingOffset;
    }
    if (message.reactivePowerBalancingWeight !== undefined && message.reactivePowerBalancingWeight !== 0) {
      obj.reactivePowerBalancingWeight = message.reactivePowerBalancingWeight;
    }
    if (message.reactivePowerBalancingOutput !== undefined && message.reactivePowerBalancingOutput !== 0) {
      obj.reactivePowerBalancingOutput = message.reactivePowerBalancingOutput;
    }
    if (message.activePower !== undefined) {
      obj.activePower = PlantControllerPPGInfo.toJSON(message.activePower);
    }
    if (message.reactivePower !== undefined) {
      obj.reactivePower = PlantControllerPPGInfo.toJSON(message.reactivePower);
    }
    if (message.topologySelection !== undefined && message.topologySelection !== "") {
      obj.topologySelection = message.topologySelection;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PpgReply>, I>>(base?: I): PpgReply {
    return PpgReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PpgReply>, I>>(object: I): PpgReply {
    const message = createBasePpgReply();
    message.name = object.name ?? "";
    message.communicationId = object.communicationId ?? 0;
    message.reactivePowerBalancingOffset = object.reactivePowerBalancingOffset ?? 0;
    message.reactivePowerBalancingWeight = object.reactivePowerBalancingWeight ?? 0;
    message.reactivePowerBalancingOutput = object.reactivePowerBalancingOutput ?? 0;
    message.activePower = (object.activePower !== undefined && object.activePower !== null)
      ? PlantControllerPPGInfo.fromPartial(object.activePower)
      : undefined;
    message.reactivePower = (object.reactivePower !== undefined && object.reactivePower !== null)
      ? PlantControllerPPGInfo.fromPartial(object.reactivePower)
      : undefined;
    message.topologySelection = object.topologySelection ?? "";
    return message;
  },
};

function createBasePpgSetupResponse(): PpgSetupResponse {
  return { failedNames: [], succesNames: [] };
}

export const PpgSetupResponse = {
  fromJSON(object: any): PpgSetupResponse {
    return {
      failedNames: gt.Array.isArray(object?.failedNames) ? object.failedNames.map((e: any) => gt.String(e)) : [],
      succesNames: gt.Array.isArray(object?.succesNames) ? object.succesNames.map((e: any) => gt.String(e)) : [],
    };
  },

  toJSON(message: PpgSetupResponse): unknown {
    const obj: any = {};
    if (message.failedNames?.length) {
      obj.failedNames = message.failedNames;
    }
    if (message.succesNames?.length) {
      obj.succesNames = message.succesNames;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PpgSetupResponse>, I>>(base?: I): PpgSetupResponse {
    return PpgSetupResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PpgSetupResponse>, I>>(object: I): PpgSetupResponse {
    const message = createBasePpgSetupResponse();
    message.failedNames = object.failedNames?.map((e) => e) || [];
    message.succesNames = object.succesNames?.map((e) => e) || [];
    return message;
  },
};

function createBasePlantControllerPPGInfo(): PlantControllerPPGInfo {
  return {
    controllerType: "",
    mode: "",
    unit: "",
    measured: 0,
    reference: 0,
    referenceType: "",
    generatorsInScope: 0,
    state: PlantControllerPPGInfo_PPGState.disabled,
    accuracy: 0,
    unitPU: "",
    measuredPU: 0,
    accuracyPU: 0,
  };
}

export const PlantControllerPPGInfo = {
  fromJSON(object: any): PlantControllerPPGInfo {
    return {
      controllerType: isSet(object.controllerType) ? gt.String(object.controllerType) : "",
      mode: isSet(object.mode) ? gt.String(object.mode) : "",
      unit: isSet(object.unit) ? gt.String(object.unit) : "",
      measured: isSet(object.measured) ? gt.Number(object.measured) : 0,
      reference: isSet(object.reference) ? gt.Number(object.reference) : 0,
      referenceType: isSet(object.referenceType) ? gt.String(object.referenceType) : "",
      generatorsInScope: isSet(object.generatorsInScope) ? gt.Number(object.generatorsInScope) : 0,
      state: isSet(object.state)
        ? plantControllerPPGInfo_PPGStateFromJSON(object.state)
        : PlantControllerPPGInfo_PPGState.disabled,
      accuracy: isSet(object.accuracy) ? gt.Number(object.accuracy) : 0,
      unitPU: isSet(object.unitPU) ? gt.String(object.unitPU) : "",
      measuredPU: isSet(object.measuredPU) ? gt.Number(object.measuredPU) : 0,
      accuracyPU: isSet(object.accuracyPU) ? gt.Number(object.accuracyPU) : 0,
    };
  },

  toJSON(message: PlantControllerPPGInfo): unknown {
    const obj: any = {};
    if (message.controllerType !== undefined && message.controllerType !== "") {
      obj.controllerType = message.controllerType;
    }
    if (message.mode !== undefined && message.mode !== "") {
      obj.mode = message.mode;
    }
    if (message.unit !== undefined && message.unit !== "") {
      obj.unit = message.unit;
    }
    if (message.measured !== undefined && message.measured !== 0) {
      obj.measured = message.measured;
    }
    if (message.reference !== undefined && message.reference !== 0) {
      obj.reference = message.reference;
    }
    if (message.referenceType !== undefined && message.referenceType !== "") {
      obj.referenceType = message.referenceType;
    }
    if (message.generatorsInScope !== undefined && message.generatorsInScope !== 0) {
      obj.generatorsInScope = Math.round(message.generatorsInScope);
    }
    if (message.state !== PlantControllerPPGInfo_PPGState.disabled) {
      obj.state = plantControllerPPGInfo_PPGStateToJSON(message.state);
    }
    if (message.accuracy !== undefined && message.accuracy !== 0) {
      obj.accuracy = message.accuracy;
    }
    if (message.unitPU !== undefined && message.unitPU !== "") {
      obj.unitPU = message.unitPU;
    }
    if (message.measuredPU !== undefined && message.measuredPU !== 0) {
      obj.measuredPU = message.measuredPU;
    }
    if (message.accuracyPU !== undefined && message.accuracyPU !== 0) {
      obj.accuracyPU = message.accuracyPU;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlantControllerPPGInfo>, I>>(base?: I): PlantControllerPPGInfo {
    return PlantControllerPPGInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlantControllerPPGInfo>, I>>(object: I): PlantControllerPPGInfo {
    const message = createBasePlantControllerPPGInfo();
    message.controllerType = object.controllerType ?? "";
    message.mode = object.mode ?? "";
    message.unit = object.unit ?? "";
    message.measured = object.measured ?? 0;
    message.reference = object.reference ?? 0;
    message.referenceType = object.referenceType ?? "";
    message.generatorsInScope = object.generatorsInScope ?? 0;
    message.state = object.state ?? PlantControllerPPGInfo_PPGState.disabled;
    message.accuracy = object.accuracy ?? 0;
    message.unitPU = object.unitPU ?? "";
    message.measuredPU = object.measuredPU ?? 0;
    message.accuracyPU = object.accuracyPU ?? 0;
    return message;
  },
};

function createBasePlcApplication(): PlcApplication {
  return { name: "", taskInformations: [] };
}

export const PlcApplication = {
  fromJSON(object: any): PlcApplication {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      taskInformations: gt.Array.isArray(object?.taskInformations)
        ? object.taskInformations.map((e: any) => TaskInformation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PlcApplication): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.taskInformations?.length) {
      obj.taskInformations = message.taskInformations.map((e) => TaskInformation.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlcApplication>, I>>(base?: I): PlcApplication {
    return PlcApplication.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlcApplication>, I>>(object: I): PlcApplication {
    const message = createBasePlcApplication();
    message.name = object.name ?? "";
    message.taskInformations = object.taskInformations?.map((e) => TaskInformation.fromPartial(e)) || [];
    return message;
  },
};

function createBasePlcStatisticsSample(): PlcStatisticsSample {
  return { sampleTime: undefined, plcApplications: [] };
}

export const PlcStatisticsSample = {
  fromJSON(object: any): PlcStatisticsSample {
    return {
      sampleTime: isSet(object.sampleTime) ? fromJsonTimestamp(object.sampleTime) : undefined,
      plcApplications: gt.Array.isArray(object?.plcApplications)
        ? object.plcApplications.map((e: any) => PlcApplication.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PlcStatisticsSample): unknown {
    const obj: any = {};
    if (message.sampleTime !== undefined) {
      obj.sampleTime = message.sampleTime.toISOString();
    }
    if (message.plcApplications?.length) {
      obj.plcApplications = message.plcApplications.map((e) => PlcApplication.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlcStatisticsSample>, I>>(base?: I): PlcStatisticsSample {
    return PlcStatisticsSample.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PlcStatisticsSample>, I>>(object: I): PlcStatisticsSample {
    const message = createBasePlcStatisticsSample();
    message.sampleTime = object.sampleTime ?? undefined;
    message.plcApplications = object.plcApplications?.map((e) => PlcApplication.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRedundant(): Redundant {
  return { activePGM: "", failedGmsCount: 0, disabledGmsCount: 0, redundancyState: "" };
}

export const Redundant = {
  fromJSON(object: any): Redundant {
    return {
      activePGM: isSet(object.activePGM) ? gt.String(object.activePGM) : "",
      failedGmsCount: isSet(object.failedGmsCount) ? gt.Number(object.failedGmsCount) : 0,
      disabledGmsCount: isSet(object.disabledGmsCount) ? gt.Number(object.disabledGmsCount) : 0,
      redundancyState: isSet(object.redundancyState) ? gt.String(object.redundancyState) : "",
    };
  },

  toJSON(message: Redundant): unknown {
    const obj: any = {};
    if (message.activePGM !== undefined && message.activePGM !== "") {
      obj.activePGM = message.activePGM;
    }
    if (message.failedGmsCount !== undefined && message.failedGmsCount !== 0) {
      obj.failedGmsCount = Math.round(message.failedGmsCount);
    }
    if (message.disabledGmsCount !== undefined && message.disabledGmsCount !== 0) {
      obj.disabledGmsCount = Math.round(message.disabledGmsCount);
    }
    if (message.redundancyState !== undefined && message.redundancyState !== "") {
      obj.redundancyState = message.redundancyState;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Redundant>, I>>(base?: I): Redundant {
    return Redundant.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Redundant>, I>>(object: I): Redundant {
    const message = createBaseRedundant();
    message.activePGM = object.activePGM ?? "";
    message.failedGmsCount = object.failedGmsCount ?? 0;
    message.disabledGmsCount = object.disabledGmsCount ?? 0;
    message.redundancyState = object.redundancyState ?? "";
    return message;
  },
};

function createBaseReferenceLog(): ReferenceLog {
  return { timeStamp: undefined, user: "", parameter: "", newValue: 0, controller: "", source: 0, groupName: "" };
}

export const ReferenceLog = {
  fromJSON(object: any): ReferenceLog {
    return {
      timeStamp: isSet(object.timeStamp) ? fromJsonTimestamp(object.timeStamp) : undefined,
      user: isSet(object.user) ? gt.String(object.user) : "",
      parameter: isSet(object.parameter) ? gt.String(object.parameter) : "",
      newValue: isSet(object.newValue) ? gt.Number(object.newValue) : 0,
      controller: isSet(object.controller) ? gt.String(object.controller) : "",
      source: isSet(object.source) ? gt.Number(object.source) : 0,
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
    };
  },

  toJSON(message: ReferenceLog): unknown {
    const obj: any = {};
    if (message.timeStamp !== undefined) {
      obj.timeStamp = message.timeStamp.toISOString();
    }
    if (message.user !== undefined && message.user !== "") {
      obj.user = message.user;
    }
    if (message.parameter !== undefined && message.parameter !== "") {
      obj.parameter = message.parameter;
    }
    if (message.newValue !== undefined && message.newValue !== 0) {
      obj.newValue = message.newValue;
    }
    if (message.controller !== undefined && message.controller !== "") {
      obj.controller = message.controller;
    }
    if (message.source !== undefined && message.source !== 0) {
      obj.source = message.source;
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReferenceLog>, I>>(base?: I): ReferenceLog {
    return ReferenceLog.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReferenceLog>, I>>(object: I): ReferenceLog {
    const message = createBaseReferenceLog();
    message.timeStamp = object.timeStamp ?? undefined;
    message.user = object.user ?? "";
    message.parameter = object.parameter ?? "";
    message.newValue = object.newValue ?? 0;
    message.controller = object.controller ?? "";
    message.source = object.source ?? 0;
    message.groupName = object.groupName ?? "";
    return message;
  },
};

function createBaseReferences(): References {
  return { voltageReferencePU: 0, voltageReference: 0, reactiveReference: 0 };
}

export const References = {
  fromJSON(object: any): References {
    return {
      voltageReferencePU: isSet(object.voltageReferencePU) ? gt.Number(object.voltageReferencePU) : 0,
      voltageReference: isSet(object.voltageReference) ? gt.Number(object.voltageReference) : 0,
      reactiveReference: isSet(object.reactiveReference) ? gt.Number(object.reactiveReference) : 0,
    };
  },

  toJSON(message: References): unknown {
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
    return obj;
  },

  create<I extends Exact<DeepPartial<References>, I>>(base?: I): References {
    return References.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<References>, I>>(object: I): References {
    const message = createBaseReferences();
    message.voltageReferencePU = object.voltageReferencePU ?? 0;
    message.voltageReference = object.voltageReference ?? 0;
    message.reactiveReference = object.reactiveReference ?? 0;
    return message;
  },
};

function createBaseSetGeneratorSetupReply(): SetGeneratorSetupReply {
  return { failedNames: [], successNames: [] };
}

export const SetGeneratorSetupReply = {
  fromJSON(object: any): SetGeneratorSetupReply {
    return {
      failedNames: gt.Array.isArray(object?.failedNames) ? object.failedNames.map((e: any) => gt.String(e)) : [],
      successNames: gt.Array.isArray(object?.successNames) ? object.successNames.map((e: any) => gt.String(e)) : [],
    };
  },

  toJSON(message: SetGeneratorSetupReply): unknown {
    const obj: any = {};
    if (message.failedNames?.length) {
      obj.failedNames = message.failedNames;
    }
    if (message.successNames?.length) {
      obj.successNames = message.successNames;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetGeneratorSetupReply>, I>>(base?: I): SetGeneratorSetupReply {
    return SetGeneratorSetupReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetGeneratorSetupReply>, I>>(object: I): SetGeneratorSetupReply {
    const message = createBaseSetGeneratorSetupReply();
    message.failedNames = object.failedNames?.map((e) => e) || [];
    message.successNames = object.successNames?.map((e) => e) || [];
    return message;
  },
};

function createBaseSetPointDaily(): SetPointDaily {
  return { value: 0, user: "", groupName: "", timeOfDay: "", parameter: "" };
}

export const SetPointDaily = {
  fromJSON(object: any): SetPointDaily {
    return {
      value: isSet(object.value) ? gt.Number(object.value) : 0,
      user: isSet(object.user) ? gt.String(object.user) : "",
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      timeOfDay: isSet(object.timeOfDay) ? gt.String(object.timeOfDay) : "",
      parameter: isSet(object.parameter) ? gt.String(object.parameter) : "",
    };
  },

  toJSON(message: SetPointDaily): unknown {
    const obj: any = {};
    if (message.value !== undefined && message.value !== 0) {
      obj.value = message.value;
    }
    if (message.user !== undefined && message.user !== "") {
      obj.user = message.user;
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.timeOfDay !== "") {
      obj.timeOfDay = message.timeOfDay;
    }
    if (message.parameter !== undefined && message.parameter !== "") {
      obj.parameter = message.parameter;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetPointDaily>, I>>(base?: I): SetPointDaily {
    return SetPointDaily.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetPointDaily>, I>>(object: I): SetPointDaily {
    const message = createBaseSetPointDaily();
    message.value = object.value ?? 0;
    message.user = object.user ?? "";
    message.groupName = object.groupName ?? "";
    message.timeOfDay = object.timeOfDay ?? "";
    message.parameter = object.parameter ?? "";
    return message;
  },
};

function createBaseSetPointWeekly(): SetPointWeekly {
  return { value: 0, user: "", groupName: "", timeOfDay: "", day: 0, parameter: "" };
}

export const SetPointWeekly = {
  fromJSON(object: any): SetPointWeekly {
    return {
      value: isSet(object.value) ? gt.Number(object.value) : 0,
      user: isSet(object.user) ? gt.String(object.user) : "",
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      timeOfDay: isSet(object.timeOfDay) ? gt.String(object.timeOfDay) : "",
      day: isSet(object.day) ? gt.Number(object.day) : 0,
      parameter: isSet(object.parameter) ? gt.String(object.parameter) : "",
    };
  },

  toJSON(message: SetPointWeekly): unknown {
    const obj: any = {};
    if (message.value !== undefined && message.value !== 0) {
      obj.value = message.value;
    }
    if (message.user !== undefined && message.user !== "") {
      obj.user = message.user;
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.timeOfDay !== "") {
      obj.timeOfDay = message.timeOfDay;
    }
    if (message.day !== undefined && message.day !== 0) {
      obj.day = Math.round(message.day);
    }
    if (message.parameter !== undefined && message.parameter !== "") {
      obj.parameter = message.parameter;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetPointWeekly>, I>>(base?: I): SetPointWeekly {
    return SetPointWeekly.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetPointWeekly>, I>>(object: I): SetPointWeekly {
    const message = createBaseSetPointWeekly();
    message.value = object.value ?? 0;
    message.user = object.user ?? "";
    message.groupName = object.groupName ?? "";
    message.timeOfDay = object.timeOfDay ?? "";
    message.day = object.day ?? 0;
    message.parameter = object.parameter ?? "";
    return message;
  },
};

function createBaseSetPointSchedule(): SetPointSchedule {
  return { value: 0, user: "", groupName: "", timeStamp: undefined, setpointSource: "", parameter: "" };
}

export const SetPointSchedule = {
  fromJSON(object: any): SetPointSchedule {
    return {
      value: isSet(object.value) ? gt.Number(object.value) : 0,
      user: isSet(object.user) ? gt.String(object.user) : "",
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      timeStamp: isSet(object.timeStamp) ? fromJsonTimestamp(object.timeStamp) : undefined,
      setpointSource: isSet(object.setpointSource) ? gt.String(object.setpointSource) : "",
      parameter: isSet(object.parameter) ? gt.String(object.parameter) : "",
    };
  },

  toJSON(message: SetPointSchedule): unknown {
    const obj: any = {};
    if (message.value !== undefined && message.value !== 0) {
      obj.value = message.value;
    }
    if (message.user !== undefined && message.user !== "") {
      obj.user = message.user;
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.timeStamp !== undefined) {
      obj.timeStamp = message.timeStamp.toISOString();
    }
    if (message.setpointSource !== "") {
      obj.setpointSource = message.setpointSource;
    }
    if (message.parameter !== undefined && message.parameter !== "") {
      obj.parameter = message.parameter;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetPointSchedule>, I>>(base?: I): SetPointSchedule {
    return SetPointSchedule.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetPointSchedule>, I>>(object: I): SetPointSchedule {
    const message = createBaseSetPointSchedule();
    message.value = object.value ?? 0;
    message.user = object.user ?? "";
    message.groupName = object.groupName ?? "";
    message.timeStamp = object.timeStamp ?? undefined;
    message.setpointSource = object.setpointSource ?? "";
    message.parameter = object.parameter ?? "";
    return message;
  },
};

function createBaseDailySetpointGroup(): DailySetpointGroup {
  return { parameter: "", setPoints: [] };
}

export const DailySetpointGroup = {
  fromJSON(object: any): DailySetpointGroup {
    return {
      parameter: isSet(object.parameter) ? gt.String(object.parameter) : "",
      setPoints: gt.Array.isArray(object?.setPoints) ? object.setPoints.map((e: any) => SetPointDaily.fromJSON(e)) : [],
    };
  },

  toJSON(message: DailySetpointGroup): unknown {
    const obj: any = {};
    if (message.parameter !== undefined && message.parameter !== "") {
      obj.parameter = message.parameter;
    }
    if (message.setPoints?.length) {
      obj.setPoints = message.setPoints.map((e) => SetPointDaily.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DailySetpointGroup>, I>>(base?: I): DailySetpointGroup {
    return DailySetpointGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DailySetpointGroup>, I>>(object: I): DailySetpointGroup {
    const message = createBaseDailySetpointGroup();
    message.parameter = object.parameter ?? "";
    message.setPoints = object.setPoints?.map((e) => SetPointDaily.fromPartial(e)) || [];
    return message;
  },
};

function createBaseWeeklySetpointGroup(): WeeklySetpointGroup {
  return { parameter: "", setPoints: [] };
}

export const WeeklySetpointGroup = {
  fromJSON(object: any): WeeklySetpointGroup {
    return {
      parameter: isSet(object.parameter) ? gt.String(object.parameter) : "",
      setPoints: gt.Array.isArray(object?.setPoints)
        ? object.setPoints.map((e: any) => SetPointWeekly.fromJSON(e))
        : [],
    };
  },

  toJSON(message: WeeklySetpointGroup): unknown {
    const obj: any = {};
    if (message.parameter !== undefined && message.parameter !== "") {
      obj.parameter = message.parameter;
    }
    if (message.setPoints?.length) {
      obj.setPoints = message.setPoints.map((e) => SetPointWeekly.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WeeklySetpointGroup>, I>>(base?: I): WeeklySetpointGroup {
    return WeeklySetpointGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<WeeklySetpointGroup>, I>>(object: I): WeeklySetpointGroup {
    const message = createBaseWeeklySetpointGroup();
    message.parameter = object.parameter ?? "";
    message.setPoints = object.setPoints?.map((e) => SetPointWeekly.fromPartial(e)) || [];
    return message;
  },
};

function createBaseScheduleSetpointGroup(): ScheduleSetpointGroup {
  return { parameter: "", setPoints: [] };
}

export const ScheduleSetpointGroup = {
  fromJSON(object: any): ScheduleSetpointGroup {
    return {
      parameter: isSet(object.parameter) ? gt.String(object.parameter) : "",
      setPoints: gt.Array.isArray(object?.setPoints)
        ? object.setPoints.map((e: any) => SetPointSchedule.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ScheduleSetpointGroup): unknown {
    const obj: any = {};
    if (message.parameter !== undefined && message.parameter !== "") {
      obj.parameter = message.parameter;
    }
    if (message.setPoints?.length) {
      obj.setPoints = message.setPoints.map((e) => SetPointSchedule.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ScheduleSetpointGroup>, I>>(base?: I): ScheduleSetpointGroup {
    return ScheduleSetpointGroup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ScheduleSetpointGroup>, I>>(object: I): ScheduleSetpointGroup {
    const message = createBaseScheduleSetpointGroup();
    message.parameter = object.parameter ?? "";
    message.setPoints = object.setPoints?.map((e) => SetPointSchedule.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSetPoints(): SetPoints {
  return { scheduleSetpointGroups: [], weeklySetpointGroups: [], dailySetpointGroups: [] };
}

export const SetPoints = {
  fromJSON(object: any): SetPoints {
    return {
      scheduleSetpointGroups: gt.Array.isArray(object?.scheduleSetpointGroups)
        ? object.scheduleSetpointGroups.map((e: any) => ScheduleSetpointGroup.fromJSON(e))
        : [],
      weeklySetpointGroups: gt.Array.isArray(object?.weeklySetpointGroups)
        ? object.weeklySetpointGroups.map((e: any) => WeeklySetpointGroup.fromJSON(e))
        : [],
      dailySetpointGroups: gt.Array.isArray(object?.dailySetpointGroups)
        ? object.dailySetpointGroups.map((e: any) => DailySetpointGroup.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SetPoints): unknown {
    const obj: any = {};
    if (message.scheduleSetpointGroups?.length) {
      obj.scheduleSetpointGroups = message.scheduleSetpointGroups.map((e) => ScheduleSetpointGroup.toJSON(e));
    }
    if (message.weeklySetpointGroups?.length) {
      obj.weeklySetpointGroups = message.weeklySetpointGroups.map((e) => WeeklySetpointGroup.toJSON(e));
    }
    if (message.dailySetpointGroups?.length) {
      obj.dailySetpointGroups = message.dailySetpointGroups.map((e) => DailySetpointGroup.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetPoints>, I>>(base?: I): SetPoints {
    return SetPoints.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetPoints>, I>>(object: I): SetPoints {
    const message = createBaseSetPoints();
    message.scheduleSetpointGroups = object.scheduleSetpointGroups?.map((e) => ScheduleSetpointGroup.fromPartial(e)) ||
      [];
    message.weeklySetpointGroups = object.weeklySetpointGroups?.map((e) => WeeklySetpointGroup.fromPartial(e)) || [];
    message.dailySetpointGroups = object.dailySetpointGroups?.map((e) => DailySetpointGroup.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSingleLineModel(): SingleLineModel {
  return { wires: [], nodes: [], measurementWires: [] };
}

export const SingleLineModel = {
  fromJSON(object: any): SingleLineModel {
    return {
      wires: gt.Array.isArray(object?.wires) ? object.wires.map((e: any) => SingleLineModel_Wire.fromJSON(e)) : [],
      nodes: gt.Array.isArray(object?.nodes) ? object.nodes.map((e: any) => SingleLineModel_Node.fromJSON(e)) : [],
      measurementWires: gt.Array.isArray(object?.measurementWires)
        ? object.measurementWires.map((e: any) => SingleLineModel_Wire.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SingleLineModel): unknown {
    const obj: any = {};
    if (message.wires?.length) {
      obj.wires = message.wires.map((e) => SingleLineModel_Wire.toJSON(e));
    }
    if (message.nodes?.length) {
      obj.nodes = message.nodes.map((e) => SingleLineModel_Node.toJSON(e));
    }
    if (message.measurementWires?.length) {
      obj.measurementWires = message.measurementWires.map((e) => SingleLineModel_Wire.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SingleLineModel>, I>>(base?: I): SingleLineModel {
    return SingleLineModel.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SingleLineModel>, I>>(object: I): SingleLineModel {
    const message = createBaseSingleLineModel();
    message.wires = object.wires?.map((e) => SingleLineModel_Wire.fromPartial(e)) || [];
    message.nodes = object.nodes?.map((e) => SingleLineModel_Node.fromPartial(e)) || [];
    message.measurementWires = object.measurementWires?.map((e) => SingleLineModel_Wire.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSingleLineModel_Wire(): SingleLineModel_Wire {
  return { to: "", from: "", breaker: undefined, activePowerLimit: undefined };
}

export const SingleLineModel_Wire = {
  fromJSON(object: any): SingleLineModel_Wire {
    return {
      to: isSet(object.to) ? gt.String(object.to) : "",
      from: isSet(object.from) ? gt.String(object.from) : "",
      breaker: isSet(object.breaker) ? SingleLineModel_Wire_Breaker.fromJSON(object.breaker) : undefined,
      activePowerLimit: isSet(object.activePowerLimit)
        ? SingleLineModel_Wire_ActivePowerLimit.fromJSON(object.activePowerLimit)
        : undefined,
    };
  },

  toJSON(message: SingleLineModel_Wire): unknown {
    const obj: any = {};
    if (message.to !== undefined && message.to !== "") {
      obj.to = message.to;
    }
    if (message.from !== undefined && message.from !== "") {
      obj.from = message.from;
    }
    if (message.breaker !== undefined) {
      obj.breaker = SingleLineModel_Wire_Breaker.toJSON(message.breaker);
    }
    if (message.activePowerLimit !== undefined) {
      obj.activePowerLimit = SingleLineModel_Wire_ActivePowerLimit.toJSON(message.activePowerLimit);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SingleLineModel_Wire>, I>>(base?: I): SingleLineModel_Wire {
    return SingleLineModel_Wire.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SingleLineModel_Wire>, I>>(object: I): SingleLineModel_Wire {
    const message = createBaseSingleLineModel_Wire();
    message.to = object.to ?? "";
    message.from = object.from ?? "";
    message.breaker = (object.breaker !== undefined && object.breaker !== null)
      ? SingleLineModel_Wire_Breaker.fromPartial(object.breaker)
      : undefined;
    message.activePowerLimit = (object.activePowerLimit !== undefined && object.activePowerLimit !== null)
      ? SingleLineModel_Wire_ActivePowerLimit.fromPartial(object.activePowerLimit)
      : undefined;
    return message;
  },
};

function createBaseSingleLineModel_Wire_Breaker(): SingleLineModel_Wire_Breaker {
  return { name: "", state: false, description: "" };
}

export const SingleLineModel_Wire_Breaker = {
  fromJSON(object: any): SingleLineModel_Wire_Breaker {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      state: isSet(object.state) ? gt.Boolean(object.state) : false,
      description: isSet(object.description) ? gt.String(object.description) : "",
    };
  },

  toJSON(message: SingleLineModel_Wire_Breaker): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.state !== undefined && message.state !== false) {
      obj.state = message.state;
    }
    if (message.description !== undefined && message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SingleLineModel_Wire_Breaker>, I>>(base?: I): SingleLineModel_Wire_Breaker {
    return SingleLineModel_Wire_Breaker.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SingleLineModel_Wire_Breaker>, I>>(object: I): SingleLineModel_Wire_Breaker {
    const message = createBaseSingleLineModel_Wire_Breaker();
    message.name = object.name ?? "";
    message.state = object.state ?? false;
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseSingleLineModel_Wire_ActivePowerLimit(): SingleLineModel_Wire_ActivePowerLimit {
  return { name: "", value: 0, minimum: "", maximum: "", description: "" };
}

export const SingleLineModel_Wire_ActivePowerLimit = {
  fromJSON(object: any): SingleLineModel_Wire_ActivePowerLimit {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      value: isSet(object.value) ? gt.Number(object.value) : 0,
      minimum: isSet(object.minimum) ? gt.String(object.minimum) : "",
      maximum: isSet(object.maximum) ? gt.String(object.maximum) : "",
      description: isSet(object.description) ? gt.String(object.description) : "",
    };
  },

  toJSON(message: SingleLineModel_Wire_ActivePowerLimit): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.value !== undefined && message.value !== 0) {
      obj.value = message.value;
    }
    if (message.minimum !== undefined && message.minimum !== "") {
      obj.minimum = message.minimum;
    }
    if (message.maximum !== undefined && message.maximum !== "") {
      obj.maximum = message.maximum;
    }
    if (message.description !== undefined && message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SingleLineModel_Wire_ActivePowerLimit>, I>>(
    base?: I,
  ): SingleLineModel_Wire_ActivePowerLimit {
    return SingleLineModel_Wire_ActivePowerLimit.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SingleLineModel_Wire_ActivePowerLimit>, I>>(
    object: I,
  ): SingleLineModel_Wire_ActivePowerLimit {
    const message = createBaseSingleLineModel_Wire_ActivePowerLimit();
    message.name = object.name ?? "";
    message.value = object.value ?? 0;
    message.minimum = object.minimum ?? "";
    message.maximum = object.maximum ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseSingleLineModel_Node(): SingleLineModel_Node {
  return { name: "", type: "", controllerName: "" };
}

export const SingleLineModel_Node = {
  fromJSON(object: any): SingleLineModel_Node {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      type: isSet(object.type) ? gt.String(object.type) : "",
      controllerName: isSet(object.controllerName) ? gt.String(object.controllerName) : "",
    };
  },

  toJSON(message: SingleLineModel_Node): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.type !== undefined && message.type !== "") {
      obj.type = message.type;
    }
    if (message.controllerName !== undefined && message.controllerName !== "") {
      obj.controllerName = message.controllerName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SingleLineModel_Node>, I>>(base?: I): SingleLineModel_Node {
    return SingleLineModel_Node.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SingleLineModel_Node>, I>>(object: I): SingleLineModel_Node {
    const message = createBaseSingleLineModel_Node();
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.controllerName = object.controllerName ?? "";
    return message;
  },
};

function createBaseStationSettings(): StationSettings {
  return { settingName: "", settingDataType: "", setupName: "", unit: "" };
}

export const StationSettings = {
  fromJSON(object: any): StationSettings {
    return {
      settingName: isSet(object.settingName) ? gt.String(object.settingName) : "",
      settingDataType: isSet(object.settingDataType) ? gt.String(object.settingDataType) : "",
      setupName: isSet(object.setupName) ? gt.String(object.setupName) : "",
      unit: isSet(object.unit) ? gt.String(object.unit) : "",
    };
  },

  toJSON(message: StationSettings): unknown {
    const obj: any = {};
    if (message.settingName !== "") {
      obj.settingName = message.settingName;
    }
    if (message.settingDataType !== "") {
      obj.settingDataType = message.settingDataType;
    }
    if (message.setupName !== "") {
      obj.setupName = message.setupName;
    }
    if (message.unit !== "") {
      obj.unit = message.unit;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StationSettings>, I>>(base?: I): StationSettings {
    return StationSettings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StationSettings>, I>>(object: I): StationSettings {
    const message = createBaseStationSettings();
    message.settingName = object.settingName ?? "";
    message.settingDataType = object.settingDataType ?? "";
    message.setupName = object.setupName ?? "";
    message.unit = object.unit ?? "";
    return message;
  },
};

function createBaseStationSettingsWithManRef(): StationSettingsWithManRef {
  return { stationSettings: undefined, isManual: false };
}

export const StationSettingsWithManRef = {
  fromJSON(object: any): StationSettingsWithManRef {
    return {
      stationSettings: isSet(object.stationSettings) ? StationSettings.fromJSON(object.stationSettings) : undefined,
      isManual: isSet(object.isManual) ? gt.Boolean(object.isManual) : false,
    };
  },

  toJSON(message: StationSettingsWithManRef): unknown {
    const obj: any = {};
    if (message.stationSettings !== undefined) {
      obj.stationSettings = StationSettings.toJSON(message.stationSettings);
    }
    if (message.isManual !== false) {
      obj.isManual = message.isManual;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StationSettingsWithManRef>, I>>(base?: I): StationSettingsWithManRef {
    return StationSettingsWithManRef.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StationSettingsWithManRef>, I>>(object: I): StationSettingsWithManRef {
    const message = createBaseStationSettingsWithManRef();
    message.stationSettings = (object.stationSettings !== undefined && object.stationSettings !== null)
      ? StationSettings.fromPartial(object.stationSettings)
      : undefined;
    message.isManual = object.isManual ?? false;
    return message;
  },
};

function createBaseStatisticValue(): StatisticValue {
  return { value: "", minimum: 0, maximum: 0, average: 0 };
}

export const StatisticValue = {
  fromJSON(object: any): StatisticValue {
    return {
      value: isSet(object.value) ? gt.String(object.value) : "",
      minimum: isSet(object.minimum) ? gt.Number(object.minimum) : 0,
      maximum: isSet(object.maximum) ? gt.Number(object.maximum) : 0,
      average: isSet(object.average) ? gt.Number(object.average) : 0,
    };
  },

  toJSON(message: StatisticValue): unknown {
    const obj: any = {};
    if (message.value !== undefined && message.value !== "") {
      obj.value = message.value;
    }
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

  create<I extends Exact<DeepPartial<StatisticValue>, I>>(base?: I): StatisticValue {
    return StatisticValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatisticValue>, I>>(object: I): StatisticValue {
    const message = createBaseStatisticValue();
    message.value = object.value ?? "";
    message.minimum = object.minimum ?? 0;
    message.maximum = object.maximum ?? 0;
    message.average = object.average ?? 0;
    return message;
  },
};

function createBaseStatistic(): Statistic {
  return {
    statisticId: 0,
    name: "",
    value: undefined,
    sampleTime: undefined,
    interest: StatisticInterest.Normal,
    unit: "",
    source: "",
  };
}

export const Statistic = {
  fromJSON(object: any): Statistic {
    return {
      statisticId: isSet(object.statisticId) ? gt.Number(object.statisticId) : 0,
      name: isSet(object.name) ? gt.String(object.name) : "",
      value: isSet(object.value) ? StatisticValue.fromJSON(object.value) : undefined,
      sampleTime: isSet(object.sampleTime) ? fromJsonTimestamp(object.sampleTime) : undefined,
      interest: isSet(object.interest) ? statisticInterestFromJSON(object.interest) : StatisticInterest.Normal,
      unit: isSet(object.unit) ? gt.String(object.unit) : "",
      source: isSet(object.source) ? gt.String(object.source) : "",
    };
  },

  toJSON(message: Statistic): unknown {
    const obj: any = {};
    if (message.statisticId !== undefined && message.statisticId !== 0) {
      obj.statisticId = Math.round(message.statisticId);
    }
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.value !== undefined) {
      obj.value = StatisticValue.toJSON(message.value);
    }
    if (message.sampleTime !== undefined) {
      obj.sampleTime = message.sampleTime.toISOString();
    }
    if (message.interest !== undefined && message.interest !== StatisticInterest.Boring) {
      obj.interest = statisticInterestToJSON(message.interest);
    }
    if (message.unit !== undefined && message.unit !== "") {
      obj.unit = message.unit;
    }
    if (message.source !== undefined && message.source !== "") {
      obj.source = message.source;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Statistic>, I>>(base?: I): Statistic {
    return Statistic.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Statistic>, I>>(object: I): Statistic {
    const message = createBaseStatistic();
    message.statisticId = object.statisticId ?? 0;
    message.name = object.name ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? StatisticValue.fromPartial(object.value)
      : undefined;
    message.sampleTime = object.sampleTime ?? undefined;
    message.interest = object.interest ?? StatisticInterest.Normal;
    message.unit = object.unit ?? "";
    message.source = object.source ?? "";
    return message;
  },
};

function createBaseTaskInformation(): TaskInformation {
  return {
    name: "",
    cycleTime: 0,
    minCycleTime: 0,
    maxCycleTime: 0,
    averageCycleTime: 0,
    jitter: 0,
    jitterMin: 0,
    jitterMax: 0,
    priority: 0,
    kindOfTask: "",
    watchdogEnabled: false,
    cycleCount: 0,
    interval: 0,
    state: 0,
    iecCycleCount: 0,
    jitterInformations: [],
  };
}

export const TaskInformation = {
  fromJSON(object: any): TaskInformation {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      cycleTime: isSet(object.cycleTime) ? gt.Number(object.cycleTime) : 0,
      minCycleTime: isSet(object.minCycleTime) ? gt.Number(object.minCycleTime) : 0,
      maxCycleTime: isSet(object.maxCycleTime) ? gt.Number(object.maxCycleTime) : 0,
      averageCycleTime: isSet(object.averageCycleTime) ? gt.Number(object.averageCycleTime) : 0,
      jitter: isSet(object.jitter) ? gt.Number(object.jitter) : 0,
      jitterMin: isSet(object.jitterMin) ? gt.Number(object.jitterMin) : 0,
      jitterMax: isSet(object.jitterMax) ? gt.Number(object.jitterMax) : 0,
      priority: isSet(object.priority) ? gt.Number(object.priority) : 0,
      kindOfTask: isSet(object.kindOfTask) ? gt.String(object.kindOfTask) : "",
      watchdogEnabled: isSet(object.watchdogEnabled) ? gt.Boolean(object.watchdogEnabled) : false,
      cycleCount: isSet(object.cycleCount) ? gt.Number(object.cycleCount) : 0,
      interval: isSet(object.interval) ? gt.Number(object.interval) : 0,
      state: isSet(object.state) ? gt.Number(object.state) : 0,
      iecCycleCount: isSet(object.iecCycleCount) ? gt.Number(object.iecCycleCount) : 0,
      jitterInformations: gt.Array.isArray(object?.jitterInformations)
        ? object.jitterInformations.map((e: any) => Jitter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TaskInformation): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.cycleTime !== undefined && message.cycleTime !== 0) {
      obj.cycleTime = Math.round(message.cycleTime);
    }
    if (message.minCycleTime !== undefined && message.minCycleTime !== 0) {
      obj.minCycleTime = Math.round(message.minCycleTime);
    }
    if (message.maxCycleTime !== undefined && message.maxCycleTime !== 0) {
      obj.maxCycleTime = Math.round(message.maxCycleTime);
    }
    if (message.averageCycleTime !== undefined && message.averageCycleTime !== 0) {
      obj.averageCycleTime = Math.round(message.averageCycleTime);
    }
    if (message.jitter !== undefined && message.jitter !== 0) {
      obj.jitter = Math.round(message.jitter);
    }
    if (message.jitterMin !== undefined && message.jitterMin !== 0) {
      obj.jitterMin = Math.round(message.jitterMin);
    }
    if (message.jitterMax !== undefined && message.jitterMax !== 0) {
      obj.jitterMax = Math.round(message.jitterMax);
    }
    if (message.priority !== undefined && message.priority !== 0) {
      obj.priority = Math.round(message.priority);
    }
    if (message.kindOfTask !== undefined && message.kindOfTask !== "") {
      obj.kindOfTask = message.kindOfTask;
    }
    if (message.watchdogEnabled !== undefined && message.watchdogEnabled !== false) {
      obj.watchdogEnabled = message.watchdogEnabled;
    }
    if (message.cycleCount !== undefined && message.cycleCount !== 0) {
      obj.cycleCount = Math.round(message.cycleCount);
    }
    if (message.interval !== undefined && message.interval !== 0) {
      obj.interval = Math.round(message.interval);
    }
    if (message.state !== undefined && message.state !== 0) {
      obj.state = Math.round(message.state);
    }
    if (message.iecCycleCount !== undefined && message.iecCycleCount !== 0) {
      obj.iecCycleCount = Math.round(message.iecCycleCount);
    }
    if (message.jitterInformations?.length) {
      obj.jitterInformations = message.jitterInformations.map((e) => Jitter.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TaskInformation>, I>>(base?: I): TaskInformation {
    return TaskInformation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TaskInformation>, I>>(object: I): TaskInformation {
    const message = createBaseTaskInformation();
    message.name = object.name ?? "";
    message.cycleTime = object.cycleTime ?? 0;
    message.minCycleTime = object.minCycleTime ?? 0;
    message.maxCycleTime = object.maxCycleTime ?? 0;
    message.averageCycleTime = object.averageCycleTime ?? 0;
    message.jitter = object.jitter ?? 0;
    message.jitterMin = object.jitterMin ?? 0;
    message.jitterMax = object.jitterMax ?? 0;
    message.priority = object.priority ?? 0;
    message.kindOfTask = object.kindOfTask ?? "";
    message.watchdogEnabled = object.watchdogEnabled ?? false;
    message.cycleCount = object.cycleCount ?? 0;
    message.interval = object.interval ?? 0;
    message.state = object.state ?? 0;
    message.iecCycleCount = object.iecCycleCount ?? 0;
    message.jitterInformations = object.jitterInformations?.map((e) => Jitter.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTopologyData(): TopologyData {
  return { topologyId: 0, topologyName: "" };
}

export const TopologyData = {
  fromJSON(object: any): TopologyData {
    return {
      topologyId: isSet(object.topologyId) ? gt.Number(object.topologyId) : 0,
      topologyName: isSet(object.topologyName) ? gt.String(object.topologyName) : "",
    };
  },

  toJSON(message: TopologyData): unknown {
    const obj: any = {};
    if (message.topologyId !== undefined && message.topologyId !== 0) {
      obj.topologyId = Math.round(message.topologyId);
    }
    if (message.topologyName !== undefined && message.topologyName !== "") {
      obj.topologyName = message.topologyName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TopologyData>, I>>(base?: I): TopologyData {
    return TopologyData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TopologyData>, I>>(object: I): TopologyData {
    const message = createBaseTopologyData();
    message.topologyId = object.topologyId ?? 0;
    message.topologyName = object.topologyName ?? "";
    return message;
  },
};

function createBaseTopologyParameter(): TopologyParameter {
  return {
    name: "",
    group: "",
    controller: "",
    min: 0,
    max: 0,
    unit: "",
    value: 0,
    type: DataTypes.DataTypeInteger,
    userCanEdit: false,
    function: "",
    topologyValues: [],
    secondaryFunction: "",
  };
}

export const TopologyParameter = {
  fromJSON(object: any): TopologyParameter {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      group: isSet(object.group) ? gt.String(object.group) : "",
      controller: isSet(object.controller) ? gt.String(object.controller) : "",
      min: isSet(object.min) ? gt.Number(object.min) : 0,
      max: isSet(object.max) ? gt.Number(object.max) : 0,
      unit: isSet(object.unit) ? gt.String(object.unit) : "",
      value: isSet(object.value) ? gt.Number(object.value) : 0,
      type: isSet(object.type) ? dataTypesFromJSON(object.type) : DataTypes.DataTypeInteger,
      userCanEdit: isSet(object.userCanEdit) ? gt.Boolean(object.userCanEdit) : false,
      function: isSet(object.function) ? gt.String(object.function) : "",
      topologyValues: gt.Array.isArray(object?.topologyValues)
        ? object.topologyValues.map((e: any) => gt.Number(e))
        : [],
      secondaryFunction: isSet(object.secondaryFunction) ? gt.String(object.secondaryFunction) : "",
    };
  },

  toJSON(message: TopologyParameter): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.group !== undefined && message.group !== "") {
      obj.group = message.group;
    }
    if (message.controller !== undefined && message.controller !== "") {
      obj.controller = message.controller;
    }
    if (message.min !== undefined && message.min !== 0) {
      obj.min = message.min;
    }
    if (message.max !== undefined && message.max !== 0) {
      obj.max = message.max;
    }
    if (message.unit !== undefined && message.unit !== "") {
      obj.unit = message.unit;
    }
    if (message.value !== undefined && message.value !== 0) {
      obj.value = message.value;
    }
    if (message.type !== undefined && message.type !== DataTypes.DataTypeInteger) {
      obj.type = dataTypesToJSON(message.type);
    }
    if (message.userCanEdit !== undefined && message.userCanEdit !== false) {
      obj.userCanEdit = message.userCanEdit;
    }
    if (message.function !== undefined && message.function !== "") {
      obj.function = message.function;
    }
    if (message.topologyValues?.length) {
      obj.topologyValues = message.topologyValues;
    }
    if (message.secondaryFunction !== undefined && message.secondaryFunction !== "") {
      obj.secondaryFunction = message.secondaryFunction;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TopologyParameter>, I>>(base?: I): TopologyParameter {
    return TopologyParameter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TopologyParameter>, I>>(object: I): TopologyParameter {
    const message = createBaseTopologyParameter();
    message.name = object.name ?? "";
    message.group = object.group ?? "";
    message.controller = object.controller ?? "";
    message.min = object.min ?? 0;
    message.max = object.max ?? 0;
    message.unit = object.unit ?? "";
    message.value = object.value ?? 0;
    message.type = object.type ?? DataTypes.DataTypeInteger;
    message.userCanEdit = object.userCanEdit ?? false;
    message.function = object.function ?? "";
    message.topologyValues = object.topologyValues?.map((e) => e) || [];
    message.secondaryFunction = object.secondaryFunction ?? "";
    return message;
  },
};

function createBaseTopologyParametersListReply(): TopologyParametersListReply {
  return { activeTopologyId: 0, templateTopologies: false, topologies: [], parameters: [] };
}

export const TopologyParametersListReply = {
  fromJSON(object: any): TopologyParametersListReply {
    return {
      activeTopologyId: isSet(object.activeTopologyId) ? gt.Number(object.activeTopologyId) : 0,
      templateTopologies: isSet(object.templateTopologies) ? gt.Boolean(object.templateTopologies) : false,
      topologies: gt.Array.isArray(object?.topologies)
        ? object.topologies.map((e: any) => TopologyData.fromJSON(e))
        : [],
      parameters: gt.Array.isArray(object?.parameters)
        ? object.parameters.map((e: any) => TopologyParameter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TopologyParametersListReply): unknown {
    const obj: any = {};
    if (message.activeTopologyId !== undefined && message.activeTopologyId !== 0) {
      obj.activeTopologyId = Math.round(message.activeTopologyId);
    }
    if (message.templateTopologies !== undefined && message.templateTopologies !== false) {
      obj.templateTopologies = message.templateTopologies;
    }
    if (message.topologies?.length) {
      obj.topologies = message.topologies.map((e) => TopologyData.toJSON(e));
    }
    if (message.parameters?.length) {
      obj.parameters = message.parameters.map((e) => TopologyParameter.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TopologyParametersListReply>, I>>(base?: I): TopologyParametersListReply {
    return TopologyParametersListReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TopologyParametersListReply>, I>>(object: I): TopologyParametersListReply {
    const message = createBaseTopologyParametersListReply();
    message.activeTopologyId = object.activeTopologyId ?? 0;
    message.templateTopologies = object.templateTopologies ?? false;
    message.topologies = object.topologies?.map((e) => TopologyData.fromPartial(e)) || [];
    message.parameters = object.parameters?.map((e) => TopologyParameter.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTopologyView(): TopologyView {
  return { topologyId: 0, topologyName: "", parkPilotGenerators: [] };
}

export const TopologyView = {
  fromJSON(object: any): TopologyView {
    return {
      topologyId: isSet(object.topologyId) ? gt.Number(object.topologyId) : 0,
      topologyName: isSet(object.topologyName) ? gt.String(object.topologyName) : "",
      parkPilotGenerators: gt.Array.isArray(object?.parkPilotGenerators)
        ? object.parkPilotGenerators.map((e: any) => ParkPilotGenerator.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TopologyView): unknown {
    const obj: any = {};
    if (message.topologyId !== undefined && message.topologyId !== 0) {
      obj.topologyId = Math.round(message.topologyId);
    }
    if (message.topologyName !== undefined && message.topologyName !== "") {
      obj.topologyName = message.topologyName;
    }
    if (message.parkPilotGenerators?.length) {
      obj.parkPilotGenerators = message.parkPilotGenerators.map((e) => ParkPilotGenerator.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TopologyView>, I>>(base?: I): TopologyView {
    return TopologyView.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TopologyView>, I>>(object: I): TopologyView {
    const message = createBaseTopologyView();
    message.topologyId = object.topologyId ?? 0;
    message.topologyName = object.topologyName ?? "";
    message.parkPilotGenerators = object.parkPilotGenerators?.map((e) => ParkPilotGenerator.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTurbineParameterChangeLog(): TurbineParameterChangeLog {
  return { timeStamp: undefined, user: "", parameter: "", oldValue: 0, newValue: 0, turbineName: "" };
}

export const TurbineParameterChangeLog = {
  fromJSON(object: any): TurbineParameterChangeLog {
    return {
      timeStamp: isSet(object.timeStamp) ? fromJsonTimestamp(object.timeStamp) : undefined,
      user: isSet(object.user) ? gt.String(object.user) : "",
      parameter: isSet(object.parameter) ? gt.String(object.parameter) : "",
      oldValue: isSet(object.oldValue) ? gt.Number(object.oldValue) : 0,
      newValue: isSet(object.newValue) ? gt.Number(object.newValue) : 0,
      turbineName: isSet(object.turbineName) ? gt.String(object.turbineName) : "",
    };
  },

  toJSON(message: TurbineParameterChangeLog): unknown {
    const obj: any = {};
    if (message.timeStamp !== undefined) {
      obj.timeStamp = message.timeStamp.toISOString();
    }
    if (message.user !== undefined && message.user !== "") {
      obj.user = message.user;
    }
    if (message.parameter !== undefined && message.parameter !== "") {
      obj.parameter = message.parameter;
    }
    if (message.oldValue !== undefined && message.oldValue !== 0) {
      obj.oldValue = message.oldValue;
    }
    if (message.newValue !== undefined && message.newValue !== 0) {
      obj.newValue = message.newValue;
    }
    if (message.turbineName !== undefined && message.turbineName !== "") {
      obj.turbineName = message.turbineName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TurbineParameterChangeLog>, I>>(base?: I): TurbineParameterChangeLog {
    return TurbineParameterChangeLog.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TurbineParameterChangeLog>, I>>(object: I): TurbineParameterChangeLog {
    const message = createBaseTurbineParameterChangeLog();
    message.timeStamp = object.timeStamp ?? undefined;
    message.user = object.user ?? "";
    message.parameter = object.parameter ?? "";
    message.oldValue = object.oldValue ?? 0;
    message.newValue = object.newValue ?? 0;
    message.turbineName = object.turbineName ?? "";
    return message;
  },
};

function createBaseTurbineSubscriptionReply(): TurbineSubscriptionReply {
  return {
    availablePowerBoost: 0,
    noPowerVoltReadyness: "",
    noPowerVoltState: "",
    sourceTimeStamp: undefined,
    groupName: "",
    commStatus: "",
    reactivePower: 0,
    voltage: 0,
    activePower: 0,
    frequency: 0,
    availablePower: 0,
    rawAvailablePower: 0,
    wtOperationState: "",
    windSpeed: 0,
    remoteEnabled: false,
    powerReference: 0,
    ipcStatus: "",
    converterRunning: false,
    reactiveReference: 0,
    inertiaSetPoint: 0,
    assignPowerRef: 0,
    availablePowerFiltered: 0,
    pUsability: "",
    vUsability: "",
    fallBackPower: 0,
    fallBackTime: 0,
    fallBackPowerFeedback: 0,
    fallBackTimeFeedback: 0,
    parPCtrlEnabled: false,
    parUCtrlEnabled: false,
    targetCommOk: false,
    powerRateChange: 0,
    islandModeState: "",
    islandModeSetting: "",
    sdsReadRTT: 0,
    iRAvailable: 0,
    iRActual: 0,
    iRState: "",
    iRInhibitSource: "",
    reactivePowerBalancingOutput: 0,
    reactivePowerBalancingWeight: 0,
    reactivePowerBalancingOffset: 0,
    uFrtMin: 0,
    uFrtMax: 0,
    ratedPower: 0,
    referenceInfo: undefined,
    powerLimitSource: "",
    curtailed: "",
    referenceFeedbackInfo: undefined,
    ipAddress: "",
    communicationId: 0,
    curtailmentStopState: "",
    curtailmentStoppedHours: 0,
    towerDampingFrequency: 0,
    towerDampingAmplitude: 0,
    qFallbackState: "",
    estimatedAvailablePowerBoost: 0,
    dMOL: 0,
    powerRateChangeDown: 0,
    maxVoltageRampRateUp: 0,
    maxVoltageRampRateDown: 0,
    ambientTemp: 0,
    fallBackPowerRampRate: 0,
    fallBackPowerRampRateRestored: 0,
    fallBackPowerRampRateFeedback: 0,
    fallBackPowerRampRateRestoredFeedback: 0,
    name: "",
    controllerType: "",
    staticOperationalLimit: 0,
    activeStopsByPPC: 0,
    activeStopsInTotal: 0,
    remotePPCStopState: "",
    ceasePowerState: "",
    poatdState: "",
    communicationSecure: false,
  };
}

export const TurbineSubscriptionReply = {
  fromJSON(object: any): TurbineSubscriptionReply {
    return {
      availablePowerBoost: isSet(object.availablePowerBoost) ? gt.Number(object.availablePowerBoost) : 0,
      noPowerVoltReadyness: isSet(object.noPowerVoltReadyness) ? gt.String(object.noPowerVoltReadyness) : "",
      noPowerVoltState: isSet(object.noPowerVoltState) ? gt.String(object.noPowerVoltState) : "",
      sourceTimeStamp: isSet(object.sourceTimeStamp) ? fromJsonTimestamp(object.sourceTimeStamp) : undefined,
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      commStatus: isSet(object.commStatus) ? gt.String(object.commStatus) : "",
      reactivePower: isSet(object.reactivePower) ? gt.Number(object.reactivePower) : 0,
      voltage: isSet(object.voltage) ? gt.Number(object.voltage) : 0,
      activePower: isSet(object.activePower) ? gt.Number(object.activePower) : 0,
      frequency: isSet(object.frequency) ? gt.Number(object.frequency) : 0,
      availablePower: isSet(object.availablePower) ? gt.Number(object.availablePower) : 0,
      rawAvailablePower: isSet(object.rawAvailablePower) ? gt.Number(object.rawAvailablePower) : 0,
      wtOperationState: isSet(object.wtOperationState) ? gt.String(object.wtOperationState) : "",
      windSpeed: isSet(object.windSpeed) ? gt.Number(object.windSpeed) : 0,
      remoteEnabled: isSet(object.remoteEnabled) ? gt.Boolean(object.remoteEnabled) : false,
      powerReference: isSet(object.powerReference) ? gt.Number(object.powerReference) : 0,
      ipcStatus: isSet(object.ipcStatus) ? gt.String(object.ipcStatus) : "",
      converterRunning: isSet(object.converterRunning) ? gt.Boolean(object.converterRunning) : false,
      reactiveReference: isSet(object.reactiveReference) ? gt.Number(object.reactiveReference) : 0,
      inertiaSetPoint: isSet(object.inertiaSetPoint) ? gt.Number(object.inertiaSetPoint) : 0,
      assignPowerRef: isSet(object.assignPowerRef) ? gt.Number(object.assignPowerRef) : 0,
      availablePowerFiltered: isSet(object.availablePowerFiltered) ? gt.Number(object.availablePowerFiltered) : 0,
      pUsability: isSet(object.pUsability) ? gt.String(object.pUsability) : "",
      vUsability: isSet(object.vUsability) ? gt.String(object.vUsability) : "",
      fallBackPower: isSet(object.fallBackPower) ? gt.Number(object.fallBackPower) : 0,
      fallBackTime: isSet(object.fallBackTime) ? gt.Number(object.fallBackTime) : 0,
      fallBackPowerFeedback: isSet(object.fallBackPowerFeedback) ? gt.Number(object.fallBackPowerFeedback) : 0,
      fallBackTimeFeedback: isSet(object.fallBackTimeFeedback) ? gt.Number(object.fallBackTimeFeedback) : 0,
      parPCtrlEnabled: isSet(object.parPCtrlEnabled) ? gt.Boolean(object.parPCtrlEnabled) : false,
      parUCtrlEnabled: isSet(object.parUCtrlEnabled) ? gt.Boolean(object.parUCtrlEnabled) : false,
      targetCommOk: isSet(object.targetCommOk) ? gt.Boolean(object.targetCommOk) : false,
      powerRateChange: isSet(object.powerRateChange) ? gt.Number(object.powerRateChange) : 0,
      islandModeState: isSet(object.islandModeState) ? gt.String(object.islandModeState) : "",
      islandModeSetting: isSet(object.islandModeSetting) ? gt.String(object.islandModeSetting) : "",
      sdsReadRTT: isSet(object.sdsReadRTT) ? gt.Number(object.sdsReadRTT) : 0,
      iRAvailable: isSet(object.iRAvailable) ? gt.Number(object.iRAvailable) : 0,
      iRActual: isSet(object.iRActual) ? gt.Number(object.iRActual) : 0,
      iRState: isSet(object.iRState) ? gt.String(object.iRState) : "",
      iRInhibitSource: isSet(object.iRInhibitSource) ? gt.String(object.iRInhibitSource) : "",
      reactivePowerBalancingOutput: isSet(object.reactivePowerBalancingOutput)
        ? gt.Number(object.reactivePowerBalancingOutput)
        : 0,
      reactivePowerBalancingWeight: isSet(object.reactivePowerBalancingWeight)
        ? gt.Number(object.reactivePowerBalancingWeight)
        : 0,
      reactivePowerBalancingOffset: isSet(object.reactivePowerBalancingOffset)
        ? gt.Number(object.reactivePowerBalancingOffset)
        : 0,
      uFrtMin: isSet(object.uFrtMin) ? gt.Number(object.uFrtMin) : 0,
      uFrtMax: isSet(object.uFrtMax) ? gt.Number(object.uFrtMax) : 0,
      ratedPower: isSet(object.ratedPower) ? gt.Number(object.ratedPower) : 0,
      referenceInfo: isSet(object.referenceInfo) ? References.fromJSON(object.referenceInfo) : undefined,
      powerLimitSource: isSet(object.powerLimitSource) ? gt.String(object.powerLimitSource) : "",
      curtailed: isSet(object.curtailed) ? gt.String(object.curtailed) : "",
      referenceFeedbackInfo: isSet(object.referenceFeedbackInfo)
        ? References.fromJSON(object.referenceFeedbackInfo)
        : undefined,
      ipAddress: isSet(object.ipAddress) ? gt.String(object.ipAddress) : "",
      communicationId: isSet(object.communicationId) ? gt.Number(object.communicationId) : 0,
      curtailmentStopState: isSet(object.curtailmentStopState) ? gt.String(object.curtailmentStopState) : "",
      curtailmentStoppedHours: isSet(object.curtailmentStoppedHours) ? gt.Number(object.curtailmentStoppedHours) : 0,
      towerDampingFrequency: isSet(object.towerDampingFrequency) ? gt.Number(object.towerDampingFrequency) : 0,
      towerDampingAmplitude: isSet(object.towerDampingAmplitude) ? gt.Number(object.towerDampingAmplitude) : 0,
      qFallbackState: isSet(object.qFallbackState) ? gt.String(object.qFallbackState) : "",
      estimatedAvailablePowerBoost: isSet(object.estimatedAvailablePowerBoost)
        ? gt.Number(object.estimatedAvailablePowerBoost)
        : 0,
      dMOL: isSet(object.dMOL) ? gt.Number(object.dMOL) : 0,
      powerRateChangeDown: isSet(object.powerRateChangeDown) ? gt.Number(object.powerRateChangeDown) : 0,
      maxVoltageRampRateUp: isSet(object.maxVoltageRampRateUp) ? gt.Number(object.maxVoltageRampRateUp) : 0,
      maxVoltageRampRateDown: isSet(object.maxVoltageRampRateDown) ? gt.Number(object.maxVoltageRampRateDown) : 0,
      ambientTemp: isSet(object.ambientTemp) ? gt.Number(object.ambientTemp) : 0,
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
      name: isSet(object.name) ? gt.String(object.name) : "",
      controllerType: isSet(object.controllerType) ? gt.String(object.controllerType) : "",
      staticOperationalLimit: isSet(object.staticOperationalLimit) ? gt.Number(object.staticOperationalLimit) : 0,
      activeStopsByPPC: isSet(object.activeStopsByPPC) ? gt.Number(object.activeStopsByPPC) : 0,
      activeStopsInTotal: isSet(object.activeStopsInTotal) ? gt.Number(object.activeStopsInTotal) : 0,
      remotePPCStopState: isSet(object.remotePPCStopState) ? gt.String(object.remotePPCStopState) : "",
      ceasePowerState: isSet(object.ceasePowerState) ? gt.String(object.ceasePowerState) : "",
      poatdState: isSet(object.poatdState) ? gt.String(object.poatdState) : "",
      communicationSecure: isSet(object.communicationSecure) ? gt.Boolean(object.communicationSecure) : false,
    };
  },

  toJSON(message: TurbineSubscriptionReply): unknown {
    const obj: any = {};
    if (message.availablePowerBoost !== undefined && message.availablePowerBoost !== 0) {
      obj.availablePowerBoost = message.availablePowerBoost;
    }
    if (message.noPowerVoltReadyness !== undefined && message.noPowerVoltReadyness !== "") {
      obj.noPowerVoltReadyness = message.noPowerVoltReadyness;
    }
    if (message.noPowerVoltState !== undefined && message.noPowerVoltState !== "") {
      obj.noPowerVoltState = message.noPowerVoltState;
    }
    if (message.sourceTimeStamp !== undefined) {
      obj.sourceTimeStamp = message.sourceTimeStamp.toISOString();
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.commStatus !== undefined && message.commStatus !== "") {
      obj.commStatus = message.commStatus;
    }
    if (message.reactivePower !== undefined && message.reactivePower !== 0) {
      obj.reactivePower = message.reactivePower;
    }
    if (message.voltage !== undefined && message.voltage !== 0) {
      obj.voltage = message.voltage;
    }
    if (message.activePower !== undefined && message.activePower !== 0) {
      obj.activePower = message.activePower;
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
    if (message.wtOperationState !== undefined && message.wtOperationState !== "") {
      obj.wtOperationState = message.wtOperationState;
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
    if (message.ipcStatus !== undefined && message.ipcStatus !== "") {
      obj.ipcStatus = message.ipcStatus;
    }
    if (message.converterRunning !== undefined && message.converterRunning !== false) {
      obj.converterRunning = message.converterRunning;
    }
    if (message.reactiveReference !== undefined && message.reactiveReference !== 0) {
      obj.reactiveReference = message.reactiveReference;
    }
    if (message.inertiaSetPoint !== undefined && message.inertiaSetPoint !== 0) {
      obj.inertiaSetPoint = message.inertiaSetPoint;
    }
    if (message.assignPowerRef !== undefined && message.assignPowerRef !== 0) {
      obj.assignPowerRef = Math.round(message.assignPowerRef);
    }
    if (message.availablePowerFiltered !== undefined && message.availablePowerFiltered !== 0) {
      obj.availablePowerFiltered = message.availablePowerFiltered;
    }
    if (message.pUsability !== undefined && message.pUsability !== "") {
      obj.pUsability = message.pUsability;
    }
    if (message.vUsability !== undefined && message.vUsability !== "") {
      obj.vUsability = message.vUsability;
    }
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
    if (message.parPCtrlEnabled !== undefined && message.parPCtrlEnabled !== false) {
      obj.parPCtrlEnabled = message.parPCtrlEnabled;
    }
    if (message.parUCtrlEnabled !== undefined && message.parUCtrlEnabled !== false) {
      obj.parUCtrlEnabled = message.parUCtrlEnabled;
    }
    if (message.targetCommOk !== undefined && message.targetCommOk !== false) {
      obj.targetCommOk = message.targetCommOk;
    }
    if (message.powerRateChange !== undefined && message.powerRateChange !== 0) {
      obj.powerRateChange = message.powerRateChange;
    }
    if (message.islandModeState !== undefined && message.islandModeState !== "") {
      obj.islandModeState = message.islandModeState;
    }
    if (message.islandModeSetting !== undefined && message.islandModeSetting !== "") {
      obj.islandModeSetting = message.islandModeSetting;
    }
    if (message.sdsReadRTT !== undefined && message.sdsReadRTT !== 0) {
      obj.sdsReadRTT = Math.round(message.sdsReadRTT);
    }
    if (message.iRAvailable !== undefined && message.iRAvailable !== 0) {
      obj.iRAvailable = message.iRAvailable;
    }
    if (message.iRActual !== undefined && message.iRActual !== 0) {
      obj.iRActual = message.iRActual;
    }
    if (message.iRState !== undefined && message.iRState !== "") {
      obj.iRState = message.iRState;
    }
    if (message.iRInhibitSource !== undefined && message.iRInhibitSource !== "") {
      obj.iRInhibitSource = message.iRInhibitSource;
    }
    if (message.reactivePowerBalancingOutput !== undefined && message.reactivePowerBalancingOutput !== 0) {
      obj.reactivePowerBalancingOutput = message.reactivePowerBalancingOutput;
    }
    if (message.reactivePowerBalancingWeight !== undefined && message.reactivePowerBalancingWeight !== 0) {
      obj.reactivePowerBalancingWeight = message.reactivePowerBalancingWeight;
    }
    if (message.reactivePowerBalancingOffset !== undefined && message.reactivePowerBalancingOffset !== 0) {
      obj.reactivePowerBalancingOffset = message.reactivePowerBalancingOffset;
    }
    if (message.uFrtMin !== undefined && message.uFrtMin !== 0) {
      obj.uFrtMin = message.uFrtMin;
    }
    if (message.uFrtMax !== undefined && message.uFrtMax !== 0) {
      obj.uFrtMax = message.uFrtMax;
    }
    if (message.ratedPower !== undefined && message.ratedPower !== 0) {
      obj.ratedPower = message.ratedPower;
    }
    if (message.referenceInfo !== undefined) {
      obj.referenceInfo = References.toJSON(message.referenceInfo);
    }
    if (message.powerLimitSource !== undefined && message.powerLimitSource !== "") {
      obj.powerLimitSource = message.powerLimitSource;
    }
    if (message.curtailed !== undefined && message.curtailed !== "") {
      obj.curtailed = message.curtailed;
    }
    if (message.referenceFeedbackInfo !== undefined) {
      obj.referenceFeedbackInfo = References.toJSON(message.referenceFeedbackInfo);
    }
    if (message.ipAddress !== undefined && message.ipAddress !== "") {
      obj.ipAddress = message.ipAddress;
    }
    if (message.communicationId !== undefined && message.communicationId !== 0) {
      obj.communicationId = Math.round(message.communicationId);
    }
    if (message.curtailmentStopState !== undefined && message.curtailmentStopState !== "") {
      obj.curtailmentStopState = message.curtailmentStopState;
    }
    if (message.curtailmentStoppedHours !== undefined && message.curtailmentStoppedHours !== 0) {
      obj.curtailmentStoppedHours = message.curtailmentStoppedHours;
    }
    if (message.towerDampingFrequency !== undefined && message.towerDampingFrequency !== 0) {
      obj.towerDampingFrequency = message.towerDampingFrequency;
    }
    if (message.towerDampingAmplitude !== undefined && message.towerDampingAmplitude !== 0) {
      obj.towerDampingAmplitude = message.towerDampingAmplitude;
    }
    if (message.qFallbackState !== undefined && message.qFallbackState !== "") {
      obj.qFallbackState = message.qFallbackState;
    }
    if (message.estimatedAvailablePowerBoost !== undefined && message.estimatedAvailablePowerBoost !== 0) {
      obj.estimatedAvailablePowerBoost = message.estimatedAvailablePowerBoost;
    }
    if (message.dMOL !== undefined && message.dMOL !== 0) {
      obj.dMOL = message.dMOL;
    }
    if (message.powerRateChangeDown !== undefined && message.powerRateChangeDown !== 0) {
      obj.powerRateChangeDown = message.powerRateChangeDown;
    }
    if (message.maxVoltageRampRateUp !== undefined && message.maxVoltageRampRateUp !== 0) {
      obj.maxVoltageRampRateUp = message.maxVoltageRampRateUp;
    }
    if (message.maxVoltageRampRateDown !== undefined && message.maxVoltageRampRateDown !== 0) {
      obj.maxVoltageRampRateDown = message.maxVoltageRampRateDown;
    }
    if (message.ambientTemp !== undefined && message.ambientTemp !== 0) {
      obj.ambientTemp = message.ambientTemp;
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
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.controllerType !== undefined && message.controllerType !== "") {
      obj.controllerType = message.controllerType;
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
    if (message.remotePPCStopState !== undefined && message.remotePPCStopState !== "") {
      obj.remotePPCStopState = message.remotePPCStopState;
    }
    if (message.ceasePowerState !== undefined && message.ceasePowerState !== "") {
      obj.ceasePowerState = message.ceasePowerState;
    }
    if (message.poatdState !== undefined && message.poatdState !== "") {
      obj.poatdState = message.poatdState;
    }
    if (message.communicationSecure !== undefined && message.communicationSecure !== false) {
      obj.communicationSecure = message.communicationSecure;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TurbineSubscriptionReply>, I>>(base?: I): TurbineSubscriptionReply {
    return TurbineSubscriptionReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TurbineSubscriptionReply>, I>>(object: I): TurbineSubscriptionReply {
    const message = createBaseTurbineSubscriptionReply();
    message.availablePowerBoost = object.availablePowerBoost ?? 0;
    message.noPowerVoltReadyness = object.noPowerVoltReadyness ?? "";
    message.noPowerVoltState = object.noPowerVoltState ?? "";
    message.sourceTimeStamp = object.sourceTimeStamp ?? undefined;
    message.groupName = object.groupName ?? "";
    message.commStatus = object.commStatus ?? "";
    message.reactivePower = object.reactivePower ?? 0;
    message.voltage = object.voltage ?? 0;
    message.activePower = object.activePower ?? 0;
    message.frequency = object.frequency ?? 0;
    message.availablePower = object.availablePower ?? 0;
    message.rawAvailablePower = object.rawAvailablePower ?? 0;
    message.wtOperationState = object.wtOperationState ?? "";
    message.windSpeed = object.windSpeed ?? 0;
    message.remoteEnabled = object.remoteEnabled ?? false;
    message.powerReference = object.powerReference ?? 0;
    message.ipcStatus = object.ipcStatus ?? "";
    message.converterRunning = object.converterRunning ?? false;
    message.reactiveReference = object.reactiveReference ?? 0;
    message.inertiaSetPoint = object.inertiaSetPoint ?? 0;
    message.assignPowerRef = object.assignPowerRef ?? 0;
    message.availablePowerFiltered = object.availablePowerFiltered ?? 0;
    message.pUsability = object.pUsability ?? "";
    message.vUsability = object.vUsability ?? "";
    message.fallBackPower = object.fallBackPower ?? 0;
    message.fallBackTime = object.fallBackTime ?? 0;
    message.fallBackPowerFeedback = object.fallBackPowerFeedback ?? 0;
    message.fallBackTimeFeedback = object.fallBackTimeFeedback ?? 0;
    message.parPCtrlEnabled = object.parPCtrlEnabled ?? false;
    message.parUCtrlEnabled = object.parUCtrlEnabled ?? false;
    message.targetCommOk = object.targetCommOk ?? false;
    message.powerRateChange = object.powerRateChange ?? 0;
    message.islandModeState = object.islandModeState ?? "";
    message.islandModeSetting = object.islandModeSetting ?? "";
    message.sdsReadRTT = object.sdsReadRTT ?? 0;
    message.iRAvailable = object.iRAvailable ?? 0;
    message.iRActual = object.iRActual ?? 0;
    message.iRState = object.iRState ?? "";
    message.iRInhibitSource = object.iRInhibitSource ?? "";
    message.reactivePowerBalancingOutput = object.reactivePowerBalancingOutput ?? 0;
    message.reactivePowerBalancingWeight = object.reactivePowerBalancingWeight ?? 0;
    message.reactivePowerBalancingOffset = object.reactivePowerBalancingOffset ?? 0;
    message.uFrtMin = object.uFrtMin ?? 0;
    message.uFrtMax = object.uFrtMax ?? 0;
    message.ratedPower = object.ratedPower ?? 0;
    message.referenceInfo = (object.referenceInfo !== undefined && object.referenceInfo !== null)
      ? References.fromPartial(object.referenceInfo)
      : undefined;
    message.powerLimitSource = object.powerLimitSource ?? "";
    message.curtailed = object.curtailed ?? "";
    message.referenceFeedbackInfo =
      (object.referenceFeedbackInfo !== undefined && object.referenceFeedbackInfo !== null)
        ? References.fromPartial(object.referenceFeedbackInfo)
        : undefined;
    message.ipAddress = object.ipAddress ?? "";
    message.communicationId = object.communicationId ?? 0;
    message.curtailmentStopState = object.curtailmentStopState ?? "";
    message.curtailmentStoppedHours = object.curtailmentStoppedHours ?? 0;
    message.towerDampingFrequency = object.towerDampingFrequency ?? 0;
    message.towerDampingAmplitude = object.towerDampingAmplitude ?? 0;
    message.qFallbackState = object.qFallbackState ?? "";
    message.estimatedAvailablePowerBoost = object.estimatedAvailablePowerBoost ?? 0;
    message.dMOL = object.dMOL ?? 0;
    message.powerRateChangeDown = object.powerRateChangeDown ?? 0;
    message.maxVoltageRampRateUp = object.maxVoltageRampRateUp ?? 0;
    message.maxVoltageRampRateDown = object.maxVoltageRampRateDown ?? 0;
    message.ambientTemp = object.ambientTemp ?? 0;
    message.fallBackPowerRampRate = object.fallBackPowerRampRate ?? 0;
    message.fallBackPowerRampRateRestored = object.fallBackPowerRampRateRestored ?? 0;
    message.fallBackPowerRampRateFeedback = object.fallBackPowerRampRateFeedback ?? 0;
    message.fallBackPowerRampRateRestoredFeedback = object.fallBackPowerRampRateRestoredFeedback ?? 0;
    message.name = object.name ?? "";
    message.controllerType = object.controllerType ?? "";
    message.staticOperationalLimit = object.staticOperationalLimit ?? 0;
    message.activeStopsByPPC = object.activeStopsByPPC ?? 0;
    message.activeStopsInTotal = object.activeStopsInTotal ?? 0;
    message.remotePPCStopState = object.remotePPCStopState ?? "";
    message.ceasePowerState = object.ceasePowerState ?? "";
    message.poatdState = object.poatdState ?? "";
    message.communicationSecure = object.communicationSecure ?? false;
    return message;
  },
};

function createBaseSubTurbineSubscriptionReply(): SubTurbineSubscriptionReply {
  return {
    name: "",
    curtailmentPriority: 0,
    dmolKw: 0,
    ceaseStopSupported: false,
    remoteStopSupported: false,
    curtailmentStopSupported: false,
    curtailmentStopState: SubTurbineSubscriptionReply_CurtailmentStopState.CurtailmentStopUninitialized,
    ceaseStopState: SubTurbineSubscriptionReply_CeasePState.CeasePUninitialized,
    remoteStopState: SubTurbineSubscriptionReply_RemotePPCStopState.Uninitialized,
    minCapablePowerKw: 0,
    activePowerInscopeKw: 0,
    curtailmentStopAvailablePowerKw: 0,
    curtailmentStoppedHourCount: 0,
    isPSlaveable: false,
    stoppedByPPCCount: 0,
    uncontrolledPowerKw: 0,
    isCurtailmentStopControllable: false,
    isTurbineStartableByCurtailmentStopCurtailmentStop: false,
    curtailmentStopRequest: SubTurbineSubscriptionReply_CurtailmentStopState.CurtailmentStopUninitialized,
    isStartControllable: false,
    isCurtailmentStopRequestActive: false,
    curtailmentStopConfirmedRequest: SubTurbineSubscriptionReply_CurtailmentStopState.CurtailmentStopUninitialized,
    activePowerReferenceKw: 0,
    ratedPower: 0,
    sourceTimeStamp: undefined,
    groupName: "",
  };
}

export const SubTurbineSubscriptionReply = {
  fromJSON(object: any): SubTurbineSubscriptionReply {
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
        ? subTurbineSubscriptionReply_CurtailmentStopStateFromJSON(object.curtailmentStopState)
        : SubTurbineSubscriptionReply_CurtailmentStopState.CurtailmentStopUninitialized,
      ceaseStopState: isSet(object.ceaseStopState)
        ? subTurbineSubscriptionReply_CeasePStateFromJSON(object.ceaseStopState)
        : SubTurbineSubscriptionReply_CeasePState.CeasePUninitialized,
      remoteStopState: isSet(object.remoteStopState)
        ? subTurbineSubscriptionReply_RemotePPCStopStateFromJSON(object.remoteStopState)
        : SubTurbineSubscriptionReply_RemotePPCStopState.Uninitialized,
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
        ? subTurbineSubscriptionReply_CurtailmentStopStateFromJSON(object.curtailmentStopRequest)
        : SubTurbineSubscriptionReply_CurtailmentStopState.CurtailmentStopUninitialized,
      isStartControllable: isSet(object.isStartControllable) ? gt.Boolean(object.isStartControllable) : false,
      isCurtailmentStopRequestActive: isSet(object.isCurtailmentStopRequestActive)
        ? gt.Boolean(object.isCurtailmentStopRequestActive)
        : false,
      curtailmentStopConfirmedRequest: isSet(object.curtailmentStopConfirmedRequest)
        ? subTurbineSubscriptionReply_CurtailmentStopStateFromJSON(object.curtailmentStopConfirmedRequest)
        : SubTurbineSubscriptionReply_CurtailmentStopState.CurtailmentStopUninitialized,
      activePowerReferenceKw: isSet(object.activePowerReferenceKw) ? gt.Number(object.activePowerReferenceKw) : 0,
      ratedPower: isSet(object.ratedPower) ? gt.Number(object.ratedPower) : 0,
      sourceTimeStamp: isSet(object.sourceTimeStamp) ? fromJsonTimestamp(object.sourceTimeStamp) : undefined,
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
    };
  },

  toJSON(message: SubTurbineSubscriptionReply): unknown {
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
      message.curtailmentStopState !== SubTurbineSubscriptionReply_CurtailmentStopState.CurtailmentStopUninitialized
    ) {
      obj.curtailmentStopState = subTurbineSubscriptionReply_CurtailmentStopStateToJSON(message.curtailmentStopState);
    }
    if (
      message.ceaseStopState !== undefined &&
      message.ceaseStopState !== SubTurbineSubscriptionReply_CeasePState.CeasePUninitialized
    ) {
      obj.ceaseStopState = subTurbineSubscriptionReply_CeasePStateToJSON(message.ceaseStopState);
    }
    if (
      message.remoteStopState !== undefined &&
      message.remoteStopState !== SubTurbineSubscriptionReply_RemotePPCStopState.Uninitialized
    ) {
      obj.remoteStopState = subTurbineSubscriptionReply_RemotePPCStopStateToJSON(message.remoteStopState);
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
      message.curtailmentStopRequest !== SubTurbineSubscriptionReply_CurtailmentStopState.CurtailmentStopUninitialized
    ) {
      obj.curtailmentStopRequest = subTurbineSubscriptionReply_CurtailmentStopStateToJSON(
        message.curtailmentStopRequest,
      );
    }
    if (message.isStartControllable !== undefined && message.isStartControllable !== false) {
      obj.isStartControllable = message.isStartControllable;
    }
    if (message.isCurtailmentStopRequestActive !== undefined && message.isCurtailmentStopRequestActive !== false) {
      obj.isCurtailmentStopRequestActive = message.isCurtailmentStopRequestActive;
    }
    if (
      message.curtailmentStopConfirmedRequest !== undefined &&
      message.curtailmentStopConfirmedRequest !==
        SubTurbineSubscriptionReply_CurtailmentStopState.CurtailmentStopUninitialized
    ) {
      obj.curtailmentStopConfirmedRequest = subTurbineSubscriptionReply_CurtailmentStopStateToJSON(
        message.curtailmentStopConfirmedRequest,
      );
    }
    if (message.activePowerReferenceKw !== undefined && message.activePowerReferenceKw !== 0) {
      obj.activePowerReferenceKw = message.activePowerReferenceKw;
    }
    if (message.ratedPower !== undefined && message.ratedPower !== 0) {
      obj.ratedPower = message.ratedPower;
    }
    if (message.sourceTimeStamp !== undefined) {
      obj.sourceTimeStamp = message.sourceTimeStamp.toISOString();
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubTurbineSubscriptionReply>, I>>(base?: I): SubTurbineSubscriptionReply {
    return SubTurbineSubscriptionReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SubTurbineSubscriptionReply>, I>>(object: I): SubTurbineSubscriptionReply {
    const message = createBaseSubTurbineSubscriptionReply();
    message.name = object.name ?? "";
    message.curtailmentPriority = object.curtailmentPriority ?? 0;
    message.dmolKw = object.dmolKw ?? 0;
    message.ceaseStopSupported = object.ceaseStopSupported ?? false;
    message.remoteStopSupported = object.remoteStopSupported ?? false;
    message.curtailmentStopSupported = object.curtailmentStopSupported ?? false;
    message.curtailmentStopState = object.curtailmentStopState ??
      SubTurbineSubscriptionReply_CurtailmentStopState.CurtailmentStopUninitialized;
    message.ceaseStopState = object.ceaseStopState ?? SubTurbineSubscriptionReply_CeasePState.CeasePUninitialized;
    message.remoteStopState = object.remoteStopState ?? SubTurbineSubscriptionReply_RemotePPCStopState.Uninitialized;
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
      SubTurbineSubscriptionReply_CurtailmentStopState.CurtailmentStopUninitialized;
    message.isStartControllable = object.isStartControllable ?? false;
    message.isCurtailmentStopRequestActive = object.isCurtailmentStopRequestActive ?? false;
    message.curtailmentStopConfirmedRequest = object.curtailmentStopConfirmedRequest ??
      SubTurbineSubscriptionReply_CurtailmentStopState.CurtailmentStopUninitialized;
    message.activePowerReferenceKw = object.activePowerReferenceKw ?? 0;
    message.ratedPower = object.ratedPower ?? 0;
    message.sourceTimeStamp = object.sourceTimeStamp ?? undefined;
    message.groupName = object.groupName ?? "";
    return message;
  },
};

function createBaseUpstream(): Upstream {
  return { activePower: 0, reactivePower: 0, voltage: 0, apparentPower: 0, nominalvoltage: 0 };
}

export const Upstream = {
  fromJSON(object: any): Upstream {
    return {
      activePower: isSet(object.activePower) ? gt.Number(object.activePower) : 0,
      reactivePower: isSet(object.reactivePower) ? gt.Number(object.reactivePower) : 0,
      voltage: isSet(object.voltage) ? gt.Number(object.voltage) : 0,
      apparentPower: isSet(object.apparentPower) ? gt.Number(object.apparentPower) : 0,
      nominalvoltage: isSet(object.nominalvoltage) ? gt.Number(object.nominalvoltage) : 0,
    };
  },

  toJSON(message: Upstream): unknown {
    const obj: any = {};
    if (message.activePower !== undefined && message.activePower !== 0) {
      obj.activePower = message.activePower;
    }
    if (message.reactivePower !== undefined && message.reactivePower !== 0) {
      obj.reactivePower = message.reactivePower;
    }
    if (message.voltage !== undefined && message.voltage !== 0) {
      obj.voltage = message.voltage;
    }
    if (message.apparentPower !== undefined && message.apparentPower !== 0) {
      obj.apparentPower = message.apparentPower;
    }
    if (message.nominalvoltage !== undefined && message.nominalvoltage !== 0) {
      obj.nominalvoltage = message.nominalvoltage;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Upstream>, I>>(base?: I): Upstream {
    return Upstream.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Upstream>, I>>(object: I): Upstream {
    const message = createBaseUpstream();
    message.activePower = object.activePower ?? 0;
    message.reactivePower = object.reactivePower ?? 0;
    message.voltage = object.voltage ?? 0;
    message.apparentPower = object.apparentPower ?? 0;
    message.nominalvoltage = object.nominalvoltage ?? 0;
    return message;
  },
};

function createBaseUpdateCustomData(): UpdateCustomData {
  return { name: "", value: "", nameSpace: "" };
}

export const UpdateCustomData = {
  fromJSON(object: any): UpdateCustomData {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      value: isSet(object.value) ? gt.String(object.value) : "",
      nameSpace: isSet(object.nameSpace) ? gt.String(object.nameSpace) : "",
    };
  },

  toJSON(message: UpdateCustomData): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.value !== undefined && message.value !== "") {
      obj.value = message.value;
    }
    if (message.nameSpace !== undefined && message.nameSpace !== "") {
      obj.nameSpace = message.nameSpace;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateCustomData>, I>>(base?: I): UpdateCustomData {
    return UpdateCustomData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateCustomData>, I>>(object: I): UpdateCustomData {
    const message = createBaseUpdateCustomData();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    message.nameSpace = object.nameSpace ?? "";
    return message;
  },
};

function createBaseUpdateTopologyParameterReply(): UpdateTopologyParameterReply {
  return { topologyId: 0, group: "", groupId: 0, name: "", newValue: 0 };
}

export const UpdateTopologyParameterReply = {
  fromJSON(object: any): UpdateTopologyParameterReply {
    return {
      topologyId: isSet(object.topologyId) ? gt.Number(object.topologyId) : 0,
      group: isSet(object.group) ? gt.String(object.group) : "",
      groupId: isSet(object.groupId) ? gt.Number(object.groupId) : 0,
      name: isSet(object.name) ? gt.String(object.name) : "",
      newValue: isSet(object.newValue) ? gt.Number(object.newValue) : 0,
    };
  },

  toJSON(message: UpdateTopologyParameterReply): unknown {
    const obj: any = {};
    if (message.topologyId !== undefined && message.topologyId !== 0) {
      obj.topologyId = Math.round(message.topologyId);
    }
    if (message.group !== undefined && message.group !== "") {
      obj.group = message.group;
    }
    if (message.groupId !== undefined && message.groupId !== 0) {
      obj.groupId = Math.round(message.groupId);
    }
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.newValue !== undefined && message.newValue !== 0) {
      obj.newValue = message.newValue;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTopologyParameterReply>, I>>(base?: I): UpdateTopologyParameterReply {
    return UpdateTopologyParameterReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTopologyParameterReply>, I>>(object: I): UpdateTopologyParameterReply {
    const message = createBaseUpdateTopologyParameterReply();
    message.topologyId = object.topologyId ?? 0;
    message.group = object.group ?? "";
    message.groupId = object.groupId ?? 0;
    message.name = object.name ?? "";
    message.newValue = object.newValue ?? 0;
    return message;
  },
};

function createBaseVariableDescription(): VariableDescription {
  return { controllerName: "", name: "", description: "", unit: "", displayAccuracy: 0, logName: "" };
}

export const VariableDescription = {
  fromJSON(object: any): VariableDescription {
    return {
      controllerName: isSet(object.controllerName) ? gt.String(object.controllerName) : "",
      name: isSet(object.name) ? gt.String(object.name) : "",
      description: isSet(object.description) ? gt.String(object.description) : "",
      unit: isSet(object.unit) ? gt.String(object.unit) : "",
      displayAccuracy: isSet(object.displayAccuracy) ? gt.Number(object.displayAccuracy) : 0,
      logName: isSet(object.logName) ? gt.String(object.logName) : "",
    };
  },

  toJSON(message: VariableDescription): unknown {
    const obj: any = {};
    if (message.controllerName !== undefined && message.controllerName !== "") {
      obj.controllerName = message.controllerName;
    }
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== undefined && message.description !== "") {
      obj.description = message.description;
    }
    if (message.unit !== undefined && message.unit !== "") {
      obj.unit = message.unit;
    }
    if (message.displayAccuracy !== undefined && message.displayAccuracy !== 0) {
      obj.displayAccuracy = message.displayAccuracy;
    }
    if (message.logName !== undefined && message.logName !== "") {
      obj.logName = message.logName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VariableDescription>, I>>(base?: I): VariableDescription {
    return VariableDescription.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VariableDescription>, I>>(object: I): VariableDescription {
    const message = createBaseVariableDescription();
    message.controllerName = object.controllerName ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.unit = object.unit ?? "";
    message.displayAccuracy = object.displayAccuracy ?? 0;
    message.logName = object.logName ?? "";
    return message;
  },
};

function createBaseVersionHistoryReply(): VersionHistoryReply {
  return { versionHistory: [] };
}

export const VersionHistoryReply = {
  fromJSON(object: any): VersionHistoryReply {
    return {
      versionHistory: gt.Array.isArray(object?.versionHistory)
        ? object.versionHistory.map((e: any) => VersionHistoryReply_VersionEntry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: VersionHistoryReply): unknown {
    const obj: any = {};
    if (message.versionHistory?.length) {
      obj.versionHistory = message.versionHistory.map((e) => VersionHistoryReply_VersionEntry.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VersionHistoryReply>, I>>(base?: I): VersionHistoryReply {
    return VersionHistoryReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VersionHistoryReply>, I>>(object: I): VersionHistoryReply {
    const message = createBaseVersionHistoryReply();
    message.versionHistory = object.versionHistory?.map((e) => VersionHistoryReply_VersionEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVersionHistoryReply_VersionEntry(): VersionHistoryReply_VersionEntry {
  return { version: "", initials: "", releaseDate: undefined, updateDate: undefined };
}

export const VersionHistoryReply_VersionEntry = {
  fromJSON(object: any): VersionHistoryReply_VersionEntry {
    return {
      version: isSet(object.version) ? gt.String(object.version) : "",
      initials: isSet(object.initials) ? gt.String(object.initials) : "",
      releaseDate: isSet(object.releaseDate) ? fromJsonTimestamp(object.releaseDate) : undefined,
      updateDate: isSet(object.updateDate) ? fromJsonTimestamp(object.updateDate) : undefined,
    };
  },

  toJSON(message: VersionHistoryReply_VersionEntry): unknown {
    const obj: any = {};
    if (message.version !== undefined && message.version !== "") {
      obj.version = message.version;
    }
    if (message.initials !== undefined && message.initials !== "") {
      obj.initials = message.initials;
    }
    if (message.releaseDate !== undefined) {
      obj.releaseDate = message.releaseDate.toISOString();
    }
    if (message.updateDate !== undefined) {
      obj.updateDate = message.updateDate.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VersionHistoryReply_VersionEntry>, I>>(
    base?: I,
  ): VersionHistoryReply_VersionEntry {
    return VersionHistoryReply_VersionEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VersionHistoryReply_VersionEntry>, I>>(
    object: I,
  ): VersionHistoryReply_VersionEntry {
    const message = createBaseVersionHistoryReply_VersionEntry();
    message.version = object.version ?? "";
    message.initials = object.initials ?? "";
    message.releaseDate = object.releaseDate ?? undefined;
    message.updateDate = object.updateDate ?? undefined;
    return message;
  },
};

function createBaseVirtual(): Virtual {
  return { redundancyState: "" };
}

export const Virtual = {
  fromJSON(object: any): Virtual {
    return { redundancyState: isSet(object.redundancyState) ? gt.String(object.redundancyState) : "" };
  },

  toJSON(message: Virtual): unknown {
    const obj: any = {};
    if (message.redundancyState !== undefined && message.redundancyState !== "") {
      obj.redundancyState = message.redundancyState;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Virtual>, I>>(base?: I): Virtual {
    return Virtual.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Virtual>, I>>(object: I): Virtual {
    const message = createBaseVirtual();
    message.redundancyState = object.redundancyState ?? "";
    return message;
  },
};

function createBaseSignals(): Signals {
  return { signal: undefined, sourceStationList: [], signalValues: [] };
}

export const Signals = {
  fromJSON(object: any): Signals {
    return {
      signal: isSet(object.signal) ? InjectableSignal.fromJSON(object.signal) : undefined,
      sourceStationList: gt.Array.isArray(object?.sourceStationList)
        ? object.sourceStationList.map((e: any) => InjectableSourceStation.fromJSON(e))
        : [],
      signalValues: gt.Array.isArray(object?.signalValues)
        ? object.signalValues.map((e: any) => InjectionSignalValues.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Signals): unknown {
    const obj: any = {};
    if (message.signal !== undefined) {
      obj.signal = InjectableSignal.toJSON(message.signal);
    }
    if (message.sourceStationList?.length) {
      obj.sourceStationList = message.sourceStationList.map((e) => InjectableSourceStation.toJSON(e));
    }
    if (message.signalValues?.length) {
      obj.signalValues = message.signalValues.map((e) => InjectionSignalValues.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Signals>, I>>(base?: I): Signals {
    return Signals.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Signals>, I>>(object: I): Signals {
    const message = createBaseSignals();
    message.signal = (object.signal !== undefined && object.signal !== null)
      ? InjectableSignal.fromPartial(object.signal)
      : undefined;
    message.sourceStationList = object.sourceStationList?.map((e) => InjectableSourceStation.fromPartial(e)) || [];
    message.signalValues = object.signalValues?.map((e) => InjectionSignalValues.fromPartial(e)) || [];
    return message;
  },
};

function createBaseInjectableSignal(): InjectableSignal {
  return {
    name: "",
    signalDisplayName: "",
    isSignalSelected: false,
    isSourceStationValid: false,
    isInjectionValueValid: false,
    isStartTimeZero: false,
    isTimeValueValid: false,
    defaultValue: 0,
    minimumValue: 0,
    maximumValue: 0,
    unitName: "",
    isValueRangeValid: false,
    displayAccuracy: 0,
  };
}

export const InjectableSignal = {
  fromJSON(object: any): InjectableSignal {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      signalDisplayName: isSet(object.signalDisplayName) ? gt.String(object.signalDisplayName) : "",
      isSignalSelected: isSet(object.isSignalSelected) ? gt.Boolean(object.isSignalSelected) : false,
      isSourceStationValid: isSet(object.isSourceStationValid) ? gt.Boolean(object.isSourceStationValid) : false,
      isInjectionValueValid: isSet(object.isInjectionValueValid) ? gt.Boolean(object.isInjectionValueValid) : false,
      isStartTimeZero: isSet(object.isStartTimeZero) ? gt.Boolean(object.isStartTimeZero) : false,
      isTimeValueValid: isSet(object.isTimeValueValid) ? gt.Boolean(object.isTimeValueValid) : false,
      defaultValue: isSet(object.defaultValue) ? gt.Number(object.defaultValue) : 0,
      minimumValue: isSet(object.minimumValue) ? gt.Number(object.minimumValue) : 0,
      maximumValue: isSet(object.maximumValue) ? gt.Number(object.maximumValue) : 0,
      unitName: isSet(object.unitName) ? gt.String(object.unitName) : "",
      isValueRangeValid: isSet(object.isValueRangeValid) ? gt.Boolean(object.isValueRangeValid) : false,
      displayAccuracy: isSet(object.displayAccuracy) ? gt.Number(object.displayAccuracy) : 0,
    };
  },

  toJSON(message: InjectableSignal): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.signalDisplayName !== undefined && message.signalDisplayName !== "") {
      obj.signalDisplayName = message.signalDisplayName;
    }
    if (message.isSignalSelected !== undefined && message.isSignalSelected !== false) {
      obj.isSignalSelected = message.isSignalSelected;
    }
    if (message.isSourceStationValid !== undefined && message.isSourceStationValid !== false) {
      obj.isSourceStationValid = message.isSourceStationValid;
    }
    if (message.isInjectionValueValid !== undefined && message.isInjectionValueValid !== false) {
      obj.isInjectionValueValid = message.isInjectionValueValid;
    }
    if (message.isStartTimeZero !== undefined && message.isStartTimeZero !== false) {
      obj.isStartTimeZero = message.isStartTimeZero;
    }
    if (message.isTimeValueValid !== undefined && message.isTimeValueValid !== false) {
      obj.isTimeValueValid = message.isTimeValueValid;
    }
    if (message.defaultValue !== 0) {
      obj.defaultValue = message.defaultValue;
    }
    if (message.minimumValue !== 0) {
      obj.minimumValue = message.minimumValue;
    }
    if (message.maximumValue !== 0) {
      obj.maximumValue = message.maximumValue;
    }
    if (message.unitName !== "") {
      obj.unitName = message.unitName;
    }
    if (message.isValueRangeValid !== undefined && message.isValueRangeValid !== false) {
      obj.isValueRangeValid = message.isValueRangeValid;
    }
    if (message.displayAccuracy !== 0) {
      obj.displayAccuracy = message.displayAccuracy;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InjectableSignal>, I>>(base?: I): InjectableSignal {
    return InjectableSignal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InjectableSignal>, I>>(object: I): InjectableSignal {
    const message = createBaseInjectableSignal();
    message.name = object.name ?? "";
    message.signalDisplayName = object.signalDisplayName ?? "";
    message.isSignalSelected = object.isSignalSelected ?? false;
    message.isSourceStationValid = object.isSourceStationValid ?? false;
    message.isInjectionValueValid = object.isInjectionValueValid ?? false;
    message.isStartTimeZero = object.isStartTimeZero ?? false;
    message.isTimeValueValid = object.isTimeValueValid ?? false;
    message.defaultValue = object.defaultValue ?? 0;
    message.minimumValue = object.minimumValue ?? 0;
    message.maximumValue = object.maximumValue ?? 0;
    message.unitName = object.unitName ?? "";
    message.isValueRangeValid = object.isValueRangeValid ?? false;
    message.displayAccuracy = object.displayAccuracy ?? 0;
    return message;
  },
};

function createBaseInjectableSourceStation(): InjectableSourceStation {
  return { stationName: "", isSourceSelected: false, isSourceAlreadyUsed: false, stationDuplicatedIn: "" };
}

export const InjectableSourceStation = {
  fromJSON(object: any): InjectableSourceStation {
    return {
      stationName: isSet(object.stationName) ? gt.String(object.stationName) : "",
      isSourceSelected: isSet(object.isSourceSelected) ? gt.Boolean(object.isSourceSelected) : false,
      isSourceAlreadyUsed: isSet(object.isSourceAlreadyUsed) ? gt.Boolean(object.isSourceAlreadyUsed) : false,
      stationDuplicatedIn: isSet(object.stationDuplicatedIn) ? gt.String(object.stationDuplicatedIn) : "",
    };
  },

  toJSON(message: InjectableSourceStation): unknown {
    const obj: any = {};
    if (message.stationName !== "") {
      obj.stationName = message.stationName;
    }
    if (message.isSourceSelected !== undefined && message.isSourceSelected !== false) {
      obj.isSourceSelected = message.isSourceSelected;
    }
    if (message.isSourceAlreadyUsed !== undefined && message.isSourceAlreadyUsed !== false) {
      obj.isSourceAlreadyUsed = message.isSourceAlreadyUsed;
    }
    if (message.stationDuplicatedIn !== undefined && message.stationDuplicatedIn !== "") {
      obj.stationDuplicatedIn = message.stationDuplicatedIn;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InjectableSourceStation>, I>>(base?: I): InjectableSourceStation {
    return InjectableSourceStation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InjectableSourceStation>, I>>(object: I): InjectableSourceStation {
    const message = createBaseInjectableSourceStation();
    message.stationName = object.stationName ?? "";
    message.isSourceSelected = object.isSourceSelected ?? false;
    message.isSourceAlreadyUsed = object.isSourceAlreadyUsed ?? false;
    message.stationDuplicatedIn = object.stationDuplicatedIn ?? "";
    return message;
  },
};

function createBaseInjectionSignalValues(): InjectionSignalValues {
  return { serialNo: 0, injectionTime: 0, injectionValue: 0, ramp: false };
}

export const InjectionSignalValues = {
  fromJSON(object: any): InjectionSignalValues {
    return {
      serialNo: isSet(object.serialNo) ? gt.Number(object.serialNo) : 0,
      injectionTime: isSet(object.injectionTime) ? gt.Number(object.injectionTime) : 0,
      injectionValue: isSet(object.injectionValue) ? gt.Number(object.injectionValue) : 0,
      ramp: isSet(object.ramp) ? gt.Boolean(object.ramp) : false,
    };
  },

  toJSON(message: InjectionSignalValues): unknown {
    const obj: any = {};
    if (message.serialNo !== undefined && message.serialNo !== 0) {
      obj.serialNo = message.serialNo;
    }
    if (message.injectionTime !== 0) {
      obj.injectionTime = message.injectionTime;
    }
    if (message.injectionValue !== 0) {
      obj.injectionValue = message.injectionValue;
    }
    if (message.ramp !== undefined && message.ramp !== false) {
      obj.ramp = message.ramp;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InjectionSignalValues>, I>>(base?: I): InjectionSignalValues {
    return InjectionSignalValues.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InjectionSignalValues>, I>>(object: I): InjectionSignalValues {
    const message = createBaseInjectionSignalValues();
    message.serialNo = object.serialNo ?? 0;
    message.injectionTime = object.injectionTime ?? 0;
    message.injectionValue = object.injectionValue ?? 0;
    message.ramp = object.ramp ?? false;
    return message;
  },
};

function createBaseOverrideSourceStationlist(): OverrideSourceStationlist {
  return { ischecked: false, signalName: "", sourceStationName: "", sourceSelecteIn: "" };
}

export const OverrideSourceStationlist = {
  fromJSON(object: any): OverrideSourceStationlist {
    return {
      ischecked: isSet(object.ischecked) ? gt.Boolean(object.ischecked) : false,
      signalName: isSet(object.signalName) ? gt.String(object.signalName) : "",
      sourceStationName: isSet(object.sourceStationName) ? gt.String(object.sourceStationName) : "",
      sourceSelecteIn: isSet(object.sourceSelecteIn) ? gt.String(object.sourceSelecteIn) : "",
    };
  },

  toJSON(message: OverrideSourceStationlist): unknown {
    const obj: any = {};
    if (message.ischecked !== undefined && message.ischecked !== false) {
      obj.ischecked = message.ischecked;
    }
    if (message.signalName !== "") {
      obj.signalName = message.signalName;
    }
    if (message.sourceStationName !== "") {
      obj.sourceStationName = message.sourceStationName;
    }
    if (message.sourceSelecteIn !== undefined && message.sourceSelecteIn !== "") {
      obj.sourceSelecteIn = message.sourceSelecteIn;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OverrideSourceStationlist>, I>>(base?: I): OverrideSourceStationlist {
    return OverrideSourceStationlist.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OverrideSourceStationlist>, I>>(object: I): OverrideSourceStationlist {
    const message = createBaseOverrideSourceStationlist();
    message.ischecked = object.ischecked ?? false;
    message.signalName = object.signalName ?? "";
    message.sourceStationName = object.sourceStationName ?? "";
    message.sourceSelecteIn = object.sourceSelecteIn ?? "";
    return message;
  },
};

function createBaseStubDataReply(): StubDataReply {
  return { parameterStat: undefined, topologyParameterStat: undefined };
}

export const StubDataReply = {
  fromJSON(object: any): StubDataReply {
    return {
      parameterStat: isSet(object.parameterStat) ? StubDataParameterStat.fromJSON(object.parameterStat) : undefined,
      topologyParameterStat: isSet(object.topologyParameterStat)
        ? StubDataTopologyParameterStat.fromJSON(object.topologyParameterStat)
        : undefined,
    };
  },

  toJSON(message: StubDataReply): unknown {
    const obj: any = {};
    if (message.parameterStat !== undefined) {
      obj.parameterStat = StubDataParameterStat.toJSON(message.parameterStat);
    }
    if (message.topologyParameterStat !== undefined) {
      obj.topologyParameterStat = StubDataTopologyParameterStat.toJSON(message.topologyParameterStat);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StubDataReply>, I>>(base?: I): StubDataReply {
    return StubDataReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StubDataReply>, I>>(object: I): StubDataReply {
    const message = createBaseStubDataReply();
    message.parameterStat = (object.parameterStat !== undefined && object.parameterStat !== null)
      ? StubDataParameterStat.fromPartial(object.parameterStat)
      : undefined;
    message.topologyParameterStat =
      (object.topologyParameterStat !== undefined && object.topologyParameterStat !== null)
        ? StubDataTopologyParameterStat.fromPartial(object.topologyParameterStat)
        : undefined;
    return message;
  },
};

function createBaseStubDataParameterStat(): StubDataParameterStat {
  return {
    groupNames: [],
    parametersTotalCount: 0,
    parametersPerGroupCount: [],
    powerParametersPerGroupCount: 0,
    reactivePowerParametersPerGroupCount: 0,
    controllerGroupsParameterCount: 0,
  };
}

export const StubDataParameterStat = {
  fromJSON(object: any): StubDataParameterStat {
    return {
      groupNames: gt.Array.isArray(object?.groupNames) ? object.groupNames.map((e: any) => gt.String(e)) : [],
      parametersTotalCount: isSet(object.parametersTotalCount) ? gt.Number(object.parametersTotalCount) : 0,
      parametersPerGroupCount: gt.Array.isArray(object?.parametersPerGroupCount)
        ? object.parametersPerGroupCount.map((e: any) => KeyValuePair.fromJSON(e))
        : [],
      powerParametersPerGroupCount: isSet(object.powerParametersPerGroupCount)
        ? gt.Number(object.powerParametersPerGroupCount)
        : 0,
      reactivePowerParametersPerGroupCount: isSet(object.reactivePowerParametersPerGroupCount)
        ? gt.Number(object.reactivePowerParametersPerGroupCount)
        : 0,
      controllerGroupsParameterCount: isSet(object.controllerGroupsParameterCount)
        ? gt.Number(object.controllerGroupsParameterCount)
        : 0,
    };
  },

  toJSON(message: StubDataParameterStat): unknown {
    const obj: any = {};
    if (message.groupNames?.length) {
      obj.groupNames = message.groupNames;
    }
    if (message.parametersTotalCount !== undefined && message.parametersTotalCount !== 0) {
      obj.parametersTotalCount = Math.round(message.parametersTotalCount);
    }
    if (message.parametersPerGroupCount?.length) {
      obj.parametersPerGroupCount = message.parametersPerGroupCount.map((e) => KeyValuePair.toJSON(e));
    }
    if (message.powerParametersPerGroupCount !== undefined && message.powerParametersPerGroupCount !== 0) {
      obj.powerParametersPerGroupCount = Math.round(message.powerParametersPerGroupCount);
    }
    if (
      message.reactivePowerParametersPerGroupCount !== undefined && message.reactivePowerParametersPerGroupCount !== 0
    ) {
      obj.reactivePowerParametersPerGroupCount = Math.round(message.reactivePowerParametersPerGroupCount);
    }
    if (message.controllerGroupsParameterCount !== undefined && message.controllerGroupsParameterCount !== 0) {
      obj.controllerGroupsParameterCount = Math.round(message.controllerGroupsParameterCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StubDataParameterStat>, I>>(base?: I): StubDataParameterStat {
    return StubDataParameterStat.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StubDataParameterStat>, I>>(object: I): StubDataParameterStat {
    const message = createBaseStubDataParameterStat();
    message.groupNames = object.groupNames?.map((e) => e) || [];
    message.parametersTotalCount = object.parametersTotalCount ?? 0;
    message.parametersPerGroupCount = object.parametersPerGroupCount?.map((e) => KeyValuePair.fromPartial(e)) || [];
    message.powerParametersPerGroupCount = object.powerParametersPerGroupCount ?? 0;
    message.reactivePowerParametersPerGroupCount = object.reactivePowerParametersPerGroupCount ?? 0;
    message.controllerGroupsParameterCount = object.controllerGroupsParameterCount ?? 0;
    return message;
  },
};

function createBaseStubDataTopologyParameterStat(): StubDataTopologyParameterStat {
  return { groupNames: [], parametersTotalCount: 0, parametersPerGroupCount: 0 };
}

export const StubDataTopologyParameterStat = {
  fromJSON(object: any): StubDataTopologyParameterStat {
    return {
      groupNames: gt.Array.isArray(object?.groupNames) ? object.groupNames.map((e: any) => gt.String(e)) : [],
      parametersTotalCount: isSet(object.parametersTotalCount) ? gt.Number(object.parametersTotalCount) : 0,
      parametersPerGroupCount: isSet(object.parametersPerGroupCount) ? gt.Number(object.parametersPerGroupCount) : 0,
    };
  },

  toJSON(message: StubDataTopologyParameterStat): unknown {
    const obj: any = {};
    if (message.groupNames?.length) {
      obj.groupNames = message.groupNames;
    }
    if (message.parametersTotalCount !== undefined && message.parametersTotalCount !== 0) {
      obj.parametersTotalCount = Math.round(message.parametersTotalCount);
    }
    if (message.parametersPerGroupCount !== undefined && message.parametersPerGroupCount !== 0) {
      obj.parametersPerGroupCount = Math.round(message.parametersPerGroupCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StubDataTopologyParameterStat>, I>>(base?: I): StubDataTopologyParameterStat {
    return StubDataTopologyParameterStat.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StubDataTopologyParameterStat>, I>>(
    object: I,
  ): StubDataTopologyParameterStat {
    const message = createBaseStubDataTopologyParameterStat();
    message.groupNames = object.groupNames?.map((e) => e) || [];
    message.parametersTotalCount = object.parametersTotalCount ?? 0;
    message.parametersPerGroupCount = object.parametersPerGroupCount ?? 0;
    return message;
  },
};

function createBaseActionLogReply(): ActionLogReply {
  return {
    actionName: "",
    timestamp: undefined,
    parameterName: "",
    previousValue: "",
    updatedValue: "",
    user: "",
    hosts: "",
  };
}

export const ActionLogReply = {
  fromJSON(object: any): ActionLogReply {
    return {
      actionName: isSet(object.actionName) ? gt.String(object.actionName) : "",
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      parameterName: isSet(object.parameterName) ? gt.String(object.parameterName) : "",
      previousValue: isSet(object.previousValue) ? gt.String(object.previousValue) : "",
      updatedValue: isSet(object.updatedValue) ? gt.String(object.updatedValue) : "",
      user: isSet(object.user) ? gt.String(object.user) : "",
      hosts: isSet(object.hosts) ? gt.String(object.hosts) : "",
    };
  },

  toJSON(message: ActionLogReply): unknown {
    const obj: any = {};
    if (message.actionName !== "") {
      obj.actionName = message.actionName;
    }
    if (message.timestamp !== undefined) {
      obj.timestamp = message.timestamp.toISOString();
    }
    if (message.parameterName !== undefined && message.parameterName !== "") {
      obj.parameterName = message.parameterName;
    }
    if (message.previousValue !== undefined && message.previousValue !== "") {
      obj.previousValue = message.previousValue;
    }
    if (message.updatedValue !== undefined && message.updatedValue !== "") {
      obj.updatedValue = message.updatedValue;
    }
    if (message.user !== undefined && message.user !== "") {
      obj.user = message.user;
    }
    if (message.hosts !== undefined && message.hosts !== "") {
      obj.hosts = message.hosts;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActionLogReply>, I>>(base?: I): ActionLogReply {
    return ActionLogReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActionLogReply>, I>>(object: I): ActionLogReply {
    const message = createBaseActionLogReply();
    message.actionName = object.actionName ?? "";
    message.timestamp = object.timestamp ?? undefined;
    message.parameterName = object.parameterName ?? "";
    message.previousValue = object.previousValue ?? "";
    message.updatedValue = object.updatedValue ?? "";
    message.user = object.user ?? "";
    message.hosts = object.hosts ?? "";
    return message;
  },
};

function createBaseParameterReply(): ParameterReply {
  return { name: "", group: "", controller: "", newValue: 0 };
}

export const ParameterReply = {
  fromJSON(object: any): ParameterReply {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      group: isSet(object.group) ? gt.String(object.group) : "",
      controller: isSet(object.controller) ? gt.String(object.controller) : "",
      newValue: isSet(object.newValue) ? gt.Number(object.newValue) : 0,
    };
  },

  toJSON(message: ParameterReply): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.group !== "") {
      obj.group = message.group;
    }
    if (message.controller !== "") {
      obj.controller = message.controller;
    }
    if (message.newValue !== undefined && message.newValue !== 0) {
      obj.newValue = message.newValue;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParameterReply>, I>>(base?: I): ParameterReply {
    return ParameterReply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParameterReply>, I>>(object: I): ParameterReply {
    const message = createBaseParameterReply();
    message.name = object.name ?? "";
    message.group = object.group ?? "";
    message.controller = object.controller ?? "";
    message.newValue = object.newValue ?? 0;
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

function bytesFromBase64(b64: string): Uint8Array {
  if ((gt as any).Buffer) {
    return Uint8Array.from(gt.Buffer.from(b64, "base64"));
  } else {
    const bin = gt.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((gt as any).Buffer) {
    return gt.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(gt.String.fromCharCode(byte));
    });
    return gt.btoa(bin.join(""));
  }
}

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
