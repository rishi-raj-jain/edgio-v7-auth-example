import { Router } from "@edgio/core/router";

export default new Router().match("/:path*", ({ renderWithApp }) => {
  renderWithApp();
});
