/* eslint-disable import/prefer-default-export */
import Voicemeeter from "./lib/VoicemeeterConnector";
import * as constants from "./lib/VoicemeeterConsts";
import * as types from "./types/VoicemeeterTypes";

const { BusProperties, InterfaceTypes, StripProperties, RecorderProperties } = constants;

export { Voicemeeter, BusProperties, InterfaceTypes, StripProperties, RecorderProperties, types };
