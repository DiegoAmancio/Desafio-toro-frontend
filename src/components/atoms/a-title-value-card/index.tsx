import { Box, Typography } from '@mui/material';

export function TitleValueCard({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography>{title}</Typography>
      <Typography>{value}</Typography>
    </Box>
  );
}
