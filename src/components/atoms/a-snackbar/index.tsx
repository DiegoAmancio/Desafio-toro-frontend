import { useDispatch, useSelector } from 'react-redux';

import { snackbarUpdate } from '@/store/actions/snackbar';
import { IRootState } from '@/store/reducers';
import { Snackbar, Alert } from '@mui/material';

export function MuiSnackBar() {
  const { open, message, severity } = useSelector(
    (state: IRootState) => state.snackbar,
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(snackbarUpdate({ open: false }));
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        color={severity}
        severity={severity}
        sx={{ width: '100%' }}
      >
        warning: {message}
      </Alert>
    </Snackbar>
  );
}
