const { join } = require("path");
const { DeploymentBuilder } = require("@edgio/core/deploy");

const appDir = process.cwd();

module.exports = async function build() {
  const builder = new DeploymentBuilder();
  builder.clearPreviousBuildOutput();
  let command = "npx next build";
  await builder.exec(command);
  builder.addJSAsset(join(appDir, ".next", "standalone"), "dist");
  builder.addJSAsset(
    join(appDir, ".next", "static"),
    join("dist", ".next", "static")
  );
  builder.addJSAsset(join(appDir, "public"), join("dist", "public"));
  await builder.build();
};
