/* eslint-disable */

/**
 * Hi future maintainer
 * If you add a new Parameter Permission you should also change PermissionMapper.cs and
 * the RequiresAnyPermissionEnum (times two) in ParameterRestService.cs also change getAccessRights.js
 * Also coordinate this with WPMC-SM.
 * and update  https://siemensgamesa.sharepoint.com/:w:/r/teams/BG00293/SWSDocuments/RADIUS%20interface%20-%20HPPP.docx?d=wc2e31d01948c4dab96e181c9d81be6b8&csf=1&web=1&e=LEXTxd
 */
export enum Permission {
  ViewHpppLogs = "ViewHpppLogs",
  ViewExecutionStatistics = "ViewExecutionStatistics",
  ViewPolicySettings = "ViewPolicySettings",
  ViewControlParameters = "ViewControlParameters",
  ViewFeatureParameters = "ViewFeatureParameters",
  ViewOtherParameters = "ViewOtherParameters",
  ModifyPolicySettings = "ModifyPolicySettings",
  ModifyControlParameters = "ModifyControlParameters",
  ModifyFeatureParameters = "ModifyFeatureParameters",
  ModifyOtherParameters = "ModifyOtherParameters",
  ModifyHighAvailabilitySettings = "ModifyHighAvailabilitySettings",
  ModifyServices = "ModifyServices",
  ViewHpppAuditLogs = "ViewHpppAuditLogs",
  ViewDeveloperParameters = "ViewDeveloperParameters",
  ModifyDeveloperParameters = "ModifyDeveloperParameters",
  ViewFullConfig = "ViewFullConfig",
  ModifyFullConfig = "ModifyFullConfig",
  InjectSignals = "InjectSignals",
  ModifyVgmSetup = "ModifyVgmSetup",
  ViewStatistics = "ViewStatistics",
  ViewParkReference = "ViewParkReference",
  ModifyParkReference = "ModifyParkReference",
  ViewParkStop = "ViewParkStop",
  ModifyParkStop = "ModifyParkStop",
  ViewTopology = "ViewTopology",
  ModifyTopology = "ModifyTopology",
  ViewPowerCorrection = "ViewPowerCorrection",
  ModifyPowerCorrection = "ModifyPowerCorrection",
  ViewFrequencyResponse = "ViewFrequencyResponse",
  ModifyFrequencyResponse = "ModifyFrequencyResponse",
  ViewPowerFreeze = "ViewPowerFreeze",
  ModifyPowerFreeze = "ModifyPowerFreeze",
  ViewGridProtection = "ViewGridProtection",
  ModifyGridProtection = "ModifyGridProtection",
  ViewInertialResponse = "ViewInertialResponse",
  ModifyInertialResponse = "ModifyInertialResponse",
  ViewHighWindPower = "ViewHighWindPower",
  ModifyHighWindPower = "ModifyHighWindPower",
  ViewSpinningReserve = "ViewSpinningReserve",
  ModifySpinningReserve = "ModifySpinningReserve",
  ViewQofU = "ViewQofU",
  ModifyQofU = "ModifyQofU",
  ViewUpstreamCompensation = "ViewUpstreamCompensation",
  ModifyUpstreamCompensation = "ModifyUpstreamCompensation",
  ViewReactiveCapabilityEstimation = "ViewReactiveCapabilityEstimation",
  ModifyReactiveCapabilityEstimation = "ModifyReactiveCapabilityEstimation",
  ViewVoltageControl = "ViewVoltageControl",
  ModifyVoltageControl = "ModifyVoltageControl",
  ViewReactivePowerControl = "ViewReactivePowerControl",
  ModifyReactivePowerControl = "ModifyReactivePowerControl",
  ViewActivePowerControl = "ViewActivePowerControl",
  ModifyActivePowerControl = "ModifyActivePowerControl",
  ViewVgmSetup = "ViewVgmSetup",
  ViewPolicyActivation = "ViewPolicyActivation",
  ModifyPolicyActivation = "ModifyPolicyActivation",
  ViewGeneratorSetting = "ViewGeneratorSetting",
  ModifyGeneratorSettings = "ModifyGeneratorSettings",
  SgreUserProfile = "SgreUserProfile",
  ViewEnergyStorage = "ViewEnergyStorage",
  ModifyEnergyStorage = "ModifyEnergyStorage",
  ViewServerLogfiles = "ViewServerLogfiles",
  ModifyServerLogfiles = "ModifyServerLogfiles",
  ViewLocalHighResolutionData = "ViewLocalHighResolutionData",
  ModifyLocalHighResolutionData = "ModifyLocalHighResolutionData",
  SoftPLCAuthenticationAllowed = "SoftPLCAuthenticationAllowed",
  ModifyReferenceSettings = "ModifyReferenceSettings",
  ViewApparentPowerControl = "ViewApparentPowerControl",
  ModifyApparentPowerControl = "ModifyApparentPowerControl",
  ViewFrequencySensitiveMode = "ViewFrequencySensitiveMode",
  ModifyFrequencySensitiveMode = "ModifyFrequencySensitiveMode",
  ViewCustomTurbineAssignment = "ViewCustomTurbineAssignment",
  ModifyCustomTurbineAssignment = "ModifyCustomTurbineAssignment",
  UNRECOGNIZED = "UNRECOGNIZED",
}

export function permissionFromJSON(object: any): Permission {
  switch (object) {
    case 1:
    case "ViewHpppLogs":
      return Permission.ViewHpppLogs;
    case 2:
    case "ViewExecutionStatistics":
      return Permission.ViewExecutionStatistics;
    case 3:
    case "ViewPolicySettings":
      return Permission.ViewPolicySettings;
    case 4:
    case "ViewControlParameters":
      return Permission.ViewControlParameters;
    case 5:
    case "ViewFeatureParameters":
      return Permission.ViewFeatureParameters;
    case 6:
    case "ViewOtherParameters":
      return Permission.ViewOtherParameters;
    case 7:
    case "ModifyPolicySettings":
      return Permission.ModifyPolicySettings;
    case 8:
    case "ModifyControlParameters":
      return Permission.ModifyControlParameters;
    case 9:
    case "ModifyFeatureParameters":
      return Permission.ModifyFeatureParameters;
    case 10:
    case "ModifyOtherParameters":
      return Permission.ModifyOtherParameters;
    case 11:
    case "ModifyHighAvailabilitySettings":
      return Permission.ModifyHighAvailabilitySettings;
    case 12:
    case "ModifyServices":
      return Permission.ModifyServices;
    case 13:
    case "ViewHpppAuditLogs":
      return Permission.ViewHpppAuditLogs;
    case 14:
    case "ViewDeveloperParameters":
      return Permission.ViewDeveloperParameters;
    case 15:
    case "ModifyDeveloperParameters":
      return Permission.ModifyDeveloperParameters;
    case 16:
    case "ViewFullConfig":
      return Permission.ViewFullConfig;
    case 17:
    case "ModifyFullConfig":
      return Permission.ModifyFullConfig;
    case 18:
    case "InjectSignals":
      return Permission.InjectSignals;
    case 19:
    case "ModifyVgmSetup":
      return Permission.ModifyVgmSetup;
    case 20:
    case "ViewStatistics":
      return Permission.ViewStatistics;
    case 21:
    case "ViewParkReference":
      return Permission.ViewParkReference;
    case 22:
    case "ModifyParkReference":
      return Permission.ModifyParkReference;
    case 23:
    case "ViewParkStop":
      return Permission.ViewParkStop;
    case 24:
    case "ModifyParkStop":
      return Permission.ModifyParkStop;
    case 25:
    case "ViewTopology":
      return Permission.ViewTopology;
    case 26:
    case "ModifyTopology":
      return Permission.ModifyTopology;
    case 27:
    case "ViewPowerCorrection":
      return Permission.ViewPowerCorrection;
    case 28:
    case "ModifyPowerCorrection":
      return Permission.ModifyPowerCorrection;
    case 29:
    case "ViewFrequencyResponse":
      return Permission.ViewFrequencyResponse;
    case 30:
    case "ModifyFrequencyResponse":
      return Permission.ModifyFrequencyResponse;
    case 31:
    case "ViewPowerFreeze":
      return Permission.ViewPowerFreeze;
    case 32:
    case "ModifyPowerFreeze":
      return Permission.ModifyPowerFreeze;
    case 33:
    case "ViewGridProtection":
      return Permission.ViewGridProtection;
    case 34:
    case "ModifyGridProtection":
      return Permission.ModifyGridProtection;
    case 35:
    case "ViewInertialResponse":
      return Permission.ViewInertialResponse;
    case 36:
    case "ModifyInertialResponse":
      return Permission.ModifyInertialResponse;
    case 37:
    case "ViewHighWindPower":
      return Permission.ViewHighWindPower;
    case 38:
    case "ModifyHighWindPower":
      return Permission.ModifyHighWindPower;
    case 39:
    case "ViewSpinningReserve":
      return Permission.ViewSpinningReserve;
    case 40:
    case "ModifySpinningReserve":
      return Permission.ModifySpinningReserve;
    case 41:
    case "ViewQofU":
      return Permission.ViewQofU;
    case 42:
    case "ModifyQofU":
      return Permission.ModifyQofU;
    case 43:
    case "ViewUpstreamCompensation":
      return Permission.ViewUpstreamCompensation;
    case 44:
    case "ModifyUpstreamCompensation":
      return Permission.ModifyUpstreamCompensation;
    case 45:
    case "ViewReactiveCapabilityEstimation":
      return Permission.ViewReactiveCapabilityEstimation;
    case 46:
    case "ModifyReactiveCapabilityEstimation":
      return Permission.ModifyReactiveCapabilityEstimation;
    case 47:
    case "ViewVoltageControl":
      return Permission.ViewVoltageControl;
    case 48:
    case "ModifyVoltageControl":
      return Permission.ModifyVoltageControl;
    case 49:
    case "ViewReactivePowerControl":
      return Permission.ViewReactivePowerControl;
    case 50:
    case "ModifyReactivePowerControl":
      return Permission.ModifyReactivePowerControl;
    case 51:
    case "ViewActivePowerControl":
      return Permission.ViewActivePowerControl;
    case 52:
    case "ModifyActivePowerControl":
      return Permission.ModifyActivePowerControl;
    case 53:
    case "ViewVgmSetup":
      return Permission.ViewVgmSetup;
    case 54:
    case "ViewPolicyActivation":
      return Permission.ViewPolicyActivation;
    case 55:
    case "ModifyPolicyActivation":
      return Permission.ModifyPolicyActivation;
    case 56:
    case "ViewGeneratorSetting":
      return Permission.ViewGeneratorSetting;
    case 57:
    case "ModifyGeneratorSettings":
      return Permission.ModifyGeneratorSettings;
    case 58:
    case "SgreUserProfile":
      return Permission.SgreUserProfile;
    case 59:
    case "ViewEnergyStorage":
      return Permission.ViewEnergyStorage;
    case 60:
    case "ModifyEnergyStorage":
      return Permission.ModifyEnergyStorage;
    case 61:
    case "ViewServerLogfiles":
      return Permission.ViewServerLogfiles;
    case 62:
    case "ModifyServerLogfiles":
      return Permission.ModifyServerLogfiles;
    case 63:
    case "ViewLocalHighResolutionData":
      return Permission.ViewLocalHighResolutionData;
    case 64:
    case "ModifyLocalHighResolutionData":
      return Permission.ModifyLocalHighResolutionData;
    case 65:
    case "SoftPLCAuthenticationAllowed":
      return Permission.SoftPLCAuthenticationAllowed;
    case 66:
    case "ModifyReferenceSettings":
      return Permission.ModifyReferenceSettings;
    case 67:
    case "ViewApparentPowerControl":
      return Permission.ViewApparentPowerControl;
    case 68:
    case "ModifyApparentPowerControl":
      return Permission.ModifyApparentPowerControl;
    case 69:
    case "ViewFrequencySensitiveMode":
      return Permission.ViewFrequencySensitiveMode;
    case 70:
    case "ModifyFrequencySensitiveMode":
      return Permission.ModifyFrequencySensitiveMode;
    case 71:
    case "ViewCustomTurbineAssignment":
      return Permission.ViewCustomTurbineAssignment;
    case 72:
    case "ModifyCustomTurbineAssignment":
      return Permission.ModifyCustomTurbineAssignment;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Permission.UNRECOGNIZED;
  }
}

export function permissionToJSON(object: Permission): string {
  switch (object) {
    case Permission.ViewHpppLogs:
      return "ViewHpppLogs";
    case Permission.ViewExecutionStatistics:
      return "ViewExecutionStatistics";
    case Permission.ViewPolicySettings:
      return "ViewPolicySettings";
    case Permission.ViewControlParameters:
      return "ViewControlParameters";
    case Permission.ViewFeatureParameters:
      return "ViewFeatureParameters";
    case Permission.ViewOtherParameters:
      return "ViewOtherParameters";
    case Permission.ModifyPolicySettings:
      return "ModifyPolicySettings";
    case Permission.ModifyControlParameters:
      return "ModifyControlParameters";
    case Permission.ModifyFeatureParameters:
      return "ModifyFeatureParameters";
    case Permission.ModifyOtherParameters:
      return "ModifyOtherParameters";
    case Permission.ModifyHighAvailabilitySettings:
      return "ModifyHighAvailabilitySettings";
    case Permission.ModifyServices:
      return "ModifyServices";
    case Permission.ViewHpppAuditLogs:
      return "ViewHpppAuditLogs";
    case Permission.ViewDeveloperParameters:
      return "ViewDeveloperParameters";
    case Permission.ModifyDeveloperParameters:
      return "ModifyDeveloperParameters";
    case Permission.ViewFullConfig:
      return "ViewFullConfig";
    case Permission.ModifyFullConfig:
      return "ModifyFullConfig";
    case Permission.InjectSignals:
      return "InjectSignals";
    case Permission.ModifyVgmSetup:
      return "ModifyVgmSetup";
    case Permission.ViewStatistics:
      return "ViewStatistics";
    case Permission.ViewParkReference:
      return "ViewParkReference";
    case Permission.ModifyParkReference:
      return "ModifyParkReference";
    case Permission.ViewParkStop:
      return "ViewParkStop";
    case Permission.ModifyParkStop:
      return "ModifyParkStop";
    case Permission.ViewTopology:
      return "ViewTopology";
    case Permission.ModifyTopology:
      return "ModifyTopology";
    case Permission.ViewPowerCorrection:
      return "ViewPowerCorrection";
    case Permission.ModifyPowerCorrection:
      return "ModifyPowerCorrection";
    case Permission.ViewFrequencyResponse:
      return "ViewFrequencyResponse";
    case Permission.ModifyFrequencyResponse:
      return "ModifyFrequencyResponse";
    case Permission.ViewPowerFreeze:
      return "ViewPowerFreeze";
    case Permission.ModifyPowerFreeze:
      return "ModifyPowerFreeze";
    case Permission.ViewGridProtection:
      return "ViewGridProtection";
    case Permission.ModifyGridProtection:
      return "ModifyGridProtection";
    case Permission.ViewInertialResponse:
      return "ViewInertialResponse";
    case Permission.ModifyInertialResponse:
      return "ModifyInertialResponse";
    case Permission.ViewHighWindPower:
      return "ViewHighWindPower";
    case Permission.ModifyHighWindPower:
      return "ModifyHighWindPower";
    case Permission.ViewSpinningReserve:
      return "ViewSpinningReserve";
    case Permission.ModifySpinningReserve:
      return "ModifySpinningReserve";
    case Permission.ViewQofU:
      return "ViewQofU";
    case Permission.ModifyQofU:
      return "ModifyQofU";
    case Permission.ViewUpstreamCompensation:
      return "ViewUpstreamCompensation";
    case Permission.ModifyUpstreamCompensation:
      return "ModifyUpstreamCompensation";
    case Permission.ViewReactiveCapabilityEstimation:
      return "ViewReactiveCapabilityEstimation";
    case Permission.ModifyReactiveCapabilityEstimation:
      return "ModifyReactiveCapabilityEstimation";
    case Permission.ViewVoltageControl:
      return "ViewVoltageControl";
    case Permission.ModifyVoltageControl:
      return "ModifyVoltageControl";
    case Permission.ViewReactivePowerControl:
      return "ViewReactivePowerControl";
    case Permission.ModifyReactivePowerControl:
      return "ModifyReactivePowerControl";
    case Permission.ViewActivePowerControl:
      return "ViewActivePowerControl";
    case Permission.ModifyActivePowerControl:
      return "ModifyActivePowerControl";
    case Permission.ViewVgmSetup:
      return "ViewVgmSetup";
    case Permission.ViewPolicyActivation:
      return "ViewPolicyActivation";
    case Permission.ModifyPolicyActivation:
      return "ModifyPolicyActivation";
    case Permission.ViewGeneratorSetting:
      return "ViewGeneratorSetting";
    case Permission.ModifyGeneratorSettings:
      return "ModifyGeneratorSettings";
    case Permission.SgreUserProfile:
      return "SgreUserProfile";
    case Permission.ViewEnergyStorage:
      return "ViewEnergyStorage";
    case Permission.ModifyEnergyStorage:
      return "ModifyEnergyStorage";
    case Permission.ViewServerLogfiles:
      return "ViewServerLogfiles";
    case Permission.ModifyServerLogfiles:
      return "ModifyServerLogfiles";
    case Permission.ViewLocalHighResolutionData:
      return "ViewLocalHighResolutionData";
    case Permission.ModifyLocalHighResolutionData:
      return "ModifyLocalHighResolutionData";
    case Permission.SoftPLCAuthenticationAllowed:
      return "SoftPLCAuthenticationAllowed";
    case Permission.ModifyReferenceSettings:
      return "ModifyReferenceSettings";
    case Permission.ViewApparentPowerControl:
      return "ViewApparentPowerControl";
    case Permission.ModifyApparentPowerControl:
      return "ModifyApparentPowerControl";
    case Permission.ViewFrequencySensitiveMode:
      return "ViewFrequencySensitiveMode";
    case Permission.ModifyFrequencySensitiveMode:
      return "ModifyFrequencySensitiveMode";
    case Permission.ViewCustomTurbineAssignment:
      return "ViewCustomTurbineAssignment";
    case Permission.ModifyCustomTurbineAssignment:
      return "ModifyCustomTurbineAssignment";
    case Permission.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
