import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "chore",
        "config",
        "ci",
        "docs",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
  },
};

module.exports = Configuration;
