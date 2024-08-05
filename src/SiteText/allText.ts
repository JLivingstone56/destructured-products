import { intro } from "./intro";
import { callOptions } from "./callOptions";
import { whatIsSP } from "./whatIsSP";
import { putOptions } from "./putOptions";
import { coupon } from "./coupon";

interface TextDictionary {
    [key: string]: string;
  }

export const allText: TextDictionary = { ...intro, ...whatIsSP, ...callOptions, ...putOptions, ...coupon };
