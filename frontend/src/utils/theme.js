import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme(
    {
        "palette": {
            "common": { "black": "#000", "white": "#fff" },
            "background": { "paper": "#fff", "default": "#200F38" },
            "primary": { "light": "#391a64", "main": "#200F38", "dark": "#10071b", "contrastText": "#fff" },
            "secondary": { "light": "#ff4a74", "main": "#FF265A", "dark": "#e41949", "contrastText": "#fff" },
            "error": { "light": "#e57373", "main": "#f44336", "dark": "#d32f2f", "contrastText": "#fff" },
            "text": {
                "primary": "rgba(0, 0, 0, 0.87)", "secondary": "rgba(0, 0, 0, 0.54)",
                "disabled": "rgba(0, 0, 0, 0.38)", "hint": "rgba(0, 0, 0, 0.38)"
            }
        }
    }
);