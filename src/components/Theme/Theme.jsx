import {
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { _light: "{colors.white}", _dark: "{colors.brand.304}" }, // Custom dark background
          },
          subtle: {
            value: { _light: "{colors.gray.50}", _dark: "#1a1a1a" }, // Custom dark subtle background
          },
          muted: {
            value: { _light: "{colors.gray.100}", _dark: "#262626" }, // Custom dark muted background
          },
        },
        fg: {
          DEFAULT: {
            value: { _light: "{colors.black}", _dark: "#e5e5e5" }, // Custom dark text color
          },
          muted: {
            value: { _light: "{colors.gray.600}", _dark: "#a3a3a3" }, // Custom dark muted text
          },
        },
        border: {
          DEFAULT: {
            value: { _light: "{colors.gray.200}", _dark: "#404040" }, // Custom dark border
          },
        },
        brand: {
          solid: { value: "{colors.brand.303}" },
          contrast: { value: "{colors.brand.100}" },
          fg: { value: "{colors.brand.700}" },
          muted: { value: "{colors.brand.100}" },
          subtle: { value: "{colors.brand.200}" },
          emphasized: { value: "{colors.brand.300}" },
          focusRing: { value: "{colors.brand.500}" },
        },
      },
    },
    tokens: {

      colors: {
        brand: {
          50: { value: "#e6f2ff" },
          200: { value: "#bfdeff" },
          300: { value: "#99caff" },
          301: { value: "#333640" },
          302: { value: "#4D4848" },
          303: { value: "#a6d900" },
          304: { value: "#0e0d0dff" },
          305: {value: "#a4cf4e"},
          950: { value: "#001a33" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)