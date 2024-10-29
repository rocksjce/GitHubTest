/* eslint-disable */
import { HaClusterStatus, haClusterStatusFromJSON, haClusterStatusToJSON } from "./HACommon.Generated";
import { UpstreamCompensationSetup } from "./Shared.Generated";
import { Timestamp } from "./google/protobuf/timestamp.Generated";

export interface AcknowledAlarm {
  sequenceId: number[];
  text?: string | undefined;
}

export interface AlarmLogQuery {
  fromTimeStamp?: Date | undefined;
  toTimeStamp?: Date | undefined;
  stationNameContains?: string | undefined;
  alarmCodes: number[];
  parameter?: string | undefined;
  user?: string | undefined;
  groupNameContains?: string | undefined;
}

export interface AlarmLogQueryGet {
  fromTimeStamp?: string | undefined;
  toTimeStamp?: string | undefined;
  stationNameContains?: string | undefined;
  alarmCodes: number[];
  parameter?: string | undefined;
  user?: string | undefined;
  groupNameContains?: string | undefined;
}

export interface AlarmQuery {
  groups: string[];
}

export interface AuditTrailQuery {
  fromEntryTime?: Date | undefined;
  toEntryTime?: Date | undefined;
  userName?: string | undefined;
  userNameContains?: string | undefined;
  detailedDescription?: string | undefined;
  detailedDescriptionContains?: string | undefined;
  source?: string | undefined;
  sourceContains?: string | undefined;
  trailId?: string | undefined;
  trailIdContains?: string | undefined;
  type?: string | undefined;
  maxNumberOfRows?: number | undefined;
  serverRole?: string | undefined;
  groupNameContains?: string | undefined;
}

export interface AuditTrailQueryGet {
  fromEntryTime?: string | undefined;
  toEntryTime?: string | undefined;
  userName?: string | undefined;
  userNameContains?: string | undefined;
  detailedDescription?: string | undefined;
  detailedDescriptionContains?: string | undefined;
  source?: string | undefined;
  sourceContains?: string | undefined;
  trailId?: string | undefined;
  trailIdContains?: string | undefined;
  type?: string | undefined;
  maxNumberOfRows?: number | undefined;
  serverRole?: string | undefined;
  groupName?: string | undefined;
  groupNameContains?: string | undefined;
}

export interface ControllerFeatureQuery {
  variableName?: string | undefined;
  controllerName?: string | undefined;
  groupName?: string | undefined;
  variableNames: string[];
  generatorGroupModelSequenceNumber?: number | undefined;
}

export interface CustomTagQuery {
}

export interface DatasetsQuery {
  dataSetId?: number | undefined;
  names: string[];
  groupName?: string | undefined;
}

export interface FrequencyResponseQuery {
  groupName?: string | undefined;
}

export interface GeneratorQuery {
  name?: string | undefined;
  fieldSelection?: string | undefined;
}

export interface GmsQuery {
  name?: string | undefined;
}

export interface GridProtectionFeatureQuery {
  groupName?: string | undefined;
  id?: number | undefined;
}

export interface HighAvailabilityRequest {
  clusterStatus?: HaClusterStatus | undefined;
  test?: string | undefined;
}

export interface InspectionGraphQuery {
  fromTimeStamp?: string | undefined;
  toTimeStamp?: string | undefined;
  signals: string[];
}

export interface LocalHighResolutionDataQuery {
  fromTimeStamp?: Date | undefined;
  toTimeStamp?: Date | undefined;
  viewEntry?: string | undefined;
  signals: string[];
  fullPath?: string | undefined;
  averageData?: boolean | undefined;
}

export interface LogControlRequest {
  enableLoggingPersistence?: boolean | undefined;
}

export interface HealthRequest {
}

export interface LogEntryQuery {
  index?: number | undefined;
  indexGreaterThan?: number | undefined;
}

export interface LogfilesBrowserQuery {
  path?: string | undefined;
}

export interface LogfilesQuery {
  path?: string | undefined;
  fileNameFilter: string[];
}

export interface LookupTableQuery {
  tableName?: string | undefined;
  groupName?: string | undefined;
  data?: string | undefined;
}

export interface ParameterChangeLogQuery {
  fromTimeStamp?: Date | undefined;
  toTimeStamp?: Date | undefined;
  userContains?: string | undefined;
  parameterContains?: string | undefined;
  controllerContains?: string | undefined;
  functionContains?: string | undefined;
  oldValue?: number | undefined;
  newValue?: number | undefined;
  topologyId?: number | undefined;
  groupId?: number | undefined;
}

export interface ParameterChangeLogQueryGet {
  fromTimeStamp?: string | undefined;
  toTimeStamp?: string | undefined;
  userContains?: string | undefined;
  parameterContains?: string | undefined;
  controllerContains?: string | undefined;
  functionContains?: string | undefined;
  oldValue?: number | undefined;
  newValue?: number | undefined;
  topologyId?: number | undefined;
  groupId?: number | undefined;
}

export interface ParameterFeatureKey {
  names: string[];
  groups: string[];
  controller?: string | undefined;
  functionalGroups: { [key: string]: string };
  hasFeatureRights?: boolean | undefined;
  functions: string[];
  grouped?: boolean | undefined;
}

export interface ParameterFeatureKey_FunctionalGroupsEntry {
  key: string;
  value: string;
}

export interface PolicyKey {
  id?: number | undefined;
}

export interface Ppg {
  stationName?: string | undefined;
  settings: Setting[];
}

export interface PpgSetup {
  stations: Ppg[];
}

export interface ProcessQuery {
  name?: string | undefined;
}

export interface ReferenceLogQuery {
  fromTimeStamp?: Date | undefined;
  toTimeStamp?: Date | undefined;
  userContains?: string | undefined;
  parameterContains?: string | undefined;
  controller?: string | undefined;
  newValue?: number | undefined;
  groupId?: number | undefined;
}

export interface ReferenceLogQueryGet {
  fromTimeStamp?: string | undefined;
  toTimeStamp?: string | undefined;
  userContains?: string | undefined;
  parameterContains?: string | undefined;
  controller?: string | undefined;
  newValue?: number | undefined;
  groupId?: number | undefined;
}

export interface SetPolicySource {
  previousSource?: string | undefined;
  source?: string | undefined;
  user?: string | undefined;
}

export interface SetUpstreamCompensationSetup {
  updated: UpstreamCompensationSetup[];
}

export interface Setting {
  name?: string | undefined;
  value?: string | undefined;
}

export interface SharedUiConfigStorageQuery {
  pageName?: string | undefined;
  name?: string | undefined;
}

export interface SharedUiConfigStorageUpdate {
  pageName?: string | undefined;
  name?: string | undefined;
  data: string[];
}

export interface TurbineParameterChangeLogQuery {
  fromTimeStamp?: Date | undefined;
  toTimeStamp?: Date | undefined;
  userContains?: string | undefined;
  parameterContains?: string | undefined;
  turbineNameContains?: string | undefined;
  oldValue?: number | undefined;
  newValue?: number | undefined;
}

export interface TurbineParameterChangeLogQueryGet {
  fromTimeStamp?: string | undefined;
  toTimeStamp?: string | undefined;
  userContains?: string | undefined;
  parameterContains?: string | undefined;
  turbineNameContains?: string | undefined;
  oldValue?: number | undefined;
  newValue?: number | undefined;
}

export interface TurbineSetting {
  stationName: string;
  settings: Setting[];
}

function createBaseAcknowledAlarm(): AcknowledAlarm {
  return { sequenceId: [], text: "" };
}

export const AcknowledAlarm = {
  fromJSON(object: any): AcknowledAlarm {
    return {
      sequenceId: gt.Array.isArray(object?.sequenceId) ? object.sequenceId.map((e: any) => gt.Number(e)) : [],
      text: isSet(object.text) ? gt.String(object.text) : "",
    };
  },

  toJSON(message: AcknowledAlarm): unknown {
    const obj: any = {};
    if (message.sequenceId?.length) {
      obj.sequenceId = message.sequenceId.map((e) => Math.round(e));
    }
    if (message.text !== undefined && message.text !== "") {
      obj.text = message.text;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AcknowledAlarm>, I>>(base?: I): AcknowledAlarm {
    return AcknowledAlarm.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AcknowledAlarm>, I>>(object: I): AcknowledAlarm {
    const message = createBaseAcknowledAlarm();
    message.sequenceId = object.sequenceId?.map((e) => e) || [];
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseAlarmLogQuery(): AlarmLogQuery {
  return {
    fromTimeStamp: undefined,
    toTimeStamp: undefined,
    stationNameContains: "",
    alarmCodes: [],
    parameter: "",
    user: "",
    groupNameContains: "",
  };
}

export const AlarmLogQuery = {
  fromJSON(object: any): AlarmLogQuery {
    return {
      fromTimeStamp: isSet(object.fromTimeStamp) ? fromJsonTimestamp(object.fromTimeStamp) : undefined,
      toTimeStamp: isSet(object.toTimeStamp) ? fromJsonTimestamp(object.toTimeStamp) : undefined,
      stationNameContains: isSet(object.stationNameContains) ? gt.String(object.stationNameContains) : "",
      alarmCodes: gt.Array.isArray(object?.alarmCodes) ? object.alarmCodes.map((e: any) => gt.Number(e)) : [],
      parameter: isSet(object.parameter) ? gt.String(object.parameter) : "",
      user: isSet(object.user) ? gt.String(object.user) : "",
      groupNameContains: isSet(object.groupNameContains) ? gt.String(object.groupNameContains) : "",
    };
  },

  toJSON(message: AlarmLogQuery): unknown {
    const obj: any = {};
    if (message.fromTimeStamp !== undefined) {
      obj.fromTimeStamp = message.fromTimeStamp.toISOString();
    }
    if (message.toTimeStamp !== undefined) {
      obj.toTimeStamp = message.toTimeStamp.toISOString();
    }
    if (message.stationNameContains !== undefined && message.stationNameContains !== "") {
      obj.stationNameContains = message.stationNameContains;
    }
    if (message.alarmCodes?.length) {
      obj.alarmCodes = message.alarmCodes.map((e) => Math.round(e));
    }
    if (message.parameter !== undefined && message.parameter !== "") {
      obj.parameter = message.parameter;
    }
    if (message.user !== undefined && message.user !== "") {
      obj.user = message.user;
    }
    if (message.groupNameContains !== undefined && message.groupNameContains !== "") {
      obj.groupNameContains = message.groupNameContains;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AlarmLogQuery>, I>>(base?: I): AlarmLogQuery {
    return AlarmLogQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AlarmLogQuery>, I>>(object: I): AlarmLogQuery {
    const message = createBaseAlarmLogQuery();
    message.fromTimeStamp = object.fromTimeStamp ?? undefined;
    message.toTimeStamp = object.toTimeStamp ?? undefined;
    message.stationNameContains = object.stationNameContains ?? "";
    message.alarmCodes = object.alarmCodes?.map((e) => e) || [];
    message.parameter = object.parameter ?? "";
    message.user = object.user ?? "";
    message.groupNameContains = object.groupNameContains ?? "";
    return message;
  },
};

function createBaseAlarmLogQueryGet(): AlarmLogQueryGet {
  return {
    fromTimeStamp: "",
    toTimeStamp: "",
    stationNameContains: "",
    alarmCodes: [],
    parameter: "",
    user: "",
    groupNameContains: "",
  };
}

export const AlarmLogQueryGet = {
  fromJSON(object: any): AlarmLogQueryGet {
    return {
      fromTimeStamp: isSet(object.fromTimeStamp) ? gt.String(object.fromTimeStamp) : "",
      toTimeStamp: isSet(object.toTimeStamp) ? gt.String(object.toTimeStamp) : "",
      stationNameContains: isSet(object.stationNameContains) ? gt.String(object.stationNameContains) : "",
      alarmCodes: gt.Array.isArray(object?.alarmCodes) ? object.alarmCodes.map((e: any) => gt.Number(e)) : [],
      parameter: isSet(object.parameter) ? gt.String(object.parameter) : "",
      user: isSet(object.user) ? gt.String(object.user) : "",
      groupNameContains: isSet(object.groupNameContains) ? gt.String(object.groupNameContains) : "",
    };
  },

  toJSON(message: AlarmLogQueryGet): unknown {
    const obj: any = {};
    if (message.fromTimeStamp !== undefined && message.fromTimeStamp !== "") {
      obj.fromTimeStamp = message.fromTimeStamp;
    }
    if (message.toTimeStamp !== undefined && message.toTimeStamp !== "") {
      obj.toTimeStamp = message.toTimeStamp;
    }
    if (message.stationNameContains !== undefined && message.stationNameContains !== "") {
      obj.stationNameContains = message.stationNameContains;
    }
    if (message.alarmCodes?.length) {
      obj.alarmCodes = message.alarmCodes.map((e) => Math.round(e));
    }
    if (message.parameter !== undefined && message.parameter !== "") {
      obj.parameter = message.parameter;
    }
    if (message.user !== undefined && message.user !== "") {
      obj.user = message.user;
    }
    if (message.groupNameContains !== undefined && message.groupNameContains !== "") {
      obj.groupNameContains = message.groupNameContains;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AlarmLogQueryGet>, I>>(base?: I): AlarmLogQueryGet {
    return AlarmLogQueryGet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AlarmLogQueryGet>, I>>(object: I): AlarmLogQueryGet {
    const message = createBaseAlarmLogQueryGet();
    message.fromTimeStamp = object.fromTimeStamp ?? "";
    message.toTimeStamp = object.toTimeStamp ?? "";
    message.stationNameContains = object.stationNameContains ?? "";
    message.alarmCodes = object.alarmCodes?.map((e) => e) || [];
    message.parameter = object.parameter ?? "";
    message.user = object.user ?? "";
    message.groupNameContains = object.groupNameContains ?? "";
    return message;
  },
};

function createBaseAlarmQuery(): AlarmQuery {
  return { groups: [] };
}

export const AlarmQuery = {
  fromJSON(object: any): AlarmQuery {
    return { groups: gt.Array.isArray(object?.groups) ? object.groups.map((e: any) => gt.String(e)) : [] };
  },

  toJSON(message: AlarmQuery): unknown {
    const obj: any = {};
    if (message.groups?.length) {
      obj.groups = message.groups;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AlarmQuery>, I>>(base?: I): AlarmQuery {
    return AlarmQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AlarmQuery>, I>>(object: I): AlarmQuery {
    const message = createBaseAlarmQuery();
    message.groups = object.groups?.map((e) => e) || [];
    return message;
  },
};

function createBaseAuditTrailQuery(): AuditTrailQuery {
  return {
    fromEntryTime: undefined,
    toEntryTime: undefined,
    userName: "",
    userNameContains: "",
    detailedDescription: "",
    detailedDescriptionContains: "",
    source: "",
    sourceContains: "",
    trailId: "",
    trailIdContains: "",
    type: "",
    maxNumberOfRows: 0,
    serverRole: "",
    groupNameContains: "",
  };
}

export const AuditTrailQuery = {
  fromJSON(object: any): AuditTrailQuery {
    return {
      fromEntryTime: isSet(object.fromEntryTime) ? fromJsonTimestamp(object.fromEntryTime) : undefined,
      toEntryTime: isSet(object.toEntryTime) ? fromJsonTimestamp(object.toEntryTime) : undefined,
      userName: isSet(object.userName) ? gt.String(object.userName) : "",
      userNameContains: isSet(object.userNameContains) ? gt.String(object.userNameContains) : "",
      detailedDescription: isSet(object.detailedDescription) ? gt.String(object.detailedDescription) : "",
      detailedDescriptionContains: isSet(object.detailedDescriptionContains)
        ? gt.String(object.detailedDescriptionContains)
        : "",
      source: isSet(object.source) ? gt.String(object.source) : "",
      sourceContains: isSet(object.sourceContains) ? gt.String(object.sourceContains) : "",
      trailId: isSet(object.trailId) ? gt.String(object.trailId) : "",
      trailIdContains: isSet(object.trailIdContains) ? gt.String(object.trailIdContains) : "",
      type: isSet(object.type) ? gt.String(object.type) : "",
      maxNumberOfRows: isSet(object.maxNumberOfRows) ? gt.Number(object.maxNumberOfRows) : 0,
      serverRole: isSet(object.serverRole) ? gt.String(object.serverRole) : "",
      groupNameContains: isSet(object.groupNameContains) ? gt.String(object.groupNameContains) : "",
    };
  },

  toJSON(message: AuditTrailQuery): unknown {
    const obj: any = {};
    if (message.fromEntryTime !== undefined) {
      obj.fromEntryTime = message.fromEntryTime.toISOString();
    }
    if (message.toEntryTime !== undefined) {
      obj.toEntryTime = message.toEntryTime.toISOString();
    }
    if (message.userName !== undefined && message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.userNameContains !== undefined && message.userNameContains !== "") {
      obj.userNameContains = message.userNameContains;
    }
    if (message.detailedDescription !== undefined && message.detailedDescription !== "") {
      obj.detailedDescription = message.detailedDescription;
    }
    if (message.detailedDescriptionContains !== undefined && message.detailedDescriptionContains !== "") {
      obj.detailedDescriptionContains = message.detailedDescriptionContains;
    }
    if (message.source !== undefined && message.source !== "") {
      obj.source = message.source;
    }
    if (message.sourceContains !== undefined && message.sourceContains !== "") {
      obj.sourceContains = message.sourceContains;
    }
    if (message.trailId !== undefined && message.trailId !== "") {
      obj.trailId = message.trailId;
    }
    if (message.trailIdContains !== undefined && message.trailIdContains !== "") {
      obj.trailIdContains = message.trailIdContains;
    }
    if (message.type !== undefined && message.type !== "") {
      obj.type = message.type;
    }
    if (message.maxNumberOfRows !== undefined && message.maxNumberOfRows !== 0) {
      obj.maxNumberOfRows = Math.round(message.maxNumberOfRows);
    }
    if (message.serverRole !== undefined && message.serverRole !== "") {
      obj.serverRole = message.serverRole;
    }
    if (message.groupNameContains !== undefined && message.groupNameContains !== "") {
      obj.groupNameContains = message.groupNameContains;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AuditTrailQuery>, I>>(base?: I): AuditTrailQuery {
    return AuditTrailQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuditTrailQuery>, I>>(object: I): AuditTrailQuery {
    const message = createBaseAuditTrailQuery();
    message.fromEntryTime = object.fromEntryTime ?? undefined;
    message.toEntryTime = object.toEntryTime ?? undefined;
    message.userName = object.userName ?? "";
    message.userNameContains = object.userNameContains ?? "";
    message.detailedDescription = object.detailedDescription ?? "";
    message.detailedDescriptionContains = object.detailedDescriptionContains ?? "";
    message.source = object.source ?? "";
    message.sourceContains = object.sourceContains ?? "";
    message.trailId = object.trailId ?? "";
    message.trailIdContains = object.trailIdContains ?? "";
    message.type = object.type ?? "";
    message.maxNumberOfRows = object.maxNumberOfRows ?? 0;
    message.serverRole = object.serverRole ?? "";
    message.groupNameContains = object.groupNameContains ?? "";
    return message;
  },
};

function createBaseAuditTrailQueryGet(): AuditTrailQueryGet {
  return {
    fromEntryTime: "",
    toEntryTime: "",
    userName: "",
    userNameContains: "",
    detailedDescription: "",
    detailedDescriptionContains: "",
    source: "",
    sourceContains: "",
    trailId: "",
    trailIdContains: "",
    type: "",
    maxNumberOfRows: 0,
    serverRole: "",
    groupName: "",
    groupNameContains: "",
  };
}

export const AuditTrailQueryGet = {
  fromJSON(object: any): AuditTrailQueryGet {
    return {
      fromEntryTime: isSet(object.fromEntryTime) ? gt.String(object.fromEntryTime) : "",
      toEntryTime: isSet(object.toEntryTime) ? gt.String(object.toEntryTime) : "",
      userName: isSet(object.userName) ? gt.String(object.userName) : "",
      userNameContains: isSet(object.userNameContains) ? gt.String(object.userNameContains) : "",
      detailedDescription: isSet(object.detailedDescription) ? gt.String(object.detailedDescription) : "",
      detailedDescriptionContains: isSet(object.detailedDescriptionContains)
        ? gt.String(object.detailedDescriptionContains)
        : "",
      source: isSet(object.source) ? gt.String(object.source) : "",
      sourceContains: isSet(object.sourceContains) ? gt.String(object.sourceContains) : "",
      trailId: isSet(object.trailId) ? gt.String(object.trailId) : "",
      trailIdContains: isSet(object.trailIdContains) ? gt.String(object.trailIdContains) : "",
      type: isSet(object.type) ? gt.String(object.type) : "",
      maxNumberOfRows: isSet(object.maxNumberOfRows) ? gt.Number(object.maxNumberOfRows) : 0,
      serverRole: isSet(object.serverRole) ? gt.String(object.serverRole) : "",
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      groupNameContains: isSet(object.groupNameContains) ? gt.String(object.groupNameContains) : "",
    };
  },

  toJSON(message: AuditTrailQueryGet): unknown {
    const obj: any = {};
    if (message.fromEntryTime !== undefined && message.fromEntryTime !== "") {
      obj.fromEntryTime = message.fromEntryTime;
    }
    if (message.toEntryTime !== undefined && message.toEntryTime !== "") {
      obj.toEntryTime = message.toEntryTime;
    }
    if (message.userName !== undefined && message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.userNameContains !== undefined && message.userNameContains !== "") {
      obj.userNameContains = message.userNameContains;
    }
    if (message.detailedDescription !== undefined && message.detailedDescription !== "") {
      obj.detailedDescription = message.detailedDescription;
    }
    if (message.detailedDescriptionContains !== undefined && message.detailedDescriptionContains !== "") {
      obj.detailedDescriptionContains = message.detailedDescriptionContains;
    }
    if (message.source !== undefined && message.source !== "") {
      obj.source = message.source;
    }
    if (message.sourceContains !== undefined && message.sourceContains !== "") {
      obj.sourceContains = message.sourceContains;
    }
    if (message.trailId !== undefined && message.trailId !== "") {
      obj.trailId = message.trailId;
    }
    if (message.trailIdContains !== undefined && message.trailIdContains !== "") {
      obj.trailIdContains = message.trailIdContains;
    }
    if (message.type !== undefined && message.type !== "") {
      obj.type = message.type;
    }
    if (message.maxNumberOfRows !== undefined && message.maxNumberOfRows !== 0) {
      obj.maxNumberOfRows = Math.round(message.maxNumberOfRows);
    }
    if (message.serverRole !== undefined && message.serverRole !== "") {
      obj.serverRole = message.serverRole;
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.groupNameContains !== undefined && message.groupNameContains !== "") {
      obj.groupNameContains = message.groupNameContains;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AuditTrailQueryGet>, I>>(base?: I): AuditTrailQueryGet {
    return AuditTrailQueryGet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuditTrailQueryGet>, I>>(object: I): AuditTrailQueryGet {
    const message = createBaseAuditTrailQueryGet();
    message.fromEntryTime = object.fromEntryTime ?? "";
    message.toEntryTime = object.toEntryTime ?? "";
    message.userName = object.userName ?? "";
    message.userNameContains = object.userNameContains ?? "";
    message.detailedDescription = object.detailedDescription ?? "";
    message.detailedDescriptionContains = object.detailedDescriptionContains ?? "";
    message.source = object.source ?? "";
    message.sourceContains = object.sourceContains ?? "";
    message.trailId = object.trailId ?? "";
    message.trailIdContains = object.trailIdContains ?? "";
    message.type = object.type ?? "";
    message.maxNumberOfRows = object.maxNumberOfRows ?? 0;
    message.serverRole = object.serverRole ?? "";
    message.groupName = object.groupName ?? "";
    message.groupNameContains = object.groupNameContains ?? "";
    return message;
  },
};

function createBaseControllerFeatureQuery(): ControllerFeatureQuery {
  return {
    variableName: "",
    controllerName: "",
    groupName: "",
    variableNames: [],
    generatorGroupModelSequenceNumber: 0,
  };
}

export const ControllerFeatureQuery = {
  fromJSON(object: any): ControllerFeatureQuery {
    return {
      variableName: isSet(object.variableName) ? gt.String(object.variableName) : "",
      controllerName: isSet(object.controllerName) ? gt.String(object.controllerName) : "",
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      variableNames: gt.Array.isArray(object?.variableNames) ? object.variableNames.map((e: any) => gt.String(e)) : [],
      generatorGroupModelSequenceNumber: isSet(object.generatorGroupModelSequenceNumber)
        ? gt.Number(object.generatorGroupModelSequenceNumber)
        : 0,
    };
  },

  toJSON(message: ControllerFeatureQuery): unknown {
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
    if (message.variableNames?.length) {
      obj.variableNames = message.variableNames;
    }
    if (message.generatorGroupModelSequenceNumber !== undefined && message.generatorGroupModelSequenceNumber !== 0) {
      obj.generatorGroupModelSequenceNumber = Math.round(message.generatorGroupModelSequenceNumber);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ControllerFeatureQuery>, I>>(base?: I): ControllerFeatureQuery {
    return ControllerFeatureQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ControllerFeatureQuery>, I>>(object: I): ControllerFeatureQuery {
    const message = createBaseControllerFeatureQuery();
    message.variableName = object.variableName ?? "";
    message.controllerName = object.controllerName ?? "";
    message.groupName = object.groupName ?? "";
    message.variableNames = object.variableNames?.map((e) => e) || [];
    message.generatorGroupModelSequenceNumber = object.generatorGroupModelSequenceNumber ?? 0;
    return message;
  },
};

function createBaseCustomTagQuery(): CustomTagQuery {
  return {};
}

export const CustomTagQuery = {
  fromJSON(_: any): CustomTagQuery {
    return {};
  },

  toJSON(_: CustomTagQuery): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CustomTagQuery>, I>>(base?: I): CustomTagQuery {
    return CustomTagQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CustomTagQuery>, I>>(_: I): CustomTagQuery {
    const message = createBaseCustomTagQuery();
    return message;
  },
};

function createBaseDatasetsQuery(): DatasetsQuery {
  return { dataSetId: 0, names: [], groupName: "" };
}

export const DatasetsQuery = {
  fromJSON(object: any): DatasetsQuery {
    return {
      dataSetId: isSet(object.dataSetId) ? gt.Number(object.dataSetId) : 0,
      names: gt.Array.isArray(object?.names) ? object.names.map((e: any) => gt.String(e)) : [],
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
    };
  },

  toJSON(message: DatasetsQuery): unknown {
    const obj: any = {};
    if (message.dataSetId !== undefined && message.dataSetId !== 0) {
      obj.dataSetId = Math.round(message.dataSetId);
    }
    if (message.names?.length) {
      obj.names = message.names;
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DatasetsQuery>, I>>(base?: I): DatasetsQuery {
    return DatasetsQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DatasetsQuery>, I>>(object: I): DatasetsQuery {
    const message = createBaseDatasetsQuery();
    message.dataSetId = object.dataSetId ?? 0;
    message.names = object.names?.map((e) => e) || [];
    message.groupName = object.groupName ?? "";
    return message;
  },
};

function createBaseFrequencyResponseQuery(): FrequencyResponseQuery {
  return { groupName: "" };
}

export const FrequencyResponseQuery = {
  fromJSON(object: any): FrequencyResponseQuery {
    return { groupName: isSet(object.groupName) ? gt.String(object.groupName) : "" };
  },

  toJSON(message: FrequencyResponseQuery): unknown {
    const obj: any = {};
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FrequencyResponseQuery>, I>>(base?: I): FrequencyResponseQuery {
    return FrequencyResponseQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FrequencyResponseQuery>, I>>(object: I): FrequencyResponseQuery {
    const message = createBaseFrequencyResponseQuery();
    message.groupName = object.groupName ?? "";
    return message;
  },
};

function createBaseGeneratorQuery(): GeneratorQuery {
  return { name: "", fieldSelection: "" };
}

export const GeneratorQuery = {
  fromJSON(object: any): GeneratorQuery {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      fieldSelection: isSet(object.fieldSelection) ? gt.String(object.fieldSelection) : "",
    };
  },

  toJSON(message: GeneratorQuery): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.fieldSelection !== undefined && message.fieldSelection !== "") {
      obj.fieldSelection = message.fieldSelection;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneratorQuery>, I>>(base?: I): GeneratorQuery {
    return GeneratorQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneratorQuery>, I>>(object: I): GeneratorQuery {
    const message = createBaseGeneratorQuery();
    message.name = object.name ?? "";
    message.fieldSelection = object.fieldSelection ?? "";
    return message;
  },
};

function createBaseGmsQuery(): GmsQuery {
  return { name: "" };
}

export const GmsQuery = {
  fromJSON(object: any): GmsQuery {
    return { name: isSet(object.name) ? gt.String(object.name) : "" };
  },

  toJSON(message: GmsQuery): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GmsQuery>, I>>(base?: I): GmsQuery {
    return GmsQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GmsQuery>, I>>(object: I): GmsQuery {
    const message = createBaseGmsQuery();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseGridProtectionFeatureQuery(): GridProtectionFeatureQuery {
  return { groupName: "", id: 0 };
}

export const GridProtectionFeatureQuery = {
  fromJSON(object: any): GridProtectionFeatureQuery {
    return {
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      id: isSet(object.id) ? gt.Number(object.id) : 0,
    };
  },

  toJSON(message: GridProtectionFeatureQuery): unknown {
    const obj: any = {};
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.id !== undefined && message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GridProtectionFeatureQuery>, I>>(base?: I): GridProtectionFeatureQuery {
    return GridProtectionFeatureQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GridProtectionFeatureQuery>, I>>(object: I): GridProtectionFeatureQuery {
    const message = createBaseGridProtectionFeatureQuery();
    message.groupName = object.groupName ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseHighAvailabilityRequest(): HighAvailabilityRequest {
  return { clusterStatus: HaClusterStatus.OFF, test: "" };
}

export const HighAvailabilityRequest = {
  fromJSON(object: any): HighAvailabilityRequest {
    return {
      clusterStatus: isSet(object.clusterStatus) ? haClusterStatusFromJSON(object.clusterStatus) : HaClusterStatus.OFF,
      test: isSet(object.test) ? gt.String(object.test) : "",
    };
  },

  toJSON(message: HighAvailabilityRequest): unknown {
    const obj: any = {};
    if (message.clusterStatus !== undefined && message.clusterStatus !== HaClusterStatus.OFF) {
      obj.clusterStatus = haClusterStatusToJSON(message.clusterStatus);
    }
    if (message.test !== undefined && message.test !== "") {
      obj.test = message.test;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HighAvailabilityRequest>, I>>(base?: I): HighAvailabilityRequest {
    return HighAvailabilityRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HighAvailabilityRequest>, I>>(object: I): HighAvailabilityRequest {
    const message = createBaseHighAvailabilityRequest();
    message.clusterStatus = object.clusterStatus ?? HaClusterStatus.OFF;
    message.test = object.test ?? "";
    return message;
  },
};

function createBaseInspectionGraphQuery(): InspectionGraphQuery {
  return { fromTimeStamp: "", toTimeStamp: "", signals: [] };
}

export const InspectionGraphQuery = {
  fromJSON(object: any): InspectionGraphQuery {
    return {
      fromTimeStamp: isSet(object.fromTimeStamp) ? gt.String(object.fromTimeStamp) : "",
      toTimeStamp: isSet(object.toTimeStamp) ? gt.String(object.toTimeStamp) : "",
      signals: gt.Array.isArray(object?.signals) ? object.signals.map((e: any) => gt.String(e)) : [],
    };
  },

  toJSON(message: InspectionGraphQuery): unknown {
    const obj: any = {};
    if (message.fromTimeStamp !== undefined && message.fromTimeStamp !== "") {
      obj.fromTimeStamp = message.fromTimeStamp;
    }
    if (message.toTimeStamp !== undefined && message.toTimeStamp !== "") {
      obj.toTimeStamp = message.toTimeStamp;
    }
    if (message.signals?.length) {
      obj.signals = message.signals;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InspectionGraphQuery>, I>>(base?: I): InspectionGraphQuery {
    return InspectionGraphQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InspectionGraphQuery>, I>>(object: I): InspectionGraphQuery {
    const message = createBaseInspectionGraphQuery();
    message.fromTimeStamp = object.fromTimeStamp ?? "";
    message.toTimeStamp = object.toTimeStamp ?? "";
    message.signals = object.signals?.map((e) => e) || [];
    return message;
  },
};

function createBaseLocalHighResolutionDataQuery(): LocalHighResolutionDataQuery {
  return {
    fromTimeStamp: undefined,
    toTimeStamp: undefined,
    viewEntry: "",
    signals: [],
    fullPath: "",
    averageData: false,
  };
}

export const LocalHighResolutionDataQuery = {
  fromJSON(object: any): LocalHighResolutionDataQuery {
    return {
      fromTimeStamp: isSet(object.fromTimeStamp) ? fromJsonTimestamp(object.fromTimeStamp) : undefined,
      toTimeStamp: isSet(object.toTimeStamp) ? fromJsonTimestamp(object.toTimeStamp) : undefined,
      viewEntry: isSet(object.viewEntry) ? gt.String(object.viewEntry) : "",
      signals: gt.Array.isArray(object?.signals) ? object.signals.map((e: any) => gt.String(e)) : [],
      fullPath: isSet(object.fullPath) ? gt.String(object.fullPath) : "",
      averageData: isSet(object.averageData) ? gt.Boolean(object.averageData) : false,
    };
  },

  toJSON(message: LocalHighResolutionDataQuery): unknown {
    const obj: any = {};
    if (message.fromTimeStamp !== undefined) {
      obj.fromTimeStamp = message.fromTimeStamp.toISOString();
    }
    if (message.toTimeStamp !== undefined) {
      obj.toTimeStamp = message.toTimeStamp.toISOString();
    }
    if (message.viewEntry !== undefined && message.viewEntry !== "") {
      obj.viewEntry = message.viewEntry;
    }
    if (message.signals?.length) {
      obj.signals = message.signals;
    }
    if (message.fullPath !== undefined && message.fullPath !== "") {
      obj.fullPath = message.fullPath;
    }
    if (message.averageData !== undefined && message.averageData !== false) {
      obj.averageData = message.averageData;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LocalHighResolutionDataQuery>, I>>(base?: I): LocalHighResolutionDataQuery {
    return LocalHighResolutionDataQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LocalHighResolutionDataQuery>, I>>(object: I): LocalHighResolutionDataQuery {
    const message = createBaseLocalHighResolutionDataQuery();
    message.fromTimeStamp = object.fromTimeStamp ?? undefined;
    message.toTimeStamp = object.toTimeStamp ?? undefined;
    message.viewEntry = object.viewEntry ?? "";
    message.signals = object.signals?.map((e) => e) || [];
    message.fullPath = object.fullPath ?? "";
    message.averageData = object.averageData ?? false;
    return message;
  },
};

function createBaseLogControlRequest(): LogControlRequest {
  return { enableLoggingPersistence: false };
}

export const LogControlRequest = {
  fromJSON(object: any): LogControlRequest {
    return {
      enableLoggingPersistence: isSet(object.enableLoggingPersistence)
        ? gt.Boolean(object.enableLoggingPersistence)
        : false,
    };
  },

  toJSON(message: LogControlRequest): unknown {
    const obj: any = {};
    if (message.enableLoggingPersistence !== undefined && message.enableLoggingPersistence !== false) {
      obj.enableLoggingPersistence = message.enableLoggingPersistence;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogControlRequest>, I>>(base?: I): LogControlRequest {
    return LogControlRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogControlRequest>, I>>(object: I): LogControlRequest {
    const message = createBaseLogControlRequest();
    message.enableLoggingPersistence = object.enableLoggingPersistence ?? false;
    return message;
  },
};

function createBaseHealthRequest(): HealthRequest {
  return {};
}

export const HealthRequest = {
  fromJSON(_: any): HealthRequest {
    return {};
  },

  toJSON(_: HealthRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<HealthRequest>, I>>(base?: I): HealthRequest {
    return HealthRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HealthRequest>, I>>(_: I): HealthRequest {
    const message = createBaseHealthRequest();
    return message;
  },
};

function createBaseLogEntryQuery(): LogEntryQuery {
  return { index: 0, indexGreaterThan: 0 };
}

export const LogEntryQuery = {
  fromJSON(object: any): LogEntryQuery {
    return {
      index: isSet(object.index) ? gt.Number(object.index) : 0,
      indexGreaterThan: isSet(object.indexGreaterThan) ? gt.Number(object.indexGreaterThan) : 0,
    };
  },

  toJSON(message: LogEntryQuery): unknown {
    const obj: any = {};
    if (message.index !== undefined && message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.indexGreaterThan !== undefined && message.indexGreaterThan !== 0) {
      obj.indexGreaterThan = Math.round(message.indexGreaterThan);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogEntryQuery>, I>>(base?: I): LogEntryQuery {
    return LogEntryQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogEntryQuery>, I>>(object: I): LogEntryQuery {
    const message = createBaseLogEntryQuery();
    message.index = object.index ?? 0;
    message.indexGreaterThan = object.indexGreaterThan ?? 0;
    return message;
  },
};

function createBaseLogfilesBrowserQuery(): LogfilesBrowserQuery {
  return { path: "" };
}

export const LogfilesBrowserQuery = {
  fromJSON(object: any): LogfilesBrowserQuery {
    return { path: isSet(object.path) ? gt.String(object.path) : "" };
  },

  toJSON(message: LogfilesBrowserQuery): unknown {
    const obj: any = {};
    if (message.path !== undefined && message.path !== "") {
      obj.path = message.path;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogfilesBrowserQuery>, I>>(base?: I): LogfilesBrowserQuery {
    return LogfilesBrowserQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogfilesBrowserQuery>, I>>(object: I): LogfilesBrowserQuery {
    const message = createBaseLogfilesBrowserQuery();
    message.path = object.path ?? "";
    return message;
  },
};

function createBaseLogfilesQuery(): LogfilesQuery {
  return { path: "", fileNameFilter: [] };
}

export const LogfilesQuery = {
  fromJSON(object: any): LogfilesQuery {
    return {
      path: isSet(object.path) ? gt.String(object.path) : "",
      fileNameFilter: gt.Array.isArray(object?.fileNameFilter)
        ? object.fileNameFilter.map((e: any) => gt.String(e))
        : [],
    };
  },

  toJSON(message: LogfilesQuery): unknown {
    const obj: any = {};
    if (message.path !== undefined && message.path !== "") {
      obj.path = message.path;
    }
    if (message.fileNameFilter?.length) {
      obj.fileNameFilter = message.fileNameFilter;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LogfilesQuery>, I>>(base?: I): LogfilesQuery {
    return LogfilesQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LogfilesQuery>, I>>(object: I): LogfilesQuery {
    const message = createBaseLogfilesQuery();
    message.path = object.path ?? "";
    message.fileNameFilter = object.fileNameFilter?.map((e) => e) || [];
    return message;
  },
};

function createBaseLookupTableQuery(): LookupTableQuery {
  return { tableName: "", groupName: "", data: "" };
}

export const LookupTableQuery = {
  fromJSON(object: any): LookupTableQuery {
    return {
      tableName: isSet(object.tableName) ? gt.String(object.tableName) : "",
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      data: isSet(object.data) ? gt.String(object.data) : "",
    };
  },

  toJSON(message: LookupTableQuery): unknown {
    const obj: any = {};
    if (message.tableName !== undefined && message.tableName !== "") {
      obj.tableName = message.tableName;
    }
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.data !== undefined && message.data !== "") {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LookupTableQuery>, I>>(base?: I): LookupTableQuery {
    return LookupTableQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LookupTableQuery>, I>>(object: I): LookupTableQuery {
    const message = createBaseLookupTableQuery();
    message.tableName = object.tableName ?? "";
    message.groupName = object.groupName ?? "";
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseParameterChangeLogQuery(): ParameterChangeLogQuery {
  return {
    fromTimeStamp: undefined,
    toTimeStamp: undefined,
    userContains: "",
    parameterContains: "",
    controllerContains: "",
    functionContains: "",
    oldValue: 0,
    newValue: 0,
    topologyId: 0,
    groupId: 0,
  };
}

export const ParameterChangeLogQuery = {
  fromJSON(object: any): ParameterChangeLogQuery {
    return {
      fromTimeStamp: isSet(object.fromTimeStamp) ? fromJsonTimestamp(object.fromTimeStamp) : undefined,
      toTimeStamp: isSet(object.toTimeStamp) ? fromJsonTimestamp(object.toTimeStamp) : undefined,
      userContains: isSet(object.userContains) ? gt.String(object.userContains) : "",
      parameterContains: isSet(object.parameterContains) ? gt.String(object.parameterContains) : "",
      controllerContains: isSet(object.controllerContains) ? gt.String(object.controllerContains) : "",
      functionContains: isSet(object.functionContains) ? gt.String(object.functionContains) : "",
      oldValue: isSet(object.oldValue) ? gt.Number(object.oldValue) : 0,
      newValue: isSet(object.newValue) ? gt.Number(object.newValue) : 0,
      topologyId: isSet(object.topologyId) ? gt.Number(object.topologyId) : 0,
      groupId: isSet(object.groupId) ? gt.Number(object.groupId) : 0,
    };
  },

  toJSON(message: ParameterChangeLogQuery): unknown {
    const obj: any = {};
    if (message.fromTimeStamp !== undefined) {
      obj.fromTimeStamp = message.fromTimeStamp.toISOString();
    }
    if (message.toTimeStamp !== undefined) {
      obj.toTimeStamp = message.toTimeStamp.toISOString();
    }
    if (message.userContains !== undefined && message.userContains !== "") {
      obj.userContains = message.userContains;
    }
    if (message.parameterContains !== undefined && message.parameterContains !== "") {
      obj.parameterContains = message.parameterContains;
    }
    if (message.controllerContains !== undefined && message.controllerContains !== "") {
      obj.controllerContains = message.controllerContains;
    }
    if (message.functionContains !== undefined && message.functionContains !== "") {
      obj.functionContains = message.functionContains;
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
    if (message.groupId !== undefined && message.groupId !== 0) {
      obj.groupId = Math.round(message.groupId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParameterChangeLogQuery>, I>>(base?: I): ParameterChangeLogQuery {
    return ParameterChangeLogQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParameterChangeLogQuery>, I>>(object: I): ParameterChangeLogQuery {
    const message = createBaseParameterChangeLogQuery();
    message.fromTimeStamp = object.fromTimeStamp ?? undefined;
    message.toTimeStamp = object.toTimeStamp ?? undefined;
    message.userContains = object.userContains ?? "";
    message.parameterContains = object.parameterContains ?? "";
    message.controllerContains = object.controllerContains ?? "";
    message.functionContains = object.functionContains ?? "";
    message.oldValue = object.oldValue ?? 0;
    message.newValue = object.newValue ?? 0;
    message.topologyId = object.topologyId ?? 0;
    message.groupId = object.groupId ?? 0;
    return message;
  },
};

function createBaseParameterChangeLogQueryGet(): ParameterChangeLogQueryGet {
  return {
    fromTimeStamp: "",
    toTimeStamp: "",
    userContains: "",
    parameterContains: "",
    controllerContains: "",
    functionContains: "",
    oldValue: 0,
    newValue: 0,
    topologyId: 0,
    groupId: 0,
  };
}

export const ParameterChangeLogQueryGet = {
  fromJSON(object: any): ParameterChangeLogQueryGet {
    return {
      fromTimeStamp: isSet(object.fromTimeStamp) ? gt.String(object.fromTimeStamp) : "",
      toTimeStamp: isSet(object.toTimeStamp) ? gt.String(object.toTimeStamp) : "",
      userContains: isSet(object.userContains) ? gt.String(object.userContains) : "",
      parameterContains: isSet(object.parameterContains) ? gt.String(object.parameterContains) : "",
      controllerContains: isSet(object.controllerContains) ? gt.String(object.controllerContains) : "",
      functionContains: isSet(object.functionContains) ? gt.String(object.functionContains) : "",
      oldValue: isSet(object.oldValue) ? gt.Number(object.oldValue) : 0,
      newValue: isSet(object.newValue) ? gt.Number(object.newValue) : 0,
      topologyId: isSet(object.topologyId) ? gt.Number(object.topologyId) : 0,
      groupId: isSet(object.groupId) ? gt.Number(object.groupId) : 0,
    };
  },

  toJSON(message: ParameterChangeLogQueryGet): unknown {
    const obj: any = {};
    if (message.fromTimeStamp !== undefined && message.fromTimeStamp !== "") {
      obj.fromTimeStamp = message.fromTimeStamp;
    }
    if (message.toTimeStamp !== undefined && message.toTimeStamp !== "") {
      obj.toTimeStamp = message.toTimeStamp;
    }
    if (message.userContains !== undefined && message.userContains !== "") {
      obj.userContains = message.userContains;
    }
    if (message.parameterContains !== undefined && message.parameterContains !== "") {
      obj.parameterContains = message.parameterContains;
    }
    if (message.controllerContains !== undefined && message.controllerContains !== "") {
      obj.controllerContains = message.controllerContains;
    }
    if (message.functionContains !== undefined && message.functionContains !== "") {
      obj.functionContains = message.functionContains;
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
    if (message.groupId !== undefined && message.groupId !== 0) {
      obj.groupId = Math.round(message.groupId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParameterChangeLogQueryGet>, I>>(base?: I): ParameterChangeLogQueryGet {
    return ParameterChangeLogQueryGet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParameterChangeLogQueryGet>, I>>(object: I): ParameterChangeLogQueryGet {
    const message = createBaseParameterChangeLogQueryGet();
    message.fromTimeStamp = object.fromTimeStamp ?? "";
    message.toTimeStamp = object.toTimeStamp ?? "";
    message.userContains = object.userContains ?? "";
    message.parameterContains = object.parameterContains ?? "";
    message.controllerContains = object.controllerContains ?? "";
    message.functionContains = object.functionContains ?? "";
    message.oldValue = object.oldValue ?? 0;
    message.newValue = object.newValue ?? 0;
    message.topologyId = object.topologyId ?? 0;
    message.groupId = object.groupId ?? 0;
    return message;
  },
};

function createBaseParameterFeatureKey(): ParameterFeatureKey {
  return {
    names: [],
    groups: [],
    controller: "",
    functionalGroups: {},
    hasFeatureRights: false,
    functions: [],
    grouped: false,
  };
}

export const ParameterFeatureKey = {
  fromJSON(object: any): ParameterFeatureKey {
    return {
      names: gt.Array.isArray(object?.names) ? object.names.map((e: any) => gt.String(e)) : [],
      groups: gt.Array.isArray(object?.groups) ? object.groups.map((e: any) => gt.String(e)) : [],
      controller: isSet(object.controller) ? gt.String(object.controller) : "",
      functionalGroups: isObject(object.functionalGroups)
        ? Object.entries(object.functionalGroups).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      hasFeatureRights: isSet(object.hasFeatureRights) ? gt.Boolean(object.hasFeatureRights) : false,
      functions: gt.Array.isArray(object?.functions)
        ? object.functions.map((e: any) => gt.String(e))
        : [],
      grouped: isSet(object.grouped) ? gt.Boolean(object.grouped) : false,
    };
  },

  toJSON(message: ParameterFeatureKey): unknown {
    const obj: any = {};
    if (message.names?.length) {
      obj.names = message.names;
    }
    if (message.groups?.length) {
      obj.groups = message.groups;
    }
    if (message.controller !== undefined && message.controller !== "") {
      obj.controller = message.controller;
    }
    if (message.functionalGroups) {
      const entries = Object.entries(message.functionalGroups);
      if (entries.length > 0) {
        obj.functionalGroups = {};
        entries.forEach(([k, v]) => {
          obj.functionalGroups[k] = v;
        });
      }
    }
    if (message.hasFeatureRights !== undefined && message.hasFeatureRights !== false) {
      obj.hasFeatureRights = message.hasFeatureRights;
    }
    if (message.functions?.length) {
      obj.functions = message.functions;
    }
    if (message.grouped !== undefined && message.grouped !== false) {
      obj.grouped = message.grouped;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParameterFeatureKey>, I>>(base?: I): ParameterFeatureKey {
    return ParameterFeatureKey.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParameterFeatureKey>, I>>(object: I): ParameterFeatureKey {
    const message = createBaseParameterFeatureKey();
    message.names = object.names?.map((e) => e) || [];
    message.groups = object.groups?.map((e) => e) || [];
    message.controller = object.controller ?? "";
    message.functionalGroups = Object.entries(object.functionalGroups ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = gt.String(value);
        }
        return acc;
      },
      {},
    );
    message.hasFeatureRights = object.hasFeatureRights ?? false;
    message.functions = object.functions?.map((e) => e) || [];
    message.grouped = object.grouped ?? false;
    return message;
  },
};

function createBaseParameterFeatureKey_FunctionalGroupsEntry(): ParameterFeatureKey_FunctionalGroupsEntry {
  return { key: "", value: "" };
}

export const ParameterFeatureKey_FunctionalGroupsEntry = {
  fromJSON(object: any): ParameterFeatureKey_FunctionalGroupsEntry {
    return {
      key: isSet(object.key) ? gt.String(object.key) : "",
      value: isSet(object.value) ? gt.String(object.value) : "",
    };
  },

  toJSON(message: ParameterFeatureKey_FunctionalGroupsEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParameterFeatureKey_FunctionalGroupsEntry>, I>>(
    base?: I,
  ): ParameterFeatureKey_FunctionalGroupsEntry {
    return ParameterFeatureKey_FunctionalGroupsEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParameterFeatureKey_FunctionalGroupsEntry>, I>>(
    object: I,
  ): ParameterFeatureKey_FunctionalGroupsEntry {
    const message = createBaseParameterFeatureKey_FunctionalGroupsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBasePolicyKey(): PolicyKey {
  return { id: 0 };
}

export const PolicyKey = {
  fromJSON(object: any): PolicyKey {
    return { id: isSet(object.id) ? gt.Number(object.id) : 0 };
  },

  toJSON(message: PolicyKey): unknown {
    const obj: any = {};
    if (message.id !== undefined && message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PolicyKey>, I>>(base?: I): PolicyKey {
    return PolicyKey.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PolicyKey>, I>>(object: I): PolicyKey {
    const message = createBasePolicyKey();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBasePpg(): Ppg {
  return { stationName: "", settings: [] };
}

export const Ppg = {
  fromJSON(object: any): Ppg {
    return {
      stationName: isSet(object.stationName) ? gt.String(object.stationName) : "",
      settings: gt.Array.isArray(object?.settings) ? object.settings.map((e: any) => Setting.fromJSON(e)) : [],
    };
  },

  toJSON(message: Ppg): unknown {
    const obj: any = {};
    if (message.stationName !== undefined && message.stationName !== "") {
      obj.stationName = message.stationName;
    }
    if (message.settings?.length) {
      obj.settings = message.settings.map((e) => Setting.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Ppg>, I>>(base?: I): Ppg {
    return Ppg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Ppg>, I>>(object: I): Ppg {
    const message = createBasePpg();
    message.stationName = object.stationName ?? "";
    message.settings = object.settings?.map((e) => Setting.fromPartial(e)) || [];
    return message;
  },
};

function createBasePpgSetup(): PpgSetup {
  return { stations: [] };
}

export const PpgSetup = {
  fromJSON(object: any): PpgSetup {
    return { stations: gt.Array.isArray(object?.stations) ? object.stations.map((e: any) => Ppg.fromJSON(e)) : [] };
  },

  toJSON(message: PpgSetup): unknown {
    const obj: any = {};
    if (message.stations?.length) {
      obj.stations = message.stations.map((e) => Ppg.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PpgSetup>, I>>(base?: I): PpgSetup {
    return PpgSetup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PpgSetup>, I>>(object: I): PpgSetup {
    const message = createBasePpgSetup();
    message.stations = object.stations?.map((e) => Ppg.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProcessQuery(): ProcessQuery {
  return { name: "" };
}

export const ProcessQuery = {
  fromJSON(object: any): ProcessQuery {
    return { name: isSet(object.name) ? gt.String(object.name) : "" };
  },

  toJSON(message: ProcessQuery): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProcessQuery>, I>>(base?: I): ProcessQuery {
    return ProcessQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProcessQuery>, I>>(object: I): ProcessQuery {
    const message = createBaseProcessQuery();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseReferenceLogQuery(): ReferenceLogQuery {
  return {
    fromTimeStamp: undefined,
    toTimeStamp: undefined,
    userContains: "",
    parameterContains: "",
    controller: "",
    newValue: 0,
    groupId: 0,
  };
}

export const ReferenceLogQuery = {
  fromJSON(object: any): ReferenceLogQuery {
    return {
      fromTimeStamp: isSet(object.fromTimeStamp) ? fromJsonTimestamp(object.fromTimeStamp) : undefined,
      toTimeStamp: isSet(object.toTimeStamp) ? fromJsonTimestamp(object.toTimeStamp) : undefined,
      userContains: isSet(object.userContains) ? gt.String(object.userContains) : "",
      parameterContains: isSet(object.parameterContains) ? gt.String(object.parameterContains) : "",
      controller: isSet(object.controller) ? gt.String(object.controller) : "",
      newValue: isSet(object.newValue) ? gt.Number(object.newValue) : 0,
      groupId: isSet(object.groupId) ? gt.Number(object.groupId) : 0,
    };
  },

  toJSON(message: ReferenceLogQuery): unknown {
    const obj: any = {};
    if (message.fromTimeStamp !== undefined) {
      obj.fromTimeStamp = message.fromTimeStamp.toISOString();
    }
    if (message.toTimeStamp !== undefined) {
      obj.toTimeStamp = message.toTimeStamp.toISOString();
    }
    if (message.userContains !== undefined && message.userContains !== "") {
      obj.userContains = message.userContains;
    }
    if (message.parameterContains !== undefined && message.parameterContains !== "") {
      obj.parameterContains = message.parameterContains;
    }
    if (message.controller !== undefined && message.controller !== "") {
      obj.controller = message.controller;
    }
    if (message.newValue !== undefined && message.newValue !== 0) {
      obj.newValue = message.newValue;
    }
    if (message.groupId !== undefined && message.groupId !== 0) {
      obj.groupId = Math.round(message.groupId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReferenceLogQuery>, I>>(base?: I): ReferenceLogQuery {
    return ReferenceLogQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReferenceLogQuery>, I>>(object: I): ReferenceLogQuery {
    const message = createBaseReferenceLogQuery();
    message.fromTimeStamp = object.fromTimeStamp ?? undefined;
    message.toTimeStamp = object.toTimeStamp ?? undefined;
    message.userContains = object.userContains ?? "";
    message.parameterContains = object.parameterContains ?? "";
    message.controller = object.controller ?? "";
    message.newValue = object.newValue ?? 0;
    message.groupId = object.groupId ?? 0;
    return message;
  },
};

function createBaseReferenceLogQueryGet(): ReferenceLogQueryGet {
  return {
    fromTimeStamp: "",
    toTimeStamp: "",
    userContains: "",
    parameterContains: "",
    controller: "",
    newValue: 0,
    groupId: 0,
  };
}

export const ReferenceLogQueryGet = {
  fromJSON(object: any): ReferenceLogQueryGet {
    return {
      fromTimeStamp: isSet(object.fromTimeStamp) ? gt.String(object.fromTimeStamp) : "",
      toTimeStamp: isSet(object.toTimeStamp) ? gt.String(object.toTimeStamp) : "",
      userContains: isSet(object.userContains) ? gt.String(object.userContains) : "",
      parameterContains: isSet(object.parameterContains) ? gt.String(object.parameterContains) : "",
      controller: isSet(object.controller) ? gt.String(object.controller) : "",
      newValue: isSet(object.newValue) ? gt.Number(object.newValue) : 0,
      groupId: isSet(object.groupId) ? gt.Number(object.groupId) : 0,
    };
  },

  toJSON(message: ReferenceLogQueryGet): unknown {
    const obj: any = {};
    if (message.fromTimeStamp !== undefined && message.fromTimeStamp !== "") {
      obj.fromTimeStamp = message.fromTimeStamp;
    }
    if (message.toTimeStamp !== undefined && message.toTimeStamp !== "") {
      obj.toTimeStamp = message.toTimeStamp;
    }
    if (message.userContains !== undefined && message.userContains !== "") {
      obj.userContains = message.userContains;
    }
    if (message.parameterContains !== undefined && message.parameterContains !== "") {
      obj.parameterContains = message.parameterContains;
    }
    if (message.controller !== undefined && message.controller !== "") {
      obj.controller = message.controller;
    }
    if (message.newValue !== undefined && message.newValue !== 0) {
      obj.newValue = message.newValue;
    }
    if (message.groupId !== undefined && message.groupId !== 0) {
      obj.groupId = Math.round(message.groupId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReferenceLogQueryGet>, I>>(base?: I): ReferenceLogQueryGet {
    return ReferenceLogQueryGet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ReferenceLogQueryGet>, I>>(object: I): ReferenceLogQueryGet {
    const message = createBaseReferenceLogQueryGet();
    message.fromTimeStamp = object.fromTimeStamp ?? "";
    message.toTimeStamp = object.toTimeStamp ?? "";
    message.userContains = object.userContains ?? "";
    message.parameterContains = object.parameterContains ?? "";
    message.controller = object.controller ?? "";
    message.newValue = object.newValue ?? 0;
    message.groupId = object.groupId ?? 0;
    return message;
  },
};

function createBaseSetPolicySource(): SetPolicySource {
  return { previousSource: "", source: "", user: "" };
}

export const SetPolicySource = {
  fromJSON(object: any): SetPolicySource {
    return {
      previousSource: isSet(object.previousSource) ? gt.String(object.previousSource) : "",
      source: isSet(object.source) ? gt.String(object.source) : "",
      user: isSet(object.user) ? gt.String(object.user) : "",
    };
  },

  toJSON(message: SetPolicySource): unknown {
    const obj: any = {};
    if (message.previousSource !== undefined && message.previousSource !== "") {
      obj.previousSource = message.previousSource;
    }
    if (message.source !== undefined && message.source !== "") {
      obj.source = message.source;
    }
    if (message.user !== undefined && message.user !== "") {
      obj.user = message.user;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetPolicySource>, I>>(base?: I): SetPolicySource {
    return SetPolicySource.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetPolicySource>, I>>(object: I): SetPolicySource {
    const message = createBaseSetPolicySource();
    message.previousSource = object.previousSource ?? "";
    message.source = object.source ?? "";
    message.user = object.user ?? "";
    return message;
  },
};

function createBaseSetUpstreamCompensationSetup(): SetUpstreamCompensationSetup {
  return { updated: [] };
}

export const SetUpstreamCompensationSetup = {
  fromJSON(object: any): SetUpstreamCompensationSetup {
    return {
      updated: gt.Array.isArray(object?.updated)
        ? object.updated.map((e: any) => UpstreamCompensationSetup.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SetUpstreamCompensationSetup): unknown {
    const obj: any = {};
    if (message.updated?.length) {
      obj.updated = message.updated.map((e) => UpstreamCompensationSetup.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetUpstreamCompensationSetup>, I>>(base?: I): SetUpstreamCompensationSetup {
    return SetUpstreamCompensationSetup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetUpstreamCompensationSetup>, I>>(object: I): SetUpstreamCompensationSetup {
    const message = createBaseSetUpstreamCompensationSetup();
    message.updated = object.updated?.map((e) => UpstreamCompensationSetup.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSetting(): Setting {
  return { name: "", value: "" };
}

export const Setting = {
  fromJSON(object: any): Setting {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      value: isSet(object.value) ? gt.String(object.value) : "",
    };
  },

  toJSON(message: Setting): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.value !== undefined && message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Setting>, I>>(base?: I): Setting {
    return Setting.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Setting>, I>>(object: I): Setting {
    const message = createBaseSetting();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseSharedUiConfigStorageQuery(): SharedUiConfigStorageQuery {
  return { pageName: "", name: "" };
}

export const SharedUiConfigStorageQuery = {
  fromJSON(object: any): SharedUiConfigStorageQuery {
    return {
      pageName: isSet(object.pageName) ? gt.String(object.pageName) : "",
      name: isSet(object.name) ? gt.String(object.name) : "",
    };
  },

  toJSON(message: SharedUiConfigStorageQuery): unknown {
    const obj: any = {};
    if (message.pageName !== undefined && message.pageName !== "") {
      obj.pageName = message.pageName;
    }
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SharedUiConfigStorageQuery>, I>>(base?: I): SharedUiConfigStorageQuery {
    return SharedUiConfigStorageQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SharedUiConfigStorageQuery>, I>>(object: I): SharedUiConfigStorageQuery {
    const message = createBaseSharedUiConfigStorageQuery();
    message.pageName = object.pageName ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseSharedUiConfigStorageUpdate(): SharedUiConfigStorageUpdate {
  return { pageName: "", name: "", data: [] };
}

export const SharedUiConfigStorageUpdate = {
  fromJSON(object: any): SharedUiConfigStorageUpdate {
    return {
      pageName: isSet(object.pageName) ? gt.String(object.pageName) : "",
      name: isSet(object.name) ? gt.String(object.name) : "",
      data: gt.Array.isArray(object?.data) ? object.data.map((e: any) => gt.String(e)) : [],
    };
  },

  toJSON(message: SharedUiConfigStorageUpdate): unknown {
    const obj: any = {};
    if (message.pageName !== undefined && message.pageName !== "") {
      obj.pageName = message.pageName;
    }
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.data?.length) {
      obj.data = message.data;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SharedUiConfigStorageUpdate>, I>>(base?: I): SharedUiConfigStorageUpdate {
    return SharedUiConfigStorageUpdate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SharedUiConfigStorageUpdate>, I>>(object: I): SharedUiConfigStorageUpdate {
    const message = createBaseSharedUiConfigStorageUpdate();
    message.pageName = object.pageName ?? "";
    message.name = object.name ?? "";
    message.data = object.data?.map((e) => e) || [];
    return message;
  },
};

function createBaseTurbineParameterChangeLogQuery(): TurbineParameterChangeLogQuery {
  return {
    fromTimeStamp: undefined,
    toTimeStamp: undefined,
    userContains: "",
    parameterContains: "",
    turbineNameContains: "",
    oldValue: 0,
    newValue: 0,
  };
}

export const TurbineParameterChangeLogQuery = {
  fromJSON(object: any): TurbineParameterChangeLogQuery {
    return {
      fromTimeStamp: isSet(object.fromTimeStamp) ? fromJsonTimestamp(object.fromTimeStamp) : undefined,
      toTimeStamp: isSet(object.toTimeStamp) ? fromJsonTimestamp(object.toTimeStamp) : undefined,
      userContains: isSet(object.userContains) ? gt.String(object.userContains) : "",
      parameterContains: isSet(object.parameterContains) ? gt.String(object.parameterContains) : "",
      turbineNameContains: isSet(object.turbineNameContains) ? gt.String(object.turbineNameContains) : "",
      oldValue: isSet(object.oldValue) ? gt.Number(object.oldValue) : 0,
      newValue: isSet(object.newValue) ? gt.Number(object.newValue) : 0,
    };
  },

  toJSON(message: TurbineParameterChangeLogQuery): unknown {
    const obj: any = {};
    if (message.fromTimeStamp !== undefined) {
      obj.fromTimeStamp = message.fromTimeStamp.toISOString();
    }
    if (message.toTimeStamp !== undefined) {
      obj.toTimeStamp = message.toTimeStamp.toISOString();
    }
    if (message.userContains !== undefined && message.userContains !== "") {
      obj.userContains = message.userContains;
    }
    if (message.parameterContains !== undefined && message.parameterContains !== "") {
      obj.parameterContains = message.parameterContains;
    }
    if (message.turbineNameContains !== undefined && message.turbineNameContains !== "") {
      obj.turbineNameContains = message.turbineNameContains;
    }
    if (message.oldValue !== undefined && message.oldValue !== 0) {
      obj.oldValue = message.oldValue;
    }
    if (message.newValue !== undefined && message.newValue !== 0) {
      obj.newValue = message.newValue;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TurbineParameterChangeLogQuery>, I>>(base?: I): TurbineParameterChangeLogQuery {
    return TurbineParameterChangeLogQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TurbineParameterChangeLogQuery>, I>>(
    object: I,
  ): TurbineParameterChangeLogQuery {
    const message = createBaseTurbineParameterChangeLogQuery();
    message.fromTimeStamp = object.fromTimeStamp ?? undefined;
    message.toTimeStamp = object.toTimeStamp ?? undefined;
    message.userContains = object.userContains ?? "";
    message.parameterContains = object.parameterContains ?? "";
    message.turbineNameContains = object.turbineNameContains ?? "";
    message.oldValue = object.oldValue ?? 0;
    message.newValue = object.newValue ?? 0;
    return message;
  },
};

function createBaseTurbineParameterChangeLogQueryGet(): TurbineParameterChangeLogQueryGet {
  return {
    fromTimeStamp: "",
    toTimeStamp: "",
    userContains: "",
    parameterContains: "",
    turbineNameContains: "",
    oldValue: 0,
    newValue: 0,
  };
}

export const TurbineParameterChangeLogQueryGet = {
  fromJSON(object: any): TurbineParameterChangeLogQueryGet {
    return {
      fromTimeStamp: isSet(object.fromTimeStamp) ? gt.String(object.fromTimeStamp) : "",
      toTimeStamp: isSet(object.toTimeStamp) ? gt.String(object.toTimeStamp) : "",
      userContains: isSet(object.userContains) ? gt.String(object.userContains) : "",
      parameterContains: isSet(object.parameterContains) ? gt.String(object.parameterContains) : "",
      turbineNameContains: isSet(object.turbineNameContains) ? gt.String(object.turbineNameContains) : "",
      oldValue: isSet(object.oldValue) ? gt.Number(object.oldValue) : 0,
      newValue: isSet(object.newValue) ? gt.Number(object.newValue) : 0,
    };
  },

  toJSON(message: TurbineParameterChangeLogQueryGet): unknown {
    const obj: any = {};
    if (message.fromTimeStamp !== undefined && message.fromTimeStamp !== "") {
      obj.fromTimeStamp = message.fromTimeStamp;
    }
    if (message.toTimeStamp !== undefined && message.toTimeStamp !== "") {
      obj.toTimeStamp = message.toTimeStamp;
    }
    if (message.userContains !== undefined && message.userContains !== "") {
      obj.userContains = message.userContains;
    }
    if (message.parameterContains !== undefined && message.parameterContains !== "") {
      obj.parameterContains = message.parameterContains;
    }
    if (message.turbineNameContains !== undefined && message.turbineNameContains !== "") {
      obj.turbineNameContains = message.turbineNameContains;
    }
    if (message.oldValue !== undefined && message.oldValue !== 0) {
      obj.oldValue = message.oldValue;
    }
    if (message.newValue !== undefined && message.newValue !== 0) {
      obj.newValue = message.newValue;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TurbineParameterChangeLogQueryGet>, I>>(
    base?: I,
  ): TurbineParameterChangeLogQueryGet {
    return TurbineParameterChangeLogQueryGet.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TurbineParameterChangeLogQueryGet>, I>>(
    object: I,
  ): TurbineParameterChangeLogQueryGet {
    const message = createBaseTurbineParameterChangeLogQueryGet();
    message.fromTimeStamp = object.fromTimeStamp ?? "";
    message.toTimeStamp = object.toTimeStamp ?? "";
    message.userContains = object.userContains ?? "";
    message.parameterContains = object.parameterContains ?? "";
    message.turbineNameContains = object.turbineNameContains ?? "";
    message.oldValue = object.oldValue ?? 0;
    message.newValue = object.newValue ?? 0;
    return message;
  },
};

function createBaseTurbineSetting(): TurbineSetting {
  return { stationName: "", settings: [] };
}

export const TurbineSetting = {
  fromJSON(object: any): TurbineSetting {
    return {
      stationName: isSet(object.stationName) ? gt.String(object.stationName) : "",
      settings: gt.Array.isArray(object?.settings) ? object.settings.map((e: any) => Setting.fromJSON(e)) : [],
    };
  },

  toJSON(message: TurbineSetting): unknown {
    const obj: any = {};
    if (message.stationName !== "") {
      obj.stationName = message.stationName;
    }
    if (message.settings?.length) {
      obj.settings = message.settings.map((e) => Setting.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TurbineSetting>, I>>(base?: I): TurbineSetting {
    return TurbineSetting.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TurbineSetting>, I>>(object: I): TurbineSetting {
    const message = createBaseTurbineSetting();
    message.stationName = object.stationName ?? "";
    message.settings = object.settings?.map((e) => Setting.fromPartial(e)) || [];
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
