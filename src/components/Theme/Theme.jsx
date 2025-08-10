import { 
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react"

const config = defineConfig({
    theme: {
      tokens: {
        colors: {
          brand: {
            50: { value: "#e6f2ff" },
            200: { value: "#bfdeff" },
            300: { value: "#99caff" },
            // ...
            950: { value: "#001a33" },
          },
        },
      },
    },
  })

export const system = createSystem(defaultConfig, config)