import { existsSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const compiledDir = path.join(
  process.cwd(),
  "node_modules",
  "next",
  "dist",
  "compiled",
);

if (existsSync(compiledDir)) {
  for (const entry of readdirSync(compiledDir)) {
    const entryPath = path.join(compiledDir, entry);

    if (!statSync(entryPath).isDirectory()) {
      continue;
    }

    const packageJsonPath = path.join(entryPath, "package.json");
    const indexPath = path.join(entryPath, "index.js");

    if (existsSync(packageJsonPath) || existsSync(indexPath)) {
      continue;
    }

    const rootJsFiles = readdirSync(entryPath).filter((name) => name.endsWith(".js"));

    if (rootJsFiles.length !== 1) {
      continue;
    }

    const mainFile = rootJsFiles[0];

    writeFileSync(
      packageJsonPath,
      `${JSON.stringify(
        {
          name: entry,
          private: true,
          main: `./${mainFile}`,
        },
        null,
        2,
      )}\n`,
    );

    writeFileSync(indexPath, `module.exports = require('./${mainFile}');\n`);
  }
}
