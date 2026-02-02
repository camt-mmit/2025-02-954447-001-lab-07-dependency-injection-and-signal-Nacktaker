import { InputModel, SectionModel, SectionData } from './types';

/**
 * สร้าง input 1 ช่อง
 */
export function createInput(value: string = ''): InputModel {
  return { value };
}
/**
 * สร้าง Section 1 อัน (มีหลาย input)
 */
export function createSection(name: string = '', values?: string[]): SectionModel {
  return {
    name,
    inputs: values ? values.map(v => createInput(v)) : [createInput()]
  };
}
/**
 * เพิ่ม input ให้ section
 */
export function addInputToSection(section: SectionModel): SectionModel {
  return {
    ...section,
    inputs: [...section.inputs, createInput()]
  };
}

/**
 * ลบ input ตาม index
 */
export function removeInputFromSection(section: SectionModel, index: number): SectionModel {
  return {
    ...section,
    inputs: section.inputs.filter((_, i) => i !== index)
  };
}

/**
 * สร้างข้อมูล SectionData ทั้งหมด (array ของ section)
 */
export function createSectionData(data?: { name: string; values: string[] }[]): SectionData {
  return data?.map(s => createSection(s.name, s.values)) ?? [createSection()];
}

/**
 * เพิ่ม 1 section ใน SectionData
 */
export function addSection(data: SectionData): SectionData {
  return [...data, createSection()];
}

/**
 * ลบ section ตาม index
 */
export function removeSection(data: SectionData, index: number): SectionData {
  return data.filter((_, i) => i !== index);
}

/**
 * คำนวณผลรวมของ input value
 */
export function calcResult(section: SectionModel): number {
  return section.inputs.reduce(
    (sum, input) => sum + (Number(input.value) || 0),
    0
  );
}
