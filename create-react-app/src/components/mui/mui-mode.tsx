
import { Typography, useTheme } from "@mui/material"


export const MuiMode = () => {
    const theme=useTheme()
  return (
    <div>
        <Typography component='h1'>{`${theme.palette.mode}`}</Typography>
    </div>
  )
}
