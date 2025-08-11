import {
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      shadows: {
        custom: {
          value: {
            _light: "0 32px 56px 0 rgba(0, 0, 0, 0.25)",
            _dark: "0 32px 56px 0 rgba(166, 203, 95, 0.25)",
          },
        },
      },
      colors: {
        brand: {
          50: { value: "#e6f2ff" },
          200: { value: "#bfdeff" },
          300: { value: "#99caff" },
          301: { value: "#333640" },
          302: { value: "#4D4848" },
          303: { value: "#a6cb5f" },
          304: { value: "#0e0d0dff" },
          950: { value: "#001a33" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)