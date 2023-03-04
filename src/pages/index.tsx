import { GoogleButton } from '@/components/atoms/a-google-button';
import { Box } from '@mui/material';

export default function Index() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="2rem 1rem"
      minHeight="100vh"
    >
      <GoogleButton />
    </Box>
  );
}
