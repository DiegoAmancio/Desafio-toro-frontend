import { Box, Typography } from '@mui/material';

export const TitleValueCard = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <Typography>{title}</Typography>
    <Typography>{value}</Typography>
  </Box>
);
