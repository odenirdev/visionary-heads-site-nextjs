import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    backgroundColor: "$gray900",
    color: "$gray100",
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },

  ".nft-art-gen-section button, .nft-art-gen-section select": {
    background: "#f33312",
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "#ffffff",
    fontSize: 16,
    borderRadius: 8,
    paddingInline: 32,
    paddingBlock: 8,
    lineHeight: "100%",
    height: 42,
    border: "none",
  },
});
