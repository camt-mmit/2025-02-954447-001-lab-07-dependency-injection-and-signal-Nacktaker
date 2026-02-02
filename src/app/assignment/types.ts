export interface InputModel {
  value: string;          // input ทุกช่องคือ string เสมอ
}

export interface SectionModel {
  name: string;           // ชื่อ section
  inputs: InputModel[];   // array ของ input
}

// SectionData = array ของหลาย section
export type SectionData = SectionModel[];
