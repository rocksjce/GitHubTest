/* eslint-disable */
import { Timestamp } from "./google/protobuf/timestamp.Generated";

export interface GeneratorDefaultParameterData {
  generatorDefaultName?: string | undefined;
  parameter?: string | undefined;
  value?: number | undefined;
}

export interface PowerReferenceTypeInfo {
  name?: string | undefined;
  priority?: number | undefined;
  curtailmentAllowTurbineStart?: boolean | undefined;
  curtailmentAllowTurbineStop?: boolean | undefined;
  socAllowTargetControl?: boolean | undefined;
  soCAllowReserveUtilization?: boolean | undefined;
  generatorFastRampMode?: boolean | undefined;
  generatorTypeSettings: PowerReferenceTypeInfo_GeneratorType[];
}

export interface PowerReferenceTypeInfo_GeneratorType {
  name?: string | undefined;
  activePowerPriority?: number | undefined;
  allowCurtailmentImport?: boolean | undefined;
  allowProductionExport?: boolean | undefined;
}

export interface UpdateTopologyParameter {
  topologyId?: number | undefined;
  group?: string | undefined;
  groupId?: number | undefined;
  name?: string | undefined;
  value?: number | undefined;
}

export interface UpstreamCompensationSetup {
  name?: string | undefined;
  upstreamCompensation?: UpstreamCompensationSetup_UpstreamCompensation | undefined;
}

export interface UpstreamCompensationSetup_UpstreamCompensation {
  upstreamCompensationMode?: string | undefined;
  bcap_HV_PCC_AUS?: number | undefined;
  bcap_HV_Trf_Side?: number | undefined;
  er_PerCent?: number | undefined;
  ex_PerCent?: number | undefined;
  qcap_HV_Trf_SideVariable?: number | undefined;
  s_Trf_MVA?: number | undefined;
  tap_Ratio?: number | undefined;
  transformerRatio?: number | undefined;
  z_LineImag?: number | undefined;
  z_LineReal?: number | undefined;
}

export interface CustomTurbineAssignments {
  groupNames: string[];
  turbines: string[];
  assignments: CustomTurbineAssignment[];
}

export interface CustomTurbineAssignment {
  groupName?: string | undefined;
  turbines: string[];
}

export interface SharedUiConfigStorageData {
  userCanEdit?: boolean | undefined;
  name?: string | undefined;
  data: string[];
  dateModified?: Date | undefined;
}

export interface SessionInfo {
  userName?: string | undefined;
  token?: string | undefined;
  sessionId?: string | undefined;
}

function createBaseGeneratorDefaultParameterData(): GeneratorDefaultParameterData {
  return { generatorDefaultName: "", parameter: "", value: 0 };
}

export const GeneratorDefaultParameterData = {
  fromJSON(object: any): GeneratorDefaultParameterData {
    return {
      generatorDefaultName: isSet(object.generatorDefaultName) ? gt.String(object.generatorDefaultName) : "",
      parameter: isSet(object.parameter) ? gt.String(object.parameter) : "",
      value: isSet(object.value) ? gt.Number(object.value) : 0,
    };
  },

  toJSON(message: GeneratorDefaultParameterData): unknown {
    const obj: any = {};
    if (message.generatorDefaultName !== undefined && message.generatorDefaultName !== "") {
      obj.generatorDefaultName = message.generatorDefaultName;
    }
    if (message.parameter !== undefined && message.parameter !== "") {
      obj.parameter = message.parameter;
    }
    if (message.value !== undefined && message.value !== 0) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GeneratorDefaultParameterData>, I>>(base?: I): GeneratorDefaultParameterData {
    return GeneratorDefaultParameterData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GeneratorDefaultParameterData>, I>>(
    object: I,
  ): GeneratorDefaultParameterData {
    const message = createBaseGeneratorDefaultParameterData();
    message.generatorDefaultName = object.generatorDefaultName ?? "";
    message.parameter = object.parameter ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBasePowerReferenceTypeInfo(): PowerReferenceTypeInfo {
  return {
    name: "",
    priority: 0,
    curtailmentAllowTurbineStart: false,
    curtailmentAllowTurbineStop: false,
    socAllowTargetControl: false,
    soCAllowReserveUtilization: false,
    generatorFastRampMode: false,
    generatorTypeSettings: [],
  };
}

export const PowerReferenceTypeInfo = {
  fromJSON(object: any): PowerReferenceTypeInfo {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      priority: isSet(object.priority) ? gt.Number(object.priority) : 0,
      curtailmentAllowTurbineStart: isSet(object.curtailmentAllowTurbineStart)
        ? gt.Boolean(object.curtailmentAllowTurbineStart)
        : false,
      curtailmentAllowTurbineStop: isSet(object.curtailmentAllowTurbineStop)
        ? gt.Boolean(object.curtailmentAllowTurbineStop)
        : false,
      socAllowTargetControl: isSet(object.socAllowTargetControl) ? gt.Boolean(object.socAllowTargetControl) : false,
      soCAllowReserveUtilization: isSet(object.soCAllowReserveUtilization)
        ? gt.Boolean(object.soCAllowReserveUtilization)
        : false,
      generatorFastRampMode: isSet(object.generatorFastRampMode) ? gt.Boolean(object.generatorFastRampMode) : false,
      generatorTypeSettings: gt.Array.isArray(object?.generatorTypeSettings)
        ? object.generatorTypeSettings.map((e: any) => PowerReferenceTypeInfo_GeneratorType.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PowerReferenceTypeInfo): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.priority !== undefined && message.priority !== 0) {
      obj.priority = Math.round(message.priority);
    }
    if (message.curtailmentAllowTurbineStart !== undefined && message.curtailmentAllowTurbineStart !== false) {
      obj.curtailmentAllowTurbineStart = message.curtailmentAllowTurbineStart;
    }
    if (message.curtailmentAllowTurbineStop !== undefined && message.curtailmentAllowTurbineStop !== false) {
      obj.curtailmentAllowTurbineStop = message.curtailmentAllowTurbineStop;
    }
    if (message.socAllowTargetControl !== undefined && message.socAllowTargetControl !== false) {
      obj.socAllowTargetControl = message.socAllowTargetControl;
    }
    if (message.soCAllowReserveUtilization !== undefined && message.soCAllowReserveUtilization !== false) {
      obj.soCAllowReserveUtilization = message.soCAllowReserveUtilization;
    }
    if (message.generatorFastRampMode !== undefined && message.generatorFastRampMode !== false) {
      obj.generatorFastRampMode = message.generatorFastRampMode;
    }
    if (message.generatorTypeSettings?.length) {
      obj.generatorTypeSettings = message.generatorTypeSettings.map((e) =>
        PowerReferenceTypeInfo_GeneratorType.toJSON(e)
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PowerReferenceTypeInfo>, I>>(base?: I): PowerReferenceTypeInfo {
    return PowerReferenceTypeInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PowerReferenceTypeInfo>, I>>(object: I): PowerReferenceTypeInfo {
    const message = createBasePowerReferenceTypeInfo();
    message.name = object.name ?? "";
    message.priority = object.priority ?? 0;
    message.curtailmentAllowTurbineStart = object.curtailmentAllowTurbineStart ?? false;
    message.curtailmentAllowTurbineStop = object.curtailmentAllowTurbineStop ?? false;
    message.socAllowTargetControl = object.socAllowTargetControl ?? false;
    message.soCAllowReserveUtilization = object.soCAllowReserveUtilization ?? false;
    message.generatorFastRampMode = object.generatorFastRampMode ?? false;
    message.generatorTypeSettings =
      object.generatorTypeSettings?.map((e) => PowerReferenceTypeInfo_GeneratorType.fromPartial(e)) || [];
    return message;
  },
};

function createBasePowerReferenceTypeInfo_GeneratorType(): PowerReferenceTypeInfo_GeneratorType {
  return { name: "", activePowerPriority: 0, allowCurtailmentImport: false, allowProductionExport: false };
}

export const PowerReferenceTypeInfo_GeneratorType = {
  fromJSON(object: any): PowerReferenceTypeInfo_GeneratorType {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      activePowerPriority: isSet(object.activePowerPriority) ? gt.Number(object.activePowerPriority) : 0,
      allowCurtailmentImport: isSet(object.allowCurtailmentImport) ? gt.Boolean(object.allowCurtailmentImport) : false,
      allowProductionExport: isSet(object.allowProductionExport) ? gt.Boolean(object.allowProductionExport) : false,
    };
  },

  toJSON(message: PowerReferenceTypeInfo_GeneratorType): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.activePowerPriority !== undefined && message.activePowerPriority !== 0) {
      obj.activePowerPriority = Math.round(message.activePowerPriority);
    }
    if (message.allowCurtailmentImport !== undefined && message.allowCurtailmentImport !== false) {
      obj.allowCurtailmentImport = message.allowCurtailmentImport;
    }
    if (message.allowProductionExport !== undefined && message.allowProductionExport !== false) {
      obj.allowProductionExport = message.allowProductionExport;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PowerReferenceTypeInfo_GeneratorType>, I>>(
    base?: I,
  ): PowerReferenceTypeInfo_GeneratorType {
    return PowerReferenceTypeInfo_GeneratorType.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PowerReferenceTypeInfo_GeneratorType>, I>>(
    object: I,
  ): PowerReferenceTypeInfo_GeneratorType {
    const message = createBasePowerReferenceTypeInfo_GeneratorType();
    message.name = object.name ?? "";
    message.activePowerPriority = object.activePowerPriority ?? 0;
    message.allowCurtailmentImport = object.allowCurtailmentImport ?? false;
    message.allowProductionExport = object.allowProductionExport ?? false;
    return message;
  },
};

function createBaseUpdateTopologyParameter(): UpdateTopologyParameter {
  return { topologyId: 0, group: "", groupId: 0, name: "", value: 0 };
}

export const UpdateTopologyParameter = {
  fromJSON(object: any): UpdateTopologyParameter {
    return {
      topologyId: isSet(object.topologyId) ? gt.Number(object.topologyId) : 0,
      group: isSet(object.group) ? gt.String(object.group) : "",
      groupId: isSet(object.groupId) ? gt.Number(object.groupId) : 0,
      name: isSet(object.name) ? gt.String(object.name) : "",
      value: isSet(object.value) ? gt.Number(object.value) : 0,
    };
  },

  toJSON(message: UpdateTopologyParameter): unknown {
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
    if (message.value !== undefined && message.value !== 0) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateTopologyParameter>, I>>(base?: I): UpdateTopologyParameter {
    return UpdateTopologyParameter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateTopologyParameter>, I>>(object: I): UpdateTopologyParameter {
    const message = createBaseUpdateTopologyParameter();
    message.topologyId = object.topologyId ?? 0;
    message.group = object.group ?? "";
    message.groupId = object.groupId ?? 0;
    message.name = object.name ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseUpstreamCompensationSetup(): UpstreamCompensationSetup {
  return { name: "", upstreamCompensation: undefined };
}

export const UpstreamCompensationSetup = {
  fromJSON(object: any): UpstreamCompensationSetup {
    return {
      name: isSet(object.name) ? gt.String(object.name) : "",
      upstreamCompensation: isSet(object.upstreamCompensation)
        ? UpstreamCompensationSetup_UpstreamCompensation.fromJSON(object.upstreamCompensation)
        : undefined,
    };
  },

  toJSON(message: UpstreamCompensationSetup): unknown {
    const obj: any = {};
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.upstreamCompensation !== undefined) {
      obj.upstreamCompensation = UpstreamCompensationSetup_UpstreamCompensation.toJSON(message.upstreamCompensation);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpstreamCompensationSetup>, I>>(base?: I): UpstreamCompensationSetup {
    return UpstreamCompensationSetup.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpstreamCompensationSetup>, I>>(object: I): UpstreamCompensationSetup {
    const message = createBaseUpstreamCompensationSetup();
    message.name = object.name ?? "";
    message.upstreamCompensation = (object.upstreamCompensation !== undefined && object.upstreamCompensation !== null)
      ? UpstreamCompensationSetup_UpstreamCompensation.fromPartial(object.upstreamCompensation)
      : undefined;
    return message;
  },
};

function createBaseUpstreamCompensationSetup_UpstreamCompensation(): UpstreamCompensationSetup_UpstreamCompensation {
  return {
    upstreamCompensationMode: "",
    bcap_HV_PCC_AUS: 0,
    bcap_HV_Trf_Side: 0,
    er_PerCent: 0,
    ex_PerCent: 0,
    qcap_HV_Trf_SideVariable: 0,
    s_Trf_MVA: 0,
    tap_Ratio: 0,
    transformerRatio: 0,
    z_LineImag: 0,
    z_LineReal: 0,
  };
}

export const UpstreamCompensationSetup_UpstreamCompensation = {
  fromJSON(object: any): UpstreamCompensationSetup_UpstreamCompensation {
    return {
      upstreamCompensationMode: isSet(object.upstreamCompensationMode)
        ? gt.String(object.upstreamCompensationMode)
        : "",
      bcap_HV_PCC_AUS: isSet(object.bcap_HV_PCC_AUS) ? gt.Number(object.bcap_HV_PCC_AUS) : 0,
      bcap_HV_Trf_Side: isSet(object.bcap_HV_Trf_Side) ? gt.Number(object.bcap_HV_Trf_Side) : 0,
      er_PerCent: isSet(object.er_PerCent) ? gt.Number(object.er_PerCent) : 0,
      ex_PerCent: isSet(object.ex_PerCent) ? gt.Number(object.ex_PerCent) : 0,
      qcap_HV_Trf_SideVariable: isSet(object.qcap_HV_Trf_SideVariable) ? gt.Number(object.qcap_HV_Trf_SideVariable) : 0,
      s_Trf_MVA: isSet(object.s_Trf_MVA) ? gt.Number(object.s_Trf_MVA) : 0,
      tap_Ratio: isSet(object.tap_Ratio) ? gt.Number(object.tap_Ratio) : 0,
      transformerRatio: isSet(object.transformerRatio) ? gt.Number(object.transformerRatio) : 0,
      z_LineImag: isSet(object.z_LineImag) ? gt.Number(object.z_LineImag) : 0,
      z_LineReal: isSet(object.z_LineReal) ? gt.Number(object.z_LineReal) : 0,
    };
  },

  toJSON(message: UpstreamCompensationSetup_UpstreamCompensation): unknown {
    const obj: any = {};
    if (message.upstreamCompensationMode !== undefined && message.upstreamCompensationMode !== "") {
      obj.upstreamCompensationMode = message.upstreamCompensationMode;
    }
    if (message.bcap_HV_PCC_AUS !== undefined && message.bcap_HV_PCC_AUS !== 0) {
      obj.bcap_HV_PCC_AUS = message.bcap_HV_PCC_AUS;
    }
    if (message.bcap_HV_Trf_Side !== undefined && message.bcap_HV_Trf_Side !== 0) {
      obj.bcap_HV_Trf_Side = message.bcap_HV_Trf_Side;
    }
    if (message.er_PerCent !== undefined && message.er_PerCent !== 0) {
      obj.er_PerCent = message.er_PerCent;
    }
    if (message.ex_PerCent !== undefined && message.ex_PerCent !== 0) {
      obj.ex_PerCent = message.ex_PerCent;
    }
    if (message.qcap_HV_Trf_SideVariable !== undefined && message.qcap_HV_Trf_SideVariable !== 0) {
      obj.qcap_HV_Trf_SideVariable = message.qcap_HV_Trf_SideVariable;
    }
    if (message.s_Trf_MVA !== undefined && message.s_Trf_MVA !== 0) {
      obj.s_Trf_MVA = message.s_Trf_MVA;
    }
    if (message.tap_Ratio !== undefined && message.tap_Ratio !== 0) {
      obj.tap_Ratio = message.tap_Ratio;
    }
    if (message.transformerRatio !== undefined && message.transformerRatio !== 0) {
      obj.transformerRatio = message.transformerRatio;
    }
    if (message.z_LineImag !== undefined && message.z_LineImag !== 0) {
      obj.z_LineImag = message.z_LineImag;
    }
    if (message.z_LineReal !== undefined && message.z_LineReal !== 0) {
      obj.z_LineReal = message.z_LineReal;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpstreamCompensationSetup_UpstreamCompensation>, I>>(
    base?: I,
  ): UpstreamCompensationSetup_UpstreamCompensation {
    return UpstreamCompensationSetup_UpstreamCompensation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpstreamCompensationSetup_UpstreamCompensation>, I>>(
    object: I,
  ): UpstreamCompensationSetup_UpstreamCompensation {
    const message = createBaseUpstreamCompensationSetup_UpstreamCompensation();
    message.upstreamCompensationMode = object.upstreamCompensationMode ?? "";
    message.bcap_HV_PCC_AUS = object.bcap_HV_PCC_AUS ?? 0;
    message.bcap_HV_Trf_Side = object.bcap_HV_Trf_Side ?? 0;
    message.er_PerCent = object.er_PerCent ?? 0;
    message.ex_PerCent = object.ex_PerCent ?? 0;
    message.qcap_HV_Trf_SideVariable = object.qcap_HV_Trf_SideVariable ?? 0;
    message.s_Trf_MVA = object.s_Trf_MVA ?? 0;
    message.tap_Ratio = object.tap_Ratio ?? 0;
    message.transformerRatio = object.transformerRatio ?? 0;
    message.z_LineImag = object.z_LineImag ?? 0;
    message.z_LineReal = object.z_LineReal ?? 0;
    return message;
  },
};

function createBaseCustomTurbineAssignments(): CustomTurbineAssignments {
  return { groupNames: [], turbines: [], assignments: [] };
}

export const CustomTurbineAssignments = {
  fromJSON(object: any): CustomTurbineAssignments {
    return {
      groupNames: gt.Array.isArray(object?.groupNames) ? object.groupNames.map((e: any) => gt.String(e)) : [],
      turbines: gt.Array.isArray(object?.turbines) ? object.turbines.map((e: any) => gt.String(e)) : [],
      assignments: gt.Array.isArray(object?.assignments)
        ? object.assignments.map((e: any) => CustomTurbineAssignment.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CustomTurbineAssignments): unknown {
    const obj: any = {};
    if (message.groupNames?.length) {
      obj.groupNames = message.groupNames;
    }
    if (message.turbines?.length) {
      obj.turbines = message.turbines;
    }
    if (message.assignments?.length) {
      obj.assignments = message.assignments.map((e) => CustomTurbineAssignment.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CustomTurbineAssignments>, I>>(base?: I): CustomTurbineAssignments {
    return CustomTurbineAssignments.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CustomTurbineAssignments>, I>>(object: I): CustomTurbineAssignments {
    const message = createBaseCustomTurbineAssignments();
    message.groupNames = object.groupNames?.map((e) => e) || [];
    message.turbines = object.turbines?.map((e) => e) || [];
    message.assignments = object.assignments?.map((e) => CustomTurbineAssignment.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCustomTurbineAssignment(): CustomTurbineAssignment {
  return { groupName: "", turbines: [] };
}

export const CustomTurbineAssignment = {
  fromJSON(object: any): CustomTurbineAssignment {
    return {
      groupName: isSet(object.groupName) ? gt.String(object.groupName) : "",
      turbines: gt.Array.isArray(object?.turbines) ? object.turbines.map((e: any) => gt.String(e)) : [],
    };
  },

  toJSON(message: CustomTurbineAssignment): unknown {
    const obj: any = {};
    if (message.groupName !== undefined && message.groupName !== "") {
      obj.groupName = message.groupName;
    }
    if (message.turbines?.length) {
      obj.turbines = message.turbines;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CustomTurbineAssignment>, I>>(base?: I): CustomTurbineAssignment {
    return CustomTurbineAssignment.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CustomTurbineAssignment>, I>>(object: I): CustomTurbineAssignment {
    const message = createBaseCustomTurbineAssignment();
    message.groupName = object.groupName ?? "";
    message.turbines = object.turbines?.map((e) => e) || [];
    return message;
  },
};

function createBaseSharedUiConfigStorageData(): SharedUiConfigStorageData {
  return { userCanEdit: true, name: "", data: [], dateModified: undefined };
}

export const SharedUiConfigStorageData = {
  fromJSON(object: any): SharedUiConfigStorageData {
    return {
      userCanEdit: isSet(object.userCanEdit) ? gt.Boolean(object.userCanEdit) : true,
      name: isSet(object.name) ? gt.String(object.name) : "",
      data: gt.Array.isArray(object?.data) ? object.data.map((e: any) => gt.String(e)) : [],
      dateModified: isSet(object.dateModified) ? fromJsonTimestamp(object.dateModified) : undefined,
    };
  },

  toJSON(message: SharedUiConfigStorageData): unknown {
    const obj: any = {};
    if (message.userCanEdit !== undefined && message.userCanEdit !== true) {
      obj.userCanEdit = message.userCanEdit;
    }
    if (message.name !== undefined && message.name !== "") {
      obj.name = message.name;
    }
    if (message.data?.length) {
      obj.data = message.data;
    }
    if (message.dateModified !== undefined) {
      obj.dateModified = message.dateModified.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SharedUiConfigStorageData>, I>>(base?: I): SharedUiConfigStorageData {
    return SharedUiConfigStorageData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SharedUiConfigStorageData>, I>>(object: I): SharedUiConfigStorageData {
    const message = createBaseSharedUiConfigStorageData();
    message.userCanEdit = object.userCanEdit ?? true;
    message.name = object.name ?? "";
    message.data = object.data?.map((e) => e) || [];
    message.dateModified = object.dateModified ?? undefined;
    return message;
  },
};

function createBaseSessionInfo(): SessionInfo {
  return { userName: "", token: "", sessionId: "" };
}

export const SessionInfo = {
  fromJSON(object: any): SessionInfo {
    return {
      userName: isSet(object.userName) ? gt.String(object.userName) : "",
      token: isSet(object.token) ? gt.String(object.token) : "",
      sessionId: isSet(object.sessionId) ? gt.String(object.sessionId) : "",
    };
  },

  toJSON(message: SessionInfo): unknown {
    const obj: any = {};
    if (message.userName !== undefined && message.userName !== "") {
      obj.userName = message.userName;
    }
    if (message.token !== undefined && message.token !== "") {
      obj.token = message.token;
    }
    if (message.sessionId !== undefined && message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SessionInfo>, I>>(base?: I): SessionInfo {
    return SessionInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SessionInfo>, I>>(object: I): SessionInfo {
    const message = createBaseSessionInfo();
    message.userName = object.userName ?? "";
    message.token = object.token ?? "";
    message.sessionId = object.sessionId ?? "";
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
