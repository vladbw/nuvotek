import { ILearningModule } from "./ModuleList";

export type ModuleSet = [ILearningModule, ILearningModule, ILearningModule];

export const MODULE_SETS: Record<number, ModuleSet> = {
  0: [
    {
      title: "module_1_title",
      subTitle: "module_1_subtitle",
      learningOutcomes: [
        "module_1_outcome_1",
        "module_1_outcome_2",
        "module_1_outcome_3",
        "module_1_outcome_4",
        "module_1_outcome_5",
        "module_1_outcome_6",
        "module_1_outcome_7",
        "module_1_outcome_8",
        "module_outcome_others"
      ]
    },
    {
      title: "module_2_title",
      subTitle: "module_2_subtitle",
      learningOutcomes: [
        "module_2_outcome_1",
        "module_2_outcome_2",
        "module_2_outcome_3",
        "module_2_outcome_4",
        "module_2_outcome_5",
        "module_2_outcome_6",
        "module_2_outcome_7",
        "module_2_outcome_8",
        "module_outcome_others"
      ]
    },
    {
      title: "module_3_title",
      subTitle: "module_3_subtitle",
      learningOutcomes: [
        "module_3_outcome_1",
        "module_3_outcome_2",
        "module_3_outcome_3",
        "module_3_outcome_4",
        "module_3_outcome_5",
        "module_3_outcome_6",
        "module_3_outcome_7",
        "module_3_outcome_8",
        "module_outcome_others"
      ]
    }
  ],
  1: [
    {
      title: "consultancy_package_starter_title",
      learningOutcomes: [
        "consultancy_package_starter_outcome_1",
        "consultancy_package_starter_outcome_2",
        "consultancy_package_starter_outcome_3",
        "consultancy_package_starter_outcome_4",
        "consultancy_package_starter_outcome_5",
        "consultancy_package_starter_outcome_6",
        "consultancy_package_starter_outcome_7",
        "module_outcome_others"
      ]
    },
    {
      title: "consultancy_package_pro_title",
      learningOutcomes: [
        "consultancy_package_pro_outcome_1",
        "consultancy_package_pro_outcome_2",
        "consultancy_package_pro_outcome_3",
        "consultancy_package_pro_outcome_4",
        "consultancy_package_pro_outcome_5",
        "consultancy_package_pro_outcome_6",
        "consultancy_package_pro_outcome_7",
        "module_outcome_others"
      ]
    },
    {
      title: "consultancy_package_exclusive_title",
      learningOutcomes: [
        "consultancy_package_exclusive_outcome_1",
        "consultancy_package_exclusive_outcome_2",
        "consultancy_package_exclusive_outcome_3",
        "consultancy_package_exclusive_outcome_4",
        "consultancy_package_exclusive_outcome_5",
        "consultancy_package_exclusive_outcome_6",
        "consultancy_package_exclusive_outcome_7",
        "module_outcome_others"
      ]
    }
  ],
  2: [
    {
      title: "consultancy_apply_uk_title",
      headerFlag: "🇬🇧",
      learningOutcomes: [
        "consultancy_apply_uk_outcome_1",
        "consultancy_apply_uk_outcome_2",
        "consultancy_apply_uk_outcome_3",
        "consultancy_apply_uk_outcome_4",
        "consultancy_apply_uk_outcome_5",
        "consultancy_apply_uk_outcome_6",
        "consultancy_apply_uk_outcome_7",
        "module_outcome_others"
      ]
    },
    {
      title: "consultancy_apply_spain_title",
      headerFlag: "🇪🇸",
      learningOutcomes: [
        "consultancy_apply_spain_outcome_1",
        "consultancy_apply_spain_outcome_2",
        "consultancy_apply_spain_outcome_3",
        "consultancy_apply_spain_outcome_4",
        "consultancy_apply_spain_outcome_5",
        "consultancy_apply_spain_outcome_6",
        "consultancy_apply_spain_outcome_7",
        "module_outcome_others"
      ]
    },
    {
      title: "consultancy_apply_italy_title",
      headerFlag: "🇮🇹",
      learningOutcomes: [
        "consultancy_apply_italy_outcome_1",
        "consultancy_apply_italy_outcome_2",
        "consultancy_apply_italy_outcome_3",
        "consultancy_apply_italy_outcome_4",
        "consultancy_apply_italy_outcome_5",
        "consultancy_apply_italy_outcome_6",
        "consultancy_apply_italy_outcome_7",
        "module_outcome_others"
      ]
    }
  ]
};

export const HOMEPAGE_MODULE_SET_INDEX = 0;
export const CONSULTANCY_MODULE_SET_INDEXES = [1, 2] as const;
