import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Argentum Sans', sans-serif`,
  },
  styles: {
    global: (props:any) => ({
      body: {
        bg: mode("#f1f1f1","red")(props),
      }
    })
  },
  colors: {
    brand: {
      100: "#efefef"
    }
  },
  components: {
    Button: {
      variants: {
        tagButton: {
          rounded:'full',
          bg: "white",
          border: '1px solid',
          borderColor: '#4d4c52',
          textColor: '#0f0e14',
          fontSize: "11pt",
          fontWeight: '600',
          paddingX: "35px",
          _hover: { borderColor: "#1e1d25" },
          _active: { bg: "#f1f1f1" },
        },
        tagButtonActive: {
          rounded:'full',
          bg: "#17161e",
          border: '2px solid',
          borderColor: '#0c0b13',
          textColor: '#ededed',
          fontSize: "11pt",
          fontWeight: '600',
          paddingX: "35px",
          _active: { bg: "#0d0c14" },
        },
      }
    }
  }
})
