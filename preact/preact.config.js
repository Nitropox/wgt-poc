import { resolve } from "path";

export default {
    /**
     * Function that mutates the original webpack config.
     * Supports asynchronous changes when a promise is returned (or it's an async function).
     *
     * @param {object} config - original webpack config.
     * @param {object} env - options passed to the CLI.
     * @param {WebpackConfigHelpers} helpers - object with useful helpers for working with the webpack config.
     * @param {object} options - this is mainly relevant for plugins (will always be empty in the config), default to an empty object
     **/
    webpack(config, env, helpers, options) {
        config.devtool = "none";
        config.module.rules = config.module.rules.map(rule => {
          if (".css".match(rule.test) && "use" in rule) { //eslint-disable-line
                rule.use[0] = "style-loader"; // replace extract css with style-loader
                return rule;
            }
            return rule;
        });
        config.output.filename = pathData =>
            pathData.chunk.name === "bundle" ? "widget.js" : "[name].js";
    }
};
