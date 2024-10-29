/* eslint-disable */
import {
  ConvertLegacyScriptReply,
  ConvertLegacyScriptRequest,
  DeleteScriptReply,
  DeleteScriptRequest,
  GetScriptRunsReply,
  GetScriptRunsRequest,
  GetStationsAndSignalsReply,
  GetStationsAndSignalsRequest,
  GetStatusReply,
  GetStatusRequest,
  ListScriptsReply,
  ListScriptsRequest,
  LoadScriptReply,
  LoadScriptRequest,
  PauseScriptReply,
  PauseScriptRequest,
  PrepareScriptExecutionReply,
  PrepareScriptExecutionRequest,
  RenameScriptReply,
  RenameScriptRequest,
  ResumeScriptReply,
  ResumeScriptRequest,
  SaveScriptReply,
  SaveScriptRequest,
  SkipScriptReply,
  SkipScriptRequest,
  StopScriptReply,
  StopScriptRequest,
} from "./CommonInjection.Generated";

export enum CommandType {
  CommandTypeUnknown = "CommandTypeUnknown",
  /** GetStationsAndSignals - Get available hosts, stations and signals */
  GetStationsAndSignals = "GetStationsAndSignals",
  /** GetStatus - Get curret status of the server */
  GetStatus = "GetStatus",
  /** LoadScript - Load a script from the server (not validating) */
  LoadScript = "LoadScript",
  /** SaveScript - Save a script on the server (not validating) */
  SaveScript = "SaveScript",
  /** ListScripts - List scripts saved on the server */
  ListScripts = "ListScripts",
  /** DeleteScript - Delete a script from the server */
  DeleteScript = "DeleteScript",
  /** RenameScript - Rename a script on the server */
  RenameScript = "RenameScript",
  ConvertLegacyScript = "ConvertLegacyScript",
  /** GetScriptRuns - Get script runs for a specific script */
  GetScriptRuns = "GetScriptRuns",
  /** PrepareScriptExecution - Prepare script by loading it onto all involved hosts, starts the script in a paused state */
  PrepareScriptExecution = "PrepareScriptExecution",
  /** StopScript - Stops running script */
  StopScript = "StopScript",
  /** PauseScript - Pause running script */
  PauseScript = "PauseScript",
  /** ResumeScript - Resume paused script (or starts a prepared one!) */
  ResumeScript = "ResumeScript",
  SkipScript = "SkipScript",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function commandTypeFromJSON(object: any): CommandType {
  switch (object) {
    case 0:
    case "CommandTypeUnknown":
      return CommandType.CommandTypeUnknown;
    case 10:
    case "GetStationsAndSignals":
      return CommandType.GetStationsAndSignals;
    case 11:
    case "GetStatus":
      return CommandType.GetStatus;
    case 21:
    case "LoadScript":
      return CommandType.LoadScript;
    case 22:
    case "SaveScript":
      return CommandType.SaveScript;
    case 23:
    case "ListScripts":
      return CommandType.ListScripts;
    case 24:
    case "DeleteScript":
      return CommandType.DeleteScript;
    case 25:
    case "RenameScript":
      return CommandType.RenameScript;
    case 26:
    case "ConvertLegacyScript":
      return CommandType.ConvertLegacyScript;
    case 27:
    case "GetScriptRuns":
      return CommandType.GetScriptRuns;
    case 30:
    case "PrepareScriptExecution":
      return CommandType.PrepareScriptExecution;
    case 31:
    case "StopScript":
      return CommandType.StopScript;
    case 33:
    case "PauseScript":
      return CommandType.PauseScript;
    case 34:
    case "ResumeScript":
      return CommandType.ResumeScript;
    case 40:
    case "SkipScript":
      return CommandType.SkipScript;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CommandType.UNRECOGNIZED;
  }
}

export function commandTypeToJSON(object: CommandType): string {
  switch (object) {
    case CommandType.CommandTypeUnknown:
      return "CommandTypeUnknown";
    case CommandType.GetStationsAndSignals:
      return "GetStationsAndSignals";
    case CommandType.GetStatus:
      return "GetStatus";
    case CommandType.LoadScript:
      return "LoadScript";
    case CommandType.SaveScript:
      return "SaveScript";
    case CommandType.ListScripts:
      return "ListScripts";
    case CommandType.DeleteScript:
      return "DeleteScript";
    case CommandType.RenameScript:
      return "RenameScript";
    case CommandType.ConvertLegacyScript:
      return "ConvertLegacyScript";
    case CommandType.GetScriptRuns:
      return "GetScriptRuns";
    case CommandType.PrepareScriptExecution:
      return "PrepareScriptExecution";
    case CommandType.StopScript:
      return "StopScript";
    case CommandType.PauseScript:
      return "PauseScript";
    case CommandType.ResumeScript:
      return "ResumeScript";
    case CommandType.SkipScript:
      return "SkipScript";
    case CommandType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Request {
  type: CommandType;
  user: string;
  getStationsAndSignalsReq?: GetStationsAndSignalsRequest | undefined;
  getStatusReq?: GetStatusRequest | undefined;
  loadScriptReq?: LoadScriptRequest | undefined;
  saveScriptReq?: SaveScriptRequest | undefined;
  listScriptsReq?: ListScriptsRequest | undefined;
  deleteScriptReq?: DeleteScriptRequest | undefined;
  renameScriptReq?: RenameScriptRequest | undefined;
  convertLegacyScriptReq?: ConvertLegacyScriptRequest | undefined;
  getScriptRunsReq?: GetScriptRunsRequest | undefined;
  prepareScriptExecutionReq?: PrepareScriptExecutionRequest | undefined;
  stopScriptReq?: StopScriptRequest | undefined;
  pauseScriptReq?: PauseScriptRequest | undefined;
  resumeScriptReq?: ResumeScriptRequest | undefined;
  skipScriptReq?: SkipScriptRequest | undefined;
}

export interface Reply {
  type: CommandType;
  getStationsRep?: GetStationsAndSignalsReply | undefined;
  getStatusRep?: GetStatusReply | undefined;
  loadScriptRep?: LoadScriptReply | undefined;
  saveScriptRep?: SaveScriptReply | undefined;
  listScriptsRep?: ListScriptsReply | undefined;
  deleteScriptRep?: DeleteScriptReply | undefined;
  renameScriptRep?: RenameScriptReply | undefined;
  convertLegacyScriptRep?: ConvertLegacyScriptReply | undefined;
  getScriptRunsRep?: GetScriptRunsReply | undefined;
  prepareScriptExecutionRep?: PrepareScriptExecutionReply | undefined;
  stopScriptRep?: StopScriptReply | undefined;
  pauseScriptRep?: PauseScriptReply | undefined;
  resumeScriptRep?: ResumeScriptReply | undefined;
  skipScriptRep?: SkipScriptReply | undefined;
}

function createBaseRequest(): Request {
  return {
    type: CommandType.CommandTypeUnknown,
    user: "",
    getStationsAndSignalsReq: undefined,
    getStatusReq: undefined,
    loadScriptReq: undefined,
    saveScriptReq: undefined,
    listScriptsReq: undefined,
    deleteScriptReq: undefined,
    renameScriptReq: undefined,
    convertLegacyScriptReq: undefined,
    getScriptRunsReq: undefined,
    prepareScriptExecutionReq: undefined,
    stopScriptReq: undefined,
    pauseScriptReq: undefined,
    resumeScriptReq: undefined,
    skipScriptReq: undefined,
  };
}

export const Request = {
  fromJSON(object: any): Request {
    return {
      type: isSet(object.type) ? commandTypeFromJSON(object.type) : CommandType.CommandTypeUnknown,
      user: isSet(object.user) ? gt.String(object.user) : "",
      getStationsAndSignalsReq: isSet(object.getStationsAndSignalsReq)
        ? GetStationsAndSignalsRequest.fromJSON(object.getStationsAndSignalsReq)
        : undefined,
      getStatusReq: isSet(object.getStatusReq) ? GetStatusRequest.fromJSON(object.getStatusReq) : undefined,
      loadScriptReq: isSet(object.loadScriptReq) ? LoadScriptRequest.fromJSON(object.loadScriptReq) : undefined,
      saveScriptReq: isSet(object.saveScriptReq) ? SaveScriptRequest.fromJSON(object.saveScriptReq) : undefined,
      listScriptsReq: isSet(object.listScriptsReq) ? ListScriptsRequest.fromJSON(object.listScriptsReq) : undefined,
      deleteScriptReq: isSet(object.deleteScriptReq) ? DeleteScriptRequest.fromJSON(object.deleteScriptReq) : undefined,
      renameScriptReq: isSet(object.renameScriptReq) ? RenameScriptRequest.fromJSON(object.renameScriptReq) : undefined,
      convertLegacyScriptReq: isSet(object.convertLegacyScriptReq)
        ? ConvertLegacyScriptRequest.fromJSON(object.convertLegacyScriptReq)
        : undefined,
      getScriptRunsReq: isSet(object.getScriptRunsReq)
        ? GetScriptRunsRequest.fromJSON(object.getScriptRunsReq)
        : undefined,
      prepareScriptExecutionReq: isSet(object.prepareScriptExecutionReq)
        ? PrepareScriptExecutionRequest.fromJSON(object.prepareScriptExecutionReq)
        : undefined,
      stopScriptReq: isSet(object.stopScriptReq) ? StopScriptRequest.fromJSON(object.stopScriptReq) : undefined,
      pauseScriptReq: isSet(object.pauseScriptReq) ? PauseScriptRequest.fromJSON(object.pauseScriptReq) : undefined,
      resumeScriptReq: isSet(object.resumeScriptReq) ? ResumeScriptRequest.fromJSON(object.resumeScriptReq) : undefined,
      skipScriptReq: isSet(object.skipScriptReq) ? SkipScriptRequest.fromJSON(object.skipScriptReq) : undefined,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    if (message.type !== CommandType.CommandTypeUnknown) {
      obj.type = commandTypeToJSON(message.type);
    }
    if (message.user !== "") {
      obj.user = message.user;
    }
    if (message.getStationsAndSignalsReq !== undefined) {
      obj.getStationsAndSignalsReq = GetStationsAndSignalsRequest.toJSON(message.getStationsAndSignalsReq);
    }
    if (message.getStatusReq !== undefined) {
      obj.getStatusReq = GetStatusRequest.toJSON(message.getStatusReq);
    }
    if (message.loadScriptReq !== undefined) {
      obj.loadScriptReq = LoadScriptRequest.toJSON(message.loadScriptReq);
    }
    if (message.saveScriptReq !== undefined) {
      obj.saveScriptReq = SaveScriptRequest.toJSON(message.saveScriptReq);
    }
    if (message.listScriptsReq !== undefined) {
      obj.listScriptsReq = ListScriptsRequest.toJSON(message.listScriptsReq);
    }
    if (message.deleteScriptReq !== undefined) {
      obj.deleteScriptReq = DeleteScriptRequest.toJSON(message.deleteScriptReq);
    }
    if (message.renameScriptReq !== undefined) {
      obj.renameScriptReq = RenameScriptRequest.toJSON(message.renameScriptReq);
    }
    if (message.convertLegacyScriptReq !== undefined) {
      obj.convertLegacyScriptReq = ConvertLegacyScriptRequest.toJSON(message.convertLegacyScriptReq);
    }
    if (message.getScriptRunsReq !== undefined) {
      obj.getScriptRunsReq = GetScriptRunsRequest.toJSON(message.getScriptRunsReq);
    }
    if (message.prepareScriptExecutionReq !== undefined) {
      obj.prepareScriptExecutionReq = PrepareScriptExecutionRequest.toJSON(message.prepareScriptExecutionReq);
    }
    if (message.stopScriptReq !== undefined) {
      obj.stopScriptReq = StopScriptRequest.toJSON(message.stopScriptReq);
    }
    if (message.pauseScriptReq !== undefined) {
      obj.pauseScriptReq = PauseScriptRequest.toJSON(message.pauseScriptReq);
    }
    if (message.resumeScriptReq !== undefined) {
      obj.resumeScriptReq = ResumeScriptRequest.toJSON(message.resumeScriptReq);
    }
    if (message.skipScriptReq !== undefined) {
      obj.skipScriptReq = SkipScriptRequest.toJSON(message.skipScriptReq);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Request>, I>>(base?: I): Request {
    return Request.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    message.type = object.type ?? CommandType.CommandTypeUnknown;
    message.user = object.user ?? "";
    message.getStationsAndSignalsReq =
      (object.getStationsAndSignalsReq !== undefined && object.getStationsAndSignalsReq !== null)
        ? GetStationsAndSignalsRequest.fromPartial(object.getStationsAndSignalsReq)
        : undefined;
    message.getStatusReq = (object.getStatusReq !== undefined && object.getStatusReq !== null)
      ? GetStatusRequest.fromPartial(object.getStatusReq)
      : undefined;
    message.loadScriptReq = (object.loadScriptReq !== undefined && object.loadScriptReq !== null)
      ? LoadScriptRequest.fromPartial(object.loadScriptReq)
      : undefined;
    message.saveScriptReq = (object.saveScriptReq !== undefined && object.saveScriptReq !== null)
      ? SaveScriptRequest.fromPartial(object.saveScriptReq)
      : undefined;
    message.listScriptsReq = (object.listScriptsReq !== undefined && object.listScriptsReq !== null)
      ? ListScriptsRequest.fromPartial(object.listScriptsReq)
      : undefined;
    message.deleteScriptReq = (object.deleteScriptReq !== undefined && object.deleteScriptReq !== null)
      ? DeleteScriptRequest.fromPartial(object.deleteScriptReq)
      : undefined;
    message.renameScriptReq = (object.renameScriptReq !== undefined && object.renameScriptReq !== null)
      ? RenameScriptRequest.fromPartial(object.renameScriptReq)
      : undefined;
    message.convertLegacyScriptReq =
      (object.convertLegacyScriptReq !== undefined && object.convertLegacyScriptReq !== null)
        ? ConvertLegacyScriptRequest.fromPartial(object.convertLegacyScriptReq)
        : undefined;
    message.getScriptRunsReq = (object.getScriptRunsReq !== undefined && object.getScriptRunsReq !== null)
      ? GetScriptRunsRequest.fromPartial(object.getScriptRunsReq)
      : undefined;
    message.prepareScriptExecutionReq =
      (object.prepareScriptExecutionReq !== undefined && object.prepareScriptExecutionReq !== null)
        ? PrepareScriptExecutionRequest.fromPartial(object.prepareScriptExecutionReq)
        : undefined;
    message.stopScriptReq = (object.stopScriptReq !== undefined && object.stopScriptReq !== null)
      ? StopScriptRequest.fromPartial(object.stopScriptReq)
      : undefined;
    message.pauseScriptReq = (object.pauseScriptReq !== undefined && object.pauseScriptReq !== null)
      ? PauseScriptRequest.fromPartial(object.pauseScriptReq)
      : undefined;
    message.resumeScriptReq = (object.resumeScriptReq !== undefined && object.resumeScriptReq !== null)
      ? ResumeScriptRequest.fromPartial(object.resumeScriptReq)
      : undefined;
    message.skipScriptReq = (object.skipScriptReq !== undefined && object.skipScriptReq !== null)
      ? SkipScriptRequest.fromPartial(object.skipScriptReq)
      : undefined;
    return message;
  },
};

function createBaseReply(): Reply {
  return {
    type: CommandType.CommandTypeUnknown,
    getStationsRep: undefined,
    getStatusRep: undefined,
    loadScriptRep: undefined,
    saveScriptRep: undefined,
    listScriptsRep: undefined,
    deleteScriptRep: undefined,
    renameScriptRep: undefined,
    convertLegacyScriptRep: undefined,
    getScriptRunsRep: undefined,
    prepareScriptExecutionRep: undefined,
    stopScriptRep: undefined,
    pauseScriptRep: undefined,
    resumeScriptRep: undefined,
    skipScriptRep: undefined,
  };
}

export const Reply = {
  fromJSON(object: any): Reply {
    return {
      type: isSet(object.type) ? commandTypeFromJSON(object.type) : CommandType.CommandTypeUnknown,
      getStationsRep: isSet(object.getStationsRep)
        ? GetStationsAndSignalsReply.fromJSON(object.getStationsRep)
        : undefined,
      getStatusRep: isSet(object.getStatusRep) ? GetStatusReply.fromJSON(object.getStatusRep) : undefined,
      loadScriptRep: isSet(object.loadScriptRep) ? LoadScriptReply.fromJSON(object.loadScriptRep) : undefined,
      saveScriptRep: isSet(object.saveScriptRep) ? SaveScriptReply.fromJSON(object.saveScriptRep) : undefined,
      listScriptsRep: isSet(object.listScriptsRep) ? ListScriptsReply.fromJSON(object.listScriptsRep) : undefined,
      deleteScriptRep: isSet(object.deleteScriptRep) ? DeleteScriptReply.fromJSON(object.deleteScriptRep) : undefined,
      renameScriptRep: isSet(object.renameScriptRep) ? RenameScriptReply.fromJSON(object.renameScriptRep) : undefined,
      convertLegacyScriptRep: isSet(object.convertLegacyScriptRep)
        ? ConvertLegacyScriptReply.fromJSON(object.convertLegacyScriptRep)
        : undefined,
      getScriptRunsRep: isSet(object.getScriptRunsRep)
        ? GetScriptRunsReply.fromJSON(object.getScriptRunsRep)
        : undefined,
      prepareScriptExecutionRep: isSet(object.prepareScriptExecutionRep)
        ? PrepareScriptExecutionReply.fromJSON(object.prepareScriptExecutionRep)
        : undefined,
      stopScriptRep: isSet(object.stopScriptRep) ? StopScriptReply.fromJSON(object.stopScriptRep) : undefined,
      pauseScriptRep: isSet(object.pauseScriptRep) ? PauseScriptReply.fromJSON(object.pauseScriptRep) : undefined,
      resumeScriptRep: isSet(object.resumeScriptRep) ? ResumeScriptReply.fromJSON(object.resumeScriptRep) : undefined,
      skipScriptRep: isSet(object.skipScriptRep) ? SkipScriptReply.fromJSON(object.skipScriptRep) : undefined,
    };
  },

  toJSON(message: Reply): unknown {
    const obj: any = {};
    if (message.type !== CommandType.CommandTypeUnknown) {
      obj.type = commandTypeToJSON(message.type);
    }
    if (message.getStationsRep !== undefined) {
      obj.getStationsRep = GetStationsAndSignalsReply.toJSON(message.getStationsRep);
    }
    if (message.getStatusRep !== undefined) {
      obj.getStatusRep = GetStatusReply.toJSON(message.getStatusRep);
    }
    if (message.loadScriptRep !== undefined) {
      obj.loadScriptRep = LoadScriptReply.toJSON(message.loadScriptRep);
    }
    if (message.saveScriptRep !== undefined) {
      obj.saveScriptRep = SaveScriptReply.toJSON(message.saveScriptRep);
    }
    if (message.listScriptsRep !== undefined) {
      obj.listScriptsRep = ListScriptsReply.toJSON(message.listScriptsRep);
    }
    if (message.deleteScriptRep !== undefined) {
      obj.deleteScriptRep = DeleteScriptReply.toJSON(message.deleteScriptRep);
    }
    if (message.renameScriptRep !== undefined) {
      obj.renameScriptRep = RenameScriptReply.toJSON(message.renameScriptRep);
    }
    if (message.convertLegacyScriptRep !== undefined) {
      obj.convertLegacyScriptRep = ConvertLegacyScriptReply.toJSON(message.convertLegacyScriptRep);
    }
    if (message.getScriptRunsRep !== undefined) {
      obj.getScriptRunsRep = GetScriptRunsReply.toJSON(message.getScriptRunsRep);
    }
    if (message.prepareScriptExecutionRep !== undefined) {
      obj.prepareScriptExecutionRep = PrepareScriptExecutionReply.toJSON(message.prepareScriptExecutionRep);
    }
    if (message.stopScriptRep !== undefined) {
      obj.stopScriptRep = StopScriptReply.toJSON(message.stopScriptRep);
    }
    if (message.pauseScriptRep !== undefined) {
      obj.pauseScriptRep = PauseScriptReply.toJSON(message.pauseScriptRep);
    }
    if (message.resumeScriptRep !== undefined) {
      obj.resumeScriptRep = ResumeScriptReply.toJSON(message.resumeScriptRep);
    }
    if (message.skipScriptRep !== undefined) {
      obj.skipScriptRep = SkipScriptReply.toJSON(message.skipScriptRep);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Reply>, I>>(base?: I): Reply {
    return Reply.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Reply>, I>>(object: I): Reply {
    const message = createBaseReply();
    message.type = object.type ?? CommandType.CommandTypeUnknown;
    message.getStationsRep = (object.getStationsRep !== undefined && object.getStationsRep !== null)
      ? GetStationsAndSignalsReply.fromPartial(object.getStationsRep)
      : undefined;
    message.getStatusRep = (object.getStatusRep !== undefined && object.getStatusRep !== null)
      ? GetStatusReply.fromPartial(object.getStatusRep)
      : undefined;
    message.loadScriptRep = (object.loadScriptRep !== undefined && object.loadScriptRep !== null)
      ? LoadScriptReply.fromPartial(object.loadScriptRep)
      : undefined;
    message.saveScriptRep = (object.saveScriptRep !== undefined && object.saveScriptRep !== null)
      ? SaveScriptReply.fromPartial(object.saveScriptRep)
      : undefined;
    message.listScriptsRep = (object.listScriptsRep !== undefined && object.listScriptsRep !== null)
      ? ListScriptsReply.fromPartial(object.listScriptsRep)
      : undefined;
    message.deleteScriptRep = (object.deleteScriptRep !== undefined && object.deleteScriptRep !== null)
      ? DeleteScriptReply.fromPartial(object.deleteScriptRep)
      : undefined;
    message.renameScriptRep = (object.renameScriptRep !== undefined && object.renameScriptRep !== null)
      ? RenameScriptReply.fromPartial(object.renameScriptRep)
      : undefined;
    message.convertLegacyScriptRep =
      (object.convertLegacyScriptRep !== undefined && object.convertLegacyScriptRep !== null)
        ? ConvertLegacyScriptReply.fromPartial(object.convertLegacyScriptRep)
        : undefined;
    message.getScriptRunsRep = (object.getScriptRunsRep !== undefined && object.getScriptRunsRep !== null)
      ? GetScriptRunsReply.fromPartial(object.getScriptRunsRep)
      : undefined;
    message.prepareScriptExecutionRep =
      (object.prepareScriptExecutionRep !== undefined && object.prepareScriptExecutionRep !== null)
        ? PrepareScriptExecutionReply.fromPartial(object.prepareScriptExecutionRep)
        : undefined;
    message.stopScriptRep = (object.stopScriptRep !== undefined && object.stopScriptRep !== null)
      ? StopScriptReply.fromPartial(object.stopScriptRep)
      : undefined;
    message.pauseScriptRep = (object.pauseScriptRep !== undefined && object.pauseScriptRep !== null)
      ? PauseScriptReply.fromPartial(object.pauseScriptRep)
      : undefined;
    message.resumeScriptRep = (object.resumeScriptRep !== undefined && object.resumeScriptRep !== null)
      ? ResumeScriptReply.fromPartial(object.resumeScriptRep)
      : undefined;
    message.skipScriptRep = (object.skipScriptRep !== undefined && object.skipScriptRep !== null)
      ? SkipScriptReply.fromPartial(object.skipScriptRep)
      : undefined;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
